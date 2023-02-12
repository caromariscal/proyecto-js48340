import { updateStore } from './store.js';

const dialogo = document.getElementById('elegir-rol');
const form = dialogo.querySelector('form');


const elegirRol = () => {
    dialogo.show();
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const role = form.querySelector('select').value;
    updateStore((store) => ({...store, role }));
    dialogo.close();
});

export const register = (path) => {
    const el = document.querySelector(path);
    el.addEventListener('click', () => {
        elegirRol();
    })
};