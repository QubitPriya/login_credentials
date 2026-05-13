# Project Summary - Onboarding Form API (Node.js + MongoDB)

**Pure Backend API | No Frontend | No Other Languages**

A production-ready REST API built with Node.js, Express, and MongoDB for handling user onboarding data.

## 📁 Project Structure

```
Login_Number/
├── config/
│   ├── db.js                 # MongoDB connection
│   └── swagger.js            # OpenAPI configuration
├── models/
│   └── User.js               # User data schema
├── routes/
│   └── userRoutes.js         # POST endpoint logic
├── server.js                 # Express server
├── package.json              # Dependencies
├── .env.example              # Environment template
├── .gitignore                # Git ignore
├── .env                      # Your config (not committed)
└── node_modules/             # Installed packages
```

## 🚀 Quick Start

### 1. Setup MongoDB
```bash
# Option A: Local
mongod

# Option B: Cloud (MongoDB Atlas)
# Sign up at https://www.mongodb.com/cloud/atlas
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment
```bash
cp .env.example .env
# Edit .env with your MongoDB URI
```

### 4. Run Server
```bash
npm run dev        # Development (auto-reload)
npm start          # Production
```

**Result:** Server at `http://localhost:5000`

## 🔌 API Endpoints

### 1. Health Check
```
GET http://localhost:5000/api/health
```
Response: `{ "status": "Server is running" }`

### 2. Submit Onboarding
```
POST http://localhost:5000/api/users/submit-onboarding
```

**Request:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "dateOfBirth": "1990-05-15",
  "gender": "Male"
}
```

**Response (201):**
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
    "updatedAt": "2026-05-13T10:30:00.000Z"
  }
}
```

## 📊 Database Schema

### Users Collection (MongoDB)
```javascript
{
  _id: ObjectId,              // Auto-generated ID
  firstName: String,          // Required
  lastName: String,           // Required
  dateOfBirth: Date,          // Required (YYYY-MM-DD)
  gender: String,             // Required (Male/Female/Other)
  createdAt: Date,            // Auto-generated
  updatedAt: Date             // Auto-generated
}
```

## 🧪 Testing Methods

### Method 1: Swagger UI (Best)
```
http://localhost:5000/api-docs
```
- Visual interface
- Click "Try it out" → "Execute"
- See real-time responses

### Method 2: cURL
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

### Method 3: Postman
1. Import `postman-collection.json`
2. Send requests
3. View responses

## 🔧 Configuration (.env)

**Local MongoDB:**
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/onboarding
NODE_ENV=development
```

**MongoDB Atlas (Cloud):**
```
PORT=5000
MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/onboarding
NODE_ENV=development
```

## 📦 Dependencies

| Package | Purpose |
|---------|---------|
| `express` | Web server framework |
| `mongoose` | MongoDB ODM & validation |
| `dotenv` | Environment variables |
| `cors` | Cross-Origin Resource Sharing |
| `swagger-ui-express` | API documentation UI |
| `swagger-jsdoc` | OpenAPI spec generation |

## 📚 Documentation Files

| File | Content |
|------|---------|
| `README.md` | Full API reference |
| `QUICKSTART.md` | Setup & testing guide |
| `CODE_EXPLANATION.md` | Code breakdown |
| `MONGODB_SETUP.md` | Database setup |
| `postman-collection.json` | Postman tests |

## 🎯 Key Features

✅ Node.js backend only  
✅ MongoDB NoSQL database  
✅ RESTful API design  
✅ Input validation  
✅ Error handling  
✅ Swagger/OpenAPI docs  
✅ CORS enabled  
✅ Environment config  
✅ Production-ready  
✅ Fresher-friendly code  

## 📋 File Descriptions

**server.js**
- Main entry point
- Express setup
- Route configuration
- Middleware setup

**config/db.js**
- MongoDB connection
- Connection handling
- Error management

**config/swagger.js**
- OpenAPI specification
- Swagger configuration
- Documentation schemas

**models/User.js**
- User data schema
- Field definitions
- Validation rules

**routes/userRoutes.js**
- POST endpoint
- Request handling
- Data validation
- Response generation

## 🐛 Troubleshooting

**MongoDB Connection Error**
```
Error: connect ECONNREFUSED
```
→ Start MongoDB: `mongod`

**Port Already in Use**
```
Error: listen EADDRINUSE
```
→ Change PORT in .env

**Module Not Found**
```
Error: Cannot find module 'express'
```
→ Run: `npm install`

**Swagger Not Loading**
```
Cannot access /api-docs
```
→ Check if server is running on port 5000

## 🚀 Commands Reference

```bash
# Install packages
npm install

# Development (auto-reload)
npm run dev

# Production
npm start

# Check health
curl http://localhost:5000/api/health
```

## 🔗 Useful Links

- Node.js: https://nodejs.org
- Express: https://expressjs.com
- MongoDB: https://www.mongodb.com
- Mongoose: https://mongoosejs.com
- Swagger: https://swagger.io

## ✨ Next Steps

**Level 1 (Easy)**
- [ ] Get API running locally
- [ ] Test with Swagger UI
- [ ] View data in MongoDB

**Level 2 (Medium)**
- [ ] Add email field
- [ ] Add phone field
- [ ] Add validation

**Level 3 (Hard)**
- [ ] Add GET endpoint
- [ ] Add UPDATE endpoint
- [ ] Add DELETE endpoint
- [ ] Add authentication

**Level 4 (Production)**
- [ ] Deploy to Heroku/AWS
- [ ] Add rate limiting
- [ ] Add logging
- [ ] Add tests

## 💡 Learning Outcomes

After working with this API, you'll understand:
- ✅ Node.js backend development
- ✅ Express.js web server
- ✅ MongoDB database
- ✅ Mongoose ODM
- ✅ RESTful API design
- ✅ JSON request/response
- ✅ Error handling
- ✅ API documentation
- ✅ Environment configuration
- ✅ Production deployment

## 📞 Quick Help

**Can't start server?**
→ Check .env file
→ Verify MongoDB is running
→ Run `npm install`

**API not responding?**
→ Check MONGODB_URI
→ Look at console errors
→ Verify port is correct

**Data not saving?**
→ Check MongoDB connection
→ Verify collection exists
→ Check validation rules

---

## 📌 Summary

| Aspect | Details |
|--------|---------|
| **Language** | Node.js (JavaScript runtime) |
| **Database** | MongoDB (NoSQL) |
| **Framework** | Express.js |
| **API Style** | RESTful |
| **Docs** | Swagger/OpenAPI 3.0 |
| **Status** | Production Ready |
| **Level** | Fresher Friendly |

---

**100% Backend. Pure Node.js + MongoDB. No Frontend. No Other Languages.** 🎯

Ready to deploy! 🚀
