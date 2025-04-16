# 🔐 Login & Registration System (MERN Stack)

This project is a basic **Login and Registration System** using **React.js + Redux** on the frontend and **Node.js + Express + MongoDB** on the backend. It features protected routes, JWT-based authentication, form validation, and local storage handling.

---

## 📁 Project Structure

```
project/
├── frontend/         # React Frontend
└── backend/         # Node.js Backend
```

---

## 🌐 Features

- User Registration (Name, Date of Birth, Email, Password)
- User Login with Email and Password
- Protected Route: Only logged-in users can view the table
- JWT Authentication
- MongoDB for storing user data
- Cookies to keep user session
- Clean and responsive UI

---

## 🛠️ Technologies Used

- **Frontend**: React.js, TailwindCSS, React Router, Axios
- **Backend**: Node.js, Express.js, MongoDB, Mongoose, bcryptjs, jsonwebtoken, cors

---

## 🔧 Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/ravi-kanuri/TableView.git
cd TableView
```

### 2️⃣ Setup Backend (Node.js)

```bash
cd backend
npm install
```

#### Create a `.env` file inside `/backend`:

```env
PORT=8000
MONGODB_URL=your_mongodb_connection_string
JWT_KEY=your_jwt_secret
```

### Start the Server

```bash
npm run dev
```

---

### 3️⃣ Setup Frontend (React)

```bash
cd frontend
npm install
npm run dev
```

---




## 🧠 Authentication Flow

1. **Register/Login** -> Sends `token + user` info from Node.js.
2. **Store Token/User Info** in `Cookies`.
3. **Access Protected Route** (table page) only if token is valid.
4. **Logout** clears Cookies and redirects to login.

---



## 🧾 License

MIT

---
