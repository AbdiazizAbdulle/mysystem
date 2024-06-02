

var backgrounds = ['url("pg1.jpg")', 'url("pg2.jpg")', 'url("pg3.jpg")']; // Add your

var currentIndex = 0;
var backgroundSlider = document.getElementById("background-slider");
var sliderBtns = document.querySelectorAll(".slider-btn");

// Function to change the background image
function changeBackground(index) {
    backgroundSlider.style.backgroundImage = backgrounds[index];
    // Remove active class from all buttons
    sliderBtns.forEach((btn) => btn.classList.remove("active"));
    // Add active class to the clicked button
    sliderBtns[index].classList.add("active");
}

// Change background when a slider button is clicked
sliderBtns.forEach((btn, index) => {
    btn.addEventListener("click", function () {
        changeBackground(index);
    });
});

// Auto change background every 5 seconds
setInterval(function () {
    currentIndex = (currentIndex + 1) % backgrounds.length;
    changeBackground(currentIndex);
}, 5000);

// Initialize with the first background
changeBackground(currentIndex);


document.addEventListener("DOMContentLoaded", function() {
    const slideTrack = document.querySelector(".slide-track");
    const slides = document.querySelectorAll(".slide");
    const slideWidth = slides[0].offsetWidth;
    let position = 0;
  
    function moveSlider() {
      position -= slideWidth;
      slideTrack.style.transition = "transform 0.5s ease";
      slideTrack.style.transform = translateX(${position}px);
  
      // Move the leftmost slide to the end
      setTimeout(() => {
        const firstSlide = slideTrack.children[0];
        slideTrack.appendChild(firstSlide.cloneNode(true));
        slideTrack.removeChild(firstSlide);
        slideTrack.style.transition = "none";
        slideTrack.style.transform = translateX(0);
        position = 0;
      }, 500); // Adjust the delay to match the transition duration
    }
  
    setInterval(moveSlider, 5000); // Move slider every 5 seconds
  
    // Hide the selected slide when clicked
    slides.forEach((slide, index) => {
      slide.addEventListener("click", function() {
        this.style.display = "none";
      });
    });
  
    // Show the hidden slide when the mouse is pressed to the left
    slideTrack.addEventListener("mousedown", function(event) {
      if (event.clientX < slideTrack.getBoundingClientRect().left) {
        const hiddenSlide = document.querySelector(".slide:hidden");
        if (hiddenSlide) {
          hiddenSlide.style.display = "flex";
        }
      }
    });
  });