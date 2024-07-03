// app.js

const express = require('express');
const app = express();
const userRoutes = require('./userRoutes');

// מאפשר קריאות ל-JSON בגוף הבקשה
app.use(express.json());

// הכנסת ראוטר המשתמש למסלול '/api'
app.use('/api', userRoutes);

// פתח את השרת על פורט 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
