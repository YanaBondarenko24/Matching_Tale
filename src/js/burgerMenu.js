const openBtn = document.querySelector('[data-action="open"]');
const closeBtn = document.querySelector('[data-action="close"]');
const burgerMenu = document.querySelector('[data-visible]');
const body = document.querySelector('[data-menu="close"]')
const list = document.querySelector('[data-list]');

list.addEventListener("click", handleClick);
openBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);

function handleClick(e) {
  if (e.target.closest('[data-item]')) {
    closeMenu();
  }
  
}

function openMenu (e){
  burgerMenu.dataset.visible = 'open';
  body.dataset.menu = 'open';
};

function closeMenu(e){
  burgerMenu.dataset.visible = 'close';
  body.dataset.menu = 'close';
};


