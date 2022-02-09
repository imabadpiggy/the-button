const q = (query) => document.querySelector(query);

function genRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

const events = [
    () => {
        const hue = genRandomNumber(360);
        const sat = genRandomNumber(100);
        q("#centerButton").style.backgroundColor = `hsl(${hue}, ${sat}%, 70%)`;
        q("#centerButton").style.borderColor = `hsl(${hue}, ${sat}%, 60%)`;
    },
    () => {
        q("#cr").play();
    },
    () => {
        document.body.style.backgroundImage = "url(https://tse4.mm.bing.net/th?id=OIP.q803pWRdNphS0V-YmlHlgAAAAA&pid=Api)"
        q("vine").play();
    },
    () => {
        q('h1').innerText = "jkshdiuashd"
    },
    () => {
        q("#he").play();
    },
    () => {
        q("#centerButton").style.backgroundImage = "url(https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.dribbble.com%2Fusers%2F1077130%2Fscreenshots%2F3524752%2Ffree-youtube-subscribe-button-png-download-by-alfredocreates.jpg%3Fcompress%3D1%26resize%3D400x300&imgrefurl=https%3A%2F%2Fdribbble.com%2Fshots%2F3524752-Free-YouTube-Subscribe-Button-Png-Download&tbnid=TOPsrm1flAhYGM&vet=12ahUKEwjSt7W6r_P1AhXIGc0KHaIqCiUQMygBegUIARDlAQ..i&docid=HdwZ4f8AWx-hIM&w=400&h=300&q=button&hl=en-US&safe=active&ved=2ahUKEwjSt7W6r_P1AhXIGc0KHaIqCiUQMygBegUIARDlAQ)"
    },
    () => {
        q()
    },
];

function getRandom(array) {
    const number = genRandomNumber(array.length);
    return array[number];
}

window.addEventListener("load", event => {
    q("h1").style.opacity = "1";
    q("h2").style.opacity = "1";
    setTimeout(() => {
        q("#centerButton").style.opacity = "1";
    }, 800);
    q("#centerButton").addEventListener("click", event => {
        getRandom(events)();
        q("#centerButton").style.width = "26rem";
        q("#centerButton").style.height = "26rem";
        setTimeout(() => {
            q("#centerButton").style.width = "25rem";
            q("#centerButton").style.height = "25rem";
        }, 250);
    });
});
