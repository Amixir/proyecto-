class datos {
    constructor(Contenedor,ucr,Cantidad){
        this.Contenedor = Contenedor;
        this.ucr = ucr;
        this.Cantidad = Cantidad;
    }
}
class listas{
    ingresardatos(){

    }

    mostrarmensajes(){

    }

    borrardatos(){

    }
}

document.getElementById('contenedor-form').addEventListener('submit', function(e){
    const Contenedor = document.getElementById("contenedor").value
    const ucr = document.getElementById("unidadcarga").value
    const Cantidad = document.getElementById("cantidaducr").value
    console.log(Contenedor, ucr, Cantidad);

    var str,
element = document.getElementById('contenedor');
if (element != null) {
    str = element.value;
}
else {
    str = null;
}
console.log(str);

    console.log(new datos(Contenedor,ucr,Cantidad));
    // ESTO HAY QUE QUITARLO CUANDO SE AGREGUE EL SERVIDOR
    e.preventDefault()
})
