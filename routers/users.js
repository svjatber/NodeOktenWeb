const {Router} = require('express')
const routerUsers = Router()
const User = require('../model/user')

routerUsers.get('/:userName',  async (req,res)=>{
    const users = await User.getAllUsers()
    res.render('users',{users})
})

module.exports = routerUsers
