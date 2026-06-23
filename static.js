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

function decorateMotionChildren(target) {
  const selectors = [
    ":scope > *",
    ":scope [data-premium-tilt]",
    ":scope .hero-point",
    ":scope .taste-loop-step",
    ":scope .lens-tab",
    ":scope .lens-proof",
    ":scope .diagnosis-process-step",
    ":scope .programs-plan-tab",
    ":scope .recommend-choice",
    ":scope .faq details",
    ":scope .faq-ref-category",
    ":scope .faq-ref-side-card",
    ":scope .faq-ref-concern",
    ":scope .p122-metric-cards > article",
    ":scope .p122-why-grid > article",
    ":scope .p122-proof-grid > article",
    ":scope .p122-feedback-grid > article",
  ];
  const candidates = [...target.querySelectorAll(selectors.join(","))];
  const seen = new Set();
  let index = 0;

  candidates.forEach((candidate) => {
    if (seen.has(candidate)) return;
    if (candidate.closest(".site-header")) return;
    if (candidate.closest(".footer-social-links")) return;
    if (candidate.closest(".hero") && target !== candidate.closest(".hero")) return;
    const parentReveal = candidate.parentElement?.closest(".motion-child");
    if (parentReveal && parentReveal !== target) return;

    seen.add(candidate);
    candidate.classList.add("motion-child");
    candidate.style.setProperty("--motion-index", String(Math.min(index, 9)));
    index += 1;
  });
}

function bindRevealMotion() {
  const targets = [
    ...document.querySelectorAll(
      ".hero, .faq-ref-hero, .faq-ref-category-grid, .faq-ref-main-section, .faq-ref-concerns, .faq-ref-cta, .taste-loop-strip, .section, .cta-band, .footer",
    ),
  ];
  if (!targets.length) return;

  targets.forEach((target, index) => {
    target.style.transitionDelay = `${Math.min(index, 6) * 32}ms`;
    decorateMotionChildren(target);
  });

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
    targets.forEach((target) => target.classList.add("is-visible"));
    return;
  }

  document.documentElement.classList.add("motion-ready");
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
  targets.forEach((target) => {
    if (target.matches(".hero, .faq-ref-hero")) {
      target.classList.add("is-visible");
      return;
    }
    observer.observe(target);
  });
}

function bindFaqInteraction() {
  document.querySelectorAll(".faq details").forEach((item) => {
    item.querySelector("summary")?.addEventListener("click", () => {
      if (item.open) return;
      document.querySelectorAll(".faq details").forEach((other) => {
        if (other !== item) other.removeAttribute("open");
      });
    });

    item.addEventListener("toggle", () => {
      item.classList.remove("is-opening");
      if (item.open) {
        void item.offsetWidth;
        item.classList.add("is-opening");
      }
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
    ["data-home-outcome-tab", "data-home-outcome-panel", "[data-home-outcome-switcher]"],
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
          panel.classList.remove("is-switching");
          if (active) {
            panel.removeAttribute("hidden");
            if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
              void panel.offsetWidth;
              panel.classList.add("is-switching");
            }
          } else panel.setAttribute("hidden", "");
        });
      };

      tabs.forEach((tab) => {
        tab.addEventListener("click", () => activate(Number(tab.getAttribute(tabAttr) || 0)));
      });
      activate(0);
    });
  });
}

