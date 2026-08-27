window.COURSE = {
  brand: "SW × Vibe",
  modules: [
    {
      id: "m1",
      title: "Software & Computer Basics",
      pages: ["p1", "p2", "p3"],
    },
    {
      id: "m2",
      title: "Standard Software Development Process",
      pages: ["p4", "p5", "p6"],
    },
    {
      id: "m3",
      title: "Requirements Management for Better Vibe Coding",
      pages: ["p7", "p8", "p9", "p10"],
    },
  ],
  pages: {
    home: {
      id: "home",
      title: "Home",
      type: "home",
    },
    p1: {
      id: "p1",
      module: "Software & Computer Basics",
      title: "ENIAC, Debugging, and the Dawn of Languages",
      summary: "Explore the birth of electronic computers, the origin of the “bug,” and the start of programming languages.",
      images: [
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/1/16/Classic_shot_of_the_ENIAC.jpg",
          alt: "ENIAC computer",
          caption: "ENIAC (U.S. Army Photo) — an early electronic digital computer",
        },
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/First_Computer_Bug%2C_1947.jpg/960px-First_Computer_Bug%2C_1947.jpg",
          alt: "The first computer bug (moth)",
          caption: "1947 Mark II log of a real “bug” — the cultural icon of debugging",
        },
      ],
    },
    p2: {
      id: "p2",
      module: "Software & Computer Basics",
      title: "CPU, Memory, ROM, and How Code Runs",
      summary: "Understand how code executes on hardware through the Fetch–Decode–Execute cycle.",
      images: [
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Computer_Memory_Hierarchy.svg/960px-Computer_Memory_Hierarchy.svg.png",
          alt: "Computer memory hierarchy",
          caption: "Memory hierarchy — from CPU caches to storage",
        },
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Von_Neumann_Architecture-Enhanced_Version.jpg/960px-Von_Neumann_Architecture-Enhanced_Version.jpg",
          alt: "Von Neumann architecture",
          caption: "Von Neumann model — basic links among CPU, memory, and I/O",
        },
      ],
    },
    p3: {
      id: "p3",
      module: "Software & Computer Basics",
      title: "Low-level, High-level, and Object-Oriented Languages",
      summary: "Compare languages close to the machine, abstractions for people, and object-oriented design.",
      images: [
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Motorola_6800_Assembly_Language.png/960px-Motorola_6800_Assembly_Language.png",
          alt: "Assembly language example",
          caption: "Motorola 6800 assembly — a classic low-level look",
        },
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Programming_paradigms.svg/960px-Programming_paradigms.svg.png",
          alt: "Programming paradigms",
          caption: "Programming paradigm family tree — where high-level and OOP sit",
        },
      ],
    },
    p4: {
      id: "p4",
      module: "Standard Software Development Process",
      title: "Structure and Principles of the V-Model",
      summary: "See interactively how decomposition/design on the left pairs with integration/verification on the right.",
      images: [
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/V-model.svg/960px-V-model.svg.png",
          alt: "V-Model diagram",
          caption: "V-Model — symmetric development and verification stages",
        },
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Waterfall_model.svg/960px-Waterfall_model.svg.png",
          alt: "Waterfall / staged development model",
          caption: "Staged flow — sequential verification thinking behind the V-Model",
        },
      ],
    },
    p5: {
      id: "p5",
      module: "Standard Software Development Process",
      title: "CMMI, ISO 26262, UL 1998, and Software Management",
      summary: "Summarize process maturity, functional safety, and software safety standards—and what to manage.",
      images: [
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/6/64/Characteristics_of_the_Maturity_levels.jpg",
          alt: "Maturity level characteristics",
          caption: "Maturity level traits — the CMMI-style improvement mindset",
        },
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/ISO_26262_ASIL_berechnen.svg/960px-ISO_26262_ASIL_berechnen.svg.png",
          alt: "ISO 26262 ASIL",
          caption: "ISO 26262 ASIL concept — core of automotive functional safety",
        },
      ],
    },
    p6: {
      id: "p6",
      module: "Standard Software Development Process",
      title: "Software Requirements Management and Why It Matters",
      summary: "Practice how vague requirements shake quality, schedule, and cost—and the core management loop.",
      images: [
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Requirements_engineering_cycle.png/960px-Requirements_engineering_cycle.png",
          alt: "Requirements engineering cycle",
          caption: "Requirements engineering cycle — elicit, analyze, specify, verify",
        },
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Dimensions_of_requirements_engineering-01.png/960px-Dimensions_of_requirements_engineering-01.png",
          alt: "Dimensions of requirements engineering",
          caption: "Dimensions of RE — what, why, and how to manage",
        },
      ],
    },
    p7: {
      id: "p7",
      module: "Requirements Management for Better Vibe Coding",
      title: "The Rise of AI Vibe Coding and Its Impact",
      summary: "Balance how flow-first AI coding affects productivity and technical debt.",
      images: [
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Artificial_Intelligence_System.png",
          alt: "Artificial intelligence system diagram",
          caption: "AI system concept — input, model, and output",
        },
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Pair_Programming_3.jpg/960px-Pair_Programming_3.jpg",
          alt: "Pair programming",
          caption: "Collaborative coding — extended to pairing with an AI agent",
        },
      ],
    },
    p8: {
      id: "p8",
      module: "Requirements Management for Better Vibe Coding",
      title: "Context and Top 5 Requirements Writing Guidelines",
      summary: "Apply five repeatedly stressed guidelines from the web—and turn them into prompts.",
      images: [
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Colored_neural_network.svg/960px-Colored_neural_network.svg.png",
          alt: "Neural network and context flow",
          caption: "Neural net sketch — input context shapes the result",
        },
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/0/09/Pros_and_cons_of_Search_Engines%2C_Knowledge_Graphs_and_Large_Language_Modells%2C_2025.png",
          alt: "LLM vs knowledge sources",
          caption: "Search, knowledge graphs, and LLMs — context quality drives outcomes",
        },
      ],
    },
    p9: {
      id: "p9",
      module: "Requirements Management for Better Vibe Coding",
      title: "Getting Comfortable — Building with an AI Agent",
      summary: "Experience pair development with an agent through consult → plan → implement → verify.",
      images: [
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Pair_programming_1.jpg/960px-Pair_programming_1.jpg",
          alt: "Developers working together",
          caption: "Building side by side — AI agent collaboration needs the same rhythm",
        },
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Agile_software_development_release_early_and_often.jpg/960px-Agile_software_development_release_early_and_often.jpg",
          alt: "Frequent iterative releases",
          caption: "Check often in small slices — a safer way to run vibe coding",
        },
      ],
    },
    p10: {
      id: "p10",
      module: "Requirements Management for Better Vibe Coding",
      title: "Efficiency Comparison — Traditional Coding vs Prompting Ops",
      summary:
        "Swipe the slides to compare traditional delivery overhead with the execution power created by disciplined prompting management.",
      slides: [
        {
          id: "efficiency",
          kicker: "Slide 01 · Efficiency",
          title: "Efficiency versus traditional coding",
          lead: "Even with the same plan–design–implement–verify–deploy stages, different operating structures create very different cost in schedule, headcount, and stress.",
          image: {
            src: "../assets/p10-en/slide-01-vibe-vs-traditional.png",
            alt: "English comparison of a vibe-coding large project and a traditional large-scale project",
            caption:
              "Left: collaboration connected by a Vibe Coding Framework · Right: schedule slips and team silos in a traditional large project",
          },
          points: [
            {
              label: "Traditional large projects",
              text: "Headcount balloons by stage (Plan×8 · Design×12 · Impl.×30 · QA×10 · Deploy×5), and every handoff creates waiting and re-explanation.",
            },
            {
              label: "Vibe Coding based",
              text: "A shared central framework and real-time context let teams move around one hub, cutting duplicate coordination and document round-trips.",
            },
            {
              label: "Schedule & quality signals",
              text: "Traditional plans fill with “Schedule slips,” while vibe loops surface blockers earlier through small, frequent checks.",
            },
          ],
          takeaway:
            "Efficiency comes from uninterrupted information flow—not headcount. AI is the engine that keeps that structure moving lightly.",
        },
        {
          id: "prompting",
          kicker: "Slide 02 · Prompting Ops",
          title: "Execution power from prompting management",
          lead: "When prompts are treated as project operating units—not casual chat—planning, implementation, and verification accelerate together.",
          image: {
            src: "../assets/p10-en/slide-02-prompting-success-vs-failure.png",
            alt: "English comparison of superior prompting success and project failure from tangled prompting",
            caption:
              "Left: large-scale success aligned by a Prompting Core · Right: conflicting instructions cascading into errors and failure",
          },
          points: [
            {
              label: "Superior prompting capability",
              text: "With goals, constraints, and done criteria fixed in a Prompting Core, large-volume coding stays aligned and scales more successfully.",
            },
            {
              label: "When prompting tangles",
              text: "Conflicting orders like “do this here / undo yesterday / no, do that” pile up rework and crash reports until the project stalls.",
            },
            {
              label: "The fork in execution",
              text: "With the same AI, prompting quality decides whether you get scaled success—or cascading errors and failure.",
            },
          ],
          takeaway:
            "Prompting management is not a speed hack; it is an operating system that prevents failure. Managed well, execution rises—tangled, the project collapses.",
        },
      ],
    },
  },
};
