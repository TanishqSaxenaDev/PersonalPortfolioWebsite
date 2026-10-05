// Preloader 
let preloader = document.querySelector("#preloader");
document.addEventListener("DOMContentLoaded", function () {
    preloader.style.opacity = "0%";
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 1000);
});


// Project Section

function navSlider(x,y) {
    let behindDiv = document.querySelector(y);
    console.log(behindDiv);
    if (x.innerText === 'All') {
        behindDiv.style.marginLeft = '0%';
    } else if (x.innerText === 'Web Apps') {
        behindDiv.style.marginLeft = '20%';
    } else if (x.innerText === 'Games') {
        behindDiv.style.marginLeft = '40%';
    } else if (x.innerText === 'Tools') {
        behindDiv.style.marginLeft = '60%';
    } else if (x.innerText === 'Other') {
        behindDiv.style.marginLeft = '80%';
    }
}

let carousal1 = document.getElementById('c1');
let carousal2 = document.getElementById('c2');
let carousal3 = document.getElementById('c3');
let rbtn = document.getElementById('projbtn1')
let lbtn = document.getElementById('projbtn2')
let slider = 0;
function carousalSlideR() {
    if (carousal1.classList.contains('carousalCenter')){
        carousal1.classList.toggle('carousalCenter');
        carousal1.classList.toggle('carousalLeft');
        carousal2.classList.toggle('carousalCenter');
        rbtn.classList.toggle('grayout');
    } else if (carousal2.classList.contains('carousalCenter')) {
        carousal2.classList.toggle('carousalCenter');
        carousal2.classList.toggle('carousalLeft');
        carousal3.classList.toggle('carousalCenter');
        lbtn.classList.toggle('grayout');
    }
}
function carousalSlideL() {
    if (carousal3.classList.contains('carousalCenter')){
        carousal3.classList.toggle('carousalCenter');
        carousal2.classList.toggle('carousalLeft');
        carousal2.classList.toggle('carousalCenter');
        lbtn.classList.toggle('grayout');
    } else if (carousal2.classList.contains('carousalCenter')) {
        carousal2.classList.toggle('carousalCenter');
        carousal1.classList.toggle('carousalLeft');
        carousal1.classList.toggle('carousalCenter');
        rbtn.classList.toggle('grayout');
    }
}
