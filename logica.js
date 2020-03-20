/*
Función que contruye la url añadiéndole las tags y el tagmode (modo de uso de las tags).
Para las tags usamos las funciones split() y join() para darle el formato necesario para construir la url
Devuelve la url. 
*/

function buildURL() {
    let url = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=?&tags=' + $('#tags').val().split(' ').join() + '&tagmode=' + $('#select').val();
    console.log(url);
    return url;

}


function llamarJson() {
    /*Función landa dentro de paramteros de getJson.*/
    /*Sirve para que haga algo con el json que toma de la url, data es el elemento que toma.*/
    $.getJSON(buildURL(),
        /* Indicamos que tiene que hacer con el Json.*/
        function(data) {
            console.log(data.items);
            $.each(data.items, function(index, items) {
                /* Añadimos los elementos dentro de la tabla. */
                /* Usamos la función drawTags para las etiquetas de cada elemento. */
                $("#tb").html($("#tb").html() + "<tr><td>" + items.title + "</td><td><img src='" + items.media.m + "'/></td><td>" + items.date_taken + "</td><td>" + items.author + "</td><td>" + drawTags(items.tags) + "</td><td><a class='btn btn-primary' href='" + items.link + "'>Link</a></td></tr>");
                console.log(items.tags);
            });
        }
    );
}
/**
 * Función para vaciar la tabla.
 */
function vaciar() {
    $("#tb").html(" ");
}
/* Función que le da un formato a las etiquetas de cada item que se toma del Json y devuelve las tags. */
function drawTags(tags) {
    let arr = tags.split(' ');
    let words = "";
    $.each(arr, function(index, tag) {
        words += "<span class='badge badge-dark'>" + tag + "</span>";
    });
    return words;
}