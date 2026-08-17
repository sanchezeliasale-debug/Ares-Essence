document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');

  if (!toggle || !nav) return;

  toggle.addEventListener('click', function () {
    var isOpen = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
});

// Carga los videos de fondo recién cuando están por entrar en pantalla,
// para no pesar la carga inicial de la página.
document.addEventListener('DOMContentLoaded', function () {
  var videos = document.querySelectorAll('.brand-video');
  if (!videos.length) return;

  if (!('IntersectionObserver' in window)) {
    videos.forEach(function (video) {
      video.src = video.getAttribute('data-src');
      video.load();
    });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var video = entry.target;
      video.src = video.getAttribute('data-src');
      video.load();
      video.play().catch(function () {});
      observer.unobserve(video);
    });
  }, { rootMargin: '200px' });

  videos.forEach(function (video) {
    observer.observe(video);
  });
});
