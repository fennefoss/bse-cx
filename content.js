window.onload = function(){ 
	console.log('Dom manipulation');

	theParent = document.getElementsByTagName("BODY")[0];
	theKid = document.createElement("div");
	theKid.innerHTML = 'Are we there yet? OR?';

	theParent.insertBefore(theKid, theParent.firstChild);

	function doSomething(){
	alert('Hello World!');
}

};

$( document ).ready(function() {
    console.log( "jQuery is loaded for content page" );

    $(document.body).prepend('<div id="topbar"></div >');

    // get the page type
    $(function(){
    	var pageType = $('#wrapper').attr('class');
    	console.log(pageType);
	});


    var contentToolMarkup = '<button class="content-tool">Analyze page</button>';
    // prepend content tool to the body tag
    $('#wrapper').prepend( $(contentToolMarkup) );

    $('hello world').appendTo('body');

});
