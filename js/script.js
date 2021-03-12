const date_picker_element = document.querySelector(".date-picker");
const selected_date_element = document.querySelector(
  ".date-picker .selected-date"
);
const dates_element = document.querySelector(".date-picker .dates");
const mth_element = document.querySelector(".date-picker .dates .month .mth");
const next_mth_element = document.querySelector(
  ".date-picker .dates .month .next-mth"
);
const prev_mth_element = document.querySelector(
  ".date-picker .dates .month .prev-mth"
);
const days_element = document.querySelector(".date-picker .dates .days");

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();

let selectedDate = date;
let selectedDay = day;
let selectedMonth = month;
let selectedYear = year;

mth_element.textContent = months[month] + " " + year;

selected_date_element.textContent = formatDate(date);
selected_date_element.dataset.value = selectedDate;

populateDates();

// EVENT LISTENERS
date_picker_element.addEventListener("click", toggleDatePicker);
next_mth_element.addEventListener("click", goToNextMonth);
prev_mth_element.addEventListener("click", goToPrevMonth);

// FUNCTIONS
function toggleDatePicker(e) {
  if (!checkEventPathForClass(e.path, "dates")) {
    dates_element.classList.toggle("active");
  }
}

function goToNextMonth(e) {
  month++;
  if (month > 11) {
    month = 0;
    year++;
  }
  mth_element.textContent = months[month] + " " + year;
  populateDates();
}

function goToPrevMonth(e) {
  month--;
  if (month < 0) {
    month = 11;
    year--;
  }
  mth_element.textContent = months[month] + " " + year;
  populateDates();
}

function populateDates(e) {
  days_element.innerHTML = "";
  let amount_days = 31;

  if (month == 1) {
    amount_days = 28;
  }

  for (let i = 0; i < amount_days; i++) {
    const day_element = document.createElement("div");
    day_element.classList.add("day");
    day_element.textContent = i + 1;

    if (
      selectedDay == i + 1 &&
      selectedYear == year &&
      selectedMonth == month
    ) {
      day_element.classList.add("selected");
    }

    day_element.addEventListener("click", function () {
      selectedDate = new Date(year + "-" + (month + 1) + "-" + (i + 1));
      selectedDay = i + 1;
      selectedMonth = month;
      selectedYear = year;
      let price = 0;
      selected_date_element.textContent = formatDate(selectedDate);
      selected_date_element.dataset.value = selectedDate;

      populateDates();
    });

    days_element.appendChild(day_element);
  }
}

// HELPER FUNCTIONS
function checkEventPathForClass(path, selector) {
  for (let i = 0; i < path.length; i++) {
    if (path[i].classList && path[i].classList.contains(selector)) {
      return true;
    }
  }

  return false;
}
function formatDate(d) {
  let day = d.getDate();
  if (day < 10) {
    day = "0" + day;
  }

  let month = d.getMonth() + 1;
  if (month < 10) {
    month = "0" + month;
  }

  let year = d.getFullYear();

  return day + " / " + month + " / " + year;
}

let numbers = document.getElementById("box");
let numbersTwo = document.getElementById("box2");
let numbersThree = document.getElementById("box3");
let numbersFour = document.querySelector(".box");
let numbersFive = document.querySelector(".box2");
let numbersSix = document.querySelector(".box3");

for (i = 0; i < 100; i++) {
  var span = document.createElement("span");
  span.textContent = i;
  numbers.appendChild(span);
}

for (i = 0; i < 100; i++) {
  var span = document.createElement("span");
  span.textContent = i;
  numbersTwo.appendChild(span);
}

for (i = 0; i < 100; i++) {
  var span = document.createElement("span");
  span.textContent = i;
  numbersThree.appendChild(span);
}

var num = numbers.getElementsByTagName("span");
var numone = numbersTwo.getElementsByTagName("span");
var numTwo = numbersThree.getElementsByTagName("span");
var index = 0;
var indexOne = 0;
var indexTwo = 0;

