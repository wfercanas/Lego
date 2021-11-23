const footer = document.querySelector('footer');
const modal = document.querySelector('.modal');
const exitButton = document.querySelector('.modal-close');

const openModal = ({ target }) => {
  modal.classList.remove('hidden');
  modal.classList.add('visible');
};

const closeModal = ({ target }) => {
  modal.classList.remove('visible');
  modal.classList.add('hidden');
};

footer.addEventListener('click', openModal);
exitButton.addEventListener('click', closeModal);
