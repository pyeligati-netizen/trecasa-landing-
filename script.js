// ===== Simple USP slider =====
const track = document.querySelector('.track');
const cards = document.querySelectorAll('.card');
const prev = document.querySelector('.arrow.left');
const next = document.querySelector('.arrow.right');

let index = 0;
function updateSlider() {
  const cardWidth = cards[0].getBoundingClientRect().width + 18; // gap
  track.style.transform = `translateX(${-index * cardWidth}px)`;
}
if (next) next.addEventListener('click', () => {
  index = Math.min(index + 1, Math.max(0, cards.length - 3));
  updateSlider();
});
if (prev) prev.addEventListener('click', () => {
  index = Math.max(0, index - 1);
  updateSlider();
});
window.addEventListener('resize', updateSlider);
updateSlider();

// ===== Client Stories expand/collapse =====
document.querySelectorAll('.story').forEach(story => {
  const btn = story.querySelector('.toggle-story');
  const extra = story.querySelector('.story-extra');
  btn.addEventListener('click', () => {
    const isOpen = extra.classList.toggle('open');
    btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    btn.textContent = isOpen ? 'Hide Story' : 'View Full Story';
    // Lazy load images inside .visual-flow when opened
    if (isOpen) {
      extra.querySelectorAll('img[loading="lazy"]').forEach(img => {
        // (If you later want to swap data-src → src, add here)
      });
    }
    // Smooth scroll to opened section
    if (isOpen) extra.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// ===== Simple form handler (no backend yet) =====
document.querySelector('.lead-form')?.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Submitted! (We will connect shortly.)\n\nNext: wire this form to Google Sheets/Email or Netlify forms.');
});