document.getElementById("date").addEventListener("click", () => {
  dateEnter = document.getElementById("date").getAttribute("data-value");
  var myDate = new Date(dateEnter);
  var myDay = myDate.getDay();
  if (myDay == 6 || myDay == 0) {
    price = 799;
  } else {
    price = 699;
  }
  console.log(myDay);
  console.log(myDate);
});

function nextNum() {
  num[index].style.display = "none";
  index = (index + 1) % num.length;
  num[index].style.display = "initial";

  for (let i = 0; i < 100; i++) {
    if (num[index].textContent == parseInt(i)) {
      document.getElementById("price-1").textContent = parseInt(i * 699);
      document.getElementById("noadult").value = num[index].textContent;

      pricenum1 = document.getElementById("price-1").textContent;
      pricenum2 = document.getElementById("price-2").textContent;
      pricenum3 = document.getElementById("price-3").textContent;
      document.getElementById("total").value =
        parseInt(pricenum1) + parseInt(pricenum2) + parseInt(pricenum3);

      console.log(price1);
    }
  }
}

function nextNumVip() {
  num[index].style.display = "none";
  index = (index + 1) % num.length;
  num[index].style.display = "initial";

  for (let i = 0; i < 100; i++) {
    if (num[index].textContent == parseInt(i)) {
      document.getElementById("price-1").textContent = parseInt(i * 799);

      document.getElementById("noadult").value = num[index].textContent;

      price2 = document.getElementById("price-2").textContent;
      priceTwo2 = document.getElementById("price-1").textContent;
      priceTwo3 = document.getElementById("price-3").textContent;
      totalOne = parseInt(priceTwo2) + parseInt(price2) + parseInt(priceTwo3);

      document.getElementById("total").value = totalOne;
    }
  }
}

function nextNumChild() {
  numone[indexOne].style.display = "none";
  indexOne = (indexOne + 1) % numone.length;
  numone[indexOne].style.display = "initial";

  for (let i = 0; i < 100; i++) {
    if (numone[indexOne].textContent == parseInt(i)) {
      document.getElementById("price-2").textContent = parseInt(i * 599);
      document.getElementById("nochild").value = numone[indexOne].textContent;

      price2 = document.getElementById("price-2").textContent;
      priceTwo2 = document.getElementById("price-1").textContent;
      priceTwo3 = document.getElementById("price-3").textContent;
      totalOne = parseInt(priceTwo2) + parseInt(price2) + parseInt(priceTwo3);

      document.getElementById("total").value = totalOne;
      console.log(price2);
    }
  }
}
function nextNumChildVip() {
  numone[indexOne].style.display = "none";
  indexOne = (indexOne + 1) % numone.length;
  numone[indexOne].style.display = "initial";

  for (let i = 0; i < 100; i++) {
    if (numone[indexOne].textContent == parseInt(i)) {
      document.getElementById("price-2").textContent = parseInt(i * 699);
      document.getElementById("nochild").value = numone[indexOne].textContent;

      price2 = document.getElementById("price-2").textContent;
      priceTwo2 = document.getElementById("price-1").textContent;
      priceTwo3 = document.getElementById("price-3").textContent;
      totalOne = parseInt(priceTwo2) + parseInt(price2) + parseInt(priceTwo3);

      document.getElementById("total").value = totalOne;
    }
  }
}

function nextNumSen() {
  numTwo[indexTwo].style.display = "none";
  indexTwo = (indexTwo + 1) % numTwo.length;
  numTwo[indexTwo].style.display = "initial";

  for (let i = 0; i < 100; i++) {
    if (numTwo[indexTwo].textContent == parseInt(i)) {
      document.getElementById("price-3").textContent = parseInt(i * 499);
      document.getElementById("nosr").value = numTwo[indexTwo].textContent;

      price2 = document.getElementById("price-2").textContent;
      priceTwo2 = document.getElementById("price-1").textContent;
      priceTwo3 = document.getElementById("price-3").textContent;
      totalOne = parseInt(priceTwo2) + parseInt(price2) + parseInt(priceTwo3);

      document.getElementById("total").value = totalOne;
    }
  }
}

