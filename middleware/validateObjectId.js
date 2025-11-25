const mongoose = require('mongoose');
module.exports = (req, res, next) => {
  const id = req.params.id || req.params.userId;
  if (!id) return next();
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid ID' });
  }
  next();
};
