let input = document.getElementById('input');
let from = document.getElementById('from');
let to = document.getElementById('to');
let result = document.getElementById('result');
let historyList = document.getElementById('historyList');
// let deleteBtn = document.getElementById('delete-btn');

function createOption(x, y, z) {
    let option = document.createElement('option');
    let text = document.createTextNode(y);
    option.setAttribute('value', toNum(z));
    option.appendChild(text);
    x.appendChild(option);
}

function toNum(z) {
    return Number(z.replace(",",""));
}

for ( let x in data.rates) {
    createOption(from, x, data.rates[x]);
    createOption(to, x, data.rates[x]);
    // console.log(x, data.rates[x]);
}

function createTr(x){

    let rowSpace = document.getElementById('rowSpace');
    if (rowSpace) {
        rowSpace.remove();
    }
    let tr = document.createElement('tr');

    x.map(function (el) {
        let td = document.createElement('td');
        let content = document.createTextNode(el);
        td.appendChild(content);
        tr.appendChild(td);
    })
    historyList.appendChild(tr);
}

function store(){
    localStorage.setItem("record", historyList.innerHTML);
}

(function () {
    if (localStorage.getItem("record")) {
        historyList.innerHTML = localStorage.getItem("record");
    } else{
        historyList.innerHTML = `<tr id="rowSpace"><td colspan="4">Data not Found!</td></tr>`
    }
})();

function del(){
    localStorage.removeItem("record");
    historyList.remove();
    result.innerHTML = "0.00";
}


document.getElementById('second-container').addEventListener('submit', function (e) {
    e.preventDefault();

    //get State
    let inValue = input.value;
    let fromValue = from.value;
    let toValue = to.value;


    //process
    let fromText = inValue+" "+from.options[from.selectedIndex].innerText;
    let toText = to.options[to.selectedIndex].innerText;
    let first = inValue * fromValue;
    let second = first / toValue;
    let final = second.toFixed(2);
    let date = new Date().toLocaleString();
    let arr = [date, fromText, toText, final];
    createTr(arr);
    store();


    //set State
    result.innerHTML = final;
    input.value = "";
    input.focus();
    from.value = "";
    to.value = "1";
});

function changeMode() {
    document.body.classList.toggle("night-mode");
    document.getElementById("modeIcon").classList.toggle("fa-sun");
}

