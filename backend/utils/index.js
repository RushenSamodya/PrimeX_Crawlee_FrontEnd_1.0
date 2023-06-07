const jwt = require("jsonwebtoken");

//to generate the token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });
 };

 module.exports = {
    generateToken
 }