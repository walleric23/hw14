const User = require('./User');
const Posting = require('./Posting');
const Comment = require('./Comment');

User.hasMany(Posting, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Posting.belongsTo(User, {
  foreignKey: 'user_id',
});

Posting.hasMany(Comment, {
  foreignKey: 'post_id',
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Posting, Comment };
