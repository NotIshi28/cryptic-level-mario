const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('index')
    // cookies = cookies.replace(';', '')
});


router.post('/', (req, res) => {
    var cookies = req.cookies
    console.log(cookies)
    // cookies = cookies.split('')
    // for (let i = 0; i < cookies.length; i ++) {
        //     if (cookies[i] == "admin=ts123") {
            //         found = true
            //         return res.render('adminLogin', {message: false, user: req.user})
            //     }
            // }
            
    let marioCounter = 0
    console.log(marioCounter)
    console.log(req.body)
    let mario = req.body.inp;
    mario = mario.toLowerCase();
    if (req.body.inp == 'mario') {
        if(!req.cookies.mario){
            res.cookie('mario', '0')
        }
        else{
            if(req.cookies.mario == 63){
                res.redirect('https://drive.google.com/file/d/1TF5UQuMHgo-S5foBkoTyg2yVX8BPBq41/view?usp=sharing')
            }
            else{
                marioCounter = parseInt(req.cookies.mario) + 1;
                res.cookie('mario', marioCounter);
            }
        }
        res.redirect('/')
    }
    else{
        res.redirect('/')

    }
});

//export router
module.exports = router;