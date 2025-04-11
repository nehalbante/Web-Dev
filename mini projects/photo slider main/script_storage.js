// Stop auto-play when manually navigating
document.querySelector('.prev-btn').addEventListener('click', stopAutoPlay);
document.querySelector('.next-btn').addEventListener('click', stopAutoPlay);

// Gallery button functionality
document.querySelector('.gallery.nav').addEventListener('click', function(e) {
    // Prevent default anchor behavior
    e.preventDefault();
    // Navigate to gallery page
    window.location.href = 'gallery.html';
});
