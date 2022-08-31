// console.log("numbers project");
const items = [...document.querySelectorAll(".number")];

const updateCount = (el) => {
  // console.log(el);
  const value = parseInt(el.dataset.value);
  // const increment=Math.ceil(value/1000);
  const increment = 1;
  let initialValue = 0;
  const increaseCount = setInterval(() => {
    if (initialValue > value) {
      el.textContent = `${value}+`;
      clearInterval(increaseCount);
      return;
    }
    initialValue += increment;
    el.textContent = `${initialValue}+`;
  }, 1);
};

items.forEach((item) => {
  updateCount(item);
});

// console.log(increaseCount);
