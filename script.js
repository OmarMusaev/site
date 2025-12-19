document.addEventListener("DOMContentLoaded", () => {
  const planetButton = document.querySelector(".planet-button");
  const planet = document.querySelector(".planet");
  const navToggle = document.querySelector(".nav-toggle");
  const navList = document.querySelector(".nav-list");

  if (planetButton && planet) {
    planetButton.addEventListener("click", () => {
      planet.animate(
        [
          { transform: "scale(1)", filter: "brightness(1)" },
          { transform: "scale(1.05)", filter: "brightness(1.1)" },
          { transform: "scale(0.96)", filter: "brightness(0.95)" },
          { transform: "scale(1)", filter: "brightness(1)" }
        ],
        {
          duration: 650,
          easing: "cubic-bezier(0.22, 1, 0.36, 1)"
        }
      );
    });
  }

  if (navToggle && navList) {
    navToggle.addEventListener("click", () => {
      const isOpen = navList.style.display === "flex";
      navList.style.display = isOpen ? "none" : "flex";
      navList.style.flexDirection = "column";
      navList.style.position = "absolute";
      navList.style.top = "3.25rem";
      navList.style.right = "1.5rem";
      navList.style.padding = "0.75rem 1rem";
      navList.style.borderRadius = "0.75rem";
      navList.style.background = "rgba(15, 23, 42, 0.97)";
      navList.style.border = "1px solid rgba(148, 163, 184, 0.3)";
      navList.style.gap = "0.5rem";
    });
  }
});

