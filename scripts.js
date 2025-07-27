// Cookie Consent Banner
window.addEventListener('load', () => {
  const banner = document.getElementById('cookie-banner');
  const button = document.getElementById('accept-cookies');
  if (!localStorage.getItem('cookiesAccepted')) {
    banner.style.display = 'block';
  }

  button.addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', 'true');
    banner.style.display = 'none';
  });
});

// Basic form validation tracking (optional for GA4 events)
document.getElementById('contactForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  alert("Message sent! (This is a placeholder)");
  // TODO: Add GA4 event push here
});
