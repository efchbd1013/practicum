// userRoutes.js

const express = require('express');
const router = express.Router();
const userController = require('./userController');

// יצירת משתמש חדש
router.post('/users', userController.createUser);

// עדכון פרטי משתמש לפי ID
router.put('/users/:id', userController.updateUser);

// מחיקת משתמש לפי ID
router.delete('/users/:id', userController.deleteUser);

// קבלת משתמש לפי ID
router.get('/users/:id', userController.getUserById);

module.exports = router;
