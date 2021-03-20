const express = require('express');
const app = express();
const apiRouter = require('./routers/app.router')
const mongoose = require('mongoose')

app.use(express.json())

app.use(express.urlencoded({extended: true}))
_connectDB();


app.use('/', apiRouter)

app.listen( 4000, ()=>{
    console.log('Starting developer server...')
});

function _connectDB(){
    mongoose.connect('mongodb://localhost:27017/mydatabase', {useNewUrlParser: true, useUnifiedTopology: true})

    const {connection} = mongoose

    connection.on('error', error => {
        console.log(error)
    })
}
