const gameIcon = document.querySelectorAll('.game-icon');
const gameIcons = document.querySelector('.icons')

const iconsIdCreator = () => {
    let id = crypto.randomUUID();
    return id;
}

function managerCreator(){

    const iconsArray = [
        {id: '', name: 'Gear Head', img: 'images/gearHeadpng.png', clicked: ''},
        {id: '', name: 'Squanchy', img: 'images/squanchy.a39194b73a966ab61d06.png', clicked: '' },
        {id: '', name: 'Snuffles', img: 'images/snuffles.120ea6e983a68aef7be5.png', clicked: ''},
        {id: '', name: 'Krombopulos Michael', img: 'images/michael.8c9961c6a42e6577b366.png', clicked: ''},
        {id: '', name: 'Coach Feratu', img: 'images/vampire.4c634082ab10e93076ac.png', clicked: ''},
        {id: '', name: 'Bird Person', img: 'images/birdPerson.bbeb4909b0b4a608592c.png', clicked: ''},
        {id: '', name: 'Prince Nebulon', img: 'images/princeNebulon.492189f9013fb3a2c907.png', clicked: ''},
        {id: '', name: 'Scarry Terry', img: 'images/Terry.0005c5c221a69a614d0a.png', clicked: ''},
        {id: '', name: 'Doofus Rick', img: 'images/J19ick.13cdd5d095ba92ee1ce4.png', clicked: ''},
        {id: '', name: 'President Curtis', img: 'images/president.d8927b18ea37085c4685.png', clicked: ''},
        {id: '', name: 'Abrodolph Lincoler', img: 'images/abraham.5bab582d158024aecc0a.png', clicked: ''},
        {id: '', name: 'Rick Sanchez', img: 'images/rickkk.c06ec7790deb77a3746b.png', clicked: ''}
    ];
   
    const pushIdInArray = () => {
        iconsArray.forEach((el) => {
           if(el.id == '') { el.id = iconsIdCreator()};
        })
    }

    const cardCreator = () => {
       for(let i = 0; i < iconsArray.length; i++){
        pushGameIconOnScreen(iconsArray[i]);
       }
    }
    const getImg = (img) => {};
    
    const getClickedIconId = (clickedIconId) => {return clickedIconId}

    const pushGameIconOnScreen = (icon) =>{
        let html = 
        `
        <div class="game-icon" id="${icon.id}">
            <img src="${icon.img}">
            <h1>${icon.name}</h1>
        </div>
        `;
        gameIcons.insertAdjacentHTML('beforeend', html);
    }
    return { cardCreator, pushGameIconOnScreen, getImg, getClickedIconId, pushIdInArray }
}
const manager = managerCreator();
manager.cardCreator();
manager.pushIdInArray();
gameIcons.addEventListener('click', (e) => {
    let tragetIcon = e.target.id;
    manager.getClickedIconId(tragetIcon);
})

//Napravi array objekata svaki objekat neka ima sljedeca polja id, name, img razmisli treba li jos nesto (treba mi njezino stanje da znam je li bila kliknuta ili nije)
//Napravi kreatorske funkcije koje ti trebaju
//Treba ce mi cardCreator i managerCreator
//Za svaki objekat u arrayu pozovi cardCreator i novonastali objekat gurni u nastali managerArray
//Od toga trenutka za sve koristis te nove pojacane objekte (manager.getCard(), card.getImg())