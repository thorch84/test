jQuery(function(){
	$("#menu-toggle").click(function(e) {//for side navigation
		e.preventDefault();
		$("#main-container").toggleClass("toggled");
	});
	$("#whoIsSubmitting").change(function(){
		//alert($(this).val());
		$("#Rep,#Broker").hide();//hide all extra fields initially
		/*$(this).val()=="200"?$("#Rep").show():"";
		$(this).val()=="300"?$("#Broker").show():"";*/
	});
    $(".sidebar-brand").click(function(e) {
		var offset = $("#page-content-wrapper").offset();
		//#page-content-wrapper is shifted left, which means the sidenav is showing, so hide the sidenav
		if (offset.left>50) {
			$("#main-container").removeClass("toggled");
		}
		e.preventDefault();
	});
	
	$( ".navbar a" ).hover(
	  function() {
	    $( this ).addClass('hovered');
	  }, function() {
	    $( this ).removeClass('hovered');
	  }
	);
	
	var waypoint = new Waypoint({
	  element: document.getElementById('content-top'),
	  handler: function(direction) {
	    //if direction is down, the item is scrolling towards the top of the screen
	    //if direction is up, item is scrolling towards bottom of the screen
	    if(direction=='down'){
		    shrinkHeader();
	    }
	    if(direction=='up'){
		    growHeader();
	    }
	  },
	  offset: 90
	});
	
	$('.help-overlay-content').each(function(){//set initial positions for items in help overlay
		positionHelp($(this));
	});

	//set body top padding to match height of top nav and header section, so that content can scroll under heading
	setTopPad();
	$( window ).resize(function() {
	  setTopPad();
	  $('.help-overlay-content').each(function(){
			positionHelp($(this));
		});
	});
	
});

function positionHelp(thisRef){
	//each help-overlay-content item stores the ID of the element it is pointing to
	//that ID is stored in the data-reference attribute
	elementRef = thisRef.data('reference'); //get the ID of the element we're pointing to
	if($("#" + elementRef ).is(":visible")){
		var offset="";
		offset = $( "#" + elementRef ).offset();// get position of that element based on top left coords
		theTop = offset.top+=$( "#" + elementRef ).height()-($( "#" + elementRef ).height()/2);
		if((thisRef).hasClass('left-help')){
			theLeft = offset.left+=$( "#" + elementRef ).width();
		} else {
			theLeft = offset.left-=$( "#" + elementRef ).width();	
		}
		thisRef.css({
			"top": theTop+'px',
			"left": theLeft+'px',
			"display":"block"
		});
	} else {
		thisRef.css('display','none');
	}
}

function setTopPad(){
	topPad = $('.navbar .container-fluid').height() + $('.header-section').height() + "px";
	$("body").css('padding-top',topPad);
	$("#sidebar-wrapper").css('margin-top',"-" + topPad);
}
function shrinkHeader(){
	if($('.moe').length>0){
		//we are on the MOE tool
		$('#moe-tool-info, #moe-location-info, #moe-cost-type-info').fadeOut();
		//$("#header-info-box").addClass('headshrink');//not doing anything with this yet... possible animation
		//setTopPad();
	}
	if($('.pst').length>0){
		//we are on the MOE tool
		$('#pst-location-info').css({'float':'left','margin-right':'10px'});
		//$("#header-info-box").addClass('headshrink');//not doing anything with this yet... possible animation
		//setTopPad();
	}
}
function growHeader(){
	if($('.moe').length>0){
		//we are on the MOE tool
		$('#moe-tool-info, #moe-location-info, #moe-cost-type-info').fadeIn();
		//$("#header-info-box").removeClass('headshrink');
		//setTopPad();
	}
	if($('.pst').length>0){
		//we are on the MOE tool
		$('#pst-location-info').css({'float':'none','margin-right':'0px'});
		//$("#header-info-box").addClass('headshrink');//not doing anything with this yet... possible animation
		//setTopPad();
	}
}

function autoTab(field1, len, field2, e) {
	var key = window.event? e.keyCode : e.which;
	if (key != 9 && key != 16) {
		if (document.getElementById(field1).value.length == len) {
			document.getElementById(field2).focus();
			document.getElementById(field2).select();
			}
	}
}