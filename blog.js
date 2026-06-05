/* ============================================================================
   LULOLO blog index — tag filter (vanilla JS)
   Clicking a tag in the masthead filters the article grid; click again to clear.
   ============================================================================ */
(function () {
  var filter = document.getElementById('tagFilter');
  var cards  = document.querySelectorAll('#articleGrid .article-card');
  var label  = document.getElementById('gridLabel');
  var count  = document.getElementById('gridCount');
  if (!filter) return;

  var active = null;

  filter.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      var tag = link.getAttribute('data-tag');
      active = (active === tag) ? null : tag;

      // highlight the active tag
      filter.querySelectorAll('a').forEach(function (a) {
        a.classList.toggle('active', a.getAttribute('data-tag') === active);
      });

      // show/hide cards
      var shown = 0;
      cards.forEach(function (card) {
        var match = !active || card.getAttribute('data-tag') === active;
        card.style.display = match ? '' : 'none';
        if (match) shown++;
      });

      label.textContent = '// ' + (active ? active.toUpperCase() : 'LATEST');
      count.textContent = shown + ' posts';
    });
  });
})();
