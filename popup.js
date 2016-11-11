window.onload = function(){ 

    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        console.log(tabs[0].url);
    });


	document.getElementById("popup").onclick = function(){
		document.getElementById("popup").classList.add('myclass');
	};

var save_button = document.getElementById('Save');
save_button.onclick = saveData;

function saveData(){
  var input = document.getElementById("saveServer");
  localStorage.setItem("server", input.value);
  var storedValue = localStorage.getItem("server");
  console.log(storedValue);
  return storedValue;
}



};

// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "jQuery is loaded" );

    // Add jj class to country links when jj is selected as a brand
    $('.jj').click(function() {
        console.log('JJ has been selected');

        $('.environment').show();

        $('.country-links a').attr('href',function(i,v) {
            return "jackjones.com" + v;
        });

    });

    $('.sl').click(function() {
        console.log('SL has been selected');

        $('.environment').show();
        
        $('.country-links a').attr('href',function(i,v) {
            return "selected.com" + v;
        });

    });

    $('.sf').click(function() {
        console.log('SF has been selected');

        $('.environment').show();

        $('.country-links a').attr('href',function(i,v) {
            return "selectedfemme.com" + v;
        });
    });

    $('.sh').click(function() {
        console.log('SH has been selected');

        $('.environment').show();

        $('.country-links a').attr('href',function(i,v) {
            return "selectedhomme.com" + v;
        });
    });

    // Add development class to country links when development is selected as an environment
    $('.development').click(function() {
        console.log('development has been selected');
        var href = $(this).attr('href');

        $('.country').show();

        $('.country-links a').attr('href',function(i,v) {
            return "http://development.bing." + v;
        });

    });

    // Add staging class to country links when development is selected as an environment
    $('.staging').click(function() {
        console.log('staging has been selected');
        var href = $(this).attr('href');

        $('.country').show();

        $('.country-links a').attr('href',function(i,v) {
            return "http://staging.bing." + v;
        });

    });

    // Add production class to country links when development is selected as an environment
    $('.production').click(function() {
        console.log('prodution has been selected');
        var href = $(this).attr('href');

        $('.country').show();

        $('.country-links a').attr('href',function(i,v) {
            return "http://www." + v;
        });

    });

});