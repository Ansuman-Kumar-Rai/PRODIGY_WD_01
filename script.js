window.addEventListener('scroll', function () {
  const navbar = document.getElementById('navbar');
  // Add or remove the 'scrolled' class based on the scroll position
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
