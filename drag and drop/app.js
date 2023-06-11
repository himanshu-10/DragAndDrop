function allowDrop(ev) {
    ev.preventDefault();
}

function allowtextDrop(ev) {
    ev.preventDefault();

}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);

}

function dragtext(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}


function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));


    // for card btn-first
    const container1 = document.getElementById('box-1');
    const btn = document.getElementById('btn-1');

    if (container1.value != "") {
        window.alert("Success Your Item push in Box")
    }
    btn.addEventListener('click', function handleClick() {
        container1.replaceChildren();
    });


    // for card btn-2
    const container2 = document.getElementById('box-2');
    const btn2 = document.getElementById('btn-2');



    btn2.addEventListener('click', function handleClick() {
        container2.replaceChildren();
    });






}