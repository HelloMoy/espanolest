const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.html');
});

router.get('/home', (req, res) => {
    res.render('index.html');
});

router.get('/content', (req, res) => {
    res.render('content.html');
});

router.get('/news', (req, res) => {
    res.render('news.html');
});

router.get('/questions', (req, res) => {
    res.render('questions.html');
});

router.get('/events', (req, res) => {
    res.render('events.html');
});

router.get('/books', (req, res) => {
    res.render('books.html');
});

router.get('/workbooks', (req, res) => {
    res.render('workbooks.html');
});

router.get('/test', (req, res) => {
    res.render('test.html');
});

router.get('/videos', (req, res) => {
    res.render('videos.html');
});

router.get('/library', (req, res) => {
    res.render('library.html');
});

//Pendient
router.get('/pendient', (req, res) => {
    res.render('pendient.html');
});


module.exports = router;