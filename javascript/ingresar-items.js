import { updateStore, getStore } from './store.js';


const dialog = document.getElementById('ingresar-items');
const form = dialog.querySelector('form');


const ingresarItems = () => {
    dialog.show();
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = form.querySelector('input')
    const item = input.value;
    const store = getStore();
    const items = store.items.length < 2 ? [...store.items, item]:store.items;
    updateStore((store) => ({...store, items }));
    dialog.close();
    input.value = "";
});

export const register = (path) => {
    const el = document.querySelector(path);
    el.addEventListener('click', () => {
        ingresarItems();
    })
};