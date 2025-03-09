const gameIcon = document.querySelectorAll('.game-icon');
const gameIcons = document.querySelector('.icons')

const iconsArray = [
    {id: '', name: '', img: 'images/gearHeadpng.png'},
    {id: '', name: '', img: 'images/vampire.4c634082ab10e93076ac.png'},
    {id: '', name: '', img: 'images/Terry.0005c5c221a69a614d0a.png'},
    {id: '', name: '', img: 'images/president.d8927b18ea37085c4685.png'},
    {id: '', name: '', img: 'images/rickkk.c06ec7790deb77a3746b.png'},
    {id: '', name: '', img: 'images/birdPerson.bbeb4909b0b4a608592c.png'},
    {id: '', name: '', img: 'images/abraham.5bab582d158024aecc0a.png'},
    {id: '', name: '', img: 'images/squanchy.a39194b73a966ab61d06.png'},
    {id: '', name: '', img: 'images/princeNebulon.492189f9013fb3a2c907.png'},
    {id: '', name: '', img: 'images/snuffles.120ea6e983a68aef7be5.png'},
    {id: '', name: '', img: 'images/J19ick.13cdd5d095ba92ee1ce4.png'},
    {id: '', name: '', img: 'images/michael.8c9961c6a42e6577b366.png'}
]
let icon;
function cardCreator() {
   for(let i = 0; i < iconsArray.length; i++){
    icon = iconsArray[i].img;
    console.log(iconsArray[i].img)
    pushGameIconOnScreen()
   }
}
cardCreator()

function pushGameIconOnScreen(){
    let html = 
    `
    <div class="game-icon">
        <img src="${icon}">
    </div>
    `;
    gameIcons.insertAdjacentHTML('beforeend', html);
}
//Napravi array objekata svaki objekat neka ima sljedeca polja id, name, img razmisli treba li jos nesto
//Napravi kreatorske funkcije koje ti trebaju
//Treba ce mi cardCreator i managerCreator
//Za svaki objekat u arrayu pozovi cardCreator i novonastali objekat gurni u nastali managerArray
//Od toga trenutka za sve koristis te nove pojacane objekte (manager.getCard(), card.getImg())