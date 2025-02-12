const express = require('express');
const {GetUserInfo, UpdateUserInfo} = require('../controllers/userController');
const router = express.Router();
const {signup, login, protect} = require('../controllers/authController');

const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");


/**
 * @swagger
 * /api/v1/users/signup:
 *   post:
 *     summary: User signup
 *     description: Register a new user in the system.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "John Doe"
 *               email:
 *                 type: string
 *                 example: "johndoe@example.com"
 *               password:
 *                 type: string
 *                 example: "password123"
 *               passwordConfirm:
 *                 type: string
 *                 example: "password123"
 *     responses:
 *       201:
 *         description: User created successfully
 *       400:
 *         description: Bad request, invalid data
 */
router.post('/signup', signup); 
 
/**
 * @swagger
 * /api/v1/users/login:
 *   post:
 *     summary: User login
 *     description: Login an existing user.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: "user@example.com"
 *               password:
 *                 type: string
 *                 example: "password123"
 *     responses:
 *       200:
 *         description: Successfully logged in
 *       401:
 *         description: Unauthorized, invalid credentials
 */ 

router.post('/login', login);


/**
 * @swagger
 * /api/v1/users:
 *   get:
 *     summary: Get logged-in user's info
 *     description: Returns the details of the authenticated user.
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successfully retrieved user info
 *       401:
 *         description: Unauthorized, token missing or invalid
 */
router.route('/').get(protect, GetUserInfo);

/**
 * @swagger
 * /api/v1/users:
 *   patch:
 *     summary: Update user info
 *     description: Allows an authenticated user to update their information.
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Updated Name"
 *               email:
 *                 type: string
 *                 example: "updated@example.com"
 *               role:
 *                 type: string
 *                 example: "user"
 *     responses:
 *       200:
 *         description: Successfully updated user info
 *       400:
 *         description: Bad request, validation error
 *       401:
 *         description: Unauthorized, token missing or invalid
 */
router.route('/').patch(protect, UpdateUserInfo);

module.exports =  router;