function nextNumSenVip() {
  numTwo[indexTwo].style.display = "none";
  indexTwo = (indexTwo + 1) % numTwo.length;
  numTwo[indexTwo].style.display = "initial";

  for (let i = 0; i < 100; i++) {
    if (numTwo[indexTwo].textContent == parseInt(i)) {
      document.getElementById("price-3").textContent = parseInt(i * 599);

      document.getElementById("nosr").value = numTwo[indexTwo].textContent;

      price2 = document.getElementById("price-2").textContent;
      priceTwo2 = document.getElementById("price-1").textContent;
      priceTwo3 = document.getElementById("price-3").textContent;
      totalOne = parseInt(priceTwo2) + parseInt(price2) + parseInt(priceTwo3);

      document.getElementById("total").value = totalOne;
    }
  }
}

function prevNum() {
  num[index].style.display = "none";
  index = (index - 1 + num.length) % num.length;
  num[index].style.display = "initial";

  for (let i = 0; i < 100; i++) {
    if (num[index].textContent == parseInt(i)) {
      document.getElementById("price-1").textContent = parseInt(i * 699);
      document.getElementById("noadult").value = num[index].textContent;

      price2 = document.getElementById("price-2").textContent;
      priceTwo2 = document.getElementById("price-1").textContent;
      priceTwo3 = document.getElementById("price-3").textContent;
      totalOne = parseInt(priceTwo2) + parseInt(price2) + parseInt(priceTwo3);

      document.getElementById("total").value = totalOne;
    }
  }
}

function prevNumVip() {
  num[index].style.display = "none";
  index = (index - 1 + num.length) % num.length;
  num[index].style.display = "initial";

  for (let i = 0; i < 100; i++) {
    if (num[index].textContent == parseInt(i)) {
      document.getElementById("price-1").textContent = parseInt(i * 799);

      document.getElementById("noadult").value = num[index].textContent;

      price2 = document.getElementById("price-2").textContent;
      priceTwo2 = document.getElementById("price-1").textContent;
      priceTwo3 = document.getElementById("price-3").textContent;
      totalOne = parseInt(priceTwo2) + parseInt(price2) + parseInt(priceTwo3);

      document.getElementById("total").value = totalOne;
    }
  }
}

function prevNumChild() {
  numone[indexOne].style.display = "none";
  indexOne = (indexOne - 1 + numone.length) % numone.length;
  numone[indexOne].style.display = "initial";

  for (let i = 0; i < 100; i++) {
    if (numone[indexOne].textContent == parseInt(i)) {
      document.getElementById("price-2").textContent = parseInt(i * 599);
      document.getElementById("nochild").value = numone[indexOne].textContent;

      price2 = document.getElementById("price-2").textContent;
      priceTwo2 = document.getElementById("price-1").textContent;
      priceTwo3 = document.getElementById("price-3").textContent;
      totalOne = parseInt(priceTwo2) + parseInt(price2) + parseInt(priceTwo3);

      document.getElementById("total").value = totalOne;
    }
  }
}

function prevNumChildVip() {
  numone[indexOne].style.display = "none";
  indexOne = (indexOne - 1 + numone.length) % numone.length;
  numone[indexOne].style.display = "initial";

  for (let i = 0; i < 100; i++) {
    if (numone[indexOne].textContent == parseInt(i)) {
      document.getElementById("price-2").textContent = parseInt(i * 699);
      document.getElementById("nochild").value = numone[indexOne].textContent;
      price2 = document.getElementById("price-2").textContent;
      priceTwo2 = document.getElementById("price-1").textContent;
      priceTwo3 = document.getElementById("price-3").textContent;
      totalOne = parseInt(priceTwo2) + parseInt(price2) + parseInt(priceTwo3);

      document.getElementById("total").value = totalOne;
    }
  }
}

