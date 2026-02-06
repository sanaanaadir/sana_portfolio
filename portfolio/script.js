const sections = document.querySelectorAll('.slide-up');

window.addEventListener('scroll', () => {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight / 1.2;

    if (sectionTop < triggerPoint) {
      section.classList.add('active');
    }
  });
});
