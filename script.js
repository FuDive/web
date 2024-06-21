(() => {
  "use strict";

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const yearEl = document.querySelector("[data-year]");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const progressFill = document.querySelector("[data-progress-fill]");
  const progressValue = document.querySelector("[data-progress-value]");
  const PROGRESS_TARGET = 38;

  const setProgress = (value) => {
    if (progressFill) progressFill.style.width = `${value}%`;
    if (progressValue) progressValue.textContent = `${value}%`;
  };

  if (prefersReducedMotion) {
    setProgress(PROGRESS_TARGET);
  } else {
    requestAnimationFrame(() => {
      setTimeout(() => setProgress(PROGRESS_TARGET), 600);
    });
  }
})();
