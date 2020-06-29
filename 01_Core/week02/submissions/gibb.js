
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


var sorted = cartoons.sort(compare);
console.log(sorted); // checking to see that it works





function sortNames() {
    var text = '';
    sorted.forEach (function (el) {
    var name = el.split (' ');
    text += `<li> ${name[0]} <strong> ${name[1]} </strong> </li>`;
    })

    document.getElementById("cartoon-list").innerHTML = text;

}







