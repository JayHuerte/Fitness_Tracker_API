const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, default: Date.now },
  weight: Number,
  bodyFat: Number,
  notes: String
}, { timestamps: true });

module.exports = mongoose.model('Progress', progressSchema);
