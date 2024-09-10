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

  const btnMob = document.getElementById('btn-mob');

function toggleMenu(event){
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');t
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}
btnMob.addEventListener('click', toggleMenu);
btnMob.addEventListener('touchstart', toggleMenu);

 // Adicionar event listeners para fechar o menu ao clicar em um link
 const navLinks = document.querySelectorAll('#nav a');
 navLinks.forEach((link) => {
     link.addEventListener('click', toggleMenu);
 });

