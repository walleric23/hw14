// requires models
const User = require('./User');
const Posting = require('./Posting');
const Comment = require('./Comment');
// Users have several posts
User.hasMany(Posting, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});
// postings belong to users
Posting.belongsTo(User, {
  foreignKey: 'user_id',
});
// postings have comments
Posting.hasMany(Comment, {
  foreignKey: 'post_id',
});
// comments are from users
Comment.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Posting, Comment };
