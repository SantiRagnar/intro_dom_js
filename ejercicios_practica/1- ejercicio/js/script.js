"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

/* Enunciado

1)
Leer el título del "header" del post e imprimirlo en consola.   

2)
Cambiar título utilizando javascript por otro cualquiera.

*/

let header2 = document.getElementsByTagName("h2");
console.log(header2[0].textContent);

header2[0].textContent = 'Buenas tardes';
