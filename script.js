const body = document.querySelector("#body");
const button = document.querySelector("#btn-submit");
const text = document.querySelector("#tag1");
const hexNums = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];
let oldColor = "#000000";
body.style.background = oldColor;
text.innerHTML = `Current background color is ${oldColor}`;

const randomAlphaNumStr = function () {
  let colorCode = "";
  for (let i = 0; i < 2; i++) {
    let temp = Math.floor(Math.random() * hexNums.length);
    colorCode += hexNums[temp];
  }
  return colorCode;
};

const generateHexCode = function () {
  let r = randomAlphaNumStr();
  let g = randomAlphaNumStr();
  let b = randomAlphaNumStr();

  const nestedFun = function () {
    if (oldColor === "#" + r + g + b) {
      generateHexCode();
    } else {
      return "#" + r + g + b;
    }
  };
  return nestedFun();
};

button.addEventListener("click", function () {
  oldColor = generateHexCode();
  body.style.background = oldColor;
  console.log(oldColor);
  text.innerHTML = `Current background color is ${oldColor}`;
});
