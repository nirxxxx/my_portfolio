// JavaScript for menu toggle (simplified)
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  // Remove any existing animation classes
  menuToggle.classList.remove('animate__animated', 'animate__fadeIn');
  
  menuToggle.addEventListener('click', function() {
      this.classList.toggle('open');
      navLinks.classList.toggle('active');
  });
  
  // Close menu when clicking on a link
  document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
          menuToggle.classList.remove('open');
          navLinks.classList.remove('active');
      });
  });
  
  // Intersection Observer for animations
  const animateItems = document.querySelectorAll('.animate-item');
  
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
          }
      });
  }, { threshold: 0.1 });
  
  animateItems.forEach(item => observer.observe(item));
});


var typed = new Typed('.multiple-text', {
  strings: ['Grade 12 ICT Student', "Aspiring to become a full-stack developer."],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 10000,
  loop: true
})


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

  

