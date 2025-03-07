function doAdd() {
    let input1 = Number(document.getElementById("input1").value);
    let input2 = Number(document.getElementById("input2").value);
    let output = String(input1 + input2);

    if (Number(output) < 0) {
        document.getElementById("output").style.color = "red";
    }
    else {
        document.getElementById("output").style.color = "black";
    }

    document.getElementById("output").innerHTML = output;
}

function doSub() {
    let input1 = Number(document.getElementById("input1").value);
    let input2 = Number(document.getElementById("input2").value);
    let output = String(input1 - input2);

    if (Number(output) < 0) {
        document.getElementById("output").style.color = "red";
    }
    else {
        document.getElementById("output").style.color = "black";
    }

    document.getElementById("output").innerHTML = String(input1 - input2);
}

function doMulti() {
    let input1 = Number(document.getElementById("input1").value);
    let input2 = Number(document.getElementById("input2").value);
    let output = String(input1 * input2);

    if (Number(output) < 0) {
        document.getElementById("output").style.color = "red";
    }
    else {
        document.getElementById("output").style.color = "black";
    }

    document.getElementById("output").innerHTML = String(input1 * input2);
}

function doDiv() {
    let input1 = Number(document.getElementById("input1").value);
    let input2 = Number(document.getElementById("input2").value);
    let output = String(input1 / input2);

    if (Number(output) < 0) {
        document.getElementById("output").style.color = "red";
    }
    else {
        document.getElementById("output").style.color = "black";
    }

    document.getElementById("output").innerHTML = String(input1 / input2);
}

function doPow() {
    let input1 = Number(document.getElementById("input1").value);
    let input2 = Number(document.getElementById("input2").value);

    let output = 1;
    for(let i = 0; i < input2; i++) {
        output = output * input1;
    }

    if (Number(output) < 0) {
        document.getElementById("output").style.color = "red";
    }
    else {
        document.getElementById("output").style.color = "black";
    }

    if (input1 == 0 && input2 == 0) {
        output = 0;
    }
    document.getElementById("output").innerHTML = String(output);
}

function doClear() {
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("output").innerHTML = "";
}

