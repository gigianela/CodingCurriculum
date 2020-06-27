
let cartoons = ['Patrick Star', 'Angelica Pickles', 'Jessica Rabbit', 'Johnny Bravo']

function compare(a, b) {
    var splitA = a.split(" ");
    var splitB = b.split(" ");
    var lastA = splitA[splitA.length - 1];
    var lastB = splitB[splitB.length - 1];

    if (lastA < lastB) return -1;
    if (lastA > lastB) return 1;
    return 0;
}


var sorted = cartoons.sort(compare);
console.log(sorted); // checking to see that it works

// things i think will work -- 
// getElementByID or document.querySelector
