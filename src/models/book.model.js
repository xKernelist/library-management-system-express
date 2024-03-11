"use strict";

const { Sequelize, DataTypes } = require('sequelize')

const sequelize = new Sequelize('sqlite:./db.sqlite3')

const Book = sequelize.define('books', {

    title: {
        type: DataTypes.STRING,
        allowNull: false
    },

    author: {
        type: DataTypes.STRING,
        allowNull: false
    },

    ISBN: {
        type: DataTypes.STRING,
        allowNull: false
    },

    genre: {
        type: DataTypes.STRING,
        allowNull: false
    },

    publicationYear: {
        type: DataTypes.DATE,
        allowNull: false
    },

    image: {
        type: DataTypes.TEXT,
        allowNull: false
    },

})


sequelize.authenticate()
    .then(() => console.log('* DB Connected *'))
    .catch(() => console.log('* DB Not Connected *'))

module.exports = Book