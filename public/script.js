document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  // const headerLinks = document.querySelectorAll('header a');
  


  document.getElementById('current-year').textContent = new Date().getFullYear();

  menuToggle.classList.remove('animate__animated', 'animate__fadeIn');
  
  menuToggle.addEventListener('click', function() {
      this.classList.toggle('open');
      navLinks.classList.toggle('active');
  });
  
  document.querySelectorAll('header a').forEach(link => {
      link.addEventListener('click', () => {
          menuToggle.classList.remove('open');
          navLinks.classList.remove('active');
      });
  });
  
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
const themeBtn = document.getElementById('theme-btn');

function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  const osPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && osPrefersDark)) {
    document.body.setAttribute('data-theme', 'dark');
    themeBtn.classList.add('active');
  }
}

function toggleTheme() {
  const isDark = document.body.hasAttribute('data-theme');
  
  if (isDark) {
    document.body.removeAttribute('data-theme');
    themeBtn.classList.remove('active');
    localStorage.setItem('theme', 'light');
  } else {
    document.body.setAttribute('data-theme', 'dark');
    themeBtn.classList.add('active');
    localStorage.setItem('theme', 'dark');
  }
}

themeBtn.addEventListener('click', () => {
  try {
    toggleTheme();
  } catch (error) {
    console.error('Theme toggle failed:', error);

    themeBtn.textContent = 'Error changing theme';
    setTimeout(() => {
      themeBtn.textContent = 'Toggle Theme';
    }, 2000);
  }
});

document.addEventListener('DOMContentLoaded', initTheme);

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
  if (!localStorage.getItem('theme')) { 
    if (e.matches) {
      document.body.setAttribute('data-theme', 'dark');
      themeBtn.classList.add('active');
    } else {
      document.body.removeAttribute('data-theme');
      themeBtn.classList.remove('active');
    }
  }
});




  const user = "jhorin.aton073104";
  const domain = "gmail.com";
  document.getElementById("email").innerHTML =
    `<a href="mailto:${user}@${domain}">Email: ${user}@${domain}</a>`;

  const part1 = "+63";
  const part2 = "9916599731";
  const fullPhone = part1 + part2;
  document.getElementById("phone").innerHTML =
    `<a href="tel:${fullPhone}">Contact #: ${part2}</a>`;

