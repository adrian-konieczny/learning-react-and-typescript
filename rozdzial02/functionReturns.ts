function runMore(distance: number) {
    return distance + 10;
}

function eat(callories: number) {
    console.log("Zjadłem " + callories + " kalorii.");
}

function sleepIn(hours: number) : void {
    console.log("Spałem " + hours + " godzin.");
}

let ate = eat(100);
console.log(ate);

let slept = sleepIn(100);
console.log(slept);