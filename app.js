// MOBILE MENU
const menuToggle = document.getElementById("menuToggle");
const mobileNav = document.getElementById("mobileNav");

menuToggle.addEventListener("click", () => {
  const isOpen = mobileNav.classList.toggle("active");

  menuToggle.setAttribute("aria-expanded", isOpen);
});

// CLOSE MENU WHEN LINK IS CLICKED
const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// PORTFOLIO FILTER
const filterButtons = document.querySelectorAll(".filter-btn");
const portfolioCards = document.querySelectorAll(".portfolio-card");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {

    // ACTIVE BUTTON
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;

    portfolioCards.forEach(card => {
      const category = card.dataset.category;

      if (filter === "all" || category === filter) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    });
  });
});

// STICKY HEADER EFFECT
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// SMOOTH SCROLL OFFSET FIX
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");

    if (targetId.length > 1) {
      e.preventDefault();

      const target = document.querySelector(targetId);

      if (target) {
        const headerOffset = 80;
        const targetPosition =
          target.getBoundingClientRect().top + window.pageYOffset;

        window.scrollTo({
          top: targetPosition - headerOffset,
          behavior: "smooth"
        });
      }
    }
  });
});