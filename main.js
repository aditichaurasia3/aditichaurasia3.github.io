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
