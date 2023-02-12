const dialogo = document.getElementById('items-rpg')
const listahtml = document.getElementById('rpgItemList')
const boton = dialogo.querySelector('button')

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '904efdc642msh3c70b81aa2b1857p151a68jsnf330b8e24ab1',
		'X-RapidAPI-Host': 'rpg-items.p.rapidapi.com'
	}
};

boton.addEventListener('click', () => {
    dialogo.close()
})

async function itemsRPG () {
    var res;
    await fetch('https://rpg-items.p.rapidapi.com/item', options)
        .then(response => response.json())
        .then(response => {
            res = response;
        })
        .catch(err => console.error(err));
    var listaTemp = res.map(function(item){
        return "<div>" + item.name + "</div>"
    });
    var lista = "";
    var limit = 20;
    for(var item of listaTemp){
        if(limit > 0){
            lista = lista + item
        }
        limit--;
    }
    console.log(lista);
    listahtml.innerHTML = lista;
    dialogo.show();
}

export const register = (path) => {
    const el = document.querySelector(path);
    el.addEventListener('click', async () => {
        console.log('click')
        await itemsRPG();
    }
    )
};