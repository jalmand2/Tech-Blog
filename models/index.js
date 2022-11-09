const Comment = require('./comment');
const Home = require('./home');
const User = require('./user');
const Post = require('./post');

Post.hasMany(Comment, {

})
module.exports = { Comment, Home, User, Post };