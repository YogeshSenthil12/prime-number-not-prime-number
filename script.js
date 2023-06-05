function checkNumber(){
    var inputValue = document.getElementById("inputValue").value;
    var checkInput = inputValue.trim().split(",");
    console.log(checkInput);
    var finalResult = document.querySelector(".finalResult");

    finalResult.innerHTML = "";

    if(inputValue.trim() === ""){
        var errorElement = document.createElement("h4");
        errorElement.style.color = "Red";
        errorElement.textContent = "Please enter atleast One Number.";
        finalResult.appendChild(errorElement);
        return;
    }
    var numbers = inputValue.split(",");

    numbers.forEach(number => {
        var trimNumber = number.trim();
        if(trimNumber!== ""){
        var result = isPrime(parseInt(trimNumber)); 
        
        var resultText = result ? "Yes!" : "No!";
        var resultColor = result ? "Green" : "red";

        var resultElement = document.createElement("h3");
        resultElement.style.color = resultColor;
        resultElement.textContent = resultText + " " + trimNumber + " is" + (result ? " a prime number." : " not prime number.");

        finalResult.appendChild(resultElement);
        }
    });
}

function isPrime(number){
    if(number<2){
    return false;
    }

    for(var i=2; i<=Math.sqrt(number); i++){
        if(number % i=== 0){
            return false;
        }
    }
    return true;
}