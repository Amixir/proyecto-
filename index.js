const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");

app.use(require('body-parser').urlencoded({ extended: false }));

mongoose.connect("mongodb://localhost/Proyecto");

// const Ingreso = mongoose.model("Usuarios",{
// });

// const Vehiculos = mongoose.model("Vehiculos",{
//     placa:String,
//     tipo:String
// });

// const Contenedor = mongoose.model("Contenedor",{
//     contenedor:String,
//     cantidad:Number,
//     cantidaducr:Number
// });

const Usuarios = mongoose.model("Usuarios",{
    nombre:String,
    contraseña:Number,
    dependencia:Number
});

// PAGINA DE INGRESO
app.get("/ingreso",(req,res)=>{
        let ingreso = `<form id='ingreso-form' class="card-body" action="CREAR VIAJE"method="post" >
        <h2 class="titulo">INGRESO </h2>
        <br>
        <div class="form-groupp">
        <input type="text" id="usuarios" placeholder="usuario" class="form.control"><br>
        </div>
        <div class="form-group">
        <input type="password" id="contraseñas" placeholder="contraseña" class="password"><br><br>
        </div>
        <input type='submit' class="btn btn-lg btn-primary btn-block" value="Ingresar"><br>
        </form>
        <a href="/registro">
	    <input type="submit" value="REGISTRARSE" text="center" class="btn btn-primary btn-block"></a>
        `;
        res.send(ingreso);
});



app.get("/registro",(req,res)=>{
    let formulario = `
<form  class="card-body" action="/" method="post" >
<h2 class="titulo"> REGISTRO </h2>
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
    `;
    res.send(formulario);

});


app.post ("/", (req,res)=>{
    res.send("usuario guardado <a href=/listar>Continuar</a>");
    new Usuarios({
        nombre:req.body.nombre,
        dependencia:req.body.dependencia,
        contraseña:req.body.contraseña        
    }).save().then(()=>res.send(Usuarios));
});


// app.get("/borrar",(req,res)=>{       
//         Usuarios.deleteOne({_id:req.query.id},(error)=>{
           
//            let html ="";
//             if(error){
//                 res.send("error al borrar");
//             }
//             else{
//                 res.send("usuario borrado <a href='/listar'>Volver</a> <a href='/novedad'>Continuar</a>");
//             }
//         })
// });

// app.get("/listar",(req,res)=>{
//     Usuarios.find((err,doc)=>{
//         console.log(doc);
//         console.log(doc[0]);
//         let html ="";
//         let usuario;
//         for (var i in doc){
//                 usuario = doc[i];
//                 html+=`<span>${usuario.nombre}</span>
//                 <span>${usuario.dependencia}</span> <span>${usuario.contraseña}</span> | `;
//                 html+=`<a href="/borrar?id=${usuario._id}">Borrar</a><br>`;
//         }        
//             res.send(html);
//     });
// });





// app.get("/novedad",(req,res)=>{
//     let pagina = `
//     <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <meta http-equiv="X-UA-Compatible" content="ie=edge">
//     <title>GRUPO EXITO</title>
//     <link rel="stylesheet" href="https://bootswatch.com/5/zephyr/bootstrap.min.css">
// 	<link href="css/Contendor1.css" rel="stylesheet" />
// 	</head>
// 	<body>
//     <nav class="navbar navbar-dark bg-dark">
//         <a class="navbar-brand" href="#">GRUPO EXITO</a>
//     </nav>
// 	<div class="contenedores">
//         	<div id="aplicacionP1" class="row pt-5">
// 				<div class="row justify-content-start">
//             <div class="col-4">
//                 <div class="card">
//                     <div class="card-header">
// 						<div class ="col-auto p-5 text-center">
// 							<div class="m-0 row justify-content-center">
//                         		<h4>INGRESA LOS CONTENEDORES</h4>
//                     				<form id="contenedor-form" class="card-body">
//                         				<div class="form-group">
//                             				<input type="text" id="contenedor" placeholder="CONTENEDOR" class="form-control"><br>
// 										</div>
// 											<div class="form-group">
// 												<input type="number" id="unidadcarga" placeholder="CODIGO UCR" class="form-control" min="1" max="15"><br>
// 											</div>
// 											<div class="form-group">
// 												<input type="number" id="cantidaducr" placeholder="CANTIDAD UCR" min="1" class="form-control"><br>
// 											</div>
// 											<input type="submit" id="boton" value="INGRESAR" text="center" class="btn btn-primary btn-block">
// 											<!-- <a href="ucr.html">e
// 											<input class="btn btn-primary btn-block" type="button" value="Continuar" id ="guardar"></a> -->

