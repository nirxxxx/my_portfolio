const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links a');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('open');
    navLinks.classList.toggle('active');
});

links.forEach(link => {
    link.addEventListener('click', () => {
        // Close menu after clicking a nav link
        menuToggle.classList.remove('open');
        navLinks.classList.remove('active');
        // No preventDefault, so the browser can scroll to the anchor
    });
});


var typed = new Typed('.multiple-text', {
  strings: ['Grade 12 ICT Student', "Aspiring to become a full-stack developer."],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 10000,
  loop: true
})

document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".animate-item");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );
  
    items.forEach((item) => observer.observe(item));
  });

//   // script.js
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//   anchor.addEventListener("click", function (e) {
//     e.preventDefault();
//     const target = document.querySelector(this.getAttribute("href"));
//     if (target) {
//       target.scrollIntoView({ behavior: "smooth" });

//       // Remove the hash from the URL after scroll
//       history.replaceState(null, null, " ");
//     }
//   });
// });

  

