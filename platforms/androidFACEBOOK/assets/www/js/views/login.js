function initSocialNetworks(){
	document.addEventListener("deviceready", linkSocialNetworks(), true);
}

function linkSocialNetworks(){
	$(document).ready(function(){
		linkFacebook();
	});
}
