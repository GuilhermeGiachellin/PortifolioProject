let hamburguer = document.getElementById("hamburguer");
let display_menu = document.getElementById("display_menu");
let chm_btn = document.getElementById("chm_btn");
let ds_port = document.getElementById("ds_port");
let ds_abt = document.getElementById("ds_abt");
let ds_cnt = document.getElementById("ds_cnt");
let sec = [];

for(let i = 1;i <= 5; i++){
    sec.push(document.getElementById(`sec_${i}`))
}

hamburguer.addEventListener('click', (Event) =>{
    display_menu.style = 'display: flex; animation-name: display_menu_animation; animation-duration: 0.5s;' 
    for(let i = 1;i < 5; i++){
        sec[i].style = 'filter: blur(3px); -webkit-filter: blur(3px);'
    }
});

chm_btn.addEventListener('click', (Event) => {
    Event.preventDefault();  
    setTimeout(function(){display_menu.style = 'display: flex; animation-name: close_menu_animation; animation-duration: 0.5s;'}, 0)
    setTimeout(function(){display_menu.style = 'display: none;'}, 500)
    for(let i = 1;i < 5; i++){
        sec[i].style = ''
    }
});

ds_port.addEventListener('click', (Event) => {
    Event.preventDefault();
    setTimeout(function(){display_menu.style = 'display: flex; animation-name: close_menu_animation; animation-duration: 0.5s;'}, 0)
    setTimeout(function(){display_menu.style = 'display: none;'}, 500)
    for(let i = 1;i < 5; i++){
        sec[i].style = ''
    }
});

ds_abt.addEventListener('click', (Event) => {
    Event.preventDefault();
    setTimeout(function(){display_menu.style = 'display: flex; animation-name: close_menu_animation; animation-duration: 0.5s;'}, 0)
    setTimeout(function(){display_menu.style = 'display: none;'}, 500)
    for(let i = 1;i < 5; i++){
        sec[i].style = ''
    }
});

ds_cnt.addEventListener('click', (Event) => {
    Event.preventDefault();
    setTimeout(function(){display_menu.style = 'display: flex; animation-name: close_menu_animation; animation-duration: 0.5s;'}, 0)
    setTimeout(function(){display_menu.style = 'display: none;'}, 500)
    for(let i = 1;i < 5; i++){
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
