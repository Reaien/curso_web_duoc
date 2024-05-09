const urlRest = 'https://my-json-server.typicode.com/Reaien/curso_web_duoc/Albums';

$(document).ready(function(){
    cargarDatos();
});

function cargarDatos() {
    $.get(urlRest, function(response) {
        console.log(response)
        const albums = response;
        albums.forEach(album => {
            
            if (album.id !== 1) {
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
            }
            
            
            // Si el id del álbum es igual a 1, también agregamos una etiqueta img
            if (album.id === 1) {
                const imgHTML = `<img src="${album.Caratula}" alt="${album.Album}" class="w-75">`;
                $('#album-1-container').append(imgHTML);
                
            }
            
        });
        

    });
}