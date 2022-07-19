"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

/* Enunciado:

1)
Obtener todos los botones utilizando su clase o ID
y asignarle el evento de mouse "click"

Cuando un botón es presionado, se debe agregar la clase
"fuego" al botón (deberá cambiar de color)

*/

let botones = document.querySelectorAll(".btn")
for (let i = 0; i < botones.length; i++) {
    botones[i].addEventListener('click',()=>{
        botones[i].classList.add("fuego")
    });
};