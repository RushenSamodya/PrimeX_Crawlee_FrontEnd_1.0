const express = require('express');
const Courses = require('../Database/CoursesDB');
const multer = require('multer');
const fs = require('fs');

const APIrouter = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "CourseCovers");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

//Save Courses
APIrouter.post('/course/save', upload.single("Image"), (req,res) =>{
    const newCourse = new Courses({
      courseName: req.body.courseName,
      courseCategory: req.body.courseCategory,
      courseDescription: req.body.courseDescription,
      courseCover: {
        data: fs.readFileSync("CourseCovers/" + req.file.filename),
        contentType: "image/*",
      }
    });
    newCourse.save()
    .then(() =>{
        return res.status(200).json({
            success:"Post Saved Successfully"
        });
    })
    .catch((err) =>{
        return res.status(400).json({
            error:err
        });
    });
});

//Get Courses
APIrouter.get('/courses', (req, res) => {
    Courses.find().exec()
      .then(courses => {
        return res.status(200).json({
          success: true,
          existingCourses: courses
        });
      })
      .catch(err => {
        return res.status(400).json({
          error: err
        });
      });
  });

  //Update Course
  APIrouter.put('/course/update/:id', (req, res) => {
    Courses.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }).exec()
      .then(() => {
        return res.status(200).json({
          success: 'Updated successfully'
        });
      })
      .catch(err => {
        return res.status(400).json({
          error: err
        });
      });
  });

  //Delete Course
  APIrouter.delete('/course/delete/:id', (req, res) => {
    Courses.findByIdAndRemove(req.params.id)
      .then(deletedCourse => {
        return res.json({
          message: "Delete Successful",
          deletedCourse
        });
      })
      .catch(err => {
        return res.status(400).json({
          message: "Delete Unsuccessful.",
          err
        });
      });
  });
  
//Get a specific Course
APIrouter.get("/course/:id", (req, res) => {
  let courseId = req.params.id;
  Courses.findById(courseId)
    .then(course => {
      return res.status(200).json({
        success: true,
        course
      });
    })
    .catch(err => {
      return res.status(400).json({
        success: false,
        error: err
      });
    });
});


module.exports = APIrouter;