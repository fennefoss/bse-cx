window.onload = function(){ 
	console.log('Dom manipulation');
};

$( document ).ready(function() {
    console.log( "jQuery is loaded for content page" );

    // get the page type
    $(function(){
    	var pageType = $('#wrapper').attr('class');
    	console.log(pageType);
	});
});
