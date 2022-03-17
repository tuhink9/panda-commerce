const titles = document.getElementsByClassName('title');
for (const title of titles)
title.style.color = "lightblue";

const backPack = document.getElementById('backpack');
// backPack.onclick = changeBackground;

backPack.style.backgroundColor = "Blue";
console.log(backPack);
function changeBackground() {
    backPack.style.backgroundColor = "Blue";
}
 
// //  window.addEventListener("load",function() { changeBackground('red') });

// document.getElementById('main-button').addEventListener('click', function(){
// //     const backPack = document.getElementById('backpack');
// // backPack.style.backgroundColor = 'tomato';
//     document.body.style.backgroundColor = 'tomato';
// })

const buttons = document.getElementsByTagName('button')
    for (const button of buttons)
    button.parentNode.removeChild('button');



// const email = document.getElementById('input-email');

document.getElementById('email-input').addEventListener('change', function(event){
    
    const button = document.getElementById('subscribe-button');
    if (event.target.value == 'email'){
        button.removeAttribute('disabled');
    }
    // else{
    //     button.setAttribute('disabled', true);
    // }
})

document.getElementById('subscribe-button').addEventListener('click', function(){

    const inputEmail = document.getElementById('email-input');

    const para = document.createElement('p');
    para.innerText = inputEmail.value;

    const parent = document.getElementById('email-container');
    parent.appendChild(para);

    inputEmail.value = '';

})

document.getElementById('image-container').addEventListener('mouseenter', function imagefun() {
    const Image_Id = document.getElementById('getImage');
    if (Image_Id.src.match("images/bags/bag-3.png")) {
        Image_Id.src = "images/bags/bag-3.png";
    }
    else {
        Image_Id.src = "images/shoes/shoe-3.png";
    }
})

document.getElementById("image-container").style.backgroundImage = 'images/shoes/shoe-3.png'
// document.getElementById("ElementId").style.backgroundColor = 'red';