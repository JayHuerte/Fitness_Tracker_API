const mongoose = require('mongoose');
module.exports = async function connectDB(mongoUri) {
  if (!mongoUri) throw new Error('MONGODB_URI not provided');
  await mongoose.connect(mongoUri);
  console.log('✅ Connected to MongoDB');
};
