const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');
const Article = require('./Article');


const Chat = sequelize.define('chat', {
    question: {
        type: DataTypes.STRING,
        allowNull: false
    },
    answer: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});

module.exports = Chat;