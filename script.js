// Menu Mobile - Código independente do jQuery
document.addEventListener('DOMContentLoaded', function() {
  const btnMobile = document.getElementById('btn-mob');
  const nav = document.getElementById('nav');
  const menu = document.getElementById('menu');

  function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    nav.classList.toggle('active');
    menu.classList.toggle('active');
  }

  btnMobile.addEventListener('click', toggleMenu);
  btnMobile.addEventListener('touchstart', toggleMenu);

  // Fechar menu ao clicar em um link
  document.querySelectorAll('#menu a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
      menu.classList.remove('active');
    });
  });

  // Fechar menu ao clicar fora
  document.addEventListener('click', (event) => {
    if (!nav.contains(event.target) && !btnMobile.contains(event.target)) {
      nav.classList.remove('active');
      menu.classList.remove('active');
    }
  });
});

// Código do Carrossel e outras funcionalidades jQuery
$(document).ready(function() {
  // Verificar se o jQuery está carregado
  if (typeof jQuery === 'undefined') {
    console.error('jQuery não está carregado!');
    return;
  }

  // Verificar se o Owl Carousel está carregado
  if (typeof $.fn.owlCarousel === 'undefined') {
    console.error('Owl Carousel não está carregado!');
    return;
  }

  // Configuração do Owl Carousel
  $(".custom-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    smartSpeed: 1000,
    responsive: {
      0: { items: 1, nav: false },
      600: { items: 2 },
      1000: { items: 3 }
    },
    navText: [
      '<i class="ion-ios-arrow-back"></i>',
      '<i class="ion-ios-arrow-forward"></i>'
    ]
  });

  // Pausar autoplay no hover
  $(".custom-carousel").hover(
    function() { $(this).trigger("stop.owl.autoplay"); },
    function() { $(this).trigger("play.owl.autoplay"); }
  );

  // Scroll Suave
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});
