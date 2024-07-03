const express = require('express');
const userModule = require('./userModule'); // ייבוא הפונקציות מהממודול
const router = express.Router();

// מערך זמני לשמירת המשתמשים
let users = [];
let nextId = 1;

// פונקציה לבדיקת תקינות מספר טלפון (בפורמט ישראלי)
function isValidPhone(phone) {
    const re = /^(\+972|0)([23489]|5[0248]|77)[1-9]\d{6}$/;
    return re.test(phone);
}

// פונקציה ליצירת משתמש
function createUser(req, res) {
    const { name, email, phone } = req.body;

    // ולדציה של הקלט
    if (!name || !email || !phone || email.includes(' ') || !email.includes('@')) {
        return res.status(400).json({ message: 'Invalid user data' });
    }

    if (!isValidPhone(phone)) {
        return res.status(400).json({ error: 'Invalid phone number format' });
    }

    const user = userModule.createUser(name, email, phone);
    res.status(201).json(user);
}

// פונקציה לעדכון משתמש
function updateUser(req, res) {
    const { id } = req.params;
    const { name, email, phone } = req.body;
    const user = userModule.updateUser(Number(id), name, email, phone);
    if (user) {
        res.status(200).json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
}

// פונקציה למחיקת משתמש
function deleteUser(req, res) {
    const { id } = req.params;
    const user = userModule.deleteUser(Number(id));
    if (user) {
        res.status(200).json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
}

// פונקציה לקבלת משתמש לפי ID
function getUserById(req, res) {
    const { id } = req.params;
    const user = userModule.getUserById(Number(id));
    if (user) {
        res.status(200).json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
}

// ייצוא הפונקציות לשימוש בקובץ הראוטר
module.exports = {
    createUser,
    updateUser,
    deleteUser,
    getUserById
};

// הגדרת הראוטים
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
router.get('/:id', getUserById);

module.exports = router;