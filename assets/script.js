/* ==========================================================================
   MASTER PLAN — SHARED SCRIPTS
   - current phase state (localStorage)
   - checklist persistence (localStorage)
   - phase-badge rendering on items with data-phase
   - phase-filter dimming for phase view
   ========================================================================== */

(function () {
  'use strict';

  const STORAGE_KEY_PHASE = 'master-plan:current-phase';
  const STORAGE_KEY_CHECK = 'master-plan:checks';

  // ---------- current phase ----------
  function getCurrentPhase() {
    const v = localStorage.getItem(STORAGE_KEY_PHASE);
    const n = parseInt(v, 10);
    return (n >= 1 && n <= 6) ? n : 1;
  }
  function setCurrentPhase(n) {
    localStorage.setItem(STORAGE_KEY_PHASE, String(n));
    document.dispatchEvent(new CustomEvent('phase-change', { detail: { phase: n } }));
  }

  // ---------- checklist state ----------
  function getChecks() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY_CHECK) || '{}');
    } catch (e) {
      return {};
    }
  }
  function setCheck(id, value) {
    const checks = getChecks();
    if (value) { checks[id] = true; } else { delete checks[id]; }
    localStorage.setItem(STORAGE_KEY_CHECK, JSON.stringify(checks));
  }

  // ---------- phase badge rendering ----------
  // Any element with data-phase="1" or data-phase="2,3,4" gets a badge inserted
  // at the start. If data-phase includes the current phase, badge is .current.
  function renderPhaseBadges() {
    const current = getCurrentPhase();
    const items = document.querySelectorAll('[data-phase]:not([data-phase-rendered])');
    items.forEach(el => {
      const phases = el.getAttribute('data-phase')
        .split(',').map(s => parseInt(s.trim(), 10)).filter(n => !isNaN(n));
      if (phases.length === 0) return;

      const label = phases.length === 1
        ? `P${phases[0]}`
        : `P${Math.min(...phases)}\u2013${Math.max(...phases)}`;

      const badge = document.createElement('span');
      badge.className = 'phase-badge' + (phases.includes(current) ? ' current' : '');
      badge.textContent = label;
      el.insertBefore(badge, el.firstChild);
      el.setAttribute('data-phase-rendered', '1');
    });
  }

  // ---------- phase filter (for phase view only) ----------
  // In phase view, dim items whose phases don't include the selected phase.
  function applyPhaseFilter(phase) {
    document.querySelectorAll('[data-phase]').forEach(el => {
      const phases = el.getAttribute('data-phase')
        .split(',').map(s => parseInt(s.trim(), 10));
      if (phases.includes(phase)) { el.classList.remove('phase-dim'); }
      else { el.classList.add('phase-dim'); }
    });
    // Update badge states too
    document.querySelectorAll('.phase-badge').forEach(b => {
      const parent = b.parentElement;
      if (!parent) return;
      const phases = (parent.getAttribute('data-phase') || '')
        .split(',').map(s => parseInt(s.trim(), 10));
      if (phases.includes(phase)) { b.classList.add('current'); }
      else { b.classList.remove('current'); }
    });
  }

  // ---------- status bar renderer ----------
  // Any page with <div id="status-bar"></div> gets the standard status bar.
  function renderStatusBar(options = {}) {
    const host = document.getElementById('status-bar');
    if (!host) return;

    const phase = getCurrentPhase();
    const showViewLinks = options.showViewLinks !== false;
    const pathPrefix = options.pathPrefix || '';

    const phaseSelector = `
      <span class="current-phase">Current phase: <strong>Phase ${phase}</strong></span>
      <select id="phase-selector" aria-label="Change current phase">
        ${[1,2,3,4,5,6].map(n =>
          `<option value="${n}"${n === phase ? ' selected' : ''}>Phase ${n}</option>`
        ).join('')}
      </select>
    `;

    const viewLinks = showViewLinks ? `
      <span class="view-links">
        <a href="${pathPrefix}views/phase.html">Phase view</a>
        <a href="${pathPrefix}views/roadmap.html">Roadmap</a>
        <a href="${pathPrefix}views/checklist.html">Checklist</a>
      </span>
    ` : '';

    host.className = 'status-bar';
    host.innerHTML = `<span>${phaseSelector}</span>${viewLinks}`;

    const sel = document.getElementById('phase-selector');
    if (sel) {
      sel.addEventListener('change', e => {
        setCurrentPhase(parseInt(e.target.value, 10));
        // Re-render badges to update current-state highlighting
        document.querySelectorAll('[data-phase-rendered]').forEach(el => {
          el.removeAttribute('data-phase-rendered');
          const badge = el.querySelector(':scope > .phase-badge');
          if (badge) badge.remove();
        });
        renderPhaseBadges();
        // If we're in phase view, re-apply filter
        if (document.body.classList.contains('phase-view')) {
          applyPhaseFilter(parseInt(e.target.value, 10));
        }
      });
    }
  }

  // ---------- checklist bindings ----------
  function bindChecklist() {
    const checks = getChecks();
    document.querySelectorAll('.check-item input[type="checkbox"]').forEach(cb => {
      const id = cb.getAttribute('data-id') || cb.id;
      if (!id) return;
      if (checks[id]) cb.checked = true;
      cb.addEventListener('change', () => setCheck(id, cb.checked));
    });
  }

  // ---------- init ----------
  function init() {
    renderPhaseBadges();
    bindChecklist();
  }

  // Public API
  window.MasterPlan = {
    getCurrentPhase,
    setCurrentPhase,
    getChecks,
    setCheck,
    renderPhaseBadges,
    applyPhaseFilter,
    renderStatusBar,
    init,
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
