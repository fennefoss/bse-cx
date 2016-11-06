 $("body").append('Test');
        
        $( document ).ready(function() {
            console.log( "ready!" );

            $('.popup').click(function(){
                $(this).css('color', 'red');
            });
        });