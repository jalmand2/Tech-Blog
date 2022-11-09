const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
    {
        id: {
            type: DataTypes.INTEGER, 
            allowNull: false, 
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.String,
            allowNull: false,
        },
        content: {
            type: DataTypes.String,
            allowNull: false, 
        }
    }
)

module.exports = Post;