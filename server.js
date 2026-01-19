const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/database');
const recipeRoutes = require('./routes/recipeRoutes');

dotenv.config();
connectDB();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/recipes', recipeRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Recipe API' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});