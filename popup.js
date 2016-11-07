window.onload = function(){ 

    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        console.log(tabs[0].url);
    });


	document.getElementById("popup").onclick = function(){
		document.getElementById("popup").classList.add('myclass');
	};

	// click brand get country
	document.querySelector(".jj").onclick = function(){
		document.getElementById("country").className = "js-country";
		document.querySelector('.country-links a').classList.add('jj');
	};

};

// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "jQuery is loaded" );

    // Add jj class to country links when jj is selected as a brand
    $('.jj').click(function() {
        console.log('JJ has been selected');
        $('.country-links a').addClass('jj');
    });

    // Add development class to country links when development is selected as an environment
    $('.development').click(function() {
        console.log('development has been selected');
        $('.country-links a').addClass('development');

        if ($(".country-links a").hasClass("jj development")) {
            console.log('link has been created');
            $('.country-links a.de').attr('href','http://development.bing.jackjones.com/de/de/home');
        }
    });

});