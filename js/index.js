$(document).ready(function(){
	
	$('.dropdown').hover(function() {
		  $(this).find('.dropdown-menu').first().stop(true, true).css({"background":"#191919"}).show();
		  $(this).find('.dropdown-menu li a').css({"color":"#fff","padding":"10px"});
		}, function() {
		  $(this).find('.dropdown-menu').first().stop(true, true).hide(700);
	});

	$('.panel-heading a').click(function() {
		if($(this).parents('.panel-heading').next().find('.panel-body').is(':hidden')==true)
		{
			//panel-body dong' thi mo ra
			$('.panel-body').hide();
			$('.panel-heading').removeClass('active');
    		$(this).parents('.panel').find('.panel-heading').addClass('active');
    		
    		$(this).parents('.panel-heading').next().find('.panel-body').show();
    		
		}
    	// else{
    	// 	//panel-body dang mo thi dong cai hien tai.
    	// 	$(this).parents('.panel-heading').next().find('.panel-body').hide();

    	// }

    	
	});

	// $('.accordion-toggle').on('click',function(){
	// 	$(this).closest('.panel-group').children().each(function(){
	// 		$(this).find('>.panel-heading').removeClass('active');
	// 	});
	// });
});