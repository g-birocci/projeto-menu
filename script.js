$(".custom-carousel").owlCarousel({
    autoWidth: true,
    loop: false,
    dots: false
    
  });
  $(document).ready(function () {
    $(".custom-carousel .item").click(function () {
      $(".custom-carousel .item").not($(this)).removeClass("active");
      $(this).toggleClass("active");
    });
  });

  const btnMobile = document.getElementById('btn-mob');
  const nav = document.getElementById('nav');

function toggleMenu(event){
  if (event.type === 'touchstart') event.preventDefault();
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}
btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

// Fechar menu ao clicar em um link
document.querySelectorAll('#menu a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
    btnMobile.setAttribute('aria-expanded', 'false');
    btnMobile.setAttribute('aria-label', 'Abrir Menu');
  });
});

// Fechar menu ao clicar fora
document.addEventListener('click', (event) => {
  if (!nav.contains(event.target) && !btnMobile.contains(event.target)) {
    nav.classList.remove('active');
    btnMobile.setAttribute('aria-expanded', 'false');
    btnMobile.setAttribute('aria-label', 'Abrir Menu');
  }
});

// Configuração do Owl Carousel
$(document).ready(function(){
  $('.custom-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    smartSpeed: 1000,
    responsive:{
      0:{
        items: 1,
        nav: false
      },
      600:{
        items: 2
      },
      1000:{
        items: 3
      }
    },
    navText: [
      '<i class="ion-ios-arrow-back"></i>',
      '<i class="ion-ios-arrow-forward"></i>'
    ]
  });

  // Adicionar classe active ao item atual
  $('.custom-carousel .item').click(function() {
    $('.custom-carousel .item').removeClass('active');
    $(this).addClass('active');
  });

  // Pausar autoplay quando o mouse estiver sobre o carrossel
  $('.custom-carousel').hover(
    function() {
      $(this).trigger('stop.owl.autoplay');
    },
    function() {
      $(this).trigger('play.owl.autoplay');
    }
  );
});

// Função para scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        duration: 500 // duração em milissegundos
      });
    }
  });
});

