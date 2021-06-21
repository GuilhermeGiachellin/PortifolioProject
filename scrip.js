const Hamburguer = document.getElementById('hamburguer');
const DisplayMenu = document.getElementById('display_menu');
const ChmBtn = document.getElementById('chm_btn');
const DsPort = document.getElementById('ds_port');
const DsAbt = document.getElementById('ds_abt');
const DsCnt = document.getElementById('ds_cnt');
const sec = [];

for (let i = 1; i <= 5; i + 1) {
  sec.push(document.getElementById(`sec_${i}`));
}

Hamburguer.addEventListener('click', (Event) => {
  Event.preventDefault (); 
  DisplayMenu.style = 'display: flex; animation-name: display_menu_animation; animation-duration: 0.5s;';
    for (let i = 0; i < 5; i + 1) {
      sec[i].style = 'filter: blur(3px); -webkit-filter: blur(3px);'
    }
});

ChmBtn.addEventListener('click', (Event) => {
  Event.preventDefault ();  
    setTimeout(function(){DisplayMenu.style = 'display: flex; animation-name: close_menu_animation; animation-duration: 0.5s;' } , 0);
    setTimeout(function(){DisplayMenu.style = 'display: none;'}, 500);
    for (let i = 0; i < 5; i + 1) {
        sec[i].style = ''
    }
});

DsPort.addEventListener('click', (Event) => {
    Event.preventDefault ();
    setTimeout(function(){DisplayMenu.style = 'display: flex; animation-name: close_menu_animation; animation-duration: 0.5s;'}, 0);
    setTimeout(function(){DisplayMenu.style = 'display: none;'}, 500);
    for (let i = 0; i < 5; i + 1) {
        sec[i].style = ''
    }
});

DsAbt.addEventListener('click', (Event) => {
    Event.preventDefault ();
    setTimeout(function(){DisplayMenu.style = 'display: flex; animation-name: close_menu_animation; animation-duration: 0.5s;'}, 0);
    setTimeout(function(){DisplayMenu.style = 'display: none;'}, 500);
    for (let i = 0; i < 5; i + 1) {
        sec[i].style = ''
    }
});

DsCnt.addEventListener('click', (Event) => {
    Event.preventDefault ();
    setTimeout(function(){DisplayMenu.style = 'display: flex; animation-name: close_menu_animation; animation-duration: 0.5s;'}, 0);
    setTimeout(function(){DisplayMenu.style = 'display: none;'}, 500);
    for (let i = 0; i < 5; i + 1) {
        sec[i].style = ''
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault ();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
