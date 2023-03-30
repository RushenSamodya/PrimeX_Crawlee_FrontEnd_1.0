const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const CourseRoutes = require('./Routes/CoursesRoutes');
const cors = require('cors');

const APP = express();

//App Middleware
APP.use(bodyParser.json());
APP.use(cors());

//Route Middleware
APP.use(CourseRoutes);

const PORT = 8000;
const DB_URL = 'mongodb+srv://Erandhi_99:exo99717@courses.h3sja9l.mongodb.net/Courses?retryWrites=true&w=majority';

mongoose.connect(DB_URL)
.then(() =>{
    console.log('DB Connected.');
})
.catch((err) => console.log('DB connection error.', err));

APP.listen(PORT, () =>{
    console.log(`App is running on ${PORT}`);
});