const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema({
like: {
      type: Boolean,
      required : true
   },   
post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post',
      required : true
   },
user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required : true
   }
})

const Like = mongoose.model("Like", likeSchema)
module.exports = Like
