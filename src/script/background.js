const body = document.body
const images = ["0.jpg","1.jpg","2.jpg"];
const GivemeBtn = document.getElementById('Changebg');

function Changebg(event) {
    let m = Math.floor(Math.random() * images.length)
    let chosenImage = images[m];
    document.body.style.backgroundImage = `url(src/img/${chosenImage})`;
    console.log(chosenImage)
}

GivemeBtn.addEventListener('click', Changebg)