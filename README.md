# MERN Dashboard

This is a simple **MERN stack dashboard** project created for a coding assessment.

---

## ✅ Features
- **Backend**: Node.js + Express server fetching first 5 users from JSONPlaceholder API  
- **Frontend**: React.js dashboard displaying:
  - Header with title and date
  - Statistics Cards: Total Users, Completed Tasks (12), Pending Tasks (5)
  - Users Table with columns: Name, Email, Phone, Company(Fetch data from /api/users)
  - Task List fetching 5 tasks with checkboxes (UI-only)
- Hover effects and skeleton loaders while fetching

---

## 🛠 Technologies
- **Frontend:** React.js, Material UI, Axios
- **Backend:** Node.js, Express.js, Axios, CORS
- **API:** JSONPlaceholder (Users & Tasks)

---

## 🚀 Setup Instructions (Copy & Paste All at Once)
### 1️⃣ Backend
  1.1.Open terminal in backend folder:
  ```bash
  cd backend
  ```
  1.2.Install dependencies:
  ```bash
  npm install
  ```
  1.3.Start backend server:
  ```bash
  npm run dev
  ```
  #### Backend runs on http://localhost:5000
  #### Test API in browser: http://localhost:5000/api/users (should return 5 users)


### 2️⃣ Frontend
  2.1.Open terminal in frontend folder:
  ```bash
  cd ../frontend
  ```
  2.2.Install dependencies:
  ```bash
  npm install
  ```
  2.3.Start frontend:
  ```bash
  npm start
  ```
#### Open in browser: http://localhost:3000
