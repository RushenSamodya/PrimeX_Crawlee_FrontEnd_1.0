const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema(
   {
      name: {
         type: String,
         require: [true, "Please add a name"],
      },
      email: {
         type: String,
         require: [true, "Please add an email"],
         unique: true,
         trim: true,
      },
      password: {
         type: String,
         required: [true, "Please add a password"],
      },
      photo: {
         type: String,
         // required: [true, "Please add a photo"],
         default: "",
      },
      phone: {
         type: String,
         default: "",
      },
      role: {
         type: String,
         required: true,
         default: "student",
         //!! student(default), teacher, admin and suspended
      },
      isVerified: {
         type: Boolean,
         default: false,
      },
   },
   {
      timestamps: true,
      minimize: false,
   }
);

//to encrypt password before saving to DB,
//calls a middleware function before the save method is executed on a user object.
userSchema.pre("save", async function (next) {

   //checks whether the password field of the user object has been modified
   if (!this.isModified("password")) { 
      return next();
   }

   //hash user's password using a salt value
   const salt = await bcrypt.genSalt(10); 
   const hashedPassword = await bcrypt.hash(this.password, salt);

   this.password = hashedPassword;
   
   next();
});

//exports the User model that is defined using the mongoose library and the userSchema schema
const User = mongoose.model("User", userSchema);
module.exports = User;
