$( document ).ready(function() {
    $(".ol-nav-items, .ole-nav-items, .bd-nav-items, .rec-nav-items").hide();
});

function agLinerNavBtn (navBtn, navItem){
    $( navBtn).click(function() {
      $('html,body').animate({'scrollTop' : 220},1000);
      $(navItem).slideDown(353);
      $(".ig-ag-cat-nav-container").delay("fast").animate({left: "-100%"}, 800);
    });
}
agLinerNavBtn(".ol-nav-btn", ".ol-nav-items");
agLinerNavBtn(".ole-nav-btn", ".ole-nav-items");
agLinerNavBtn(".bd-nav-btn" , ".bd-nav-items");
agLinerNavBtn(".rec-nav-btn" , ".rec-nav-items");

$( ".all-nav-back-btn" ).click(function() {
  $(".ig-ag-cat-nav-container").animate({left: "0%"}, 800);
  $('html,body').animate({'scrollTop' : 0},1000);
  $(".ol-nav-items, .ole-nav-items, .bd-nav-items, .rec-nav-items").delay("slow").slideUp(1000);
});

function showSlideUpDown(click, down, up){
    $(click).click(function() {
      $(down).slideDown("slow");
      $(up).slideUp("slow");
    });
}
showSlideUpDown(".showolo", ".olo", ".olr");
showSlideUpDown(".showolr", ".olr", ".olo");
showSlideUpDown(".showoleo", ".oleo", ".oler");
showSlideUpDown(".showoler", ".oler", ".oleo");
showSlideUpDown(".show48r", ".48-wallr", ".52-wallr, .48-wallo, .52-wallo");
showSlideUpDown(".show52r", ".52-wallr", ".48-wallr, .48-wallo, .52-wallo");
showSlideUpDown(".show48o", ".48-wallo", ".52-wallo, .48-wallr, .52-wallr");
showSlideUpDown(".show52o", ".52-wallo", ".48-wallo, .48-wallr, .52-wallr");

function showSlideDown(click, down){
    $( click ).click(function() {
      $(down).slideDown("slow");
    });
}
showSlideDown(".showol", ".olr, .olo");
showSlideDown(".showole", ".oler, .oleo");
showSlideDown(".show48-52", ".52-wallo, .48-wallo, .48-wallr, .52-wallr");

$(window).scroll(function() {
	var n = $(".bd-nav-header").top;
	if (n < 0) {
		$(".wall-sort").css('top', $(this).scrollTop() + "50px");
	}
	else {
		$(".wall-sort").css("position", "relative");
	}
});
