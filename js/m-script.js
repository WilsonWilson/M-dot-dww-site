document.querySelector( "#nav-toggle" ).addEventListener( "click", function() {
  this.classList.toggle( "active" );
});

$( "#nav-toggle" ).click(function() {
  $( "main, footer" ).toggleClass("content-hide", 1000);
  $( "nav" ).slideToggle( "slow");  
  $( ".search-bar" ).slideUp( "slow");
  $( ".search-btn" ).fadeToggle( "slow");
});

$( ".search-btn" ).click(function() {
  $( ".search-bar" ).slideToggle( "slow");
});