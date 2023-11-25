const screen = document.querySelector(".calculator_screen");
const buttons = document.querySelectorAll(".calculator_btn");

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
                screen.textContent = eval(screen.textContent);
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