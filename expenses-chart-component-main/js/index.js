const chartmon = document.querySelector(".chartmon");
const charttue = document.querySelector(".charttue");
const chartwed = document.querySelector(".chartwed");
const chartthu = document.querySelector(".chartthu");
const chartfri = document.querySelector(".chartfri");
const chartsat = document.querySelector(".chartsat");
const chartsun = document.querySelector(".chartsun");

const num1 = document.querySelector(".num1");
const num2 = document.querySelector(".num2");
const num3 = document.querySelector(".num3");
const num4 = document.querySelector(".num4");
const num5 = document.querySelector(".num5");
const num6 = document.querySelector(".num6");
const num7 = document.querySelector(".num7");

chartmon.addEventListener("click", (e) => {
  num1.classList.add("visible");
});
charttue.addEventListener("click", (e) => {
  num2.classList.add("visible");
});
chartwed.addEventListener("click", (e) => {
  num3.classList.add("visible");
});
chartthu.addEventListener("click", (e) => {
  num4.classList.add("visible");
});
chartfri.addEventListener("click", (e) => {
  num5.classList.add("visible");
});
chartsat.addEventListener("click", (e) => {
  num6.classList.add("visible");
});
chartsun.addEventListener("click", (e) => {
  num7.classList.add("visible");
});
