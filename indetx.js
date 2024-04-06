const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000; // Choose a port for your server
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Destination directory where uploaded files will be stored
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // File name will be set to current timestamp + original file extension
    }
});

const upload = multer({ storage: storage });
app.post('/upload', upload.single('file'), (req, res) => {
    // This route will handle file uploads
    // `file` is the name of the field in your HTML form
    // After successful upload, you can access the uploaded file details via req.file
    res.send('File uploaded successfully');
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

