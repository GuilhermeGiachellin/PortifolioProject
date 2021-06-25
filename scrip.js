const Hamburguer = document.getElementById('hamburguer');
const Display = document.getElementById('display_menu');
const Chmbtn = document.getElementById('chm_btn');
const Dsport = document.getElementById('ds_port');
const Dsabt = document.getElementById('ds_abt');
const Dscnt = document.getElementById('ds_cnt');
const sec = [];
const emailInput = document.getElementById('email_input');
const announce = document.getElementById('form_div');
const emailValImg = document.getElementById('email_val_img');

function formValidate() {
  const strVal = emailInput.value;
  if (strVal.toLowerCase() !== strVal) {
    announce.style = 'display: inline;';
    return false;
  }
  return true;
}
if (emailValImg < 0) {
  formValidate();
}

emailInput.addEventListener('input', (event) => {
  event.preventDefault();
  const strVal2 = emailInput.value;
  announce.style = '';
  if (strVal2.toLowerCase() !== strVal2) {
    emailInput.style = 'background-image: url(./assets/false.png)';
  } else {
    emailInput.style = 'background-image: url(./assets/true.png)';
  }
});

for (let i = 1; i < 6; i += 1) {
  sec.push(document.getElementById(`sec_${i}`));
}

Hamburguer.addEventListener('click', (Event) => {
  Event.preventDefault();
  Display.style = 'display: flex; animation-name: display_menu_animation; animation-duration: 0.5s;';
  for (let i = 0; i < 5; i += 1) {
    sec[i].style = 'filter: blur(3px); -webkit-filter: blur(3px);';
  }
});

Chmbtn.addEventListener('click', (Event) => {
  Event.preventDefault();
  setTimeout(() => { Display.style = 'display: flex; animation-name: close_menu_animation; animation-duration: 0.5s;'; }, 0);
  setTimeout(() => { Display.style = 'display: none;'; }, 500);
  for (let i = 0; i < 5; i += 1) {
    sec[i].style = '';
  }
});

Dsport.addEventListener('click', (Event) => {
  Event.preventDefault();
  setTimeout(() => { Display.style = 'display: flex; animation-name: close_menu_animation; animation-duration: 0.5s;'; }, 0);
  setTimeout(() => { Display.style = 'display: none;'; }, 500);
  for (let i = 0; i < 5; i += 1) {
    sec[i].style = '';
  }
});

Dsabt.addEventListener('click', (Event) => {
  Event.preventDefault();
  setTimeout(() => { Display.style = 'display: flex; animation-name: close_menu_animation; animation-duration: 0.5s;'; }, 0);
  setTimeout(() => { Display.style = 'display: none;'; }, 500);
  for (let i = 0; i < 5; i += 1) {
    sec[i].style = '';
  }
});

Dscnt.addEventListener('click', (Event) => {
  Event.preventDefault();
  setTimeout(() => { Display.style = 'display: flex; animation-name: close_menu_animation; animation-duration: 0.5s;'; }, 0);
  setTimeout(() => { Display.style = 'display: none;'; }, 500);
  for (let i = 0; i < 5; i += 1) {
    sec[i].style = '';
  }
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector(e.currentTarget.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});
