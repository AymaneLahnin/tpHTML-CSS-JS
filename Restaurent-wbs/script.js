$(document).ready(function() {
    // Handling blur event on navbarToggle
    $("#navbarToggle").on("blur", function(event) {
      var screenWidth = window.innerWidth;
      if (screenWidth < 768) {
        $("#collapsable-nav").collapse('hide');
      }
    });
  
    // Handling click event on navbarToggle
    $("#navbarToggle").on("click", function(event) {
      $(event.target).focus();
    });
  });
  