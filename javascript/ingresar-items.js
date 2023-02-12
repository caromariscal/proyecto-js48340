import { updateStore, getStore } from './store.js';


const dialogo = document.getElementById('ingresar-items');
const form = dialogo.querySelector('form');


const ingresarItems = () => {
    dialogo.show();
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = form.querySelector('input')
    const item = input.value;
    const store = getStore();
    const items = store.items.length < 2 ? [...store.items, item]:store.items;
    updateStore((store) => ({...store, items }));
    dialogo.close();
    input.value = "";
});

export const register = (path) => {
    const el = document.querySelector(path);
    el.addEventListener('click', () => {
        ingresarItems();
    })
};