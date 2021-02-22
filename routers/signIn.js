const {Router} = require('express')
const routerSingIn = Router()
const User = require('../model/user')

routerSingIn.get('/',  (req,res)=>{
    res.render('signIn')
})
routerSingIn.post('/', async (req, res)=>{
    const {email,password} = req.body
    const user = await User.signIn(email, password)
    if(user) return res.redirect(`/users/${user.name}`)
    res.redirect('/error')
})
module.exports = routerSingIn
