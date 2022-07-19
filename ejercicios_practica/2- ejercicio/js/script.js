"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

/* Enunciado:

1)
Obtener cada uno de los botones utilizando su ID,
luego cambiar el texto de los botones por:
PEGAR / COPIAR / CORTAR

2)
Obtener todos los botones utilizando la clase "btn",
luego a todos los botones agregar la clase "agua"

*/

let boton1 = document.getElementById("boton1");
boton1.textContent = 'PEGAR';
let boton2 = document.getElementById("boton2");
boton2.textContent = 'COPIAR';
let boton3 = document.getElementById("boton3");
boton3.textContent = 'CORTAR';

let botones = document.getElementsByClassName('btn');
for(let i=0;i<botones.length;i++){
    botones[i].classList.add("agua");
}

