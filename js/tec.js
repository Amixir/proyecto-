class datos {
    constructor(Contenedor,ucr,Cantidad){
        this.Contenedor = Contenedor;
        this.ucr = ucr;
        this.Cantidad = Cantidad;
    }
}
class listas{
    ingresardatos(datosc){
        const dato = (document.getElementById("lista-datos"));
        const element = document.createElement("div");
        element.innerHTML = `
        <div class="card text-center mb-4">
            <div class ="card body">
                <strong>datosc</strong>: ${datosc.Contenedor}
                <strong>datosuc</strong>: ${datosc.ucr}
                <strong>datosca</strong>: ${datosc.Cantidad}
            </div>
        </div>
        `;
        datosc.appendChild(element);
    
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

    const datosc = new datos(Contenedor,ucr,Cantidad);
    const dat = new listas();
    dat.ingresardatos(datosc);


// if para  revisar si esta fallando la declaracionde una varible
//     var str,
// element = document.getElementById('cantidaducr');
// if (element != null) {
//     str = element.value;
// }
// else {
//     str = null;
// }
// console.log(str);

    

    // ESTO HAY QUE QUITARLO CUANDO SE AGREGUE EL SERVIDOR
    e.preventDefault()
})
