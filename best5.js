function addToCart(name, button) {
    const cart = document.getElementById("cart");
  
    // variable er nam j kono kicu dewa jabe
    const li = document.createElement("li");
    li.classList.add("selected");
    li.innerHTML = `${name}`;
  
    const cartLeng = document.querySelectorAll(".selected");
    if (cartLeng.length < 5) {
      cart.appendChild(li);
    } else {
      alert("You can not select more than 5");
      return;
    }
    //   button.disabled = true;
    button.setAttribute("disabled", true);
  }
  
  function calculate() {
    const perPlayer = document.getElementById("perPlayer").value;
    const cartLeng = document.querySelectorAll(".selected");
    const total = document.getElementById("total");
    total.innerHTML = `${parseFloat(perPlayer) * cartLeng.length}`;
  }
  
  function calculateTotal() {
    const coachFee = document.getElementById("coachFee").value || 0;
    const managerFee = document.getElementById("managerFee").value || 0;
    const total = document.getElementById("total").innerText || 0;
    const subtotal = document.getElementById("subtotal");
  
    subtotal.innerHTML = `${
      parseFloat(total) + parseFloat(coachFee) + parseFloat(managerFee)
    }`;
  }