var colours = [
    'red', 'orange', 'yellow', 'green', 'blue', 'purple'
];



function addcolour(colour) {
    var rainbowEl = document.querySelector('.container')
    var div = document.createElement('div');
    div.style.paddingTop = '10px'
    div.style.width = '100%'
    div.style.backgroundColor = colour;
    rainbowEl.appendChild(div);
}


//girar();

function girar() {
    girarArray();
}
//Função Girar array pega item que esta no local 0 e poem no local 5
function girarArray(cores) {
    for (let i in colours) {
        var indexOf = i;

    }
    for (let i = colours.length - 1; i > -1; i--) {
        var indexIn = i;

    }
    arraymove(colours, indexOf, indexIn)

    function arraymove(arr, fromIndex, toIndex) {
        var element = arr[fromIndex];
        arr.splice(fromIndex, 1);
        arr.splice(toIndex, 0, element);
    }

}


function chamarFunc(callback, array) {
    for (let i in array) {
        callback(array[i])

    }
}
chamarFunc(addcolour, colours);