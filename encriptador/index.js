function encriptar(){
    let text = document.getElementById("text").value;
   // let tituloMensaje = document.getElementById("titulo-mensaje");
   // let parrafo = document.getElementById("parrafo");//
   // let imagenes = document.getElementById("imagenes");//

    let textCifrado = text 
    .replace(/e/gi, "10")
    .replace(/i/gi, "22")
    .replace(/a/gi, "21")
    .replace(/o/gi, "11")
    .replace(/u/gi, "12");  

    if (document.getElementById("text").value.length  != 0){

        document.getElementById("text").value = textCifrado;
        document.getElementById("titulo-mensaje").textContent = "Texto encriptado safistactoriamente!!"
        document.getElementById("parrafo").textContent = "";
        document.getElementById("imagenes").src = "./imagenes/encriptado.jpg";
    } else{
        document.getElementById("imagenes").src = "./imagenes/imagenes.png";
        alert("Desbes incresar algun texto para encriptar");
    }
       

}