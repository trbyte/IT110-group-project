// script.js
document.addEventListener('DOMContentLoaded', function() {
  // Fade-in animation on scroll
  const fadeElements = document.querySelectorAll('.fade-in');
  
  const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  
  fadeElements.forEach(el => {
    fadeInObserver.observe(el);
  });
  
  // Navigation indicator
  const navLinks = document.querySelectorAll('.nav-link');
  const navIndicator = document.querySelector('.nav-indicator');
  
  function updateNavIndicator() {
    const sections = document.querySelectorAll('section');
    let currentSection = '';
    const scrollContainer = document.querySelector('.horizontal-scroll');
    const containerScrollX = scrollContainer.scrollLeft;
    
    sections.forEach(section => {
      const sectionTop = section.offsetLeft;
      const sectionWidth = section.offsetWidth;
      if (containerScrollX >= sectionTop - (sectionWidth / 3)) {
      currentSection = section.getAttribute('id');
    }
  });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
        
        // Update indicator position
        const linkRect = link.getBoundingClientRect();
        const navRect = link.parentElement.getBoundingClientRect();
        navIndicator.style.width = `${linkRect.width}px`;
        navIndicator.style.left = `${linkRect.left - navRect.left}px`;
      }
    });
  }
  
  updateNavIndicator();
  document.querySelector('.horizontal-scroll').addEventListener('scroll', updateNavIndicator);
  
  // Smooth scrolling for navigation links
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        const scrollContainer = document.querySelector('.horizontal-scroll');
        const targetLeft = targetSection.offsetLeft;
        
        scrollContainer.scrollTo({
          left: targetLeft,
          behavior: 'smooth'
        });
      }
    });
  });
});