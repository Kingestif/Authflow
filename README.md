# AuthFlow - Full Stack User Management System

**AuthFlow** is a full-stack user management system built using the MERN stack (MongoDB, Express, React, Node.js). It provides secure user authentication with JWT, role-based access control (RBAC), and user management features. The project includes a React frontend and an Express/Node.js backend deployed on Netlify and Render, respectively.

## 🚀 Features
- User authentication (Signup, Login, Logout)
- Role-based access control (Admin & User roles)
- Secure authentication using JWT
- User management (Admins can manage users)
- API documentation using Swagger
- Deployed using Render (backend) and Netlify (frontend)

## 🛠️ Tech Stack

**Frontend:**
- React.js
- React Router
- CSS
- Context API 
- Netlify (for deployment)

**Backend:**
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT Authentication
- Bcrypt for password hashing
- Swagger for API documentation
- Render (for deployment)

## 📂 Project Setup

### Prerequisites
Make sure you have the following installed on your system:
- Node.js (v16+ recommended)
- MongoDB (local or Atlas)
- Git

### Backend Setup

1. **Clone the repository:**
   ```
   git clone https://github.com/Kingestif/Authflow.git
   cd authflow/backend
    ```

2. **Install dependencies:**
```
npm install
```

3. **Create a .env file and add the following environment variables:**
```
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT
```

4. **Start the backend server:**
```
npm start
```

### Frontend Setup

1. **Navigate to the frontend folder:**

```
cd ../frontend/authflow
```

2. **Install dependencies:**

```
npm install
```

3. **Create a .env file and add the backend URL:**
```
REACT_APP_API_URL=https://authflow-backend-l73i.onrender.com
```
4. **Start the frontend application:**
```
npm start
```

📌 API Documentation (Swagger)
- Once the server is running, access the Swagger API documentation at:

- Local: http://localhost:3000/api-docs
- Deployed: https://authflow-backend-l73i.onrender.com/api-docs

🌍 Deployment
Frontend (Netlify): https://flowauth.netlify.app/
Backend (Render): https://authflow-backend-l73i.onrender.com

📢 Testing the API with Postman
- Open Postman and import the API collection.
- Use https://authflow-backend-l73i.onrender.com/api/v1/ as the base URL.
- Add a Bearer Token in the headers for protected routes.

🛠️ Common Issues & Fixes
- CORS Error on Frontend: Ensure your backend allows your Netlify frontend in CORS
- MongoDB Connection Timeout: Make sure your MongoDB URI is correct in .env, If using MongoDB Atlas, whitelist your IP in the Network Access settings.

📜 License
This project is licensed under the MIT License.

📞 Contact
For questions or contributions, reach out via kingestiff@gmail.com or open an issue on GitHub.

🚀 Now you're all set! If you found this helpful, consider starring 🌟 the repo!