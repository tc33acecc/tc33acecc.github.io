// Mobile menu & submenu toggles (accessible)
const menuBtn = document.querySelector('.menu-toggle');
const nav = document.getElementById('nav');
if(menuBtn){
  menuBtn.addEventListener('click', () => {
    const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
    menuBtn.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('open');
  });
}

document.querySelectorAll('.submenu-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const li = btn.closest('.has-children');
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    li.classList.toggle('open');
  });
});
