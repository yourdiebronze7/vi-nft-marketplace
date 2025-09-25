const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Chào mừng đến với Vi NFT Marketplace!');
});

app.listen(PORT, () => {
  console.log(`Máy chủ đang chạy trên http://localhost:${PORT}`);
});
