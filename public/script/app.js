
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

function abreNavbar() {
    const line1 = document.querySelector('.line1');
	const line2 = document.querySelector('.line2');
	const line3 = document.querySelector('.line3');
    
    const secondaryNav = document.querySelector('.secondary_nav');
    const hamburgerOn = secondaryNav.classList.contains('mostrarNav');
    
    if(hamburgerOn) {
        secondaryNav.classList.remove('mostrarNav');
        line1.classList.toggle('line1-rotate');
        line2.classList.toggle('line2-rotate'); 
        line3.classList.toggle('line3-rotate');
    } else {
        secondaryNav.classList.add('mostrarNav');
        line1.classList.toggle('line1-rotate');
        line2.classList.toggle('line2-rotate'); 
        line3.classList.toggle('line3-rotate'); 
    }
}

let hamburgerNav = document.getElementById('hamburgerNav');

hamburgerNav.addEventListener('click', () => {
    abreNavbar();
})