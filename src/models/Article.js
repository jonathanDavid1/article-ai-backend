const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Article = sequelize.define('article', {
    url: {
        type: DataTypes.STRING,
        allowNull: false
    },
    summary: {
        type: DataTypes.TEXT,
        allowNull: true
    }
   
});

module.exports = Article;