const toggleThemeBtn = document.getElementById("toggleTheme");

toggleThemeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

function nextPage(id) {
  document.querySelectorAll(".page").forEach(page => page.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function prevPage(id) {
  document.querySelectorAll(".page").forEach(page => page.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function goToPage(id) {
  document.querySelectorAll(".page").forEach(page => page.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function printCV() {
  window.print();
}
