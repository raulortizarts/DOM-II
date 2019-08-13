// Your code goes here


// const headImg = document.querySelector("img");

// function switchImg() {

//     if (headImg.src == "img/fun-bus.jpg") 
//     {
//         headImg.src = "img/adventure.jpg";
//     }
//     else 
//     {
//         headImg.src = "img/fun-bus.jpg";
//     }
// }

// headImg.addEventListener('click', switchImg);
// 1)
const headImg = document.querySelector('.intro img')

headImg.addEventListener('mouseover', () => {
    headImg.src = "img/adventure.jpg";
})

// 2)
headImg.addEventListener('mouseout', () => {
    headImg.src = "img/fun-bus.jpg";
})

// 3)
const button = document.querySelector('.btn')

button.addEventListener('click', () => {
    alert('Signed up!')
})

// 4)

const letsH2 = document.querySelector('.text-content h2')

letsH2.addEventListener('dblclick', () => {
    letsH2.textContent = ("changed")
})

// 5)
const introH2 = document.querySelector('.intro h2')

addEventListener("keydown", keyPressed => {
    if (keyPressed.keyCode == 49)
      introH2.style.color = "red";
  });

// 6)
addEventListener("keyup", keyPressed => {
    if (keyPressed.keyCode == 49)
      introH2.style.color = "";
  });

//7
addEventListener("scroll", () => {
      document.body.style.background = "grey";
 
  setTimeout( () => {
    document.body.style.background = "";
  }, 10000);
 
 });

//8

const advImg = document.querySelector('.img-content img')

advImg.addEventListener('drag', () => {
    advImg.style.opacity = '0';
})

//9

advImg.addEventListener('dragend', () => {
    advImg.style.opacity = '1';
})