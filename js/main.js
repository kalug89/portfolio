$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');

        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');

        }
    });
	
	var allLinks = $('li a');
    
  
        allLinks.on('click', function(e){
        e.preventDefault();
        var href = $(this).attr('href');
        var offset = $(href).offset().top;
        
        $('html, body').animate({
            scrollTop: offset 
        }, 1000);
            
        });
		
		
		 
		 
		 
		 
		 

 
 

 
	
	

});



