const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.static("public"));
app.get('/weather', async (req, res) => {
  const city = req.query.q;
  const apiKey = process.env.OPENWEATHER_API_KEY;
  console.log(apiKey)
  console.log(req.query.q )
  if (!apiKey) {
    return res.status(500).json({ error: "API key missing in backend" });
  }

  try {
    const response = await axios.get(
      'https://api.openweathermap.org/data/2.5/weather',
      {
        params: {
          q:city,
          appid:apiKey,
        },
      }
    );
    res.json(response.data);
  } catch (err) {
    console.error(err.message);
    
    // console.error(err.response?.data || err.message || err);

    res.status(500).json({ error: "Failed to fetch weather data" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
