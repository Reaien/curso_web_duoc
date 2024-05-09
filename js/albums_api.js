//Definimos una const que contiene la dirección URL de una API

const urlRest = 'https://my-json-server.typicode.com/Reaien/curso_web_duoc/Albums';

//Utilizamos jQuery para esperar a que el documento esté listo
//Esto garantiza que el código que está dentro de esta función se ejecute despues de que se haya cargado el documento HTML
$(document).ready(function(){
    cargarDatos();
});

function cargarDatos() {
    //Hacemos el get a la urlRest, una callback function que espera a la respuesta en el parametro que le damos
    $.get(urlRest, function(response) {
        console.log(response) //verificamos que haya recibido la respuesta
        const albums = response; //asignamos los datos recibidos a una const
        albums.forEach(album => {
            //iteraremos sobre cada album pasandoselo como parametro
            if (album.id !== 1) { //para agregar dinamismo en el diseño omitiremos el album con id 1
                const albumCards = `
                <div class="col-sm-4 mt-5 " >
                    <div class="card bg-white bg-opacity-50">
                        <img src="${album.Caratula}" alt="portadaAlbum" class="rounded my-3 mx-3">
                        <p class="fw-semibold ms-3 text-white text-opacity-75">${album.Artista}</p>
                        <div class="card-body d-flex justify-content-between">
                            <h5>${album.Album}</h5>
                            <p>$${album.Valor}</p>
                        </div>
                        <button type="button" class="btn btn-light mx-5 fw-bold mb-5">Comprar</button>
                    </div>
                </div>`;
                $('#albums-container').append(albumCards);
                //seleccionamos el elemento del DOM que es el id donde insertaremos al final del elemento
            }
            
            
            // Si el id del álbum es igual a 1, también agregamos una etiqueta img
            if (album.id === 1) {
                const imgHTML = `<img src="${album.Caratula}" alt="${album.Album}" class="w-75">`;
                $('#album-1-container').append(imgHTML);
                
            }
            
        });
        

    });
}