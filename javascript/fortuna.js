const dialogo = document.getElementById('galleta-fortuna')
const parrafo = dialogo.querySelector('p')
const boton = dialogo.querySelector('button')

boton.addEventListener('click', () => {
    dialogo.close()
})

async function generarFortuna () {
    var response;
    await fetch('http://yerkee.com/api/fortune',{
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json', 
            }
        })
        .then(function(res){
            response = res;
        })
        .catch(err => console.error(err));
    console.log(response);
    parrafo.innerText = response;
    dialogo.show();
}

export const register = (path) => {
    console.log(path)
    const el = document.querySelector(path);
    console.log(el)
    el.addEventListener('click', async () => {
        console.log('click')
        await generarFortuna();
    }
    )
};