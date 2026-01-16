# youtube-data-analytics-dashboard
Production-ready YouTube analytics dashboard using React and Node.js with optimized YouTube Data API quota usage, caching, and robust HTTP error handling.

# YouTube Data Analytics Dashboard

A production-ready YouTube analytics dashboard built using React and Node.js, designed to track creator engagement metrics via the YouTube Data API v3 with optimized API quota usage, caching strategies, and robust HTTP error handling.

This project demonstrates real-world frontend–backend integration, API gateway design, and reliability-focused engineering practices commonly used in large-scale analytics platforms.

---

## ✨ Key Features

### 📊 Analytics & Insights
- Fetches real-time YouTube channel engagement metrics:
  - Subscriber count
  - Total views
  - Video count
- Designed to be extensible for likes, comments, watch time, and playlist analytics

### ⚙️ Backend API Abstraction
- Node.js + Express backend acts as an API gateway
- Frontend never calls the YouTube API directly
- Centralized request handling and response normalization

### 🚦 API Quota Optimization
- In-memory caching layer to reduce redundant YouTube API calls
- TTL-based cache invalidation
- Redis-ready architecture for horizontal scaling

### 🛡️ Robust Error Handling
- Graceful handling of HTTP status codes:
  - 400, 401, 403, 404, 429, 5xx
- Centralized error-handling middleware
- User-safe error responses

### 🧱 Clean & Scalable Architecture
- Clear separation of concerns:
  - Controllers
  - Services
  - Routes
  - Middleware
- Decoupled frontend and backend
- Production-grade folder structure

---

## 🧠 Architecture Overview

React Client
|
v
Node.js API Layer (Express)
|
v
Caching Layer (In-Memory / Redis-ready)
|
v
YouTube Data API v3

## 📁 Project Structure
youtube-data-analytics-dashboard/
├── client/ # React frontend
│ ├── public/
│ └── src/
│ ├── components/
│ ├── services/
│ ├── App.jsx
│ └── main.jsx
│
├── server/ # Node.js backend
│ ├── config/
│ ├── controllers/
│ ├── services/
│ ├── routes/
│ ├── middleware/
│ ├── app.js
│ └── server.js
│
├── .env.example # Environment variable template
├── .gitignore
├── package.json
├── README.md
└── LICENSE

## 🔌 API Endpoints

### Fetch Channel Analytics
**Sample Response**
```json
{
  "items": [
    {
      "statistics": {
        "subscriberCount": "12345",
        "viewCount": "987654",
        "videoCount": "120"
      }
    }
  ]
}
```
⚙️ Technology Stack
Frontend

React

Axios

Modern ES modules

Backend

Node.js

Express

Axios

External API

YouTube Data API v3

Engineering Concepts

API gateway pattern

Caching for quota optimization

Centralized error handling

Environment-based configuration

🛠️ Setup & Run Locally
Prerequisites

Node.js 18+

YouTube Data API v3 key

```bash
cp .env.example .env
```
Update .env :
YOUTUBE_API_KEY=YOUR_REAL_API_KEY
PORT=5000

**Run in Development Mode**
```bash
npm run dev
```
Backend:
```arduino
http://localhost:5000
```
Frontend:
```arduino
http://localhost:5173
```

🔒 Security Considerations

API keys are stored in environment variables

.env is excluded from version control

Backend shields the YouTube API from direct client access

📈 Scalability & Production Readiness

This project is designed to scale with:

Redis for distributed caching

OAuth 2.0 for authenticated YouTube access

Rate limiting middleware

Dockerized deployment

CI/CD pipelines

Future Enhancements

Interactive charts (Chart.js / Recharts)

OAuth-based YouTube authentication

Multi-channel comparison

Persistent caching with Redis

OpenAPI (Swagger) documentation

Docker + Nginx deployment

📄 License

MIT License
