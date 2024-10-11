const express = require('express');
const bodyParser = require('body-parser');


const authRoutes = require('./routes/authRoutes');
const userRoute = require('./routes/userRoute');
const deptRoute = require('./routes/deptRoute');
const courseRoute = require('./routes/courseRoute');
const studentRoute = require('./routes/studentRoute');

const app = express();
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());

app.get('/', (req, res) => {
  res.send("Khurt Vita, NCF");
});

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoute);
app.use('/api/dept', deptRoute);
app.use('/api/course', courseRoute);
app.use('/api/student', studentRoute);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});