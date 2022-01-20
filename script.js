const q = (query) => document.querySelector(query);

const events = [
    () => {
        alert(1);
    },
    () => {
        alert(2);
    },
    () => {
        // you get the idea just keep adding on to this 
    }
];

function getRandom(array) {
    const number = Math.floor(Math.random() * array.length);
    return array[number];
}

window.addEventListener("load", event => {
    q("#centerButton").style.opacity = "1";
    q("h1").style.opacity = "1";
    q("#centerButton").addEventListener("click", event => {
        getRandom(events)();
    });
});
