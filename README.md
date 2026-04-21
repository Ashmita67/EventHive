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
* **Backend (Node.js + Express)** → Business logic, APIs
* **Database (MongoDB)** → Stores users, events, registrations, certificates

Flow:
User → React App → REST API → Express Server → MongoDB → Response → UI

---

## 🛠️ Tech Stack

**Frontend**

* React.js (Hooks, Context API)
* Axios

**Backend**

* Node.js, Express.js
* JWT Authentication
* Bcrypt (password hashing)

**Database**

* MongoDB (Mongoose)

**Other**

* QR Code generation
* PDF generation
* REST APIs

---

## 📂 Project Structure

```
eventhive/
├── client/     # React frontend
├── server/     # Express backend
```

---

## ⚙️ How It Works

1. Admin/Faculty creates and publishes events
2. Students browse and register
3. Unique QR code is generated per registration
4. QR is scanned to mark attendance
5. Certificates are generated for verified attendees

---

## 🧠 My Contributions

* Designed scalable backend architecture (MVC pattern)
* Built REST APIs using Node.js & Express
* Designed MongoDB schemas for core entities
* Implemented QR-based attendance system
* Developed certificate generation logic (PDF)
* Added authentication & role-based access control
* Wrote unit tests for backend APIs

---

## 📦 Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/EventHive.git
cd EventHive
```

### 2. Setup Backend

```bash
cd server
npm install
npm run dev
```

### 3. Setup Frontend

```bash
cd client
npm install
npm run dev
```

---

## 🔐 Environment Variables

Create `.env` file in `/server`:

```env
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
```

Create `.env` in `/client`:

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

---

## 🚀 Future Improvements

* 💳 Payment integration (Razorpay)
* 📱 Improved UI/UX
* 📊 Advanced analytics dashboard
* 🔔 Real-time notifications (WebSockets)

---

## 📌 License

This project is for educational purposes.
