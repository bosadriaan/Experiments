const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

const port = 5000;

app.use(cors());
app.use(express.json());


app.post('/api/multiply', async (req, res) => {
  const { a, b } = req.body;

  try {
    const response = await axios.post('http://localhost:5001/multiply', { a, b });
    res.json({ result: response.data.result });
} catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
