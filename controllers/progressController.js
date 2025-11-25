const Progress = require('../models/Progress');

exports.getAllProgress = async (req, res, next) => {
  try {
    const progress = await Progress.find().sort({ createdAt: -1 });
    res.json(progress);
  } catch (err) {
    next(err);
  }
};

exports.getProgressById = async (req, res, next) => {
  try {
    const prog = await Progress.findById(req.params.id);
    if (!prog) return res.status(404).json({ message: 'Progress not found' });
    res.json(prog);
  } catch (err) {
    next(err);
  }
};

exports.createProgress = async (req, res, next) => {
  try {
    const prog = new Progress(req.body);
    await prog.save();
    res.status(201).json(prog);
  } catch (err) {
    next(err);
  }
};

exports.updateProgress = async (req, res, next) => {
  try {
    const prog = await Progress.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!prog) return res.status(404).json({ message: 'Progress not found' });
    res.json(prog);
  } catch (err) {
    next(err);
  }
};

exports.deleteProgress = async (req, res, next) => {
  try {
    const prog = await Progress.findByIdAndDelete(req.params.id);
    if (!prog) return res.status(404).json({ message: 'Progress not found' });
    res.json({ message: 'Progress deleted' });
  } catch (err) {
    next(err);
  }
};
