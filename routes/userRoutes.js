const express = require('express');
const User = require('../models/User');

const router = express.Router();

/**
 * @swagger
 * /api/users/submit-onboarding:
 *   post:
 *     summary: Submit user onboarding data
 *     description: Create a new user with onboarding information (name, date of birth, gender)
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - firstName
 *               - lastName
 *               - dateOfBirth
 *               - gender
 *             properties:
 *               firstName:
 *                 type: string
 *                 description: User's first name
 *                 example: John
 *               lastName:
 *                 type: string
 *                 description: User's last name
 *                 example: Doe
 *               dateOfBirth:
 *                 type: string
 *                 format: date
 *                 description: User's date of birth (YYYY-MM-DD)
 *                 example: "1990-05-15"
 *               gender:
 *                 type: string
 *                 enum:
 *                   - Male
 *                   - Female
 *                   - Other
 *                 description: User's gender
 *                 example: Male
 *     responses:
 *       201:
 *         description: User created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SuccessResponse'
 *             example:
 *               success: true
 *               message: "User onboarding data saved successfully"
 *               data:
 *                 _id: "507f1f77bcf86cd799439011"
 *                 firstName: "John"
 *                 lastName: "Doe"
 *                 dateOfBirth: "1990-05-15T00:00:00.000Z"
 *                 gender: "Male"
 *                 createdAt: "2026-05-13T10:30:00.000Z"
 *                 updatedAt: "2026-05-13T10:30:00.000Z"
 *       400:
 *         description: Missing required fields
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *             example:
 *               success: false
 *               message: "All fields are required"
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *             example:
 *               success: false
 *               message: "Error saving user data"
 *               error: "Error details here"
 */
// POST endpoint to create a new user
router.post('/submit-onboarding', async (req, res) => {
  try {
    const { firstName, lastName, dateOfBirth, gender } = req.body;

    // Validation
    if (!firstName || !lastName || !dateOfBirth || !gender) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    // Create new user document
    const newUser = new User({
      firstName,
      lastName,
      dateOfBirth,
      gender
    });

    // Save to database
    const savedUser = await newUser.save();

    res.status(201).json({
      success: true,
      message: 'User onboarding data saved successfully',
      data: savedUser
    });
  } catch (error) {
    console.error('Error saving user:', error);
    res.status(500).json({
      success: false,
      message: 'Error saving user data',
      error: error.message
    });
  }
});

module.exports = router;
