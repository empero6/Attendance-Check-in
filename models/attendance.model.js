const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const attendanceSchema = new Schema({
  pantherId: { type: Number, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  department: { type: String, required: true },
  level: { type: String, required: true },
  campus: { type: String, required: true },
  degree: { type: String, required: true },
  email: { type: String, required: true },
  college: { type: String, required: true },
  year: { type: Number, required: true },
}, {
  timestamps: true,
});

const Attendance = mongoose.model('Attendance', attendanceSchema);

module.exports = Attendance;