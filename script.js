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

  const root = document.documentElement;
  const themeToggle = document.querySelector("[data-theme-toggle]");

  if (themeToggle) {
    const applyTheme = (theme) => {
      root.setAttribute("data-theme", theme);
      try {
        localStorage.setItem("fudive-theme", theme);
      } catch (e) {
        /* storage unavailable */
      }
      const meta = document.querySelector('meta[name="theme-color"]');
      if (meta) {
        meta.content = theme === "dark" ? "#0d0d0d" : "#ffffff";
      }
      themeToggle.setAttribute(
        "aria-label",
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
      );
    };

    themeToggle.addEventListener("click", () => {
      applyTheme(root.getAttribute("data-theme") === "dark" ? "light" : "dark");
    });

    applyTheme(root.getAttribute("data-theme") === "dark" ? "dark" : "light");
  }
})();
