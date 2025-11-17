// projects-carousel.js
(function() {
  'use strict';

  function initProjectItems() {
    console.log('Initializing project items...');
    
    /* ----- Read More Logic ----- */
    const descriptions = document.querySelectorAll(".project-description");
    console.log('Found descriptions:', descriptions.length);
    
    descriptions.forEach(desc => {
      const fullTextEl = desc.querySelector(".desc-full");
      const shortTextEl = desc.querySelector(".desc-short");
      
      if (!fullTextEl || !shortTextEl) return;
      
      const fullText = fullTextEl.innerText || fullTextEl.textContent || '';

      // Find first and second periods
      const firstDot = fullText.indexOf(".");
      let secondDot = -1;
      if (firstDot !== -1) secondDot = fullText.indexOf(".", firstDot + 1);

      let shortText = fullText;
      if (secondDot !== -1) {
        shortText = fullText.substring(0, secondDot + 1);
      } else if (firstDot !== -1) {
        shortText = fullText.substring(0, firstDot + 1);
      }

      shortTextEl.innerText = shortText;
      shortTextEl.style.display = "inline";
    });

    /* ----- Carousel Init ----- */
    const carousels = document.querySelectorAll(".project-carousel");
    console.log('Found carousels:', carousels.length);
    
    carousels.forEach(carousel => {
      const slides = carousel.querySelectorAll(".carousel-slide");
      const indicators = carousel.querySelectorAll(".carousel-indicator");

      // Ensure first slide active
      slides.forEach((s, i) => s.classList.toggle("active", i === 0));
      indicators.forEach((ind, i) => ind.classList.toggle("active", i === 0));
    });
  }

  /* ----- Toggle Read More ----- */
  window.toggleProjectDescription = function(button) {
    console.log('Toggle description clicked');
    const container = button.closest(".project-description");
    if (!container) {
      console.log('Container not found');
      return;
    }
    
    const shortText = container.querySelector(".desc-short");
    const fullText = container.querySelector(".desc-full");

    if (!shortText || !fullText) {
      console.log('Text elements not found');
      return;
    }

    const hidden = fullText.style.display === "none" || fullText.style.display === "";

    if (hidden) {
      fullText.style.display = "block";
      shortText.style.display = "none";
      button.textContent = "Read less";
    } else {
      fullText.style.display = "none";
      shortText.style.display = "inline";
      button.textContent = "Read more";
    }
  };

  /* ----- Carousel Navigation ----- */
  window.changeProjectSlide = function(button, direction) {
    console.log('Changing slide:', direction);
    const carousel = button.closest('.project-carousel');
    if (!carousel) {
      console.log('Carousel not found');
      return;
    }
    
    const slides = carousel.querySelectorAll('.carousel-slide');
    const indicators = carousel.querySelectorAll('.carousel-indicator');

    if (!slides.length) {
      console.log('No slides found');
      return;
    }

    let currentIndex = Array.from(slides).findIndex(slide => slide.classList.contains('active'));
    if (currentIndex === -1) currentIndex = 0;
    
    let newIndex = (currentIndex + direction + slides.length) % slides.length;

    slides[currentIndex].classList.remove('active');
    slides[newIndex].classList.add('active');

    if (indicators[currentIndex]) indicators[currentIndex].classList.remove('active');
    if (indicators[newIndex]) indicators[newIndex].classList.add('active');
  };

  window.goToProjectSlide = function(indicator) {
    console.log('Go to slide clicked');
    const index = parseInt(indicator.getAttribute('data-index'));
    const carousel = indicator.closest('.project-carousel');
    if (!carousel) {
      console.log('Carousel not found');
      return;
    }
    
    const slides = carousel.querySelectorAll('.carousel-slide');
    const indicators = carousel.querySelectorAll('.carousel-indicator');

    slides.forEach(s => s.classList.remove('active'));
    indicators.forEach(i => i.classList.remove('active'));

    if (slides[index]) slides[index].classList.add('active');
    if (indicators[index]) indicators[index].classList.add('active');
  };

  // Run on different possible load events
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initProjectItems);
  } else {
    initProjectItems();
  }

  // Also run on window load as fallback
  window.addEventListener('load', initProjectItems);

})();