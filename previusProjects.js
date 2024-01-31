const openBtn = document.getElementById("openModal")
const closeBtn = document.getElementById("closeModal")
const modal = document.getElementById("modal")

openBtn.addEventListener("click", () => {
    modal.classList.add("open");
    modal.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
    modal.classList.remove("open");
    modal.style.display = "none"
});