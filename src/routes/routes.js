const {Router} = require('express')
const router = Router();
router.get('/', (req, res) => {
    res.render('index', {
        title: 'Página principal'
    });
});

router.get('/about', (req, res) => {
    res.render('about', {
        title: 'Página principal'
    });
});

router.get('/projects', (req, res) => {
    res.render('projects', {
        title: 'My projects'
    });
});

router.get('/skills', (req, res) => {
    res.render('skills', {
        title: 'My skills'
    });
});
router.get('/javascript', (req, res) => {
    res.render('javascript', {
        title: 'javascript'
    });
});

router.get('/contact', (req, res) => {
    res.render('contact', {
        title: 'my contact'
    });
});



router.get('/exp_electronica', (req, res) => {
    res.render('about', {
        title: 'Página principal'
    });
});
module.exports = router;