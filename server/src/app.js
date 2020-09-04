const express =require('express')
const cors =require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')


const app = express()
app.use(morgan('combine'))
app.use(bodyParser.json())
app.use(cors())



app.get('/status',(req,res)=>{
    res.send({
        "message" :"hello internet saya lahir"
    })
})
app.listen(process.env.PORT || 8081)