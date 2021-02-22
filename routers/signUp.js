const {Router} = require('express')
const routerSingUp = Router()
const User = require('../model/user')

routerSingUp.get('/',  (req,res)=>{
    res.render('signUp')
})
routerSingUp.post('/', async (req,res)=>{
    const {name, email, password} = req.body
    const user0 = new User(name, email, password)
    const user = await user0.signUp(email,password)
    if(!!user) return res.redirect(`/users/${user.name}`);
    res.redirect('/error');
})
module.exports = routerSingUp
