const express = require('express');
const app = express();
const PORT = 3000;
app.get('/',(req,res)=>{
    res.send("Hello from API")
})

app.listen(PORT,()=>{
    console.log(`listening at ${PORT}`)
})