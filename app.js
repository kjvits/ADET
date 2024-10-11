require('dotenv').config(); // Load environment variables
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Import routes
const authRoutes = require('./routes/authRoutes');
const userRoute = require('./routes/userRoute');
const deptRoute = require('./routes/deptRoute');
const courseRoute = require('./routes/courseRoute');
const studentRoute = require('./routes/studentRoute');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Home route
app.get('/', (req, res) => {
  res.send("Khurt Vita, NCF");
});

// API routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoute);
app.use('/api/dept', deptRoute);
app.use('/api/course', courseRoute);
app.use('/api/student', studentRoute);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start the server
const PORT = process.env.PORT || 5000; // Use PORT from environment or default to 5000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
