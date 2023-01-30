import { updateStore } from './store.js';

const dialog = document.getElementById('ingresar-nombre');
const form = dialog.querySelector('form');


const ingresarNombre = () => {
    dialog.show();
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = form.querySelector('input')
    const name = input.value;
    updateStore((store) => ({...store, name }));
    dialog.close();
    input.value = "";
});

export const register = (path) => {
    const el = document.querySelector(path);
    el.addEventListener('click', () => {
        ingresarNombre();
    })
};