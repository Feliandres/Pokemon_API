let url="https://jsonplaceholder.typicode.com/users"; 
// Declaro la variable que apunta a la URL

const obtener_Usuarios = async ()=> {
                        // Saber si retorna los datos asincronicamente
    try {

        let response = await fetch (url);

        if(!response.ok) {
            throw new Error ("Ocurrio un Error al realizar la peticion")
        }

        let data = await response.json(); // Guarda los datos en una variable

        pintar_Usuarios(data);

    } catch (error) {

        console.log(error);
    }
};


const pintar_Usuarios = (data) => { // recibe datos y los lee mediante el for
    
    obtener_Usuarios();
    let body = "";

    for (let i=0; i < data.length; i++) {

        body += `<tr><td>${data[i].id}</td><td>${data[i].name}</td><td>${data[i].email}</td></tr>`;
                // el $ hace referencia a la data
    }

    document.getElementById("data").innerHTML=body;
}