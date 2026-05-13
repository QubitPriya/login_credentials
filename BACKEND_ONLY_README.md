# 🔧 Backend API Only

## What This Project Is

✅ **Pure Node.js Backend**  
✅ **Express.js Server**  
✅ **MongoDB Database**  
✅ **RESTful API**  
✅ **Swagger Documentation**  

## What This Project Is NOT

❌ **NOT a Frontend Application**  
❌ **NOT HTML/CSS/JavaScript UI**  
❌ **NOT a Web Application**  
❌ **NOT multiple programming languages**  

---

## Technologies Used

### Language
- **Node.js** - JavaScript runtime for backend
- **JavaScript** - Only for backend logic

### Framework
- **Express.js** - Web server framework

### Database
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB

### API Documentation
- **Swagger/OpenAPI 3.0** - API documentation

### Tools
- **npm** - Package manager
- **dotenv** - Environment configuration

---

## Project Contents

### Backend Files
```
✅ server.js              - Main Express server
✅ config/db.js           - MongoDB connection
✅ config/swagger.js      - Swagger configuration
✅ models/User.js         - Data schema
✅ routes/userRoutes.js   - API endpoints
✅ package.json           - Dependencies
```

### Configuration
```
✅ .env                - Environment variables
✅ .env.example        - Environment template
✅ .gitignore          - Git ignore rules
```

### Documentation
```
✅ README.md           - Full API docs
✅ QUICKSTART.md       - Setup guide
✅ CODE_EXPLANATION.md - Code breakdown
✅ MONGODB_SETUP.md    - Database setup
✅ PROJECT_SUMMARY.md  - Project overview
✅ BACKEND_ONLY.md     - Backend focus (this file)
```

### Testing
```
✅ postman-collection.json - Postman tests
```

---

## Stack Overview

```
┌─────────────────────────────────────────┐
│          Browser / Client                │
│                                         │
│  (Sends HTTP requests to API)           │
└──────────────────┬──────────────────────┘
                   │
                   │ HTTP/HTTPS
                   │ REST API
                   ▼
┌─────────────────────────────────────────┐
│    Node.js + Express Backend            │
│                                         │
│  ✅ server.js                            │
│  ✅ routes/userRoutes.js                 │
│  ✅ models/User.js                       │
│  ✅ Swagger API docs                     │
│  ✅ Error handling                       │
│  ✅ Input validation                     │
└──────────────────┬──────────────────────┘
                   │
                   │ Mongoose
                   │ Connection
                   ▼
┌─────────────────────────────────────────┐
│     MongoDB Database                    │
│                                         │
│  Collections:                           │
│  - users (stores onboarding data)       │
└─────────────────────────────────────────┘
```

---

## How to Use This API

### Option 1: Swagger UI (Recommended)
```
http://localhost:5000/api-docs
```
- Visual interface
- Interactive testing
- Auto-generated docs

### Option 2: cURL
```bash
curl -X POST http://localhost:5000/api/users/submit-onboarding \
  -H "Content-Type: application/json" \
  -d '{"firstName":"John","lastName":"Doe","dateOfBirth":"1990-05-15","gender":"Male"}'
```

### Option 3: Postman
- Import `postman-collection.json`
- Send requests
- View responses

### Option 4: Your Own Frontend
- Make HTTP requests to `http://localhost:5000/api/users/submit-onboarding`
- Send JSON data
- Receive JSON responses

---

## API Response Format

All responses follow this structure:

### Success (201)
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

### Error (400)
```json
{
  "success": false,
  "message": "All fields are required"
}
```

---

## Running the Backend

### Prerequisites
- Node.js installed
- MongoDB running (local or Atlas)
- .env file configured

### Quick Start
```bash
# 1. Install
npm install

# 2. Configure
cp .env.example .env
# Edit .env with MongoDB URI

# 3. Run
npm run dev

# 4. Access
# Swagger: http://localhost:5000/api-docs
# API: http://localhost:5000/api/users/submit-onboarding
```

---

## Development vs Production

### Development
```bash
npm run dev
```
- Uses `nodemon` (auto-reload)
- Console logs visible
- .env required

### Production
```bash
npm start
```
- Direct Node.js
- Error handling active
- Performance optimized

---

## Database Persistence

- **Data Storage**: MongoDB (cloud or local)
- **Persistence**: All data saved permanently
- **Collections**: `users` collection in `onboarding` database
- **Backup**: Use MongoDB backup tools

---

## Next Steps

### Learn More
1. Understand Express routing
2. Learn MongoDB queries
3. Study API design patterns
4. Explore authentication
5. Learn deployment

### Extend the API
1. Add GET endpoint to fetch users
2. Add UPDATE endpoint to modify users
3. Add DELETE endpoint to remove users
4. Add user authentication
5. Add input sanitization

### Production Ready
1. Add error logging
2. Add request validation
3. Add rate limiting
4. Add API versioning
5. Deploy to cloud

---

## Key Points

- ✅ **100% Backend** - No frontend code
- ✅ **Node.js Only** - Single language
- ✅ **MongoDB Only** - Single database
- ✅ **Production Ready** - Proper error handling
- ✅ **Well Documented** - Swagger + guides
- ✅ **Fresher Friendly** - Easy to understand
- ✅ **Extensible** - Easy to add features

---

## Support Resources

- **Node.js Docs**: https://nodejs.org/docs
- **Express Docs**: https://expressjs.com
- **MongoDB Docs**: https://docs.mongodb.com
- **Mongoose Docs**: https://mongoosejs.com
- **Swagger Docs**: https://swagger.io

---

**This is a pure backend API. Add your own frontend when needed.** 🎯

Backend Server | Ready to Deploy | Production Grade 🚀
