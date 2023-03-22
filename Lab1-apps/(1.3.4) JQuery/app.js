$(document).ready(function () {
    $("#add").click(function () {
        $("#operator_sign").html("+");
    });
    $("#subtract").click(function () {
        $("#operator_sign").html("-");
    });
    $("#divide").click(function () {
        $("#operator_sign").html("/");
    });
    $("#multiply").click(function () {
        $("#operator_sign").html("*");
    });
    $("#remainder").click(function () {
        $("#operator_sign").html("%");
    });

    $("#equals").click(function () {
        var firstNumber = parseInt($("#firstNumber").val());
        var secondNumber = parseInt($("#secondNumber").val());
        var operator = $("#operator_sign").html();
        var result;

        switch (operator) {
            case "+":
                result = firstNumber + secondNumber;
                break;
            case "-":
                result = firstNumber - secondNumber;
                break;
            case "*":
                result = firstNumber * secondNumber;
                break;
            case "/":
                result = firstNumber / secondNumber;
                break;
            case "%":
                result = firstNumber % secondNumber;
                break;
            default:
                result = "Invalid operator";
        }

        $("#result").html(result);
    });
});
