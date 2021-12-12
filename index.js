const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");


app.use(require('body-parser').urlencoded({ extended: false }));

mongoose.connect("mongodb://localhost/Proyecto");

const Ingreso = mongoose.model("Uusuarioss",{
    nuevo:String,
    clave:Number,
    });



const Usuarios = mongoose.model("Usuarios",{
    nombre:String,
    contraseña:Number,
    dependencia:Number
});

// PAGINA DE INGRESO
app.get("/ingreso",(req,res)=>{
        let ingreso = `
        <title>GranDespacho</title>
        <link rel="stylesheet" href="https://bootswatch.com/5/zephyr/bootstrap.min.css">
        <nav>
        <class="navbar navbar-expand-lg navbar-light bg-light>
        <a href="https://www.exito.com/">Grupo Exito</a>
        </nav>
        <br>
        <center>
        <h1 class="titulo"> GranDespacho </h1>
        </center>
        <div class="contenedoringreso">
        <div id="aplicacion" class="row pt-10">
        <div class="m-0 row justify-content-center">
        <div class ="col-auto p-5 text-center">
        <div class="card">
        <div class="card-header">          
        </div>
        <form id='ingreso-form' class="card text-white bg-warning mb-3" action="/validar" method="post" >
            <h2 class="titulo">INGRESO </h2>
            <br>
            <label for="nuevo">
            <input type="text" name="nuevo" id="nuevo" placeholder="nombre" class="form.control"><br>
            </label>
            <div>
            <label for="clave">
            <input type="password" name="clave" id="clave" placeholder="contraseña" class="form.control"><br><br>
            </label>
            </div>
            <input type='submit' class="btn btn-success" value="Ingresar"><br><br>
            </form>
            <a href="/registro">
            <input type="submit" value="REGISTRARSE" text="center" class="btn btn-secondary"></a>
            </div>
        `;
        res.send(ingreso);
});
// GUARDAR USUARIOS Y MOSTRAR MENSAJE DE GUARDADO.

app.post ("/validar", (req,res)=>{    
    new Ingreso({
        nuevo:req.body.nuevo,
        clave:req.body.clave,          
    })
    .save().then(()=>res.send(Ingreso));    
    
            let html = "";
                html+=`
                <label for= "correcto">
                <div class="alert alert-dismissible alert-success">                
                <strong>USUARIO CORRECTO</strong> <a href="/novedad" class="btn-close" data-bs-dismiss="alert"> CONTINUA </a>.
                </div>
                </label>`
            res.send(html); });

// app.post ("/validar", (req,res)=>{
//        Usuarios.find((err,doc)=>{
//         console.log(doc);
//         let usuaria;
//         for (var i in doc){
//                 usuaria = doc[i];
//                     html+=`<span>${usuario.nombre}</span>
// //                 <span>${usuario.dependencia}</span> <span>${usuario.contraseña}</span> | `;
//                 html+=`<a href="/borrar?id=${usuario._id}">Borrar</a><br>`;
//         }        
//             res.send(html);   

// PAGINA DE REGISTRO

app.get("/registro",(req,res)=>{
    let formulario = `
    <title>GranDespacho</title>
        <link rel="stylesheet" href="https://bootswatch.com/5/zephyr/bootstrap.min.css">
        <nav>
        <class="navbar navbar-expand-lg navbar-light bg-light>
        </nav>
        <br>
        <center>
        <h1 class="titulo"> GranDespacho </h1>
        </center>
        <div class="contenedorregistro">
        <div id="aplicacionA1" class="row pt-10">
        <div class="m-0 row justify-content-center">
        <div class ="col-auto p-5 text-center">
        <div class="card">
        <div class="card-header">          
        </div>
        <form  class="card-body" action="/" method="post" >
<h2 class="titulo"> REGISTRO </h2>
<br>
<label for="nombre">
<input type="text" name="nombre" id="nombre" placeholder="nombre" class="form.control"><br>
</label><br>
<label for="dependencia">
<input type="text" name="dependencia" id="dependencia" placeholder="dependencia" class="form.control"><br>
</label><br>
<label for="contraseña">
<input type="password" name="contraseña" id="contraseña" placeholder="contraseña" class="form.control"><br>
</label><br><br>
<input type='submit' class="btn btn-lg btn-primary btn-block" value="Ingresar"><br>
</form>
    `;
    res.send(formulario);

});

