const express = require('express');
const router = express.Router();

// Các route cho NFT

router.get('/', (req, res) => {
  res.send('Danh sách NFT');
});

module.exports = router;
