const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Kết nối MongoDB thành công!');
  } catch (error) {
    console.error('Kết nối MongoDB thất bại:', error);
    process.exit(1);
  }
};

module.exports = connectDB;