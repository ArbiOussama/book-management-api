const express = require('express');
const bodyParser = require('body-parser');
const booksRouter = require('./routes/books');
const authRouter = require('./routes/auth');
const sequelize = require('./config/db');

const app = express();
app.use(bodyParser.json());

// Routes
app.use('/api/books', booksRouter);
app.use('/api/auth', authRouter);

app.use((req, res) => {
    res.status(404).json({
        error: 'Invalid route',
    });
});

// Database initialization
(async () => {
    await sequelize.sync({ force: true });
    console.log('Database synced!');
})();

module.exports = app;