// 									</form>
// 									<a href="/reservas">
// 									 <input type="submit" value="Guardar" text="center" class="btn btn-primary btn-block"></a>
// 							</div>				
//                         </div>            
// 					</div>
// 				</div>
//             </div>
			
// 				<div class="col-4">
// 					<div class="card">
// 						<div class="card-header">
// 							<div class ="col-auto p-5 text-center">
// 								<div class="m-0 row justify-content-center">
// 									<h4>INGRESA LOS DATOS DEL TRANSPORTADOR</h4>
// 										<form id="transporte-form" class="card-body">
// 											<div class="form-group">
// 												<input type="text" id="PLACA" placeholder="PLACA DEL VEHICULO" class="form-control"><br>
// 											</div>
// 												<div class="form-group">
// 													<input type="text" id="cedula" placeholder="CEDULA CONDUCTOR" class="form-control" ><br>
// 												</div>
// 												<input type="submit" value="INGRESAR" text="center" class="btn btn-primary btn-block">

// 												<!-- <a href="ucr.html">
// 												<input class="btn btn-primary btn-block" type="button" value="Continuar" id ="guardar"></a> -->
// 										</form>

// 										</div>				
// 							</div>            
// 						</div>
// 					</div>
// 				</div>

// 				<div id="lista-datos" class="col-4">
// 				</div>
// 				</div>
// 			</div>
// 		</div>
// 		         <!-- PRODUCTS LIST -->
            
//     </div>

// 	<script src="js/tec.js"></script>
	
// 	</body>
// 	</html>
//     `;
//     res.send(pagina);
// });

// app.get("/reservas",(req,res)=>{
//     let reserva = `
//     <!DOCTYPE html>
// <html lang="en">
// <head>
// <meta charset="utf-8">
// <meta name="viewport" content="width=device-width, initial-scale=1.0" >
// <title>GranDespacho</title>
// <link rel="stylesheet" href="https://bootswatch.com/5/zephyr/bootstrap.min.css">
// <link href="css/main12.css" rel="stylesheet" />

// </head>
// <body>
// <nav>
// <class="navbar navbar-expand-lg navbar-light bg-light>
// <a href="https://www.exito.com/">Grupo Exito</a>
// </nav>
// <br>
// <h1 class="titulo"> GranDespacho </h1>
// </center>
// <div class="contenedoringreso">
// <div id="aplicacion" class="row pt-10">
// <div class="m-0 row justify-content-center">
// <div class ="col-auto p-5 text-center">
// <div class="card">
// <div class="card-header">	
// </div>

// <form  class="card-body" action="/grabar" method="post" >
// <h2 class="titulo">INGRESO </h2>
// <center>
// <img src="img/logo.jpg" width="100" height="100"  >
// </center>
// <br>
// <label for="nombre">
// <input type="text" name="nombre" id="nombre" placeholder="nombre" class="form.control"><br>
// </label>
// <label for="dependencia">
// <input type="text" name="dependencia" id="dependencia" placeholder="dependencia" class="form.control"><br>
// </label>
// <label for="contraseña">
// <input type="password" name="contraseña" id="contraseña" placeholder="contraseña" class="form.control"><br>
// </label>
// <input type='submit' class="btn btn-lg btn-primary btn-block" value="Ingresar"><br>
// </form>

// </body>
// </html>
// `;
// res.send(reserva);
// });



app.listen(port, ()=>{
    console.log("empezo el servidor"); 
});  