
function iniciaModal(modalID) {
    const modal = document.getElementById(modalID);
    
    if(modal) {
        modal.classList.add('mostrar');
        modal.addEventListener('click', (e) => {
        
        if(e.target.id == modalID) {
            modal.classList.remove('mostrar');
        }
    })
        
        const cancelButton = document.querySelector('.btn_cancel');
            cancelButton.addEventListener("click", () => {
            modal.classList.remove('mostrar')
        })
    }
}

let openModal = document.querySelector('.btn_adicionar');

openModal.addEventListener('click', () => {
    iniciaModal('modal_adicionar');
})
