var endpoint = "https://www.jsonstore.io/0a61c84965abfedbf59fb43f33712c1031d013ee0b417bfdbc1cb54162b57b9e" 

function geturl(){
    var url = document.getElementById("urlinput").value;
    var protocol_ok = url.startsWith("http://") || url.startsWith("https://") || url.startsWith("ftp://");
    if(!protocol_ok){
        newurl = "http://"+url;
        return newurl;
    }else{
        return url;
    }
}

function getrandom(){
    var random_string = Math.random().toString(32).substring(2, 5) + Math.random().toString(32).substring(2, 5);
    return random_string;
}

// function getrandom() {
//     var text = "";
//     var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

//     for (var i = 0; i < 5; i++)
//         text += possible.charAt(Math.floor(Math.random() * possible.length));
//     return text;
// }



function genhash(){
    if (window.location.hash==""){
        window.location.hash = getrandom();
    }
}

function send_request(url){
    this.url = url;
    $.ajax({
        'url': endpoint + "/" + window.location.hash.substr(1),
        'type': 'POST',
        'data': JSON.stringify(this.url),
        'dataType': 'json',
        'contentType': 'application/json; charset=utf-8'
    })
}

function shorturl(){
    var longurl = geturl();
    genhash();
    send_request(longurl);
}

var hashh = window.location.hash.substr(1)

if (window.location.hash != ""){
    $.getJSON(endpoint + "/" + hashh, 
    function (data) {
        data = data["result"];

        if (data != null) {
            window.location.href = data;
        }
    });
}
