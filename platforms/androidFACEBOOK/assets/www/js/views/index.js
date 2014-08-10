/*
---------------------------------------------------------------------------------------------------
									JAVASCRIPT DOCUMENTATION
---------------------------------------------------------------------------------------------------
Description:
This file contain the functions used for the index page. This functions allow to the application make register and process the different events in the main page of the application. The principal function is initAplication, it allows to application know when  the device is ready.

Author:
Spinner Lab's Development Team.

*/

// Local Variables
var INITIAL_ROUTE = 'html/home.html';

// Functions
// This function is fired when the device is ready for execute cordova commands.
function initAplication(){
    document.addEventListener("deviceready", onDeviceReady, false);
}

// This function is called for the function initAplication. Redirects the current page to the init view.
function onDeviceReady() {
	location.href = INITIAL_ROUTE;
}
