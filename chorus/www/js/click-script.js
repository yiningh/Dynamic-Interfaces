$(document).ready(function(){
	$('.join-wrapper ul a').each(function(){
	    $(this).click(function(){
	    	$('.join-wrapper ul a').removeClass('highlighted');
	        $(this).addClass('highlighted');
	    });
	});

	$('#start').click(function(){
		//backgroundSound.start();
		//playBeats();
		load();
	});
/*=====BEAT ONE AH================*/
	$('#beat-1 #pitch-1').click(function(){
		if($(this).hasClass('clicked')){
			$(this).removeClass('clicked');
			soundClipsAhS[4] = false;
		}else{
			$(this).addClass('clicked');
			soundClipsAhS[4] = true;
		}
	});
	$('#beat-1 #pitch-2').click(function(){
		if($(this).hasClass('clicked')){
			$(this).removeClass('clicked');
			soundClipsAhS[3] = false;
		}else{
			$(this).addClass('clicked');
			soundClipsAhS[3] = true;
		}
	});
	$('#beat-1 #pitch-3').click(function(){
		if($(this).hasClass('clicked')){
			$(this).removeClass('clicked');
			soundClipsAhS[2] = false;
		}else{
			$(this).addClass('clicked');
			soundClipsAhS[2] = true;
		}
	});
	$('#beat-1 #pitch-4').click(function(){
		if($(this).hasClass('clicked')){
			$(this).removeClass('clicked');
			soundClipsAhS[1] = false;
		}else{
			$(this).addClass('clicked');
			soundClipsAhS[1] = true;
		}
	});
	$('#beat-1 #pitch-5').click(function(){
		if($(this).hasClass('clicked')){
			$(this).removeClass('clicked');
			soundClipsAhS[0] = false;
		}else{
			$(this).addClass('clicked');
			soundClipsAhS[0] = true;
		}
	});
/*=======BEAT TWO================*/
	$('#beat-2 #pitch-1').click(function(){
		if($(this).hasClass('clicked')){
			$(this).removeClass('clicked');
			soundClipsAyaS[4] = false;
		}else{
			$(this).addClass('clicked');
			soundClipsAyaS[4] = true;
		}
	});
	$('#beat-2 #pitch-2').click(function(){
		if($(this).hasClass('clicked')){
			$(this).removeClass('clicked');
			soundClipsAyaS[3] = false;
		}else{
			$(this).addClass('clicked');
			soundClipsAyaS[3] = true;
		}
	});
	$('#beat-2 #pitch-3').click(function(){
		if($(this).hasClass('clicked')){
			$(this).removeClass('clicked');
			soundClipsAyaS[2] = false;
		}else{
			$(this).addClass('clicked');
			soundClipsAyaS[2] = true;
		}
	});
	$('#beat-2 #pitch-4').click(function(){
		if($(this).hasClass('clicked')){
			$(this).removeClass('clicked');
			soundClipsAyaS[1] = false;
		}else{
			$(this).addClass('clicked');
			soundClipsAyaS[1] = true;
		}
	});
	$('#beat-2 #pitch-5').click(function(){
		if($(this).hasClass('clicked')){
			$(this).removeClass('clicked');
			soundClipsAyaS[0] = false;
		}else{
			$(this).addClass('clicked');
			soundClipsAyaS[0] = true;
		}
	});

});