function prevNumSen() {
  numTwo[indexTwo].style.display = "none";
  indexTwo = (indexTwo - 1 + numTwo.length) % numTwo.length;
  numTwo[indexTwo].style.display = "initial";

  for (let i = 0; i < 100; i++) {
    if (numTwo[indexTwo].textContent == parseInt(i)) {
      document.getElementById("price-3").textContent = parseInt(i * 499);

      document.getElementById("nosr").value = numTwo[indexTwo].textContent;

      price2 = document.getElementById("price-2").textContent;
      priceTwo2 = document.getElementById("price-1").textContent;
      priceTwo3 = document.getElementById("price-3").textContent;
      totalOne = parseInt(priceTwo2) + parseInt(price2) + parseInt(priceTwo3);

      document.getElementById("total").value = totalOne;
    }
  }
}

function prevNumSenVip() {
  numTwo[indexTwo].style.display = "none";
  indexTwo = (indexTwo - 1 + numTwo.length) % numTwo.length;
  numTwo[indexTwo].style.display = "initial";

  for (let i = 0; i < 100; i++) {
    if (numTwo[indexTwo].textContent == parseInt(i)) {
      document.getElementById("price-3").textContent = parseInt(i * 599);

      document.getElementById("nosr").value = numTwo[indexTwo].textContent;

      price2 = document.getElementById("price-2").textContent;
      priceTwo2 = document.getElementById("price-1").textContent;
      priceTwo3 = document.getElementById("price-3").textContent;
      totalOne = parseInt(priceTwo2) + parseInt(price2) + parseInt(priceTwo3);

      document.getElementById("total").value = totalOne;
    }
  }
}

let Vip = document.getElementById("vip");
let Gen = document.getElementById("gen");
let adultNext = document.getElementById("adultnext");
let childNext = document.getElementById("childnext");
let srNext = document.getElementById("srnext");
let adultPrev = document.getElementById("adultprev");
let childPrev = document.getElementById("childprev");
let srPrev = document.getElementById("srprev");
let type = document.querySelector(".type");

Vip.addEventListener("click", () => {
  Vip.classList.add("bg-color");
  Gen.classList.remove("bg-color");
  Gen.setAttribute("style", "background-color: transparent; ");

  adultNext.removeAttribute("onclick");
  adultNext.setAttribute("onclick", "nextNumVip()");
  adultPrev.removeAttribute("onclick");
  adultPrev.setAttribute("onclick", "prevNumVip()");

  childNext.removeAttribute("onclick");
  childNext.setAttribute("onclick", "nextNumChildVip()");
  childPrev.removeAttribute("onclick");
  childPrev.setAttribute("onclick", "prevNumChildVip()");

  srNext.removeAttribute("onclick");
  srNext.setAttribute("onclick", "nextNumSenVip()");
  srPrev.removeAttribute("onclick");
  srPrev.setAttribute("onclick", "prevNumSenVip()");
  type.textContent = "VIP";
});

Gen.addEventListener("click", () => {
  Gen.classList.add("bg-color");
  Vip.classList.remove("bg-color");
  Gen.removeAttribute("style");

  adultNext.removeAttribute("onclick");
  adultNext.setAttribute("onclick", "nextNum()");
  adultPrev.removeAttribute("onclick");
  adultPrev.setAttribute("onclick", "prevNum()");

  childNext.removeAttribute("onclick");
  childNext.setAttribute("onclick", "nextNumChild()");
  childPrev.removeAttribute("onclick");
  childPrev.setAttribute("onclick", "prevNumChild()");

  srNext.removeAttribute("onclick");
  srNext.setAttribute("onclick", "nextNumSen()");
  srPrev.removeAttribute("onclick");
  srPrev.setAttribute("onclick", "prevNumSen()");
  type.textContent = "General";
});
