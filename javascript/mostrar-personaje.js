import { getStore } from "./store.js";

const dialogo = document.getElementById('mostrar-personaje');
const boton = dialogo.querySelector('button');
const gifbox = document.getElementById('personajegif');

boton.addEventListener('click', () => {
    dialogo.close();
});

function obtenerGif(){
    const role = getStore().role;
    var gif = "";
    console.log(role);
    switch(role){
        case 'mago':
            gif = "./img/mage.webp";
        break;
        case 'ninja':
            gif = "./img/ninja.webp";
        break;
        case 'guerrero':
            gif = "./img/warrior.webp";
        break;
    }
    gifbox.innerHTML = "<img src='" + gif + "' alt='gif'>";
    dialogo.show();
}

export const register = (path) => {
    const el = document.querySelector(path);
    el.addEventListener('click', async () => {
        console.log('click')
        obtenerGif();
    }
    )
};