window.onload = function(){ 

    window.addEventListener('click',function(e){
        if(e.target.href!==undefined){
            chrome.tabs.create({url:e.target.href});
        }
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
