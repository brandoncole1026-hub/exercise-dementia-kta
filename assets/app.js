(() => {
  const navButton = document.querySelector('.mobile-toggle');
  const nav = document.querySelector('.site-nav');
  if (navButton && nav) {
    navButton.addEventListener('click', () => {
      const isOpen = navButton.getAttribute('aria-expanded') === 'true';
      navButton.setAttribute('aria-expanded', String(!isOpen));
      navButton.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
      nav.classList.toggle('open', !isOpen);
    });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && nav.classList.contains('open')) {
        nav.classList.remove('open'); navButton.setAttribute('aria-expanded','false'); navButton.focus();
      }
    });
  }
  const cards = Array.from(document.querySelectorAll('.exercise-card'));
  if (cards.length) {
    const state = { category: 'all', level: 'all', query: '' };
    const count = document.querySelector('#exercise-count');
    const empty = document.querySelector('#no-exercise-results');
    const search = document.querySelector('#exercise-search');
    const apply = () => {
      let visible = 0;
      cards.forEach(card => {
        const show = (state.category === 'all' || state.category === card.dataset.category) &&
          (state.level === 'all' || state.level === card.dataset.level) &&
          (card.dataset.search || '').includes(state.query);
        card.hidden = !show;
        if (show) visible++;
      });
      count.textContent = `Showing ${visible} of ${cards.length} exercise examples`;
      empty.hidden = visible !== 0;
    };
    document.querySelectorAll('[data-filter-group]').forEach(group => {
      group.querySelectorAll('button').forEach(btn => btn.addEventListener('click', () => {
        const key = group.dataset.filterGroup;
        state[key] = btn.dataset.filter;
        group.querySelectorAll('button').forEach(b => b.setAttribute('aria-pressed', String(b === btn)));
        apply();
      }));
    });
    search?.addEventListener('input', () => { state.query = search.value.trim().toLowerCase(); apply(); });
    document.querySelector('#reset-exercise-filters')?.addEventListener('click', () => {
      state.category = 'all'; state.level = 'all'; state.query = '';
      search.value = '';
      document.querySelectorAll('[data-filter-group]').forEach(group => group.querySelectorAll('button').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.filter === 'all'))));
      apply(); search.focus();
    });
    apply();
  }
  document.querySelector('#print-handout')?.addEventListener('click', () => window.print());
})();
