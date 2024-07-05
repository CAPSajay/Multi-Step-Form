const inputOne = document.querySelector(".inpForm");
const stepNumbers = document.getElementById("numbers");
const modeBtn = document.querySelector(".modeBtn");
const modeText = document.getElementById("p1");
const modeText2 = document.getElementById("p2");
const stepCheck = document.querySelector(".stepCheck");
const nextBtn = document.querySelector(".nextStepBtn");
const stepParent = document.querySelector(".stepCont");
const mainStep = document.querySelectorAll(".steps");
const info1 = document.querySelector(".info1");
const info2 = document.querySelector(".info2");
const addOns = document.querySelectorAll(".top");
const tickBtn = document.querySelector(".tick");
const backBtn = document.querySelector(".backBtn");
const errorMsg = document.querySelector(".error");
const allInputs = document.querySelectorAll(".inpForm");

const isPageValid = function () {
  const input1 = document.getElementById("input1").value.trim();
  const input2 = document.getElementById("input2").value.trim();
  const input3 = document.getElementById("input3").value.trim();

  return input1 !== "" && input2 !== "" && input3 !== "";
};

const stepIsSelected = function (el) {
  el.style.backgroundColor = "lightblue";
  el.style.color = "Black";
};

// inputOne.addEventListener("click", () => {
//   stepNumbers.style.backgroundColor = "lightblue";
//   stepNumbers.style.color = "Black";
// });

// window.addEventListener("load", () => {
//   //stepIsSelected(stepNumbers);
// });

//👉👉moving on to next step by clicking next-step button
let currentEl = stepCheck;
let currentPage = info1;
let referencePage = [];
let referenceStep = [];

nextBtn.addEventListener("click", () => {
  //⭐when clicked it should show back-button in order to move to previous page

  //⭐changing the step functionality
  if (currentEl.classList.contains("selStep")) {
    currentEl.classList.remove("selStep");
    currentPage.classList.add("hidden");
    let nextStep = currentEl.parentElement.nextElementSibling.firstElementChild;
    // let nextStep =
    //   currentPage.hasChildNodes("inpForm") && inputOne.value === ""
    //     ? currentEl
    //     : currentEl.parentElement.nextElementSibling.firstElementChild;

    console.log(currentEl.textContent);

    console.log(nextStep);
    currentEl = nextStep;

    currentEl.classList.add("selStep");
    referenceStep = [currentEl];

    if (currentEl.textContent === "1") {
      backBtn.classList.add("hidden");
    } else {
      backBtn.classList.remove("hidden");
    }

    //⭐changing next button into confirm button in last page for check outs
    if (currentEl.textContent === "4") {
      nextBtn.textContent = "Confirm";
      nextBtn.style.backgroundColor = " hsl(243, 100%, 62%)";
    }

    //⭐changing the page functionality
    let nextPage = document.querySelector(`.info${currentEl.textContent}`);
    nextPage.classList.remove("hidden");
    currentPage.classList.add("hidden");

    console.log(nextPage);
    // allInputs.forEach((inp) => {
    //   if (inp) {
    //     if (inp.value === "") {
    //       err.classList.remove("hidden");
    //     }
    //     if (inp.value !== "") {
    //       err.classList.add("hidden");
    //     }
    //   }
    // });
    //nextPage.classList.add("hidden");
    currentPage = nextPage;
    referencePage = [currentPage];
    return referencePage;
  }
});

//👉👉moving back to a step by clicking go-back button
backBtn.addEventListener("click", () => {
  referencePage[referencePage.length - 1];

  //⭐changing the step functionality
  const currentStep = referenceStep[0];
  currentStep.classList.remove("selStep");
  const prevStep =
    currentStep.parentElement.previousElementSibling.firstElementChild;
  currentEl = prevStep; //inorder to make the step move back and forth
  referenceStep = [prevStep];
  prevStep.classList.add("selStep");

  //⭐changing the page functionality
  let refCurrentPage = referencePage[0];
  refCurrentPage.classList.add("hidden");
  //console.log("current page:", refCurrentPage);
  let BackPage = document.querySelector(`.info${referenceStep[0].textContent}`);
  BackPage.classList.remove("hidden");
  referencePage = [BackPage];
  //console.log("Back page:", BackPage);
  currentPage = BackPage;

  if (referenceStep[0].textContent !== "4") {
    nextBtn.textContent = "Next Page";
    nextBtn.style.backgroundColor = "hsl(213, 96%, 18%)";
  }

  if (referenceStep[0].textContent === "1") {
    backBtn.classList.add("hidden");
  }
});

//👉👉monthly and yearly toggling
modeBtn.addEventListener("click", () => {
  modeBtn.classList.toggle("active");
  if (modeBtn.classList.contains("active")) {
    modeText2.style.color = "darkblue";
    modeText.style.color = "lightgray";
  } else {
    modeText2.style.color = "lightgray";
    modeText.style.color = "darkblue";
  }
});

//clicking button in page three
addOns.forEach((opt) => {
  opt.addEventListener("click", (e) => {
    const target = e.target;
    console.log(target.firstElementChild.firstElementChild);
    target.firstElementChild.firstElementChild.classList.toggle("btnClicked");
  });
});
