const menu = document.querySelector('#menu');
const menuButton = document.querySelector('#menuButton');
const picker = document.querySelector('#contactPicker');
const lightbox = document.querySelector('#lightbox');
const lightboxImage = document.querySelector('#lightboxImage');

menuButton.addEventListener('click', () => {
  menu.classList.toggle('open');
  menuButton.textContent = menu.classList.contains('open') ? '×' : '☰';
});
document.querySelectorAll('#menu a').forEach(link => link.addEventListener('click', () => menu.classList.remove('open')));
document.querySelectorAll('.js-contact').forEach(button => button.addEventListener('click', () => picker.classList.add('open')));
document.querySelector('#closeContact').addEventListener('click', () => picker.classList.remove('open'));
picker.addEventListener('click', event => { if (event.target === picker) picker.classList.remove('open'); });

document.querySelectorAll('.gallery-item img').forEach(image => image.addEventListener('click', () => {
  lightboxImage.src = image.src;
  lightboxImage.alt = image.alt;
  lightbox.style.display = 'grid';
}));
document.querySelector('#closeLightbox').addEventListener('click', () => lightbox.style.display = 'none');
lightbox.addEventListener('click', event => { if (event.target === lightbox) lightbox.style.display = 'none'; });
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') { picker.classList.remove('open'); lightbox.style.display = 'none'; }
});
document.querySelector('#year').textContent = new Date().getFullYear();
