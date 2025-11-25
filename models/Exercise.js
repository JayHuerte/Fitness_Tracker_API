const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
  workout: { type: mongoose.Schema.Types.ObjectId, ref: 'Workout', required: true },
  name: { type: String, required: true },
  sets: Number,
  reps: Number,
  weight: Number
}, { timestamps: true });

module.exports = mongoose.model('Exercise', exerciseSchema);
