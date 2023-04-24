const openBtn = document.getElementById('open-btn');
const modalContainer = document.getElementById('modal-container');
const closeBtn = document.getElementById('close-bth');

// Event Listeners

openBtn.addEventListener('click', () => {
  modalContainer.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
  modalContainer.style.display = 'none';
});

window.addEventListener('click', e => {
  if (e.target === modalContainer) {
    modalContainer.style.display = 'none';
  }
});
