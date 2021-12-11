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
        let ingreso = `<form id='ingreso-form' class="card-body" action="/validar" method="post" >
        <h2 class="titulo">INGRESO </h2>
        <br>
        <label for="nuevo">
        <input type="text" name="nuevo" id="nuevo" placeholder="nombre" class="form.control"><br>
        </label>
        <label for="clave">
        <input type="password" name="clave" id="clave" placeholder="contraseña" class="form.control"><br>
        </label>
        <input type='submit' class="btn btn-lg btn-primary btn-block" value="Ingresar"><br>
        </form>
        <a href="/registro">
	    <input type="submit" value="REGISTRARSE" text="center" class="btn btn-primary btn-block"></a>
        `;
        res.send(ingreso);
});

app.post ("/validar", (req,res)=>{    
    new Ingreso({
        nuevo:req.body.nuevo,
        clave:req.body.clave,          
    })
    .save().then(()=>res.send(Ingreso));    
    
                let html = "";
                        html+=`<span>"BIENVENIDO"</span><br>`;
                        html+=`"<a href="/novedad">Continuar</a>"`;     
                
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

    // new Usuarios({
    //     nombre:req.body.nombre,
    //     contraseña:req.body.contraseña        
    // }).save().then(()=>res.send(Usuarios));
// };
// });
// });

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
    res.send("usuario guardado <a href=/ingreso>Continuar</a>");
    new Usuarios({
        nombre:req.body.nombre,
        dependencia:req.body.dependencia,
        contraseña:req.body.contraseña        
    }).save().then(()=>res.send(Usuarios));
});


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





app.get("/novedad",(req,res)=>{
    let pagina = `
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
									<h4>INGRESA LOS DATOS DEL TRANSPORTADOR</h4>
                                    <form id="transporte-form" class="card-body" action="/transportador" method="post">
                                        <label for="placa">
                                        <input type="text" name="placa" id="placa" placeholder="placa del vehiculo" class="form.control"><br>
                                        </label>
                                        <label for="cedula">
                                        <input type="text" name="cedula" id="cedula" placeholder="cedula del conductor" class="form.control"><br>
                                        </label>
												<input type="submit" value="INGRESAR" text="center" class="btn btn-primary btn-block">

												<!-- <a href="ucr.html">
												<input class="btn btn-primary btn-block" type="button" value="Continuar" id ="guardar"></a> -->
										</form>

										</div>				
							</div>            
						</div>
					</div>
				</div>

				<div id="lista-datos" class="col-4">
				</div>
				</div>
			</div>
		</div>
		         <!-- PRODUCTS LIST -->
            
    </div>

	<script src="js/tec.js"></script>
	
	</body>
	</html>
    `;
    res.send(pagina);
});


const Vehiculos = mongoose.model("Vehiculos",{
    placa:String,
    cedula:String
});

app.post ("/transportador", (req,res)=>{
    res.send("trasnportista guardado <a href=/contenedor>Continuar</a>");
    new Vehiculos({
        placa:req.body.placa,
        cedula:req.body.cedula          
    }).save().then(()=>res.send(Vehiculos));
});

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
                                    <input type="text" name="unidadcarga" id="unidadcarga" placeholder="tipo ucr" class="form.control"><br>
                                    </label>
                                    <label for="cantidaducr">
                                    <input type="text" name="cantidaducr" id="cantidaducr" placeholder="cantidad UCR" class="form.control"><br>
                                    </label>
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

const Contenedor = mongoose.model("Contenedor",{
    contenedor:String,
    cantidad:Number,
    cantidaducr:Number
});

app.post ("/contenedorfinal", (req,res)=>{
    res.send("contenedor guardado <a href=/final>Continuar</a>");
    new Contenedor({
        contenedor:req.body.contenedor,
        unidadcarga:req.body.unidadcarga,
        cantidaducr:req.body.cantidaducr
    }).save().then(()=>res.send(Contenedor));
});

app.get("/final",(req,res)=>{
    Vehiculos.find((err,doc)=>{
        console.log(doc);
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
        console.log(doc);
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