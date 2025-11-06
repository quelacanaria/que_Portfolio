const links1 = document.querySelectorAll('.footerNavLink');
const links = document.querySelectorAll('.navLink');
const sections = document.querySelectorAll('.section');
const main = document.querySelector('.main'); // your scrollable div

let currentSection = 'Home';

// Listen to scroll events on the container, not the window
main.addEventListener('scroll', () => {
  sections.forEach(section => {
    // use main.scrollTop, not window.scrollY
    if (main.scrollTop >= section.offsetTop - 600) {
      currentSection = section.id;
    }
  });
  

  // Remove 'active' from all links
  links1.forEach(link => link.classList.remove('active'));
  links.forEach(link => link.classList.remove('active'));

  // Add 'active' to the current section’s link
  links.forEach(link => {
    if (link.href.includes(currentSection)) {
      link.classList.add('active');
    }
  });

  links1.forEach(link => {
    if (link.href.includes(currentSection)) {
      link.classList.add('active');
    }
  });



});
