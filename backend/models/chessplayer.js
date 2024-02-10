const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chessSchema = new Schema({
  id: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  perfs: {
    classical: {
      rating: {
        type: [[Number]],
        required: true
      },
      progress: {
        type: Number,
        required: true
      }
    }
  },
  patron: {
    type: Boolean,
    required: true
  }
});

const chessModel = mongoose.model('chess', chessSchema);

module.exports={chessModel}