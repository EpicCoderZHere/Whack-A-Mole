//Score
let score = 0;
let hi = document.getElementById('score');



// Timer
let timeLeft = 30;
let elem = document.getElementById('timer');
let timerId = setInterval(countdown, 1000);

function countdown() {
    if (timeLeft == -1) {
        clearTimeout(timerId);
        doSomething();
           } else {
        elem.innerHTML = timeLeft + ' seconds remaining';
        timeLeft--;
         
    }
}


//Random Number generator (for moles) 

var ranNumId = setInterval(numDown, 2000);
var mole = Math.floor(Math.random() * 8);  

function numDown() {
    if (timeLeft > 30) {
      clearTimeout(ranNumId);
        } else { 
      mole = Math.floor(Math.random() * 8);  
        clearInterval()
    }
console.log(mole);
//Checks what Number the RandomNumberGenerator is on and depending on what number the mole will be unhidden
if (mole < 1) {
  moleCheck0();
} else {
    if (mole == 1) {
      moleCheck1();
    } else {
    if (mole == 2) {
      moleCheck2();
    } else {
    if (mole == 3) {
      moleCheck3();
    } else {
    if (mole == 4) {
      moleCheck4();
    } else {
    if (mole == 5) {
      moleCheck5();
    } else {
    if (mole == 6) {
      moleCheck6();
    } else {
    if (mole == 7) {
      moleCheck7();
    } 
} 
}  
} 
}  
}  
}  
}
}

console.log(mole);

  var x = document.getElementById("myAudio");

function add1(img) {

   score += 5;
    hi.innerHTML = 'score: ' + score;

      x.play();

 }

 

 function doSomething() {
   localStorage.setItem("finalScore",score);
   location.replace("gameover.html");
}



function moleCheck0() {
  let mole1 = document.getElementById('mole1');
  mole1.style.visibility = "visible";
  setTimeout (function(){
      mole1.style.visibility = "hidden";; }, 1000);

}

function moleCheck1() {
  let mole2 = document.getElementById('mole2');
  mole2.style.visibility = "visible";
  setTimeout (function(){
      mole2.style.visibility = "hidden";; }, 1000);
}

function moleCheck2() {
  let mole3 = document.getElementById('mole3');
  mole3.style.visibility = "visible";
  setTimeout (function(){
      mole3.style.visibility = "hidden";; }, 1000);
}

function moleCheck3() {
  let mole4 = document.getElementById('mole4');
  mole4.style.visibility = "visible";
  setTimeout (function(){
      mole4.style.visibility = "hidden";; }, 1000);
}

function moleCheck4() {
 let mole5 = document.getElementById('mole6');
  mole5.style.visibility = "visible";
  setTimeout (function(){
      mole5.style.visibility = "hidden";; }, 1000);
}

function moleCheck5() {
  let mole6 = document.getElementById('mole7');
  mole6.style.visibility = "visible";
  setTimeout (function(){
      mole6.style.visibility = "hidden";; }, 1000);
}

function moleCheck6() {
  let mole7 = document.getElementById('mole8');
  mole7.style.visibility = "visible";
  setTimeout (function(){
      mole7.style.visibility = "hidden";; }, 1000);
}

function moleCheck7() {
  let mole8 = document.getElementById('mole9');
  mole8.style.visibility = "visible";
  setTimeout (function(){
      mole8.style.visibility = "hidden";; }, 1000);
}
  

