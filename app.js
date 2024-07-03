// app.js

const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes'); // ייבוא קובץ הראוטינג

const app = express();

// הגדרת middlewares
app.use(bodyParser.json());

// שימוש בקובץ הראוטינג עבור כל הקריאות
app.use('/api', routes);

// טיפול בשגיאות עבור נתיבים שאינם קיימים
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

// טיפול בשגיאות כלליות
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
