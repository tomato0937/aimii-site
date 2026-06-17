const DESIGN_WIDTH = 1536;

function scheduleFrame(callback) {
  let frame = null;
  return () => {
    if (frame) cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => {
      frame = null;
      callback();
    });
  };
}

function updateDesktopScale() {
  const viewport = document.querySelector("[data-desktop-scale]");
  const site = viewport?.querySelector(".site");
  if (!viewport || !site) return;

  const viewportWidth = window.innerWidth;
  if (viewportWidth < 1024) {
    viewport.classList.remove("is-desktop-stage", "is-zoom", "is-transform");
    viewport.style.removeProperty("--desktop-scale");
    viewport.style.removeProperty("height");
    site.style.removeProperty("width");
    site.style.removeProperty("transform");
    return;
  }

  const scale = Math.min(1, viewportWidth / DESIGN_WIDTH);
  viewport.classList.add("is-desktop-stage");
  viewport.classList.toggle("is-zoom", CSS.supports("zoom", "1"));
  viewport.classList.toggle("is-transform", !CSS.supports("zoom", "1"));
  viewport.style.setProperty("--desktop-design-width", `${DESIGN_WIDTH}px`);
  viewport.style.setProperty("--desktop-scale", String(scale));
  site.style.width = `${DESIGN_WIDTH}px`;
  if (!CSS.supports("zoom", "1")) site.style.transform = `scale(${scale})`;
  viewport.style.height = `${site.getBoundingClientRect().height}px`;
}

function bindDesktopScale() {
  const run = scheduleFrame(updateDesktopScale);
  window.addEventListener("resize", run, { passive: true });
  window.addEventListener("orientationchange", run, { passive: true });
  if ("ResizeObserver" in window) {
    const site = document.querySelector("[data-desktop-scale] .site");
    if (site) new ResizeObserver(run).observe(site);
  }
  run();
}

function bindHeaderState() {
  const header = document.querySelector(".site-header");
  if (!header) return;
  const update = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
  update();
  window.addEventListener("scroll", update, { passive: true });
}

function bindRevealMotion() {
  const targets = [...document.querySelectorAll(".taste-loop-strip, .section, .cta-band, .footer")];
  if (!targets.length) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
    targets.forEach((target) => target.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.01, rootMargin: "0px 0px 18% 0px" },
  );
  targets.forEach((target, index) => {
    target.style.transitionDelay = `${Math.min(index, 6) * 35}ms`;
    observer.observe(target);
  });
}

function bindFaqInteraction() {
  document.querySelectorAll(".faq details").forEach((item) => {
    item.addEventListener("toggle", () => {
      if (!item.open) return;
      document.querySelectorAll(".faq details").forEach((other) => {
        if (other !== item) other.removeAttribute("open");
      });
    });
  });
}

