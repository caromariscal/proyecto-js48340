import { updateStore } from './store.js';

const dialogo = document.getElementById('ingresar-nombre');
const form = dialogo.querySelector('form');


const ingresarNombre = () => {
    dialogo.show();
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = form.querySelector('input')
    const name = input.value;
    updateStore((store) => ({...store, name }));
    dialogo.close();
    input.value = "";
});

export const register = (path) => {
    const el = document.querySelector(path);
    el.addEventListener('click', () => {
        ingresarNombre();
    })
};