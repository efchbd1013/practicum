// userController.js
const userModule = require('./userModule'); // ייבוא הפונקציות מהממודול

// פונקציה ליצירת משתמש
function createUser(req, res) {
  const { name, email, phone } = req.body;

  // ולידציה של הקלט
  if (!name || !email || !phone || email.includes(' ') || !email.includes('@')) {
    return res.status(400).json({ message: 'Invalid user data' });
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
