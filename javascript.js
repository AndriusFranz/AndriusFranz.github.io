document.addEventListener("DOMContentLoaded", function() {
  // Hamburger menu functionality
  const hamburger = document.getElementById('hamburger');
  const navList = document.querySelector('nav ul');

  // Toggle the navigation menu when hamburger is clicked
  hamburger.addEventListener('click', () => {
    navList.classList.toggle('show');
  });

  // Video player functionality
  const videoElements = document.querySelectorAll('.video');

  // Play or pause videos on click
  videoElements.forEach(video => {
    video.addEventListener('click', function () {
      pauseOtherVideos(this);
      if (this.paused) {
        this.play();
      } else {
        this.pause();
      }
    });
  });

  // Form validation and submission
  const nameError = document.getElementById("name-error");
  const phoneError = document.getElementById("phone-error");
  const emailError = document.getElementById("email-error");
  const errorMessage = document.getElementById("error-message");

  const contactForm = document.getElementById("contactForm");

  // Validate form on submission
  contactForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const comments = document.getElementById("comments").value;

    let hasErrors = false;

    // Check name
    if (name.trim() === "") {
      nameError.style.display = "block";
      hasErrors = true;
    } else {
      nameError.style.display = "none";
    }

    // Check phone
    if (phone.trim() === "" || !/^\d{10}$/.test(phone)) {
      phoneError.style.display = "block";
      hasErrors = true;
    } else {
      phoneError.style.display = "none";
    }

    // Check email
    if (email.trim() === "" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      emailError.style.display = "block";
      hasErrors = true;
    } else {
      emailError.style.display = "none";
    }

    // Check comments
    if (comments.trim() === "") {
      errorMessage.classList.remove("hidden");
      hasErrors = true;
    }

    // If there are errors, prevent form submission
    if (hasErrors) {
      return false;
    }

    // Hide error message and redirect after successful validation
    errorMessage.classList.add("hidden");
    window.location.href = "submitform.html";
  });

  // Hide error messages on input change
  contactForm.addEventListener("input", function() {
    errorMessage.classList.add("hidden");
    nameError.style.display = "none";
    phoneError.style.display = "none";
    emailError.style.display = "none";
  });
});

// Starter Page
document.addEventListener("DOMContentLoaded", function() {
  const readyButton = document.getElementById("readyButton");

  readyButton.addEventListener("click", function() {
    window.location.href = "index.html"; // Redirect to the main page
  });
});
