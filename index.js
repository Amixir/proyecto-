const express = require ("express");
const app = express();
const port = 3000;

app.get ("/", (req,res)=>{
    res.send("lo que se le manda al navegador")
});

app.listen(port, ()=>{
    console.log("empezo el servidor"); 
})