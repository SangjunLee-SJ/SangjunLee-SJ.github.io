const body = document.body
const images = ["0.jpg","1.jpg","2.jpg"];
const url = [
    'https://pixabay.com/images/id-2422850/',
    'https://pixabay.com/images/id-7217599/',
    'https://pixabay.com/images/id-588144/',
]
const GivemeBtn = document.getElementById('Changebg');


document.body.style.backgroundImage = 'url(src/img/default_rain.jpg'

function Changebg(event) {
    let m = Math.floor(Math.random() * images.length)
    let chosenImage = images[m];
    document.body.style.backgroundImage = `url(src/img/${chosenImage})`;
    
    document.getElementById('imagefrom').innerText = url[m]
}

GivemeBtn.addEventListener('click', Changebg)