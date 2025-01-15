document.addEventListener("DOMContentLoaded", function () {
  // Smooth scroll effect for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70, // Adjust for navbar height
          behavior: "smooth",
        });
      }
    });
  });

  // Handling form submission
  const form = document.querySelector("form");
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from submitting

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Simple validation
    if (!name || !email || !message) {
      alert("Semua kolom harus diisi!");
    } else {
      // Simulate form submission or handle it here
      alert(`Terima kasih, ${name}! Pesan Anda telah terkirim.`);
      form.reset(); // Reset the form after submission
    }
  });

  // Optional navbar item hover effect
  const navbarLinks = document.querySelectorAll(".nav-link");
  navbarLinks.forEach((link) => {
    link.addEventListener("mouseenter", function () {
      link.style.color = "#80cbc4"; // Change color on hover
    });
    link.addEventListener("mouseleave", function () {
      link.style.color = ""; // Revert to original color
    });
  });
});
