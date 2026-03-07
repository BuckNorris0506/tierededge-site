(() => {
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add('show');
      io.unobserve(entry.target);
    }
  }, { threshold: 0.18 });

  revealEls.forEach((el) => io.observe(el));
})();
