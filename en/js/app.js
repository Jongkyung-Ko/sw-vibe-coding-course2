(() => {
  const page = window.COURSE_EN.page;
  const app = document.getElementById("app");
  const ui = page.ui;

  function render() {
    const slides = page.slides || [];
    const track = slides
      .map(
        (s, i) => `
      <figure class="story-slide" data-slide-index="${i}">
        <img src="${s.image.src}" alt="${s.image.alt}" loading="${i === 0 ? "eager" : "lazy"}" />
        <figcaption>${s.image.caption}</figcaption>
      </figure>`
      )
      .join("");
    const dots = slides
      .map(
        (_, i) =>
          `<button type="button" class="story-dot${i === 0 ? " active" : ""}" data-story-goto="${i}" aria-label="${ui.slideLabel} ${i + 1}"></button>`
      )
      .join("");
    const first = slides[0] || {};
    const points = (first.points || [])
      .map(
        (p) => `
      <li>
        <strong>${p.label}</strong>
        <span>${p.text}</span>
      </li>`
      )
      .join("");

    app.innerHTML = `
      <section class="page active" data-page="p10">
        <div class="page-head">
          <div class="meta">${page.module} · P10</div>
          <h1>${page.title}</h1>
          <p class="lead muted">${page.summary}</p>
        </div>
        <div class="story-carousel" id="p10Carousel" data-index="0">
          <div class="story-media panel">
            <div class="story-toolbar">
              <span class="chip" id="storyCounter">1 / ${slides.length}</span>
              <span class="muted story-hint">${ui.hint}</span>
            </div>
            <div class="story-viewport" id="storyViewport" tabindex="0" role="region" aria-roledescription="carousel" aria-label="${ui.carouselLabel}">
              <div class="story-track" id="storyTrack">${track}</div>
            </div>
            <div class="story-controls">
              <button type="button" class="btn btn-outline story-nav" id="storyPrev" aria-label="${ui.prevSlide}">←</button>
              <div class="story-dots" id="storyDots">${dots}</div>
              <button type="button" class="btn btn-outline story-nav" id="storyNext" aria-label="${ui.nextSlide}">→</button>
            </div>
          </div>
          <div class="panel story-copy" id="storyCopy">
            <div class="meta" id="storyKicker">${first.kicker || ""}</div>
            <h2 id="storyTitle">${first.title || ""}</h2>
            <p class="lead muted" id="storyLead">${first.lead || ""}</p>
            <ul class="story-points" id="storyPoints">${points}</ul>
            <div class="story-takeaway" id="storyTakeaway">${first.takeaway || ""}</div>
          </div>
        </div>
        <div class="pager">
          <a class="btn btn-outline" href="../#p10">${ui.backKo}</a>
          <a class="btn btn-teal" href="../">${ui.homeKo}</a>
        </div>
      </section>
    `;

    bindCarousel(slides);
  }

  function bindCarousel(slides) {
    const carousel = document.querySelector("#p10Carousel");
    const track = document.querySelector("#storyTrack");
    const viewport = document.querySelector("#storyViewport");
    const counter = document.querySelector("#storyCounter");
    const dots = [...document.querySelectorAll("[data-story-goto]")];
    const prevBtn = document.querySelector("#storyPrev");
    const nextBtn = document.querySelector("#storyNext");
    const kicker = document.querySelector("#storyKicker");
    const title = document.querySelector("#storyTitle");
    const lead = document.querySelector("#storyLead");
    const points = document.querySelector("#storyPoints");
    const takeaway = document.querySelector("#storyTakeaway");
    const copy = document.querySelector("#storyCopy");
    let index = 0;
    let touchX = null;
    let dragX = null;

    function renderCopy(slide) {
      if (!slide) return;
      copy?.classList.remove("swap");
      void copy?.offsetWidth;
      copy?.classList.add("swap");
      kicker.textContent = slide.kicker || "";
      title.textContent = slide.title || "";
      lead.textContent = slide.lead || "";
      points.innerHTML = (slide.points || [])
        .map(
          (p) => `
        <li>
          <strong>${p.label}</strong>
          <span>${p.text}</span>
        </li>`
        )
        .join("");
      takeaway.textContent = slide.takeaway || "";
    }

    function goTo(next) {
      index = Math.max(0, Math.min(slides.length - 1, next));
      track.style.transform = `translateX(-${index * 100}%)`;
      carousel.dataset.index = String(index);
      counter.textContent = `${index + 1} / ${slides.length}`;
      dots.forEach((d, i) => d.classList.toggle("active", i === index));
      prevBtn.disabled = index === 0;
      nextBtn.disabled = index === slides.length - 1;
      renderCopy(slides[index]);
    }

    prevBtn?.addEventListener("click", () => goTo(index - 1));
    nextBtn?.addEventListener("click", () => goTo(index + 1));
    dots.forEach((d) => d.addEventListener("click", () => goTo(Number(d.dataset.storyGoto))));

    viewport?.addEventListener(
      "touchstart",
      (e) => {
        touchX = e.changedTouches[0].clientX;
      },
      { passive: true }
    );
    viewport?.addEventListener(
      "touchend",
      (e) => {
        if (touchX == null) return;
        const dx = e.changedTouches[0].clientX - touchX;
        touchX = null;
        if (Math.abs(dx) < 40) return;
        goTo(index + (dx < 0 ? 1 : -1));
      },
      { passive: true }
    );
    viewport?.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") goTo(index + 1);
      if (e.key === "ArrowLeft") goTo(index - 1);
    });
    viewport?.addEventListener("pointerdown", (e) => {
      if (e.pointerType === "touch") return;
      dragX = e.clientX;
      viewport.setPointerCapture?.(e.pointerId);
    });
    viewport?.addEventListener("pointerup", (e) => {
      if (dragX == null) return;
      const dx = e.clientX - dragX;
      dragX = null;
      if (Math.abs(dx) < 50) return;
      goTo(index + (dx < 0 ? 1 : -1));
    });

    goTo(0);
  }

  const footer = document.querySelector(".site-footer p");
  if (footer) footer.textContent = ui.footer;

  render();
})();