// GUARDAR USUARIOS NUEVOS Y MOSTRAR MENSAJE.

app.post ("/", (req,res)=>{
        new Usuarios({
        nombre:req.body.nombre,
        dependencia:req.body.dependencia,
        contraseña:req.body.contraseña        
    }).save().then(()=>res.send(Usuarios));

    let html = "";
    html+=`
        <label for= "guardado">
        <div class="alert alert-dismissible alert-success">                
        <strong>NUEVO USUARIO GUARDADO</strong> <a href="/ingreso" class="btn-close" data-bs-dismiss="alert"> CONTINUAR </a>.
        </div>
        </label>`              
    res.send(html); });


// // app.get("/borrar",(req,res)=>{       
// //         Usuarios.deleteOne({_id:req.query.id},(error)=>{
           
// //            let html ="";
// //             if(error){
// //                 res.send("error al borrar");
// //             }
// //             else{
// //                 res.send("usuario borrado <a href='/listar'>Volver</a> <a href='/novedad'>Continuar</a>");
// //             }
// //         })
// // });

// // app.get("/listar",(req,res)=>{
// //     Usuarios.find((err,doc)=>{
// //         console.log(doc);
// //         console.log(doc[0]);
// //         let html ="";
// //         let usuario;
// //         for (var i in doc){
// //                 usuario = doc[i];
// //                 html+=`<span>${usuario.nombre}</span>
// //                 <span>${usuario.dependencia}</span> <span>${usuario.contraseña}</span> | `;
// //                 html+=`<a href="/borrar?id=${usuario._id}">Borrar</a><br>`;
// //         }        
// //             res.send(html);
// //     });
// // });

// PAGINA INGRESO TRANSPORTADOR.

app.get("/novedad",(req,res)=>{
    let pagina = `
    <title>GRUPO EXITO</title>
    <link rel="stylesheet" href="https://bootswatch.com/5/zephyr/bootstrap.min.css">
	<nav class="navbar navbar-dark bg-dark">
    <a class="navbar-brand" href="#">GRUPO EXITO</a>
    </nav>
	<div class="contenedores">
        	<div id="aplicacionP1" class="row pt-5">
				<div class="row justify-content-start">       
			    <div class="col-4">
					<div class="card">
						<div class="card-header">
							<div class ="col-auto p-5 text-center">
								<div class="m-0 row justify-content-center">
                                <div>
									<h4>INGRESA LOS DATOS DEL TRANSPORTADOR</h4>
                                    <form id="transporte-form" class="card-body" action="/transportador" method="post">
                                        <label for="placa">
                                        <input type="text" name="placa" id="placa" placeholder="placa del vehiculo" class="form.control"><br>
                                        </label>
                                        <label for="cedula">
                                        <input type="text" name="cedula" id="cedula" placeholder="cedula del conductor" class="form.control"><br><br>
                                        </label>
										<input type="submit" value="INGRESAR" text="center" class="btn btn-primary btn-block">
										</div>`;
                                res.send(pagina);
                            });


const Vehiculos = mongoose.model("Vehiculos",{
    placa:String,
    cedula:String
});

// GUARDAR TRANSPORTADOT Y MOSTRAR MENSAJE.

