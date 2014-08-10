/*
---------------------------------------------------------------------------------------------------
									JAVASCRIPT DOCUMENTATION
---------------------------------------------------------------------------------------------------
Description:
This file contain the functions considered like common functions of the application.

Author:
Spinner Lab's Development Team.
*/

// Local Variables

// Functions
// this function create the loading indicator. It is used for show to user that page is in loading process.
function buildLoaderIndicator(){
	if (!document.getElementById('loadingIndicator')) {
		var loadingIndicator = document.createElement('div');
		loadingIndicator.id = 'loadingIndicator';
		document.body.appendChild(loadingIndicator);
    }

    $('#loadingIndicator').append("<div id = \"loadingLabel\">CARGANDO</div>");

    $('#loadingIndicator').append("<img id = \"logoLoading\" src = \"../images/logos/fish_logo_prueba.png\" alt=\"Cargando Pescadores Colombia...\"/>");

}

function reload(){
	location.reload(true);
}
