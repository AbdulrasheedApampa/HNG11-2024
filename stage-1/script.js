// Add any JavaScript functionality here
console.log("Welcome to Abdulrasheed Apampa's Personal Website");

document.addEventListener('DOMContentLoaded', function() {
    var alertButton = document.getElementById('alertButton');
    alertButton.addEventListener('click', function() {
        alert('Button was clicked!');
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});