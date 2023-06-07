require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const userRoutes = require("./routes/userRoutes")
const errorHandler = require("./middleware/errorMiddleware")

const app = express();


///middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

//cors - allows web browsers to make cross-origin requests, i.e., requests from one domain to another domain
app.use(
   cors({
      origin: ["http://localhost:3000"], //requests originating from http://localhost:3000 are allowed to access the server's resources
      credentials: true, //This indicates that the server is willing to accept and send cookies as part of cross-origin requests.
   })
);
app.use((req, res, next) => {
   console.log(req.path, req.method);
   next();
});

//routes
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
   res.send("Home page");
});



//error handler middleware
app.use(errorHandler);


//listen to a given port or if its not given then to 5000
const PORT = process.env.PORT || 5000;
//connect to database
mongoose
   .connect(process.env.MONGO_URI)
   .then(() => {
      app.listen(PORT, () => {
         console.log(`Server running on ${PORT}`);
      });
   })
   .catch((error) => {
      console.log(error);
   });
