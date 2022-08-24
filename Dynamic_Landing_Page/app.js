//? DOM Elements

const time = document.getElementById("time"),
    greeting = document.getElementById("greeting"),
    name = document.getElementById("name"),
    focus = document.getElementById("focus");

//?  Options

const showAmPm = true;

//? Show time

function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();
    //? Set AM or PM

    const amPm = hour >= 12 ? "PM" : "AM";

    //? 12hr format

    hour = hour % 12 || 12;

    //? Output Time

    time.innerHTML = `${hour}<span>:</span>${addZeros(
        min
    )}<span>:</span>${addZeros(sec)} ${showAmPm ? amPm : ""}`;

    setTimeout(showTime, 1000);
}

//? Add Zeros

function addZeros(n) {
    return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

//? Ser Background and Greeting

function setBgGreet() {
    let today = new Date(),
        hour = today.getHours();

    if (hour < 12) {
        // Morning
        document.body.style.backgroundImage =
            "url('https://i.ibb.co/7vDLJFb/morning.jpg')";
        greeting.textContent = "Good Morning, ";
    } else if (hour < 18) {
        // Afternoon
        document.body.style.backgroundImage =
            "url('https://i.ibb.co/3mThcXc/afternoon.jpg')";
        greeting.textContent = "Good Afternoon, ";
    } else {
        // Evening
        document.body.style.backgroundImage =
            "url('https://i.ibb.co/924T2Wv/night.jpg')";
        greeting.textContent = "Good Evening, ";
        document.body.style.color = "white";
    }
}
function setName(e) {
    if (e.type === "keypress") {
        //? Make sure enter is pressed
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem("name", e.target.innerText);
            name.blur();
        }
    } else {
        localStorage.setItem("name", e.target.innerText);
    }
}

function setFocus(e) {
    if (e.type === "keypress") {
        //? Make sure enter is pressed
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem("focus", e.target.innerText);
            focus.blur();
        }
    } else {
        localStorage.setItem("focus", e.target.innerText);
    }
}
//? Get Name Function
function getName() {
    if (localStorage.getItem("name") === null) {
        name.textContent = "[Enter Name]";
    } else {
        name.textContent = localStorage.getItem("name");
    }
}

//? Get Name Focus
function getFocus() {
    if (localStorage.getItem("focus") === null) {
        focus.textContent = "[Enter Focus]";
    } else {
        focus.textContent = localStorage.getItem("focus");
    }
}

name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);
focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur", setFocus);

//! Run
showTime();
setBgGreet();
getName();
getFocus();
