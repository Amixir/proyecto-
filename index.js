const express = require ("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");

app.use(require('body-parser').urlencoded({extended: false}));

mongoose.connect("mongodb://localhost/Proyecto");

const Usuari = mongoose.model("usuarios",{
    Usuario:String,
    Contraseña:String
});



app.get("/registro",(req,res)=>{
    let formulario  = `
    <!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0" >
<title>GranDespacho</title>
<link rel="stylesheet" href="https://bootswatch.com/5/zephyr/bootstrap.min.css">
<link href="css/main12.css" rel="stylesheet" />
<script src="js/main.js"></script>
</head>
<body>
<nav>
<class="navbar navbar-expand-lg navbar-light bg-light>
<a href="https://www.exito.com/">Grupo Exito</a>
</nav>
<br>
<h1 class="titulo"> GranDespacho </h1>
</center>
<div class="contenedoringreso">
<div id="aplicacion" class="row pt-10">
<div class="m-0 row justify-content-center">
<div class ="col-auto p-5 text-center">
<div class="card">
<div class="card-header">
	
</div>
<form id='ingreso-form' class="card-body" action="/grabar" method="post" >
<h2 class="titulo">INGRESO </h2>
<center>
<img src="img/logo.jpg" width="100" height="100"  >
</center>
<br>
<div class="form-groupp">
<input type="text" id="Usuario" placeholder="usuario" class="form.control"><br>
</div>
<div class="form-group">
<input type="password" id="Contraseña" placeholder="contraseña" class="password"><br><br>
</div>
<input type='submit' class="btn btn-lg btn-primary btn-block" value="Ingresar"><br>
</form>
</div>
</div>
</div>
</div>
</div>
<script src="main.js"></script>
</body>
</html>
    `;
    res.send(formulario);

    
});

app.post ("/grabar", (req,res)=>{
    new Usuari(req.body).save().then(()=>{
    res.send("usuario guardado con exito")});
});



// app.get ("/grabar", (req,res)=>{
//     res.send("lo que se le manda al navegador");
//     new Usuarios({
//         Usuario:"Andresc",
//         Contraseña:"1234567"
//     }).save().then(()=>console.log("exito"))
// });

    app.get("/listar", (req,res)=>{
      
     Usuarios.find((err,doc)=>{
         console.log(doc);
         console.log(doc[1]);
         let html ="";
         let usuario; 
         for(var i in doc){
             usuario = doc[i];
           html +=`<span>${usuario.Usuario}</span> 
                     <span>${usuario.Contraseña}</span><br>`;
         }
         res.send(html);
     });
});


 



 
app.listen(port, ()=>{
    console.log("empezo el servidor"); 
});      