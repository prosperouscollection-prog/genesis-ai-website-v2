/* Yes We CNA — small progressive enhancements. Everything works without this file. */
(function () {
  'use strict';

  // 1. Application form: show only the start dates that match the chosen class.
  var classField = document.querySelector('[data-class-choice]');
  var dateSelect = document.querySelector('[data-start-date]');
  if (classField && dateSelect) {
    var update = function () {
      var checked = classField.querySelector('input:checked');
      var want = checked ? checked.value : '';
      var first = null;
      Array.prototype.forEach.call(dateSelect.options, function (opt) {
        var group = opt.getAttribute('data-class');
        if (!group) return;
        var show = !want || want === 'Either' || group === want;
        opt.hidden = !show;
        opt.disabled = !show;
        if (show && !first) first = opt;
      });
      if (dateSelect.selectedOptions[0] && dateSelect.selectedOptions[0].disabled && first) {
        dateSelect.value = first.value;
      }
    };
    classField.addEventListener('change', update);
    update();
  }

  // 2. Mobile menu: close the panel after a link is chosen.
  var menu = document.querySelector('.menu-toggle');
  if (menu) {
    menu.addEventListener('click', function (e) {
      if (e.target.closest('a')) menu.removeAttribute('open');
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') menu.removeAttribute('open');
    });
  }

  // 3. Product page (theme): keep the price in step with the chosen variant.
  var variantSelect = document.querySelector('[data-variant-select]');
  var priceOut = document.querySelector('[data-variant-price]');
  if (variantSelect && priceOut) {
    variantSelect.addEventListener('change', function () {
      var opt = variantSelect.selectedOptions[0];
      if (opt && opt.dataset.price) priceOut.textContent = opt.dataset.price;
    });
  }

  // 4. Mark the current page in the nav (preview only; the theme uses link.current).
  var here = location.pathname.replace(/index\.html$/, '');
  document.querySelectorAll('.nav__links a, .menu-toggle__panel a').forEach(function (a) {
    var href = a.getAttribute('href') || '';
    if (!a.hasAttribute('aria-current') && href && here.endsWith(href.replace(/^\.\//, '')) && href !== '/') {
      a.setAttribute('aria-current', 'page');
    }
  });
})();
