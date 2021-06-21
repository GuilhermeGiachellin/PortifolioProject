var Hamburguer = document.getElementById('hamburguer');
var Display_menu = document.getElementById('display_menu');
var Chmbtn = document.getElementById('chm_btn');
var Dsport = document.getElementById('ds_port');
var Dsabt = document.getElementById('ds_abt');
var Dscnt = document.getElementById('ds_cnt');
var sec = [];

for (let i = 1; i < 6; i++) {
  sec.push(document.getElementById(`sec_${i}`));
}

Hamburguer.addEventListener('click', (Event) => {
  Event.preventDefault(); 
  Display_menu.style = 'display: flex; animation-name: display_menu_animation; animation-duration: 0.5s;';
  for (let i = 0; i < 5; i++) {
    sec[i].style = 'filter: blur(3px); -webkit-filter: blur(3px);';
  }  
});

Chmbtn.addEventListener('click', (Event) => {
  Event.preventDefault();  
  setTimeout(function () { Display_menu.style = 'display: flex; animation-name: close_menu_animation; animation-duration: 0.5s;' }, 0);
  setTimeout(function () { Display_menu.style = 'display: none;'; }, 500);
  for (let i = 0; i < 5; i++) {
    sec[i].style = '';
  }  
});

console.log("This works1")
Dsport.addEventListener('click', (Event) => {
  Event.preventDefault();
  setTimeout(function () { Display_menu.style = 'display: flex; animation-name: close_menu_animation; animation-duration: 0.5s;' }, 0);
  setTimeout(function () { Display_menu.style = 'display: none;'; }, 500);
  for (let i = 0; i < 5; i++) {
    sec[i].style = '';
  }  
});

console.log("This works2")
Dsabt.addEventListener('click', (Event) => {
  Event.preventDefault();
  setTimeout(function () { Display_menu.style = 'display: flex; animation-name: close_menu_animation; animation-duration: 0.5s;' }, 0);
  setTimeout(function () { Display_menu.style = 'display: none;'; }, 500);
  for (let i = 0; i < 5; i++) {
    sec[i].style = '';
  }
});
  
Dscnt.addEventListener('click', (Event) => {
  Event.preventDefault();
  setTimeout(function () { Display_menu.style = 'display: flex; animation-name: close_menu_animation; animation-duration: 0.5s;' }, 0);
  setTimeout(function () { Display_menu.style = 'display: none;'; }, 500);
  for (let i = 0; i < 5; i++) {
    sec[i].style = '';
  }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
