function calcular(){
    let value = document.getElementById("value").value;
    let percentage = document.getElementById("percentage").value;

    if (value == "" || percentage == ""){
        alert("Please, fill out both fields!")
        return
    }

    let result = (value * percentage) / 100;
    document.getElementById("result").innerText = `Result: ${result}%`;
}