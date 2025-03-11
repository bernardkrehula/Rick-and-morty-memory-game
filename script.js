const gameIcon = document.querySelectorAll('.game-icon');
const gameIcons = document.querySelector('.icons')
const title = document.querySelector('.title');

const cardCreator = (cardsName, cardsImg) => {
    let id = crypto.randomUUID();
    let clicked = 'false';
    let name = cardsName; 
    let img = cardsImg;

    return { id, clicked, name, img }
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

function managerCreator(){
    let cards = [];
  
    const pushCardsArrayToCards = (card) =>{
        cards.push(card);
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
    
    const returnArray = () => { return cards }

    const giveIconRandomPositionInArray = () => {
        iconsArray.sort(() => Math.random() - 0.5);
    }
   
    return { cardCreator, markClickedIcon, returnArray, giveIconRandomPositionInArray, pushCardsArrayToCards }
}
const manager = managerCreator();

for(let i = 0; i < cardsArray.length; i++){
    const creator = cardCreator(cardsArray[i].name, cardsArray[i].img);
    manager.pushCardsArrayToCards(creator);
}
console.log(manager.returnArray())

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
    
})
