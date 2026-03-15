// =============================================
// BEYOND PLASTIC — home-anim.js
// Bag decomposition animation controller
// =============================================

document.addEventListener('DOMContentLoaded', () => {
  const stages = [
    document.getElementById('stage1'),
    document.getElementById('stage2'),
    document.getElementById('stage3'),
    document.getElementById('stage4'),
  ];
  const dots    = document.querySelectorAll('.anim-dots .dot');
  const prevBtn = document.getElementById('animPrev');
  const nextBtn = document.getElementById('animNext');

  if (!stages[0]) return; // Not on home page

  let current = 0;
  let autoTimer;

  function showStage(index) {
    stages.forEach((s, i) => {
      if (i === index) {
        s.classList.remove('hidden');
        s.style.animation = 'none';
        void s.offsetWidth; // trigger reflow
        s.style.animation = 'stageIn 0.5s ease both';
      } else {
        s.classList.add('hidden');
      }
    });

    dots.forEach((d, i) => {
      d.classList.toggle('active', i === index);
    });

    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === stages.length - 1;
    current = index;
  }

  function next() {
    if (current < stages.length - 1) {
      showStage(current + 1);
    } else {
      // Loop back to start
      showStage(0);
    }
  }

  function prev() {
    if (current > 0) showStage(current - 1);
  }

  // Dot navigation
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const idx = parseInt(dot.dataset.stage);
      showStage(idx);
      resetAutoplay();
    });
  });

  nextBtn.addEventListener('click', () => {
    if (current < stages.length - 1) {
      next();
    } else {
      showStage(0);
    }
    nextBtn.disabled = false;
    resetAutoplay();
  });

  prevBtn.addEventListener('click', () => {
    prev();
    resetAutoplay();
  });

  // Auto-advance every 3.5 seconds
  function startAutoplay() {
    autoTimer = setInterval(() => {
      const nextIdx = (current + 1) % stages.length;
      showStage(nextIdx);
      nextBtn.disabled = false;
    }, 3500);
  }

  function resetAutoplay() {
    clearInterval(autoTimer);
    startAutoplay();
  }

  showStage(0);
  startAutoplay();
});
