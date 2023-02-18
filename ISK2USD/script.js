function convert() {
    var amount = document.getElementById("amount").value;
    var from = document.getElementById("from").value;
    var to = document.getElementById("to").value;
  
    if (from === "USD" && to === "ISK") {
      var result = amount * 129.85;
      document.getElementById("resultLabel").innerHTML = amount + " USD = " + result.toFixed(2) + " ISK";
    } else if (from === "ISK" && to === "USD") {
      var result = amount / 129.85;
      document.getElementById("resultLabel").innerHTML = amount + " ISK = " + result.toFixed(2) + " USD";
    } else {
      document.getElementById("resultLabel").innerHTML = "Please select valid currencies";
    }
  }

  