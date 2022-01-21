const q = (query) => document.querySelector(query);

const events = [
    () => {
        if (
            q("#centerButton").style.backgroundColor === "blue" &&
            q("#centerButton").style.borderColor === "darkblue"
        ) {
            q("#centerButton").style.backgroundColor = "rgb(255, 0, 0)";
            q("#centerButton").style.borderColor = "rgb(215, 0, 0)";
        } else {
            q("#centerButton").style.backgroundColor = "blue";
            q("#centerButton").style.borderColor = "darkblue";
        }
    },
    () => {
        q("#vineBoom").play();
    },
    () => {
        document.body.style.backgroundImage = "url(https://i5.walmartimages.com/asr/aab6c643-8504-4b82-9a21-14784426d81d_1.bbadfd6a062bda13151d6486233c516b.jpeg)"
    },
    () => {
        q("#cr").play();
    },
    () => {
        document.body.style.backgroundImage = "url(https://tse4.mm.bing.net/th?id=OIP.q803pWRdNphS0V-YmlHlgAAAAA&pid=Api)"
    },
];

function getRandom(array) {
    const number = Math.floor(Math.random() * array.length);
    return array[number];
}

window.addEventListener("load", event => {
    q("h1").style.opacity = "1";
    setTimeout(() => {
        q("#centerButton").style.opacity = "1";
    }, 800);
    q("#centerButton").addEventListener("click", event => {
        getRandom(events)();
    });
});