const express = require('express');
const app = express();

app.use(express.json());

// Các route khác

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
