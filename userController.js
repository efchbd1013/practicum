// userController.js

const express = require('express');
const router = express.Router();

// מערך זמני לשמירת המשתמשים
let users = [];
let nextId = 1;

// פונקציה לבדיקת תקינות מספר טלפון (בפורמט ישראלי)
function isValidPhone(phone) {
    const re = /^(\+972|0)([23489]|5[0248]|77)[1-9]\d{6}$/;
    return re.test(phone);
}

// יצירת משתמש חדש
router.post('/', (req, res) => {
    const { name, email, phone } = req.body;
    if (!isValidPhone(phone)) {
        return res.status(400).json({ error: 'Invalid phone number format' });
    }

    const user = { id: nextId++, name, email, phone };
    users.push(user);
    res.status(201).json(user);
});

// עדכון משתמש קיים
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name, email, phone } = req.body;
    const user = users.find(u => u.id === parseInt(id));
    if (!user) {
        return res.status(404).send('User not found');
    }

    if (name) user.name = name;
    if (email) user.email = email;
    if (phone) user.phone = phone;
    
    res.json(user);
});

// מחיקת משתמש לפי ID
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const index = users.findIndex(u => u.id === parseInt(id));
    if (index === -1) {
        return res.status(404).send('User not found');
    }

    const user = users.splice(index, 1);
    res.json(user[0]);
});

// קבלת משתמש לפי ID
router.get('/:id', (req, res) => {
    const { id } = req.params;
    const user = users.find(u => u.id === parseInt(id));
    if (!user) {
        return res.status(404).send('User not found');
    }
    res.json(user);
});

module.exports = router;
