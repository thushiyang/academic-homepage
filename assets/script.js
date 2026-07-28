const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}

const siteFeatures = window.SITE_FEATURES || {};

document.querySelectorAll("[data-feature]").forEach((element) => {
  const featureName = element.dataset.feature;
  const enabled = Boolean(siteFeatures[featureName]);

  element.hidden = !enabled;
  element.classList.toggle("feature-gated", !enabled);
});

document.querySelectorAll('a[aria-disabled="true"]').forEach((link) => {
  link.addEventListener("click", (event) => event.preventDefault());
});

const filterButtons = document.querySelectorAll("[data-filter]");
const publicationGroups = document.querySelectorAll("[data-category]");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.toggle("active", item === button));
    publicationGroups.forEach((group) => {
      const visible = filter === "all" || group.dataset.category === filter;
      group.classList.toggle("is-hidden", !visible);
    });
  });
});

const patentFilterButtons = document.querySelectorAll("[data-patent-filter]");
const patentGroups = document.querySelectorAll("[data-patent-category]");

patentFilterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.patentFilter;

    patentFilterButtons.forEach((item) => item.classList.toggle("active", item === button));
    patentGroups.forEach((group) => {
      const visible = filter === "all" || group.dataset.patentCategory === filter;
      group.classList.toggle("is-hidden", !visible);
    });
  });
});

const serviceFilterButtons = document.querySelectorAll("[data-service-filter]");
const serviceGroups = document.querySelectorAll("[data-service-category]");

serviceFilterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.serviceFilter;

    serviceFilterButtons.forEach((item) => item.classList.toggle("active", item === button));
    serviceGroups.forEach((group) => {
      const visible = filter === "all" || group.dataset.serviceCategory === filter;
      group.classList.toggle("is-hidden", !visible);
    });
  });
});

const projectFilterButtons = document.querySelectorAll("[data-project-filter]");
const projectGroups = document.querySelectorAll("[data-project-category]");

projectFilterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.projectFilter;

    projectFilterButtons.forEach((item) => item.classList.toggle("active", item === button));
    projectGroups.forEach((group) => {
      const visible = filter === "all" || group.dataset.projectCategory === filter;
      group.classList.toggle("is-hidden", !visible);
    });
  });
});

const projectToggle = document.querySelector("[data-toggle-projects]");
const projectsPanel = document.querySelector("[data-projects-panel]");

if (projectToggle && projectsPanel) {
  projectToggle.addEventListener("click", () => {
    const expanded = projectToggle.getAttribute("aria-expanded") === "true";
    projectToggle.setAttribute("aria-expanded", String(!expanded));
    projectToggle.textContent = expanded ? "More Projects" : "Less Projects";
    projectsPanel.classList.toggle("is-collapsed", expanded);
  });
}

document.querySelectorAll("[data-module-more]").forEach((button) => {
  const panel = button.nextElementSibling;

  if (!panel) {
    return;
  }

  button.addEventListener("click", () => {
    const expanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!expanded));
    button.textContent = expanded ? "More" : "Less";
    panel.classList.toggle("is-collapsed", expanded);
  });
});

document.querySelectorAll("[data-open-module-detail]").forEach((link) => {
  link.addEventListener("click", (event) => {
    const selector = link.getAttribute("href");

    if (!selector || !selector.startsWith("#")) {
      return;
    }

    const target = document.querySelector(selector);
    const panel = target ? target.closest("[data-module-detail]") : null;

    if (!target || !panel) {
      return;
    }

    event.preventDefault();
    const toggle = panel.previousElementSibling;
    panel.classList.remove("is-collapsed");

    if (toggle && toggle.matches("[data-module-more]")) {
      toggle.setAttribute("aria-expanded", "true");
      toggle.textContent = "Less";
    }

    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

const closeModal = (modal) => {
  if (!modal) {
    return;
  }

  modal.classList.add("is-hidden");
  document.body.classList.remove("modal-open");
};

document.querySelectorAll("[data-open-modal]").forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.getElementById(button.dataset.openModal);

    if (!modal) {
      return;
    }

    modal.classList.remove("is-hidden");
    document.body.classList.add("modal-open");
    const targetSelector = button.dataset.modalTarget;
    const sectionText = button.closest(".module-guide li > ul") ? button.textContent.trim().toLowerCase() : "";
    const sectionTarget = sectionText
      ? Array.from(modal.querySelectorAll("h2, h3, h4, strong")).find((heading) => {
        const headingText = heading.textContent.trim().toLowerCase();
        return headingText === sectionText || headingText.includes(sectionText);
      })
      : null;
    const target = targetSelector ? modal.querySelector(targetSelector) : sectionTarget;
    const closeButton = modal.querySelector(".modal-close");

    if (target) {
      window.requestAnimationFrame(() => {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    } else if (closeButton) {
      closeButton.focus();
    }
  });
});

document.querySelectorAll("[data-close-modal]").forEach((button) => {
  button.addEventListener("click", () => closeModal(button.closest(".modal")));
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") {
    return;
  }

  document.querySelectorAll(".modal:not(.is-hidden)").forEach((modal) => closeModal(modal));
});

const carousels = document.querySelectorAll("[data-research-carousel], [data-module-carousel]");

carousels.forEach((carousel) => {
  const track = carousel.querySelector("[data-carousel-track]");
  const slides = Array.from(track.children);
  const previous = carousel.querySelector("[data-carousel-prev]");
  const next = carousel.querySelector("[data-carousel-next]");
  const dotsContainer = carousel.querySelector("[data-carousel-dots]");
  let activeIndex = 0;

  if (!track || slides.length === 0 || !previous || !next || !dotsContainer) {
    return;
  }

  const dots = slides.map((_, index) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.setAttribute("aria-label", `Show item ${index + 1}`);
    dotsContainer.appendChild(dot);
    dot.addEventListener("click", () => goToSlide(index));
    return dot;
  });

  const updateDots = () => {
    dots.forEach((dot, index) => dot.classList.toggle("active", index === activeIndex));
  };

  const goToSlide = (index) => {
    activeIndex = (index + slides.length) % slides.length;
    track.scrollTo({ left: slides[activeIndex].offsetLeft - track.offsetLeft, behavior: "smooth" });
    updateDots();
  };

  previous.addEventListener("click", () => goToSlide(activeIndex - 1));
  next.addEventListener("click", () => goToSlide(activeIndex + 1));

  track.addEventListener("scroll", () => {
    const closest = slides.reduce((best, slide, index) => {
      const distance = Math.abs(slide.offsetLeft - track.offsetLeft - track.scrollLeft);
      return distance < best.distance ? { index, distance } : best;
    }, { index: activeIndex, distance: Infinity });
    activeIndex = closest.index;
    updateDots();
  }, { passive: true });

  updateDots();
});
