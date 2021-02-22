const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const routerHome = require('./routers/home');
const routerSignUp = require('./routers/signUp');
const routerSignIn = require('./routers/signIn')
const routerUsers = require('./routers/users');
const routerError = require('./routers/error');

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(express.urlencoded({extended: true}))
app.use('/', routerHome);
app.use('/SignUp', routerSignUp)
app.use('/SignIn', routerSignIn)
app.use('/users', routerUsers)
app.use('/error', routerError)

app.listen(5000, ()=>{
    console.log('Starting developer server...')
})
