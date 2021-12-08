const express = require ("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");

app.use(require('body-parser').urlencoded({ extended: false }));

mongoose.connect("mongodb://localhost/Proyecto");

const Usuarios = mongoose.model("Usuarios",{
    nombre:String,
    contraseña:String,
    dependencia:String
});
app.get("/listar",(req,res)=>{

    Usuarios.find((err,doc)=>{
        console.log(doc);
        console.log(doc[0]);
        let html ="";
        let usuario;
        for (var i in doc){
                usuario = doc[i];
                html+=`<span>${usuario.nombre}</span>
                <span>${usuario.dependencia}</span> <span>${usuario.contraseña}</span><br>`;

        }
        
            res.send(html);
    });
});

app.post ("/grabar", (req,res)=>{
    res.send("lo que se le manda al navegador");
    new Usuarios({
        nombre:req.body.nombre,
        dependencia:req.body.dependencia,
        contraseña:req.body.contraseña
        
    }).save().then(()=>console.log("exito"))
});

// app.post("/grabar",(req,res)=>{
//     new Usuarios(req.body).save().then(()=>{
//         res.send("usuario guardado");
//     });
//     });


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

</head>
<body>

<form  class="card-body" action="/grabar" method="post" >
<h2 class="titulo">INGRESO </h2>
<center>
<img src="img/logo.jpg" width="100" height="100"  >
</center>
<br>
<label for="nombre">
<input type="text" name="nombre" id="nombre" placeholder="nombre" class="form.control"><br>
</label>
<label for="dependencia">
<input type="text" name="dependencia" id="dependencia" placeholder="dependencia" class="form.control"><br>
</label>
<label for="contraseña">
<input type="password" name="contraseña" id="contraseña" placeholder="contraseña" class="form.control"><br>
</label>
<input type='submit' class="btn btn-lg btn-primary btn-block" value="Ingresar"><br>
</form>


</body>
</html>
    `;
    res.send(formulario);

});

app.listen(port, ()=>{
    console.log("empezo el servidor"); 
});      

// });

// app.get ("/grabar", (req,res)=>{
//     new Usuarios(req.body).save().then(()=>{
//         console.log(req.body);
//         console.log(Usuarios);
//     res.send("usuario guardado con exito")});
// });





//     app.get("/listar", (req,res)=>{
      
//      Usuarios.find((err,doc)=>{
//          console.log(doc);
//         //  console.log(doc[1]);
//         //  console.log(Usuarios);
//          let html ="";
//          let usuario; 
//          for(var i in doc){
//              usuario = doc[i];
//            html +=`<span>${usuario.Usuario}</span>
//                      <span>${usuario.Dependencia}</span><br> 
//                          <span>${usuario.Contraseña}</span><br>`;
                        
//          }
//          res.send(html);
//      });
// });




 



 
