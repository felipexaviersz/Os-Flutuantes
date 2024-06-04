document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('customAlert');
    modal.style.display = 'block';

    const closeModal = () => {
        modal.style.display = 'none';
    };

    const closeButton = document.querySelector('.close-button');
    closeButton.addEventListener('click', closeModal);
});
