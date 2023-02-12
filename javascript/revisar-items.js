import { getStore, updateStore } from "./store.js";

const dialogo = document.getElementById('revisar-items');
const boton = dialogo.querySelector('button');
const template = dialogo.querySelector('template');
const ul = dialogo.querySelector('ul');

boton.addEventListener('click', () => {
    dialogo.close()
})

function mostrarItems () {
    ul.innerHTML = ""
    const items = getStore().items;
    items.forEach(item => {
        const tmp = template.content.cloneNode(true)
        const texto = tmp.querySelector('p')
        const boton2 = tmp.querySelector('button')
        texto.innerText = item;
        ul.appendChild(tmp)
        boton2.addEventListener('click', () => {
            const newItems = items.filter(it => item !== it)
            updateStore((store) => ({...store, items:newItems }));
            dialogo.close();
        })
    })
    dialogo.show()
}

export const register = (path) => {
    const el = document.querySelector(path);
    el.addEventListener('click', () => {
        console.log('click')
        mostrarItems();
    }
    )
};