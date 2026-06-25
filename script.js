// DineIn OKC — tab navigation
(function () {
  var buttons = document.querySelectorAll('.tab-btn');
  var pages = document.querySelectorAll('.page');

  function showPage(pageName) {
    pages.forEach(function (page) {
      if (page.id === 'page-' + pageName) {
        page.classList.remove('hidden');
        page.querySelector('.page-scroll').scrollTop = 0;
      } else {
        page.classList.add('hidden');
      }
    });

    buttons.forEach(function (btn) {
      if (btn.getAttribute('data-page') === pageName) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      showPage(btn.getAttribute('data-page'));
    });
  });

  // Initialize on Featured
  showPage('featured');
})();
