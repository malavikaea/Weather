# 🌤️ Weather App

A simple weather forecast web application that fetches real-time weather data using the **OpenWeatherMap API** and displays it with dynamic UI — including emojis, temperature-based background gradients, and more!

> ✅ Built with HTML, CSS, JavaScript, Node.js, and Express  
> 🚀 Deployed on Render  
> 🔐 API key securely stored in environment variables  

---

## 🔗 Live Demo

👉 [Click to visit the live app](https://weather-zl1k.onrender.com/)  

---

## 🧠 Features

- 🌍 Search by city name
- 🌡️ Displays temperature, humidity, and description
- 🧠 Uses weather condition ID to show appropriate emoji
- 🎨 Dynamic background changes based on temperature
- 🔄 Fully responsive and minimal UI
- 🚀 Hosted backend + frontend on Render
- 🔐 Environment-secured API key

---

## 📦 Tech Stack

| Layer       | Tech                     |
|-------------|--------------------------|
| Frontend    | HTML, CSS, JavaScript    |
| Backend     | Node.js, Express         |
| API         | [OpenWeatherMap](https://openweathermap.org/api) |
| Hosting     | [Render](https://render.com/)                   |

---

## ⚙️ How It Works

1. User enters a city
2. Frontend makes a `GET /weather?q=City` request to backend
3. Backend fetches data from OpenWeatherMap API
4. Frontend displays results with weather emoji + styles

---

## 🚀 How to Run Locally

```bash
git clone https://github.com/yourusername/Weather.git
cd Weather
npm install
