const dotenv = require('dotenv');
dotenv.config(); // MUST come before using process.env

const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// DB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.error(err));


  app.get('/', (req, res) => {
  res.send('✅ Backend is running and MongoDB is connecting...');
});
