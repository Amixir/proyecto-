class datos {
    constructor(Contenedor,ucr,Cantidad){
        this.Contenedor = Contenedor;
        this.ucr = ucr;
        this.Cantidad = Cantidad;
    }
}

class coduc {
    constructor(vehiculo,cedu){
        this.vehiculo = vehiculo;
        this.cedu = cedu;
    }
}
class UI {
    ingresardatosc(datosc){
        const listado = document.getElementById('lista-datos');
        const elemento = document.createElement('div');
        elemento.innerHTML = `
            <div class="card text-center mb-4">
                <div class ="card body">
                    <strong>Contenedor</strong>: ${datosc.Contenedor}
                    <strong>Codigo UCR</strong>: ${datosc.ucr}
                    <strong>Cantidad UCR</strong>: ${datosc.Cantidad}
                 </div>
            </div>
        `;
     listado.appendChild(elemento);
    
    }

    ingresardatosv(datosv){
        const listada = document.getElementById('lista-datos');
        const elementa = document.createElement('div');
        elementa.innerHTML = `
            <div class="card text-center mb-4">
                <div class ="card body">
                    <strong>Placa Vehiculo</strong>: ${datosv.vehiculo}
                    <strong>Cedula conductor</strong>: ${datosv.cedu}
                </div>
            </div>
        `;
     listada.appendChild(elementa);
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

    const datosc = new datos (Contenedor,ucr,Cantidad);
    const dat = new UI ();
    dat.ingresardatosc(datosc);
    e.preventDefault()


   

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
    
})

document.getElementById('transporte-form').addEventListener('submit', function(e){
    const vehi = document.getElementById("PLACA").value
    const cc = document.getElementById("cedula").value
    console.log(vehi, cc);

    const datosv = new  coduc (vehi, cc);
    const data = new UI ();
    data.ingresardatosv(datosv);
    e.preventDefault()
})
