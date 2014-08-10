function saveFishinglog()
{
    
    var place = $('#placeInput').val();
    var fish = $('#fishInput').val();
    var bait = $('#baitInput').val();
    var weight = $('#weightInput').val();
    var size = $('#sizeInput').val();
    var description = $('#descriptionInput').val();
    var imageURL = $('#imageURLInput').val();
    
    var userName = String(window.localStorage.getItem("user"));
    
    //var fishigpartners = $('#fishigpartnersInput').val();

    var fishinglog=  {     
        place: place,
        fish: fish,
        bait: bait,
        weight: weight,
        size: size,
        description: description,
        imageURL: imageURL,
        userId: userName,
        seasonId: 'jennifer'
    };
    
    var uri = "http://pescadores-colombia-api.herokuapp.com/fishinglog";

    $.ajax({
        url: uri,
        type: "POST",
        data: fishinglog,

        success: function (data) {
            
            alert('Bitácora almacenada exitosamente');
            //returnToWall();

        },
        error: function (status, jqXHR, data) {
            alert('Fallo llamado ajax ' + data+jqXHR+status);
        }
    });
}

function returnToWall() {
    document.location.href = "login.html";
}

