/*
---------------------------------------------------------------------------------------------------
                                    JAVASCRIPT DOCUMENTATION
---------------------------------------------------------------------------------------------------
Description:
This file contains the wall's functions. It's created to contain all wall's private functions.

Author:
Spinner Lab's Development Team.

*/
// The Menu items and links
var menu = [
  {
    title: "Cerrar Sesion",
    url  : "javascript:cerrarSesion();"
  }
];


$(document).on("pageshow", function (event) {

  var items = '', 
    ul = $(".mainMenu:empty");  

  for (var i = 0; i < menu.length; i++) {
    items += '<li><a href="' + menu[i].url + '">' + menu[i].title + '</a></li>';
  }

  ul.append(items);
  ul.listview('refresh'); 

});

function initView()
{
    //vincularFacebook();
    //ingresarInformacionBasica();
    readPost();
}

function redirectTo(page){
	location.href = page;
	return false;
}

function readPost(){

	var uri = "http://pescadores-colombia-api.herokuapp.com/wall";

    $.ajax({
        url: uri,
        type: "GET",
        dataType: "JSON",
        cache: false,

        success: function (data, status) {

            for(var comment in data){
                var author = data[comment].author;
                var date = data[comment].created_at;
                var message = data[comment].body;

                buildMessage(author,date,message);
            }
        },

        error: function (status) {
            alert('ERROR!!.\nLa aplicacion fallo al intentar recuperar los comentarios publicados.' + status);
        }
	});
}

function buildMessage(author, date, message)
{
	var comment = 
    "<span>"+
		"<div id = class = \"comment\">" +
			"<div class = \"author\">" + author + "</div>" +
			"<div class = \"message\">" + message + 
            "<div class = \"date\">" + date + "</div>" +
            "</div>" +
	 	"</div>"+
	 "</span>";

	 $('#wall').append(comment);
}

function post(){
    var name = "USUARIO EN SESION";
    var message = $('#newComment').val();

    var messageBody = {author: name, body: message};
    var uri = "http://pescadores-colombia-api.herokuapp.com/wall";

    $.ajax({
        url: uri,
        type: "POST",
        data: messageBody,

        success: function (data) {
            redirectTo("wall.html");
        },
        error: function (status) {
            alert('Error al postear' + status);
        }
    });
}

function cleanAllComments(){
    var div = document.getElementById('comment');
    while(div.hasChildNodes()) {
        div.removeChild(div.firstChild);
    }
}


