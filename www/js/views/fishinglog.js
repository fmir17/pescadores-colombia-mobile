function saveFishinglog()
{

    var title = $('#titleInput').val();
    var place = $('#placeInput').val();
    var fish = $('#fishInput').val();
    var bait = $('#baitInput').val();
    var weight = $('#weightInput').val();
    var size = $('#sizeInput').val();
    var description = $('#descriptionInput').val();
    
    var userName = String(window.localStorage.getItem("user"));


    // --DATA VALIDATION--
    if( title == null || title.length == 0 || /^\s+$/.test(title) ) {
        alert("Debe ingresar un título!");
        $("#titleInput").focus();
      return false;
    }   

    if( place == null || place.length == 0 || /^\s+$/.test(place) ) {
        alert("Debe ingresar el lugar!");
        $("#placeInput").focus();
      return false;
    }

    if( fish == null || fish.length == 0 || /^\s+$/.test(fish) ) {
        alert("Debe ingresar un Pez!");
        $("#fishInput").focus();
      return false;
    }   

    if( bait == null || bait.length == 0 || /^\s+$/.test(bait) ) {
        alert("Debe ingresar un Anzuelo!");
        $("#baitInput").focus();
      return false;
    }   

     if( weight == null || weight.length == 0 || /^\s+$/.test(weight) ) {
        alert("Debe ingresar el peso del pez!");
        $("#weightInput").focus();
      return false;
    }   

    if( !(/^([0-9])*$/.test(weight)) ) {
        alert("El peso debe ser un valor numérico (en gramos)!");
        $("#weightInput").focus();
      return false;
    }

     if( size == null || size.length == 0 || /^\s+$/.test(size) ) {
        alert("Debe ingresar el tamaño!");
        $("#sizeInput").focus();
      return false;
    }   
     if( !(/^([0-9])*$/.test(size)) ) {
        alert("El tamaño debe ser un valor numérico (en cms)!");
        $("#sizeInput").focus();
      return false;
    }


     if( description == null || description.length == 0 || /^\s+$/.test(description) ) {
        alert("Debe ingresar una descripción!");
        $("#descriptionInput").focus();
      return false;
    }   

    
    


    var fishinglog=  { 
        title:title,    
        place: place,
        fish: fish,
        bait: bait,
        weight: weight,
        size: size,
        description: description,
        userId: userName,
    };
    
    var uri = "http://pescadores-colombia-api.herokuapp.com/fishinglog";

    $.ajax({
        url: uri,
        type: "POST",
        data: fishinglog,

        success: function (data) {
            
            alert('Bitácora almacenada exitosamente');
            window.location.href = "myfishinglogs.html";
            //returnToWall();

        },
        error: function (status, jqXHR, data) {
            alert('Fallo llamado ajax ' + data+jqXHR+status);
        }
    });
}


