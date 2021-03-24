const express = require('express')
const app = express()
const port = process.ENV.PORT
const routes = require('./routes.js')
const cors = require('cors');
const mongoose  = require('mongoose');

app.use(cors());
app.use(express.json())
app.use(routes);

app.use((err,req,res,next)=>{
res.status(422).send({error:err.message })

})

app.listen(port, () => console.log(`listening at http://localhost:${port}`))





