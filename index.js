// let result_Preview = document.getElementById("result");
let result_logs = document.getElementById("result-preview");

let calculation_Dashboard = document.getElementById("calculator-preview");
let clear_Dashboard = document.getElementById("operator-ac");
let delete_character = document.getElementById("operator-delete")

// let number7 = document.getElementById("number-7")

let DisplayValue;


function display(DisplayValue){

    calculation_Dashboard.value+=DisplayValue;
    // document.getElementById("result").innerHTML = "7";

}


clear_Dashboard.addEventListener('click',() => {
    calculation_Dashboard.value=""
})

delete_character.addEventListener('click', () => {

    calculation_Dashboard.value = calculation_Dashboard.value.slice(0,-1);

})



function displaySolve(){

    let eq = calculation_Dashboard.value;
    result_logs.value = eq;

    let y = eval(eq)

    calculation_Dashboard.value = y;


}

let btn = document.querySelector(".toggler");
let number = document.querySelectorAll(".num")

let isDark = true;
btn.onclick = () => {
    number.classList.toggle('dark-theme');
    btn.classList.toggle('active');
    isDark =!isDark
}