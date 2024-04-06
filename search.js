const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// GET route to check if a file exists in the uploads directory
router.get('/:filename', (req, res) => {
    const fileName = req.params.filename;
    const uploadDir = path.join(__dirname, '..', 'uploads'); // Assuming uploads directory is one level up from routes directory

    fs.readdir(uploadDir, (err, files) => {
        if (err) {
            console.error('Error reading directory:', err);
            return res.status(500).json({ success: false, error: 'Internal Server Error' });
        }

        if (files.includes(fileName)) {
            res.json({ success: true, exists: true });
        } else {
            res.json({ success: true, exists: false });
        }
    });
});

module.exports = router;
const app = express();

app.use('/search', searchRoute);

// Your other routes and middleware

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
