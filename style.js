//2
const headingColor = document.getElementsByTagName('h2');
for (const h2 of headingColor) {
    h2.style.color = 'lightblue';
}//3
const backPack = document.getElementById('backpack');
backPack.style.backgroundColor = 'tomato';
// 4
const cards = document.getElementsByClassName('card');
for (const card of cards) {
    card.style.borderRadius = '30px';
}
//5

const button = document.getElementById('button').addEventListener('click', function () {
    console.log('hello');
})
// 6
const buttons = document.getElementsByClassName('panda-btn-buy-now');
for (const button of buttons) {
    button.addEventListener('click', function (event) {
        event.target.parentNode.removeChild(event.target);
    })
}

// 7

document.getElementById('email-input').addEventListener('keyup', function (event) {
    const deletBtn = document.getElementById('email-button');
    if (event.target.value == 'email') {
        deletBtn.removeAttribute('disabled');

    }
    else {
        deletBtn.setAttribute('disabled', true);
    }
})

// 8
var image = document.getElementById("img");

//Now, we need to add an Event Listener to listen when the image gets mouse over.

image.addEventListener('mouseenter', function () {
    image.src = "images/shoes/shoe-1.png"
})
image.addEventListener('mouseout', function () {
    image.src = "images/banner-images/headphone.png"
})

// 9

const touch = document.getElementById('subscribe');
touch.addEventListener('dblclick', function () {
    console.log('hello');
    touch.style.backgroundColor = 'tomato';
})