var vocales = ["a","e","i","o","u"];
var vocalesEncriptadas = ["ai","enter","imes","ober","ufat"];
var cantidadLetrasEncriptadas = [2,5,4,4,4];
var contar = 0;
var i2=0;

function BtnleerEntradaAEncriptar(){
    var textoEncriptado = leerEntradaAEncriptar(document.getElementById('textareaIzquierda').value);
    document.getElementById('textareaDerecha').value = textoEncriptado;
    document.getElementById('textareaDerecha').style.backgroundImage = "none";
    document.querySelector(".divParrafo1").style.display = "none";
    document.querySelector(".divParrafo2").style.display = "none";
    document.getElementById('textareaIzquierda').value = "";
    document.querySelector(".BtnCopiar").style.display = "show";
    document.querySelector(".BtnCopiar").style.display = "inherit";

}

function Btncopiar(){
    document.getElementById('textareaDerecha').select();
    navigator.clipboard.writeText(document.getElementById('textareaDerecha').value);
    document.getElementById('textareaDerecha').value = "";
    document.querySelector(".BtnCopiar").style.display = "none";
    document.querySelector(".divParrafo1").style.display = "show";
    document.querySelector(".divParrafo1").style.display = "inherit";
    document.querySelector(".divParrafo2").style.display = "show";
    document.querySelector(".divParrafo2").style.display = "inherit";
}

function leerEntradaAEncriptar(textoAEncriptar){

    textoAEncriptar = textoAEncriptar.toLowerCase();

    var guardarTextoEncriptado = [];
    var stringMensajeEncriptado = "";

    for(var i = 0; i < textoAEncriptar.length; i++){

        if(textoAEncriptar[i] == vocales[0]){
            guardarTextoEncriptado.push(vocalesEncriptadas[0]);
            stringMensajeEncriptado = stringMensajeEncriptado + guardarTextoEncriptado[i];

        }else if(textoAEncriptar[i] == vocales[1]){
            guardarTextoEncriptado.push(vocalesEncriptadas[1]);
            stringMensajeEncriptado = stringMensajeEncriptado + guardarTextoEncriptado[i];

        }else if(textoAEncriptar[i] == vocales[2]){
            guardarTextoEncriptado.push(vocalesEncriptadas[2]);
            stringMensajeEncriptado = stringMensajeEncriptado + guardarTextoEncriptado[i];

        }else if(textoAEncriptar[i] == vocales[3]){
            guardarTextoEncriptado.push(vocalesEncriptadas[3]);
            stringMensajeEncriptado = stringMensajeEncriptado + guardarTextoEncriptado[i];

        }else if(textoAEncriptar[i] == vocales[4]){
            guardarTextoEncriptado.push(vocalesEncriptadas[4]);
            stringMensajeEncriptado = stringMensajeEncriptado + guardarTextoEncriptado[i];

        }else{
            guardarTextoEncriptado.push(textoAEncriptar[i]);
            stringMensajeEncriptado = stringMensajeEncriptado + guardarTextoEncriptado[i];
        }
        console.log(textoAEncriptar[i]);
    }
    return stringMensajeEncriptado;
}

function BtnrevertirEncriptar(){
    var textoEncriptado = revertirEncriptar(document.getElementById('textareaIzquierda').value);
    document.getElementById('textareaDerecha').value = textoEncriptado;
    document.getElementById('textareaDerecha').style.backgroundImage = "none";
    document.querySelector(".divParrafo1").style.display = "none";
    document.querySelector(".divParrafo2").style.display = "none";
    document.getElementById('textareaIzquierda').value = "";
    document.querySelector(".BtnCopiar").style.display = "show";
    document.querySelector(".BtnCopiar").style.display = "inherit";
}

