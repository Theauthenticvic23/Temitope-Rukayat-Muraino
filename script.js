// =========================
// Mobile Menu Toggle
// =========================
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
}

// =========================
// Smooth Scroll for Nav Links
// =========================
document.querySelectorAll('.nav-links a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    navLinks.classList.remove('show'); // close menu on mobile after click
  });
});

// =========================
// Intersection Observer Reveal
// =========================
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  },
  { threshold: 0.15 }
);

sections.forEach(section => {
  section.classList.add('hidden');
  observer.observe(section);
});

// Scroll-to-top button
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


// =========================
// Lightbox for Gallery Images
// =========================
const galleryImages = document.querySelectorAll('.gallery-row img');
const lightbox = document.createElement('div');
lightbox.classList.add('lightbox');
document.body.appendChild(lightbox);

const lightboxImg = document.createElement('img');
lightbox.appendChild(lightboxImg);

galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    lightbox.classList.add('active');
    lightboxImg.src = img.src;
  });
});

lightbox.addEventListener('click', () => {
  lightbox.classList.remove('active');
});

// =========================
// Highlight Active Nav Link
// =========================
const navItems = document.querySelectorAll('.nav-links a');

function setActiveNav() {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    const sectionHeight = section.offsetHeight;
    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });

  navItems.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', setActiveNav);