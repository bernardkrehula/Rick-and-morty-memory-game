const gameIcon = document.querySelectorAll('.game-icon');
const gameIcons = document.querySelector('.icons')

const iconsArray = [
    {id: '', name: 'Gear Head', img: 'images/gearHeadpng.png'},
    {id: '', name: 'Squanchy', img: 'images/squanchy.a39194b73a966ab61d06.png'},
    {id: '', name: 'Snuffles', img: 'images/snuffles.120ea6e983a68aef7be5.png'},
    {id: '', name: 'Krombopulos Michael', img: 'images/michael.8c9961c6a42e6577b366.png'},
    {id: '', name: 'Coach Feratu', img: 'images/vampire.4c634082ab10e93076ac.png'},
    {id: '', name: 'Bird Person', img: 'images/birdPerson.bbeb4909b0b4a608592c.png'},
    {id: '', name: 'Prince Nebulon', img: 'images/princeNebulon.492189f9013fb3a2c907.png'},
    {id: '', name: 'Scarry Terry', img: 'images/Terry.0005c5c221a69a614d0a.png'},
    {id: '', name: 'Doofus Rick', img: 'images/J19ick.13cdd5d095ba92ee1ce4.png'},
    {id: '', name: 'President Curtis', img: 'images/president.d8927b18ea37085c4685.png'},
    {id: '', name: 'Abrodolph Lincoler', img: 'images/abraham.5bab582d158024aecc0a.png'},
    {id: '', name: 'Rick Sanchez', img: 'images/rickkk.c06ec7790deb77a3746b.png'}
]

function managerCreator(){
    let icon;
    const cardCreator = () => {
       for(let i = 0; i < iconsArray.length; i++){
        icon = iconsArray[i].img;
        console.log(iconsArray[i].img)
        pushGameIconOnScreen()
       }
    }

    const pushGameIconOnScreen = () =>{
        let html = 
        `
        <div class="game-icon">
            <img src="${icon}">
        </div>
        `;
        gameIcons.insertAdjacentHTML('beforeend', html);
    }
    return { cardCreator, pushGameIconOnScreen }
}
const manager = managerCreator();
manager.cardCreator();

//Napravi array objekata svaki objekat neka ima sljedeca polja id, name, img razmisli treba li jos nesto (treba mi njezino stanje da znam je li bila kliknuta ili nije)
//Napravi kreatorske funkcije koje ti trebaju
//Treba ce mi cardCreator i managerCreator
//Za svaki objekat u arrayu pozovi cardCreator i novonastali objekat gurni u nastali managerArray
//Od toga trenutka za sve koristis te nove pojacane objekte (manager.getCard(), card.getImg())