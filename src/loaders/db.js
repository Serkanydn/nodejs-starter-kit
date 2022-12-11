const mongoose = require('mongoose');
const db = mongoose.connection;

db.once('open', () => {
  console.log('We are connected to mongodb!');
});

const connectDatabase = async () => {
  const PORT = process.env.DB_PORT || 3000;
  await mongoose.connect(
    `mongodb://${process.env.DB_HOST}:${PORT}/${process.env.DB_NAME}`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
};

module.exports = connectDatabase;
