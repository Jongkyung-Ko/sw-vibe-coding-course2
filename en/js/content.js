window.COURSE_EN = {
  brand: "SW × Vibe",
  page: {
    id: "p10",
    module: "Requirements Management for Better Vibe Coding",
    title: "Efficiency Comparison — Traditional Coding vs Prompting Ops",
    summary:
      "Swipe the slides to compare traditional delivery overhead with the execution power created by disciplined prompting management.",
    ui: {
      hint: "Swipe sideways or use the arrows",
      carouselLabel: "Efficiency comparison slides",
      slideLabel: "Slide",
      prevSlide: "Previous slide",
      nextSlide: "Next slide",
      backKo: "Korean version",
      homeKo: "Korean course home",
      footer: "Course illustrations · Educational non-commercial use",
    },
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
};
