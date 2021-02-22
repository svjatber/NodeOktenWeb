const {Router} = require('express')
const routerError = Router()

routerError.get('/', async (req, res)=>{
    res.render('error',{
        title: 'You are not registеred or these password && email are not valid'
    });
})

module.exports = routerError
