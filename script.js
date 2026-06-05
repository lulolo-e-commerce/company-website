/* ============================================================================
   LULOLO — site interactions (vanilla JS, no dependencies)
   1. Code showcase tabs (Rust / Scala / Go)
   2. Mobile nav toggle
   ============================================================================ */

// 1. ---- Code showcase tabs ----
(function () {
  var tabs = document.querySelectorAll('#codeTabs .code-tab');
  var panels = document.querySelectorAll('.code-panel');

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      var lang = tab.getAttribute('data-lang');

      // toggle active tab
      tabs.forEach(function (t) { t.classList.remove('active'); });
      tab.classList.add('active');

      // show matching panel, hide the rest
      panels.forEach(function (panel) {
        panel.hidden = panel.getAttribute('data-lang') !== lang;
      });
    });
  });
})();

// 2. ---- Mobile nav toggle ----
(function () {
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');
  if (!toggle || !links) return;

  toggle.addEventListener('click', function () {
    links.classList.toggle('open');
  });

  // close the menu after tapping a link
  links.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () { links.classList.remove('open'); });
  });
})();
