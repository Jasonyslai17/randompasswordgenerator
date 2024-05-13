let characters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9","!","@","#","$","%","^","&","*","(",")","_","+","}",":","?",">",",",".","<","/",";","'","[","]","\\","=","-","`","~"];

let passwordLengthSlider = document.getElementById("password-length-slider");
let sliderNumber = document.getElementById("slider-number");


passwordLengthSlider.addEventListener("input", function() {
    sliderNumber.textContent = passwordLengthSlider.value; 
});


let PW1 = document.getElementById("password1");
let PW2 = document.getElementById("password2");
let PW3 = document.getElementById("password3");
let PW4 = document.getElementById("password4");


function displayPasswords() {
    let length = passwordLengthSlider.value;
    PW1.textContent = generatePasswords(length);
    PW2.textContent = generatePasswords(length);
    PW3.textContent = generatePasswords(length);
    PW4.textContent = generatePasswords(length);
}

function generatePasswords(length) {
    let password = "";
    for (let i = 0; i < length; i++) {
        password += characters[Math.floor(Math.random() * characters.length)];
    }
    return password;
}


