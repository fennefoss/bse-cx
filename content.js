window.onload = function(){ 
	console.log('Dom manipulation');

	//theParent = document.getElementsByTagName("BODY")[0];
	//theKid = document.createElement("div");
	//theKid.innerHTML = 'Are we there yet? OR?';

	//theParent.insertBefore(theKid, theParent.firstChild);

};

$( document ).ready(function() {
    console.log( "jQuery is loaded for content page" );

    $(document.body).append('<div id="bse-cx-information-bar">Da tool fool !</div >');

    // get the page type
    $(function(){
    	var pageType = $('#wrapper').attr('class');
    	console.log(pageType);
	});

    //WORKING
    //var contentToolMarkup = '<button class="content-tool">Analyze page</button>';
    // prepend content tool to the body tag
    //$('#wrapper').prepend( $(contentToolMarkup) );

});
