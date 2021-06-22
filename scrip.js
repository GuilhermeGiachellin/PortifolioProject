const Hamburguer = document.getElementById('hamburguer');
const Displaymenu = document.getElementById('display_menu');
const Chmbtn = document.getElementById('chm_btn');
const Dsport = document.getElementById('ds_port');
const Dsabt = document.getElementById('ds_abt');
const Dscnt = document.getElementById('ds_cnt');
const sec = [];

for (let i = 1; i < 6; i += 1) {
  sec.push(document.getElementById(`sec_${i}`));
}

Hamburguer.addEventListener('click', (Event) => {
  Event.preventDefault();
  Displaymenu.style = 'display: flex; animation-name: display_menu_animation; animation-duration: 0.5s;';
  for (let i = 0; i < 5; i += 1) {
    sec[i].style = 'filter: blur(3px); -webkit-filter: blur(3px);';
  }
});

Chmbtn.addEventListener('click', (Event) => {
  Event.preventDefault();
  setTimeout(() => { Displaymenu.style = 'display: flex; animation-name: close_menu_animation; animation-duration: 0.5s;' }, 0);
  setTimeout(() => { Displaymenu.style = 'display: none;'; }, 500);
  for (let i = 0; i < 5; i += 1) {
    sec[i].style = '';
  }
});

Dsport.addEventListener('click', (Event) => {
  Event.preventDefault();
  setTimeout(() => { Displaymenu.style = 'display: flex; animation-name: close_menu_animation; animation-duration: 0.5s;' }, 0);
  setTimeout(() => { Displaymenu.style = 'display: none;'; }, 500);
  for (let i = 0; i < 5; i += 1) {
    sec[i].style = '';
  }
});

Dsabt.addEventListener('click', (Event) => {
  Event.preventDefault();
  setTimeout(()=> { Displaymenu.style = 'display: flex; animation-name: close_menu_animation; animation-duration: 0.5s;' }, 0);
  setTimeout(()=> { Displaymenu.style = 'display: none;'; }, 500);
  for (let i = 0; i < 5; i += 1) {
    sec[i].style = '';
  }
});

Dscnt.addEventListener('click', (Event) => {
  Event.preventDefault();
  setTimeout(() => { Displaymenu.style = 'display: flex; animation-name: close_menu_animation; animation-duration: 0.5s;' }, 0);
  setTimeout(() => { Displaymenu.style = 'display: none;'; }, 500);
  for (let i = 0; i < 5; i += 1) {
    sec[i].style = '';
  }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth;'
    });
  });
});
