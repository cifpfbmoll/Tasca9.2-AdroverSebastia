function buildURL() {
    let url = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=?&tags=' + $('#tags').val().split(' ').join() + '&tagmode=' + $('#select').val();
    console.log(url);
    return url;

}
/*función landa dentro de paramteros de getJson*/
/*sirve para que haga algo con el json que toma de la url, data es el elemento que toma*/
function llamarJson() {
    $.getJSON(buildURL(),
        function(data) {
            console.log(data.items);
            $.each(data.items, function(index, items) {
                $("#tb").html($("#tb").html() + "<tr><td>" + items.title + "</td><td><img src='" + items.media.m + "'/></td><td>" + items.date_taken + "</td><td>" + items.author + "</td><td>" + items.tags + "</td><td><a href='" + items.link + "'>Link</a></td></tr>");
                console.log(items.tags);
            });
        }
    );
}

function drawTags(tags) {
    $.each(tags.word, )
}