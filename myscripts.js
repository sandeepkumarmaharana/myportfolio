// Tab Switching Functionality
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (var tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    for (var tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// Sidebar Menu Toggle
var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}

// Logo Click Event (Toggle Effect)
document.getElementById('logo').addEventListener('click', function () {
    this.classList.toggle('clicked');
});




document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission

    // Display the thank-you overlay
    const thankYouOverlay = document.getElementById("thank-you-overlay");
    thankYouOverlay.style.display = "flex";

    // Simulate form submission delay (e.g., AJAX call)
    setTimeout(() => {
        thankYouOverlay.style.display = "none"; // Hide the overlay after 5 seconds
        document.getElementById("contactForm").reset(); // Reset the form
    }, 5000);
});
