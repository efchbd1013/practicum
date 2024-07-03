// userModel.js

let users = [];
let nextId = 1;

class User {
    constructor(name, email, phone) {
        this.id = nextId++;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
}

// יצירת משתמש חדש
function createUser(name, email, phone) {
    const user = new User(name, email, phone);
    users.push(user);
    return user;
}

// עדכון משתמש קיים
function updateUser(id, name, email, phone) {
    const user = users.find(u => u.id === id);
    if (!user) return null;
    
    if (name) user.name = name;
    if (email) user.email = email;
    if (phone) user.phone = phone;
    
    return user;
}

// מחיקת משתמש לפי ID
function deleteUser(id) {
    const index = users.findIndex(u => u.id === id);
    if (index === -1) return null;
    
    const user = users.splice(index, 1);
    return user[0];
}

// קבלת משתמש לפי ID
function getUserById(id) {
    return users.find(u => u.id === id) || null;
}

module.exports = {
    createUser,
    updateUser,
    deleteUser,
    getUserById
};
