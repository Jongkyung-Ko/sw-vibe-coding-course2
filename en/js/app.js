(() => {
  const STORAGE_KEY = "sv-course-progress-en-v1";
  const pageOrder = ["home", "p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10"];
  const app = document.getElementById("app");
  const sideNav = document.getElementById("sideNav");
  const progressFill = document.getElementById("progressFill");
  const progressLabel = document.getElementById("progressLabel");
  const progressPct = document.getElementById("progressPct");
  const navToggle = document.getElementById("navToggle");
  const sidebar = document.getElementById("sidebar");
  const backdrop = document.getElementById("sidebarBackdrop");

  const state = {
    visited: new Set(loadProgress()),
    current: "home",
  };

  function loadProgress() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    } catch {
      return [];
    }
  }

  function saveProgress() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...state.visited]));
  }

  function imgFigure(img) {
    return `
      <figure class="media-frame">
        <img src="${img.src}" alt="${img.alt}" loading="lazy" referrerpolicy="no-referrer" />
        <figcaption>${img.caption}</figcaption>
      </figure>
    `;
  }

  function pageShell(page, body) {
    const idx = pageOrder.indexOf(page.id);
    const prev = pageOrder[idx - 1];
    const next = pageOrder[idx + 1];
    return `
      <section class="page" data-page="${page.id}">
        <div class="page-head">
          <div class="meta">${page.module || "Course home"} · ${page.id === "home" ? "Overview" : page.id.toUpperCase()}</div>
          <h1>${page.title}</h1>
          ${page.summary ? `<p class="lead muted">${page.summary}</p>` : ""}
        </div>
        ${body}
        <div class="pager">
          ${prev ? `<button class="btn btn-outline" data-go="${prev}">← Previous</button>` : `<span></span>`}
          ${next ? `<button class="btn btn-teal" data-go="${next}">Next →</button>` : `<button class="btn btn-teal" data-go="home">Back to home</button>`}
        </div>
      </section>
    `;
  }

  function renderHome() {
    const cards = COURSE.modules
      .map((m, i) => {
        const first = m.pages[0];
        return `
          <a class="module-card" href="#${first}" data-nav="${first}">
            <div>
              <div class="num">0${i + 1}</div>
              <h3>${m.title}</h3>
              <p class="muted">${m.pages.length} pages · includes interactive practice</p>
            </div>
            <span class="chip">Start</span>
          </a>
        `;
      })
      .join("");

    return `
      <section class="page" data-page="home">
        <div class="hero-panel home">
          <span class="kicker">Interactive Software Course</span>
          <h1>SW × Vibe Coding</h1>
          <p class="lead">From the dawn of computing through international standards to vibe coding with AI requirements — a hands-on intro across 10 pages.</p>
          <div class="cta-row">
            <button class="btn btn-primary" data-go="p1">Start from page 1</button>
            <button class="btn btn-ghost" data-go="p7">Jump to vibe coding</button>
          </div>
        </div>
        <div class="module-cards">${cards}</div>
      </section>
    `;
  }

  function renderP1(page) {
    const body = `
      <div class="grid-2">
        <div class="stack">
          <div class="panel">
            <h2>Origins on a timeline</h2>
            <div class="timeline">
              <div class="t-item"><div class="t-dot"></div><div class="t-body"><strong>1945–46 · ENIAC</strong>Early electronic computers “programmed” with plugboards and switches—a hardware-first world before software was a settled word.</div></div>
              <div class="t-item"><div class="t-dot"></div><div class="t-body"><strong>1947 · Real bug</strong>A moth stuck in a Harvard Mark II relay was taped into the log—becoming the cultural icon of debugging.</div></div>
              <div class="t-item"><div class="t-dot"></div><div class="t-body"><strong>1950s · Birth of languages</strong>Beyond machine code and assembly, FORTRAN and COBOL ushered in more human-friendly coding.</div></div>
            </div>
          </div>
          <div class="panel">
            <h2>Quick quiz</h2>
            <p>What is the context of the “First actual case of bug being found” log?</p>
            <div class="quiz" data-quiz="p1">
              <button data-answer="wrong">A fault log from a burned-out ENIAC vacuum tube</button>
              <button data-answer="correct">A moth stuck in a Mark II relay, taped into the log</button>
              <button data-answer="wrong">The first C compiler bug report</button>
            </div>
            <div class="feedback" data-feedback="p1"></div>
          </div>
        </div>
        <div class="stack">
          ${page.images.map(imgFigure).join("")}
        </div>
      </div>
    `;
    return pageShell(page, body);
  }

  function renderP2(page) {
    const body = `
      <div class="grid-2">
        <div class="stack">
          <div class="panel">
            <h2>Click to learn the execution structure</h2>
            <p class="muted">Click a node to reveal its role; the pipeline runs one cycle.</p>
            <div class="arch" id="archNodes">
              <button class="arch-node" data-arch="cpu"><strong>CPU</strong><span>Compute & control</span></button>
              <button class="arch-node" data-arch="ram"><strong>RAM</strong><span>Data in flight</span></button>
              <button class="arch-node" data-arch="rom"><strong>ROM / Storage</strong><span>Firmware & persistent storage</span></button>
            </div>
            <div class="pipeline" id="pipeline">
              <span data-step="0">Fetch</span>
              <span data-step="1">Decode</span>
              <span data-step="2">Execute</span>
              <span data-step="3">Store</span>
            </div>
            <p id="archExplain" class="muted" style="margin-top:1rem">Select a node to begin.</p>
            <button class="btn btn-teal" id="runPipeline" style="margin-top:0.75rem">Simulate code execution</button>
          </div>
          <div class="panel">
            <h3>The real path code takes</h3>
            <ol>
              <li>Write source code (human-readable text)</li>
              <li>Compile/interpret → machine code or bytecode</li>
              <li>Loader places the program in memory (RAM)</li>
              <li>CPU fetches, decodes, and executes instructions</li>
              <li>Optionally touch ROM/disk data and firmware</li>
            </ol>
          </div>
        </div>
        <div class="stack">${page.images.map(imgFigure).join("")}</div>
      </div>
    `;
    return pageShell(page, body);
  }

  function renderP3(page) {
    const body = `
      <div class="grid-2">
        <div class="panel">
          <h2>Language level comparer</h2>
          <div class="level-tabs" id="langTabs">
            <button class="active" data-lang="low">Low-level</button>
            <button data-lang="high">High-level</button>
            <button data-lang="oop">Object-oriented</button>
          </div>
          <div class="code-box" id="langCode">; Low-level assembly-style example
LDA #$01
STA $1000
JMP START</div>
          <p id="langNote" class="muted" style="margin-top:0.85rem">Close to the hardware with fine control, but lower productivity and portability.</p>
        </div>
        <div class="stack">
          ${page.images.map(imgFigure).join("")}
          <div class="panel">
            <h3>One-line takeaway</h3>
            <p><strong>Low-level</strong> centers the machine, <strong>high-level</strong> the problem, and <strong>OOP</strong> the structure of the world (objects &amp; relations).</p>
          </div>
        </div>
      </div>
    `;
    return pageShell(page, body);
  }

  function renderP4(page) {
    const body = `
      <div class="grid-2">
        <div class="panel">
          <h2>Interactive V-Model</h2>
          <p class="muted">Click a left-side stage to highlight its matching verification stage on the right.</p>
          <div class="vmodel" id="vmodel">
            <div class="v-col">
              <button class="v-node left" data-v="req">Requirements analysis<small>Needs / Spec</small></button>
              <button class="v-node left" data-v="arch">System / SW design<small>Architecture</small></button>
              <button class="v-node left" data-v="mod">Module design<small>Detailed Design</small></button>
            </div>
            <div class="v-mid" aria-hidden="true"></div>
            <div class="v-col">
              <button class="v-node right" data-v="req">Acceptance / system test<small>Acceptance</small></button>
              <button class="v-node right" data-v="arch">Integration test<small>Integration</small></button>
              <button class="v-node right" data-v="mod">Unit test<small>Unit Test</small></button>
            </div>
          </div>
          <div class="v-node center" style="margin-top:0.75rem">Implementation (Coding)</div>
          <p id="vExplain" class="muted" style="margin-top:1rem">Principle: prove on the right what you defined on the left. It reduces “tests without design” and “design without tests.”</p>
        </div>
        <div class="stack">${page.images.map(imgFigure).join("")}</div>
      </div>
    `;
    return pageShell(page, body);
  }

  function renderP5(page) {
    const body = `
      <div class="panel">
        <h2>International standards explorer</h2>
        <div class="tabs" id="stdTabs">
          <button class="active" data-tab="cmmi">CMMI</button>
          <button data-tab="iso">ISO 26262</button>
          <button data-tab="ul">UL 1998</button>
        </div>
        <div class="tab-panel active" data-panel="cmmi">
          <h3>CMMI — process maturity</h3>
          <p>A framework for assessing and improving how <strong>consistently and improvably</strong> an organization builds software.</p>
          <ul>
            <li>Maturity thinking from Level 1 Initial → 5 Optimizing</li>
            <li>Process areas such as requirements, project planning, configuration, and measurement</li>
            <li>SW management: define standard process → apply to projects → improve via measurement</li>
          </ul>
        </div>
        <div class="tab-panel" data-panel="iso">
          <h3>ISO 26262 — automotive functional safety</h3>
          <p>Addresses hazards from E/E system malfunction and tiers safety goals/activities by <strong>ASIL</strong>.</p>
          <ul>
            <li>Full lifecycle: concept, system, HW/SW, production, operations</li>
            <li>SW: requirement breakdown, design, implementation, and unit/integration/verification traceability</li>
            <li>Management: link hazard analysis ↔ safety requirements ↔ test evidence</li>
          </ul>
        </div>
        <div class="tab-panel" data-panel="ul">
          <h3>UL 1998 — software safety standard</h3>
          <p>A UL family addressing <strong>fault avoidance and control</strong> for software in safety-related products.</p>
          <ul>
            <li>Documentation and review of requirements, design, implementation, and verification</li>
            <li>Hazard analysis, coding standards, testing, and configuration/change control</li>
            <li>Management: lock “what must be kept safe” as requirements and keep evidence</li>
          </ul>
        </div>
      </div>
      <div class="grid-2" style="margin-top:1.25rem">
        ${page.images.map(imgFigure).join("")}
      </div>
    `;
    return pageShell(page, body);
  }

  function renderP6(page) {
    const checks = [
      "Is the goal clear in one sentence?",
      "Are users/stakeholders identified?",
      "Are acceptance criteria defined?",
      "Are non-functionals (perf, security, compatibility) covered?",
      "Are non-goals explicitly stated?",
      "Can changes be traced (version/issue links)?",
    ];
    const body = `
      <div class="grid-2">
        <div class="stack">
          <div class="panel">
            <h2>Requirements quality checklist</h2>
            <p class="muted">Checking items raises the quality score. Good requirements must be verifiable.</p>
            <div class="check-list" id="reqChecks">
              ${checks
                .map(
                  (c, i) => `
                <label>
                  <input type="checkbox" data-check="${i}" />
                  <span>${c}</span>
                </label>`
                )
                .join("")}
            </div>
          </div>
          <div class="panel" style="text-align:center">
            <div class="score-ring" id="reqScore" style="--p:0%">0%</div>
            <p class="muted" id="reqScoreText">Not started yet — vague requirements are the most expensive bugs.</p>
          </div>
        </div>
        <div class="stack">
          ${page.images.map(imgFigure).join("")}
          <div class="panel">
            <h3>Why does it matter?</h3>
            <p>When requirements wobble, design, code, and tests wobble together. Standard processes (V-Model, CMMI, functional safety) share one premise: <strong>traceable requirements</strong>.</p>
          </div>
        </div>
      </div>
    `;
    return pageShell(page, body);
  }

  function renderP7(page) {
    const body = `
      <div class="grid-2">
        <div class="stack">
          <div class="panel">
            <h2>What is vibe coding?</h2>
            <p>You hand intent and feel (“an app like this”) to AI and build code quickly through conversation. The barrier drops—and <strong>ambiguous requirements</strong> get more expensive.</p>
            <div class="impact-bars" id="impactBars">
              <div class="bar-row"><label><span>Idea → prototype speed</span><span>+large</span></label><div class="bar"><i data-w="92"></i></div></div>
              <div class="bar-row"><label><span>Learning / exploration speed</span><span>+high</span></label><div class="bar"><i data-w="84"></i></div></div>
              <div class="bar-row"><label><span>Tech debt & regression risk</span><span>↑ without management</span></label><div class="bar"><i data-w="70"></i></div></div>
              <div class="bar-row"><label><span>Impact of requirements quality</span><span>Decisive</span></label><div class="bar"><i data-w="96"></i></div></div>
            </div>
            <button class="btn btn-teal" id="animateImpact" style="margin-top:1rem">Visualize impact</button>
          </div>
          <div class="panel">
            <h3>Impact in one line</h3>
            <p>AI becomes fast hands, but <strong>what to build</strong> remains human requirements management.</p>
          </div>
        </div>
        <div class="stack">${page.images.map(imgFigure).join("")}</div>
      </div>
    `;
    return pageShell(page, body);
  }

  function renderP8(page) {
    const guides = [
      {
        t: "Lock context like a contract",
        d: "State stack, folder layout, constraints, and existing patterns first. (Common emphasis in guides like roadmap.sh / Designveloper.)",
      },
      {
        t: "Get a plan before code",
        d: "Have the agent list files, assumptions, and approach before coding. Plan-free vibe coding often expands scope.",
      },
      {
        t: "Split into thin vertical slices",
        d: "Not “the whole app” at once—slice into working units (UI + logic + tests).",
      },
      {
        t: "State constraints and definition of done",
        d: "Negative constraints + Definition of Done. Prefer contract language (“400 on invalid input + tests pass”) over “make it nice.”",
      },
      {
        t: "Include a verification loop in the requirement",
        d: "Put tests, lint, and manual checks into the requirement. Done means accepted—not merely generated.",
      },
    ];
    const body = `
      <div class="grid-2">
        <div class="stack">
          <div class="panel">
            <h2>Top 5 guidelines</h2>
            <p class="muted">Distilled from recurring advice in Levelop, roadmap.sh, Designveloper, Drainpipe, and arXiv vibe-coding guides.</p>
            <div class="guide-list">
              ${guides
                .map(
                  (g) => `
                <details class="guide-item">
                  <summary>${g.t}</summary>
                  <div class="guide-body">${g.d}</div>
                </details>`
                )
                .join("")}
            </div>
          </div>
          <div class="panel prompt-builder">
            <h3>Context prompt builder</h3>
            <label>Goal</label>
            <input id="pbGoal" value="Add a due-date filter to the todo list" />
            <label>Stack / context</label>
            <input id="pbStack" value="HTML/JS, keep existing localStorage, preserve CSS variables" />
            <label>Constraints</label>
            <input id="pbConstraint" value="No new frameworks; keep index.html structure" />
            <label>Definition of done</label>
            <input id="pbDone" value="3 filter buttons, persist across refresh, include manual check scenarios" />
            <button class="btn btn-teal" id="pbBuild" style="margin-top:0.9rem">Build prompt</button>
            <div class="prompt-preview" id="pbOut">Press the button to generate a copy-paste prompt.</div>
          </div>
        </div>
        <div class="stack">${page.images.map(imgFigure).join("")}</div>
      </div>
    `;
    return pageShell(page, body);
  }

  function renderP9(page) {
    const body = `
      <div class="grid-2">
        <div class="stack">
          <div class="panel">
            <h2>AI Agent pair-session simulator</h2>
            <p class="muted">Use presets to experience consult → discuss → implementation plan. (Local rule-based demo)</p>
            <div class="presets" id="chatPresets">
              <button data-preset="consult">Requirements consult</button>
              <button data-preset="plan">Request implementation plan</button>
              <button data-preset="impl">Implement a small slice</button>
              <button data-preset="review">Request verification checks</button>
            </div>
            <div class="chat">
              <div class="chat-log" id="chatLog"></div>
              <div class="chat-input">
                <textarea id="chatInput" placeholder="Write what you want to discuss with the Agent"></textarea>
                <button class="btn btn-teal" id="chatSend">Send</button>
              </div>
            </div>
          </div>
        </div>
        <div class="stack">
          ${page.images.map(imgFigure).join("")}
          <div class="panel">
            <h3>The co-building loop</h3>
            <ol>
              <li>State goals and non-goals first</li>
              <li>Get a plan from the Agent</li>
              <li>Implement only one slice</li>
              <li>Accept via run/tests</li>
              <li>Carry learned context into the next request</li>
            </ol>
          </div>
        </div>
      </div>
    `;
    return pageShell(page, body);
  }

  function renderP10(page) {
    const slides = page.slides || [];
    const track = slides
      .map(
        (s, i) => `
      <figure class="story-slide${s.image?.pending ? " is-pending" : ""}" data-slide-index="${i}">
        <img src="${s.image.src}" alt="${s.image.alt}" loading="${i === 0 ? "eager" : "lazy"}" />
        <figcaption>${s.image.caption}</figcaption>
      </figure>`
      )
      .join("");
    const dots = slides
      .map(
        (_, i) =>
          `<button type="button" class="story-dot${i === 0 ? " active" : ""}" data-story-goto="${i}" aria-label="Slide ${i + 1}"></button>`
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

    const body = `
      <div class="story-carousel" id="p10Carousel" data-index="0">
        <div class="story-media panel">
          <div class="story-toolbar">
            <span class="chip" id="storyCounter">1 / ${slides.length}</span>
            <span class="muted story-hint">Swipe sideways or use the arrows</span>
          </div>
          <div class="story-viewport" id="storyViewport" tabindex="0" role="region" aria-roledescription="carousel" aria-label="Efficiency comparison slides">
            <div class="story-track" id="storyTrack">
              ${track}
            </div>
          </div>
          <div class="story-controls">
            <button type="button" class="btn btn-outline story-nav" id="storyPrev" aria-label="Previous slide">←</button>
            <div class="story-dots" id="storyDots">${dots}</div>
            <button type="button" class="btn btn-outline story-nav" id="storyNext" aria-label="Next slide">→</button>
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
    `;
    return pageShell(page, body);
  }

  const renderers = {
    home: renderHome,
    p1: renderP1,
    p2: renderP2,
    p3: renderP3,
    p4: renderP4,
    p5: renderP5,
    p6: renderP6,
    p7: renderP7,
    p8: renderP8,
    p9: renderP9,
    p10: renderP10,
  };

  function buildSidebar() {
    let html = `<a href="#home" data-nav="home"><strong>Home</strong><small>Course overview</small></a>`;
    COURSE.modules.forEach((m) => {
      html += `<div class="sidebar-section">${m.title}</div>`;
      m.pages.forEach((pid) => {
        const p = COURSE.pages[pid];
        html += `<a href="#${pid}" data-nav="${pid}"><strong>${pid.toUpperCase()} · ${p.title}</strong><small>${m.title}</small></a>`;
      });
    });
    sideNav.innerHTML = html;
  }

  function updateProgressUI() {
    const learnable = pageOrder.filter((p) => p !== "home");
    const done = learnable.filter((p) => state.visited.has(p)).length;
    const pct = Math.round((done / learnable.length) * 100);
    progressFill.style.width = `${pct}%`;
    progressPct.textContent = `${pct}%`;
    const cur = COURSE.pages[state.current];
    progressLabel.textContent = state.current === "home" ? "Not started" : cur?.title || state.current;
    sideNav.querySelectorAll("a").forEach((a) => {
      const id = a.dataset.nav;
      a.classList.toggle("active", id === state.current);
      a.classList.toggle("done", id !== "home" && state.visited.has(id));
    });
  }

  function bindQuiz(root) {
    root.querySelectorAll("[data-quiz]").forEach((quiz) => {
      const key = quiz.dataset.quiz;
      const feedback = root.querySelector(`[data-feedback="${key}"]`);
      quiz.querySelectorAll("button").forEach((btn) => {
        btn.addEventListener("click", () => {
          quiz.querySelectorAll("button").forEach((b) => b.classList.remove("correct", "wrong"));
          const ok = btn.dataset.answer === "correct";
          btn.classList.add(ok ? "correct" : "wrong");
          if (ok) {
            feedback.textContent = "Correct! You nailed the cultural icon of debugging.";
            feedback.className = "feedback ok";
          } else {
            feedback.textContent = "Try again? It is the log with the moth attached.";
            feedback.className = "feedback bad";
          }
        });
      });
    });
  }

  function bindP2(root) {
    const explain = {
      cpu: "The CPU decodes and executes instructions. The program counter points to the next instruction; ALU and control unit are central.",
      ram: "RAM is the workspace for running code and data. It is volatile—gone when power is off.",
      rom: "ROM/flash stores firmware, bootloaders, and persistent data, loaded into RAM when the CPU needs to run it.",
    };
    const nodes = root.querySelectorAll("[data-arch]");
    const note = root.querySelector("#archExplain");
    nodes.forEach((n) =>
      n.addEventListener("click", () => {
        nodes.forEach((x) => x.classList.remove("active"));
        n.classList.add("active");
        note.textContent = explain[n.dataset.arch];
      })
    );
    const steps = [...root.querySelectorAll("#pipeline span")];
    root.querySelector("#runPipeline")?.addEventListener("click", async () => {
      for (let i = 0; i < steps.length; i++) {
        steps.forEach((s) => s.classList.remove("on"));
        steps[i].classList.add("on");
        note.textContent = ["Fetch instruction from memory", "Decode the instruction", "Execute the operation", "Store result / next instruction"][i];
        await new Promise((r) => setTimeout(r, 550));
      }
      note.textContent = "One cycle done! Real programs repeat this loop hundreds of millions of times per second.";
    });
  }

  function bindP3(root) {
    const data = {
      low: {
        code: `; Low-level (assembly) example\nLDA #$01\nSTA $1000\nJMP START`,
        note: "Close to the hardware with fine control, but lower productivity and portability.",
      },
      high: {
        code: `# High-level example (Python-like)\ntotal = sum(values)\nprint("total:", total)`,
        note: "Focus on solving the problem. Compilers/runtimes handle machine details.",
      },
      oop: {
        code: `// Object-oriented example\nclass Cart {\n  add(item) { this.items.push(item); }\n  total() { return this.items.reduce((a,b)=>a+b.price,0); }\n}`,
        note: "Bundle data and behavior into objects; extend structure via inheritance, encapsulation, and polymorphism.",
      },
    };
    const tabs = root.querySelectorAll("#langTabs button");
    const code = root.querySelector("#langCode");
    const note = root.querySelector("#langNote");
    tabs.forEach((tab) =>
      tab.addEventListener("click", () => {
        tabs.forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");
        const d = data[tab.dataset.lang];
        code.textContent = d.code;
        note.textContent = d.note;
      })
    );
  }

  function bindP4(root) {
    const explain = {
      req: "Requirements ↔ acceptance/system test: verify “what to build” from the user perspective.",
      arch: "Design ↔ integration test: confirm interfaces and collaboration match the design.",
      mod: "Module design ↔ unit test: prove correctness at the smallest unit first.",
    };
    root.querySelectorAll("[data-v]").forEach((node) => {
      node.addEventListener("click", () => {
        const key = node.dataset.v;
        root.querySelectorAll("[data-v]").forEach((n) => {
          n.classList.toggle("active", n === node);
          n.classList.toggle("pair", n.dataset.v === key);
        });
        root.querySelector("#vExplain").textContent = explain[key];
      });
    });
  }

  function bindP5(root) {
    const tabs = root.querySelectorAll("#stdTabs button");
    const panels = root.querySelectorAll(".tab-panel");
    tabs.forEach((tab) =>
      tab.addEventListener("click", () => {
        tabs.forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");
        panels.forEach((p) => p.classList.toggle("active", p.dataset.panel === tab.dataset.tab));
      })
    );
  }

  function bindP6(root) {
    const boxes = [...root.querySelectorAll("#reqChecks input")];
    const ring = root.querySelector("#reqScore");
    const text = root.querySelector("#reqScoreText");
    const update = () => {
      const on = boxes.filter((b) => b.checked).length;
      const pct = Math.round((on / boxes.length) * 100);
      ring.style.setProperty("--p", `${pct}%`);
      ring.textContent = `${pct}%`;
      text.textContent =
        pct < 40
          ? "Risk — vague requirements invite rework."
          : pct < 80
            ? "OK — refine acceptance criteria and non-functionals."
            : "Great — requirements clear enough for both AI and the team.";
    };
    boxes.forEach((b) => b.addEventListener("change", update));
  }

  function bindP7(root) {
    const run = () => {
      root.querySelectorAll("#impactBars i").forEach((bar) => {
        bar.style.width = "0%";
        requestAnimationFrame(() => {
          bar.style.width = `${bar.dataset.w}%`;
        });
      });
    };
    root.querySelector("#animateImpact")?.addEventListener("click", run);
    run();
  }

  function bindP8(root) {
    const build = () => {
      const goal = root.querySelector("#pbGoal").value.trim();
      const stack = root.querySelector("#pbStack").value.trim();
      const constraint = root.querySelector("#pbConstraint").value.trim();
      const done = root.querySelector("#pbDone").value.trim();
      root.querySelector("#pbOut").textContent = `Role: careful senior engineer\n\n[Context]\n${stack}\n\n[Task]\n${goal}\n\n[Constraints]\n${constraint}\n\n[Definition of done]\n${done}\n\nFirst propose a change plan (files/assumptions/risks). After I approve, implement in small slices.`;
    };
    root.querySelector("#pbBuild")?.addEventListener("click", build);
  }

  function bindP9(root) {
    const log = root.querySelector("#chatLog");
    const input = root.querySelector("#chatInput");
    const presets = {
      consult:
        "I want a simple habit-tracker web page—can we draft first-version requirements together?",
      plan: "Propose an implementation plan by file for the scope we just set. Do not write code yet.",
      impl: "Implement only step 1 of the plan. HTML/JS only—no external libraries.",
      review: "Give me a manual verification checklist and regression points for what we just built.",
    };

    function addBubble(role, text) {
      const div = document.createElement("div");
      div.className = `bubble ${role}`;
      div.textContent = text;
      log.appendChild(div);
      log.scrollTop = log.scrollHeight;
    }

    function agentReply(userText) {
      const t = userText.toLowerCase();
      let reply;
      if (t.includes("plan")) {
        reply =
          "Sure—plan before code.\n1) index.html skeleton\n2) localStorage state model\n3) UI event wiring\n4) three manual verification scenarios\nWhich step should we approve first?";
      } else if (t.includes("implement") || t.includes("build") || t.includes("code")) {
        reply =
          "Let us implement one slice only.\n- Done: add/check/persist across refresh\n- Constraint: no libraries\nAfter implementation, verify add → check → refresh in the browser. Tell me the result and we will move to the next slice.";
      } else if (t.includes("verify") || t.includes("test") || t.includes("check")) {
        reply =
          "Verification checklist:\n1) Block empty input\n2) Persist checked state\n3) Keep storage in sync after delete\n4) Button hit targets on mobile widths\nTell me any failures and I will fix only those.";
      } else {
        reply =
          "Let us narrow the requirement together.\n- User: individual\n- Core actions: add habit / check today complete\n- Non-goals: login, cloud sync\n- Acceptance: data persists after refresh\nStart from this, or remove something?";
      }
      setTimeout(() => addBubble("agent", reply), 450);
    }

    addBubble(
      "agent",
      "Hi! I am the practice AI Agent for this course.\nTell me what you want to build, what to exclude, and the done criteria."
    );

    root.querySelector("#chatSend")?.addEventListener("click", () => {
      const text = input.value.trim();
      if (!text) return;
      addBubble("user", text);
      input.value = "";
      agentReply(text);
    });

    root.querySelectorAll("#chatPresets button").forEach((btn) => {
      btn.addEventListener("click", () => {
        input.value = presets[btn.dataset.preset];
        input.focus();
      });
    });
  }

  function bindP10(root, page) {
    const slides = page.slides || [];
    if (!slides.length) return;

    const carousel = root.querySelector("#p10Carousel");
    const track = root.querySelector("#storyTrack");
    const viewport = root.querySelector("#storyViewport");
    const counter = root.querySelector("#storyCounter");
    const dots = [...root.querySelectorAll("[data-story-goto]")];
    const prevBtn = root.querySelector("#storyPrev");
    const nextBtn = root.querySelector("#storyNext");
    const kicker = root.querySelector("#storyKicker");
    const title = root.querySelector("#storyTitle");
    const lead = root.querySelector("#storyLead");
    const points = root.querySelector("#storyPoints");
    const takeaway = root.querySelector("#storyTakeaway");
    const copy = root.querySelector("#storyCopy");
    let index = 0;
    let touchX = null;

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
    dots.forEach((d) =>
      d.addEventListener("click", () => goTo(Number(d.dataset.storyGoto)))
    );

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

    let dragX = null;
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

  function bindPageInteractions(root, id) {
    bindQuiz(root);
    if (id === "p2") bindP2(root);
    if (id === "p3") bindP3(root);
    if (id === "p4") bindP4(root);
    if (id === "p5") bindP5(root);
    if (id === "p6") bindP6(root);
    if (id === "p7") bindP7(root);
    if (id === "p8") bindP8(root);
    if (id === "p9") bindP9(root);
    if (id === "p10") bindP10(root, COURSE.pages.p10);

    root.querySelectorAll("[data-go]").forEach((btn) => {
      btn.addEventListener("click", () => navigate(btn.dataset.go));
    });
  }

  function navigate(id) {
    if (!pageOrder.includes(id)) id = "home";
    state.current = id;
    if (id !== "home") {
      state.visited.add(id);
      saveProgress();
    }
    const page = COURSE.pages[id] || { id: "home", title: "Home" };
    const html = renderers[id](page);
    app.innerHTML = html;
    const section = app.querySelector(".page");
    section?.classList.add("active");
    bindPageInteractions(app, id);
    updateProgressUI();

    const koLink = document.getElementById("langToKo");
    if (koLink) koLink.href = "../#" + id;
    closeNav();
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (location.hash.replace("#", "") !== id) {
      history.replaceState(null, "", `#${id}`);
    }
  }

  function openNav() {
    sidebar.classList.add("open");
    backdrop.classList.add("open");
    navToggle.setAttribute("aria-expanded", "true");
  }
  function closeNav() {
    sidebar.classList.remove("open");
    backdrop.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  }

  navToggle.addEventListener("click", () => {
    if (sidebar.classList.contains("open")) closeNav();
    else openNav();
  });
  backdrop.addEventListener("click", closeNav);

  document.addEventListener("click", (e) => {
    const a = e.target.closest("[data-nav]");
    if (!a) return;
    e.preventDefault();
    navigate(a.dataset.nav);
  });

  window.addEventListener("hashchange", () => {
    const id = location.hash.replace("#", "") || "home";
    if (id !== state.current) navigate(id);
  });

  buildSidebar();
  navigate(location.hash.replace("#", "") || "home");
})();
