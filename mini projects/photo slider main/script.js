document.getElementById("c1").addEventListener("click", function() {
  document.body.style.backgroundColor = "";
});

document.getElementById("c2").addEventListener("click", function() {
  document.body.style.backgroundColor = "rgba(48, 126, 215, 0.57)";
  
});

document.getElementById("c3").addEventListener("click", function() {
  document.body.style.backgroundColor = "rgba(47, 187, 80, 0.86)";
});
document.getElementById("c4").addEventListener("click", function() {
  document.body.style.backgroundColor = "rgba(225, 223, 223, 0.5)";
});

document.getElementById("c5").addEventListener("click", function() {
  document.body.style.backgroundColor = "rgba(251, 255, 0, 0.5)";
});

// Navigation functionality
const slides = ['c1', 'c2', 'c3', 'c4', 'c5'];
let currentSlide = 0;

function updateSlide() {
    document.getElementById(slides[currentSlide]).checked = true;
    document.getElementById(slides[currentSlide]).click();
}

document.querySelector('.next-btn').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlide();
});

document.querySelector('.prev-btn').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlide();
});

// Initialize first slide
updateSlide();

// Auto-play functionality
let autoPlayInterval;
const autoPlayBtn = document.querySelector('.auto-play-btn');

function startAutoPlay() {
    autoPlayInterval = setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlide();
    }, 2000);
    autoPlayBtn.textContent = 'Pause';
    autoPlayBtn.classList.add('playing');
}

function stopAutoPlay() {
    clearInterval(autoPlayInterval);
    autoPlayBtn.textContent = 'Auto Play';
    autoPlayBtn.classList.remove('playing');
}

autoPlayBtn.addEventListener('click', () => {
    if (autoPlayBtn.classList.contains('playing')) {
        stopAutoPlay();
    } else {
        startAutoPlay();
    }
});

// Gallery button functionality
document.querySelector('.gallery.nav').addEventListener('click', function(e) {
  // Prevent default anchor behavior
  e.preventDefault();
  // Navigate to gallery page
  window.location.href = 'gallery.html';
});


