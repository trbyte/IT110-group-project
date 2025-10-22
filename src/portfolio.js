document.addEventListener('DOMContentLoaded', function() {
  // Fade-in animation on scroll
  // Select elements with fade-in class
  const fadeElements = document.querySelectorAll('.fade-in');
  
  // Intersection Observer for fade-in effect
  const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // If element is in viewport, add 'visible' class
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  
  // Observe each fade-in element
  fadeElements.forEach(el => fadeInObserver.observe(el));
  
  // Navigation
  const navLinks = document.querySelectorAll('.nav-link');
  const navIndicator = document.querySelector('.nav-indicator');
  const scrollContainer = document.querySelector('.horizontal-scroll');
  
  // Check if scroll container exists
  if (!scrollContainer) {
    console.error('Scroll container not found');
    return;
  }
  
  // Update navigation indicator position and active link
  function updateNavIndicator() {
    const sections = document.querySelectorAll('section');
    let currentSection = '';
    const containerScrollX = scrollContainer.scrollLeft;
    const isMobile = window.innerWidth <= 768; // mobile breakpoint

    sections.forEach(section => {
      const sectionRect = section.getBoundingClientRect();

      if (isMobile) {
        // Mobile: vertical scroll to determine visible section
        if (sectionRect.top <= window.innerHeight / 2 && sectionRect.bottom >= window.innerHeight / 2) {
          currentSection = section.getAttribute('id');
        }
      } else {
        // Desktop: horizontal scroll
        if (containerScrollX >= section.offsetLeft - (section.offsetWidth / 3)) {
          currentSection = section.getAttribute('id');
        }
      }
    });

    // Update active link and indicator position
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');

        // Move and resize indicator
        if (!isMobile) {
          const linkRect = link.getBoundingClientRect();
          const navRect = link.parentElement.getBoundingClientRect();
          navIndicator.style.width = `${linkRect.width}px`;
          navIndicator.style.left = `${linkRect.left - navRect.left}px`;
        } else {
          // Hide indicator on mobile
          navIndicator.style.width = `0px`;
        }
      }
    });
  }
  
  // Run on load
  updateNavIndicator();
  
  // Run when user scrolls
  scrollContainer.addEventListener('scroll', updateNavIndicator);
  window.addEventListener('resize', updateNavIndicator); // recalc on resize

  // Smooth scrolling for navigation links
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent normal jump
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      const isMobile = window.innerWidth <= 768;

      if (targetSection) {
        if (isMobile) {
          // Scroll vertically on mobile
          targetSection.scrollIntoView({ behavior: 'smooth' });
        } else {
          // Scroll horizontally on desktop
          const targetLeft = targetSection.offsetLeft;
          scrollContainer.scrollTo({
            left: targetLeft,
            behavior: 'smooth'
          });
        }
        // Update URL without reloading
        window.history.pushState(null, null, targetId);
      }
    });
  });
});
