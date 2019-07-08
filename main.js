
var visible = false;
//$(".box").css("margin-left","38%");
$(document).ready(function () {
    $(".box1").hide();
    $(".result-button").click(function () {

        if (visible == true) {
            $(".box1").hide(500);
            visible = false;


        }
        else {
            $(".box1").show(600);
            visible = true;

        }
    });

    $(document).ready(function () {
        if ((visible == false && visible1 == 0)) {

        }
    });

    $(document).ready(function () {
        if (visible == false) {

        }
    });



    /* $(".box1").css("display", "none");
     $(".result-button").click(function () {
         if (visible == 0) {
             visible = 1;
             $(".box1").css("display", "block");
         }
         else if (visible == 1) {
             visible = 0;
             $(".box1").css("display", "none");
         }
     })*/
});


//-------------------------------CALCULATOR----------
var screen = '';
var before = '';
const output = document.querySelector(".screen");
const operation = document.getElementsByClassName("o");
const resulti = document.getElementsByClassName("resulti");
var op = '';
var i = 0;
var j = 0;
var k = 0;
var resultHidden = '';
function insert(x) {
    k++;
    if (k > 25) {
        alert("nombre trés grand");
        setTimeout(reset(), 1000);
        k = 0;
        return;
    }
    if (x == '=') {
        k = 0;
        //console.log(op);
        var temp = output.innerHTML.split(op);
        //console.log(op);
        switch (op) {
            case '+': result = temp.reduce((y, z) => parseFloat(y) + parseFloat(z)); break;
            case '*': result = temp.reduce((y, z) => parseFloat(y) * parseFloat(z)); break;
            case '/': result = temp.reduce((y, z) => parseFloat(y) / parseFloat(z)); break;
            case '%': result = temp.reduce((y, z) => parseFloat(y) % parseFloat(z)); break;
            case '-': result = temp.reduce((y, z) => parseFloat(y) - parseFloat(z)); break;
            default: break;
        }
        output.innerHTML = result.toFixed(2);

        resultHidden = resultHidden + x + result;
        //console.log(resultHidden);
        x = '';


        resulti[j].innerHTML = resultHidden;
        j++;
        if (j == 6) {
            j = 0;
        }

    }
    //console.log(before);
    if (before == '.' && x == '.') {
        return;
    }

    var screen = output.innerHTML;
    output.innerHTML = screen + x;
    screen = output.innerHTML;
    resultHidden = screen;
    before = x;
    //console.log(before);
    //console.log(screen);
    if (x == '+' || x == '*' || x == '-' || x == '/' || x == '%') {
        op = x;
    }
    //console.log(op);
}

function reset() {
    output.innerHTML = '';
    k = 0;
}
/*--------------------gradiant-------------------------*/
const buttons = document.getElementsByClassName("b");
console.log(body);
function changegradientdigit() {
    var digitGradient = document.getElementById("digit-gradient-type").value;
    var digitGradientColor1 = document.getElementById("first-color-input2").value;
    var digitGradientColor2 = document.getElementById("second-color-input2").value;
    grad = "linear-gradient(" + digitGradient + ", " + digitGradientColor1 + ", " + digitGradientColor2 + ")";
    for (var i = 0; i < 18; i++) {
        buttons[i].style.backgroundImage = grad;
    }

}
function changegradientglobal() {
    var globalGradient = document.getElementById("global-gradient-type").value;
    var globalGradientColor1 = document.getElementById("FirstColor1").value;
    var globalGradientColor2 = document.getElementById("SecondColor1").value;
    grad2 = "linear-gradient(" + globalGradient + ", " + globalGradientColor1 + ", " + globalGradientColor2 + ")";
    var body = document.getElementById("body").style.backgroundImage = grad2;

}

const results = document.getElementsByClassName("resulti");
function resetResult() {
    for (var i = 0; i < 6; i++) {
        resulti[i].innerHTML = "";
    }
}



var visible1 = 0;
$(document).ready(); {
    $(".box2").hide();

    $(".costumize").click(function () {
        if (visible1 == 0) {
            visible1 = 1;
            $(".box2").show(500);

        }
        else {
            visible1 = 0;
            $(".box2").hide(500);

        }
    })
}