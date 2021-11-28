class registro{
	constructor(usuarios,contraseñas){
		this.usuario=usuarios;
		this.contraseña=contraseñas;
	}
}
class verificacion {
	showMessage(){
		
	}
}

//eventos al dar click
window.onload=function(){
document.getElementById('ingreso-form').addEventListener('submit',function(){
	document.getElementById('usuarios').value
	console.log(document.getElementById('usuarios').value)
})
}
