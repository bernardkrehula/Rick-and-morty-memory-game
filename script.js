const gameIcon = document.querySelectorAll('.game-icon');
const gameIcons = document.querySelector('.icons')

const cardCreator = (cardsArray) => {
    let id = crypto.randomUUID();
    const clicked = () => {return cardsArray.clicked = 'false'};
    const name = () => {return cardsArray.name};
    const img = () => {return cardsArray.img};
    return { id, clicked, name, img };
}

const cardsArray = [
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
cardCreator(cardsArray)
//Napravi funkciju card creator 
//Ta funkcija neka ima let id to ce bit random Id i neka ima is clicked false
//Name i img ce da primi ka argument 
//Onda cu da imam varijablu let name i let img koje ce da budu inicirane tim argumentima
//Za svaki od objekata u arrayu cardsArray napravi novi objekat uz pomoc card kreator
//Sad taj novonastali objekat gurnem u array unutar managerCreator

function managerCreator(){
    let cards = [];
  
    const pushCardsArrayToCards = () =>{
        cards.push(cardsArray);
    } 
   /*  const cardCreator = () => {
       for(let i = 0; i < iconsArray.length; i++){
        pushGameIconOnScreen(iconsArray[i]);
       }
    } */

    const markClickedIcon = (clickedIconId) => {
        let findIcon = iconsArray.find((icon) => icon.id == clickedIconId);
        findIcon.clicked = 'true';
        return findIcon;
    }
    
    const returnArray = () => { console.log(iconsArray) }

    const giveIconRandomPositionInArray = () => {
        iconsArray.sort(() => Math.random() - 0.5);
    }
   
    return { cardCreator, markClickedIcon, returnArray, giveIconRandomPositionInArray, pushCardsArrayToCards }
}
const manager = managerCreator();


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

gameIcons.addEventListener('click', (e) => {
    let tragetIconId = e.target.closest('div').id;

    manager.markClickedIcon(tragetIconId);
    manager.returnArray()
})
//Napravi array objekata svaki objekat neka ima sljedeca polja id, name, img razmisli treba li jos nesto (treba mi njezino stanje da znam je li bila kliknuta ili nije)
//Napravi kreatorske funkcije koje ti trebaju
//Treba ce mi cardCreator i managerCreator
//Za svaki objekat u arrayu pozovi cardCreator i novonastali objekat gurni u nastali managerArray
//Od toga trenutka za sve koristis te nove pojacane objekte (manager.getCard(), card.getImg())