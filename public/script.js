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

const themeBtn = document.getElementById('theme-btn');
const circle = document.querySelector('.circle');
const body = document.querySelector('body');

let themeArr = getTheme();
getTheme()
console.log(themeArr)
saveTheme()
getSavedTheme()

let theme = {
    DarkMode: 'Light'
}
themeArr = theme;

themeBtn.addEventListener('click', () => {
    circle.classList.toggle('active')
    if (body.classList.contains('active')) {
        body.classList.remove('active');
        themeArr.DarkMode = 'Light'; 
    } else {
        body.classList.add('active');
        themeArr.DarkMode = 'Dark';
        console.log('clicked') 
    } 
    saveTheme()
    console.log(themeArr.DarkMode)
}) 


function getSavedTheme() {
    if (themeArr.DarkMode == 'Dark') {
        body.classList.add('active');
        circle.classList.add('active')
    } else {
        body.classList.remove('active');
        circle.classList.remove('active')
    }
}

function saveTheme() {
    localStorage.setItem('Theme', JSON.stringify(themeArr))
}
function getTheme() {
    return JSON.parse(localStorage.getItem('Theme')) || []
    // console.log(printTheme)
}



  const user = "jhorin.aton073104";
  const domain = "gmail.com";
  document.getElementById("email").innerHTML =
    `<a href="mailto:${user}@${domain}">Email: ${user}@${domain}</a>`;

  const part1 = "+63";
  const part2 = "9916599731";
  const fullPhone = part1 + part2;
  document.getElementById("phone").innerHTML =
    `<a href="tel:${fullPhone}">Contact #: ${part2}</a>`;

