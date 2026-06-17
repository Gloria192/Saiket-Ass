document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('themeToggle');
  const form = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

  themeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('light-theme');
    const isLight = document.documentElement.classList.contains('light-theme');
    themeToggle.textContent = isLight ? '☀️' : '🌙';
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const name = formData.get('name').trim();
    const email = formData.get('email').trim();
    const message = formData.get('message').trim();

    if (!name || !email || !message) {
      formStatus.textContent = 'Please complete all fields before sending.';
      return;
    }

    formStatus.textContent = 'Message sent successfully. I will reply soon!';
    form.reset();
  });
});
