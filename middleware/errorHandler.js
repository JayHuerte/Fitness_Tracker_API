function errorHandler(err, req, res, next) {
  console.error(err);
  const status = err.status || 500;
  const message = err.message || 'Internal Server Error';
  const details = process.env.NODE_ENV === 'production' ? undefined : err.stack;
  res.status(status).json({ message, details });
}
module.exports = { errorHandler };
