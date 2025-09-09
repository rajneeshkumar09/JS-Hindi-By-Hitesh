const time = document.getElementById("clock");

setInterval(() => {
    const date = new Date();

    time.innerHTML = date.toLocaleTimeString();
}, 1000);