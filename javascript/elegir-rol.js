import { updateStore } from './store.js';

const dialog = document.getElementById('elegir-rol');
const form = dialog.querySelector('form');


const elegirRol = () => {
    dialog.show();
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const role = form.querySelector('select').value;
    updateStore((store) => ({...store, role }));
    dialog.close();
});

export const register = (path) => {
    const el = document.querySelector(path);
    el.addEventListener('click', () => {
        elegirRol();
    })
};