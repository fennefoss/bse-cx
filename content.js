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
    $(function pageTypeAnalyze(){
    	var pageType = $('#wrapper').attr('class');
        $('#bse-cx-information-bar').append(' Pagetype: ' + pageType);
	});

    // get the category ID
    $(function categoryIdAnalyze(){
        var categoryId = $('#wrapper').attr('class');
        $('#bse-cx-information-bar').append(' Category ID: ' + categoryId);
    });

    // get the product ID
    $(function productIdAnalyze(){
        var productId = $('.pdpForm').attr('data-articlenumber');
        $('#bse-cx-information-bar').append(' Product ID: ' + productId);
        console.log(productId);
    });

});
