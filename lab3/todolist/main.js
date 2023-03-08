function handler(){
    let div = document.createElement('div');
    div.className = 'checker';
    let id2data = document.getElementById('id2').value

    let res = document.querySelector('.creator_input').value;
    div.innerHTML = `<div>
    <label><input type="checkbox" class="checkboxs">${res}</label>
    </div>
    <label><input type="date">${id2data}</label>
    </div>
    <button class="checker_button">+</button>`;
    let where = document.getElementById('high');
    where.prepend(div);
    let elem = document.querySelector('.checker_button');
    elem.addEventListener("click", function(){
        let div2 = document.querySelector('.checker');
        div2.remove();
    });

}

function handler2(){
    let div = document.createElement('div');
    div.className = 'low_checker';
    let res = document.querySelector('.creator_input2').value;
    div.innerHTML = `<div>
    <label><input type="checkbox" class="checkboxs2">${res}</label>
    </div>
    <button class="checker_button2">+</button>`;
    let where = document.querySelector('.low_priority');
    where.prepend(div);
    let elem = document.querySelector('.checker_button2');
    elem.addEventListener("click", function(){
        let div2 = document.querySelector('.low_checker');
        div2.remove();
    })

}


let first = document.getElementById('firstt_checkbox');
let second = document.getElementById('secondd_checkbox');
let third = document.getElementById('thirdd_checkbox');
let low = document.getElementById('loww');
low.addEventListener("click",function(low){
    low.currentTarget.remove();
})
first.addEventListener("click", function(elem){
    elem.currentTarget.remove();
});
second.addEventListener("click", function(elem){
    elem.currentTarget.remove();
});
third.addEventListener("click", function(elem){
    elem.currentTarget.remove();
});
let elem = document.getElementById('elem');
elem.addEventListener("click", handler);

let elem2 = document.getElementById('elem2');
elem2.addEventListener("click",handler2);
