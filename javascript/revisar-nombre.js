import { getStore } from "./store.js";

const dialogo = document.getElementById('revisar-nombre')
const parrafo = dialogo.querySelector('p')
const boton = dialogo.querySelector('button')

boton.addEventListener('click', () => {
    dialogo.close()
})

function revisarNombre () {
    const nombre = getStore().name;
    parrafo.innerText = nombre;
    dialogo.show()
}

export const register = (path) => {
    console.log(path)
    const el = document.querySelector(path);
    console.log(el)
    el.addEventListener('click', () => {
        console.log('click')
        revisarNombre();
    }
    )
};