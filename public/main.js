// Copy email
document.querySelectorAll('[data-copy]').forEach((btn) => {
  btn.addEventListener('click', async () => {
    const text = btn.getAttribute('data-copy');
    try {
      await navigator.clipboard.writeText(text);
      btn.textContent = 'Copied';
    } catch {
      window.location.href = `mailto:${text}`;
      return;
    }
    setTimeout(() => { btn.textContent = 'Copy'; }, 1800);
  });
});

// Persona tabs (WAI-ARIA tabs pattern)
const tabs = [...document.querySelectorAll('[role="tab"]')];
function selectTab(tab, focus = false) {
  tabs.forEach((t) => {
    const on = t === tab;
    t.setAttribute('aria-selected', String(on));
    t.tabIndex = on ? 0 : -1;
    document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
  });
  if (focus) tab.focus();
}
tabs.forEach((tab, i) => {
  tab.addEventListener('click', () => selectTab(tab));
  tab.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') selectTab(tabs[(i + 1) % tabs.length], true);
    if (e.key === 'ArrowLeft') selectTab(tabs[(i - 1 + tabs.length) % tabs.length], true);
  });
});

// Writing sample filters
const filters = [...document.querySelectorAll('[data-filter]')];
const clips = [...document.querySelectorAll('.clip')];
filters.forEach((f) => {
  f.addEventListener('click', () => {
    const type = f.dataset.filter;
    filters.forEach((x) => {
      const on = x === f;
      x.classList.toggle('is-active', on);
      x.setAttribute('aria-pressed', String(on));
    });
    clips.forEach((c) => { c.hidden = type !== 'all' && c.dataset.type !== type; });
  });
});

// Footer year
const y = document.querySelector('[data-year]');
if (y) y.textContent = new Date().getFullYear();
