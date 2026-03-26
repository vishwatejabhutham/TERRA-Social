# TerraSocial — The Social Green Network 🌱

A visually stunning, production-ready frontend for tracking environmental impact, combining social networking, gamification, and eco-consciousness.

---

## 1️⃣ Project Folder Structure

```
terrasocial/
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── index.html
├── .env
├── src/
│   ├── index.css
│   ├── main.jsx
│   ├── App.jsx
│   ├── api/
│   │   ├── endpoints.js
│   │   └── axiosInstance.js
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Layout.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── Sidebar.jsx
│   │   └── ui/
│   │       ├── Button.jsx
│   │       ├── Card.jsx
│   │       └── Loader.jsx
│   └── pages/
│       ├── Landing.jsx
│       ├── Dashboard.jsx
│       ├── PlantTree.jsx
│       ├── Guilds.jsx
│       ├── MapPage.jsx
│       ├── Profile.jsx
│       ├── Leaderboard.jsx
│       └── Auth/
│           ├── Login.jsx
│           └── Register.jsx
```

---

## 2️⃣ Installation Steps

**Prerequisites**: Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

1. **Navigate to the Project Directory**
   ```bash
   cd terrasocial
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```
   *Required Packages: `react`, `react-router-dom`, `axios`, `framer-motion`, `lucide-react`, `tailwindcss`, `countup.js`, `react-countup`.*

3. **Run the Development Server**
   ```bash
   npm run dev
   ```

---

## 3️⃣ Environment Variables

Ensure you create a `.env` file in the root of the project with the following structure:

```env
# Dummy API URL for development
VITE_API_BASE_URL=https://api.terrasocial.dummy
```

---

## 4️⃣ BACKEND API CONTRACT — REQUIRED ENDPOINTS

This contract defines the strict structure the frontend expects from the backend API.

### Authentication
#### Login
- **Method:** `POST`
- **URL:** `${VITE_API_BASE_URL}/auth/login`
- **Headers:** `Content-Type: application/json`
- **Auth required:** No
- **Request Body:**
  ```json
  {
    "email": "user@example.com",
    "password": "securepassword"
  }
  ```
- **Response:**
  ```json
  {
    "success": true,
    "token": "jwt_token_here",
    "user": { "id": 1, "name": "John Doe", "email": "user@example.com" }
  }
  ```

#### Register
- **Method:** `POST`
- **URL:** `${VITE_API_BASE_URL}/auth/register`
- **Headers:** `Content-Type: application/json`
- **Auth required:** No
- **Request Body:**
  ```json
  {
    "name": "John Doe",
    "email": "user@example.com",
    "password": "securepassword"
  }
  ```
- **Response:**
  ```json
  {
    "success": true,
    "token": "jwt_token_here",
    "user": { "id": 1, "name": "John Doe" }
  }
  ```

---

### Trees & Impact
#### Plant a Tree
- **Method:** `POST`
- **URL:** `${VITE_API_BASE_URL}/trees`
- **Headers:** `Content-Type: multipart/form-data`
- **Auth required:** Yes (Bearer Token)
- **Request Body:**
  ```text
  treeType: "oak"
  latitude: 12.9716
  longitude: 77.5946
  notes: "Planted near the city park"
  image: (File binary)
  ```
- **Response:**
  ```json
  {
    "success": true,
    "message": "Tree successfully planted",
    "pointsEarned": 50,
    "treeId": 402
  }
  ```

#### Get All Trees (Map Data)
- **Method:** `GET`
- **URL:** `${VITE_API_BASE_URL}/trees`
- **Headers:** `Content-Type: application/json`
- **Auth required:** Yes
- **Response:**
  ```json
  {
    "success": true,
    "trees": [
      {
        "id": 1,
        "type": "pine",
        "location": { "latitude": 45.4215, "longitude": -75.6972 },
        "planterName": "Jane S."
      }
    ]
  }
  ```

---

### Community & Gamification
#### Get Leaderboard
- **Method:** `GET`
- **URL:** `${VITE_API_BASE_URL}/leaderboard`
- **Headers:** `Content-Type: application/json`
- **Auth required:** Yes
- **Response:**
  ```json
  {
    "success": true,
    "leaderboard": [
      {
        "rank": 1,
        "name": "Elena R.",
        "score": 145200,
        "level": "Earth Guardian"
      }
    ]
  }
  ```

#### Get User Profile & Stats
- **Method:** `GET`
- **URL:** `${VITE_API_BASE_URL}/users/me`
- **Headers:** `Content-Type: application/json`
- **Auth required:** Yes
- **Response:**
  ```json
  {
    "success": true,
    "profile": {
      "name": "John Doe",
      "email": "user@example.com",
      "score": 12450,
      "globalRank": 89,
      "treesPlanted": 142,
      "co2SavedKg": 4520,
      "guildsActive": 3,
      "timeline": [
         { "date": "2026-10-24", "title": "Reached Level 12" }
      ]
    }
  }
  ```

#### Get All Guilds
- **Method:** `GET`
- **URL:** `${VITE_API_BASE_URL}/guilds`
- **Headers:** `Content-Type: application/json`
- **Auth required:** Yes
- **Response:**
  ```json
  {
    "success": true,
    "guilds": [
      {
        "id": 1,
        "name": "Eco Warriors LA",
        "members": 1240,
        "target": "Plant 10k Trees by 2027",
        "isJoined": false,
        "image": "url_to_image"
      }
    ]
  }
  ```

#### Join/Leave Guild
- **Method:** `POST`
- **URL:** `${VITE_API_BASE_URL}/guilds/:id/join`
- **Headers:** `Content-Type: application/json`
- **Auth required:** Yes
- **Response:**
  ```json
  {
    "success": true,
    "message": "Successfully joined/left guild",
    "isJoined": true
  }
  ```

### Standard Error Handling Format
Any errors returned by the API should strictly match:
```json
{
  "success": false,
  "message": "Detailed error message",
  "errorCode": "OPTIONAL_ERROR_CODE"
}
```
