import { register as registerIngresarNombre } from './ingresar-nombre.js';
import { register as revisarNombre } from './revisar-nombre.js';
import { register as elegirRol } from './elegir-rol.js';
// import { register as mostrarPersonaje } from './mostrar-personaje.js';
import { register as ingresarItems } from './ingresar-items.js';
import { register as revisarItems } from './revisar-items.js';

registerIngresarNombre('[data-key="1"]');
revisarNombre('[data-key="2"]');
elegirRol('[data-key="3"]');
// mostrarPersonaje('[data-key="4"]');
ingresarItems('[data-key="5"]');
revisarItems('[data-key="6"]');


document.addEventListener('keydown', (e) => {
    if(/^Digit[1-6]|Escape/g.test(e.code)){
        const key = e.code.replace('Digit', '');
        const action = document.querySelector(`[data-key="${key}"]`);
        if(action){
            action.click();
        }
    }
});
