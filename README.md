# 🏫 School Management API

A RESTful API built using Node.js, Express.js, and MySQL to manage school data.  
It allows users to add schools and fetch a list of schools sorted by proximity to a given location.

---

## 🚀 Features

- ➕ Add a new school
- 📍 Get list of schools sorted by distance
- ✅ Input validation
- 🌐 REST API architecture

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MySQL

---

## 📂 Project Structure

```
school-api/
│── config/
│   └── db.js
│── routes/
│   └── schoolRoutes.js
│── controllers/
│   └── schoolController.js
│── app.js
│── package.json
│── .env
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/school-api.git
cd school-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Setup environment variables

Create a `.env` file and add:

```env
 DATABASE_URL="your railway Connection URL"
```

### 4. Run the server

```bash
node app.js
```

Server will run on:

```
http://localhost:8080
```

---

## 🗄 Database Schema

```sql
CREATE TABLE schools (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  latitude FLOAT NOT NULL,
  longitude FLOAT NOT NULL
);
```

---

## 📡 API Endpoints

### ➕ Add School

- **URL:** `/addSchool`
- **Method:** `POST`

**Request Body:**

```json
{
  "name": "ABC School",
  "address": "Mumbai",
  "latitude": 19.0760,
  "longitude": 72.8777
}
```

**Response:**

```json
{
  "message": "School added successfully"
}
```

---

### 📍 List Schools (Sorted by Distance)

- **URL:** `/listSchools`
- **Method:** `GET`

**Query Params:**

```
latitude=19.07
longitude=72.87
```

**Example:**

```
/listSchools?latitude=19.07&longitude=72.87
```

**Response:**

```json
[
  {
    "id": 1,
    "name": "ABC School",
    "address": "Mumbai",
    "latitude": 19.0760,
    "longitude": 72.8777,
    "distance": 1.2
  }
]
```

---

## 📏 Distance Calculation

The API calculates distance using geographical coordinates (latitude & longitude) and sorts schools based on nearest to farthest.

---

## 🧪 Testing

Test APIs using:

- **Postman**

---

## 🌐 Deployment

 deploy this API using platforms :

- **Render**
- **Railway**


