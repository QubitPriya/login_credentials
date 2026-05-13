# Login_Number - Onboarding Form API

**🔧 Backend Only: Node.js + Express + MongoDB**

A production-ready REST API built with Node.js and Express for handling user onboarding data. Stores data in MongoDB with complete Swagger/OpenAPI documentation.

> **Note:** This is a pure backend API. No frontend included. No other languages used.

## 📋 Project Structure

```
Login_Number/
├── config/
│   └── db.js                 # MongoDB connection configuration
├── models/
│   └── User.js              # MongoDB User schema
├── routes/
│   └── userRoutes.js        # API route endpoints
├── server.js                # Main server file
├── package.json             # Project dependencies
├── .env.example             # Environment variables template
└── .gitignore               # Git ignore file
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Login_Number
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create `.env` file**
   - Copy `.env.example` to `.env`
   - Update the MongoDB URI
   ```bash
   cp .env.example .env
   ```

   **Edit `.env` file:**
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/onboarding
   NODE_ENV=development
   ```

   **For MongoDB Atlas (Cloud):**
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/onboarding
   ```

4. **Start MongoDB** (if using local installation)
   ```bash
   mongod
   ```

5. **Run the server**
   ```bash
   # Development mode (with auto-reload)
   npm run dev

   # Production mode
   npm start
   ```

   Server will run on `http://localhost:5000`

## 📡 API Endpoints

### 1. Health Check
**GET** `/api/health`

Check if the server is running.

**Response:**
```json
{
  "status": "Server is running"
}
```

---

### 2. Submit Onboarding Data
**POST** `/api/users/submit-onboarding`

Submit user onboarding information.

**Request Headers:**
```
Content-Type: application/json
```

**Request Body:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "dateOfBirth": "1990-05-15",
  "gender": "Male"
}
```

**Parameters:**
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| firstName | String | Yes | User's first name |
| lastName | String | Yes | User's last name |
| dateOfBirth | Date | Yes | User's date of birth (YYYY-MM-DD format) |
| gender | String | Yes | User's gender (Male, Female, or Other) |

**Success Response (201):**
```json
{
  "success": true,
  "message": "User onboarding data saved successfully",
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "firstName": "John",
    "lastName": "Doe",
    "dateOfBirth": "1990-05-15T00:00:00.000Z",
    "gender": "Male",
    "createdAt": "2026-05-13T10:30:00.000Z",
    "updatedAt": "2026-05-13T10:30:00.000Z",
    "__v": 0
  }
}
```

**Error Response (400):**
```json
{
  "success": false,
  "message": "All fields are required"
}
```

**Error Response (500):**
```json
{
  "success": false,
  "message": "Error saving user data",
  "error": "Error details here"
}
```

## 📝 How to Test the API

### Using cURL
```bash
curl -X POST http://localhost:5000/api/users/submit-onboarding \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "John",
    "lastName": "Doe",
    "dateOfBirth": "1990-05-15",
    "gender": "Male"
  }'
```

### Using Postman
1. Open Postman
2. Create a new POST request
3. URL: `http://localhost:5000/api/users/submit-onboarding`
4. Go to **Body** tab → Select **raw** → Choose **JSON**
5. Paste the request body:
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "dateOfBirth": "1990-05-15",
  "gender": "Male"
}
```
6. Click **Send**



## 🗄️ Database Schema

### User Collection
```javascript
{
  _id: ObjectId,
  firstName: String (required),
  lastName: String (required),
  dateOfBirth: Date (required),
  gender: String (enum: ['Male', 'Female', 'Other'], required),
  createdAt: Date (auto),
  updatedAt: Date (auto)
}
```

## 🔧 Technologies Used

- **Express.js** - Web server framework
- **Mongoose** - MongoDB object modeling
- **MongoDB** - NoSQL database
- **CORS** - Cross-Origin Resource Sharing
- **dotenv** - Environment variable management
- **Nodemon** - Development tool for auto-reloading

## 📚 Dependencies Explained

| Package | Purpose |
|---------|---------|
| express | Web framework for routing and middleware |
| mongoose | MongoDB connection and schema validation |
| dotenv | Load environment variables from .env file |
| cors | Enable cross-origin requests from frontend |
| nodemon | Auto-restart server during development |

## 🐛 Troubleshooting

### MongoDB Connection Error
**Problem:** `Error: connect ECONNREFUSED`

**Solution:**
- Make sure MongoDB is running: `mongod`
- Check MONGODB_URI in `.env` file
- For MongoDB Atlas, verify connection string and IP whitelist

### Port Already in Use
**Problem:** `Error: listen EADDRINUSE: address already in use :::5000`

**Solution:**
```bash
# Find process using port 5000
lsof -i :5000  # macOS/Linux
netstat -ano | findstr :5000  # Windows

# Kill the process or use a different port
# Edit PORT in .env file
```

### Missing Dependencies
**Problem:** `Cannot find module 'express'`

**Solution:**
```bash
npm install
```

## 📋 Validation Rules

The API validates the following:
- **firstName & lastName**: Required, non-empty strings
- **dateOfBirth**: Required, valid date format (YYYY-MM-DD)
- **gender**: Required, must be one of: Male, Female, Other

## 🔐 Future Enhancements

- Add email validation
- Add phone number field
- Implement authentication/JWT
- Add update user endpoint
- Add get users endpoint
- Add error logging
- Add rate limiting

## 📄 License

ISC

## 👨‍💻 Author

Created as a basic onboarding form API for fresher-level learning.