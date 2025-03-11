const gameIcon = document.querySelectorAll('.game-icon');
const gameIcons = document.querySelector('.icons')
const title = document.querySelector('.title');

const cardCreator = (cardsName, cardsImg) => {
    let id = crypto.randomUUID();
    let clicked = false;
    let name = cardsName; 
    let img = cardsImg;

    const getId = () => { return id };
    const getClicked = () => { return clicked };
    const getName = () => { return name };
    const getImg = () => { return img };

    return { getId, getClicked, getName, getImg }
}
//Glavna logika: 
//Provjeri jesu li sve kartice clicked true? ako jesu pobjednik si
//Kliknem na karticu provjerim je li joj clicked true ako jeje game over
//Ako nije povecaj score za 1 pogledam je li trenutni score veci od high score ako jes povecaj mi highscore
//Promijeni clicked da je true i izmjesaj array

const cardsArray = [
    { name: 'Gear Head', img: 'images/gearHeadpng.png'},
    { name: 'Squanchy', img: 'images/squanchy.a39194b73a966ab61d06.png'},
    { name: 'Snuffles', img: 'images/snuffles.120ea6e983a68aef7be5.png'},
    { name: 'Krombopulos Michael', img: 'images/michael.8c9961c6a42e6577b366.png'},
    { name: 'Coach Feratu', img: 'images/vampire.4c634082ab10e93076ac.png'},
    { name: 'Bird Person', img: 'images/birdPerson.bbeb4909b0b4a608592c.png'},
    { name: 'Prince Nebulon', img: 'images/princeNebulon.492189f9013fb3a2c907.png'},
    { name: 'Scarry Terry', img: 'images/Terry.0005c5c221a69a614d0a.png'},
    { name: 'Doofus Rick', img: 'images/J19ick.13cdd5d095ba92ee1ce4.png'},
    { name: 'President Curtis', img: 'images/president.d8927b18ea37085c4685.png'},
    { name: 'Abrodolph Lincoler', img: 'images/abraham.5bab582d158024aecc0a.png'},
    { name: 'Rick Sanchez', img: 'images/rickkk.c06ec7790deb77a3746b.png'}
];

function managerCreator(){
    let cards = [];
  
    const pushCardsArrayToCards = (card) =>{
        cards.push(card);
    } 

    const markClickedIcon = (clickedIconId) => {
        let findIcon = cards.find((icon) => icon.getId() == clickedIconId);
        findIcon.clicked = true;
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




gameIcons.addEventListener('click', (e) => {
    let tragetIconId = e.target.closest('div').id;
    console.log(manager.markClickedIcon())
    manager.markClickedIcon(tragetIconId);
    
})
