$( document ).ready(function() {
    $(".ig-nav-items, .ag-nav-items, .all-nav-items").hide();
});

function navBtn(btn, navItem){
    $(btn).click(function() {
      $('html,body').animate({'scrollTop' : 220},1000);
      $(navItem).slideDown(353);
      $(".ig-ag-cat-nav-container").delay("fast").animate({left: "-100%"}, 800);
    });
}

navBtn(".ig-nav-btn", ".ig-nav-items");
navBtn(".ag-nav-btn", ".ag-nav-items");
navBtn(".all-nav-btn", ".all-nav-items");

$( ".all-nav-back-btn" ).click(function() {
  $(".ig-ag-cat-nav-container").animate({left: "0%"}, 800);
  $('html,body').animate({'scrollTop' : 0},1000);
  $(".ig-nav-items, .ag-nav-items, .all-nav-items").delay("slow").slideUp(1000);
});
