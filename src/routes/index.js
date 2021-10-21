const express = require('express');
const router = express.Router();


router.get('/', (req, res) =>{
    //res.sendFile(path.join(__dirname, 'views/index.html'));
    res.render('index.html', { title: 'First website' });
});

router.get('/contact', (req, res) =>{
    //res.sendFile(path.join(__dirname, 'views/index.html'));
    res.render('contact.html', { title: 'Contact page' });
});

module.exports = router;