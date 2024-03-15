// Toggle responsive navbar
const toggleBtn = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleBtn.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});

// Close responsive navbar after clicking a link
navbarLinks.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
        navbarLinks.classList.remove('active');
    }
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

// Get the register link and dropdown content
var registerLink = document.getElementById("register");
var dropdownContent = document.getElementById("registerDropdownContent");

// Toggle the visibility of the dropdown content when the register link is clicked
registerLink.addEventListener("click", function(event) {
    event.preventDefault(); // Prevents the default action of following the link
    dropdownContent.style.display = (dropdownContent.style.display === "block") ? "none" : "block";
    event.stopPropagation(); // Stops the event from propagating to the parent element
    
    // Update the "active" class of the register link based on the dropdown content visibility
    if (dropdownContent.style.display === "block") {
        registerLink.classList.add("active");
    } else {
        registerLink.classList.remove("active");
    }
});

// Close dropdown when clicking outside the dropdown content
document.addEventListener("click", function(event) {
    if (!dropdownContent.contains(event.target) && event.target !== registerLink) {
        dropdownContent.style.display = "none";
        registerLink.classList.remove("active"); // Remove "active" class when the dropdown is closed
    }
});