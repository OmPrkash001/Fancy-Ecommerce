const express = require ('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');

mongoose.connect(`mongodb+srv://omprakashupadhyay888_db_user:Admin%4050501@cluster0.jqhym3h.mongodb.net/your_database`

).then( ()=> console.log('Mongoose Connected')).catch((error) => console.log(error));


const app = express();
const PORT = process.env.PORT || 5000;

app.use(
    cors({
        origin : 'http://localhost:5173',
        methods: ['GET', 'POST', 'DELETE', 'PUT'],
        allowedHeaders : [
            "Content-Type",
            "Authorization",
            "Cache-Control",
            "Expires",
            "Pragma"
        ],
        credentials : true
    })
);

app.use(cookieParser());
app.use(express.json());

// Basic test route
app.get('/', (req, res) => {
    res.json({ message: 'Server is running' });
});

// Basic error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`));
