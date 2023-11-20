console.log("The Form");
const express = require('express');
const errorHandler = require('./middleWare/errorHandler');
const connectDB = require('./config/dbConnection');
const cors = require('cors');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose'); // Add this line
const app = express();
const Contact = require('./models/contactModel')
connectDB();
app.use(cors());
const port = process.env.PORT || 5000;
app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);

app.get('/api/contacts', async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