function bindPremiumTilt() {
  const targets = [...document.querySelectorAll("[data-premium-tilt]")];
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(pointer: fine)").matches;
  if (!targets.length || reduceMotion || !finePointer) return;

  targets.forEach((target) => {
    target.classList.add("has-premium-tilt");

    target.addEventListener("pointermove", (event) => {
      const rect = target.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const px = (event.clientX - rect.left) / rect.width;
      const py = (event.clientY - rect.top) / rect.height;
      const x = px - 0.5;
      const y = py - 0.5;
      const intensity = target.matches(".photo-card, .lens-shell, .system-showcase, .p122-hero-art, .faq-ref-hero-media")
        ? 1
        : 0.62;

      requestAnimationFrame(() => {
        target.style.setProperty("--pointer-x", `${(px * 100).toFixed(1)}%`);
        target.style.setProperty("--pointer-y", `${(py * 100).toFixed(1)}%`);
        target.style.setProperty("--tilt-rx", `${(-y * 3.2 * intensity).toFixed(2)}deg`);
        target.style.setProperty("--tilt-ry", `${(x * 4.2 * intensity).toFixed(2)}deg`);
        target.style.setProperty("--tilt-x", `${(x * 5 * intensity).toFixed(1)}px`);
        target.style.setProperty("--tilt-y", `${(y * 4 * intensity).toFixed(1)}px`);
      });
    });

    target.addEventListener("pointerleave", () => {
      target.style.setProperty("--tilt-rx", "0deg");
      target.style.setProperty("--tilt-ry", "0deg");
      target.style.setProperty("--tilt-x", "0px");
      target.style.setProperty("--tilt-y", "0px");
      target.style.removeProperty("--pointer-x");
      target.style.removeProperty("--pointer-y");
    });
  });
}

function bindButtonFeedback() {
  const buttons = [...document.querySelectorAll(".btn")];
  if (!buttons.length || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  buttons.forEach((button) => {
    button.addEventListener("pointerdown", () => {
      button.classList.remove("is-pressing");
      void button.offsetWidth;
      button.classList.add("is-pressing");
    });
    button.addEventListener("animationend", () => button.classList.remove("is-pressing"));
  });
}

function bindHomeLeadForm() {
  const panel = document.querySelector("[data-home-lead-panel]");
  const toggle = document.querySelector("[data-home-lead-toggle]");
  const form = document.querySelector("[data-home-conversion-form]");
  if (!panel || !toggle || !form) return;

  const success = form.querySelector("[data-home-form-success]");
  const edit = form.querySelector("[data-home-form-edit]");
  const fields = ["parentName", "contact", "grade", "concern"];
  const errors = {
    parentName: "請留下家長姓名，方便顧問稱呼您。",
    contact: "請填手機或 Email，顧問才能協助安排。",
    grade: "請選擇孩子目前年級。",
    concern: "請簡單描述最擔心的學習問題。",
  };

  const setPanelOpen = (open) => {
    panel.hidden = !open;
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    if (open) {
      requestAnimationFrame(() => {
        panel.scrollIntoView({ behavior: "smooth", block: "center" });
        updateDesktopScale();
      });
    } else {
      updateDesktopScale();
    }
  };

  const setError = (name, message = "") => {
    const control = form.elements[name];
    const field = control?.closest(".home-conversion-field");
    const output = form.querySelector(`[data-home-error="${name}"]`);
    if (!field || !output) return;
    field.classList.toggle("has-error", Boolean(message));
    if (message) {
      field.classList.remove("is-nudging");
      void field.offsetWidth;
      field.classList.add("is-nudging");
    }
    output.textContent = message;
  };

  const validate = () => {
    let ok = true;
    fields.forEach((name) => {
      const value = String(form.elements[name]?.value || "").trim();
      let message = value ? "" : errors[name];
      if (name === "contact" && value && !/(@|[0-9]{8,})/.test(value)) {
        message = "請確認聯絡方式格式，例如手機或 Email。";
      }
      setError(name, message);
      if (message) ok = false;
    });
    return ok;
  };

  toggle.addEventListener("click", () => setPanelOpen(panel.hidden));

  fields.forEach((name) => {
    const control = form.elements[name];
    if (!control) return;
    control.addEventListener("input", () => setError(name, ""));
    control.addEventListener("change", () => setError(name, ""));
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!validate()) return;
    form.classList.add("is-submitted");
    if (success) success.hidden = false;
    toggle.setAttribute("aria-expanded", "true");
    requestAnimationFrame(updateDesktopScale);
  });

  edit?.addEventListener("click", () => {
    form.classList.remove("is-submitted");
    if (success) success.hidden = true;
    requestAnimationFrame(updateDesktopScale);
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
  bindPremiumTilt();
  bindButtonFeedback();
  bindHomeLeadForm();
  bindHeroMotion();
  bindSystemCtaMotion();
});
