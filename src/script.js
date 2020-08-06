//Global variables
const speedInput = document.getElementById("kmh");
const tempInput = document.getElementById("temp");
const aircoInput = document.getElementById("ac");
const wheelsizeInput = document.getElementById("wheelsize");

const inputElements = document.getElementsByClassName("calc-input");

const logo = document.getElementById("logo");
const linksBar = document.getElementById("links-bar");

const subscribeButton = document.querySelector(".subscribe-button");

//Initializing the values
speedInput.value = 70;
tempInput.value = -10;
aircoInput.value = "off";
wheelsizeInput.value = 19;

//Transforming header when scrolling
window.onscroll = () => {
  if (document.scrollingElement.scrollTop > 30) {
    logo.classList.add("logo-squashed");
    linksBar.classList.add("links-bar-away");
  } else {
    logo.classList.remove("logo-squashed");
    linksBar.classList.remove("links-bar-away");
  }
};

//Calculator functions
let changeValue = (e) => {
  e.target.value = e.target.value;

  const CalcCar1 = car1.find(
    (Object) =>
      Object.ac == aircoInput.value &&
      Object.temp == tempInput.value &&
      Object.wheelsize == wheelsizeInput.value
  );

  const CalcCar2 = car2.find(
    (Object) =>
      Object.ac == aircoInput.value &&
      Object.temp == tempInput.value &&
      Object.wheelsize == wheelsizeInput.value
  );

  const range1 = CalcCar1.hwy.find((Object) => Object.kmh == speedInput.value);
  const range2 = CalcCar2.hwy.find((Object) => Object.kmh == speedInput.value);

  document.querySelector(".car1").textContent = `${range1.kilometers} km`;

  document.querySelector(".car2").textContent = `${range2.kilometers} km`;
};

Array.from(inputElements).forEach((element) => {
  element.addEventListener("change", changeValue);
});

//Subscribe button alarm
subscribeButton.addEventListener("click", () => {
  alert("Thanks for trying this button! 😊");
});
