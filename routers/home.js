const {Router} = require('express')
const routerHome = Router()

routerHome.get('/', async (req, res)=>{
    res.render('home');
})

module.exports = routerHome
