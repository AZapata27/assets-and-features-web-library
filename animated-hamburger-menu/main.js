const buttonMenu = document.getElementById("buttonMenu");
let isOpen = false;

buttonMenu.addEventListener("click", () => {

  if (isOpen) {
    buttonMenu.classList.remove("menu-open");
    isOpen = false;
  } else {
    buttonMenu.classList.add("menu-open");
    isOpen = true;
  }
  
});
