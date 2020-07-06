
//gibberish page

var cartoons = ['Patrick Star', 'Angelica Pickles', 'Jessica Rabbit', 'Johnny Bravo']

function compare(a, b) {
    var splitA = a.split(" ");
    var splitB = b.split(" ");
    var lastA = splitA[splitA.length - 1];
    var lastB = splitB[splitB.length - 1];

    if (lastA < lastB) return -1;
    if (lastA > lastB) return 1;
    return 0;
}

/*
var sorted = cartoons.sort(compare);
console.log(sorted);


function sortNames() {
    var text = '';
    var sorted = cartoons.sort(compare)
    sorted.forEach (function (el) {
    var name = el.split (' ');
    text += `<li> ${name[0]} <strong> ${name[1]} </strong> </li>`;
    })

    document.getElementById("cartoon-list").innerHTML = text;

}
*/




function sortNames(input) {
    var text = '';
    input.forEach (function (el) {
        el = el.trim();
    var name = el.split (' ');
    text += `<li> ${name[0]} <strong> ${name[1]} </strong> </li>`;
    })
    return text;


}

function newNames () {
    var getNames = document.getElementById("text-area").value;
    getNames = getNames.split(",");
    getNames.sort(compare);

    getNames = sortNames(getNames);
    console.log(getNames);
    document.getElementById("cartoon-list").innerHTML = getNames;
}