function revertirEncriptar(TextoADesencritar){

    TextoADesencritar = TextoADesencritar.toLowerCase();

    var guardarTextoDesencriptado = [];
    var stringMensajeDesencriptado = "";
    var stringDesencriptarTexto = "";

    for(var i = 0; i < TextoADesencritar.length; i++){

        if(TextoADesencritar[i] == vocales[0]){
            stringDesencriptarTexto = "";
            contar = 0;

            while(contar < cantidadLetrasEncriptadas[0]){
                stringDesencriptarTexto = stringDesencriptarTexto + TextoADesencritar[i+contar];
                contar++;
            }
            if(stringDesencriptarTexto == vocalesEncriptadas[0]){
                guardarTextoDesencriptado.push(vocales[0]);
                stringMensajeDesencriptado = stringMensajeDesencriptado + guardarTextoDesencriptado[i2];
                i2++;
                i = i + 1;
            }else{
                guardarTextoDesencriptado.push(vocales[0]);
                stringMensajeDesencriptado = stringMensajeDesencriptado + guardarTextoDesencriptado[i2];
                i2++;
            }

        }else if(TextoADesencritar[i] == vocales[1]){
            stringDesencriptarTexto = "";
            contar = 0;

            while(contar < cantidadLetrasEncriptadas[1]){
                stringDesencriptarTexto = stringDesencriptarTexto + TextoADesencritar[i+contar];
                contar++;
            }
            if(stringDesencriptarTexto == vocalesEncriptadas[1]){
                guardarTextoDesencriptado.push(vocales[1]);
                stringMensajeDesencriptado = stringMensajeDesencriptado + guardarTextoDesencriptado[i2];
                i2++;
                i = i + 4;
            }else{
                guardarTextoDesencriptado.push(vocales[1]);
                stringMensajeDesencriptado = stringMensajeDesencriptado + guardarTextoDesencriptado[i2];
                i2++;
            }
        }else if(TextoADesencritar[i] == vocales[2]){
            stringDesencriptarTexto = "";
            contar = 0;

            while(contar < cantidadLetrasEncriptadas[2]){
                stringDesencriptarTexto = stringDesencriptarTexto + TextoADesencritar[i+contar];
                contar++;
            }
            if(stringDesencriptarTexto == vocalesEncriptadas[2]){
                guardarTextoDesencriptado.push(vocales[2]);
                stringMensajeDesencriptado = stringMensajeDesencriptado + guardarTextoDesencriptado[i2];
                i2++;
                i = i + 3;
            }else{
                guardarTextoDesencriptado.push(vocales[2]);
                stringMensajeDesencriptado = stringMensajeDesencriptado + guardarTextoDesencriptado[i2];
                i2++;
            }
        }else if(TextoADesencritar[i] == vocales[3]){
            stringDesencriptarTexto = "";
            contar = 0;

            while(contar < cantidadLetrasEncriptadas[3]){
                stringDesencriptarTexto = stringDesencriptarTexto + TextoADesencritar[i+contar];
                contar++;
            }
            if(stringDesencriptarTexto == vocalesEncriptadas[3]){
                guardarTextoDesencriptado.push(vocales[3]);
                stringMensajeDesencriptado = stringMensajeDesencriptado + guardarTextoDesencriptado[i2];
                i2++;
                i = i + 3;
            }else{
                guardarTextoDesencriptado.push(vocales[3]);
                stringMensajeDesencriptado = stringMensajeDesencriptado + guardarTextoDesencriptado[i2];
                i2++;
            }
        }else if(TextoADesencritar[i] == vocales[4]){
            stringDesencriptarTexto = "";
            contar = 0;

            while(contar < cantidadLetrasEncriptadas[4]){
                stringDesencriptarTexto = stringDesencriptarTexto + TextoADesencritar[i+contar];
                contar++;
            }
            if(stringDesencriptarTexto == vocalesEncriptadas[4]){
                guardarTextoDesencriptado.push(vocales[4]);
                stringMensajeDesencriptado = stringMensajeDesencriptado + guardarTextoDesencriptado[i2];
                i2++;
                i = i + 3;
            }else{
                guardarTextoDesencriptado.push(vocales[4]);
                stringMensajeDesencriptado = stringMensajeDesencriptado + guardarTextoDesencriptado[i2];
                i2++;
            }
        }else{
            guardarTextoDesencriptado.push(TextoADesencritar[i]);
            stringMensajeDesencriptado = stringMensajeDesencriptado + guardarTextoDesencriptado[i2];
            i2++;
        }
    }
    i2 = 0;
    return stringMensajeDesencriptado;
}
