const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    courseName:{
        type: String,
        required: true
    },
    courseCategory:{
        type: String,
        required: true
    },
    courseDescription:{
        type: String,
        required: true
    },
    courseCover:{
        data: Buffer,
        contentType: String,
        //required: true
    },
    sutendsEnrolled:{
        type: Number,
        //required: true
    }
});

module.exports = mongoose.model('courses', courseSchema);