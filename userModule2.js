// userModule.js

let users = []; // מערך ריק לאחסון המשתמשים

// פונקציה ליצירת משתמש חדש
function createUser(name, email, phone) {
    let user = {
        id: users.length + 1,
        name: name,
        email: email,
        phone: phone
    };
    users.push(user);
    console.log(`Created user:`, user);
}

// פונקציה לעדכון פרטי משתמש לפי ID
function updateUser(userId, newName, newEmail, newPhone) {
    let user = users.find(u => u.id === userId);
    if (user) {
        if (newName) user.name = newName;
        if (newEmail) user.email = newEmail;
        if (newPhone) user.phone = newPhone;
        console.log(`Updated user with ID ${userId}:`, user);
    } else {
        console.log(`User with ID ${userId} not found.`);
    }
}

// פונקציה למחיקת משתמש לפי ID
function deleteUser(userId) {
    users = users.filter(u => u.id !== userId);
    console.log(`Deleted user with ID ${userId}.`);
}

// פונקציה לקבלת משתמש לפי ID
function getUserById(userId) {
    let user = users.find(u => u.id === userId);
    if (user) {
        console.log(`User with ID ${userId}:`, user);
    } else {
        console.log(`User with ID ${userId} not found.`);
    }
}

module.exports = {
    createUser,
    updateUser,
    deleteUser,
    getUserById
};
