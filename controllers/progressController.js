const Progress = require('../models/Progress');

exports.getUserProgress = async (req, res, next) => {
  try {
    const progress = await Progress.find({ user: req.params.userId }).sort({ date: -1 });
    res.json(progress);
  } catch (err) {
    next(err);
  }
};

exports.createProgress = async (req, res, next) => {
  try {
    const entry = new Progress({
      user: req.params.userId,
      ...req.body
    });

    await entry.save();
    res.status(201).json(entry);
  } catch (err) {
    next(err);
  }
};
