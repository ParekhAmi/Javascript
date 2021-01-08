function numdisonscreen(num) {

    calc.screen.value = num;
}



function Arithmetic(opr) {
    var a = calc.n1.value;
    var b = calc.n2.value;
    var c;
    if (opr == "+") {
        c = parseInt(a) + parseInt(b);

    }
    if (opr == "-") {
        c = parseInt(a) - parseInt(b);

    }
    if (opr == "*") {
        c = parseInt(a) * parseInt(b);

    }
    if (opr == "/") {
        c = parseInt(a) / parseInt(b);

    }
    if (opr == "%") {
        c = parseInt(a) % parseInt(b);

    }
    calc.ans.value = c;
}