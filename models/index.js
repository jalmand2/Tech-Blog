const Comment = require('./comment');
const User = require('./user');
const Post = require('./post');

Post.hasMany(Comment, {
    foreignKey: 'post_id'
});
User.hasMany(Post, {
    foreignKey: 'user_id'
});
User.hasMany(Comment, {
    foreignKey: 'user_id'
});
Post.belongsTo(User, {
    foreignKey: 'user_id'
});
Comment.belongsTo(User, {
    foreignKey: 'user_id'
});
Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});

module.exports = { Comment, User, Post };