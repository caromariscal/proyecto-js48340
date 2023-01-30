let store = {
    name: '',
    role: '',
    items: []
};

export function updateStore(fn) {
    const newStore = fn(store);
    store = newStore;
    localStorage.setItem('store', JSON.stringify(newStore));
}

export function getStore() {
    return store;
}

window.getStore = getStore;

if (localStorage.getItem('store')) {
    const initialStore = JSON.parse(localStorage.getItem('store'));
    store = initialStore;
}