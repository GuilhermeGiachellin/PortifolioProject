//Object array with the data stored

const workInfo = [{
    imagePath: './assets/SnapshootPortfolio.png',    
    clsbtn: './assets/Xpop.png',
    title: 'Tonic',
    features: ['CANOPY', 'Back End Dev', '2015'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    lenguages: ['html', 'css', 'javaScript', 'github', 'ruby', 'Bootstraps'],
    detailContent: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent'
}, {
    imagePath: './assets/SnapshootPortfolio2.png',
    title: 'Multi-post History',
    clsbtn: './assets/Xpop.png',
    features: ['CANOPY', 'Back End Dev', '2015'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    lenguages: ['html', 'css', 'javaScript', 'github', 'ruby', 'Bootstraps'],
    detailContent: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent'
}, {
    imagePath: './assets/SnapshootPortfolio3.png',
    title: 'Tonic',
    clsbtn: './assets/Xpop.png',
    features: ['CANOPY', 'Back End Dev', '2015'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    lenguages: ['html', 'css', 'javaScript', 'github', 'ruby', 'Bootstraps'],
    detailContent: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent'
}, {
    imagePath: './assets/SnapshootPortfolio4.png',
    title: 'Multi-post History',
    clsbtn: './assets/Xpop.png',
    features: ['CANOPY', 'Back End Dev', '2015'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    lenguages: ['html', 'css', 'javaScript', 'github', 'ruby', 'Bootstraps'],
    detailContent: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent'
}];
//
const workSec = document.getElementById(`sec_3`);
const mainUl = document.createElement(`ul`);
const displayPopUp = document.getElementById('popUp');
workSec.appendChild(mainUl);

function create(obj) { return document.createElement(obj) }
//function to create page content
function constructor(obj) {
    for (let i = 0; i < obj.length; i += 1) {
        if (obj[i].length === 2) {
            obj[i][0].appendChild(obj[i][1]);
        } else if (obj[i].length === 3) {
            const [a, b, c] = obj[i];
            a.appendChild(b);
            b.className = c;
        } else if (obj[i].length === 4) {
            const [a, b, c, d] = obj[i];
            if (c == null) {
                a.appendChild(b);
                b.innerHTML = d;
            } else {
                a.appendChild(b);
                b.className = c;
                b.innerHTML = d;
            }
        } else if (obj[i].length === 5) {
            const [a, b, c, d, e] = obj[i];
            if (c == null && d == null) {
                a.appendChild(b);
                b.id = e;
            } else if (c == null) {
                a.appendChild(b);
                b.innerHTML = d;
                b.id = e;
            } else if (d == null) {
                obj[i][0].appendChild(b);
                b.className = c;
                b.id = e;
            } else {
                obj[i][0].appendChild(b);
                b.innerHTML = d;
                b.className = c;
                b.id = e;
            }
        }
    }
}
let linksArray = [];
for (let i = 0; i < workInfo.length; i += 1) {
    //create o que eu preciso aqui
    const worksBox = create(`li`);
    const imgWrk = create(`img`);
    const contentDiv = create(`div`);
    const wrkTitle = create(`h1`);
    const featureUl = create(`ul`);
    const featureLi1 = create(`li`);
    const featureLi2 = create(`li`);
    const imgDot1 = create(`img`)
    const featureLi3 = create(`li`);
    const imgDot2 = create(`img`)
    const infoText = create(`p`);
    const languagesUl = create(`ul`);
    const languagesLi1 = create(`li`);
    const languagesLi2 = create(`li`);
    const languagesLi3 = create(`li`);
    const btnH2 = create(`h2`);
    const btnA = create(`a`);

    linksArray.push([mainUl, worksBox]);
    linksArray.push([worksBox, imgWrk, 'desktop_img']);
    linksArray.push([worksBox, contentDiv]);
    linksArray.push([contentDiv, wrkTitle, 'worksh1', workInfo[i].title]);
    linksArray.push([contentDiv, featureUl]);
    linksArray.push([featureUl, featureLi1, null, workInfo[i].features[0]]);
    linksArray.push([featureLi2, imgDot1]);
    linksArray.push([featureUl, featureLi2, 'qualifications', workInfo[i].features[1]]);
    linksArray.push([featureLi3, imgDot1]);
    linksArray.push([featureUl, featureLi3, 'qualifications', workInfo[i].features[2]]);
    linksArray.push([contentDiv, infoText, 'p', workInfo[i].description]);
    linksArray.push([contentDiv, languagesUl, 'languages']);
    linksArray.push([languagesUl, languagesLi1, null, workInfo[i].lenguages[0]]);
    linksArray.push([languagesUl, languagesLi2, null, workInfo[i].lenguages[1]]);
    linksArray.push([languagesUl, languagesLi3, null, workInfo[i].lenguages[2]]);
    linksArray.push([contentDiv, btnH2]);
    linksArray.push([btnH2, btnA, 'works_btn', 'See Project']);
    imgWrk.src = workInfo[i].imagePath;
    imgWrk.alt = 'preview work';    
    if (i % 2 === 0) {
        worksBox.className = 'works';
    } else {
        worksBox.className = 'big_works';
    }

    btnA.addEventListener('click', (Event) => {
        Event.preventDefault();
        displayPopUp.style = 'display: flex;';
        const popUpdiv = create(`div`);        
        const popUpdiv2 = create(`div`);
        const popUpdiv3 = create(`div`);
        const popUpdiv4 = create(`div`);
        const popUpdiv5 = create(`div`);
        const clsBtn = create(`img`);
        const wrkTitle = create(`h1`);
        const imgWrk = create(`img`);        
        const featureUl = create(`ul`);
        const featureLi1 = create(`li`);
        const featureLi2 = create(`li`);
        const featureLi3 = create(`li`);        
        const infoText = create(`p`);
        const languagesUl = create(`ul`);
        const languagesLi1 = create(`li`);
        const languagesLi2 = create(`li`);
        const languagesLi3 = create(`li`);
        const btnDiv = create(`div`);       
        const frsbtnH2 = create(`h2`);
        const frsbtnA = create(`a`);
        const frsbtnImh = create(`img`);
        const secbtnH2 = create(`h2`);
        const secbtnA = create(`a`);
        const secbtnImh = create(`img`);
        const popUpArray = []
        popUpArray.push([displayPopUp, popUpdiv, 'popup'])
        popUpArray.push([popUpdiv, wrkTitle, 'worksh1', workInfo[i].title]);
        popUpArray.push([popUpdiv, clsBtn, 'clsbtn']);
        popUpArray.push([popUpdiv, featureUl]);
        popUpArray.push([featureUl, featureLi1, null, workInfo[i].features[0]]);
        popUpArray.push([featureUl, featureLi2, 'qualifications', workInfo[i].features[1]]);
        popUpArray.push([featureUl, featureLi3, 'qualifications', workInfo[i].features[2]]);
        popUpArray.push([popUpdiv, popUpdiv4, 'img_div']);
        popUpArray.push([popUpdiv4, imgWrk, 'desktop_img'])
        popUpArray.push([popUpdiv, popUpdiv5, 'popUpcontent']);
        popUpArray.push([popUpdiv5, popUpdiv2, 'p_div']);
        popUpArray.push([popUpdiv5, popUpdiv3, 'languages_div']);
        popUpArray.push([popUpdiv2, infoText, null, workInfo[i].detailContent]);
        popUpArray.push([popUpdiv3, languagesUl, 'languages']);
        popUpArray.push([languagesUl, languagesLi1, null, workInfo[i].lenguages[0]]);
        popUpArray.push([languagesUl, languagesLi2, null, workInfo[i].lenguages[1]]);
        popUpArray.push([languagesUl, languagesLi3, null, workInfo[i].lenguages[2]]);        
        popUpArray.push([popUpdiv3, btnDiv, 'btn_div']);
        popUpArray.push([btnDiv, frsbtnH2]);
        popUpArray.push([frsbtnH2, frsbtnA, 'works_btn', 'See live']);
        popUpArray.push([frsbtnA, frsbtnImh, 'img_btn']);
        popUpArray.push([btnDiv, secbtnH2]);
        popUpArray.push([secbtnH2, secbtnA, 'works_btn', 'See source']);
        popUpArray.push([secbtnA, secbtnImh, 'img_btn']);
        constructor(popUpArray)
        imgWrk.src = workInfo[i].imagePath;
        imgWrk.alt = 'preview work';        
        clsBtn.src = workInfo[i].clsbtn;
        frsbtnImh.src = './assets/Frame.png';
        secbtnImh.src = './assets/Iconpopup.png';
        
        //close popup event
        clsBtn.addEventListener('click', (Event) => {            
            Event.preventDefault();
            popUpdiv.remove();
            popUpArray = [];
        });        
    });
}
constructor(linksArray);
