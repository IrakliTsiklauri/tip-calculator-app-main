let billAmount = document.querySelector(".bill");
let custom = document.querySelector(".custom");
let numberOfPeople = document.querySelector(".people");
const buttons = document.querySelectorAll(".btn");
const tipAmount = document.querySelector(".tip-amount");
const tipTotal = document.querySelector(".tip-total");
const resetBtn = document.querySelector(".reset-btn");

function calculateTip(billAmount, tipPersentage, people) {
  let tipValue = (billAmount * (tipPersentage / 100)) / people;
  let tip = Math.floor(tipValue * 100) / 100;
  tip = tip.toFixed(2);
  let totalAmount = (tipValue * people + billAmount) / people;
  totalAmount = totalAmount.toFixed(2);
  tipAmount.innerText = `$${tip}`;
  tipTotal.innerText = `$${totalAmount}`;
}

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let tipValue = e.target.innerText;
    tipValue = tipValue.substr(0, tipValue.length - 1);

    if (billAmount.value === "") return;
    if (numberOfPeople.value === "") numberOfPeople.value = 1;

    calculateTip(
      parseFloat(billAmount.value),
      parseInt(tipValue),
      parseInt(numberOfPeople.value)
    );
  });
});

custom.addEventListener("blur", (e) => {
  if (billAmount.value === "") {
    resetEveryThing();
    return;
  }

  calculateTip(
    parseFloat(billAmount.value),
    parseFloat(e.target.value),
    parseInt(numberOfPeople.value || 1)
  );
});

resetBtn.addEventListener("click", resetEveryThing);

function resetEveryThing() {
  tipAmount.innerHTML = "$0.00";
  tipTotal.innerHTML = "$0.00";
  billAmount.value = "";
  numberOfPeople.value = "";
  custom.value = "";
}
