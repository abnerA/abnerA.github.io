const btnClick = document.getElementById('btnModal');
const modal = document.getElementById('tvesModal');
const closeModal = document.getElementById('close');

btnClick.addEventListener('click', () => {
    modal.classList.toggle('new');
})

closeModal.addEventListener('click', () => {
    modal.classList.remove('new');
})