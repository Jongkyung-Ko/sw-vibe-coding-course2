window.COURSE = {
  brand: "SW × Vibe",
  modules: [
    {
      id: "m1",
      title: "SW와 컴퓨터 기초",
      pages: ["p1", "p2", "p3"],
    },
    {
      id: "m2",
      title: "SW 개발 표준 프로세스",
      pages: ["p4", "p5", "p6"],
    },
    {
      id: "m3",
      title: "좋은 Vibe 코딩을 위한 요구사항 관리",
      pages: ["p7", "p8", "p9", "p10"],
    },
  ],
  pages: {
    home: {
      id: "home",
      title: "홈",
      type: "home",
    },
    p1: {
      id: "p1",
      module: "SW와 컴퓨터 기초",
      title: "에니악, 디버깅, 컴퓨터의 시초와 언어의 시작",
      summary: "전자식 컴퓨터의 탄생과 ‘버그’의 기원, 프로그래밍 언어의 출발점을 살펴봅니다.",
      images: [
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/1/16/Classic_shot_of_the_ENIAC.jpg",
          alt: "ENIAC 컴퓨터",
          caption: "ENIAC (U.S. Army Photo) — 초기 전자식 디지털 컴퓨터",
        },
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/First_Computer_Bug%2C_1947.jpg/960px-First_Computer_Bug%2C_1947.jpg",
          alt: "최초의 컴퓨터 버그(나방)",
          caption: "1947년 Mark II에서 발견된 ‘실제 버그’ 로그 — debugging의 상징적 사건",
        },
      ],
    },
    p2: {
      id: "p2",
      module: "SW와 컴퓨터 기초",
      title: "CPU·메모리·ROM과 실제 코딩의 수행",
      summary: "코드가 하드웨어에서 어떻게 실행되는지 Fetch–Decode–Execute 흐름으로 이해합니다.",
      images: [
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Computer_Memory_Hierarchy.svg/960px-Computer_Memory_Hierarchy.svg.png",
          alt: "컴퓨터 메모리 계층",
          caption: "메모리 계층 구조 — CPU 캐시부터 저장장치까지",
        },
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Von_Neumann_Architecture-Enhanced_Version.jpg/960px-Von_Neumann_Architecture-Enhanced_Version.jpg",
          alt: "폰 노이만 구조",
          caption: "폰 노이만 모델 — CPU, 메모리, 입출력의 기본 연결",
        },
      ],
    },
    p3: {
      id: "p3",
      module: "SW와 컴퓨터 기초",
      title: "저급 언어 · 고급 언어 · 객체지향 언어",
      summary: "기계에 가까운 언어부터 사람을 위한 추상화, 그리고 객체지향까지 단계적으로 비교합니다.",
      images: [
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Motorola_6800_Assembly_Language.png/960px-Motorola_6800_Assembly_Language.png",
          alt: "어셈블리 언어 예시",
          caption: "Motorola 6800 어셈블리 — 저급 언어의 대표적 모습",
        },
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Programming_paradigms.svg/960px-Programming_paradigms.svg.png",
          alt: "프로그래밍 패러다임",
          caption: "프로그래밍 패러다임 계보 — 고급·객체지향 언어의 위치",
        },
      ],
    },
    p4: {
      id: "p4",
      module: "SW 개발 표준 프로세스",
      title: "V 개발모델의 구성과 원리",
      summary: "왼쪽의 분해·설계와 오른쪽의 통합·검증이 어떻게 대응되는지 인터랙티브로 확인합니다.",
      images: [
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/V-model.svg/960px-V-model.svg.png",
          alt: "V-Model 다이어그램",
          caption: "V-Model — 개발 단계와 검증 단계의 대칭 구조",
        },
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Waterfall_model.svg/960px-Waterfall_model.svg.png",
          alt: "폭포수/단계형 개발 모델",
          caption: "단계형 개발 흐름 — V모델의 기반이 되는 순차 검증 사고",
        },
      ],
    },
    p5: {
      id: "p5",
      module: "SW 개발 표준 프로세스",
      title: "CMMI, ISO 26262, UL 1998과 SW 관리",
      summary: "프로세스 성숙도·기능안전·소프트웨어 안전 표준의 핵심 구성과 관리 포인트를 정리합니다.",
      images: [
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/6/64/Characteristics_of_the_Maturity_levels.jpg",
          alt: "성숙도 레벨 특성",
          caption: "성숙도 레벨 특성 — CMMI류 프로세스 개선의 기본 사고",
        },
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/ISO_26262_ASIL_berechnen.svg/960px-ISO_26262_ASIL_berechnen.svg.png",
          alt: "ISO 26262 ASIL",
          caption: "ISO 26262 ASIL 결정 개념 — 자동차 기능안전의 핵심",
        },
      ],
    },
    p6: {
      id: "p6",
      module: "SW 개발 표준 프로세스",
      title: "SW 요구사항 관리 방안과 중요성",
      summary: "모호한 요구가 어떻게 품질·일정·비용을 흔드는지, 관리의 핵심 루프를 실습합니다.",
      images: [
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Requirements_engineering_cycle.png/960px-Requirements_engineering_cycle.png",
          alt: "요구공학 사이클",
          caption: "요구공학 사이클 — 도출·분석·명세·검증의 반복",
        },
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Dimensions_of_requirements_engineering-01.png/960px-Dimensions_of_requirements_engineering-01.png",
          alt: "요구공학의 차원",
          caption: "요구공학의 여러 차원 — 무엇을·왜·어떻게 관리할 것인가",
        },
      ],
    },
    p7: {
      id: "p7",
      module: "좋은 Vibe 코딩을 위한 요구사항 관리",
      title: "AI 바이브 코딩의 시작과 파급효과",
      summary: "흐름 중심의 AI 코딩이 생산성과 기술부채에 미치는 영향을 균형 있게 봅니다.",
      images: [
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Artificial_Intelligence_System.png",
          alt: "인공지능 시스템 개념도",
          caption: "AI 시스템 개념 — 입력·모델·출력의 기본 구조",
        },
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Pair_Programming_3.jpg/960px-Pair_Programming_3.jpg",
          alt: "페어 프로그래밍",
          caption: "협업 코딩의 장면 — AI agent와의 ‘페어’로 확장되는 개발 방식",
        },
      ],
    },
    p8: {
      id: "p8",
      module: "좋은 Vibe 코딩을 위한 요구사항 관리",
      title: "콘텍스트 개념과 요구사항 작성 지침 Top 5",
      summary: "인터넷에서 반복적으로 강조되는 대표 지침 5가지를 정리하고, 프롬프트로 바로 적용해 봅니다.",
      images: [
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Colored_neural_network.svg/960px-Colored_neural_network.svg.png",
          alt: "신경망과 컨텍스트 흐름",
          caption: "신경망 개념도 — 입력 컨텍스트가 결과에 영향을 주는 구조",
        },
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/0/09/Pros_and_cons_of_Search_Engines%2C_Knowledge_Graphs_and_Large_Language_Modells%2C_2025.png",
          alt: "LLM과 지식 소스 비교",
          caption: "검색·지식그래프·LLM 비교 — 컨텍스트 품질이 결과에 미치는 영향",
        },
      ],
    },
    p9: {
      id: "p9",
      module: "좋은 Vibe 코딩을 위한 요구사항 관리",
      title: "친해지기 — AI Agent와 상의하며 같이 개발하기",
      summary: "상담 → 계획 → 구현 → 검증 루프로 Agent와 페어 개발하는 감각을 체험합니다.",
      images: [
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Pair_programming_1.jpg/960px-Pair_programming_1.jpg",
          alt: "함께 개발하는 모습",
          caption: "함께 보는 개발 — AI agent와의 협업도 같은 리듬이 중요합니다",
        },
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Agile_software_development_release_early_and_often.jpg/960px-Agile_software_development_release_early_and_often.jpg",
          alt: "빠른 반복 배포",
          caption: "작은 단위로 자주 확인 — 바이브 코딩의 안전한 운영 방식",
        },
      ],
    },
    p10: {
      id: "p10",
      module: "좋은 Vibe 코딩을 위한 요구사항 관리",
      title: "효율성 비교 — 전통 코딩 vs 프롬프팅 관리",
      summary: "이미지를 옆으로 넘기며, 전통 방식 대비 효율성과 프롬프팅 관리가 만드는 수행력을 함께 확인합니다.",
      slides: [
        {
          id: "efficiency",
          kicker: "Slide 01 · Efficiency",
          title: "전통 코딩 방식과 비교한 효율성",
          lead: "같은 기획·설계·구현·검증·배포 단계라도, 일하는 구조가 다르면 일정·인력·스트레스 비용이 크게 갈립니다.",
          image: {
            src: "assets/p10/slide-01-vibe-vs-traditional.png",
            alt: "바이브 코딩 기반 대규모 프로젝트와 전통적 대형 프로젝트 비교",
            caption: "왼쪽: Vibe Coding Framework로 연결된 협업 · 오른쪽: 일정 지연과 팀 사일로가 쌓인 전통형 대형 프로젝트",
          },
          points: [
            {
              label: "전통 대형 프로젝트",
              text: "기획×8 · 설계×12 · 구현×30 · 검증×10 · 배포×5처럼 단계별 인력이 비대하고, 핸드오프마다 대기·재설명이 생깁니다.",
            },
            {
              label: "Vibe Coding 기반",
              text: "중앙 프레임워크와 실시간 컨텍스트 공유로 팀이 같은 허브를 보며 움직여, 중복 조율과 문서 왕복을 줄입니다.",
            },
            {
              label: "일정·품질 신호",
              text: "전통형은 Gantt에 ‘Schedule slips’가 쌓이기 쉽고, 바이브형은 작은 루프로 막히는지점을 더 빨리 드러냅니다.",
            },
          ],
          takeaway: "효율성은 ‘사람 수’가 아니라 ‘정보가 끊기지 않는 구조’에서 나옵니다. AI는 그 구조를 더 가볍게 돌리는 엔진입니다.",
        },
        {
          id: "prompting",
          kicker: "Slide 02 · Prompting Ops",
          title: "프롬프팅 관리가 만드는 수행력",
          lead: "프롬프트를 즉흥 채팅이 아니라 프로젝트 운영 자산으로 다루면, 계획·구현·검증 속도가 함께 올라갑니다.",
          image: {
            src: "assets/p10/slide-02-prompting-success-vs-failure.png",
            alt: "우수한 프롬프팅 역량 기반 성공과 프롬프팅 오동작으로 인한 프로젝트 실패 비교",
            caption: "왼쪽: Prompting Core로 정렬된 대규모 성공 · 오른쪽: 지시가 꼬여 오류·실패로 번지는 프롬프팅 오동작",
          },
          points: [
            {
              label: "우수한 프롬프팅 역량",
              text: "목표·제약·완료정의를 고정한 Prompting Core가 있으면, 대규모 코딩도 한 흐름으로 정렬되어 대형화에 성공하기 쉽습니다.",
            },
            {
              label: "프롬프팅이 꼬이면",
              text: "“여기에 이걸 해 / 어제 한 거 지워 / 아니 저걸 해”처럼 지시가 충돌하면 재작업과 crash-report가 쌓이고 프로젝트가 난항합니다.",
            },
            {
              label: "수행력의 분기점",
              text: "같은 AI라도 프롬프트 관리 수준에 따라 결과는 ‘대량화 성공’과 ‘오류·실패’로 갈립니다.",
            },
          ],
          takeaway: "프롬프팅 관리는 속도 장치가 아니라 실패를 막는 운영 체계입니다. 잘 관리하면 수행력이, 꼬이면 프로젝트가 무너집니다.",
        },
      ],
      en: {
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
        },
        slides: [
          {
            id: "efficiency",
            kicker: "Slide 01 · Efficiency",
            title: "Efficiency versus traditional coding",
            lead: "Even with the same plan–design–implement–verify–deploy stages, different operating structures create very different cost in schedule, headcount, and stress.",
            image: {
              src: "assets/p10/slide-01-vibe-vs-traditional.png",
              alt: "Comparison of a vibe-coding large project and a traditional large-scale project",
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
              src: "assets/p10/slide-02-prompting-success-vs-failure.png",
              alt: "Comparison of superior prompting success and project failure from tangled prompting",
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
  },
};
