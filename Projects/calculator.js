function numdisonscreen(num) {

    calc.screen.value += num;
}

var a,b;
var oprt ="";

function Arithmetic(opr) {
    

    if (opr == "+") {
        a = calc.screen.value ; 
        calc.screen.value="";
        oprt="+";

        calc.screen.value = parseFloat(a) + parseFloat(a);

    }
    else if (opr == "-") {
        a = calc.screen.value ;
        calc.screen.value=""; 
        oprt="-"; 

        calc.screen.value = parseFloat(a) - parseFloat(a) ;
        
    }
    else if (opr == "*") {
        a = calc.screen.value ;
        calc.screen.value=""; 
        oprt="*";

        calc.screen.value = parseFloat(a) * parseFloat(a) ;
 
    }
    else if (opr == "/") {
        a = calc.screen.value ; 
        oprt="/";
        calc.screen.value="";

        calc.screen.value = parseFloat(a) / parseFloat(a);
 
    }
    else if (opr == "%") {
        a = calc.screen.value ; 
        oprt="%";
        calc.screen.value="";

        calc.screen.value = parseFloat(a) % parseFloat(a) ;
    }
    //alert(oprt);
    else if (opr == "=") {
        //alert("Equall.." + oprt);
        b = calc.screen.value ; 
        if(oprt=="+")
        {
            calc.screen.value = parseFloat(a)+parseFloat(b);
        }
        else if(oprt=="-")
        {
            calc.screen.value = parseFloat(a)-parseFloat(b);
        }
        else if(oprt=="*")
        {
            calc.screen.value = parseFloat(a)*parseFloat(b);
        }
        else if(oprt=="/")
        {
            calc.screen.value = parseFloat(a)/parseFloat(b);
        }
        else if(oprt == "%")
        {
            calc.screen.value = parseFloat(a) % parseFloat(b);
        }
    }
    
}