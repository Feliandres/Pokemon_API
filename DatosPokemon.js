const consultar_Pokemon = (id,number) => {
// trae datos de la api de los pokemon
    
    fetch (`https:///pokeapi.co/api/v2/pokemon/${id}`)
    // lo que cambia de la api
    .then((response)=>{
        return response.json();
        // devuelve el JSON de la API
    })
    .then((data)=>{
        console.log(data);
        // Sirve para ver donde esta fallando 
        pintar_Pokemon(data, number)
    })
    .catch((error)=>{
        console.log(error);
    });
};

const btnSeleccionar = () => {

    let primerPokemon = Math.round(Math.random() * 150);
    let segundoPokemon = Math.round(Math.random() * 150);
    consultar_Pokemon(primerPokemon,1);
    consultar_Pokemon(segundoPokemon,2);
};

btnSeleccionar()


const lista = document.getElementById("listarpokemon")
// listarpokemon es el nombre del id de div en HTML

const pintar_Pokemon = (data, id) => {

    let item = lista.querySelector(`#pok-${id}`);
    // Imagen
    item.getElementsByTagName("img")[0].setAttribute("src",data.sprites.front_default);
    // Nombre
    item.getElementsByTagName("p")[0].innerHTML = data.name;
    // Habilidades
    let poke = ''
    // Recorre las habilidades y la imprime
    for(let i=0; i<data.abilities.length; i++) {
        poke += `<li>${data.abilities[i].ability.name}</li>`
    }

    // Imprime las habilidades en consola
    console.log(poke);
    item.getElementsByTagName('ol')[0].innerHTML = poke;

}