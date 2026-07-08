document.addEventListener('DOMContentLoaded', function () {
  var cards = document.querySelectorAll('.exp-card');

  cards.forEach(function (card) {
    card.addEventListener('click', function () {
      var isOpen = card.classList.contains('open');
      cards.forEach(function (c) {
        c.classList.remove('open');
      });
      if (!isOpen) {
        card.classList.add('open');
      }
    });
  });
});

// Add this to js/main.js — toggles the code/output detail panel on project cards
document.querySelectorAll('.project-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const detail = document.getElementById(btn.dataset.target);
    const isOpen = detail.classList.toggle('open');
    btn.classList.toggle('open', isOpen);
    btn.querySelector('.btn-label').textContent = isOpen ? 'Hide code' : 'View code';
  });
});
