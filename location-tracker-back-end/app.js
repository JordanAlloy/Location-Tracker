const express = require('express');
const app = express();

// port configuration default on 3000 if no environment variable 
const PORT = process.env.PORT || 3000;

// Web server port listening
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

// REST endpoint for HTTP GET 
app.get('/', (req, res) => {
    res.send('Hello World location tracker!')
})