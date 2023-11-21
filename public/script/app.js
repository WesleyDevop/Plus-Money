let openModal = document.querySelector(".btn_adicionar");
let modalAdicionar = document.querySelector(".modal_adicionar");

console.log(openModal)

openModal.addEventListener("click", () => {
    modalAdicionar.style.display = "flex";
})