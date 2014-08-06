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
            $('#myfishinglogs').append("<ul data-role=\"listview\" class=\"ui-listview\">");


            for(var fishinglogItem in data){
                var title = data[fishinglogItem].title;
                var place = data[fishinglogItem].place;
                var date = data[fishinglogItem].date;

                var new_fishinglog = buildList(title,place,date);
                
                $('#myfishinglogs').append(new_fishinglog);
            }
            

        },

    error: function (status) {
                alert('ERROR!!.\nLa aplicacion fallo al intentar recuperar las bitácoras.' + status);
            }
        });
    }
function buildList(title,place,date)
{

    var fishinglogItem =
    "<span>"+
         "<div id = class = \"fishinglogItem\">" +
        "<div class=\"title\"> <a href=\"fishinglogDetail.html\">"+title+"</a>"+"</div>" +
        "<div class=\"place\"> " + "Lugar: "+ place+ ", " +date+"</a>"+"</div>" +
        "</div>"+
    "</span>";

     return fishinglogItem;
}


function fishingLogDetail(userId,fishingLogId){

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
                var imageURL = data[0].imageURL;
                var seasonId = data[0].seasonId;
                var fishingpartners = data[0].fishingpartners;
                alert(title+place+date+fish+bait+weight+size+description+
                    imageURL+seasonId+fishingLogId);
        },

        error: function (status) {
            alert('ERROR!!.\nLa aplicacion fallo al intentar recuperar las bitácoras.' + status);
        }
    });
}


