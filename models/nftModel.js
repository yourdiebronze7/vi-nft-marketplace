const mongoose = require('mongoose');

const nftSchema = new mongoose.Schema({
  name: { type: String, required: true },
  creator: { type: String, required: true },
  price: { type: Number, required: true },
  imageUrl: { type: String, required: true },
  owner: { type: String, required: false },
});

module.exports = mongoose.model('NFT', nftSchema);