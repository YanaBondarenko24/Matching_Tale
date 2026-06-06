const openBtn = document.querySelector('[data-action="open"]');
const closeBtn = document.querySelector('[data-action="close"]');
const burgerMenu = document.querySelector('[data-visible]');
const body = document.querySelector('[data-menu="close"]')
openBtn.addEventListener('click', e => {
  burgerMenu.dataset.visible = 'open';
  body.dataset.menu = 'open';
});

closeBtn.addEventListener('click', e => {
  burgerMenu.dataset.visible = 'close';
  body.dataset.menu = 'close';
});
