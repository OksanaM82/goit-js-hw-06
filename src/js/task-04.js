const counterValue = {
  value: 0,

  decrement() {
    this.value -= 1;
  },
  increment() {
    this.value += 1;
  },
};
const decrementButton = document.querySelector(
  'button[data-action ="decrement"]'
);
const incrementButton = document.querySelector(
  'button[data-action ="increment"]'
);
const valueCount = document.querySelector('[id="value"]');
decrementButton.addEventListener("click", function () {
  counterValue.decrement();
  valueCount.textContent = counterValue.value;
});

incrementButton.addEventListener("click", function () {
  counterValue.increment();
  valueCount.textContent = counterValue.value;
});

    
