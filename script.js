document.addEventListener('DOMContentLoaded', function() {
    const swipers = document.querySelectorAll('.swiper-container');
    swipers.forEach(container => {
      new Swiper(container, {
        loop: true,
        autoplay: {
          delay: 2000,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
    });
    const toggle = document.getElementById('darkToggle');
    toggle.addEventListener('click', () => {
      document.body.classList.toggle('dark');
    });
});
