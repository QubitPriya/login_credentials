# Quick Start Guide

## Step-by-Step Setup (For Freshers)

### Step 1: Install MongoDB

**Option A: Local Installation**
- Download MongoDB from https://www.mongodb.com/try/download/community
- Install it on your computer
- Start MongoDB service

**Option B: MongoDB Atlas (Cloud - Easier)**
- Go to https://www.mongodb.com/cloud/atlas
- Create a free account
- Create a cluster
- Get your connection string

### Step 2: Clone/Download Project
```bash
cd your-project-folder
```

### Step 3: Install Dependencies
```bash
npm install
```

This will install:
- `express` - server framework
- `mongoose` - database connection
- `dotenv` - environment variables
- `cors` - allow requests from frontend

### Step 4: Create .env File
Create a new file called `.env` in the root folder with:

**For Local MongoDB:**
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/onboarding
NODE_ENV=development
```

**For MongoDB Atlas:**
```
PORT=5000
MONGODB_URI=mongodb+srv://yourUsername:yourPassword@yourcluster.mongodb.net/onboarding
NODE_ENV=development
```

### Step 5: Start the Server
```bash
npm run dev
```

You should see:
```
MongoDB Connected: localhost
Server is running on port 5000
```

### Step 6: Test the API

**Using Swagger UI (Easiest):**
1. Open browser: `http://localhost:5000/api-docs`
2. Click on the POST endpoint
3. Click "Try it out"
4. Click "Execute"
5. See the response!

**Using cURL (Command Line):**
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

**Using Postman (GUI):**
1. Open Postman
2. Click "+" to create new request
3. Change method to POST
4. URL: `http://localhost:5000/api/users/submit-onboarding`
5. Go to Body tab → Select "raw" → Choose "JSON"
6. Paste:
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "dateOfBirth": "1990-05-15",
  "gender": "Male"
}
```
7. Click Send

**Expected Response (201):**
```json
{
  "success": true,
  "message": "User onboarding data saved successfully",
  "data": {
    "_id": "...",
    "firstName": "John",
    "lastName": "Doe",
    "dateOfBirth": "1990-05-15T00:00:00.000Z",
    "gender": "Male",
    "createdAt": "2026-05-13T10:30:00.000Z",
    "updatedAt": "2026-05-13T10:30:00.000Z"
  }
}
```

## File Structure Explanation

```
├── config/
│   └── db.js              ← Connects to MongoDB
├── models/
│   └── User.js            ← Defines data structure
├── routes/
│   └── userRoutes.js      ← API endpoints
├── server.js              ← Main file (starts everything)
├── package.json           ← Project info & dependencies
└── .env                   ← Secret keys (don't share)
```

## Common Issues & Fixes

### Issue: "Cannot find module 'express'"
**Fix:** Run `npm install`

### Issue: "MongoDB connection failed"
**Fix:** Make sure MongoDB is running
- For local: Open MongoDB Compass or run `mongod`
- For Atlas: Check connection string in .env

### Issue: "Port 5000 already in use"
**Fix:** Change PORT in .env to 5001 or 5002

### Issue: "CORS error in browser"
**Fix:** Already handled in server.js with `cors()` middleware

## What Each File Does

**server.js:**
- Main file that starts the server
- Connects to MongoDB
- Sets up middleware (cors, json parsing)
- Starts listening on port 5000

**models/User.js:**
- Defines how data is stored in MongoDB
- Validates required fields
- Specifies data types (String, Date, etc.)

**routes/userRoutes.js:**
- Contains the POST endpoint
- Receives data from frontend
- Validates data
- Saves to MongoDB
- Sends response back

**config/db.js:**
- Handles MongoDB connection
- Shows connection status
- Catches connection errors

## Next Steps (After Getting It Working)

1. Connect from your frontend (use frontend-example.js as reference)
2. Add more fields to the form
3. Add validation rules
4. Add authentication
5. Add more API endpoints (GET, UPDATE, DELETE)
6. Deploy to a server

## Useful Commands

```bash
# Start development server with auto-reload
npm run dev

# Start production server
npm start

# Check if server is running
curl http://localhost:5000/api/health

# View MongoDB data (using MongoDB Compass)
# Connect to: mongodb://localhost:27017
```

Good luck! Happy coding! 🚀
