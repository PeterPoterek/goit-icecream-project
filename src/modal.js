(() => {
  const modalButtons = document.querySelectorAll('[data-modal-open]');
  const closeButtons = document.querySelectorAll('[data-modal-close]');
  
  modalButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modalId = button.getAttribute('data-modal-open');
      const modal = document.querySelector(`[data-modal="${modalId}"]`);
      if (modal) {
        modal.classList.remove('is-hidden');
      }
    });
  });

  closeButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modalId = button.getAttribute('data-modal-close');
      const modal = document.querySelector(`[data-modal="${modalId}"]`);
      if (modal) {
        modal.classList.add('is-hidden');
      }
    });
  });
})();
