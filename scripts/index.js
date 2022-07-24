const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener('click', toggle);

function toggle (){
    const nav = document.querySelector(".mobilenav");
    nav.classList.toggle('closemenubar');
    
}



const navTogglerb = document.querySelector(".buttoncloser");

navTogglerb.addEventListener('click', navToggleb);

function navToggleb(){

    const nav = document.querySelector(".ads");
    nav.classList.toggle("showads");
   
}


const navTogglerc = document.querySelector(".prob");

navTogglerc.addEventListener('click', navTogglec);

function navTogglec(){

    const nav = document.querySelector(".ads");
    nav.classList.toggle("showads");
   
}

const navTogglerd = document.querySelector(".buttonclosera");

navTogglerd.addEventListener('click', navToggled);

function navToggled(){

    const nav = document.querySelector(".ads");
    nav.classList.toggle("showads");
   
}


