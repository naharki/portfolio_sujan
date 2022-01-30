const toggleSwitch = document.getElementById('toggle');
const lilBtn = document.getElementById('lil-btn');
const jsBtn = document.getElementById('js-btn');
const bottomFade= document.getElementById('bottom-fade');
const menuItems = document.getElementsByClassName('menuItems');
const label = document.getElementsByClassName('hamburger-label');

const Mode = localStorage.getItem('theme-preference') || null;

let counter = 0;

if(Mode == 'light-mode'){
    changeTheme();
}

function changeTheme(){
    document.body.classList.toggle('light-mode');
    lilBtn.classList.toggle('right');
    jsBtn.classList.toggle('light-txt');
    bottomFade.classList.toggle('bottom-fade-white');

    if(counter%2==0){
        localStorage.setItem('theme-preference' , 'light-mode' );
    }else{
        localStorage.setItem('theme-preference' , 'dark-mode' );
    }
    counter++;
}

function closeMenu(){
    label[0].click();
}

toggleSwitch.addEventListener('click', changeTheme);

for(let i=0; i<menuItems.length; i++){
    menuItems[i].addEventListener('click', closeMenu);
}




//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}