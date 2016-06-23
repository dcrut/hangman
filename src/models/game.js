import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  name: String,
  heads: { type: Number, default: 0 },
  tails: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Game', taskSchema);
