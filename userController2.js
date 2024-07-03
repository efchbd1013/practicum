// userController.js

// פונקציה ליצירת משתמש חדש
function createUser(req, res) {
    const { name, email, phone } = req.body;
    // כאן תינתן קריאה למודול היוזר לאחר יצירתו
    // userModule.createUser(name, email, phone);
    res.status(201).send({ message: 'User created', user: { name, email, phone } });
}

// פונקציה לעדכון פרטי משתמש לפי ID
function updateUser(req, res) {
    const { id } = req.params;
    const { name, email, phone } = req.body;
    // כאן תינתן קריאה למודול היוזר לאחר יצירתו
    // user.updateUser(parseInt(id), name, email, phone);
    res.status(200).send({ message: `User with ID ${id} updated`, user: { id, name, email, phone } });
}

// פונקציה למחיקת משתמש לפי ID
function deleteUser(req, res) {
    const { id } = req.params;
    // כאן תינתן קריאה למודול היוזר לאחר יצירתו
    // user.deleteUser(parseInt(id));
    res.status(200).send({ message: `User with ID ${id} deleted` });
}

// פונקציה לקבלת משתמש לפי ID
function getUserById(req, res) {
    const { id } = req.params;
    // כאן תינתן קריאה למודול היוזר לאחר יצירתו
    // const user = user.getUserById(parseInt(id));
    const user = { id, name: 'John Doe', email: 'john.doe@example.com', phone: '123-456-7890' }; // דוגמה בלבד
}

