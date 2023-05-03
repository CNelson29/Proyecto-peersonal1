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
        alert("Desbes incresar algun texto para encriptar");
    }
       

}