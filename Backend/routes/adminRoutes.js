const express = require('express');
const router = express.Router();
const {GetUser, GetAllUser, UpdateUser, DeleteUser, GetAdminInfo, UpdateAdminInfo} = require('../controllers/adminController');
const {protect, restrictTo} = require('../controllers/authController');


/**
 * @swagger
 * /api/v1/admin:
 *   get:
 *     summary: Get admin info
 *     description: Returns the details of the authenticated admin.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successfully retrieved admin info
 *       401:
 *         description: Unauthorized, token missing or invalid
 */
router.route('/').get(protect, restrictTo, GetAdminInfo); 

/**
 * @swagger
 * /api/v1/admin:
 *   patch:
 *     summary: Update admin info
 *     description: Allows an authenticated admin to update their information.
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
 *                 example: "Admin Name"
 *               email:
 *                 type: string
 *                 example: "admin@example.com"
 *     responses:
 *       200:
 *         description: Successfully updated admin info
 *       400:
 *         description: Bad request, validation error
 *       401:
 *         description: Unauthorized, token missing or invalid
 */
router.route('/').patch(protect, restrictTo, UpdateAdminInfo); 


/**
 * @swagger
 * /api/v1/admin/users:
 *   get:
 *     summary: Get all users
 *     description: Returns a list of all users (requires admin role).
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successfully retrieved all users
 *       401:
 *         description: Unauthorized, token missing or invalid
 *       403:
 *         description: Forbidden, user not authorized
 */

router.route('/users').get(protect, restrictTo, GetAllUser);

/**
 * @swagger
 * /api/v1/admin/users/{id}:
 *   get:
 *     summary: Get user info by ID
 *     description: Returns the details of a specific user by their ID (requires admin role).
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the user to retrieve
 *         schema:
 *           type: string
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successfully retrieved user info
 *       401:
 *         description: Unauthorized, token missing or invalid
 *       403:
 *         description: Forbidden, user not authorized
 */
 
router.route('/users/:id').get(protect, restrictTo, GetUser);

/**
 * @swagger
 * /api/v1/admin/users/{id}:
 *   patch:
 *     summary: Update user info by ID
 *     description: Allows an admin to update a specific user's info.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the user to update
 *         schema:
 *           type: string
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
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successfully updated user info
 *       400:
 *         description: Bad request, validation error
 *       401:
 *         description: Unauthorized, token missing or invalid
 *       403:
 *         description: Forbidden, user not authorized
 */

router.route('/users/:id').patch(protect, restrictTo, UpdateUser);

/**
 * @swagger
 * /api/v1/admin/users/{id}:
 *   delete:
 *     summary: Delete user by ID
 *     description: Allows an admin to delete a specific user.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the user to delete
 *         schema:
 *           type: string
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successfully deleted user
 *       401:
 *         description: Unauthorized, token missing or invalid
 *       403:
 *         description: Forbidden, user not authorized
 */ 
router.route('/users/:id').delete(protect, restrictTo, DeleteUser);

module.exports = router;