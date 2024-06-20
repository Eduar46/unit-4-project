let button1 = document.querySelector(".one");
let button2 = document.querySelector(".two");
let button3 = document.querySelector(".three");
let button4 = document.querySelector(".four");
let choice1 = false;
let choice2 = false;
let choice3 = false;
let choice4 = false;
let character1 = document.querySelector(".griffith");
let character2 = document.querySelector(".goku");
let character3 = document.querySelector(".gilgamesh")
let character4 = document.querySelector(".levi")
let resultsButton = document.querySelector(".result");
let Everything = document.querySelector(".questions")
button1.addEventListener("click", function () {
    choice1 = true;
});
button2.addEventListener("click", function () {
    choice2 = true;
});
button3.addEventListener("click", function () {
    choice3 = true;
});
button4.addEventListener("click", function () {
    choice4 = true;
});

resultsButton.addEventListener("click", function () {
    if (choice1 == true && choice3 == true) {
        Everything.style.display="none"
        character1.style.display = "block";
    }
   else if(choice1 === true && choice4 === true) {
    Everything.style.display="none"
    character2.style.display = "block";
   }
   else if(choice2 === true && choice3 === true) {
    Everything.style.display="none"
    character3.style.display = "block";
   }
   else if(choice2 === true && choice4 === true) {
    Everything.style.display="none"
    character4.style.display = "block";

   }
});

