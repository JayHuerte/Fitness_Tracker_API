require('dotenv').config();
require('express-async-errors');
const express = require('express');
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./config/swagger");
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const workoutRoutes = require('./routes/workoutRoutes');
const exerciseRoutes = require('./routes/exerciseRoutes');
const progressRoutes = require('./routes/progressRoutes');
const { errorHandler } = require('./middleware/errorHandler');

const app = express();
const PORT = process.env.PORT || 3000;

// Swagger docs
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => res.send('Fitness Tracker API is running'));

app.use('/api/v1/users', userRoutes);
app.use('/api/v1/workouts', workoutRoutes);
app.use('/api/v1/exercises', exerciseRoutes);
app.use('/api/v1/progress', progressRoutes);

app.use(errorHandler);

async function start() {
  try {
    await connectDB(process.env.MONGODB_URI);
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
      console.log(`Swagger docs → http://localhost:${PORT}/api-docs`);
    });
  } catch (err) {
    console.error('Failed to start app:', err);
    process.exit(1);
  }
}
start();