$(".znav #btnnav svg").click(function(e){
	$(".znav>nav").show();
})

$(".znav #hidnav svg").click(function(e){
	$(".znav>nav").hide();
})

$( window ).resize(function() {
  if($(window).width() > 576)$(".znav>nav").show();;
});
