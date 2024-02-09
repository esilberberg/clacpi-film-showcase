// Toggle responsive navbar
const toggleBtn = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleBtn.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});

// Close responsive navbar after clicking a link
const navLinks = document.querySelectorAll('.navbar-links a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbarLinks.classList.remove('active');
    });
});


// Account for height of navbar in navigation
document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          const offset = document.querySelector('.navbar').offsetHeight;
          const targetPosition = targetElement.offsetTop - offset;

          window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
          });
        }
      });
    });
  });