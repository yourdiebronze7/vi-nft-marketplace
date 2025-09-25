const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Các route khác

// Handle 404 not found
app.use((req, res) => {
  res.status(404).json({ message: 'Resource not found', method: req.method, url: req.originalUrl, timestamp: new Date() });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});