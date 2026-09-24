// ===========================================================
// IRONCLAD — CONFIGURAÇÃO DO ASSISTENTE
// Preencha somente estes 2 campos para conectar o assistente web.
// ===========================================================
const CHATBOT_TITLE = "Assistente IronClad";
const CHATBOT_SRC = "COLE_AQUI_O_SRC_DO_CHATBOT";

const root = document.documentElement;
const themeTrigger = document.getElementById('themeTrigger');
const themeMenu = document.getElementById('themeMenu');
const themeIcon = document.getElementById('themeIcon');
const themeLabel = document.getElementById('themeLabel');
const themeMeta = document.querySelector('meta[name="theme-color"]');

const themeCopy = {
  auto: { icon: '◐', label: 'Auto' },
  light: { icon: '☀', label: 'Claro' },
  dark: { icon: '☾', label: 'Escuro' }
};

function autoTheme() {
  const hour = new Date().getHours();
  return hour >= 6 && hour < 18 ? 'light' : 'dark';
}

function applyTheme(mode) {
  const resolved = mode === 'auto' ? autoTheme() : mode;
  root.dataset.themeMode = mode;
  root.dataset.theme = resolved;
  themeIcon.textContent = themeCopy[mode].icon;
  themeLabel.textContent = themeCopy[mode].label;
  themeMeta.setAttribute('content', resolved === 'dark' ? '#07111f' : '#f5f9ff');
}

const savedTheme = localStorage.getItem('ironclad-theme') || 'auto';
applyTheme(savedTheme);
setInterval(() => {
  if ((localStorage.getItem('ironclad-theme') || 'auto') === 'auto') applyTheme('auto');
}, 60000);

themeTrigger.addEventListener('click', () => {
  const open = themeMenu.classList.toggle('open');
  themeTrigger.setAttribute('aria-expanded', String(open));
});

themeMenu.querySelectorAll('[data-theme-choice]').forEach(btn => {
  btn.addEventListener('click', () => {
    const mode = btn.dataset.themeChoice;
    localStorage.setItem('ironclad-theme', mode);
    applyTheme(mode);
    themeMenu.classList.remove('open');
    themeTrigger.setAttribute('aria-expanded', 'false');
  });
});

document.addEventListener('click', e => {
  if (!e.target.closest('.theme-control')) {
    themeMenu.classList.remove('open');
    themeTrigger.setAttribute('aria-expanded', 'false');
  }
});

const header = document.querySelector('.site-header');
const progress = document.getElementById('scrollProgress');
function onScroll() {
  header.classList.toggle('scrolled', window.scrollY > 18);
  const max = document.documentElement.scrollHeight - innerHeight;
  const pct = max > 0 ? (scrollY / max) * 100 : 0;
  progress.style.width = `${pct}%`;
}
addEventListener('scroll', onScroll, { passive: true });
onScroll();

const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
menuToggle.addEventListener('click', () => {
  const open = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});
mainNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  mainNav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
}));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px' });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.getElementById('year').textContent = new Date().getFullYear();

// Chatbot modal
const chatbotModal = document.getElementById('chatbotModal');
const chatbotFrame = document.getElementById('chatbotFrame');
const chatbotPlaceholder = document.getElementById('chatbotPlaceholder');
const chatbotTitle = document.getElementById('chatbotTitle');

function configureChatbot() {
  chatbotTitle.textContent = CHATBOT_TITLE || 'Assistente IronClad';
  chatbotFrame.title = CHATBOT_TITLE || 'Assistente IronClad';
  const validSrc = CHATBOT_SRC && !CHATBOT_SRC.includes('COLE_AQUI') && /^https?:\/\//i.test(CHATBOT_SRC);
  if (validSrc) {
    chatbotFrame.src = CHATBOT_SRC;
    chatbotFrame.style.display = 'block';
    chatbotPlaceholder.style.display = 'none';
  } else {
    chatbotFrame.style.display = 'none';
    chatbotPlaceholder.style.display = 'grid';
  }
}
configureChatbot();

function openChatbot() {
  chatbotModal.classList.add('open');
  chatbotModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}
function closeChatbot() {
  chatbotModal.classList.remove('open');
  chatbotModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}
document.querySelectorAll('[data-open-chatbot]').forEach(el => el.addEventListener('click', openChatbot));
document.querySelectorAll('[data-close-chatbot]').forEach(el => el.addEventListener('click', closeChatbot));
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeChatbot(); });