function bindFaqCategories() {
  const categories = [...document.querySelectorAll("[data-faq-category]")];
  const items = [...document.querySelectorAll("[data-faq-item]")];
  if (!categories.length || !items.length) return;

  const openCategory = (category) => {
    categories.forEach((link) => {
      link.classList.toggle("is-active", link.dataset.faqCategory === category);
    });

    const target = items.find((item) => item.dataset.faqItem === category) || items[0];
    if (!target) return;
    items.forEach((item) => {
      if (item !== target) item.removeAttribute("open");
    });
    target.setAttribute("open", "");
    target.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  categories.forEach((categoryLink) => {
    categoryLink.addEventListener("click", (event) => {
      event.preventDefault();
      openCategory(categoryLink.dataset.faqCategory);
    });
  });
}

function bindStaticTabs() {
  const configs = [
    ["data-lens-tab", "data-lens-panel", ".product-lens"],
    ["data-diagnosis-tab", "data-diagnosis-panel", "[data-diagnosis-switcher]"],
    ["data-program-tab", "data-program-panel", "[data-program-switcher]"],
    ["data-about-tab", "data-about-panel", "[data-about-switcher]"],
    ["data-about-loop-tab", "data-about-loop-panel", "[data-about-loop-switcher]"],
    ["data-about-proof-tab", "data-about-proof-panel", "[data-about-proof-switcher]"],
    ["data-parent-care-tab", "data-parent-care-panel", "[data-parent-care-switcher]"],
    ["data-parent-command-tab", "data-parent-command-panel", "[data-parent-command-switcher]"],
    ["data-parent-week-tab", "data-parent-week-panel", "[data-parent-week-switcher]"],
    ["data-progress-tab", "data-progress-panel", "[data-progress-switcher]"],
  ];

  configs.forEach(([tabAttr, panelAttr, rootSelector]) => {
    document.querySelectorAll(rootSelector).forEach((root) => {
      const tabs = [...root.querySelectorAll(`[${tabAttr}]`)];
      const panels = [...root.querySelectorAll(`[${panelAttr}]`)];
      if (!tabs.length || !panels.length) return;

      const activate = (index) => {
        const safeIndex = Math.max(0, Math.min(index, tabs.length - 1));
        tabs.forEach((tab, tabIndex) => {
          const active = tabIndex === safeIndex;
          tab.classList.toggle("is-active", active);
          tab.setAttribute("aria-selected", active ? "true" : "false");
          tab.setAttribute("aria-pressed", active ? "true" : "false");
        });
        panels.forEach((panel, panelIndex) => {
          const active = panelIndex === safeIndex;
          panel.classList.toggle("is-active", active);
          if (active) panel.removeAttribute("hidden");
          else panel.setAttribute("hidden", "");
        });
      };

      tabs.forEach((tab) => {
        tab.addEventListener("click", () => activate(Number(tab.getAttribute(tabAttr) || 0)));
      });
      activate(0);
    });
  });
}

function bindHeroMotion() {
  const hero = document.querySelector(".hero");
  if (!hero || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const setMotion = (x, y) => {
    hero.style.setProperty("--hero-x", `${x * 10}px`);
    hero.style.setProperty("--hero-y", `${y * 8}px`);
    hero.style.setProperty("--hero-widget-x", `${x * 6}px`);
    hero.style.setProperty("--hero-widget-y", `${y * 6}px`);
    hero.style.setProperty("--hero-micro-x", `${x * 8}px`);
    hero.style.setProperty("--hero-micro-y", `${y * 10}px`);
  };
  hero.addEventListener("pointermove", (event) => {
    const rect = hero.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    requestAnimationFrame(() => setMotion(x, y));
  });
  hero.addEventListener("pointerleave", () => setMotion(0, 0));
}

function bindSystemCtaMotion() {
  const section = document.querySelector("[data-system-cta]");
  if (!section) return;
  const steps = [...section.querySelectorAll("[data-cta-step]")];
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let activeIndex = 0;
  const setActiveStep = (index) => {
    activeIndex = Math.max(0, Math.min(index, steps.length - 1));
    steps.forEach((step, stepIndex) => step.classList.toggle("is-active", stepIndex === activeIndex));
  };

  steps.forEach((step, index) => {
    step.addEventListener("pointerenter", () => setActiveStep(index));
    step.addEventListener("focusin", () => setActiveStep(index));
  });
  setActiveStep(0);

  if (reduceMotion) return;

  let timer = window.setInterval(() => setActiveStep((activeIndex + 1) % steps.length), 2600);
  section.addEventListener("pointerenter", () => {
    window.clearInterval(timer);
  });
  section.addEventListener("pointerleave", () => {
    section.style.removeProperty("--cta-x");
    section.style.removeProperty("--cta-y");
    section.style.removeProperty("--cta-r");
    timer = window.setInterval(() => setActiveStep((activeIndex + 1) % steps.length), 2600);
  });
  section.addEventListener("pointermove", (event) => {
    const rect = section.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    requestAnimationFrame(() => {
      section.style.setProperty("--cta-x", `${(x * 16).toFixed(1)}px`);
      section.style.setProperty("--cta-y", `${(y * 12).toFixed(1)}px`);
      section.style.setProperty("--cta-r", `${(x * 1.2).toFixed(2)}deg`);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  bindDesktopScale();
  bindHeaderState();
  bindRevealMotion();
  bindFaqInteraction();
  bindFaqCategories();
  bindStaticTabs();
  bindHeroMotion();
  bindSystemCtaMotion();
});
