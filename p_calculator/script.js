function showAlert(message, type = "danger") {
    const alertBox = document.getElementById("alertBox");
    alertBox.innerHTML = `
    <div class="alert alert-${type} alert-dismissible fade show" role="alert">
      ${message}
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  `;
}

function calculate() {
    let value = parseFloat(document.getElementById("value").value);
    let percentage = parseFloat(document.getElementById("percentage").value);
    let type = document.getElementById("calcType").value;

    if (isNaN(value) || isNaN(percentage)) {
        showAlert("Please fill in both fields!", "warning");
        return;
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
            result = value - (value * percentage) / 100
            document.getElementById("result").innerText = `${value} decreased by ${percentage}% is: ${result}`;
            break;

        default:
            showAlert("Please select a calculation type!", "danger");
    }
}