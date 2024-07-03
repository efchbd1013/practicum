// routes.js

const express = require('express');
const userController = require('./userController'); // ייבוא ה-controller של המשתמשים

const router = express.Router();

// הגדרת כל הראוטים של האפליקציה
router.use('/users', userController);

module.exports = router;
