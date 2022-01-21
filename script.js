const q = (query) => document.querySelector(query);

const events = [
    () => {
        q("#centerButton").style.backgroundColor = "blue";
        q("#centerButton").style.borderColor = "darkblue"
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
        q("#centerButton").style.width = "26rem";
        q("#centerButton").style.height = "26rem";
        setTimeout(() => {
            q("#centerButton").style.width = "25rem";
            q("#centerButton").style.height = "25rem";
        }, 250);
    });
});