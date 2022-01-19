
const q = (query: string) => document.querySelector(query);

const events: Function[] = [
    () => {
        alert(1)
    },
    () => {
        alert(2)
    },
    () => {
        // you get the idea just keep adding on to this 
    }
]

function getRandom(array: any[]): any {
    const number = Math.floor(Math.random() * array.length);
    return array[number];
}

window.addEventListener("load", event => {
    (q("#centerButton") as HTMLButtonElement).style.opacity = "1";
    (q("h1") as HTMLHeadingElement).style.opacity = "1";
    (q("#centerButton") as HTMLButtonElement).addEventListener("click", event => {
        getRandom(events)();
    })
})