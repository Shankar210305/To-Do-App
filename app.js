let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click", function () {
  if (inp.value === "") {
    alert("you must write something");
  } else {
    let li = document.createElement("li");
    li.innerText = inp.value;
    ul.appendChild(li);
    let span = document.createElement("span");
    span.innerText = "\u00d7";
    li.appendChild(span);
  }
  inp.value = "";
  saveData();
});

ul.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);
function saveData() {
  localStorage.setItem("data", ul.innerText);
}
