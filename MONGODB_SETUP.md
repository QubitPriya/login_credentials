# MongoDB Setup Guide

**For Backend API Only - Node.js + Express**

This guide helps you set up MongoDB for the Onboarding Form API backend.

**Key differences from SQL:**
- No rigid table structure
- Flexible data schema
- Stores data as documents (like JSON objects)
- Easy to use for beginners

---

## Setup Option 1: MongoDB Atlas (Recommended for Cloud)

### Step 1: Create Account
1. Go to https://www.mongodb.com/cloud/atlas
2. Click "Start Free"
3. Sign up with email/GitHub

### Step 2: Create Organization
- Enter organization name
- Create organization

### Step 3: Create Project
- Click "Create a Project"
- Name your project (e.g., "onboarding-app")
- Click Create

### Step 4: Create Cluster
- Click "Build a Database"
- Choose "Free" tier (0.5 GB free)
- Select region closest to you
- Click "Create"
- Wait 1-3 minutes for cluster creation

### Step 5: Setup Security

#### Create Database User
1. Go to "Database Access" (left menu)
2. Click "Add New Database User"
3. Enter username: `onboarding_user`
4. Password: `Strong_Password_123` (remember this!)
5. Click "Create User"

#### Setup Network Access
1. Go to "Network Access" (left menu)
2. Click "Add IP Address"
3. Click "Allow Access from Anywhere" (for development)
4. Click "Confirm"

⚠️ **Note:** "Allow from anywhere" is not secure for production

### Step 6: Get Connection String
1. Go to "Database" → "Clusters"
2. Click "Connect" button
3. Select "Drivers"
4. Choose "Node.js" and version "4.x"
5. Copy the connection string

Example:
```
mongodb+srv://onboarding_user:Strong_Password_123@cluster0.xxxxx.mongodb.net/onboarding
```

### Step 7: Create .env File
```
PORT=5000
MONGODB_URI=mongodb+srv://onboarding_user:Strong_Password_123@cluster0.xxxxx.mongodb.net/onboarding
NODE_ENV=development
```

✅ Done! Your database is ready to use.

---

## Setup Option 2: Local MongoDB

### For Windows

#### Step 1: Download
1. Go to https://www.mongodb.com/try/download/community
2. Select Windows and .msi file
3. Download

#### Step 2: Install
1. Run the installer
2. Click "Next" through setup
3. Choose "Install MongoDB as a Service"
4. Complete installation

#### Step 3: Verify Installation
1. Open Command Prompt
2. Run:
```bash
mongod --version
```

Should show version info.

#### Step 4: Start MongoDB
```bash
mongod
```

You should see:
```
[initandlisten] waiting for connections on port 27017
```

#### Step 5: Create .env File
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/onboarding
NODE_ENV=development
```

---

### For macOS

#### Step 1: Install via Homebrew
```bash
brew tap mongodb/brew
brew install mongodb-community
```

#### Step 2: Start MongoDB
```bash
brew services start mongodb-community
```

#### Step 3: Verify
```bash
mongosh
```

Type `exit` to quit.

#### Step 4: Create .env File
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/onboarding
NODE_ENV=development
```

---

### For Linux (Ubuntu)

#### Step 1: Import GPG Key
```bash
wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -
```

#### Step 2: Add Repository
```bash
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
```

#### Step 3: Install
```bash
sudo apt-get update
sudo apt-get install -y mongodb-org
```

#### Step 4: Start Service
```bash
sudo systemctl start mongod
```

#### Step 5: Create .env File
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/onboarding
NODE_ENV=development
```

---

## Viewing Your Data

### Option 1: MongoDB Compass (GUI)

**Best for beginners**

#### Installation
1. Download from https://www.mongodb.com/products/compass
2. Install on your computer
3. Open Compass

#### Connect
**For Local MongoDB:**
- Connection String: `mongodb://localhost:27017`
- Click "Connect"

**For MongoDB Atlas:**
- Connection String: (copy from Atlas)
- Click "Connect"

#### View Data
1. Click on database `onboarding`
2. Click on collection `users`
3. See all saved users

---

### Option 2: MongoDB Shell (CLI)

**For command-line lovers**

#### Install
```bash
# Already installed with MongoDB Community
```

#### Connect
**Local:**
```bash
mongosh
```

**Atlas:**
```bash
mongosh "mongodb+srv://onboarding_user:password@cluster0.xxxxx.mongodb.net/onboarding"
```

#### Commands
```bash
# Show databases
show dbs

# Use a database
use onboarding

# Show collections
show collections

# View all users
db.users.find()

# View formatted
db.users.find().pretty()

# Count users
db.users.countDocuments()

# Find specific user
db.users.findOne({ firstName: "John" })

# Exit
exit
```

---

## Testing Your Setup

### Step 1: Start MongoDB
- Local: Run `mongod`
- Atlas: Already running (cloud)

### Step 2: Start Node Server
```bash
npm run dev
```

### Step 3: Submit Data
```bash
curl -X POST http://localhost:5000/api/users/submit-onboarding \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "TestUser",
    "lastName": "TestLastName",
    "dateOfBirth": "1990-05-15",
    "gender": "Male"
  }'
```

You should get a success response.

### Step 4: View in Compass
1. Open MongoDB Compass
2. Navigate to `onboarding` → `users`
3. See your newly saved user!

---

## Troubleshooting

### Error: "connect ECONNREFUSED 127.0.0.1:27017"
**Problem:** MongoDB not running

**Fix:**
```bash
# Local: Start MongoDB
mongod

# Or check if service is running
sudo systemctl status mongod  # Linux
brew services list             # macOS
```

### Error: "authentication failed"
**Problem:** Wrong username/password

**Fix:**
- Check credentials in .env
- Verify user exists in MongoDB Atlas
- Ensure IP whitelist includes your IP

### Error: "Invalid connection string"
**Problem:** Wrong connection string format

**Fix:**
- Copy from official MongoDB source
- For Atlas: Copy from "Connect" button
- For Local: Use `mongodb://localhost:27017/databasename`

### Cannot connect to Atlas
**Problem:** Network or credentials issue

**Fix:**
1. Check IP whitelist in Atlas
2. Add your IP: Settings → Network Access
3. Verify username and password
4. Check internet connection

---

## Database Structure (What's Stored)

When you submit a user through the API, MongoDB stores:

```json
{
  "_id": ObjectId("507f1f77bcf86cd799439011"),
  "firstName": "John",
  "lastName": "Doe",
  "dateOfBirth": ISODate("1990-05-15"),
  "gender": "Male",
  "createdAt": ISODate("2026-05-13T10:30:00.000Z"),
  "updatedAt": ISODate("2026-05-13T10:30:00.000Z"),
  "__v": 0
}
```

**Fields:**
- `_id` - Unique identifier (auto-generated)
- `firstName` - User's first name
- `lastName` - User's last name
- `dateOfBirth` - User's birth date
- `gender` - User's gender
- `createdAt` - When record created (auto-generated)
- `updatedAt` - When record last updated (auto-generated)
- `__v` - Version number (used by Mongoose)

---

## Tips for Beginners

1. **Start with Atlas** - Easier than setting up locally
2. **Use Compass** - Visual way to explore data
3. **Keep connection strings safe** - Don't commit .env to GitHub
4. **Test with Postman** - Before connecting from frontend
5. **Check logs** - Server logs tell you what went wrong

---

## Next Steps

1. ✅ Setup MongoDB
2. ✅ Start Node server
3. ✅ Test API with Postman
4. ✅ View data in Compass
5. → Connect frontend to API

Good luck! 🚀
