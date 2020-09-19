const express =require('express')
const cors =require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const sequelize = require('./models')
const config =require('./config/config')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())



app.post('/register',(req,res)=>{
    res.send({
        "message" :`hai! ${req.body.email} kamu telah terdaftar `
    })
})


sequelize.sync()
    .then(()=>{
        // app.listen(process.env.PORT || 8081) diganti dengan variabel
       app.listen(config.port)
        console.log(`Server Started di prot ${config.port}`) //cek port
    })