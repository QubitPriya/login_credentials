const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Onboarding Form API',
      version: '1.0.0',
      description: 'A basic onboarding form API built with Node.js, Express, and MongoDB for fresher-level learning',
      contact: {
        name: 'Developer',
        url: 'https://github.com'
      }
    },
    servers: [
      {
        url: 'http://localhost:5000',
        description: 'Development server'
      }
    ],
    components: {
      schemas: {
        User: {
          type: 'object',
          required: ['firstName', 'lastName', 'dateOfBirth', 'gender'],
          properties: {
            _id: {
              type: 'string',
              description: 'Unique user ID (MongoDB ObjectId)'
            },
            firstName: {
              type: 'string',
              description: 'User first name'
            },
            lastName: {
              type: 'string',
              description: 'User last name'
            },
            dateOfBirth: {
              type: 'string',
              format: 'date',
              description: 'User date of birth (YYYY-MM-DD format)'
            },
            gender: {
              type: 'string',
              enum: ['Male', 'Female', 'Other'],
              description: 'User gender'
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
              description: 'Timestamp when user was created'
            },
            updatedAt: {
              type: 'string',
              format: 'date-time',
              description: 'Timestamp when user was last updated'
            }
          }
        },
        SuccessResponse: {
          type: 'object',
          properties: {
            success: {
              type: 'boolean',
              example: true
            },
            message: {
              type: 'string',
              example: 'User onboarding data saved successfully'
            },
            data: {
              $ref: '#/components/schemas/User'
            }
          }
        },
        ErrorResponse: {
          type: 'object',
          properties: {
            success: {
              type: 'boolean',
              example: false
            },
            message: {
              type: 'string',
              example: 'Error message here'
            },
            error: {
              type: 'string'
            }
          }
        }
      }
    }
  },
  apis: ['./routes/*.js']
};

const specs = swaggerJsdoc(options);

module.exports = specs;
