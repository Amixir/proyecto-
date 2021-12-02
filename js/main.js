alert("hola")

class registro{
	constructor(usuarios,contraseñas){
		this.usuario=usuarios;
		this.contraseña=contraseñas;
	}
}
class verificacion {
	
	
	usuarioerror(){
		
	}
	
	mostrarmensaje(message, cssClass){
		const mesa = (document.createElement('div'));
		mesa.className ='alert alert-${cssClass} mt-4';
		mesa.appendChild(document.createTextNode(message));
		const contenedor = (document.querySelector('.contenedor'));
		const aplicacion =document.querySelector('#aplicacion');
		contenedor.insertBefore(mesa,aplicacion);
		setTimeout(function(){
			document.querySelector('.alert').remove();
	}, 3000);
	
	}
}

//eventos al dar click
window.onload=function(){
document.getElementById('ingreso-form').addEventListener('submit',function(e){
	const nombre = document.getElementById('usuarios').value;
	const secret = document.getElementById('contraseñas').value;
	console.log(nombre,secret);
	
	if (nombre === 0){
			alert('diego hola');
	}
	
	const usu = (nombre);
	const ui = new verificacion();
	ui.mostrarmensaje('como sea');
	// e.preventDefault();
	
	
	
	
})
}