app.post ("/transportador", (req,res)=>{
       new Vehiculos({
        placa:req.body.placa,
        cedula:req.body.cedula          
    }).save().then(()=>res.send(Vehiculos));
    let html = "";
    html+=`
            <label for= "correcto">
            <div class="alert alert-dismissible alert-success">                
            <strong>TRANSPORTISTA GUARDADO</strong> <a href="/contenedor" class="btn-close" data-bs-dismiss="alert"> CONTINUA </a>.
            </div>
            </label>`
    res.send(html); });


// PAGINA DE CONTENEDORES.

app.get("/contenedor",(req,res)=>{
    let contec = `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>GRUPO EXITO</title>
        <link rel="stylesheet" href="https://bootswatch.com/5/zephyr/bootstrap.min.css">
        <link href="css/Contendor1.css" rel="stylesheet" />
        </head>
        <body>
        <nav class="navbar navbar-dark bg-dark">
            <a class="navbar-brand" href="#">GRUPO EXITO</a>
        </nav>
        <div class="contenedores">
                <div id="aplicacionP1" class="row pt-5">
                    <div class="row justify-content-start">
                    <div class="col-4">
                <div class="card">
                    <div class="card-header">
						<div class ="col-auto p-5 text-center">
							<div class="m-0 row justify-content-center">
                        		<h4>INGRESA LOS CONTENEDORES</h4>
                    				<form id="contenedor-form" class="card-body" action="/contenedorfinal" method="post">
                                    <label for="contenedor">
                                    <input type="text" name="contenedor" id="contenedor" placeholder="digite contenedor" class="form.control"><br>
                                    </label>
                                    <label for="unidadcarga">
                                    <input type="Number" name="unidadcarga" id="unidadcarga" placeholder="tipo ucr" class="form.control"><br>
                                    </label>
                                    <label for="cantidaducr">
                                    <input type="Number" name="cantidaducr" id="cantidaducr" placeholder="cantidad UCR" class="form.control"><br>
                                    </label><br><br>
									<input type="submit" id="boton" value="INGRESAR" text="center" class="btn btn-primary btn-block">
									</form>
									</div>				
                        </div>            
					</div>
				</div>
            </div>`
            ;
res.send(contec);
});

//GUARDAR CONTENEDORES Y MOSTRAR MENSAJE.

const Contenedor = mongoose.model("Contenedor",{
    contenedor:String,
    cantidad:Number,
    cantidaducr:Number,
});

app.post ("/contenedorfinal", (req,res)=>{
    new Contenedor({
        contenedor:req.body.contenedor,
        unidadcarga:req.body.unidadcarga,
        cantidaducr:req.body.cantidaducr,
    }).save().then(()=>res.send(Contenedor));
    let html = "";
    html+=`
            <label for= "correcto">
            <div class="alert alert-dismissible alert-success">                
            <strong>CONTENEDOR GUARDADO</strong> <a href="/contenedor" class="btn-close" data-bs-dismiss="alert"> mas contenedores </a>.
            <a href="/final" class="btn-close" data-bs-dismiss="alert"> CONTINUA </a>.
            </div>
            </label>`
    res.send(html); });

app.get("/final",(req,res)=>{
    Vehiculos.find((err,doc)=>{
        let html ="";
        let carro;
        for (var i in doc){
                carro = doc[i];
                html+=`<span>${carro.placa}</span>
                <span>${carro.cedula}</span> | `;
                html+=`<a href="/contemos">ver contenedores</a><br>`;
        }        
            res.send(html);
    });
});


app.get("/contemos",(req,res)=>{
    Contenedor.find((err,doc)=>{
        let html ="";
        let contenedora;
        for (var i in doc){
                contenedora = doc[i];
                html+=`<span>${contenedora.contenedor}</span>
                <span>${contenedora.unidadcarga}</span> <span>${contenedora.cantidaducr}</span> | `;
                html+=`<a href="/novedad">volver para ingresar mas viajes</a><br>`;
        }        
            res.send(html);
    });
});
app.listen(port, ()=>{
    console.log("empezo el servidor"); 
});  