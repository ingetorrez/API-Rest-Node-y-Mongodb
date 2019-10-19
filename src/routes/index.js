const Router = require('express');

const router = Router();


router.get('/', (req, res) => {
    res.send('Welcome JS Community');
})

module.exports = router;