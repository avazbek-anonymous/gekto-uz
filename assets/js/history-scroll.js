(function () {
  let io = null;

  window.initHistoryScroll = function () {
    if (io) { io.disconnect(); io = null; }

    const root = document.querySelector(".history-scroll");
    if (!root) return;

    const rail = root.querySelector(".history-rail");
    const yearBtns = Array.from(root.querySelectorAll(".history-year"));
    const panels = Array.from(root.querySelectorAll(".history-panel"));
    const steps  = Array.from(root.querySelectorAll(".history-step"));

    const isMobile = window.matchMedia("(max-width: 991px)").matches;

    if (isMobile) {
      panels.forEach(p => p.classList.add("is-active"));
      return;
    }

    if (!rail || !yearBtns.length || !panels.length || !steps.length) return;

    const stepByYear = new Map(steps.map(s => [s.dataset.year, s]));

    function setActive(year) {
      yearBtns.forEach(b => b.classList.toggle("active", b.dataset.year === year));
      panels.forEach(p => p.classList.toggle("is-active", p.dataset.year === year));

      const idx = steps.findIndex(s => s.dataset.year === year);
      const prog = (idx <= 0) ? 0 : (idx / (steps.length - 1));
      rail.style.setProperty("--progress", (prog * 100).toFixed(2) + "%");
    }

    yearBtns.forEach(btn => {
      btn.onclick = () => {
        const s = stepByYear.get(btn.dataset.year);
        if (s) s.scrollIntoView({ behavior: "smooth", block: "center" });
      };
    });

    io = new IntersectionObserver((entries) => {
      const visible = entries.filter(e => e.isIntersecting);
      if (!visible.length) return;

      visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      setActive(visible[0].target.dataset.year);
    }, {
      rootMargin: "-35% 0px -45% 0px",
      threshold: [0.25, 0.5, 0.75]
    });

    steps.forEach(s => io.observe(s));
    setActive(steps[0].dataset.year);
  };
})();
