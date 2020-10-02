const router = require('express').Router();
let Attendance = require('../models/attendance.model');

router.route('/').get((req, res) => {
  Attendance.find()
    .then(attendances => res.json(attendances))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const pantherId = Number(req.body.pantherId);
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const department = req.body.department;
  const level = req.body.level;
  const campus = req.body.campus;
  const degree = req.body.degree;
  const email = req.body.email;
  const college = req.body.college;
  const year = Number(req.body.year);

  const newAttendance = new Attendance({
    pantherId,
    firstName,
    lastName,
    department,
    level,
    campus,
    degree,
    email,
    college,
    year,

  });

  newAttendance.save()
  .then(() => res.json('Attendance added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Attendance.findById(req.params.id)
    .then(attendance => res.json(attendance))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Attendance.findByIdAndDelete(req.params.id)
    .then(() => res.json('Attendance deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Attendance.findById(req.params.id)
    .then(attendance => {
      attendance.pantherId = Number(req.body.pantherId);
      attendance.firstName = req.body.firstName;
      attendance.lastName = req.body.lastName;
      attendance.department = req.body.department;
      attendance.level = req.body.level;
      attendance.campus = req.body.campus;
      attendance.degree = req.body.degree;
      attendance.email = req.body.email;
      attendance.college = req.body.college;
      attendance.year = Number(req.body.year);


      attendance.save()
        .then(() => res.json('Attendance updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;