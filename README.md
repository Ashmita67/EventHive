# 🚀 EventHive – Smart Event Management System

EventHive is a full-stack web application designed to streamline college event management by centralizing event creation, registration, attendance tracking, and certificate generation.

---

## ✨ Key Features

* 🔐 Role-based authentication (Admin, Faculty, Student)
* 📅 Event creation, management, and publishing
* 🔍 Event discovery and registration system
* 🎟️ QR code-based attendance (prevents proxy entries)
* 📊 Real-time participation tracking
* 📜 Automated PDF certificate generation & download
* 📧 Email notification support (optional)

---

## 🏗️ Architecture Overview

EventHive follows a **client-server architecture**:

* **Frontend (React.js)** → UI, state management, API calls
* **Backend (Node.js + Express)** → Business logic, REST APIs
* **Database (MongoDB)** → Stores users, events, registrations, certificates

### 🔄 Flow

User → React App → Axios → Express API → MongoDB → Response → UI

---

## 🛠️ Tech Stack

**Frontend**

* React.js (Hooks, Context API)
* Axios
* React Router

**Backend**

* Node.js, Express.js
* JWT Authentication
* Bcrypt (password hashing)

**Database**

* MongoDB (Mongoose)

**Other**

* QR Code generation (`qrcode`)
* PDF generation (`pdfkit`)
* UUID (`uuid`)
* REST APIs

---

## 📂 Project Structure

```
eventhive/
├── client/     # React frontend (Vite)
├── server/     # Express backend
├── README.md
```

---

## ⚙️ How It Works

1. Admin/Faculty creates and publishes events
2. Students browse and register for events
3. Unique QR code is generated per registration
4. QR is scanned during event to mark attendance
5. Certificates are generated for verified participants

---

## 🧠 My Contributions

* Designed scalable backend architecture (MVC pattern)
* Built REST APIs using Node.js & Express
* Designed MongoDB schemas for core entities
* Implemented QR-based attendance system
* Developed certificate generation logic (PDF)
* Added authentication & role-based access control
* Integrated frontend with backend APIs

---

# 📦 Installation & Setup (STEP-BY-STEP)

## 🔹 Prerequisites

Make sure you have installed:

* Node.js (v18+ recommended)
* MongoDB (local OR MongoDB Atlas)

---

## 🔹 1. Clone Repository

```bash
git clone https://github.com/yourusername/EventHive.git
cd EventHive
```

---

## 🔹 2. Setup Backend

```bash
cd server
npm install
```

### Create `.env` file in `/server`

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/eventhive
JWT_SECRET=your_secret_key
```

👉 If using MongoDB Atlas, replace `MONGO_URI` with your cluster URL.

---

### ▶️ Run Backend

```bash
npm run dev
```

Server runs on:

```
http://localhost:5000
```

---

## 🔹 3. Setup Frontend

Open new terminal:

```bash
cd client
npm install
```

### Create `.env` file in `/client`

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

---

### ▶️ Run Frontend

```bash
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

# 🧪 How to Use the App

1. Register a new user
2. Login
3. View events
4. Register for an event
5. View QR code in “My Registrations”
6. (Admin/Faculty) Scan QR → mark attendance
7. Generate certificate

---

# ⚠️ Troubleshooting

### ❌ MongoDB not connecting

* Ensure MongoDB is running locally OR correct Atlas URL

### ❌ JWT errors

* Check `JWT_SECRET` in `.env`

### ❌ CORS issues

* Make sure backend is running before frontend

### ❌ API not working

* Verify:

  * Backend → port 5000
  * Frontend → correct API URL

---

# 🚀 Deployment

### Backend → Render

* Root: `/server`
* Build: `npm install`
* Start: `npm start`

### Frontend → Vercel

* Root: `/client`
* Add env:

```
VITE_API_BASE_URL=https://your-backend-url/api
```

---

# 🚀 Future Improvements

* 💳 Payment integration (Razorpay)
* 📱 Improved UI/UX
* 📊 Admin analytics dashboard
* 🔔 Real-time notifications (WebSockets)
* 📷 Camera-based QR scanner

---

# 📌 License

This project is for educational purposes.
