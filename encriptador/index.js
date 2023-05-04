Swal.fire({ title:"Hola!!",text:"Este proyecto incluye las siguientes tecnologias: Javascript, Html5, Css3 y librerias como sweetalert2", icon:"success"});

function encriptar(){
    let text = document.getElementById("text").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let imagenes = document.getElementById("imagenes");

    let textCifrado = text 
    .replace(/e/gi, "10")
    .replace(/i/gi, "22")
    .replace(/a/gi, "21")
    .replace(/o/gi, "11")
    .replace(/u/gi, "12");  

    if (text.length  != 0){

        document.getElementById("text").value = textCifrado;
        tituloMensaje.textContent = "Texto encriptado safistactoriamente!!";
        parrafo.textContent = "";
        imagenes.src = "./imagenes/encriptado.jpg";
    } else{
        imagenes.src = "./imagenes/imagenes.png";
        tituloMensaje.textContent = "Ningun mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        swal.fire({ title:"Desbes ingresar algun texto para encriptar", icon:"warning"});
    }
       

}

function desencriptar(){

    let text = document.getElementById("text").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let imagenes = document.getElementById("imagenes");

    
    let textCifrado = text 
    .replace(/10/gi, "e")
    .replace(/22/gi, "i")
    .replace(/21/gi, "a")
    .replace(/11/gi, "o")
    .replace(/12/gi, "u"); 
    
    if (text.length  != 0){

        document.getElementById("text").value = textCifrado;
        tituloMensaje.textContent = "Texto desencriptado safistactoriamente!!";
        parrafo.textContent = "";
        imagenes.src = "./imagenes/desencriptado.jpg";
    } else{
        imagenes.src = "./imagenes/imagenes.png";
        tituloMensaje.textContent = "Ningun mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        Swal.fire({ title:"Desbes ingresar algun texto para desencriptar", icon:"warning"});
    }


}