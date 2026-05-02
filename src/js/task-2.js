const controls = document.querySelector("#controls");
const input = controls.querySelector("input");
const btnCreate = controls.querySelector('[data-action="render"]');
const btnDestroy = controls.querySelector('[data-action="destroy"]');
const boxes = document.querySelector("#boxes");

const handleCreate = (event) => {
  event = input.value;
  createBoxes(event);
};

const handleDestroyBoxes = (event) => {
  event.preventDefault();
  boxes.innerHTML = "";
};

btnCreate.addEventListener("click", handleCreate);
btnDestroy.addEventListener("click", handleDestroyBoxes);

const createBoxes = (amount) => {
  const elements = [];
  let size = 30;

  const randomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  };

  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = randomColor();
    div.style.margin = "4px";
    elements.push(div);
    size += 10;
  }
  boxes.append(...elements);
};
