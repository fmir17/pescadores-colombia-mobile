/*
---------------------------------------------------------------------------------------------------
                                    JAVASCRIPT DOCUMENTATION
---------------------------------------------------------------------------------------------------
Description:
This file contains the fishinglog's functions. 

Author:
Spinner Lab's Development Team.

*/
// The fishinglog 

function readFishinglog(){
    
    //local
    //var uri = "http://localhost:5050/fishinglog/"+userName;
    
    var userName = window.localStorage.getItem("user");
     

    var uri = "http://pescadores-colombia-api.herokuapp.com/fishinglog/"+userName;
    $.ajax({
    url: uri,
    type: "GET",
    dataType: "JSON",
    cache: false,

    success: function (data, status) {
      
            for(var fishinglogItem in data){
                var title = data[fishinglogItem].title;
                var place = data[fishinglogItem].place;
                var date = data[fishinglogItem].date;

               
                
                $('#fishinglogsList').append("<li>"
                    + "<a data-theme=\"d\" id=\"1\"class=\"ui-btn ui-btn-icon-right ui-icon-carat-r\"   >"
                    +"<h3>"+title+"</h3>"
                    +"<p><b>Lugar: </b>"+place+",<b>"
                    +" Fecha: </b>"+date
                    +"</p></a></li>");


            }
            

        },

    error: function (status) {
                alert('ERROR!!.\nLa aplicacion fallo al intentar recuperar las bitácoras.' + status);
            }
        });
    }

function fishingLogDetail(userName,fishingLogId){

    var uri = "http://pescadores-colombia-api.herokuapp.com/fishinglog/"+userName+"/"+fishingLogId;
        $.ajax({
        url: uri,
        type: "GET",
        dataType: "JSON",
        cache: false,

        success: function (data, status) {

            
                var title = data[0].title;

                var place = data[0].place;
                var date = data[0].date;
                var fish = data[0].fish;
                var bait = data[0].bait;
                var weight = data[0].weight;
                var size = data[0].size;
                var description = data[0].description;
                //var imageURL = data[0].imageURL;
                //var seasonId = data[0].seasonId;
                //var fishingpartners = data[0].fishingpartners;
                $.mobile.changePage($("#fishingLogDetail"));
                $('#headerId').append(title);
                $('#content').empty();
                var contentFish =  buildFishingLogDetail(title,place,date,fish,bait,weight,size,description);
                $('#content').append(contentFish);


                

        },

        error: function (status) {
            alert('ERROR!!.\nLa aplicacion fallo al intentar recuperar las bitácoras.' + status);
        }
    });
}



$(document).on("click", "#fishinglogsList li" ,function (event) {
    
    var fishingLogId =($(this).find("h3").text());
    var userName = window.localStorage.getItem("user");

    fishingLogDetail(userName,fishingLogId);

    //$('ul.art-vmenu li').attrib('id');
});



function buildFishingLogDetail(title,place,date,fish,bait,weight,size,description)
{
    var fishinglog = 
    "<span>"+
        "<div id = class = \"fishinlogContent\">" +
            "<div class = \"detail\">"+
                "<p><b>Lugar: </b>"+place+"</p>"+
                "<p><b>Fecha: </b>"+date+"</p>"+
                "<p><b>Pez: </b>"+fish+"</p>"+
                "<p><b>Anzuelo: </b>"+bait+"</p>"+
                "<p><b>Peso: </b>"+weight+"</p>"+
                "<p><b>Tamaño: </b>"+size+"</p>"+
                "<p><b>Descripcion: </b>"+description+"</p>"+
            "</div>" +
        "</div>"+
     "</span>";

     return fishinglog;
}