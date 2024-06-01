const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('index')
});


router.post('/', (req, res) => {
    let marioCounter = 0
    console.log(req.body)
    let mario = req.body.inp;
    mario = mari0.toLowerCase();
    if (req.body.inp == 'mario') {
        marioCounter++
    }

    if(marioCounter == 64){
        res.redirect('https://drive.google.com/file/d/1TF5UQuMHgo-S5foBkoTyg2yVX8BPBq41/view?usp=sharing')
    }
});

//export router
module.exports = router;