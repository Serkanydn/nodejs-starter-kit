const Mongoose = require('mongoose');

const HomeSchema = new Mongoose.Schema(
  {
    name: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = Mongoose.model('home', HomeSchema);
