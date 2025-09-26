// Get the button element with the ID "myBtn" and store it in the variable 'mybutton'
let mybutton = document.getElementById("myBtn");

// When the user scrolls on the page, run the scrollFunction
// 'window.onscroll' fires every time the user scrolls the page
window.onscroll = function() {scrollFunction()};

// This function checks how far the user has scrolled
function scrollFunction() {
  // If the user has scrolled more than 20px down from the top...
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    // ...then show the button by changing its CSS display property to "block"
    mybutton.style.display = "block";
  } else {
    // If the user is near the top (less than 20px), hide the button
    mybutton.style.display = "none";
  }
}

// This function is called when the user clicks the button
function topFunction() {
  // Scroll back to the very top of the page
  // 'document.body.scrollTop = 0;' works for Safari browsers
  document.body.scrollTop = 0; 
  
  // 'document.documentElement.scrollTop = 0;' works for Chrome, Firefox, IE, and Opera
  document.documentElement.scrollTop = 0; 
}
