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
        q("#vineBoom").play();
    },
    () => {
        document.body.style.backgroundImage = "url(christmas.jpg)"
        q("#credits").innerHTML = "Photo by one23four56 on Unsplash"
    },
    () => {
        q("#cr").play();
    },
    () => {
        document.body.style.backgroundImage = "url(https://tse4.mm.bing.net/th?id=OIP.q803pWRdNphS0V-YmlHlgAAAAA&pid=Api)"
        q("#credits").innerHTML = "Dwayne Johnson"
    },
    () => {
        document.body.style.backgroundImage = "url(window.jpg)"
        q("#credits").innerHTML = "Photo by Bucography on Unsplash"
    },
    () => {
        q('h1').innerText = "jkshdiuashd"
    },
    () => {
        document.body.style.backgroundImage = "url(collage.jpg)"
        q("#credits").innerHTML = "Photo by one23four56 on Unsplash"
    },
    () => {
        q("#he").play();
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