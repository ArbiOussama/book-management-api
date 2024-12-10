const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Book = sequelize.define('Book', {
    title: { type: DataTypes.STRING, allowNull: false },
    author: { type: DataTypes.STRING, allowNull: false },
    publishedDate: { type: DataTypes.DATE, allowNull: false },
    numberOfPages: { type: DataTypes.INTEGER, allowNull: false },
});

module.exports = Book;