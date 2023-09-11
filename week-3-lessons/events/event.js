function sayHi() {
    alert("hi");
  }
  
  let element = document.querySelector("#city");
  element.addEventListener("click", sayHi);
  
  
  function showTemp(event) {
    event.preventDefault();
    let textButton = document.querySelector("#buttonTemp");
    textButton.innerHTML = "It is 18 degrees";
    alert("It is 18 degrees");
  }
  
  let button = document.querySelector("#buttonTemp");
  button.addEventListener("click", showTemp);
  // Challenge 2
  // When the button is clicked, replace button label by ‘18 degrees’
  let showTempButton = document.querySelector("#buttonTemp");
  showTempButton.addEventListener("click", showTemp);