const Hamburguer = document.getElementById('hamburguer');
const Display_menu = document.getElementById('display_menu');
const Chm_btn = document.getElementById('chm_btn');
const Ds_port = document.getElementById('ds_port');
const Ds_abt = document.getElementById('ds_abt');
const Ds_cnt = document.getElementById('ds_cnt');
const sec = [];

 for(let i = 1; i <= 5; i++) {
   sec.push(document.getElementById(`sec_${i}`))
}

hamburguer.addEventListener('click', (Event) => {
  display_menu.style = 'display: flex; animation-name: display_menu_animation; animation-duration: 0.5s;';
    for(let i = 1; i < 5; i++){
      sec[i].style = 'filter: blur(3px); -webkit-filter: blur(3px);'
    }
});

Chm_btn.addEventListener('click', (Event) => {
    Event.preventDefault();  
    setTimeout(function(){display_menu.style = 'display: flex; animation-name: close_menu_animation; animation-duration: 0.5s;'}, 0)
    setTimeout(function(){display_menu.style = 'display: none;'}, 500)
    for(let i = 1; i < 5; i++){
        sec[i].style = ''
    }
});

Ds_port.addEventListener('click', (Event) => {
    Event.preventDefault();
    setTimeout(function(){display_menu.style = 'display: flex; animation-name: close_menu_animation; animation-duration: 0.5s;'}, 0)
    setTimeout(function(){display_menu.style = 'display: none;'}, 500)
    for(let i = 1; i < 5; i++){
        sec[i].style = ''
    }
});

Ds_abt.addEventListener('click', (Event) => {
    Event.preventDefault();
    setTimeout(function(){display_menu.style = 'display: flex; animation-name: close_menu_animation; animation-duration: 0.5s;'}, 0)
    setTimeout(function(){display_menu.style = 'display: none;'}, 500)
    for(let i = 1; i < 5; i++){
        sec[i].style = ''
    }
});

Ds_cnt.addEventListener('click', (Event) => {
    Event.preventDefault();
    setTimeout(function(){display_menu.style = 'display: flex; animation-name: close_menu_animation; animation-duration: 0.5s;'}, 0)
    setTimeout(function(){display_menu.style = 'display: none;'}, 500)
    for(let i = 1; i < 5; i++){
        sec[i].style = ''
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
