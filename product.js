const menu = document.querySelector('.menu');       
const logo = document.querySelector(".logoMaster");  
const fond = document.querySelector('.fond');
const icon = document.querySelectorAll('.icon img');   


icon.forEach(img => {    
img.addEventListener("click", function(){        
    
    if(this.src.includes('icon-hamburger.svg')){
        this.src = 'icon-close-menu.svg'; 
        menu.classList.remove('hidden');
        logo.classList.add('hidden');
        fond.style.opacity = "0.4";
        menu.style.opacity = "1";
        
    } else if (this.src.includes('icon-close-menu.svg')){   
        this.src = 'icon-hamburger.svg';
        menu.classList.add('hidden');
        logo.classList.remove('hidden');
        fond.style.opacity = "1";
        }})});

const bambooBtn = document.querySelector('#bambooBtn');
const blackBtn = document.querySelector('#blackBtn');
const specialBtn = document.querySelector('#specialBtn');
const cardFour = document.querySelector('.cardFour');

const btnReward = document.querySelectorAll('.cardThree button');

btnReward.forEach(btn => {
    btn.addEventListener("click", function(){

        cardFour.classList.remove('hidden2');

        
    })
})

function myFunction() {
    // Get the checkbox
    var checkBox = document.getElementById("inputTwo");
    // Get the output text
    
    var pledge =document.getElementById("bambooPledge");
  
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
      pledge.style.display = "block";
    } else {
        pledge.style.display = "none";
    
    }
  }

  function myFunction() {
    // Get the checkbox
    var checkBox = document.getElementById("inputTwo");
    // Get the output text
    
    var pledge =document.getElementById("bambooPledge");
  
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
      pledge.style.display = "block";
    } else {
        pledge.style.display = "none";
    
    }
  }

  function myFunction() {
    // Get the checkbox
    var checkBox2 = document.getElementById("inputTwo");
    var checkBox3 = document.getElementById("inputThree");
    var checkBox1 = document.getElementById("inputOne");
    // Get the output text
    var pledge1 = document.getElementById("noRewardPledge");
    var pledge2 =document.getElementById("bambooPledge");
    var pledge3 =document.getElementById("blackPledge");
  
    // If the checkbox is checked, display the output text
    if (checkBox2.checked == true){
      pledge2.style.display = "block";
      pledge3.style.display = "none";
      pledge1.style.display = "none";
      
    } else if (checkBox1.checked == true) {
        pledge2.style.display = "none";
        pledge3.style.display = "none";
        pledge1.style.display = "block";
    }
    else if (checkBox3.checked == true) {

        pledge3.style.display = "block";
        pledge2.style.display = "none";
        pledge1.style.display = "none";
    }
  }

  const closeModal = document.getElementById('close');


closeModal.addEventListener("click", function(){ 


    window.history.back();
})    


const thank = document.getElementById('thank');
const btnn = document.querySelectorAll('.cardFour button');

btnn.forEach(btn => {
    btn.addEventListener("click", function(){

        
        thank.style.display = "";
        cardFour.classList.add('hidden2');

    })
})

const final = document.getElementById('gotIt');

final.addEventListener("click", function(){

        location.reload();
   
})

let choix = true;

function change() {

    let bookmark = document.getElementById('bookmarkBtn');
    let button = document.getElementById('bookmark');
    
    if (choix == true) {
        button.style.filter = "invert(37%) sepia(75%) saturate(474%) hue-rotate(127deg) brightness(89%) contrast(89%)";
        bookmark.style.color = "hsl(176, 72%, 28%)";
        choix=false;
    } else {
        button.style.filter = "";
        bookmark.style.color = "hsl(0, 0%, 48%)";
        choix=true;

    }
}


  




