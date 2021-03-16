let submit = document.getElementById("submit");
submit.addEventListener("click", inputgoal);
let input = document.getElementById("ngoal");
let finisd = document.getElementById("finisd");
function inputgoal(e) {
    let goal = document.createTextNode(input.value);
    let ol = document.getElementsByTagName("ol")[0];
    let li = document.createElement("li");
    let h2 = document.createElement("h2");
    h2.appendChild(goal);
    let compbut = document.createElement("button");
    compbut.innerText = "Completed";
    compbut.addEventListener("click", compltgoal);

    let delbut = document.createElement("button");
    delbut.innerText = "Delete";
    delbut.addEventListener("click", deletegoal);

    li.appendChild(h2);
    li.appendChild(compbut);
    li.appendChild(delbut);
    ol.appendChild(li);
}

function deletegoal(e) {
    e.target.parentNode.remove();
}

function compltgoal(e) {
    e.target.parentElement.children[0].style.textDecoration = "line-through";
    finisd.appendChild(e.target.parentElement);
    e.target.remove().parentElement.children[0];
}