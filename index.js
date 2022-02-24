const modal = document.getElementById("modal");
const btn = document.getElementById("btn");
const monster = document.querySelector(".monster");

const modalHide = () => {
  if (localStorage.getItem("agreed")) {
    modal.style.display = "none";
    monster.style.display = "none";
  }
};
const handleLocalStorage = (e) => {
  e.preventDefault();
  localStorage.setItem("agreed", "true");
  modalHide();
};

modalHide();
btn.addEventListener("click", handleLocalStorage);
