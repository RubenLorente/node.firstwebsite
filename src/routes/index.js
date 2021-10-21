const express = require('express');
const router = express.Router();


router.get('/', (req, res) =>{
    //res.sendFile(path.join(__dirname, 'views/index.html'));
    try{
        res.render('index.html', { title: 'First website' });
    }catch(error){
        console.error(error);
        return res.status(500).send("Server error")
    }
});

router.get('/contact', (req, res) =>{
    //res.sendFile(path.join(__dirname, 'views/index.html'));
    try{
        res.render('contact.html', { title: 'Contact page' });
    }catch(error){
        console.error(error);
        return res.status(500).send("Server error")
    }
});

module.exports = router;