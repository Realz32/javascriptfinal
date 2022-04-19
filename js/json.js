console.log('JSON 1');

import {dataEnJson} from "./data.js";

console.log(dataEnJson);

const data = JSON.parse(dataEnJson)

const productos = data

console.log(data);

const boton = document.getElementById('boton')

const link = document.getElementById('send')

link.onclick = clickEnEnviar

function validarFormulario() {
    const nombre = document.getElementById('nombre');
    const celular = document.getElementById('celular');
    const mail = document.getElementById('mail');
    const presupuesto = document.getElementById('presupuesto');

    
    console.log(nombre.value);
    console.log(celular.value);
    console.log(mail.value);
    console.log(presupuesto.value);
}


function clickEnEnviar(evento) {
    evento.preventDefault();
    console.log('Click en el enlace');
    validarFormulario();
    calcularPrecio();
}

let valorConDescuento;

const titulo = productos.map((titulo) => titulo.MercedezBenz) 
productos.push({id: 4, titulo: 'Mercedez Benz', precio: 7000, stock: 2, descuento: 3});

function calcularPrecio() {
    const nuevoAuto = document.createElement('li');
    const listaDeAutos = document.querySelector('#listadeautos');
    let hayAutos = false;
    productos.forEach( element => {    
        valorConDescuento = precioConDescuento ( element.precio, element.descuento );
        if (valorConDescuento <= presupuesto.value) {        
            nuevoAuto.innerText = element.titulo + ' ' + element.precio;
            listaDeAutos.append(nuevoAuto);
            console.log(element.titulo);
            console.log('Usted puede comprar este auto ' + valorConDescuento);
            hayAutos = true;
        }
    });    
    let subtitulo = document.getElementById("subtitulo");
    if(hayAutos){
        subtitulo.innerText = "Auto que puede comprar";
    } else{
        subtitulo.innerText = "No puede comprar ningun auto";
    }
}



      

function precioConDescuento( precio, descuento ) {
    return precio - ((precio * descuento) / 100)
}


console.log(productos.titulo);


boton.addEventListener('click', () => {
     Swal.fire({
         position: 'top-end',
         icon: 'success',
         title: 'Tu presupuesto y datos se cargaron correctamente',
         showConfirmButton: true,
         timer: 3000
    })
})