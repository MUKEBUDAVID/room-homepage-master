const icon_hamburger = document.getElementById("icon-hamburger");

const icon_close = document.getElementById("icon-close");

const header = document.getElementById("header");
const room = document.getElementById("room");

const icon_angle_left = document.getElementById("icon-angle-left");
const icon_angle_right = document.getElementById("icon-angle-right");

const sroll_img = document.getElementById("sroll_img");

// console.log(sroll_img);



// code pour le menu hamburger mobile

icon_hamburger.addEventListener("click", () => {
    
    header.style.visibility = "visible";
    icon_hamburger.style.visibility = "hidden"; 
})


icon_close.addEventListener("click", () => {
  
    header.style.visibility = "hidden";
    icon_hamburger.style.visibility = "visible"; 
})


//code pour le scroll des images
let temp = 1;
icon_angle_right.addEventListener("click", () => {
    temp++; 
    if (temp>=4) {
        temp = 1;
    }
sroll_img.style.backgroundImage = `url(images/mobile-image-hero-${temp}.jpg)`;    
sroll_img.style.backgroundRepeat = "no-repeat";    
sroll_img.style.backgroundSize ="cover" ;    
})


icon_angle_left.addEventListener("click", () => {
  temp--;
  if (temp < 1) {
    temp = 3;
  }
  sroll_img.style.backgroundImage = `url(images/mobile-image-hero-${temp}.jpg)`;
  sroll_img.style.backgroundRepeat = "no-repeat";
  sroll_img.style.backgroundSize = "cover";
});