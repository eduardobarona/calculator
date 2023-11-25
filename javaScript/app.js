const screen = document.querySelector(".calculator_screen");
const buttons = document.querySelectorAll(".calculator_btn");
const switchMode = document.getElementById("switchMode");
const calculator = document.querySelector(".calculator");
const body = document.body;

buttons.forEach(button =>{
    button.addEventListener("click", ()=>{
        const buttonHold = button.textContent;

        if(button.id === "c"){
            screen.textContent = "0";
            return;
        };

        if(button.id === "erase"){
            if(screen.textContent.length===1 || screen.textContent ==="ERROR"){
                screen.textContent = "0";
            } else{
                screen.textContent = screen.textContent.slice(0, -1);
            };
            return;
        };

        if(button.id==="equal"){
            try{
                screen.textContent = eval(screen.textContent)%1===0 ? eval(screen.textContent) : eval(screen.textContent).toFixed(2);
            }catch{
                screen.textContent = "ERROR";
            };
            return;
        };

        if(screen.textContent==="0" || screen.textContent ==="ERROR"){
            screen.textContent = buttonHold;
        } else{
            screen.textContent+=buttonHold;
        };
    });
});


//Switch - Dark Mode to Light Mode

switchMode.addEventListener("click",()=>{
    body.classList.toggle("lightModeBody");
    calculator.classList.toggle("lightModeCalculator");
    screen.classList.toggle("lightModeScreen");
    switchMode.classList.toggle("lightModeSwitch");
    buttons.forEach(button =>{
        button.classList.toggle("lightModeButtons");
    });
});