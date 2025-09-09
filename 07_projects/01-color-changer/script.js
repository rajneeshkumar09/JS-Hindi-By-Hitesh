const buttons = document.querySelectorAll(".button");
const body  = document.querySelector("body");

buttons.forEach((button) => {
    console.log(button);
    button.addEventListener("click", (eventObject) => {
        console.log(eventObject);
        console.log(eventObject.target);
        console.log(eventObject.target.id);
        if(eventObject.target.id === "grey"){
            body.style.backgroundColor = eventObject.target.id;
        } else if (eventObject.target.id === "wheat") {
            body.style.backgroundColor = eventObject.target.id;
        } else if (eventObject.target.id === "blue") {
            body.style.backgroundColor = eventObject.target.id;
        } else if (eventObject.target.id === "yellow") {
            body.style.backgroundColor = eventObject.target.id;
        } else if (eventObject.target.id === "coral") {
            body.style.backgroundColor = eventObject.target.id;
        } else if (eventObject.target.id === "salmon") {
            body.style.backgroundColor = eventObject.target.id;
        } else {
            console.log("successfully Background Color Change");
        }
    });
});


/* 
    try this: use switch instead of if. create html box of a color as user want and set the background color with the name of color with white background
*/