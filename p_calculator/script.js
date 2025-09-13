function calcular() {
    let value = parseFloat(document.getElementById("value").value);
    let percentage = parseFloat(document.getElementById("percentage").value);
    let type = document.getElementById("calcType").value;

    if (isNaN(value) || isNaN(percentage)) {
        alert("Please fill in both fields!");
        return
    }

    let result;

    switch (type) {

        case "xOfY":
            result = (value * percentage) / 100;
            document.getElementById("result").innerText = `${percentage}% of ${value} is: ${result}`;
            break;

        case "xIsOfY":
            result = (value / percentage) * 100;
            document.getElementById("result").innerText = `${value} is ${result.toFixed(2)}% of ${percentage}`;
            break;


        case "increase":
            result = value + (value * percentage) / 100;
            document.getElementById("result").innerText = `${value} increased by ${percentage}% is: ${result}`;
            break;

        case "discount":
            result = value-(value * percentage) / 100
            document.getElementById("result").innerText = `${value} decreased by ${percentage}% is: ${result}`;
            break;

        default:
            alert("Please select a calculation type!")
    }
}