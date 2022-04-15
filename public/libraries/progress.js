const bar = document.querySelector(".bar");
const total = 100;
let increment = total/numSlides;
let solved = increment;

const ruleOfThree = (num1, num2) => {
  const proportion = (num2 * 100) / num1;
  return Math.round(proportion * 10) / 10;
};

const updateBarLength = () => {
  const percentage = ruleOfThree(total, solved);
  bar.style.width = percentage + "%";
};

function progressInc(){
  if (solved < total) {
    solved+=increment;
    updateBarLength();
  }
};

function progressDec(){
  if (solved > 0) {
    solved-=increment;
    updateBarLength();
  }
};