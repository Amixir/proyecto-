class registro{
	constructor(usuarios,contraseñas){
		this.usuario=usuarios;
		this.contraseña=contraseñas;
	}
}
class verificacion {
	
	mostrarmensaje(message, cssClass){
		const mesa = (document.createElement('div'));
		mesa.className ='alert alert-${cssClass}';
		mesa.appendChild(document.createTextNode(message));
		
	}
	
}

//eventos al dar click
window.onload=function(){
document.getElementById('ingreso-form').addEventListener('submit',function(){
	const nombre = document.getElementById('usuarios').value;
	const secret = document.getElementById('contraseñas').value;
	console.log(nombre,secret);
	
	
})
}
