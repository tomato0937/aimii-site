const icons = {
  heart: '<svg viewBox="0 0 24 24"><path d="M12 21s-7-4.4-9.2-9.1C1 8.2 3.1 5 6.5 5c2 0 3.4 1.2 4.1 2.5C11.4 6.2 12.8 5 14.8 5c3.4 0 5.5 3.2 3.7 6.9C16.3 16.6 12 21 12 21Z"/></svg>',
  frown: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M8.8 10h.1M15.1 10h.1"/><path d="M8.5 16c1-1.2 2.1-1.8 3.5-1.8s2.5.6 3.5 1.8"/></svg>',
  brain:
    '<svg viewBox="0 0 24 24"><path d="M8 4a3 3 0 0 0-3 3 3 3 0 0 0 .2 1A3.7 3.7 0 0 0 4 14.9 3.5 3.5 0 0 0 8 20V4Z"/><path d="M16 4a3 3 0 0 1 3 3 3 3 0 0 1-.2 1 3.7 3.7 0 0 1 1.2 6.9A3.5 3.5 0 0 1 16 20V4Z"/><path d="M8 8h2M8 13h3M16 9h-2M16 14h-3"/></svg>',
  users: '<svg viewBox="0 0 24 24"><path d="M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"/><path d="M2 21a7 7 0 0 1 14 0"/><path d="M17 11a3 3 0 1 0 0-6"/><path d="M18 15a6 6 0 0 1 4 6"/></svg>',
  chart:
    '<svg viewBox="0 0 24 24"><path d="M4 19V5"/><path d="M4 19h16"/><path d="M8 16v-5"/><path d="M12 16V8"/><path d="M16 16v-9"/><path d="m17 6 2-2"/></svg>',
  target:
    '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/><path d="m16 8 4-4"/><path d="M20 4v4h-4"/></svg>',
  clock: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v6l4 2"/></svg>',
  star: '<svg viewBox="0 0 24 24"><path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.2 6.4 20.2 7.5 14 3 9.6l6.2-.9L12 3Z"/></svg>',
  shield: '<svg viewBox="0 0 24 24"><path d="M12 3 20 6v6c0 5-3.4 8.1-8 9-4.6-.9-8-4-8-9V6l8-3Z"/><path d="m8.5 12 2.2 2.2 4.8-5"/></svg>',
  doc: '<svg viewBox="0 0 24 24"><path d="M7 3h7l4 4v14H7z"/><path d="M14 3v5h5"/><path d="M10 12h6M10 16h5"/></svg>',
  chat: '<svg viewBox="0 0 24 24"><path d="M5 18.5 3.8 22l4-1.3a9 9 0 1 0-2.8-2.2Z"/><path d="M8 11h.1M12 11h.1M16 11h.1"/></svg>',
  calendar:
    '<svg viewBox="0 0 24 24"><path d="M5 5h14v15H5z"/><path d="M8 3v4M16 3v4M5 9h14"/><path d="m8 14 2 2 5-5"/></svg>',
  rocket: '<svg viewBox="0 0 24 24"><path d="M14 4c3.5.5 5.5 2.5 6 6l-7.5 7.5-6-6L14 4Z"/><path d="m6 13-2 5 5-2"/><circle cx="14.5" cy="9.5" r="1.8"/></svg>',
  bell: '<svg viewBox="0 0 24 24"><path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9Z"/><path d="M10 21h4"/></svg>',
  sliders:
    '<svg viewBox="0 0 24 24"><path d="M4 7h8M16 7h4M4 17h4M12 17h8"/><circle cx="14" cy="7" r="2"/><circle cx="10" cy="17" r="2"/></svg>',
};

const pageOrder = [
  "home",
  "about",
  "programs",
  "progress",
  "diagnosis",
  "system",
  "coach",
  "faq",
  "parent",
];

const heroCarouselRoutes = [];
const heroCarouselRouteSet = new Set(heroCarouselRoutes);

const pages = {
  home: {
    nav: "首頁",
    cta: "15 分鐘 AI 體檢",
    brandSub: "K-12 自學成效作業系統",
    navItems: [
      ["about", "關於伴伴"],
      ["system", "如何運作"],
      ["programs", "課程方案"],
      ["progress", "成效故事"],
      ["parent", "家長中心"],
      ["faq", "常見問題"],
    ],
    actions: [{ label: "15 分鐘 AI 體檢", route: "diagnosis" }],
    motion: "motion-home",
    hero: {
      image: "./assets/generated/premium-home/hero-learning-os.png",
      eyebrow: "伴伴辦學 EduBaania",
      title: '<span class="hero-title-main">不是再多補一堂，</span><span class="hero-title-sub">而是先找出孩子<span class="teal">真正卡住</span>的地方。</span>',
      copy: "15 分鐘 AI 學習體檢先整理知識缺口、錯因與學習習慣，再把下一步變成孩子做得到、家長看得懂的陪伴路線。",
      primary: "開始 15 分鐘 AI 體檢",
      secondary: "了解如何運作",
      actions: [
        { label: "開始 15 分鐘 AI 體檢", route: "diagnosis" },
        { label: "了解如何運作", route: "system", kind: "secondary" },
      ],
      widgets: [
        { type: "score", label: "學習狀態檢測", big: "78", small: "良好", caption: "能力分布", trend: true },
        { type: "trend", label: "本週學習趨勢", big: "+24%", caption: "弱點改善幅度" },
        { type: "list", label: "家長今日可看懂", items: ["孩子卡在「分數應用」的題意轉換", "今天先做：題組拆解練習 15 分鐘"] },
      ],
      social: { image: "./assets/content/home-social-proof.png", text: "來自 3,000+ 家長的信任與推薦" },
      showPoints: false,
      showWidgets: true,
      hideTasteBadge: true,
      hideFlow: true,
    },
    blocks: [
      { type: "pain" },
      { type: "homeAdvantagePanel" },
      { type: "why" },
      { type: "plans" },
      { type: "stats" },
    ],
    footer: "home",
  },
  about: {
    nav: "關於我們",
    cta: "15 分鐘 AI 體檢",
    navItems: [
      ["about", "伴伴優勢"],
      ["system", "學習系統"],
      ["programs", "課程方案"],
      ["parent", "真實見證"],
      ["faq", "常見問題"],
    ],
    actions: [{ label: "15 分鐘 AI 體檢", route: "diagnosis", kind: "coral" }],
    motion: "motion-about",
    hero: {
      image: "./assets/hero/hero-about-large.png",
      eyebrow: "關於我們",
      title: '<span class="hero-title-main">用科技與溫度，</span><span class="hero-title-sub">陪伴孩子找到<span class="teal">適合自己的</span>學習方式。</span>',
      copy: "EduBaania 結合 AI 學習診斷、專業學習教練與可視化數據，為每位孩子打造專屬的學習路徑，讓學習更有效、陪伴更安心。",
      primary: "15 分鐘 AI 體檢",
      secondary: "看品牌理念",
      actions: false,
      points: [
        ["heart", "以孩子為中心", "尊重每個孩子的節奏與學習風格"],
        ["shield", "有效且安心", "科學方法 × 人本陪伴雙重守護"],
        ["chart", "持續成長", "數據追蹤 × 反饋優化每一步"],
      ],
      widgets: [
        ["6 大", "伴伴優勢"],
        ["AI + 教練", "有效學習循環"],
        ["4.9/5", "家長滿意度"],
      ],
    },
    blocks: [
      { type: "aboutInteractive" },
      { type: "advantageSix" },
      { type: "formula" },
      { type: "aboutData" },
    ],
    footer: "about",
  },
  programs: {
    nav: "課程方案",
    cta: "15 分鐘 AI 體檢",
    navItems: [
      ["programs", "課程方案"],
      ["system", "學習系統"],
      ["progress", "成功案例"],
      ["parent", "學習資源"],
      ["about", "關於我們"],
    ],
    actions: [{ label: "15 分鐘 AI 體檢", route: "diagnosis" }],
    motion: "motion-programs",
    hero: {
      image: "./assets/hero/hero-programs-large.png",
      eyebrow: "先診斷，再建議",
      title: '<span class="hero-title-main">先體檢，</span><span class="hero-title-sub">再判斷孩子需要<span class="accent">節奏陪伴</span>還是弱點突破</span>',
      copy: "家長不用一開始就猜方案。先用 15 分鐘 AI 學習體檢看懂孩子的知識缺口、學習行為與家庭節奏，再決定適合的陪伴強度。",
      primary: "15 分鐘 AI 體檢",
      secondary: "比較方案",
      actions: false,
      points: [
        ["heart", "我們相信", "每個進步都值得被看見"],
        ["brain", "AI 智能學習系統", "專屬陪伴計畫，讓學習更有效"],
        ["users", "陪伴每位學習者", "走出屬於自己的成長軌跡"],
      ],
      widgets: [
        ["方案一", "自主學習 + 教練班"],
        ["VS", "依需求選擇"],
        ["方案二", "自主學習 + 真人一對一"],
      ],
    },
    blocks: [
      { type: "comparison" },
      { type: "fit" },
      { type: "recommend" },
      { type: "programStats" },
    ],
    footer: "programs",
  },
  progress: {
    nav: "成效數據",
    cta: "立即體驗",
    brandSub: "",
    navItems: [["progress", "成效數據"]],
    actions: [],
    motion: "motion-progress",
    hero: {
      image: "./assets/hero/hero-progress-large.png",
      showWidgets: true,
      eyebrow: "成效數據",
      title: '<span class="hero-title-main">孩子有沒有真的變好，</span><span class="hero-title-sub">家長每週都能<span class="teal">看得懂</span></span>',
      copy: "不只看一次考試分數，而是看學習時間、任務完成、弱點改善與教練建議，讓進步不再只靠感覺。",
      primary: "開始看見成長",
      secondary: "了解報告",
      actions: false,
      points: [
        ["heart", "理解程度", "即時掌握"],
        ["brain", "AI 智能分析", "精準診斷"],
        ["users", "教練陪伴", "持續優化"],
      ],
      widgets: [
        { type: "line", label: "本週學習時間", big: "8 小時 24 分", small: "較上週提升" },
        { type: "donut", label: "掌握度總覽", big: "82%", small: "已掌握", legend: ["已掌握 82%", "學習中 13%", "待加強 5%"] },
        { type: "trend", label: "弱點改善", big: "+24%", small: "較上週提升" },
      ],
    },
    blocks: [
      { type: "metricStrip" },
      { type: "dashboard" },
      { type: "dataWhy" },
    ],
  },
  diagnosis: {
    nav: "AI 學習體檢",
    cta: "15 分鐘 AI 體檢",
    brandSub: "",
    navItems: [
      ["diagnosis", "AI 學習診斷"],
      ["programs", "課程方案"],
      ["progress", "成功案例"],
      ["parent", "家長見證"],
      ["about", "關於伴伴辦學"],
    ],
    actions: [{ label: "15 分鐘 AI 體檢", route: "diagnosis", kind: "coral" }],
    motion: "motion-diagnosis",
    hero: {
      image: "./assets/hero/hero-diagnosis-large.png",
      showWidgets: true,
      pointsBeforeActions: true,
      eyebrow: "15 分鐘 AI 學習體檢",
      title: '<span class="hero-title-main"><span class="teal">15 分鐘</span>先看懂孩子，</span><span class="hero-title-sub">今天就知道下一步</span>',
      copy: "體檢不是貼標籤，而是整理知識缺口圖譜、錯因分析、學習行為畫像與 7 天改善建議，讓家長知道孩子該先補哪裡。",
      primary: "開始 15 分鐘 AI 學習體檢",
      secondary: "看體檢報告",
      note: "體檢約需 15 分鐘",
      actions: [{ label: "開始 15 分鐘 AI 學習體檢", route: "diagnosis", kind: "coral" }],
      points: [
        ["brain", "知識缺口圖譜", "精準找出盲點"],
        ["target", "錯因分析", "看懂為什麼錯"],
        ["calendar", "7 天改善建議", "今天知道下一步"],
      ],
      widgets: [
        { type: "score", label: "整體掌握度", big: "72", small: "/100", caption: "中上", detail: "知識缺口已定位", trend: true },
        { type: "list", label: "體檢輸出", items: ["知識缺口圖譜", "錯因分析", "學習行為畫像"] },
        { type: "bars", label: "7 天優先補強", items: [46, 72, 54, 88, 62] },
      ],
    },
    blocks: [
      { type: "diagnosisSteps" },
      { type: "report" },
      { type: "weakness" },
      { type: "recommendationPanel" },
      { type: "diagnosisCompanion" },
    ],
  },
  system: {
    nav: "學習方式",
    cta: "15 分鐘 AI 體檢",
    brandSub: "Ban Ban Learning",
    navItems: [
      ["system", "學習方式"],
      ["programs", "課程方案"],
      ["progress", "成功案例"],
      ["parent", "家長中心"],
      ["about", "關於我們"],
    ],
    actions: [
      { label: "15 分鐘 AI 體檢", route: "diagnosis", kind: "sky" },
    ],
    motion: "motion-system",
    hero: {
      image: "./assets/hero/hero-system-large.png",
      eyebrow: "AI × 教練雙引擎",
      title: '<span class="hero-title-main">孩子每天做什麼、</span><span class="hero-title-sub">卡在哪裡，家長都能看懂</span>',
      copy: "AI 把弱點拆成每日任務，教練負責提醒與調整，週報把孩子這週的進步與下一步整理給家長。",
      primary: "開始 15 分鐘 AI 體檢",
      secondary: "了解學習旅程",
      actions: [{ label: "開始 15 分鐘 AI 體檢", route: "diagnosis" }],
      points: [
        ["heart", "我們相信", "每個進步都值得被看見"],
        ["brain", "AI 智能學習系統", "專屬陪伴計畫，讓學習更有效"],
        ["users", "陪伴每個學習者", "走出屬於自己的成長軌跡"],
      ],
      widgets: [
        ["6 步驟", "完整學習旅程"],
        ["每日任務", "養成學習節奏"],
        ["雙引擎", "AI × 教練"],
      ],
    },
    blocks: [
      { type: "journey" },
      { type: "rhythm" },
      { type: "engine" },
      { type: "studentDash" },
    ],
  },
  coach: {
    nav: "教練陪跑",
    cta: "15 分鐘 AI 體檢",
    brandSub: "學習路上，陪你同行",
    navItems: [
      ["about", "關於伴伴"],
      ["programs", "課程介紹"],
      ["progress", "學員成果"],
      ["coach", "教練陪跑"],
      ["parent", "家長見證"],
    ],
    actions: [{ label: "15 分鐘 AI 體檢", route: "diagnosis", kind: "coral" }],
    motion: "motion-coach",
    hero: {
      image: "./assets/hero/hero-coach-large.png",
      eyebrow: "教練陪跑",
      title: '<span class="hero-title-main">家長不用每天當監工，</span><span class="hero-title-sub">孩子卡住時有人<span class="accent">接住他。</span></span>',
      copy: "教練不是只盯進度，而是在孩子拖延、卡題、失去信心時，協助拆小任務、給回饋，也把狀態同步給家長。",
      primary: "開始 15 分鐘 AI 體檢",
      secondary: "了解陪跑流程",
      actions: false,
      points: [
        ["heart", "有溫度的陪伴", "理解孩子的情緒，給予支持與鼓勵"],
        ["target", "有方向的引導", "專業教練規劃策略，幫助孩子穩定進步"],
        ["users", "有成效的成長", "持續追蹤與回饋，看得見的學習成果"],
      ],
      widgets: [
        ["提醒", "養成規律任務"],
        ["追蹤", "掌握進度"],
        ["回饋", "給予具體建議"],
      ],
    },
    blocks: [
      { type: "coachRoles" },
      { type: "coachPlusAi" },
      { type: "weeklyFlow" },
      { type: "reassure" },
    ],
  },
  faq: {
    nav: "諮詢方案",
    cta: "15 分鐘 AI 體檢",
    brandSub: "",
    navItems: [
      ["system", "產品特色"],
      ["faq", "諮詢流程"],
      ["progress", "學習成效"],
      ["faq", "購買流程"],
      ["parent", "家長見證"],
      ["faq", "常見問題"],
    ],
    actions: [{ label: "15 分鐘 AI 體檢", route: "diagnosis" }],
    motion: "motion-pricing",
    hero: {
      image: "./assets/hero/hero-faq-large.png",
      eyebrow: "方案與諮詢",
      title: '<span class="hero-title-main">先看懂需求，</span><span class="hero-title-sub">再決定孩子需要哪種陪伴</span>',
      copy: "家長不用先比較方案。從 15 分鐘 AI 學習體檢開始，先知道孩子卡在哪裡、需要多少陪伴，再討論下一步。",
      primary: "開始 15 分鐘 AI 體檢",
      secondary: "方案比較",
      actions: [
        { label: "開始 15 分鐘 AI 體檢", route: "diagnosis" },
        { label: "方案比較", route: "programs", kind: "secondary" },
      ],
      points: [
        ["heart", "專屬診斷報告", "掌握孩子狀態"],
        ["brain", "客製學習方案", "依孩子需求調整"],
        ["users", "教練全程陪跑", "學習不再孤單"],
      ],
      widgets: [
        ["15 分鐘", "先完成 AI 體檢"],
        ["體檢後", "判斷陪伴強度"],
        ["7 天建議", "知道下一步"],
      ],
    },
    blocks: [
      { type: "consultFlow" },
      { type: "pricingPlans" },
      { type: "pricingAssist" },
      { type: "whyChoose" },
      { type: "faq" },
    ],
    footer: "faq",
  },
  parent: {
    nav: "家長中心",
    cta: "15 分鐘 AI 體檢",
    brandSub: "AiMii Learning System",
    navItems: [
      ["programs", "課程介紹"],
      ["progress", "學習成果"],
      ["parent", "家長中心"],
    ],
    actions: [{ label: "15 分鐘 AI 體檢", route: "diagnosis" }],
    motion: "motion-parent",
    hero: {
      image: "./assets/hero/hero-parent-large.png",
      eyebrow: "家長中心，讓您看懂孩子每一步",
      title: '<span class="hero-title-main">少一點追問，</span><span class="hero-title-sub">多一點看得懂的<span class="accent">孩子狀態</span></span>',
      copy: "每週把孩子做了什麼、哪裡卡住、教練怎麼調整整理給家長，讓陪伴不再只是每天催促與猜測。",
      primary: "開始 15 分鐘 AI 體檢",
      secondary: "看家長回饋",
      actions: false,
      points: [
        ["brain", "AI 診斷", "精準掌握學習狀況"],
        ["users", "真人教練", "專屬陪伴引導學習"],
        ["doc", "學習報告", "清楚透明進步看得見"],
        ["chat", "即時回饋", "即時互動，快速解答"],
      ],
      widgets: [
        ["安心", "透明學習歷程"],
        ["回饋", "每週保持連結"],
        ["陪伴", "一起面對孩子成長"],
      ],
    },
    blocks: [
      { type: "concerns" },
      { type: "parentCare" },
      { type: "reasons" },
      { type: "testimonials" },
      { type: "connection" },
    ],
  },
};

const productLensContent = {
  home: {
    label: "15 分鐘 AI 學習體檢入口",
    title: "先體檢，再處方，讓自學有效發生",
    copy: "首頁先讓家長一次看懂：AI 學習體檢找出知識缺口，系統轉成 7 天建議，孩子每天知道下一步。",
    image: "./assets/generated/premium-home/hero-learning-os.png",
    tabs: [
      ["01", "AI 先體檢", "先找出孩子真正卡住的知識點，避免一開始就補錯方向。", "15 分鐘"],
      ["02", "處方有節奏", "系統把弱點拆成 7 天內能開始的任務，讓孩子知道今天只要完成什麼。", "7 天建議"],
      ["03", "回報看得懂", "追蹤卡關點，家長也能用報告看見真實進展。", "每週回饋"],
    ],
    proof: ["AI 體檢", "7 天處方", "進展回報"],
  },
  about: {
    label: "伴伴方法論",
    title: "我們把有效學習拆成可被看見的流程",
    copy: "每一次陪伴都對應到孩子的學習狀態，從情緒、習慣到成效，都能被追蹤、被理解、被調整。",
    image: "./assets/hero/hero-about-large.png",
    tabs: [
      ["01", "以孩子為中心", "先理解孩子的程度與節奏，再決定學習路徑。", "個人化"],
      ["02", "AI 做判斷", "用數據補足肉眼看不見的弱點與迷思概念。", "精準分析"],
      ["03", "教練做陪伴", "把提醒、鼓勵、回饋變成穩定前進的力量。", "真人陪跑"],
    ],
    proof: ["看見狀態", "找到策略", "穩定成長"],
  },
  system: {
    label: "系統體驗",
    title: "家長看得懂孩子每天如何前進",
    copy: "系統把孩子卡住的地方拆成每日任務，教練負責提醒與調整，家長每週看見進度、弱點和下一步。",
    image: "./assets/hero/hero-system-large.png",
    tabs: [
      ["01", "今天做什麼", "把弱點拆成孩子做得到的小任務，不再面對一整片壓力。", "每日清楚"],
      ["02", "卡住誰來接", "教練每週看狀態，該提醒、該鼓勵、該調整都有人負責。", "有人陪跑"],
      ["03", "家長看什麼", "用週報呈現時間、弱點、成果與教練建議，不用每天追問。", "一眼看懂"],
    ],
    proof: ["每日任務", "週週檢視", "透明報告"],
  },
  diagnosis: {
    label: "診斷流程",
    title: "先知道問題在哪裡，再開始有效學習",
    copy: "診斷頁的任務是讓家長放心：孩子不是被貼標籤，而是得到一份可以執行的學習地圖。",
    image: "./assets/hero/hero-diagnosis-large.png",
    tabs: [
      ["01", "能力測驗", "用適性題目理解程度，而不是只看單次分數。", "真實程度"],
      ["02", "弱點定位", "把錯誤拆到知識點，找出最該先補的部分。", "盲點排序"],
      ["03", "學習建議", "把診斷結果轉成每日任務、路徑與預估進步。", "可執行"],
    ],
    proof: ["測驗", "分析", "建議"],
  },
  programs: {
    label: "方案選擇",
    title: "不是先選方案，而是先判斷孩子需要什麼陪伴",
    copy: "有些孩子需要先建立節奏，有些孩子需要突破弱點。家長先看體檢結果，再選陪伴強度，才不會盲猜。",
    image: "./assets/content/course-bag.png",
    tabs: [
      ["01", "建立習慣", "教練班用同儕節奏與固定任務，幫孩子穩定前進。", "教練班"],
      ["02", "突破弱點", "一對一把注意力集中在孩子卡住的關鍵題型。", "真人一對一"],
      ["03", "持續校準", "依體檢與週報持續調整，不讓第一次選擇變成壓力。", "可再調整"],
    ],
    proof: ["教練班節奏", "一對一突破", "依數據調整"],
  },
  progress: {
    label: "成效儀表板",
    title: "每週看見孩子有沒有真的變好",
    copy: "把學習時間、掌握度、弱點改善與教練建議放在同一個視角，讓家長知道努力是否用在對的地方。",
    image: "./assets/hero/hero-progress-large.png",
    tabs: [
      ["01", "時間看得見", "知道孩子投入多久，以及是否形成穩定節奏。", "8.5 小時"],
      ["02", "掌握度看得見", "用科目與知識點分布看出真正理解的程度。", "82%"],
      ["03", "改善看得見", "弱點不只被列出，也能看見是否正在縮小。", "+24%"],
    ],
    proof: ["學習時間", "掌握分布", "改善趨勢"],
  },
  coach: {
    label: "陪跑服務",
    title: "教練把學習變成有人同行的日常",
    copy: "孩子需要的不只是答案，而是有人在他想放棄前提醒、在卡住時陪他拆解、在進步時讓他被看見。",
    image: "./assets/hero/hero-coach-large.png",
    tabs: [
      ["01", "提醒", "把任務變成可完成的小步驟，降低拖延與逃避。", "穩定節奏"],
      ["02", "鼓勵", "用具體回饋肯定努力，讓孩子願意再試一次。", "建立信心"],
      ["03", "調整", "依表現調整策略，不讓孩子一直用錯方法硬撐。", "策略陪伴"],
    ],
    proof: ["提醒", "鼓勵", "調整"],
  },
  faq: {
    label: "諮詢路徑",
    title: "先理解孩子需求，再討論下一步",
    copy: "這一頁幫家長看懂諮詢流程：先做體檢、再看建議、最後依孩子狀態討論陪伴方式，降低選錯成本。",
    image: "./assets/hero/hero-faq-large.png",
    tabs: [
      ["01", "先體檢", "用學習狀態與目標判斷孩子真正需要的陪伴強度。", "15 分鐘"],
      ["02", "再建議", "依孩子情況說明適合的陪伴方式與下一步。", "少走彎路"],
      ["03", "後追蹤", "開始後持續看週報與教練回饋，陪伴方式可再調整。", "持續校準"],
    ],
    proof: ["診斷", "建議", "追蹤"],
  },
  parent: {
    label: "家長中心",
    title: "一眼看懂孩子正在被怎麼陪伴",
    copy: "把家長最在意的狀態、回覆與下一步放在同一條路徑上：先看見孩子在哪裡，再知道誰會接手、何時同步。",
    image: "./assets/hero/hero-parent-large.png",
    tabs: [
      ["01", "先看狀態", "用週報整理孩子這週做了什麼、卡在哪裡、哪裡正在變好。", "1 分鐘看懂"],
      ["02", "有人陪跑", "教練依孩子狀態提醒、拆題與鼓勵，家長不用獨自接住所有問題。", "每週追蹤"],
      ["03", "週週調整", "把家長回饋、孩子狀態與系統數據回到下一週安排。", "持續校準"],
    ],
    proof: ["看見狀態", "教練陪跑", "同步調整"],
  },
};

const lensTakeaways = {
  home: {
    lead: "家長不用先判斷要補哪一科，先看見孩子的狀態，再把學習拆成孩子願意開始的小步驟。",
    items: [
      ["少走彎路", "先用診斷找出真正卡住的地方，避免把時間花在已經會的內容。"],
      ["每天清楚", "孩子每天看到明確任務，不需要自己面對一整片模糊的學習壓力。"],
      ["家長安心", "進度、弱點和教練回饋放在同一個視角，陪伴不再只靠感覺。"],
    ],
  },
  about: {
    lead: "伴伴辦學把學習成效設計成一個可被追蹤的服務流程，讓孩子、家長與教練都知道下一步。",
    items: [
      ["先理解人", "不是只看分數，而是看孩子的程度、習慣、情緒和卡關型態。"],
      ["再安排路徑", "AI 分析負責找方向，教練陪伴負責把方向變成可執行的日常。"],
      ["最後看變化", "每週把成果和建議同步給家長，讓進步有證據，也有後續策略。"],
    ],
  },
  programs: {
    lead: "方案不是一開始用家長直覺選，而是依孩子需要的陪伴密度、弱點深度與學習節奏來判斷。",
    items: [
      ["教練班建立節奏", "適合需要固定任務、同儕氛圍和教練提醒的孩子。"],
      ["一對一突破卡點", "適合已經知道弱點，需要密集拆解題型與觀念的孩子。"],
      ["可依數據調整", "開始後持續看報告，不把第一次選擇變成無法改變的決定。"],
    ],
  },
  progress: {
    lead: "成效數據把孩子的努力翻成家長看得懂的語言，讓每一次投入都能被記錄、比較與調整，也讓教練快速判斷下一週該加強哪裡。",
    items: [
      ["看時間", "知道孩子是否穩定投入，而不是只在考前短暫衝刺。"],
      ["看掌握", "用知識點和科目分布分辨真的理解，或只是暫時答對。"],
      ["看改善", "把弱點改善幅度做成趨勢，讓下一次練習更有方向。"],
      ["看建議", "教練會把數據轉成具體提醒，家長不需要自己解讀每一張圖表，也能知道下一步。"],
    ],
  },
  diagnosis: {
    lead: "診斷的價值不是給孩子貼標籤，而是把模糊的學習焦慮變成可以執行的改善清單。",
    items: [
      ["先測真實程度", "用適性題目理解孩子目前的位置，避免從太難或太簡單開始。"],
      ["再排弱點優先序", "把錯誤拆到知識點，先處理最影響學習成效的部分。"],
      ["最後給路徑", "把診斷轉成每日任務、練習順序和教練追蹤重點。"],
    ],
  },
  system: {
    lead: "系統頁要讓家長看懂：AI 不是拿來炫技，而是幫教練和孩子更快找到正確行動。",
    items: [
      ["AI 負責判斷", "依學習表現推薦題目、拆任務、追蹤掌握度與弱點變化。"],
      ["教練負責陪伴", "提醒孩子開始、陪他拆解卡點，也在低潮時拉他回到節奏。"],
      ["家長看見全貌", "用透明報告看懂時間、進度、弱點和下一步，而不是只等考試結果。"],
    ],
  },
  coach: {
    lead: "教練陪跑的重點是把孩子最容易中斷的地方接住：開始、卡住、失去信心、需要調整方法。孩子感覺有人在旁邊理解自己，才更容易把學習持續下去，也能在遇到挫折時知道還有下一步可以試。",
    items: [
      ["有人提醒開始", "把大目標切成今天做得到的任務，降低拖延與逃避，讓孩子先跨出第一步。"],
      ["有人陪他拆題", "卡關時不是直接給答案，而是帶孩子理解為什麼會錯，逐步建立解題方法。"],
      ["有人看見努力", "把進步用具體回饋說出來，讓孩子知道自己正在變好，也願意再試一次。"],
      ["有人調整策略", "當練習效果不佳時，教練會回到數據與孩子狀態，重新安排節奏。"],
      ["有人同步家長", "家長會知道孩子這週做了什麼、遇到什麼困難，以及下週會怎麼陪他前進與調整。"],
    ],
  },
  faq: {
    lead: "諮詢頁的任務是降低選擇壓力：先理解孩子需求，再選擇適合的陪伴強度與方案。",
    items: [
      ["先做體檢", "用目前程度、目標與學習習慣判斷需要哪一種陪伴。"],
      ["再看建議", "清楚看見孩子需要節奏陪伴、弱點突破，或先建立每日任務。"],
      ["開始後追蹤", "用週報和教練建議持續校準，讓方案跟著孩子狀態調整。"],
    ],
  },
  parent: {
    lead: "家長安心不是收到更多通知，而是每週拿到足夠清楚、足夠可行的孩子狀態與下一步建議，知道孩子正在被持續關注。",
    items: [
      ["少一點追問", "報告把學習時間、掌握度與弱點整理好，家長不用每天靠猜。"],
      ["多一點回覆", "教練把孩子的狀況轉成可以溝通的語言，讓親子對話更輕鬆。"],
      ["一起調節奏", "家長、孩子和教練共同調整目標，陪伴變成同一個方向。"],
      ["問題有人接", "當孩子停滯或焦慮時，家長能快速知道原因，也知道可以怎麼支持。"],
    ],
  },
};

const app = document.querySelector("#app");
let headerScrollHandler = null;
let guideObserver = null;
let guideScrollHandler = null;
let heroCarouselTimer = null;
let heroCarouselVisibilityHandler = null;
let depthScrollHandler = null;
let depthPointerHandler = null;
let depthObserver = null;
let desktopScaleResizeHandler = null;
let desktopScaleFrame = null;
let desktopScaleObserver = null;

function getRoute() {
  const raw = window.location.hash.replace(/^#\/?/, "") || "home";
  return pages[raw] ? raw : "home";
}

function icon(name, tone = "") {
  const safeName = icons[name] ? name : "heart";
  const className = ["icon", tone].filter(Boolean).join(" ");
  return `<span class="${className}" data-icon="${safeName}" aria-hidden="true">${icons[safeName]}</span>`;
}

function brand(_subtitle = "Banban Education", route = "home") {
  return `
    <a class="brand brand-${route}" href="#/home" aria-label="伴伴辦學首頁">
      <img class="brand-logo" src="./assets/hero/logo.png" alt="伴伴辦學科技 EduBaania" decoding="async" />
    </a>`;
}

function header(route) {
  const page = pages[route];
  const sharedNav = [
    ["about", "關於伴伴"],
    ["system", "如何運作"],
    ["programs", "課程方案"],
    ["progress", "成效故事"],
    ["parent", "家長中心"],
    ["faq", "常見問題"],
  ];
  const nav = sharedNav;
  const actions = [{ label: "15 分鐘 AI 體檢", route: "diagnosis", kind: route === "diagnosis" ? "coral" : "" }];

  return `
    <header class="site-header">
      ${brand(page.brandSub, route)}
      <nav class="site-nav" aria-label="主選單">
        ${nav
          .map(
            ([id, label]) => {
              const current = route === id;
              return `<a href="#/${id}" ${current ? 'aria-current="page"' : ""}>${label}</a>`;
            },
          )
          .join("")}
      </nav>
      <div class="header-actions">
        ${actions
          .map((action) => {
            const className = ["btn", "small", action.kind === "secondary" ? "secondary" : "", action.kind === "coral" ? "coral" : "", action.kind === "sky" ? "sky-btn" : ""]
              .filter(Boolean)
              .join(" ");
            return `<a class="${className}" href="#/${action.route}">${action.label}</a>`;
          })
          .join("")}
      </div>
    </header>`;
}

function microLayer(type) {
  const commonLine =
    '<span class="draw-line"><svg viewBox="0 0 220 120"><path d="M8 90 C42 72 55 98 86 66 S138 68 162 44 196 50 214 20"/></svg></span>';
  const layers = {
    "motion-home": '<span class="shine"></span><span class="pulse"></span>',
    "motion-about": '<span class="blob"></span>',
    "motion-programs": '<span class="split-line"></span>',
    "motion-progress": commonLine,
    "motion-diagnosis": '<span class="scan"></span>' + commonLine,
    "motion-system": '<span class="node"></span><span class="node"></span><span class="node"></span>',
    "motion-coach": '<span class="blob"></span><span class="heart-wave"></span>',
    "motion-pricing": '<span class="price-ring"></span><span class="price-dot"></span><span class="price-dot"></span><span class="price-dot"></span>',
    "motion-parent": '<span class="care-orbit"></span><span class="care-dot"></span><span class="care-dot"></span>',
  };
  return `<div class="micro-layer ${type}" aria-hidden="true">${layers[type] || ""}</div>`;
}

function heroWidget(item, index) {
  const data = Array.isArray(item) ? { big: item[0], small: item[1] } : item;
  const position = ["one", "two", "three"][index] || "one";
  const type = data.type || "text";
  const chart =
    type === "line" || type === "trend"
      ? `<strong>${data.big}</strong><svg class="widget-line" viewBox="0 0 150 66"><path d="M8 48 C28 44 32 52 48 38 S78 42 94 28 118 33 142 12"/></svg>`
      : type === "donut"
        ? `<span class="widget-donut"><b>${data.big}</b></span>${data.legend ? `<div class="widget-mini-legend">${data.legend.map((item) => `<span>${item}</span>`).join("")}</div>` : ""}`
        : type === "score"
          ? `<div class="widget-score-row"><span class="widget-donut score"><b>${data.big}</b><em>${data.small || ""}</em></span><span class="widget-score-caption">${data.caption || ""}</span></div>${data.trend ? '<svg class="widget-line widget-score-line" viewBox="0 0 150 66"><path d="M8 52 C26 46 34 38 50 40 S77 50 94 30 120 20 142 16"/></svg>' : ""}`
          : type === "bars"
            ? `<div class="widget-bars">${data.items.map((value) => `<i style="height:${value}%"></i>`).join("")}</div>`
            : type === "list"
              ? `<ul class="widget-list">${data.items.map((value) => `<li>${value}</li>`).join("")}</ul>`
              : "";
  return `
    <div class="hero-widget ${position} widget-type-${type} ${data.trend ? "has-trend" : ""}">
      ${data.label ? `<span class="widget-label">${data.label}</span>` : ""}
      ${chart || `<strong>${data.big}</strong><span>${data.small}</span>`}
      ${chart && type !== "list" && type !== "bars" && type !== "score" ? `<span>${data.caption || data.small || ""}</span>` : ""}
      ${data.detail ? `<small class="widget-detail">${data.detail}</small>` : ""}
    </div>`;
}

function heroTasteBadge(route) {
  const data = productLensContent[route] || productLensContent.home;
  const first = data.tabs[0];
  return `<div class="hero-taste-badge">
    <span class="badge-ping" aria-hidden="true"></span>
    <span class="badge-label">${data.label}</span>
    <strong>${first[1]}</strong>
    <span class="badge-arrow" aria-hidden="true">→</span>
  </div>`;
}

function heroFlowCommand(route) {
  const data = productLensContent[route] || productLensContent.home;
  return `<div class="hero-flow-command" aria-label="${data.label}三步流程">
    <span class="hero-flow-kicker">FLOW</span>
    <div class="hero-flow-track">
      ${data.tabs
        .map(
          ([num, label]) => `<span>
            <b>${num}</b>
            ${label}
          </span>`,
        )
        .join('<i aria-hidden="true">/</i>')}
    </div>
  </div>`;
}

function heroPreviewWall(route, page) {
  if (page.hero.showWidgets) return "";
  const data = productLensContent[route] || productLensContent.home;
  const previewVisual = scenarioRoutes.has(route) ? heroPreviewDiagram(route, data) : `<figure><img src="${data.image}" alt="" loading="lazy" decoding="async" /></figure>`;
  const first = data.tabs[0];
  const second = data.tabs[1];
  const third = data.tabs[2];
  const metrics = (page.hero.widgets || []).map((item) => (Array.isArray(item) ? item : [item.big, item.small || item.caption || ""]));
  const primaryMetric = metrics[0] || [first[3], first[1]];
  const secondaryMetric = metrics[1] || [second[3], second[1]];
  return `<div class="hero-preview-wall" aria-hidden="true">
    <article class="hero-preview-card preview-main">
      <div>
        <span>${data.label}</span>
        <strong>${first[1]}</strong>
        <p>${first[2]}</p>
      </div>
      ${previewVisual}
    </article>
    <article class="hero-preview-card preview-metric">
      <span>${primaryMetric[1]}</span>
      <strong>${primaryMetric[0]}</strong>
      <em>${first[3]}</em>
    </article>
    <article class="hero-preview-card preview-proof">
      <span>${secondaryMetric[1]}</span>
      <strong>${secondaryMetric[0]}</strong>
      <div>
        <i>${first[1]}</i>
        <i>${second[1]}</i>
        <i>${third[1]}</i>
      </div>
    </article>
  </div>`;
}

const scenarioRoutes = new Set(["diagnosis", "programs", "progress", "coach", "parent"]);

function heroPreviewDiagram(route, data) {
  const iconNames = {
    diagnosis: ["doc", "brain", "target"],
    programs: ["users", "target", "sliders"],
    progress: ["clock", "chart", "star"],
    coach: ["bell", "chat", "heart"],
    parent: ["doc", "chat", "users"],
  }[route] || ["brain", "chart", "heart"];
  return `<figure class="hero-preview-diagram ${route}" aria-hidden="true">
    <span>${data.label}</span>
    <div>${iconNames.map((name, index) => `${icon(name, index === 1 ? "coral" : index === 2 ? "sky" : "")}`).join("")}</div>
    <i></i>
  </figure>`;
}

function tasteLoopStrip(route) {
  const data = productLensContent[route] || productLensContent.home;
  return `<section class="taste-loop-strip" aria-label="${data.label}">
    <div class="taste-loop-copy">
      <span><i aria-hidden="true"></i>${data.label}</span>
      <strong>三步看懂這一頁</strong>
      <p>${data.copy}</p>
    </div>
    <div class="taste-loop-rail">
      ${data.tabs
        .map(
          ([num, title, copy, metric]) => `<article class="taste-loop-step">
            <span>${num}</span>
            <strong>${title}</strong>
            <p>${copy}</p>
            <em>${metric}</em>
          </article>`,
        )
        .join("")}
    </div>
  </section>`;
}

function heroActionsFor(page) {
  return page.hero.actions === false
    ? [{ label: "開始 15 分鐘 AI 體檢", route: "diagnosis", kind: page.motion === "motion-coach" || page.motion === "motion-diagnosis" ? "coral" : "" }]
    : page.hero.actions || [
        { label: "開始 15 分鐘 AI 體檢", route: "diagnosis", kind: page.motion === "motion-coach" || page.motion === "motion-diagnosis" ? "coral" : "" },
        { label: page.hero.secondary, route: "programs", kind: "secondary" },
      ];
}

function heroPointsFor(page) {
  return page.hero.showPoints === false
    ? ""
    : `<div class="hero-points">
        ${page.hero.points
          .map(
            ([iconName, title, copy], index) => `
              <div class="hero-point">
                ${icon(iconName, index === 1 ? "coral" : index === 2 ? "sky" : "")}
                <strong>${title}</strong>
                <span>${copy}</span>
              </div>`,
          )
          .join("")}
      </div>`;
}

function heroContent(page, route) {
  const heroActions =
    heroActionsFor(page);
  const pointsMarkup = heroPointsFor(page);
  const actionsMarkup = heroActions.length
    ? `<div class="hero-actions">${heroActions
        .map((action) => {
          const className = ["btn", action.kind === "secondary" ? "secondary" : "", action.kind === "coral" ? "coral" : "", action.kind === "sky" ? "sky-btn" : ""]
            .filter(Boolean)
            .join(" ");
          return `<a class="${className}" href="#/${action.route}">${action.label}<span class="btn-arrow" aria-hidden="true">→</span></a>`;
        })
        .join("")}</div>`
    : "";
  return `<div class="hero-content">
    ${page.hero.hideTasteBadge ? "" : heroTasteBadge(route)}
    <div class="eyebrow">${page.hero.eyebrow}</div>
    <h1>${page.hero.title}</h1>
    <p class="hero-copy">${page.hero.copy}</p>
    ${page.hero.pointsBeforeActions ? pointsMarkup : ""}
    ${actionsMarkup}
    ${page.hero.note ? `<p class="hero-note">${page.hero.note}</p>` : ""}
    ${
      page.hero.social
        ? `<div class="hero-social"><img src="${page.hero.social.image}" alt="" loading="lazy" decoding="async" /><span>${page.hero.social.text}</span></div>`
        : ""
    }
    ${page.hero.pointsBeforeActions ? "" : pointsMarkup}
    ${page.hero.hideFlow ? "" : heroFlowCommand(route)}
  </div>`;
}

function heroVisual(page, route, loading = "eager") {
  return `<div class="hero-visual">
    <div class="photo-card" data-premium-tilt><img src="${page.hero.image}" alt="" loading="${loading}" decoding="async" /></div>
    ${page.hero.showWidgets ? page.hero.widgets.map(heroWidget).join("") : ""}
    ${heroPreviewWall(route, page)}
  </div>`;
}

function siteDepthField(route) {
  return `<div class="site-depth-field depth-${route}" aria-hidden="true">
    <span class="depth-node depth-node-a"></span>
    <span class="depth-node depth-node-b"></span>
    <span class="depth-node depth-node-c"></span>
    <span class="depth-orbit depth-orbit-a"></span>
    <span class="depth-orbit depth-orbit-b"></span>
  </div>`;
}

function heroSlide(route, activeRoute, index) {
  const page = pages[route];
  const active = route === activeRoute;
  return `<article class="hero-slide page-${route} ${page.motion} ${active ? "is-active" : ""}" data-hero-slide data-route="${route}" data-index="${index}" aria-hidden="${active ? "false" : "true"}">
    ${heroContent(page, route)}
    ${heroVisual(page, route, active ? "eager" : "lazy")}
    ${microLayer(page.motion)}
  </article>`;
}

function heroCarousel(route) {
  const activeRoute = heroCarouselRouteSet.has(route) ? route : "home";
  const activeIndex = Math.max(0, heroCarouselRoutes.indexOf(activeRoute));
  return `<section class="hero hero-carousel" id="main-content" data-hero-carousel data-active-route="${activeRoute}" data-active-index="${activeIndex}" data-interval="6000" aria-roledescription="carousel" aria-label="伴伴辦學頁首輪播">
    <div class="hero-carousel-stage" style="--carousel-count: ${heroCarouselRoutes.length}">
      ${heroCarouselRoutes.map((slideRoute, index) => heroSlide(slideRoute, activeRoute, index)).join("")}
    </div>
  </section>`;
}

function hero(page, route) {
  if (heroCarouselRouteSet.has(route)) return heroCarousel(route);
  return `
    <section class="hero ${page.motion}" id="main-content">
      ${heroContent(page, route)}
      ${heroVisual(page, route)}
      ${microLayer(page.motion)}
    </section>`;
}

function lensIconName(route, index) {
  const iconSets = {
    home: ["brain", "calendar", "users"],
    about: ["heart", "brain", "users"],
    programs: ["target", "rocket", "sliders"],
    progress: ["clock", "chart", "target"],
    diagnosis: ["doc", "target", "rocket"],
    system: ["brain", "bell", "doc"],
    coach: ["bell", "heart", "sliders"],
    faq: ["calendar", "doc", "chart"],
    parent: ["doc", "chat", "users"],
  };
  return (iconSets[route] || iconSets.home)[index] || "heart";
}

function productLens(route) {
  const data = productLensContent[route] || productLensContent.home;
  const takeaways = lensTakeaways[route] || lensTakeaways.home;
  const panelBaseId = `lens-${route}`;
  const scenarioVisual = lensScenarioVisual(route, data);
  return `<section class="section product-lens" data-lens="${route}">
    <div class="lens-shell">
      <div class="lens-copy">
        <span class="lens-label">${data.label}</span>
        <h2>${data.title}</h2>
        <p>${data.copy}</p>
        <div class="lens-tabs lens-map-tabs" role="tablist" aria-label="${data.label}">
          ${data.tabs
            .map(
              ([num, tabTitle, _copy, metric], index) => `<button class="lens-tab lens-node node-${index + 1} ${index === 0 ? "is-active" : ""}" type="button" role="tab" id="${panelBaseId}-tab-${index}" aria-controls="${panelBaseId}-panel-${index}" aria-selected="${index === 0 ? "true" : "false"}" data-lens-tab="${index}">
                <span>${num}</span>
                <i class="lens-node-icon" aria-hidden="true">${icons[lensIconName(route, index)] || icons.heart}</i>
                <strong>${tabTitle}</strong>
                <small>${metric}</small>
              </button>`,
            )
            .join("")}
        </div>
      </div>
      <div class="lens-visual" aria-live="polite">
        <div class="lens-stage ${scenarioVisual ? "has-scenario" : ""}">
          ${scenarioVisual || `<figure class="lens-figure"><img src="${data.image}" alt="" loading="lazy" decoding="async" /></figure>`}
          <div class="lens-stage-caption" aria-hidden="true">
            <span>${data.label}</span>
            <strong>${data.proof.join(" → ")}</strong>
          </div>
        </div>
        <div class="lens-dashboard">
          ${data.tabs
            .map(
              ([num, tabTitle, copy, metric], index) => `<article class="lens-detail ${index === 0 ? "is-active" : ""}" role="tabpanel" id="${panelBaseId}-panel-${index}" aria-labelledby="${panelBaseId}-tab-${index}" data-lens-panel="${index}" ${index === 0 ? "" : "hidden"}>
                <span>${num}</span>
                <h3>${tabTitle}</h3>
                <p>${copy}</p>
                <strong>${metric}</strong>
              </article>`,
            )
            .join("")}
          <div class="lens-proof-grid" aria-label="${data.label}流程">
            ${data.proof.map((item, index) => `<button class="lens-proof ${index === 0 ? "is-active" : ""}" type="button" data-lens-tab="${index}" aria-pressed="${index === 0 ? "true" : "false"}">${item}</button>`).join("")}
          </div>
        </div>
      </div>
      <div class="lens-takeaways">
        <div>
          <strong>家長可以這樣理解</strong>
          <p>${takeaways.lead}</p>
        </div>
        <div class="lens-takeaway-list">
          ${takeaways.items
            .map(
              ([title, copy], index) => `<span>
                <b>${String(index + 1).padStart(2, "0")} ${title}</b>
                <em>${copy}</em>
              </span>`,
            )
            .join("")}
        </div>
      </div>
    </div>
  </section>`;
}

function lensScenarioVisual(route, data) {
  if (!scenarioRoutes.has(route)) return "";
  const activeLabels = data.tabs.map((tab) => tab[1]);
  const header = (title, tag = data.label) => `<div class="scenario-window-bar"><span></span><span></span><span></span><b>${title}</b><em>${tag}</em></div>`;
  if (route === "diagnosis") {
    return `<figure class="lens-scenario scenario-diagnosis" aria-label="AI 學習診斷系統示意圖">
      ${header("AI 診斷工作台", "15 分鐘")}
      <div class="scenario-diagnosis-grid">
        <article class="scenario-question-card">
          <small>適性題目 08 / 20</small>
          <strong>孩子卡在哪個觀念？</strong>
          <div><span>分數換算</span><span>應用題理解</span><span>閱讀推論</span></div>
        </article>
        <article class="scenario-scan-card">
          <span class="scan-beam"></span>
          ${icon("brain")}
          <strong>AI 分析中</strong>
          <small>錯誤模式、作答時間、知識點關聯</small>
        </article>
        <article class="scenario-report-card">
          <small>診斷結果</small>
          <strong>優先補強</strong>
          ${["分數應用", "題意轉換", "推論判斷"].map((item, index) => `<span class="${index === 0 ? "hot" : ""}">${item}</span>`).join("")}
        </article>
      </div>
      <div class="scenario-progress-track">${activeLabels.map((label, index) => `<span>${String(index + 1).padStart(2, "0")} ${label}</span>`).join("")}</div>
    </figure>`;
  }
  if (route === "programs") {
    return `<figure class="lens-scenario scenario-programs" aria-label="課程方案選擇示意圖">
      ${header("方案配對器", "依需求推薦")}
      <div class="scenario-program-columns">
        <article>
          <span>教練班</span>
          ${icon("users")}
          <strong>建立節奏</strong>
          <small>同儕氛圍、固定任務、穩定前進</small>
          <i style="--score:74%"></i>
        </article>
        <article>
          <span>真人一對一</span>
          ${icon("target", "coral")}
          <strong>突破弱點</strong>
          <small>專注卡點、即時回饋、深度陪伴</small>
          <i style="--score:88%"></i>
        </article>
      </div>
      <div class="scenario-recommend-strip">
        <b>系統建議</b>
        <span>先教練班建立節奏，遇到瓶頸再加一對一突破。</span>
      </div>
    </figure>`;
  }
  if (route === "progress") {
    return `<figure class="lens-scenario scenario-progress" aria-label="學習成效儀表板示意圖">
      ${header("成效儀表板", "本週進步")}
      <div class="scenario-metric-row">
        <article><small>學習時間</small><strong>8.5h</strong><span>+1.6h</span></article>
        <article><small>掌握度</small><strong>82%</strong><span>+6%</span></article>
        <article><small>弱點改善</small><strong>+24%</strong><span>穩定上升</span></article>
      </div>
      <div class="scenario-chart-board">
        <svg viewBox="0 0 420 180" aria-hidden="true">
          <path class="scenario-chart-area" d="M34 134 C82 116 106 120 146 92 S226 100 260 66 326 74 386 34 L386 158 L34 158Z" />
          <path class="scenario-chart-line" d="M34 134 C82 116 106 120 146 92 S226 100 260 66 326 74 386 34" />
        </svg>
        <div><span>數學</span><i style="width:86%"></i><b>86%</b></div>
        <div><span>英文</span><i style="width:78%"></i><b>78%</b></div>
      </div>
    </figure>`;
  }
  if (route === "coach") {
    return `<figure class="lens-scenario scenario-coach" aria-label="教練陪跑情境示意圖">
      ${header("教練陪跑室", "即時陪伴")}
      <div class="scenario-coach-room">
        <article class="scenario-task-panel">
          <small>今日任務</small>
          <strong>應用題 3 組</strong>
          <span>先拆題意，再練計算</span>
          <i style="width:68%"></i>
        </article>
        <article class="scenario-chat-panel">
          <p>這題先圈出關鍵條件，我陪你一步一步看。</p>
          <p>完成後我們把錯題放進明天複習。</p>
        </article>
        <article class="scenario-coach-status">
          ${icon("heart", "coral")}
          <strong>教練在線</strong>
          <span>提醒、鼓勵、調整</span>
        </article>
      </div>
    </figure>`;
  }
  return `<figure class="lens-scenario scenario-parent" aria-label="家長安心同步中心示意圖">
    ${header("家長同步中心", "每週更新")}
    <div class="scenario-parent-grid">
      <article class="scenario-parent-report">
        <small>本週週報</small>
        <strong>孩子正在穩定前進</strong>
        <div><span>學習時長</span><b>175 分</b></div>
        <div><span>完成率</span><b>88%</b></div>
      </article>
      <article class="scenario-parent-message">
        <p>孩子這週遇到閱讀推論卡點，下週會先補這一段。</p>
        <span>教練回覆中</span>
      </article>
      <article class="scenario-parent-loop">
        ${["報告", "回饋", "調整"].map((item) => `<span>${item}</span>`).join("<i></i>")}
      </article>
    </div>
  </figure>`;
}

const blockGuideLabels = {
  pain: "學習困擾",
  homeAdvantagePanel: "學習優勢",
  why: "選擇理由",
  plans: "課程方案",
  stats: "成效數據",
  aboutInteractive: "看懂伴伴",
  advantageSix: "六大優勢",
  formula: "有效循環",
  aboutData: "安心數據",
  comparison: "方案比較",
  fit: "適合對象",
  recommend: "需求推薦",
  programStats: "信賴證據",
  metricStrip: "核心指標",
  dashboard: "成效儀表板",
  dataWhy: "數據價值",
  diagnosisSteps: "診斷步驟",
  report: "報告範例",
  weakness: "弱點分析",
  recommendationPanel: "學習建議",
  diagnosisCompanion: "學習夥伴",
  journey: "學習旅程",
  rhythm: "學習節奏",
  engine: "雙引擎",
  studentDash: "透明後台",
  coachRoles: "教練角色",
  coachPlusAi: "AI 加教練",
  weeklyFlow: "陪跑流程",
  reassure: "安心與動力",
  consultFlow: "諮詢流程",
  pricingPlans: "陪伴方案",
  pricingAssist: "方案協助",
  whyChoose: "家長選擇",
  faq: "常見問題",
  concerns: "家長擔心",
  parentCare: "安心系統",
  reasons: "安心理由",
  testimonials: "真實回饋",
  connection: "每週連結",
};

function pageGuide(route, page) {
  const lens = productLensContent[route] || productLensContent.home;
  const items = [
    "開場",
    lens.label,
    ...page.blocks.map((block) => blockGuideLabels[block.type] || "重點內容"),
    "立即行動",
  ];
  return `<aside class="page-guide" aria-label="本頁導覽">
    <span class="page-guide-label">閱讀導覽</span>
    <div class="page-guide-track">
      ${items
        .map(
          (label, index) => `<button class="page-guide-dot ${index === 0 ? "is-active" : ""}" type="button" data-guide-index="${index}" aria-current="${index === 0 ? "true" : "false"}">
            <span>${String(index + 1).padStart(2, "0")}</span>
            <strong>${label}</strong>
          </button>`,
        )
        .join("")}
    </div>
  </aside>`;
}

function compactPageGuide(labels) {
  return `<aside class="page-guide" aria-label="本頁導覽">
    <span class="page-guide-label">閱讀導覽</span>
    <div class="page-guide-track">
      ${labels
        .map(
          (label, index) => `<button class="page-guide-dot ${index === 0 ? "is-active" : ""}" type="button" data-guide-index="${index}" aria-current="${index === 0 ? "true" : "false"}">
            <span>${String(index + 1).padStart(2, "0")}</span>
            <strong>${label}</strong>
          </button>`,
        )
        .join("")}
    </div>
  </aside>`;
}

function title(label, accent = "") {
  return `<h2 class="section-title">${label.replace(accent, `<span class="${accent.includes("安心") ? "teal" : "coral"}">${accent}</span>`)}</h2>`;
}

function card(item, index = 0) {
  const tone = item.tone || ["teal", "coral", "sky", "sand"][index % 4];
  return `
    <article class="card ${tone}">
      ${item.icon ? icon(item.icon, tone === "coral" ? "coral" : tone === "sky" ? "sky" : tone === "sand" ? "sand" : "") : ""}
      ${item.number ? `<div class="card-number">${item.number}</div>` : ""}
      ${item.badge ? `<span class="card-badge">${item.badge}</span>` : ""}
      <h3>${item.title}</h3>
      <p>${item.copy}</p>
      ${item.list ? `<ul>${item.list.map((x) => `<li>${x}</li>`).join("")}</ul>` : ""}
    </article>`;
}

function scoreList(items) {
  return `<div class="score-list">${items
    .map(
      ([label, value, tone = "teal"]) =>
        `<div class="score-row ${tone}"><span>${label}</span><div class="score-track"><i style="width:${value}%"></i></div><b>${value}%</b></div>`,
    )
    .join("")}</div>`;
}

function homePhoto(name, alt, className = "") {
  return `<img class="${className}" src="./assets/photos1/${name}.png" alt="${alt}" loading="lazy" decoding="async" />`;
}

function homePhotoEager(name, alt, className = "") {
  return `<img class="${className}" src="./assets/photos1/${name}.png" alt="${alt}" loading="eager" decoding="async" />`;
}

function systemPhoto(name, alt, className = "") {
  return `<img class="${className}" src="./assets/generated/system-023942/${name}.png" alt="${alt}" loading="eager" decoding="async" />`;
}

function parentHomeVisual(name, alt) {
  if (name.startsWith("photo-")) return homePhotoEager(name.replace("photo-", ""), alt);
  if (["parent-coach-update", "parent-weekly-review"].includes(name)) return parentGeneratedPhoto(name, alt);
  return systemPhoto(name, alt);
}

function painBlock() {
  const steps = [
    ["01", "先看懂孩子", "AI 學習體檢先找出問題關鍵，避免一開始就補錯方向。", "15 分鐘", "2", "教練陪學生查看平板上的學習狀況", ""],
    ["02", "每天有節奏", "系統把大目標拆成每日任務，讓孩子知道今天只要完成什麼。", "每日 30 分鐘", "4", "學生依照每日任務在桌前練習", "coral"],
    ["03", "有人接住進度", "教練追蹤進度回饋，家長也能用報告看見真進展。", "每週回饋", "3", "家長用手機查看孩子的學習回饋", "sky"],
  ];
  const systemBadges = [
    ["brain", "先看懂孩子", "15 分鐘"],
    ["calendar", "每天有節奏", "每日 30 分鐘"],
    ["users", "有人接住進度", "每週回饋"],
  ];
  const tracker = [
    ["01", "先掌握", "先看見孩子的成長軌跡，再把學習拆成不費力的小步驟。"],
    ["02", "每天前進", "孩子每天都有明確任務，不需要自己面對一大堆壓力。"],
    ["03", "家長安心", "進度、弱點和教練回饋放在同一個視角，陪伴不再靠感覺。"],
  ];
  const pains = [
    ["上課聽不懂", "觀念卡住，越補越焦慮", "4", "學生在桌前複習時遇到卡住的題目", "sky"],
    ["學習沒動力", "不知道今天努力為了什麼", "2", "教練陪學生建立可達成的學習目標", "coral"],
    ["時間效率低", "花很多時間卻沒有方向", "10", "書桌上的時鐘、筆記本與待辦清單", "teal"],
    ["成績看不見", "家長難判斷是否真的進步", "9", "學習成長報告與趨勢圖", "sand"],
  ];
  return `<section class="section flush-top home-redesign-entry">
    <div class="home-reference-shell">
      <div class="home-quick-guide">
        <article class="home-guide-intro">
          <span class="home-pill"><i></i>重點使用地圖</span>
          <h2>三步看懂這一頁</h2>
          <p>伴伴辦學不是把課程堆滿，而是把診斷、學習任務、教練陪伴與家長回饋串成孩子能穩定前進的成長閉環。</p>
        </article>
        ${steps
          .map(
            ([no, titleText, copy, tag, image, alt, tone]) => `<article class="home-step-card ${tone}">
              <div>
                <span>${no}</span>
                <h3>${titleText}</h3>
                <p>${copy}</p>
                <em>${tag}</em>
              </div>
              <figure>${homePhoto(image, alt)}</figure>
            </article>`,
          )
          .join("")}
      </div>

      <div class="home-system-panel">
        <div class="home-system-copy">
          <span class="home-pill"><i></i>產品與解決方案</span>
          <h2>一套陪孩子走完整段學習路的系統</h2>
          <p>從診斷、每日任務、數據陪伴到家長回饋，讓孩子知道今天該做什麼，也讓家長看得見每一步是否有效。</p>
          <div class="home-system-badges">
            ${systemBadges
              .map(
                ([iconName, label, meta], index) => `<span>${icon(iconName, index === 1 ? "coral" : index === 2 ? "sky" : "")}<b>${label}</b><small>${meta}</small></span>`,
              )
              .join("")}
          </div>
        </div>
        <figure class="home-system-photo">${homePhoto("1", "教練陪學生使用平板查看學習系統")}</figure>
        <figure class="home-system-tablet">${homePhoto("5", "伴伴辦學學習 dashboard 儀表板")}</figure>
        <figure class="home-system-phone">${homePhoto("7", "手機版家長週報與學習進度")}</figure>
      </div>

      <div class="home-parent-tracker">
        <h3>家長可以這樣跟蹤</h3>
        <p>家長不用先學會當老師，只要看懂孩子正在往哪裡走、哪裡卡住、下一步怎麼調整。</p>
        <div>
          ${tracker.map(([no, label, copy]) => `<article><b>${no}</b><strong>${label}</strong><span>${copy}</span></article>`).join("")}
        </div>
      </div>

      <div class="home-pain-strip">
        <h2>孩子的學習，你是否也遇到這些困擾？</h2>
        <div class="home-pain-grid">
          ${pains
            .map(
              ([titleText, copy, image, alt, tone], index) => `<article class="home-pain-card ${tone}">
                <figure>${homePhoto(image, alt)}</figure>
                <span>${icon(["frown", "target", "clock", "doc"][index], tone === "coral" ? "coral" : tone === "sky" ? "sky" : tone === "sand" ? "sand" : "")}</span>
                <div><strong>${titleText}</strong><small>${copy}</small></div>
              </article>`,
            )
            .join("")}
        </div>
      </div>
    </div>
  </section>`;
}

function homeAdvantagePanel() {
  const items = [
    ["AI 智能學習系統", "精準診斷學習弱點，個人化推薦任務，讓效率看得見。", "6", "AI dashboard 顯示學習掌握度與任務進度", "brain", "teal"],
    ["專屬陪伴計畫", "教練每週追蹤與鼓勵，學習路上不再孤單。", "2", "教練陪學生一起檢視平板中的學習計畫", "heart", "coral"],
    ["陪伴與學習整合", "任務、數據、訊息與家長回饋整合在同一套系統。", "8", "手機與桌面版學習系統操作示意", "users", "sky"],
    ["學習習慣養成", "把每日小任務變成固定節奏，累積真正可持續的能力。", "4", "學生在明亮書桌前寫作業並使用平板", "chart", "sand"],
  ];
  return `<section class="section home-advantage-redesign">
    <div class="home-section-head">
      <h2>伴伴辦學 <span>4</span> 大學習優勢</h2>
      <p>不是補更多，而是把孩子需要的診斷、陪伴、任務與成效放進一套看得懂的學習系統。</p>
    </div>
    <div class="home-advantage-grid">
      ${items
        .map(
          ([titleText, copy, image, alt, iconName, tone], index) => `<article class="home-adv-card ${tone}">
            <figure>${homePhoto(image, alt)}</figure>
            <div class="home-adv-copy">
              <span>${icon(iconName, tone === "coral" ? "coral" : tone === "sky" ? "sky" : tone === "sand" ? "sand" : "")}</span>
              <b>${String(index + 1).padStart(2, "0")}</b>
              <h3>${titleText}</h3>
              <p>${copy}</p>
            </div>
          </article>`,
        )
        .join("")}
    </div>
  </section>`;
}

function advantagesBlock(count = 4) {
  const items = [
    { icon: "brain", title: "AI 智能學習系統", copy: "精準診斷學習弱點，個人化學習路徑，效率提升。" },
    { icon: "heart", title: "專屬陪伴計畫", copy: "專屬導師與 AI 雙重陪伴，學習路上不孤單。" },
    { icon: "users", title: "陪伴每個學習者", copy: "理解孩子的節奏與需求，走出屬於自己的成長軌跡。" },
    { icon: "chart", title: "學習習慣養成", copy: "從知識到能力，培養自主學習的關鍵力。" },
    { icon: "doc", title: "素養導向課程", copy: "結合生活應用與思辨能力，不只學得好，更能用得上。" },
    { icon: "shield", title: "安心學習環境", copy: "嚴選師資與內容，讓孩子專注、家長放心。" },
  ].slice(0, count);

  return `<section class="section"><h2 class="section-title">伴伴辦學 <span class="teal">${count}</span> 大學習優勢</h2><div class="grid cols-${count === 4 ? 4 : 3}">${items.map((item, index) => `<div class="feature-panel">${icon(item.icon, index % 2 ? "coral" : index % 3 ? "sky" : "")}<h3>${item.title}</h3><p>${item.copy}</p></div>`).join("")}</div></section>`;
}

function advantageSix() {
  const items = [
    {
      number: "01",
      title: "個人化學習計畫",
      copy: "依據孩子程度與目標，量身打造專屬學習路徑，精準提升學習效率。",
      image: "./assets/content/6/2.png",
      tone: "teal",
      visual: "plan",
    },
    {
      number: "02",
      title: "AI 智能學習系統",
      copy: "即時診斷弱點，智能推薦最適合的學習內容，讓學習更精準、更有效。",
      image: "./assets/content/6/3.png",
      tone: "coral",
      visual: "score",
    },
    {
      number: "03",
      title: "專屬學習教練陪伴",
      copy: "專屬教練一對一陪伴與引導，培養學習習慣與信心，走得更穩更遠。",
      image: "./assets/content/6/4.png",
      tone: "sky",
      visual: "chat",
    },
    {
      number: "04",
      title: "數據追蹤與成效看得見",
      copy: "完整記錄學習歷程與成效，讓進步有跡可循，家長安心放心。",
      image: "./assets/content/6/5.png",
      tone: "teal",
      visual: "overview",
    },
    {
      number: "05",
      title: "素養導向課程設計",
      copy: "結合素養與應用，培養孩子解決問題的能力，不只學得好，更用得上。",
      image: "./assets/content/6/6.png",
      tone: "sand",
      visual: "skills",
    },
    {
      number: "06",
      title: "安心學習環境",
      copy: "嚴選師資與內容，學習安全有保障，讓孩子專注、家長放心。",
      image: "./assets/content/6/7.png",
      tone: "sky",
      visual: "trust",
    },
  ];
  const imagePanel = (src, alt, modifier) => `<div class="adv-ui-card image-ui ${modifier}">
    <img src="${src}" alt="${alt}" decoding="async" loading="lazy" />
  </div>`;
  const panels = {
    plan: `<div class="adv-ui-card plan-ui">
      <strong>個人學習計畫</strong>
      <span><b>學習目標</b><i></i></span>
      <span><b>數學・應用題</b><i></i></span>
      <span><b>閱讀理解</b><i></i></span>
      <em>75%</em>
    </div>`,
    radar: `<div class="adv-ui-card radar-ui">
      <strong>AI 學習診斷</strong>
      <span>知識點掌握度</span>
      <svg viewBox="0 0 120 94" aria-hidden="true"><polygon points="60,8 106,32 94,78 60,90 26,78 14,32" /><polygon points="60,24 86,38 78,66 60,73 42,66 34,38" /></svg>
      <button type="button">開始學習</button>
    </div>`,
    score: imagePanel("./assets/content/6/8.png", "AI 診斷學習總分與能力分布", "score-ui"),
    chat: `<div class="adv-ui-card chat-ui">
      <strong>教練對話</strong>
      <p>這題觀念很棒！再試試下一題。</p>
      <span>我知道怎麼做了！</span>
    </div>`,
    data: `<div class="adv-ui-card data-ui">
      <strong>學習成效總覽</strong>
      <div><b>32.5</b><span>小時</span></div>
      <div><b>92%</b><span>完成率</span></div>
      <svg viewBox="0 0 150 54" aria-hidden="true"><path d="M8 42 C26 36 34 45 50 31 S78 34 92 22 118 24 142 10"/></svg>
    </div>`,
    overview: imagePanel("./assets/content/6/9.png", "學習進度、時數、完成率與趨勢圖", "overview-ui"),
    skills: `<div class="adv-ui-card skills-ui">
      <strong>課程主題</strong>
      <div><span>探索</span><span>思考</span><span>實作</span></div>
      <p>閱讀理解・問題解決・生活應用</p>
    </div>`,
    trust: `<div class="adv-ui-card trust-ui">
      <strong>安全與信任</strong>
      <span>師資審核<i></i></span>
      <span>內容把關<i></i></span>
      <span>隱私保護<i></i></span>
    </div>`,
  };

  return `<section class="section advantage-showcase">
    <div class="advantage-hero-panel">
      <div class="advantage-hero-copy">
        <img class="advantage-hero-brand" src="./assets/reference-advantage/brand.png" alt="伴伴辦學 BANBAN EDUCATION" decoding="async" />
        <h2><b>6</b> 大伴伴優勢</h2>
        <p>AI × 教練 × 數據，成就孩子的學習力與未來力</p>
      </div>
      <figure>
        <img src="./assets/content/6/1.png" alt="" decoding="async" />
      </figure>
    </div>
    <div class="advantage-feature-grid">
      ${items
        .map(
          (item) => `<article class="advantage-feature-card ${item.tone}">
            <img src="${item.image}" alt="" decoding="async" loading="lazy" />
            <div class="advantage-feature-copy">
              <span>${item.number}</span>
              <h3>${item.title}</h3>
              <p>${item.copy}</p>
            </div>
            ${panels[item.visual] || ""}
          </article>`,
        )
        .join("")}
    </div>
    <figure class="advantage-flow-strip">
      <img src="./assets/content/6/10.png" alt="AI、教練與數據形成有效學習循環" decoding="async" />
    </figure>
    <div class="advantage-mini-cta">
      <div class="advantage-cta-copy">
        <h3>先看懂孩子，再決定怎麼陪</h3>
        <p>先用 15 分鐘 AI 學習體檢整理孩子目前卡住的地方，再一起找到最適合的學習節奏。</p>
      </div>
      <span class="advantage-cta-divider" aria-hidden="true"></span>
      <div class="advantage-cta-actions">
        <a class="btn" href="#/diagnosis">開始 15 分鐘 AI 體檢</a>
        <a class="btn secondary" href="#/programs">先了解陪伴方式</a>
      </div>
    </div>
  </section>`;
}

function whyBlock() {
  const reasons = ["完整的 AI 陪伴式學習閉環", "專業師資與教研內容做成可執行任務", "即時學習數據，進步看得見", "彈性學習時間，兼顧生活與學習"];
  return `<section class="section home-choice-section">
    <div class="home-choice-band">
      <div class="home-choice-copy">
        <h2>為什麼家長選擇 <span>伴伴辦學？</span></h2>
        <ul>${reasons.map((item) => `<li>${item}</li>`).join("")}</ul>
        <a class="btn secondary" href="#/about">了解更多我們的特色</a>
      </div>
      <figure>${homePhoto("1", "教練陪學生使用平板，象徵孩子學習有系統陪伴")}</figure>
      <div class="home-choice-note">學習成效提升看得見，孩子更自信，家長更放心！</div>
    </div>
  </section>`;
}

function plansBlock() {
  return `<section class="section home-course-section">
    <div class="home-section-head compact">
      <h2>課程方案</h2>
      <p>依孩子目前狀態，選擇最適合的陪伴強度與學習節奏。</p>
    </div>
    <div class="home-course-grid">
      ${planCard("國中全科方案", "打好基礎，贏在關鍵", ["國中全科 AI 學習", "個人化學習計畫", "專屬導師陪伴", "定期學習檢測"], "teal", "11", "代表打好基礎的青綠學習背包")}
      ${planCard("高中全科方案", "突破學習瓶頸，衝刺理想", ["高中全科 AI 學習", "個人化學習計畫", "專屬導師陪伴", "進度追蹤與模考分析"], "coral", "12", "象徵突破與成果的粉色獎盃")}
    </div>
  </section>`;
}

function planVisual(image, alt, tone = "teal") {
  if (!image) return "";
  return `<figure class="home-course-visual ${tone}">${homePhoto(image, alt)}</figure>`;
}

function planCard(label, heading, list, tone = "teal", visual = "", visualAlt = "") {
  return `<article class="home-course-card ${tone === "coral" ? "coral" : ""}">
    <div class="home-course-copy">
      <div class="label">${label}</div>
      <h3>${heading}</h3>
      <ul>${list.map((x) => `<li>${x}</li>`).join("")}</ul>
      <a class="btn ${tone === "coral" ? "coral" : ""}" href="#/diagnosis">先做 AI 體檢</a>
    </div>
    ${planVisual(visual, visualAlt, tone)}
  </article>`;
}

function statsBlock(wide = false) {
  const stats = wide
    ? [
        ["10,000+", "學員選擇伴伴辦學", "users"],
        ["92%", "學員學習成效提升", "chart"],
        ["4.9/5", "家長滿意度", "star"],
        ["100%", "嚴選師資與內容把關", "shield"],
      ]
    : [
        ["1,200+", "學生安心學習中", "users"],
        ["92%", "學習成效提升", "chart"],
        ["98%", "家長滿意推薦", "heart"],
        ["150,000+", "堂課程完成數", "star"],
      ];
  return `<section class="section home-stats-section"><div class="home-stat-row">${stats
    .map(
      ([num, label, iconName], index) => `<div class="home-stat-tile">${icon(iconName, index === 1 ? "coral" : index === 2 ? "sky" : index === 3 ? "sand" : "")}<div><strong>${num}</strong><span>${label}</span></div></div>`,
    )
    .join("")}</div></section>`;
}

function homeOnePagePainBlock() {
  const pains = [
    ["上課聽得懂，回家卻不會寫", "真正卡住的不是努力，而是關鍵觀念沒有被看見。", "4", "學生在桌前複習時遇到卡住的題目", "sky", "frown"],
    ["每天都拖到最後一刻", "任務太大、方向太多，孩子很難自己開始。", "10", "書桌上的時鐘、筆記本與待辦清單", "coral", "clock"],
    ["補很多課，成效看不清楚", "家長只看到分數，卻看不到每週真正的進步。", "9", "學習成長報告與趨勢圖", "teal", "chart"],
    ["需要人陪，但不想增加壓力", "孩子需要被理解、被提醒，而不是更多責備。", "2", "教練陪學生建立可達成的學習目標", "sand", "heart"],
  ];

  return `<section class="section home-screen-section home-screen-pain" aria-label="學習困擾">
    <div class="home-screen-shell">
      <div class="home-screen-copy">
        <span class="home-pill"><i></i>學習困擾</span>
        <h2>孩子不是不努力，<br />只是還沒看懂自己卡在哪裡</h2>
        <p>家長最焦慮的時候，通常不是孩子完全不學，而是每天都有做，卻不知道下一步怎麼有效前進。</p>
        <div class="home-screen-actions">
          <a class="btn" href="#/diagnosis">開始 15 分鐘 AI 學習體檢<span class="btn-arrow" aria-hidden="true">→</span></a>
        </div>
      </div>
      <div class="home-screen-pain-wall">
        ${pains
          .map(
            ([titleText, copy, image, alt, tone, iconName], index) => `<article class="home-screen-card home-screen-pain-card ${tone}">
              <figure>${homePhoto(image, alt)}</figure>
              <div>
                <b>${String(index + 1).padStart(2, "0")}</b>
                ${icon(iconName, tone === "coral" ? "coral" : tone === "sky" ? "sky" : tone === "sand" ? "sand" : "")}
                <h3>${titleText}</h3>
                <p>${copy}</p>
              </div>
            </article>`,
          )
          .join("")}
      </div>
    </div>
  </section>`;
}

function homeOnePageOutcomeOsBlock() {
  const problems = [
    ["不會", "不是孩子不用心，而是關鍵知識缺口沒有被定位。", "brain", "teal"],
    ["懶得讀", "任務太大、回饋太慢，孩子很難靠意志力啟動。", "clock", "coral"],
    ["讀錯方向", "花很多時間練熟悉的題，真正卡點卻一直被跳過。", "target", "sky"],
    ["沒人追蹤", "家長只看到結果，卻看不到每週到底有沒有改善。", "chart", "sand"],
  ];
  const loop = [
    ["01", "診斷", "知識缺口圖譜", "找出真正卡住的觀念與題型。", "brain"],
    ["02", "處方", "7 天改善建議", "把弱點拆成今天就能開始的小任務。", "doc"],
    ["03", "執行", "每日任務導航", "孩子知道先做什麼、做到哪裡。", "calendar"],
    ["04", "追蹤", "學習行為畫像", "看見拖延、錯因、提示依賴與完成率。", "target"],
    ["05", "回報", "家長看得懂", "用週報說清楚進展、風險與下一步。", "chat"],
  ];
  const parentValues = [
    ["看得見的進展", "不只等考試成績，每週都知道哪裡正在變好。"],
    ["少一點親子衝突", "把提醒與拆解交給系統，家長不用天天催。"],
    ["知道下一步怎麼陪", "不是焦慮地加課，而是有依據地支持孩子。"],
  ];
  const studentValues = [
    ["不被羞辱的進步感", "孩子看到自己正在前進，而不是只被指出錯誤。"],
    ["每日微成就", "任務小到能開始，完成後有明確回饋。"],
    ["分層提示，不直接給答案", "AI 先引導思考，再逐步提示，保留孩子的理解過程。"],
  ];

  return `<section class="section home-screen-section home-os-problems" aria-label="伴伴辦學解決的四個問題">
    <div class="home-screen-shell">
      <div class="home-screen-copy">
        <span class="home-pill"><i></i>自學成效作業系統</span>
        <h2>不是多一個工具，<br />而是讓有效自學真的發生</h2>
        <p>伴伴辦學不是單純 AI 家教，也不是只把題目搬到線上的 App。我們把孩子學習中最容易失控的四件事，整理成可診斷、可執行、可追蹤的系統。</p>
        <div class="home-os-position-card">
          <strong>K-12 自學成效作業系統</strong>
          <span>把「不知道問題在哪」變成「今天知道下一步」。</span>
        </div>
      </div>
      <div class="home-os-problem-grid">
        ${problems
          .map(
            ([titleText, copy, iconName, tone], index) => `<article class="home-os-problem-card ${tone}">
              <b>${String(index + 1).padStart(2, "0")}</b>
              ${icon(iconName, tone === "coral" ? "coral" : tone === "sky" ? "sky" : tone === "sand" ? "sand" : "")}
              <h3>${titleText}</h3>
              <p>${copy}</p>
            </article>`,
          )
          .join("")}
      </div>
    </div>
  </section>
  <section class="section home-screen-section home-os-loop" aria-label="五段式成效閉環">
    <div class="home-screen-shell reverse">
      <div class="home-os-loop-board" aria-label="自學成效閉環系統示意">
        <div class="home-os-loop-track">
          ${loop
            .map(
              ([num, titleText, label, copy, iconName], index) => `<article class="home-os-loop-node node-${index + 1}">
                <b>${num}</b>
                ${icon(iconName, index === 1 ? "coral" : index === 2 ? "sky" : index === 3 ? "sand" : "")}
                <strong>${titleText}</strong>
                <span>${label}</span>
                <p>${copy}</p>
              </article>`,
            )
            .join("")}
        </div>
        <div class="home-os-dashboard-card">
          <div class="home-device-bar"><i></i><i></i><i></i><span>Outcome OS</span></div>
          <div class="home-os-dashboard-grid">
            <article><span>今日處方</span><strong>3 項</strong><em>可完成</em></article>
            <article><span>知識缺口</span><strong>2 個</strong><em>優先補</em></article>
            <article><span>學習行為</span><strong>穩定</strong><em>少拖延</em></article>
          </div>
          <div class="home-os-progress-line" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></div>
        </div>
      </div>
      <div class="home-screen-copy">
        <span class="home-pill"><i></i>五段式成效閉環</span>
        <h2>診斷、處方、執行、追蹤、回報，才是一套完整學習系統</h2>
        <p>孩子不是缺更多教材，而是缺一條能每天推進的路線。伴伴辦學把 AI 分析、任務拆解、教練陪伴與家長回報接起來，讓進步不只靠感覺。</p>
        <div class="home-screen-actions">
          <a class="btn" href="#/diagnosis">開始 15 分鐘 AI 學習體檢<span class="btn-arrow" aria-hidden="true">→</span></a>
        </div>
      </div>
    </div>
  </section>
  <section class="section home-screen-section home-os-family" aria-label="家長與孩子真正得到什麼">
    <div class="home-screen-shell">
      <div class="home-screen-copy">
        <span class="home-pill"><i></i>家長與孩子的價值</span>
        <h2>家長買的是安心，<br />孩子感受到的是能前進</h2>
        <p>真正重要的不是多一份報告，而是讓家長少一點猜測，讓孩子每天都有不被否定的微小成功。</p>
      </div>
      <div class="home-os-family-grid">
        <article class="home-os-value-panel parent">
          <span>Parent Value</span>
          <h3>家長真正買的是什麼</h3>
          ${parentValues.map(([titleText, copy]) => `<div><strong>${titleText}</strong><p>${copy}</p></div>`).join("")}
        </article>
        <article class="home-os-value-panel student">
          <span>Student Value</span>
          <h3>孩子感受到的是什麼</h3>
          ${studentValues.map(([titleText, copy]) => `<div><strong>${titleText}</strong><p>${copy}</p></div>`).join("")}
        </article>
        <div class="home-os-mini-report" aria-label="家長與孩子的雙視角回饋">
          <strong>同一份進度，兩種語言</strong>
          <div><b>給孩子</b><span>今天完成 3 個小任務，分數應用比昨天更穩。</span></div>
          <div><b>給家長</b><span>本週優先補強分數應用，建議陪孩子複盤錯因。</span></div>
        </div>
      </div>
    </div>
  </section>`;
}

function homeOnePageSolutionBlock() {
  const steps = [
    ["01", "診斷", "先找出孩子真正卡住的知識點。", "15 分鐘", "brain"],
    ["02", "處方", "把弱點轉成 7 天改善建議。", "先補什麼", "doc"],
    ["03", "執行", "把大目標拆成孩子做得到的小步驟。", "每天可做", "calendar"],
    ["04", "追蹤", "看見錯因、拖延、完成率與掌握度。", "持續調整", "target"],
    ["05", "回報", "用家長看得懂的方式說明下一步。", "透明回饋", "chat"],
  ];

  return `<section class="section home-screen-section home-screen-solution" aria-label="解決方案路徑">
    <div class="home-screen-shell">
      <div class="home-screen-copy">
        <span class="home-pill"><i></i>解決方案總覽</span>
        <h2>從「不知道問題在哪」變成每天都知道下一步</h2>
        <p>伴伴辦學把診斷、處方、執行、追蹤與回報串成一條清楚路線。孩子知道今天該做什麼，家長也看得懂每一步是否有效。</p>
        <div class="home-screen-actions">
          <a class="btn" href="#/diagnosis">開始 15 分鐘 AI 學習體檢<span class="btn-arrow" aria-hidden="true">→</span></a>
          <a class="btn secondary" href="#/programs">看課程方案</a>
        </div>
      </div>
      <div class="home-screen-flow" aria-label="伴伴辦學學習流程">
        ${steps
          .map(
            ([num, titleText, copy, metric, iconName], index) => `<article class="${index === 1 ? "coral" : index === 2 ? "sky" : index === 3 ? "sand" : ""}">
              <b>${num}</b>
              ${icon(iconName, index === 1 ? "coral" : index === 2 ? "sky" : index === 3 ? "sand" : "")}
              <h3>${titleText}</h3>
              <p>${copy}</p>
              <em>${metric}</em>
            </article>`,
          )
          .join("")}
      </div>
      <figure class="home-screen-dashboard">
        ${systemPhoto("tablet-dashboard", "伴伴辦學學習 dashboard", "home-screen-dashboard-image")}
        <figcaption>
          <strong>本週學習進度 88%</strong>
          <span>處方任務、弱點追蹤、教練回饋與家長週報在同一個視角。</span>
        </figcaption>
      </figure>
    </div>
  </section>`;
}

function homeOnePageDiagnosisBlock() {
  const findings = [
    ["知識缺口", "優先補強", "hot"],
    ["錯因分析", "需要拆題"],
    ["7 天計畫", "今天開始"],
  ];

  return `<section class="section home-screen-section home-screen-diagnosis" aria-label="15 分鐘 AI 學習體檢">
    <div class="home-screen-shell">
      <div class="home-screen-copy">
        <span class="home-pill"><i></i>15 分鐘 AI 學習體檢</span>
        <h2>先看見缺口，<br />再給孩子 7 天改善方向</h2>
        <p>AI 會整理知識缺口圖譜、錯因分析、學習行為畫像與 7 天改善建議，讓學習從一開始就走在對的方向。</p>
        <div class="home-screen-actions">
          <a class="btn" href="#/diagnosis">開始 AI 學習體檢<span class="btn-arrow" aria-hidden="true">→</span></a>
          <a class="btn secondary" href="#/diagnosis">看體檢報告範例</a>
        </div>
      </div>
      <figure class="home-screen-diagnosis-board" aria-label="AI 學習體檢報告示意">
        <div class="home-device-bar"><i></i><i></i><i></i><span>AI 學習體檢報告</span></div>
        <div class="home-diagnosis-score"><strong>72</strong><span>/100</span><em>中上程度</em></div>
        <div class="home-diagnosis-radar">
          <svg viewBox="0 0 160 130" aria-hidden="true">
            <polygon points="80,8 142,42 126,110 80,124 34,110 18,42" />
            <polygon points="80,28 112,48 104,86 80,98 54,86 46,48" />
          </svg>
        </div>
        <div class="home-diagnosis-list">
          ${findings.map(([label, status, hot]) => `<span class="${hot || ""}"><b>${label}</b><em>${status}</em></span>`).join("")}
        </div>
      </figure>
    </div>
  </section>`;
}

function homeOnePageProgramsBlock() {
  const plans = [
    ["教練班", "建立節奏，穩定前進", "適合需要固定任務、同儕氛圍與教練提醒的孩子。", ["每日任務", "小組陪跑", "每週追蹤"], "users", "teal"],
    ["真人一對一", "突破弱點，深度陪伴", "適合已經知道卡點，需要密集拆解題型與觀念的孩子。", ["弱點拆解", "即時回饋", "客製路線"], "target", "coral"],
  ];

  return `<section class="section home-screen-section home-screen-programs" aria-label="課程方案">
    <div class="home-screen-shell">
      <div class="home-screen-copy">
        <span class="home-pill"><i></i>課程方案</span>
        <h2>兩種陪伴強度，<br />依孩子狀態選擇</h2>
        <p>不用一開始就選最貴或最多，而是先透過診斷判斷孩子需要節奏陪伴，還是深度突破。</p>
        <div class="home-screen-actions">
          <a class="btn secondary" href="#/programs">查看完整課程方案</a>
        </div>
      </div>
      <div class="home-screen-plan-stage">
        ${plans
          .map(
            ([name, titleText, copy, tags, iconName, tone], index) => `<article class="home-screen-card home-screen-plan ${tone}">
              <span>${String(index + 1).padStart(2, "0")}</span>
              ${icon(iconName, tone === "coral" ? "coral" : "")}
              <h3>${name}</h3>
              <strong>${titleText}</strong>
              <p>${copy}</p>
              <div>${tags.map((tag) => `<em>${tag}</em>`).join("")}</div>
            </article>`,
          )
          .join("")}
      </div>
    </div>
  </section>`;
}

function homeOnePageCoachBlock() {
  const roles = [
    ["提醒", "定期提醒任務，養成穩定學習習慣。", "bell"],
    ["鼓勵", "肯定孩子的努力，建立信心與動力。", "heart"],
    ["調整", "依學習狀況微調策略，優化學習路徑。", "sliders"],
  ];

  return `<section class="section home-screen-section home-screen-coach" aria-label="教練陪跑">
    <div class="home-screen-shell reverse">
      <figure class="home-screen-photo-card">
        <img src="./assets/content/coach/coach-companion.png" alt="教練陪伴孩子學習" loading="lazy" decoding="async" />
        <figcaption>
          <strong>教練陪跑，不是盯進度而已</strong>
          <span>在孩子卡住、想放棄、需要調整時，有人接住他。</span>
        </figcaption>
      </figure>
      <div class="home-screen-copy">
        <span class="home-pill"><i></i>教練陪跑</span>
        <h2>孩子需要的，<br />不只是更多課</h2>
        <p>AI 能找到問題，但孩子真正走下去，需要有人提醒、鼓勵、拆解與陪伴。這就是教練在學習路上的角色。</p>
        <div class="home-screen-role-row">
          ${roles.map(([titleText, copy, iconName], index) => `<article>${icon(iconName, index === 1 ? "coral" : index === 2 ? "sand" : "")}<strong>${titleText}</strong><span>${copy}</span></article>`).join("")}
        </div>
        <a class="btn secondary" href="#/coach">了解教練陪跑</a>
      </div>
    </div>
  </section>`;
}

function homeOnePageProofBlock() {
  const metrics = [
    ["8.5 小時", "本週學習時數", "clock"],
    ["82%", "整體掌握度", "target"],
    ["+24%", "弱點改善幅度", "chart"],
    ["98%", "家長滿意推薦", "heart"],
  ];
  const faqItems = [
    ["一定要先做 AI 學習體檢嗎？", "建議先體檢，避免一開始就補錯方向。"],
    ["診斷後一定要購買課程嗎？", "不用，家長可以先看懂孩子狀態再評估。"],
    ["教練會怎麼陪伴孩子？", "依任務與數據提供提醒、鼓勵、拆題與回饋。"],
  ];

  return `<section class="section home-screen-section home-screen-proof" aria-label="成效與家長安心">
    <div class="home-screen-shell">
      <div class="home-screen-copy">
        <span class="home-pill"><i></i>成效與家長安心</span>
        <h2>進步看得見，<br />家長才真的放心</h2>
        <p>學習不是只看一次考試，而是每週追蹤學習時間、任務完成、弱點改善與教練建議。</p>
        <div class="home-screen-faq-mini">
          ${faqItems.map(([question, answer]) => `<details><summary>${question}</summary><p>${answer}</p></details>`).join("")}
        </div>
      </div>
      <div class="home-screen-proof-stage">
        <div class="home-screen-metrics">
        ${metrics.map(([num, label, iconName], index) => `<article>${icon(iconName, index === 1 ? "coral" : index === 2 ? "sky" : "")}<strong>${num}</strong><span>${label}</span></article>`).join("")}
        </div>
        <figure class="home-screen-parent-report">
          ${systemPhoto("parent-phone", "手機版家長週報")}
          <figcaption>
            <b>家長每週可以看到什麼？</b>
            <span>學習時數、各科掌握、弱點改善、教練回饋與下週建議。</span>
          </figcaption>
        </figure>
      </div>
    </div>
  </section>`;
}

function homeOnePageConversionBlock() {
  return `<section class="section home-screen-section home-screen-conversion home-screen-ai-test" aria-label="開始 AI 學習體檢">
    <div class="home-screen-conversion-shell home-screen-single-shell">
      <div class="home-conversion-preview home-conversion-preview-wide">
        <span class="home-pill"><i></i>開始免費 AI 學習體檢</span>
        <h2>先做 15 分鐘 AI 學習體檢，今天就知道下一步</h2>
        <p>完成後會看到孩子目前的掌握度、知識缺口、錯因分析與 7 天改善建議。想先讓顧問聯繫，也可以留下簡短資料。</p>
        <div class="home-test-timeline" aria-label="AI 學習體檢流程">
          <article><b>01</b><strong>填寫基本狀態</strong><span>年級、目標與目前困擾</span></article>
          <article><b>02</b><strong>完成 AI 體檢</strong><span>約 15 分鐘定位弱點</span></article>
          <article><b>03</b><strong>取得 7 天建議</strong><span>知道今天該先做什麼</span></article>
        </div>
        <a class="btn" href="#/diagnosis">開始 AI 學習體檢<span class="btn-arrow" aria-hidden="true">→</span></a>
      </div>
    </div>
  </section>
  <section class="section home-screen-section home-screen-lead-form" aria-label="開始免費 AI 學習體檢">
    <div class="home-diagnosis-artboard">
      <div class="home-art-brand">
        ${brand("", "home-art")}
        <span aria-hidden="true"></span>
        <strong>有方向的學習，成就每一步</strong>
      </div>
      <div class="home-art-hero">
        <div class="home-art-copy">
          <span class="home-art-pill">${icon("star")}開始免費 AI 學習體檢</span>
          <h2>先做 <b>15 分鐘</b> AI 體檢，<br />今天就知道 <b>下一步</b></h2>
          <p>完成後會看到孩子目前的掌握度、知識缺口與 7 天改善建議。想先讓顧問聯繫，也可以留下簡短資料。</p>
          <ul class="home-art-checks" aria-label="AI 學習體檢重點">
            <li>知識缺口圖譜</li>
            <li>15 分鐘完成</li>
            <li>7 天改善建議</li>
          </ul>
        </div>
        <div class="home-art-visual" aria-label="AI 學習體檢報告示意">
          <figure class="home-art-child">
            <img src="./assets/photos1/1.png" alt="媽媽陪孩子在明亮書房使用平板理解學習狀況" loading="lazy" decoding="async" />
          </figure>
          <div class="home-art-report">
            <div class="home-art-report-head">
              <strong>AI 學習體檢報告</strong>
              <button type="button">下載報告</button>
            </div>
            <div class="home-art-report-grid">
              <div class="home-art-score">
                <span>整體掌握度</span>
                <b>78%</b>
                <em>表現良好</em>
              </div>
              <div class="home-art-priority">
                <strong>優先加強領域</strong>
                <div><span>分數與小數</span><i style="--level: 44%"></i><b>需加強</b></div>
                <div><span>應用題理解</span><i style="--level: 58%"></i><b>中等</b></div>
                <div><span>圖形與幾何</span><i style="--level: 72%"></i><b>良好</b></div>
              </div>
            </div>
            <div class="home-art-route">
              <strong>7 天改善建議</strong>
              <ol>
                <li>觀念釐清</li>
                <li>題型練習</li>
                <li>綜合應用</li>
              </ol>
            </div>
          </div>
          <div class="home-art-bubble">清楚知道弱點，<br />學習更有效率！</div>
        </div>
      </div>
      <div class="home-art-steps" aria-label="AI 學習體檢流程">
        <article>
          <b>01</b>
          <div>
            <strong>填寫基本狀態</strong>
            <span>年級、目標與目前困擾</span>
          </div>
          <i aria-hidden="true">${icon("doc")}</i>
        </article>
        <article>
          <b>02</b>
          <div>
            <strong>完成 AI 體檢</strong>
            <span>約 15 分鐘定位弱點</span>
          </div>
          <i aria-hidden="true">${icon("clock", "sky")}</i>
        </article>
        <article>
          <b>03</b>
          <div>
            <strong>取得 7 天建議</strong>
            <span>知道今天該先做什麼</span>
          </div>
          <i aria-hidden="true">${icon("target", "coral")}</i>
        </article>
      </div>
      <div class="home-art-actions">
        <p>只要 15 分鐘，給孩子更好的學習方向！</p>
        <a class="home-art-primary" href="#/diagnosis">開始 AI 學習體檢<span aria-hidden="true">→</span></a>
        <button class="home-art-secondary" type="button" data-home-lead-toggle aria-expanded="false" aria-controls="home-lead-panel">也可以先留下資料</button>
      </div>
      <form class="home-conversion-form home-art-lead-panel" id="home-lead-panel" data-home-conversion-form data-home-lead-panel hidden novalidate>
        <div class="home-conversion-form-body">
          <span>也可以先留下資料</span>
          <h3>讓學習顧問協助安排</h3>
          <label class="home-conversion-field">
            <span>家長姓名</span>
            <input type="text" name="parentName" autocomplete="name" placeholder="例如：林小姐" />
            <small data-home-error="parentName"></small>
          </label>
          <label class="home-conversion-field">
            <span>聯絡方式</span>
            <input type="text" name="contact" autocomplete="tel" placeholder="手機或 Email" />
            <small data-home-error="contact"></small>
          </label>
          <label class="home-conversion-field">
            <span>孩子年級</span>
            <select name="grade">
              <option value="">請選擇年級</option>
              <option>國一</option>
              <option>國二</option>
              <option>國三</option>
              <option>高一</option>
              <option>高二</option>
              <option>高三</option>
            </select>
            <small data-home-error="grade"></small>
          </label>
          <label class="home-conversion-field">
            <span>最擔心的學習問題</span>
            <textarea name="concern" rows="3" placeholder="例如：數學應用題一直卡住、每天很難開始讀書"></textarea>
            <small data-home-error="concern"></small>
          </label>
          <button class="btn coral" type="submit">送出並預約協助</button>
          <p class="home-form-note">v1 先提供前端互動與資料確認，正式串接表單服務後才會送入系統。</p>
        </div>
        <div class="home-conversion-success" data-home-form-success hidden>
          ${icon("heart", "coral")}
          <strong>資料已在此頁完成確認</strong>
          <p>目前尚未串接後端表單服務。你可以先開始 AI 學習體檢，或回到表單重新編輯。</p>
          <div>
            <a class="btn" href="#/diagnosis">開始 AI 學習體檢</a>
            <button class="btn secondary" type="button" data-home-form-edit>重新編輯資料</button>
          </div>
        </div>
      </form>
    </div>
  </section>`;
}

function homeOnePageFaqBlock() {
  return "";
}

function premiumHomeImage(name, alt, className = "") {
  return `<img class="${className}" src="./assets/generated/premium-home/${name}.png" alt="${alt}" loading="lazy" decoding="async" />`;
}

function premiumHomeSection({ className, label, title, copy, actions = "", visual = "", reverse = false, extra = "" }) {
  return `<section class="section premium-home-section ${className}" data-premium-reveal aria-label="${label}">
    <div class="premium-home-shell ${reverse ? "reverse" : ""}">
      <div class="premium-home-copy">
        <span class="premium-kicker">${label}</span>
        <h2>${title}</h2>
        <p>${copy}</p>
        ${actions ? `<div class="premium-actions">${actions}</div>` : ""}
      </div>
      ${visual}
      ${extra}
    </div>
  </section>`;
}

function premiumHomeProblemSection() {
  const pains = [
    ["不會", "不是孩子不用心，而是關鍵知識缺口沒有被定位。", "brain"],
    ["懶得讀", "任務太大、回饋太慢，孩子很難靠意志力啟動。", "clock"],
    ["讀錯方向", "把時間花在熟悉題，真正卡點卻一直被跳過。", "target"],
    ["沒人追蹤", "家長只看到結果，看不到每週是否真的改善。", "chart"],
  ];
  const visual = `<div class="premium-problem-stage" data-premium-tilt>
    <figure>${premiumHomeImage("pain-diagnosis", "學生在明亮書房複習時思考卡住的學習問題")}</figure>
    <div class="premium-floating-card card-a"><strong>知識缺口</strong><span>系統先定位，不再亂補。</span></div>
    <div class="premium-floating-card card-b"><strong>下一步建議</strong><span>今天知道先做什麼。</span></div>
  </div>`;
  const extra = `<div class="premium-problem-grid">
    ${pains
      .map(
        ([titleText, text, iconName], index) => `<article class="premium-problem-card" data-premium-tilt>
          <b>${String(index + 1).padStart(2, "0")}</b>
          ${icon(iconName, index === 1 ? "coral" : index === 2 ? "sky" : index === 3 ? "sand" : "")}
          <strong>${titleText}</strong>
          <span>${text}</span>
        </article>`,
      )
      .join("")}
  </div>`;
  return premiumHomeSection({
    className: "premium-problem-section",
    label: "伴伴辦學解決的 4 個問題",
    title: "孩子不是不努力，<br>是還沒看見<br>真正卡點",
    copy: "家長最焦慮的不是孩子完全不學，而是每天都有做，卻不知道方向是否正確。伴伴辦學先把問題定位，再安排下一步。",
    actions: `<a class="btn" href="#/diagnosis">開始 15 分鐘 AI 學習體檢<span class="btn-arrow" aria-hidden="true">→</span></a>`,
    visual,
    extra,
  });
}

function premiumHomeOutcomeLoopSection() {
  const loop = [
    ["診斷", "知識缺口圖譜", "先找出真正卡住的觀念與題型。", "brain"],
    ["處方", "7 天改善建議", "把弱點拆成今天就能開始的小任務。", "doc"],
    ["執行", "每日任務導航", "孩子知道先做什麼、做到哪裡。", "calendar"],
    ["追蹤", "學習行為畫像", "看見拖延、錯因、提示依賴與完成率。", "target"],
    ["回報", "家長看得懂", "用週報說清楚進展、風險與下一步。", "chat"],
  ];
  const values = [
    ["家長買的是安心", "看得見的進展、少一點親子衝突、知道下一步怎麼陪。"],
    ["孩子感受到的是能前進", "不被羞辱的進步感、每日微成就、AI 分層提示。"],
  ];
  const visual = `<div class="premium-loop-board" data-premium-journey>
    <div class="premium-loop-orbit" aria-hidden="true"></div>
    <div class="premium-loop-track" role="tablist" aria-label="五段式成效閉環">
      ${loop
        .map(
          ([titleText, label, text, iconName], index) => `<button class="premium-loop-node ${index === 0 ? "is-active" : ""}" type="button" role="tab" aria-selected="${index === 0 ? "true" : "false"}" data-journey-step="${index}">
            <b>${String(index + 1).padStart(2, "0")}</b>
            ${icon(iconName, index === 1 ? "coral" : index === 2 ? "sky" : index >= 3 ? "sand" : "")}
            <strong>${titleText}</strong>
            <span>${label}</span>
          </button>`,
        )
        .join("")}
    </div>
    <div class="premium-loop-panel-wrap">
      ${loop
        .map(
          ([titleText, label, text], index) => `<article class="premium-loop-panel ${index === 0 ? "is-active" : ""}" data-journey-panel="${index}" ${index === 0 ? "" : "hidden"}>
            <span>${label}</span>
            <strong>${titleText}</strong>
            <p>${text}</p>
          </article>`,
        )
        .join("")}
    </div>
    <div class="premium-value-row">
      ${values.map(([titleText, text]) => `<article data-premium-tilt><strong>${titleText}</strong><span>${text}</span></article>`).join("")}
    </div>
  </div>`;
  return premiumHomeSection({
    className: "premium-loop-section",
    label: "五段式成效閉環",
    title: "不是多上一堂課，而是把自學變成可執行的系統",
    copy: "診斷、處方、執行、追蹤、回報接在一起，孩子知道今天要做什麼，家長也看得懂每一步是否有效。",
    visual,
    reverse: true,
  });
}

function premiumHomeDiagnosisSection() {
  const tabs = [
    ["知識缺口", "定位真正弱點", "把孩子卡住的觀念、題型與先後順序整理成可行路線。"],
    ["錯因分析", "看見為什麼錯", "不是只列錯題，而是判斷粗心、觀念不熟或題意理解不足。"],
    ["行為畫像", "了解學習狀態", "看見拖延、完成率、提示依賴與專注節奏。"],
    ["7 天建議", "今天知道下一步", "把改善方向拆成一週內能開始的小任務。"],
  ];
  const visual = `<div class="premium-diagnosis-stage" data-premium-report data-premium-tilt>
    <figure class="premium-product-photo">${premiumHomeImage("product-dashboard", "筆電與手機顯示 AI 學習體檢與家長週報產品介面")}</figure>
    <div class="premium-report-card">
      <div class="premium-report-head"><span>AI 學習體檢報告</span><b>78</b></div>
      <div class="premium-report-tabs" role="tablist" aria-label="AI 體檢報告內容">
        ${tabs.map(([label], index) => `<button class="${index === 0 ? "is-active" : ""}" type="button" role="tab" aria-selected="${index === 0 ? "true" : "false"}" data-report-tab="${index}">${label}</button>`).join("")}
      </div>
      <div class="premium-report-panels">
        ${tabs
          .map(
            ([label, titleText, text], index) => `<article class="${index === 0 ? "is-active" : ""}" data-report-panel="${index}" ${index === 0 ? "" : "hidden"}>
              <span>${label}</span>
              <strong>${titleText}</strong>
              <p>${text}</p>
            </article>`,
          )
          .join("")}
      </div>
      <div class="premium-report-visual" aria-hidden="true">
        <i style="--h: 62%"></i><i style="--h: 78%"></i><i style="--h: 46%"></i><i style="--h: 84%"></i><i style="--h: 58%"></i>
      </div>
    </div>
  </div>`;
  return premiumHomeSection({
    className: "premium-diagnosis-section",
    label: "15 分鐘 AI 學習體檢",
    title: "先看見缺口，再給孩子 7 天改善方向",
    copy: "體檢不是貼標籤，而是把模糊焦慮變成可執行的改善清單。完成後會看到知識缺口、錯因分析、學習行為與建議路線。",
    actions: `<a class="btn" href="#/diagnosis">開始 AI 學習體檢<span class="btn-arrow" aria-hidden="true">→</span></a><a class="btn secondary" href="#/diagnosis">看報告範例</a>`,
    visual,
  });
}

function premiumHomeProgramsSection() {
  const plans = [
    ["教練班", "建立節奏，穩定前進", "適合需要固定任務、同儕氛圍與教練提醒的孩子。", ["每日任務", "小組陪跑", "每週追蹤"], "users"],
    ["真人一對一", "突破弱點，深度陪伴", "適合已經知道卡點，需要密集拆解題型與觀念的孩子。", ["弱點拆解", "即時回饋", "客製路線"], "target"],
  ];
  const visual = `<div class="premium-plan-stage">
    ${plans
      .map(
        ([name, titleText, text, tags, iconName], index) => `<article class="premium-plan-card ${index === 1 ? "coral" : ""}" data-premium-tilt>
          <b>${String(index + 1).padStart(2, "0")}</b>
          ${icon(iconName, index === 1 ? "coral" : "")}
          <h3>${name}</h3>
          <strong>${titleText}</strong>
          <p>${text}</p>
          <div>${tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
        </article>`,
      )
      .join("")}
  </div>`;
  return premiumHomeSection({
    className: "premium-programs-section",
    label: "課程方案",
    title: "先體檢，再決定孩子需要哪種陪伴強度",
    copy: "不用一開始就選最多，而是先用 AI 學習體檢判斷孩子需要穩定節奏，還是深度突破。",
    actions: `<a class="btn secondary" href="#/programs">查看完整課程方案</a>`,
    visual,
    reverse: true,
  });
}

function premiumHomeCoachProofSection() {
  const metrics = [
    ["8.5 小時", "本週學習時數", "clock"],
    ["82%", "整體掌握度", "target"],
    ["+24%", "弱點改善幅度", "chart"],
    ["98%", "家長安心推薦", "heart"],
  ];
  const visual = `<div class="premium-coach-stage" data-premium-tilt>
    <figure>${premiumHomeImage("coach-companion", "教練陪伴孩子使用平板與筆記本調整學習策略")}</figure>
    <div class="premium-coach-note"><strong>教練陪跑，不是盯進度而已</strong><span>在孩子卡住、想放棄、需要調整時，有人接住他。</span></div>
  </div>`;
  const extra = `<div class="premium-proof-strip">
    ${metrics.map(([num, label, iconName], index) => `<article data-premium-tilt>${icon(iconName, index === 1 ? "coral" : index === 2 ? "sky" : "")}<strong>${num}</strong><span>${label}</span></article>`).join("")}
  </div>`;
  return premiumHomeSection({
    className: "premium-coach-proof-section",
    label: "教練陪跑與家長安心",
    title: "AI 找到問題，教練陪孩子真的走下去",
    copy: "孩子需要的不是更多壓力，而是被提醒、被鼓勵、被拆解。家長每週也能看見學習時數、弱點改善與教練建議。",
    actions: `<a class="btn secondary" href="#/coach">了解教練陪跑</a>`,
    visual,
    extra,
  });
}

function premiumHomeConversionSection() {
  return `<section class="section premium-home-section premium-conversion-section home-screen-lead-form" data-premium-reveal aria-label="開始免費 AI 學習體檢">
    <div class="premium-conversion-shell">
      <div class="premium-conversion-hero">
        <figure data-premium-tilt>${premiumHomeImage("conversion-ai-test", "家長陪孩子使用平板完成 AI 學習體檢並看見下一步建議")}</figure>
        <div class="premium-conversion-copy">
          <span class="premium-kicker">開始免費 AI 學習體檢</span>
          <h2>先做 15 分鐘，今天就知道下一步</h2>
          <p>完成後會看到孩子目前掌握度、優先弱點與 7 天建議路線。想先讓顧問聯繫，也可以留下簡短資料。</p>
          <div class="premium-test-steps" aria-label="AI 學習體檢流程">
            <article><b>01</b><strong>填寫基本狀態</strong><span>年級、目標與目前困擾</span></article>
            <article><b>02</b><strong>完成 AI 體檢</strong><span>約 15 分鐘定位弱點</span></article>
            <article><b>03</b><strong>取得建議路線</strong><span>知道今天先做什麼</span></article>
          </div>
          <div class="premium-actions">
            <a class="btn" href="#/diagnosis">開始 AI 學習體檢<span class="btn-arrow" aria-hidden="true">→</span></a>
            <button class="btn secondary" type="button" data-home-lead-toggle aria-expanded="false" aria-controls="home-lead-panel">也可以先留下資料</button>
          </div>
        </div>
      </div>
      <form class="home-conversion-form premium-lead-form" id="home-lead-panel" data-home-conversion-form data-home-lead-panel hidden novalidate>
        <div class="home-conversion-form-body">
          <span>也可以先留下資料</span>
          <h3>讓學習顧問協助安排</h3>
          <label class="home-conversion-field">
            <span>家長姓名</span>
            <input type="text" name="parentName" autocomplete="name" placeholder="例如：林小姐" />
            <small data-home-error="parentName"></small>
          </label>
          <label class="home-conversion-field">
            <span>聯絡方式</span>
            <input type="text" name="contact" autocomplete="tel" placeholder="手機或 Email" />
            <small data-home-error="contact"></small>
          </label>
          <label class="home-conversion-field">
            <span>孩子年級</span>
            <select name="grade">
              <option value="">請選擇年級</option>
              <option>國一</option>
              <option>國二</option>
              <option>國三</option>
              <option>高一</option>
              <option>高二</option>
              <option>高三</option>
            </select>
            <small data-home-error="grade"></small>
          </label>
          <label class="home-conversion-field">
            <span>最擔心的學習問題</span>
            <textarea name="concern" rows="3" placeholder="例如：數學應用題一直卡住、每天很難開始讀書"></textarea>
            <small data-home-error="concern"></small>
          </label>
          <button class="btn coral" type="submit">送出並預約協助</button>
          <p class="home-form-note">v1 先提供前端互動與資料確認，正式串接表單服務後才會送入系統。</p>
        </div>
        <div class="home-conversion-success" data-home-form-success hidden>
          ${icon("heart", "coral")}
          <strong>資料已在此頁完成確認</strong>
          <p>目前尚未串接後端表單服務。你可以先開始 AI 學習體檢，或回到表單重新編輯。</p>
          <div>
            <a class="btn" href="#/diagnosis">開始 AI 學習體檢</a>
            <button class="btn secondary" type="button" data-home-form-edit>重新編輯資料</button>
          </div>
        </div>
      </form>
    </div>
  </section>`;
}

function idealStatCard(number, label, iconName, tone = "") {
  return `<article class="ideal-stat-card ${tone}" data-premium-tilt>
    ${icon(iconName, tone)}
    <strong>${number}</strong>
    <span>${label}</span>
  </article>`;
}

function idealMiniReport() {
  return `<aside class="ideal-report-card" aria-label="最新診斷結果">
    <span>最新診斷結果</span>
    <div><strong>78</strong><em>/100</em><b>良好</b></div>
    <ul>
      <li>閱讀理解 <i style="--w: 78%"></i></li>
      <li>分數應用 <i style="--w: 56%"></i></li>
      <li>時間規劃 <i style="--w: 68%"></i></li>
    </ul>
    <p>下一步建議：先補強題意拆解，再進入綜合應用。</p>
  </aside>`;
}

function idealDiagnosisSection() {
  const pains = [
    ["不會", "基礎概念不穩，題目一變就不會做。", "brain", ""],
    ["拖延", "不知道先做什麼，磨到最後才開始。", "clock", "coral"],
    ["讀錯方向", "努力很多卻無法進步，因為方法和方向不對。", "target", "sky"],
    ["投入焦慮", "擔心孩子跟不上，卻不知道如何幫助。", "heart", "coral"],
  ];
  return `<section class="section ideal-home-section ideal-diagnosis-section" aria-label="重新理解孩子的學習困境">
    <div class="ideal-shell">
      <div class="ideal-diagnosis-row">
        <div class="ideal-copy">
          <span class="ideal-kicker">重新理解孩子的學習困境</span>
          <h2>孩子不是不努力，<br>而是還沒找到<br>真正的<span>學習卡點</span>。</h2>
          <p>看見盲點，才能對症調整。伴伴用數據、專業教練，陪你一起釐清方向。</p>
          <a class="btn" href="#/diagnosis">查看診斷如何找出盲點<span class="btn-arrow" aria-hidden="true">→</span></a>
        </div>
        <div class="ideal-device-stage" data-premium-tilt>
          <figure>${premiumHomeImage("product-dashboard", "筆電與手機顯示學習診斷總覽")}</figure>
          <div class="ideal-floating-check">學習總覽<br><strong>78</strong></div>
        </div>
      </div>
      <div class="ideal-pain-grid">
        ${pains
          .map(
            ([titleText, text, iconName, tone]) => `<article class="ideal-pain-card ${tone}" data-premium-tilt>
              ${icon(iconName, tone)}
              <h3>${titleText}</h3>
              <p>${text}</p>
              <a href="#/diagnosis">看見核心斷點<span aria-hidden="true">›</span></a>
            </article>`,
          )
          .join("")}
      </div>
    </div>
  </section>`;
}

function idealEngineSection() {
  const steps = [
    ["AI 精準診斷", "找出知識與方法盲點", "brain"],
    ["專屬學習計畫", "依孩子狀況安排任務", "doc"],
    ["教練陪伴執行", "引導練習與調整節奏", "users"],
    ["成效追蹤優化", "數據回報與持續優化", "chart"],
  ];
  return `<section class="section ideal-home-section ideal-engine-section" aria-label="AI 與教練雙引擎">
    <div class="ideal-shell ideal-engine-shell">
      <div class="ideal-engine-copy">
        <span class="ideal-kicker">AI × 教練 雙引擎</span>
        <h2>AI 精準診斷 × 教練專業陪伴<br>把自學，變成<span>可執行</span>的系統。</h2>
        <p>AI 找出學習卡點，教練陪孩子拆解、練習與修正，讓每一步都朝有方向的成長前進。</p>
        <div class="ideal-step-strip">
          ${steps
            .map(
              ([titleText, text, iconName], index) => `<article>
                ${icon(iconName, index === 1 ? "sky" : index === 2 ? "coral" : "")}
                <strong>${titleText}</strong>
                <span>${text}</span>
              </article>`,
            )
            .join("")}
        </div>
      </div>
      <div class="ideal-engine-visual" data-premium-tilt>
        <figure>${premiumHomeImage("coach-companion", "孩子在教練陪伴下完成學習任務")}</figure>
        ${idealMiniReport()}
      </div>
    </div>
  </section>`;
}

function idealProgramsSection() {
  const plans = [
    ["教練班", "小班式成長陪伴", ["小組任務節奏", "同儕激勵", "定期成效回饋"], "users", ""],
    ["真人一對一", "專屬教練細引導", ["弱點拆解", "即時回饋", "客製化路線"], "heart", "coral"],
    ["無論哪種方案", "我們都陪在孩子身邊", ["專業教練團隊", "透明學習數據", "家長即時掌握"], "shield", "plain"],
  ];
  return `<section class="section ideal-home-section ideal-programs-section" aria-label="兩種方案">
    <div class="ideal-shell">
      <div class="ideal-center-head">
        <span class="ideal-kicker">選擇最適合孩子的陪伴方式</span>
        <h2>兩種方案，陪孩子走出專屬的學習路徑。</h2>
      </div>
      <div class="ideal-plan-grid">
        ${plans
          .map(
            ([name, titleText, items, iconName, tone]) => `<article class="ideal-plan-card ${tone}" data-premium-tilt>
              ${icon(iconName, tone === "coral" ? "coral" : "")}
              <h3>${name}</h3>
              <p>${titleText}</p>
              <ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>
              <a class="btn ${tone === "coral" ? "coral" : "secondary"}" href="#/programs">${tone === "coral" ? "了解真人一對一" : "了解方案"}<span class="btn-arrow" aria-hidden="true">→</span></a>
            </article>`,
          )
          .join("")}
      </div>
    </div>
  </section>`;
}

function idealProofSection() {
  return `<section class="section ideal-home-section ideal-proof-section" aria-label="學習成效">
    <div class="ideal-shell ideal-proof-shell">
      <div class="ideal-proof-copy">
        <h2>AI 找到問題，<br>教練陪孩子<br>真的走下去。</h2>
        <p>數據帶路，陪伴落地。從理解到行動，一步步累積看得見的進步。</p>
      </div>
      <figure class="ideal-proof-photo" data-premium-tilt>${premiumHomeImage("pain-diagnosis", "孩子使用筆電進行自學任務")}</figure>
      <div class="ideal-stat-grid">
        ${idealStatCard("8.5", "平均每週有效學習時數", "clock")}
        ${idealStatCard("82%", "學生成效穩定提升", "target")}
        ${idealStatCard("+24%", "平均成績進步幅度", "chart", "sky")}
        ${idealStatCard("98%", "家長滿意度", "heart", "coral")}
      </div>
    </div>
  </section>`;
}

function idealFinalSection() {
  return `<section class="section ideal-home-section ideal-final-section home-screen-lead-form" aria-label="開始 15 分鐘 AI 學習體檢">
    <div class="ideal-shell ideal-final-shell">
      <figure class="ideal-final-photo" data-premium-tilt>${premiumHomeImage("conversion-ai-test", "家長陪孩子完成 15 分鐘學習診斷")}</figure>
      <div class="ideal-final-copy">
        <h2>先做 15 分鐘診斷，<br>今天就知道下一步。</h2>
        <p>免費了解孩子的學習狀況與建議方向。不補學，不推銷，安心體驗。</p>
        <div class="ideal-benefit-grid">
          <article>${icon("clock")}<strong>快速診斷</strong><span>15 分鐘了解重點</span></article>
          <article>${icon("doc", "sky")}<strong>專屬建議</strong><span>提供可執行方向</span></article>
          <article>${icon("heart", "coral")}<strong>安心體驗</strong><span>無壓力、無綁約</span></article>
        </div>
        <div class="premium-actions">
          <a class="btn" href="#/diagnosis">開始 15 分鐘 AI 體檢<span class="btn-arrow" aria-hidden="true">→</span></a>
          <button class="btn secondary" type="button" data-home-lead-toggle aria-expanded="false" aria-controls="home-lead-panel">先留下資料</button>
        </div>
      </div>
      <form class="home-conversion-form premium-lead-form ideal-lead-form" id="home-lead-panel" data-home-conversion-form data-home-lead-panel hidden novalidate>
        <div class="home-conversion-form-body">
          <span>也可以先留下資料</span>
          <h3>讓學習顧問協助安排</h3>
          <label class="home-conversion-field">
            <span>家長姓名</span>
            <input type="text" name="parentName" autocomplete="name" placeholder="例如：林小姐" />
            <small data-home-error="parentName"></small>
          </label>
          <label class="home-conversion-field">
            <span>聯絡方式</span>
            <input type="text" name="contact" autocomplete="tel" placeholder="手機或 Email" />
            <small data-home-error="contact"></small>
          </label>
          <label class="home-conversion-field">
            <span>孩子年級</span>
            <select name="grade">
              <option value="">請選擇年級</option>
              <option>國一</option>
              <option>國二</option>
              <option>國三</option>
              <option>高一</option>
              <option>高二</option>
              <option>高三</option>
            </select>
            <small data-home-error="grade"></small>
          </label>
          <label class="home-conversion-field">
            <span>最擔心的學習問題</span>
            <textarea name="concern" rows="3" placeholder="例如：數學應用題一直卡住、每天很難開始讀書"></textarea>
            <small data-home-error="concern"></small>
          </label>
          <button class="btn coral" type="submit">送出並預約協助</button>
          <p class="home-form-note">v1 先提供前端互動與資料確認，正式串接表單服務後才會送入系統。</p>
        </div>
        <div class="home-conversion-success" data-home-form-success hidden>
          ${icon("heart", "coral")}
          <strong>資料已在此頁完成確認</strong>
          <p>目前尚未串接後端表單服務。你可以先開始 AI 學習體檢，或回到表單重新編輯。</p>
          <div>
            <a class="btn" href="#/diagnosis">開始 AI 學習體檢</a>
            <button class="btn secondary" type="button" data-home-form-edit>重新編輯資料</button>
          </div>
        </div>
      </form>
    </div>
  </section>`;
}

function homeOnePageContent() {
  return `
    <div class="ideal-home-flow">
      ${idealDiagnosisSection()}
      ${idealEngineSection()}
      ${idealProgramsSection()}
      ${idealProofSection()}
      ${idealFinalSection()}
    </div>
  `;
}

function aboutStageVisual(type) {
  const visuals = {
    diagnosis: `<figure class="about-stage-visual diagnosis" aria-label="AI 診斷孩子學習狀態示意圖">
      <div class="about-device about-diagnosis-device">
        <div class="about-device-bar"><i></i><i></i><i></i><span>AI 學習診斷</span></div>
        <div class="about-radar-card">
          <strong>知識點掌握度</strong>
          <svg viewBox="0 0 160 130" aria-hidden="true">
            <polygon points="80,8 142,42 126,110 80,124 34,110 18,42" />
            <polygon points="80,28 114,48 106,88 80,98 54,88 46,48" />
            <line x1="80" y1="8" x2="80" y2="124" />
            <line x1="18" y1="42" x2="142" y2="42" />
            <line x1="34" y1="110" x2="142" y2="42" />
          </svg>
        </div>
        <div class="about-signal-list">
          <span><b>弱點</b><em>閱讀推論</em></span>
          <span><b>狀態</b><em>容易跳步</em></span>
          <span><b>建議</b><em>先補關鍵觀念</em></span>
        </div>
      </div>
    </figure>`,
    plan: `<figure class="about-stage-visual plan" aria-label="個人化任務路徑示意圖">
      <div class="about-device about-plan-device">
        <div class="about-device-bar"><i></i><i></i><i></i><span>個人化學習路徑</span></div>
        <div class="about-plan-route">
          <article><b>今天</b><span>觀念補強</span><em></em></article>
          <article><b>明天</b><span>題型練習</span><em></em></article>
          <article><b>週末</b><span>回顧測驗</span><em></em></article>
        </div>
        <div class="about-plan-score"><strong>75%</strong><span>本週完成進度</span></div>
      </div>
    </figure>`,
    coach: `<figure class="about-stage-visual coach" aria-label="教練陪伴孩子學習示意圖">
      <div class="about-coach-chat">
        <div class="about-avatar-card">${icon("users", "coral")}<strong>林教練</strong><span>在線陪跑</span></div>
        <div class="about-chat-thread">
          <p>這題卡在題意轉換，我們先畫出關係圖。</p>
          <p class="student">我懂了，可以再試一題。</p>
          <p>很好，下一題會保留同一個觀念。</p>
        </div>
      </div>
    </figure>`,
    report: `<figure class="about-stage-visual report" aria-label="家長週報與數據回饋示意圖">
      <div class="about-report-phone">
        <div class="about-phone-head"><span>家長週報</span><b>本週進步</b></div>
        <div class="about-phone-metrics">
          <article><strong>8.5h</strong><span>學習時數</span></article>
          <article><strong>+24%</strong><span>弱點改善</span></article>
        </div>
        <svg viewBox="0 0 260 92" aria-hidden="true">
          <path d="M18 70 C48 62 60 66 82 50 S126 48 148 34 196 36 238 16" />
        </svg>
        <div class="about-report-note">下週先補強應用題理解</div>
      </div>
    </figure>`,
  };
  return visuals[type] || visuals.diagnosis;
}

function aboutInteractiveBlock() {
  const steps = [
    {
      no: "01",
      icon: "target",
      tone: "teal",
      title: "先找出真正卡點",
      label: "AI 體檢",
      metric: "15 分鐘",
      copy: "不是只看分數，而是拆出孩子卡在哪個知識點、哪種題型與哪個學習習慣。",
      tags: ["程度落點", "弱點題型", "學習習慣"],
      visual: "diagnosis",
    },
    {
      no: "02",
      icon: "doc",
      tone: "sand",
      title: "排成孩子做得到的路線",
      label: "個人計畫",
      metric: "每日小任務",
      copy: "把診斷結果轉成每天可以完成的小步驟，讓孩子知道今天先做什麼。",
      tags: ["任務拆解", "節奏安排", "難度調整"],
      visual: "plan",
    },
    {
      no: "03",
      icon: "users",
      tone: "coral",
      title: "教練陪著跨過卡關",
      label: "專屬陪跑",
      metric: "每週追蹤",
      copy: "教練看得到孩子的狀態，在需要提醒、鼓勵或拆題時及時介入。",
      tags: ["提醒", "鼓勵", "回饋"],
      visual: "coach",
    },
    {
      no: "04",
      icon: "chart",
      tone: "sky",
      title: "家長看得懂每一步進步",
      label: "透明週報",
      metric: "每週同步",
      copy: "把投入時間、掌握度、弱點改善與教練建議整理成家長能快速理解的週報。",
      tags: ["學習時數", "掌握度", "下週建議"],
      visual: "report",
    },
  ];

  return `<section class="section about-interactive-section">
    <div class="about-interactive-shell" data-about-switcher data-active-about="0">
      <div class="about-section-head">
        <span class="about-panel-kicker">30 秒看懂</span>
        <h2>伴伴辦學怎麼讓孩子真正學會？</h2>
        <p>點選每一步，快速看懂 AI、教練與數據如何一起把學習變成清楚、穩定、看得見的成長路線。</p>
      </div>
      <div class="about-interactive-layout">
        <div class="about-path-list" role="tablist" aria-label="伴伴辦學陪伴流程">
          ${steps
            .map(
              (step, index) => `<button class="about-path-button ${step.tone} ${index === 0 ? "is-active" : ""}" type="button" role="tab" id="about-path-tab-${index}" aria-controls="about-path-panel-${index}" aria-selected="${index === 0 ? "true" : "false"}" data-about-tab="${index}">
                <b>${step.no}</b>
                ${icon(step.icon, step.tone === "teal" ? "" : step.tone)}
                <span>
                  <strong>${step.title}</strong>
                  <em>${step.label} / ${step.metric}</em>
                </span>
              </button>`,
            )
            .join("")}
        </div>
        <div class="about-stage">
          ${steps
            .map(
              (step, index) => `<article class="about-stage-panel ${step.tone} ${index === 0 ? "is-active" : ""}" id="about-path-panel-${index}" role="tabpanel" aria-labelledby="about-path-tab-${index}" data-about-panel="${index}" ${index === 0 ? "" : "hidden"}>
                <div class="about-stage-copy">
                  <span>${step.no} / ${step.label}</span>
                  <h3>${step.title}</h3>
                  <p>${step.copy}</p>
                  <div>${step.tags.map((tag) => `<em>${tag}</em>`).join("")}</div>
                </div>
                ${aboutStageVisual(step.visual)}
              </article>`,
            )
            .join("")}
        </div>
      </div>
    </div>
  </section>`;
}

function formulaBlock() {
  const steps = [
    {
      no: "01",
      icon: "brain",
      tone: "teal",
      title: "AI 先判讀",
      copy: "系統先整理錯題、掌握度與練習節奏，找出真正需要補的地方。",
      badge: "弱點定位",
      points: ["知識點落點", "題型掌握度", "下一題推薦"],
    },
    {
      no: "02",
      icon: "users",
      tone: "coral",
      title: "教練陪著做",
      copy: "教練把任務拆成孩子願意開始的小步驟，陪他完成、回顧、再前進。",
      badge: "陪跑執行",
      points: ["每日提醒", "卡關拆解", "信心建立"],
    },
    {
      no: "03",
      icon: "chart",
      tone: "sky",
      title: "數據再校準",
      copy: "每次練習都回到數據，讓下一週任務更貼近孩子的真實狀態。",
      badge: "持續優化",
      points: ["完成率", "弱點改善", "家長週報"],
    },
  ];

  return `<section class="section about-loop-section">
    <div class="about-loop-shell" data-about-loop-switcher data-active-loop="0">
      <div class="about-section-head centered">
        <span class="about-panel-kicker">伴伴方法論</span>
        <h2>AI + 教練 + 數據 = 有效學習循環</h2>
        <p>不是把孩子丟進更多練習，而是讓每一步都被理解、陪伴、校準。點選角色，看它在循環裡負責什麼。</p>
      </div>
      <div class="about-loop-tablist" role="tablist" aria-label="有效學習循環角色">
        ${steps
          .map(
            (step, index) => `<button class="about-loop-tab ${step.tone} ${index === 0 ? "is-active" : ""}" type="button" role="tab" aria-selected="${index === 0 ? "true" : "false"}" aria-controls="about-loop-panel-${index}" id="about-loop-tab-${index}" data-about-loop-tab="${index}">
              <b>${step.no}</b>
              ${icon(step.icon, step.tone === "teal" ? "" : step.tone)}
              <strong>${step.title}</strong>
            </button>`,
          )
          .join("")}
      </div>
      <div class="about-loop-grid">
        <figure class="about-loop-diagram" aria-label="AI、教練與數據形成有效學習循環">
          <div class="about-orbit-system">
            <span class="about-orbit-ring"></span>
            <span class="about-orbit-line"></span>
            ${steps
              .map(
                (step, index) => `<button class="about-orbit-node node-${index + 1} ${step.tone} ${index === 0 ? "is-active" : ""}" type="button" data-about-loop-node="${index}" aria-label="${step.title}">
                  ${icon(step.icon, step.tone === "teal" ? "" : step.tone)}
                  <strong>${step.badge}</strong>
                </button>`,
              )
              .join("")}
            <div class="about-orbit-core">
              ${icon("heart", "coral")}
              <strong>孩子真正學會</strong>
              <span>有效、有感、看得見進步</span>
            </div>
          </div>
        </figure>
        <div class="about-loop-details">
          ${steps
            .map(
              (step, index) => `<article class="about-loop-detail ${step.tone} ${index === 0 ? "is-active" : ""}" id="about-loop-panel-${index}" role="tabpanel" aria-labelledby="about-loop-tab-${index}" data-about-loop-panel="${index}" ${index === 0 ? "" : "hidden"}>
                <span>${step.badge}</span>
                <h3>${step.title}</h3>
                <p>${step.copy}</p>
                <ul>${step.points.map((point) => `<li>${point}</li>`).join("")}</ul>
              </article>`,
            )
            .join("")}
        </div>
      </div>
    </div>
  </section>`;
}

function aboutDataBlock() {
  const reports = [
    {
      label: "本週",
      title: "孩子這週穩定完成任務",
      score: "88%",
      sub: "任務完成率",
      tone: "teal",
      metrics: [
        ["8.5 小時", "學習時數"],
        ["+24%", "弱點改善"],
        ["3 則", "教練回饋"],
      ],
      bars: [
        ["數學", "88"],
        ["英文", "82"],
        ["國文", "76"],
      ],
      note: "下週先補強應用題理解，保留每天 20 分鐘複習節奏。",
    },
    {
      label: "本月",
      title: "弱點正在被逐步補回來",
      score: "92%",
      sub: "整體掌握度",
      tone: "coral",
      metrics: [
        ["32.5 小時", "累積學習"],
        ["+18%", "完成率提升"],
        ["12 題", "錯題回補"],
      ],
      bars: [
        ["應用題", "84"],
        ["閱讀推論", "79"],
        ["英文時態", "86"],
      ],
      note: "孩子已能先判斷題型，再進入計算，解題穩定度明顯提升。",
    },
    {
      label: "學期",
      title: "長期趨勢讓家長放心",
      score: "4.9",
      sub: "家長滿意度",
      tone: "sky",
      metrics: [
        ["21 天", "連續學習"],
        ["100%", "內容把關"],
        ["10,000+", "學員選擇"],
      ],
      bars: [
        ["自主開始", "80"],
        ["複習習慣", "83"],
        ["學習信心", "90"],
      ],
      note: "穩定紀錄孩子的努力，不只看一次成績，而是看見一路成長。",
    },
  ];

  return `<section class="section about-proof-section">
    <div class="about-proof-shell" data-about-proof-switcher data-active-proof="0">
      <div class="about-proof-copy">
        <span class="about-panel-kicker">透明回報</span>
        <h2>用數據說話，家長更放心</h2>
        <p>把「學了多久、哪裡進步、下週怎麼調整」放進同一份週報，家長不用猜，也不用追著問。</p>
        <div class="about-proof-tabs" role="tablist" aria-label="切換學習報告週期">
          ${reports
            .map(
              (report, index) => `<button class="about-proof-tab ${report.tone} ${index === 0 ? "is-active" : ""}" type="button" role="tab" aria-selected="${index === 0 ? "true" : "false"}" aria-controls="about-proof-panel-${index}" id="about-proof-tab-${index}" data-about-proof-tab="${index}">
                ${report.label}
              </button>`,
            )
            .join("")}
        </div>
      </div>
      <div class="about-proof-dashboard">
        <div class="about-proof-panels">
          ${reports
            .map(
              (report, index) => `<article class="about-proof-card ${report.tone} ${index === 0 ? "is-active" : ""}" id="about-proof-panel-${index}" role="tabpanel" aria-labelledby="about-proof-tab-${index}" data-about-proof-panel="${index}" ${index === 0 ? "" : "hidden"}>
                <div class="about-proof-card-head">
                  <span>${report.label}週報</span>
                  <strong>${report.title}</strong>
                </div>
                <div class="about-proof-score">
                  <b>${report.score}</b>
                  <span>${report.sub}</span>
                </div>
                <div class="about-proof-metrics">
                  ${report.metrics.map(([num, label]) => `<article><strong>${num}</strong><span>${label}</span></article>`).join("")}
                </div>
                <div class="about-proof-bars">
                  ${report.bars.map(([label, value]) => `<div><span>${label}</span><i><em style="width: ${value}%"></em></i><b>${value}%</b></div>`).join("")}
                </div>
                <p>${report.note}</p>
              </article>`,
            )
            .join("")}
        </div>
        <aside class="about-parent-view" aria-label="家長可以看到的重點">
          <div class="about-parent-phone">
            <div class="about-phone-head"><span>家長同步</span><b>今天更新</b></div>
            <ul>
              <li>每日學習時間與專注度</li>
              <li>各科掌握度與強弱項分析</li>
              <li>教練回饋與下週建議</li>
            </ul>
            <div class="about-phone-alert">${icon("bell")}<span>週報已送出</span></div>
          </div>
        </aside>
      </div>
    </div>
    <p class="data-source">* 數據來源：伴伴辦學內部統計（截至 2024 年 12 月）</p>
  </section>`;
}

function comparisonBlock() {
  const plans = [
    ["01", "教練班", "AI 自主學習 + 教練班", "建立節奏與同儕氛圍", "適合需要固定任務、同儕陪伴與教練提醒的孩子。", "教練班節奏", ["每日任務", "小組陪跑", "教練追蹤"], "users"],
    ["02", "真人一對一", "AI 自主學習 + 真人一對一", "深度突破與即時回饋", "適合已經知道弱點，需要密集拆解題型與觀念的孩子。", "深度突破", ["弱點拆解", "即時回覆", "客製路線"], "target"],
  ];

  return `<section class="section programs-compare-section">
    <div class="programs-compare-shell programs-switcher" data-program-switcher data-active-program="0">
      ${programsBlockHeading("方案配對", "兩大核心方案，為不同需求而設計", "讓家長先看懂兩種方案解決的是不同問題，再依孩子狀態選擇陪伴密度。")}
      <div class="programs-compare-layout">
        <div class="programs-plan-tabs" role="tablist" aria-label="兩大核心方案">
          ${plans
            .map(
              ([num, label, title, subtitle, copy, metric, tags, iconName], index) => `<button class="programs-plan-tab ${index === 0 ? "is-active" : ""}" type="button" role="tab" aria-selected="${index === 0 ? "true" : "false"}" data-program-tab="${index}">
                <b>${num}</b>
                ${icon(iconName, index === 1 ? "coral" : "")}
                <strong>${label}</strong>
                <span>${subtitle}</span>
                <em>${metric}</em>
              </button>`,
            )
            .join("")}
        </div>
        <figure class="programs-match-device" aria-label="方案配對系統示意圖">
          <div class="programs-device-bar"><i></i><i></i><i></i><span>方案配對器</span><em>依需求推薦</em></div>
          <div class="match-signal-row">
            <article><span>學習節奏</span><strong>需要建立</strong></article>
            <article><span>弱點深度</span><strong>中度卡關</strong></article>
            <article><span>陪伴密度</span><strong>每週追蹤</strong></article>
          </div>
          <div class="match-route">
            <span>診斷結果</span><i></i><span>需求判斷</span><i></i><span>方案建議</span>
          </div>
          <div class="match-plan-cards">
            <article class="is-recommended">
              ${icon("users")}
              <strong>教練班</strong>
              <small>同儕節奏與固定任務</small>
            </article>
            <article>
              ${icon("target", "coral")}
              <strong>真人一對一</strong>
              <small>密集拆解與即時回饋</small>
            </article>
          </div>
        </figure>
        <div class="programs-plan-panels">
          ${plans
            .map(
              ([num, label, title, subtitle, copy, metric, tags], index) => `<article class="programs-plan-panel ${index === 0 ? "is-active" : ""}" data-program-panel="${index}" ${index === 0 ? "" : "hidden"}>
                <span>${num}</span>
                <h3>${title}</h3>
                <p>${copy}</p>
                <strong>${metric}</strong>
                <div>${tags.map((tag) => `<em>${tag}</em>`).join("")}</div>
                <a class="btn ${index === 1 ? "coral" : ""}" href="#/diagnosis">先做 AI 體檢</a>
              </article>`,
            )
            .join("")}
        </div>
      </div>
    </div>
  </section>`;
}

function programPlanCard(label, heading, subline, summary, features, tone = "teal") {
  return `<article class="plan-card program-plan ${tone === "coral" ? "coral" : ""}">
    <div class="plan-corner-badge">${icon("heart", tone === "coral" ? "coral" : "")}</div>
    <div class="plan-copy">
      <div class="label">${label}</div>
      <h3>${heading}</h3>
      <p class="plan-subline">${subline}</p>
      <p class="plan-summary">${summary}</p>
      <div class="plan-feature-row">
        ${features.map(([iconName, title, copy], index) => `<div>${icon(iconName, tone === "coral" || index === 1 ? "coral" : index === 2 ? "sky" : "")}<strong>${title}</strong><span>${copy}</span></div>`).join("")}
      </div>
      <a class="btn ${tone === "coral" ? "coral" : ""}" href="#/diagnosis">先做 AI 體檢</a>
    </div>
  </article>`;
}

function fitBlock() {
  const personas = [
    ["穩定建立型", "AI 自主學習 + 教練班", "需要有人提醒開始，也需要同儕氛圍讓自己持續下去。", "每週任務完成率", "88%", ["建立習慣", "固定任務", "同儕陪跑"], "users"],
    ["弱點突破型", "AI 自主學習 + 真人一對一", "已經知道卡點，希望有人陪他把概念拆開，快速補起來。", "弱點改善速度", "+32%", ["深度拆題", "即時回饋", "客製練習"], "rocket"],
  ];

  return `<section class="section programs-fit-section">
    <div class="programs-fit-shell">
      ${programsBlockHeading("適合對象", "這兩種方案，分別適合這樣的孩子", "同樣是 AI 自主學習，差別在孩子需要的是節奏陪伴，還是高密度突破。")}
      <div class="programs-fit-layout">
        <div class="fit-system-scene" aria-label="孩子狀態判斷示意圖">
          <div class="fit-system-card main">
            <span>孩子狀態</span>
            <strong>先判斷需要哪種陪伴</strong>
            <div><i style="--score:72%"></i><b>節奏穩定度 72%</b></div>
            <div><i style="--score:54%"></i><b>弱點深度 54%</b></div>
          </div>
          <div class="fit-system-card card-a">
            ${icon("users")}
            <strong>教練班節奏</strong>
            <span>固定任務與同儕氛圍</span>
          </div>
          <div class="fit-system-card card-b">
            ${icon("target", "coral")}
            <strong>一對一突破</strong>
            <span>深度拆解與即時回覆</span>
          </div>
        </div>
        <div class="programs-persona-grid">
          ${personas
            .map(
              ([type, plan, copy, metricLabel, metric, tags, iconName], index) => `<article class="programs-persona-card ${index === 1 ? "coral" : ""}">
                ${icon(iconName, index === 1 ? "coral" : "")}
                <small>${type}</small>
                <h3>${plan}</h3>
                <p>${copy}</p>
                <strong>${metric}<span>${metricLabel}</span></strong>
                <div>${tags.map((tag) => `<em>${tag}</em>`).join("")}</div>
              </article>`,
            )
            .join("")}
        </div>
      </div>
    </div>
  </section>`;
}

function recommendBlock() {
  const needs = [
    ["培養學習習慣", "需要系統化建立學習節奏與良好習慣", "推薦教練班", "穩定節奏", "chart", "teal"],
    ["穩定成績進步", "希望透過持續練習穩定提升成績", "推薦教練班", "每週追蹤", "target", "teal"],
    ["突破學習瓶頸", "遇到特定學科困難，需要專業指導突破", "推薦真人一對一", "密集拆解", "rocket", "coral"],
    ["追求卓越表現", "目標頂尖表現，需要最高效的學習方案", "推薦真人一對一", "高效突破", "star", "coral"],
  ];

  return `<section class="section programs-recommend-section">
    <div class="programs-recommend-shell programs-switcher" data-program-switcher data-active-program="0">
      ${programsBlockHeading("需求推薦", "依照學習需求，推薦最適合的方案", "孩子目前的需求會被整理成推薦方案、原因與下一步。")}
      <div class="recommend-layout">
        <div class="recommend-choice-grid" role="tablist" aria-label="學習需求推薦">
          ${needs
            .map(
              ([title, copy, tag, metric, iconName, tone], index) => `<button class="recommend-choice ${tone} ${index === 0 ? "is-active" : ""}" type="button" role="tab" aria-selected="${index === 0 ? "true" : "false"}" data-program-tab="${index}">
                ${icon(iconName, tone === "coral" ? "coral" : "")}
                <strong>${title}</strong>
                <span>${copy}</span>
                <em>${tag}</em>
              </button>`,
            )
            .join("")}
        </div>
        <div class="recommend-output-board">
          <div class="recommend-screen" aria-label="推薦方案系統示意圖">
            <div class="programs-device-bar"><i></i><i></i><i></i><span>方案推薦結果</span><em>即時判斷</em></div>
            ${needs
              .map(
                ([title, copy, tag, metric], index) => `<article class="recommend-output ${index === 0 ? "is-active" : ""}" data-program-panel="${index}" ${index === 0 ? "" : "hidden"}>
                  <small>${title}</small>
                  <h3>${tag}</h3>
                  <p>${copy}</p>
                  <strong>${metric}</strong>
                  <div class="recommend-next-steps"><span>先診斷</span><i></i><span>再配對</span><i></i><span>開始陪跑</span></div>
                </article>`,
              )
              .join("")}
          </div>
        </div>
      </div>
    </div>
  </section>`;
}

function programStatsBlock() {
  return `<section class="section programs-trust-section">
    <div class="programs-trust-shell">
      ${programsBlockHeading("信任數據", "值得信賴的學習夥伴", "用可追蹤的學習服務、教練回饋與家長同步，讓方案不是一次性課程，而是持續陪伴。")}
      <div class="trust-dashboard">
        <div class="trust-metrics">
          ${[
            ["10,000+", "學員信賴選擇", "heart"],
            ["95%", "學習成效滿意度", "brain"],
            ["500+", "專業教練團隊", "users"],
            ["8 年", "專注教育陪伴", "star"],
          ].map(([num, label, iconName], index) => `<article class="trust-metric ${index === 1 ? "sky" : index === 2 ? "coral" : index === 3 ? "sand" : ""}">
            ${icon(iconName, index === 1 ? "sky" : index === 2 ? "coral" : index === 3 ? "sand" : "")}
            <strong>${num}</strong>
            <span>${label}</span>
          </article>`).join("")}
        </div>
        <figure class="trust-ops-board" aria-label="學習服務追蹤示意圖">
          <div class="programs-device-bar"><i></i><i></i><i></i><span>服務品質追蹤台</span><em>每週更新</em></div>
          <div class="trust-line-chart">
            <svg viewBox="0 0 360 160" aria-hidden="true">
              <path class="trust-area" d="M20 128 C58 116 72 112 108 96 S168 102 198 70 254 58 286 46 326 38 342 24 V146 H20 Z" />
              <path class="trust-line" d="M20 128 C58 116 72 112 108 96 S168 102 198 70 254 58 286 46 326 38 342 24" />
            </svg>
          </div>
          <div class="trust-checks">
            <span>診斷完成率 <b>98%</b></span>
            <span>任務追蹤率 <b>93%</b></span>
            <span>家長週報開啟率 <b>91%</b></span>
          </div>
        </figure>
      </div>
    </div>
  </section>`;
}

function programsBlockHeading(kicker, title, copy) {
  return `<div class="programs-block-heading">
    <span>${kicker}</span>
    <h2>${title}</h2>
    <p>${copy}</p>
  </div>`;
}

function metricStrip() {
  const metrics = [
    ["clock", "8.5", "小時", "本週學習時數", "比上週多 1.6 小時", "teal"],
    ["target", "82", "%", "整體掌握度", "主要觀念已穩定", "coral"],
    ["chart", "24", "%", "弱點改善幅度", "三個卡點正在下降", "sky"],
    ["star", "320", "顆", "本週獲得星星", "完成任務後即時累積", "coral"],
    ["calendar", "21", "天", "持續學習天數", "習慣正在形成", "sand"],
  ];

  return `<section class="section progress-command-section">
    <div class="progress-command-shell progress-switcher" data-progress-switcher data-active-progress="0">
      ${progressBlockHeading("成長總覽", "孩子這週進步在哪裡，一眼看懂", "把學習時間、掌握度、弱點改善與任務完成狀態放在同一個系統畫面，家長不用自己拼湊。")}
      <div class="progress-command-layout">
        <div class="progress-metric-rail" role="tablist" aria-label="本週學習指標">
          ${metrics
            .map(
              ([iconName, value, unit, label, note, tone], index) => `<button class="progress-metric-tile ${tone} ${index === 0 ? "is-active" : ""}" type="button" role="tab" aria-selected="${index === 0 ? "true" : "false"}" data-progress-tab="${index}">
                ${icon(iconName, tone === "coral" ? "coral" : tone === "sky" ? "sky" : tone === "sand" ? "sand" : "")}
                <strong>${value}<span>${unit}</span></strong>
                <b>${label}</b>
                <small>${note}</small>
              </button>`,
            )
            .join("")}
        </div>
        <figure class="progress-live-device" aria-label="學習成長總覽系統示意圖">
          <div class="progress-device-bar"><i></i><i></i><i></i><span>學習成效總覽</span><em>本週更新</em></div>
          <div class="progress-live-summary">
            <div>
              <small>本週成長訊號</small>
              <strong>節奏穩定，弱點正在縮小</strong>
            </div>
            <span>AI 已整理 5 個重點</span>
          </div>
          <div class="progress-live-chart">
            <svg viewBox="0 0 460 200" aria-hidden="true">
              <defs><linearGradient id="progressTrendArea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#58c5bd" stop-opacity="0.2"/><stop offset="1" stop-color="#58c5bd" stop-opacity="0"/></linearGradient></defs>
              <path class="progress-chart-area" d="M34 146 C76 138 94 116 132 112 S190 116 220 92 278 96 314 72 384 74 426 36 V172 H34 Z"/>
              <path class="progress-chart-line" d="M34 146 C76 138 94 116 132 112 S190 116 220 92 278 96 314 72 384 74 426 36"/>
              ${[[34, 146], [132, 112], [220, 92], [314, 72], [426, 36]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="6"/>`).join("")}
            </svg>
          </div>
          <div class="progress-live-panels">
            ${metrics
              .map(
                ([iconName, value, unit, label, note, tone], index) => `<article class="progress-live-panel ${tone} ${index === 0 ? "is-active" : ""}" data-progress-panel="${index}" ${index === 0 ? "" : "hidden"}>
                  ${icon(iconName, tone === "coral" ? "coral" : tone === "sky" ? "sky" : tone === "sand" ? "sand" : "")}
                  <small>${label}</small>
                  <strong>${value}<span>${unit}</span></strong>
                  <p>${note}</p>
                </article>`,
              )
              .join("")}
          </div>
        </figure>
        <aside class="progress-parent-feed" aria-label="家長週報摘要">
          <div class="progress-feed-card highlight">
            <span>家長週報</span>
            <strong>今天最值得注意</strong>
            <p>數學應用題完成率提升，英文時態錯誤開始減少。</p>
          </div>
          <div class="progress-feed-card">
            ${icon("chat", "coral")}
            <strong>教練提醒</strong>
            <p>下週先維持每日 20 分鐘，再加一組弱點練習。</p>
          </div>
          <div class="progress-feed-card">
            ${icon("shield", "sky")}
            <strong>安心同步</strong>
            <p>任務、掌握度與回饋都會保留成學習歷程。</p>
          </div>
        </aside>
      </div>
    </div>
  </section>`;
}

function dashboardBlock() {
  const subjects = [
    ["數學", "88%", "teal", 88],
    ["國文", "76%", "coral", 76],
    ["英文", "84%", "sky", 84],
    ["自然", "79%", "sand", 79],
    ["社會", "68%", "coral", 68],
  ];
  const weakPoints = [
    ["分數的應用", "已改善 36%", "72%"],
    ["英文文法：時態", "已改善 28%", "58%"],
    ["比與比例", "已改善 22%", "48%"],
  ];

  return `<section class="section progress-insight-section">
    <div class="progress-insight-shell">
      ${progressBlockHeading("學習洞察", "從分數背後，看見真正的學習狀態", "系統把趨勢、掌握度、弱點與教練回饋串在同一個工作台，讓下一步很清楚。")}
      <div class="progress-insight-layout">
        <figure class="progress-report-station" aria-label="家長成效報告系統示意圖">
          <div class="progress-device-bar"><i></i><i></i><i></i><span>家長成效報告</span><em>可分享週報</em></div>
          <div class="report-station-hero">
            <div>
              <small>整體掌握度</small>
              <strong>82%</strong>
              <p>本週比上週提升 6%</p>
            </div>
            <div class="progress-donut" aria-hidden="true"><b>82%</b></div>
          </div>
          <div class="report-station-chart">
            <svg viewBox="0 0 520 190" aria-hidden="true">
              <path class="progress-chart-area" d="M24 146 C82 132 105 112 154 105 S232 112 268 82 346 86 386 62 458 62 500 30 V170 H24 Z"/>
              <path class="progress-chart-line" d="M24 146 C82 132 105 112 154 105 S232 112 268 82 346 86 386 62 458 62 500 30"/>
            </svg>
          </div>
          <div class="report-station-subjects">
            ${subjects.map(([label, value, tone, width]) => `<div class="progress-subject-row ${tone}"><span>${label}</span><i style="--score:${width}%"></i><b>${value}</b></div>`).join("")}
          </div>
        </figure>
        <div class="progress-insight-grid">
          <article class="progress-insight-card weakness-card">
            <span>弱點改善 TOP 3</span>
            <h3>先看到卡點，再看到變好</h3>
            ${weakPoints.map(([label, note, width]) => `<div class="progress-weak-row"><strong>${label}</strong><i style="--score:${width}"></i><b>${note}</b></div>`).join("")}
          </article>
          <article class="progress-insight-card coach-card">
            <span>教練回饋</span>
            <h3>這週該怎麼陪</h3>
            <p>數學應用題進步明顯，英文時態更穩定。下週建議保留每日練習，再加入一組高層次題目。</p>
            <div class="progress-coach-row"><span>林教練</span><b>已給下一步建議</b></div>
          </article>
          <article class="progress-phone-card">
            <div class="progress-phone-shell">
              <span>家長手機週報</span>
              <strong>今天看什麼？</strong>
              <p>學習時間、掌握度、弱點、教練建議</p>
              <div><i></i><i></i><i></i></div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>`;
}

function dataWhyBlock() {
  const steps = [
    ["01", "精準診斷", "找出真正弱點，告別盲目練習", "target", "先定位"],
    ["02", "追蹤進度", "清楚看到每一次進步，建立學習信心", "chart", "週週更新"],
    ["03", "個人化建議", "AI 分析後轉成適合孩子的學習路徑", "brain", "自動配題"],
    ["04", "家長放心", "透明數據同步，陪孩子每一步成長", "users", "看得懂"],
  ];

  return `<section class="section progress-value-section">
    <div class="progress-value-shell">
      ${progressBlockHeading("數據到行動", "為什麼數據這麼重要？", "不是把孩子變成一堆數字，而是把努力翻譯成下一步可以做的行動。")}
      <div class="progress-value-layout">
        <figure class="progress-loop-board" aria-label="數據轉成學習行動示意圖">
          <div class="progress-loop-center">
            ${icon("brain")}
            <strong>AI 學習引擎</strong>
            <span>診斷、追蹤、建議、同步</span>
          </div>
          ${steps
            .map(
              ([num, title, _copy, iconName, tag], index) => `<article class="progress-loop-node node-${index + 1}">
                <b>${num}</b>
                ${icon(iconName, index === 1 ? "sky" : index === 2 ? "coral" : "")}
                <strong>${title}</strong>
                <span>${tag}</span>
              </article>`,
            )
            .join("")}
        </figure>
        <div class="progress-value-cards">
          ${steps
            .map(
              ([num, title, copy, iconName], index) => `<article class="progress-value-card ${index === 2 ? "coral" : index === 1 ? "sky" : ""}">
                <span>${num}</span>
                ${icon(iconName, index === 1 ? "sky" : index === 2 ? "coral" : "")}
                <h3>${title}</h3>
                <p>${copy}</p>
              </article>`,
            )
            .join("")}
        </div>
      </div>
    </div>
  </section>`;
}

function progressBlockHeading(kicker, title, copy) {
  return `<div class="progress-block-heading">
    <span>${kicker}</span>
    <h2>${title}</h2>
    <p>${copy}</p>
  </div>`;
}

function diagnosisSteps() {
  const steps = [
    ["01", "AI 體檢", "用適性題目看懂真實程度", "doc", "15 分鐘", "孩子不是只拿到分數，而是留下每一題的作答時間、錯誤型態與知識點位置。"],
    ["02", "知識圖譜", "把錯誤拆成知識缺口", "brain", "缺口定位", "系統會比對作答脈絡，把最影響後續學習的觀念優先標出。"],
    ["03", "錯因與行為", "找出為什麼卡住", "target", "行為畫像", "報告會整理粗心、觀念不清、題意判讀與提示依賴，讓問題不再只是一個分數。"],
    ["04", "7 天建議", "轉成可執行的改善任務", "calendar", "7 天路線", "依體檢結果安排每天做得到的小任務，家長也能看懂每一步為什麼這樣排。"],
  ];

  return `<section class="section diagnosis-process-section">
    <div class="diagnosis-process-shell diagnosis-switcher" data-diagnosis-switcher data-active-diagnosis="0">
      <div class="diagnosis-block-heading">
        <span>體檢流程</span>
        <h2>4 步驟，完成 15 分鐘 AI 學習體檢</h2>
        <p>把一次體檢變成一份可行動的學習地圖，讓家長先看懂問題，再決定下一步。</p>
      </div>
      <div class="diagnosis-process-layout">
        <div class="diagnosis-process-rail" role="tablist" aria-label="AI 學習體檢四步驟">
          ${steps
            .map(
              ([num, title, copy, iconName, metric], index) => `<button class="diagnosis-process-step ${index === 0 ? "is-active" : ""}" type="button" role="tab" aria-selected="${index === 0 ? "true" : "false"}" data-diagnosis-tab="${index}">
                <b>${num}</b>
                ${icon(iconName, index === 1 ? "coral" : index === 2 ? "sky" : index === 3 ? "sand" : "")}
                <strong>${title}</strong>
                <span>${copy}</span>
                <em>${metric}</em>
              </button>`,
            )
            .join("")}
        </div>
        <figure class="diagnosis-process-visual" aria-label="診斷流程系統示意圖">
          <div class="process-device">
            <div class="process-device-bar"><i></i><i></i><i></i><span>AI 學習體檢工作台</span></div>
            <div class="process-question-card">
              <small>適性題目 08 / 20</small>
              <strong>孩子卡在哪個觀念？</strong>
              <span>分數換算</span>
              <span>題意轉換</span>
              <span>閱讀推論</span>
            </div>
            <div class="process-scan-card">
              <span class="process-scan-line"></span>
              ${icon("brain")}
              <strong>AI 分析中</strong>
              <small>作答時間、錯誤模式、知識點關聯</small>
            </div>
            <div class="process-result-card">
              <small>體檢輸出</small>
              <strong>優先補強清單</strong>
              <span>01 分數應用</span>
              <span>02 題意判讀</span>
              <span>03 推論理解</span>
            </div>
          </div>
          <div class="process-orbit" aria-hidden="true"><span></span><span></span><span></span></div>
        </figure>
        <div class="diagnosis-process-panels">
          ${steps
            .map(
              ([num, title, _copy, _iconName, metric, detail], index) => `<article class="diagnosis-process-panel ${index === 0 ? "is-active" : ""}" data-diagnosis-panel="${index}" ${index === 0 ? "" : "hidden"}>
                <span>${num}</span>
                <h3>${title}</h3>
                <p>${detail}</p>
                <strong>${metric}</strong>
              </article>`,
            )
            .join("")}
        </div>
      </div>
    </div>
  </section>`;
}

function reportBlock() {
  const tabs = [
    ["總覽", "整體掌握 72", "孩子目前在中上區間，但數學應用與閱讀推論會拖慢後續學習。"],
    ["缺口", "3 個優先補強", "分數應用、題意判讀、文章推論是目前最值得先處理的卡點。"],
    ["建議", "7 天改善建議", "先穩住基礎概念，再進入題型演練與每日追蹤。"],
  ];

  return `<section class="section diagnosis-report-section">
    <div class="diagnosis-report-shell diagnosis-switcher" data-diagnosis-switcher data-active-diagnosis="0">
      <div class="diagnosis-report-copy">
        <div class="diagnosis-block-heading align-left">
          <span>體檢報告樣張</span>
          <h2>AI 學習體檢報告範例</h2>
          <p>報告把孩子的掌握度、知識缺口、錯因分析、學習行為畫像與 7 天建議整理在同一個畫面，家長不用自己解讀一堆分數。</p>
        </div>
        <div class="diagnosis-report-tabs" role="tablist" aria-label="診斷報告切換">
          ${tabs.map(([label], index) => `<button class="${index === 0 ? "is-active" : ""}" type="button" role="tab" aria-selected="${index === 0 ? "true" : "false"}" data-diagnosis-tab="${index}">${label}</button>`).join("")}
        </div>
        <div class="diagnosis-report-summary">
          ${tabs
            .map(
              ([label, title, copy], index) => `<article class="${index === 0 ? "is-active" : ""}" data-diagnosis-panel="${index}" ${index === 0 ? "" : "hidden"}>
                <small>${label}</small>
                <strong>${title}</strong>
                <p>${copy}</p>
              </article>`,
            )
            .join("")}
        </div>
      </div>
      <figure class="diagnosis-report-device" aria-label="AI 學習體檢報告系統示意圖">
        <div class="report-browser-bar"><i></i><i></i><i></i><span>AI 學習體檢報告</span><em>本週更新</em></div>
        <div class="report-hero-row">
          <div>
            <span>整體學習能力</span>
            <strong>72</strong>
            <small>/100 中上</small>
          </div>
          <div class="report-ring" aria-hidden="true"><b>72%</b></div>
        </div>
        <div class="report-metric-grid">
          <article><span>數學</span><strong>58%</strong><em>需優先補強</em></article>
          <article><span>國語文</span><strong>78%</strong><em>穩定掌握</em></article>
          <article><span>英文</span><strong>65%</strong><em>持續提升</em></article>
        </div>
        <div class="report-analysis-board">
          <div class="report-radar-visual">
            <svg viewBox="0 0 260 220" aria-hidden="true">
              <polygon points="130,22 228,92 190,198 70,198 32,92" />
              <polygon points="130,62 181,99 161,156 99,156 79,99" />
              <polygon class="fill" points="130,48 185,102 150,176 78,159 61,104" />
              <polyline points="130,22 130,198 228,92 70,198 32,92 190,198 130,22" />
            </svg>
            <span class="radar-a">閱讀 78</span><span class="radar-b">英文 65</span><span class="radar-c">數學 58</span>
          </div>
          <div class="report-task-stack">
            <strong>7 天改善建議</strong>
            <span>先補分數應用</span>
            <span>再練題意判讀</span>
            <span>最後建立每日複盤</span>
          </div>
        </div>
      </figure>
    </div>
  </section>`;
}

function weaknessBlock() {
  const weakPoints = [
    ["分數與小數運算", "錯誤率 42%", "通分、約分與小數換算容易混淆", "target"],
    ["應用題理解", "錯誤率 38%", "題意轉換與條件判讀需要拆解練習", "doc"],
    ["文章閱讀推論", "錯誤率 35%", "主旨理解與推論判斷需要練習", "brain"],
  ];

  return `<section class="section diagnosis-weakness-section">
    <div class="diagnosis-weakness-shell diagnosis-switcher" data-diagnosis-switcher data-active-diagnosis="0">
      <div class="diagnosis-block-heading">
        <span>弱點定位</span>
        <h2>弱點發現</h2>
        <p>不只列出哪裡錯，而是把錯誤定位到知識點，讓補強順序變清楚。</p>
      </div>
      <div class="diagnosis-weakness-layout">
        <div class="weakness-map-board" aria-label="學習弱點定位示意圖">
          <div class="weakness-map-center">
            ${icon("brain")}
            <strong>知識點圖譜</strong>
            <span>AI 正在比對錯誤模式</span>
          </div>
          <button class="weakness-hotspot hotspot-one is-active" type="button" data-diagnosis-tab="0"><b>42%</b><span>分數應用</span></button>
          <button class="weakness-hotspot hotspot-two" type="button" data-diagnosis-tab="1"><b>38%</b><span>應用題</span></button>
          <button class="weakness-hotspot hotspot-three" type="button" data-diagnosis-tab="2"><b>35%</b><span>閱讀推論</span></button>
          <i class="weakness-map-line line-one"></i><i class="weakness-map-line line-two"></i><i class="weakness-map-line line-three"></i>
        </div>
        <div class="weakness-detail-stack">
          ${weakPoints
            .map(
              ([title, metric, copy, iconName], index) => `<article class="weakness-detail-card ${index === 0 ? "is-active" : ""}" data-diagnosis-panel="${index}" ${index === 0 ? "" : "hidden"}>
                ${icon(iconName, index === 1 ? "sky" : index === 2 ? "coral" : "")}
                <small>優先補強 ${String(index + 1).padStart(2, "0")}</small>
                <h3>${title}</h3>
                <strong>${metric}</strong>
                <p>${copy}</p>
              </article>`,
            )
            .join("")}
          <div class="weakness-score-board">
            <span>掌握度</span>
            ${[
              ["整數運算", "85%", "teal"],
              ["分數運算", "45%", "coral"],
              ["小數運算", "40%", "coral"],
              ["比與比值", "60%", "sky"],
            ].map(([label, value, tone]) => `<div class="${tone}"><b>${label}</b><i style="--value:${value}"></i><em>${value}</em></div>`).join("")}
          </div>
        </div>
      </div>
    </div>
  </section>`;
}

function recommendationPanel() {
  return `<section class="section diagnosis-plan-section">
    <div class="diagnosis-plan-shell">
      <div class="diagnosis-block-heading align-left">
        <span>7 天改善路線</span>
        <h2>個人化學習建議</h2>
        <p>把 AI 學習體檢結果翻成孩子每天看得懂、做得到的任務，而不是只給一份報告。</p>
      </div>
      <div class="diagnosis-plan-layout">
        <figure class="plan-route-board" aria-label="個人化學習路徑示意圖">
          <div class="plan-path-line"></div>
          ${[
            ["01", "概念補強", "分數與小數"],
            ["02", "題型演練", "應用題理解"],
            ["03", "教練回饋", "錯題拆解"],
            ["04", "週週調整", "掌握度追蹤"],
          ].map(([num, title, copy], index) => `<article class="plan-path-node node-${index + 1}">
            <span>${num}</span>
            <strong>${title}</strong>
            <small>${copy}</small>
          </article>`).join("")}
        </figure>
        <div class="plan-daily-board">
          <article class="plan-time-card">
            ${icon("clock", "coral")}
            <span>每日建議</span>
            <strong>30 分鐘</strong>
            <p>15 分鐘概念複習，15 分鐘題型演練。</p>
          </article>
          <article class="plan-week-card">
            <span>7 天改善節奏</span>
            <strong>每天先完成 1 個核心任務</strong>
            <svg viewBox="0 0 260 120" aria-hidden="true">
              <path d="M12 96 C44 86 54 74 82 78 S120 88 145 56 180 54 205 34 232 30 248 18" />
              <circle cx="82" cy="78" r="5" /><circle cx="145" cy="56" r="5" /><circle cx="248" cy="18" r="5" />
            </svg>
          </article>
          <article class="plan-coach-card">
            ${icon("users", "sky")}
            <div>
              <span>教練追蹤重點</span>
              <strong>每週複盤錯題與任務完成率</strong>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>`;
}

function diagnosisCompanionBlock() {
  return `<section class="section diagnosis-partner-section">
    <div class="diagnosis-partner-shell">
      <div class="diagnosis-block-heading">
        <span>伴伴系統</span>
        <h2>選擇伴伴辦學，給孩子最好的學習夥伴</h2>
        <p>診斷只是開始，伴伴把 AI 分析、教練陪伴與家長週報串成可持續的學習服務。</p>
      </div>
      <div class="partner-loop">
        <div class="partner-core">
          ${icon("heart")}
          <strong>伴伴學習夥伴</strong>
          <span>診斷到陪跑的完整閉環</span>
        </div>
        ${[
          ["AI 學習體檢", "先找出真正卡住的地方", "brain", "node-a"],
          ["7 天改善建議", "把弱點排成每日任務", "calendar", "node-b"],
          ["教練陪伴追蹤", "每週回饋與策略調整", "users", "node-c"],
          ["家長透明週報", "知道孩子正在往哪裡進步", "doc", "node-d"],
        ].map(([title, copy, iconName, className], index) => `<article class="partner-node ${className}">
          ${icon(iconName, index === 1 ? "coral" : index === 2 ? "sky" : index === 3 ? "sand" : "")}
          <strong>${title}</strong>
          <p>${copy}</p>
        </article>`).join("")}
        <i class="partner-loop-ring"></i>
      </div>
      <div class="partner-proof-row">
        <span><b>15 分鐘</b>完成體檢</span>
        <span><b>3 大弱點</b>優先補強</span>
        <span><b>7 天建議</b>立即知道下一步</span>
      </div>
    </div>
  </section>`;
}

function journeyBlock() {
  const steps = [
    ["01", "AI 診斷", "看見起點", "target", "teal", 9, 24],
    ["02", "建立路徑", "安排順序", "rocket", "coral", 28, 64],
    ["03", "每日任務", "穩定完成", "calendar", "sky", 47, 31],
    ["04", "教練追蹤", "即時陪跑", "users", "teal", 61, 66],
    ["05", "成效回饋", "看見進步", "chart", "coral", 77, 35],
    ["06", "持續優化", "調整下一步", "star", "sky", 92, 70],
  ];

  return `<section class="section system-showcase system-journey-showcase">
    <div class="system-showcase-shell">
      <div class="system-showcase-copy">
        <span class="system-kicker">6 STEP JOURNEY</span>
        <h2 class="section-title">完整學習旅程，陪你一步步進步</h2>
        <p>從診斷到任務、追蹤與回饋，每一步都有清楚節點，孩子知道今天要做什麼，家長也看得見下一步。</p>
        <div class="system-proof-pills"><span>診斷定位</span><span>每日任務</span><span>教練調整</span></div>
      </div>
      <div class="system-visual system-journey-visual" aria-label="完整學習旅程系統示意圖">
        <div class="system-window journey-window">
          <div class="system-window-bar"><span></span><span></span><span></span><b>學習旅程地圖</b></div>
          <div class="journey-route-board">
            <svg viewBox="0 0 720 320" preserveAspectRatio="none" aria-hidden="true">
              <path d="M68 76 C146 184 206 226 286 108 S434 80 494 204 610 128 682 224" />
            </svg>
            ${steps
              .map(
                ([num, title, note, name, tone, x, y]) => `<article class="journey-route-point ${tone}" style="--x:${x}%;--y:${y}%">
                  <span>${num}</span>
                  ${icon(name, tone)}
                  <strong>${title}</strong>
                  <small>${note}</small>
                </article>`,
              )
              .join("")}
          </div>
          <div class="journey-action-strip">
            <div><small>今日下一步</small><strong>錯題回顧 15 分鐘</strong></div>
            <div><small>本週完成</small><strong>18 / 22 任務</strong></div>
            <div><small>教練調整</small><strong>明天改練應用題</strong></div>
          </div>
        </div>
      </div>
    </div>
  </section>`;
}

function rhythmBlock() {
  const days = [
    ["一", "目標", "設定本週重點", "teal"],
    ["二", "短練", "完成 25 分鐘", "sky"],
    ["三", "複習", "錯題再練", "coral"],
    ["四", "挑戰", "進階任務", "teal"],
    ["五", "檢視", "教練回饋", "coral"],
    ["六", "補強", "弱點加強", "sky"],
    ["日", "調整", "下週計畫", "sand"],
  ];

  return `<section class="section system-showcase system-rhythm-showcase">
    <div class="system-showcase-shell reverse">
      <div class="system-showcase-copy">
        <span class="system-kicker">LEARNING CADENCE</span>
        <h2 class="section-title">科學的學習節奏，打造持久學習力</h2>
        <p>把大目標拆成每日可完成的小任務，用週節奏檢視成果，讓學習不靠臨時衝刺，而是穩定累積。</p>
        <div class="system-proof-pills"><span>15-30 分鐘</span><span>週週回顧</span><span>動態調整</span></div>
      </div>
      <div class="system-visual system-rhythm-visual" aria-label="科學學習節奏排程示意圖">
        <div class="rhythm-planner">
          <div class="rhythm-planner-head">
            <div><small>本週節奏</small><strong>穩定學習週</strong></div>
            <span>第 4 週</span>
          </div>
          <div class="rhythm-week-grid">
            ${days
              .map(
                ([day, title, note, tone]) => `<article class="rhythm-day ${tone}">
                  <span>${day}</span>
                  <strong>${title}</strong>
                  <small>${note}</small>
                </article>`,
              )
              .join("")}
          </div>
          <div class="rhythm-live-row">
            <div class="rhythm-ring"><strong>25</strong><span>分鐘</span></div>
            <div class="rhythm-task-stack">
              <article><b>今日任務</b><span>數學應用題 3 組</span><i style="width:76%"></i></article>
              <article><b>記憶回訪</b><span>英文時態錯題 6 題</span><i style="width:58%"></i></article>
            </div>
            <div class="rhythm-coach-card">
              ${icon("bell", "coral")}
              <strong>教練提醒</strong>
              <span>今天先複習昨天錯題，再進入新任務。</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>`;
}

function rhythmPanel(title, subtitle, items, caption, tone = "teal") {
  return `<article class="rhythm-panel ${tone}">
    <h3>${title}</h3>
    <p>${subtitle}</p>
    <div class="rhythm-steps">${items
      .map(([label, time, iconName], index) => `<div>${icon(iconName, tone === "coral" ? "coral" : index === 2 ? "sky" : "")}<strong>${label}</strong><span>${time}</span></div>`)
      .join("")}</div>
    <small>${caption}</small>
  </article>`;
}

function engineBlock() {
  return `<section class="section system-showcase system-engine-showcase">
    <div class="system-showcase-shell">
      <div class="system-showcase-copy">
        <span class="system-kicker">DUAL ENGINE</span>
        <h2 class="section-title">AI × 教練 雙引擎驅動學習成效</h2>
        <p>AI 負責快速分析與推薦，教練負責理解狀態、鼓勵與修正策略，讓學習不只準確，也有溫度。</p>
        <div class="system-proof-pills"><span>AI 診斷</span><span>教練陪跑</span><span>任務優化</span></div>
      </div>
      <div class="system-visual system-engine-visual" aria-label="AI 與教練雙引擎示意圖">
        <div class="engine-console">
          <article class="engine-panel ai">
            <span class="engine-label">AI 智能引擎</span>
            ${icon("brain")}
            <strong>弱點定位</strong>
            <div class="engine-radar">
              <svg viewBox="0 0 180 150" aria-hidden="true">
                <polygon points="90,12 164,58 136,136 44,136 16,58" />
                <polygon points="90,38 134,66 116,112 58,116 42,68" />
              </svg>
            </div>
            <small>分數應用題理解度偏低</small>
          </article>
          <div class="engine-core">
            <span>AI</span>
            <i></i>
            <span>教練</span>
            <strong>今日最適任務</strong>
            <p>先補概念，再做 3 組應用題</p>
          </div>
          <article class="engine-panel coach">
            <span class="engine-label">專業教練引擎</span>
            ${icon("users", "coral")}
            <strong>陪伴調整</strong>
            <div class="coach-message-stack">
              <p>這題卡住很正常，我們先拆題意。</p>
              <p>明天降低題量，提高完成感。</p>
            </div>
          </article>
          <div class="engine-result-strip">
            <div><small>任務完成率</small><strong>92%</strong></div>
            <div><small>弱點改善</small><strong>+18%</strong></div>
            <div><small>學習信心</small><strong>穩定提升</strong></div>
          </div>
        </div>
      </div>
    </div>
  </section>`;
}

function studentDashBlock() {
  return `<section class="section system-showcase system-data-showcase">
    <div class="system-showcase-shell reverse">
      <div class="system-showcase-copy">
        <span class="system-kicker">VISIBLE PROGRESS</span>
        <h2 class="section-title">學習數據透明化，進步看得見</h2>
        <p>家長不需要猜孩子有沒有進步，系統把學習時間、任務完成、弱點改善與教練回饋整理成清楚報告。</p>
        <div class="system-proof-pills"><span>每日紀錄</span><span>弱點趨勢</span><span>家長週報</span></div>
      </div>
      <div class="system-visual system-data-visual" aria-label="學習數據透明化儀表板示意圖">
        <div class="data-dashboard">
          <div class="data-toolbar">
            <div><span></span><span></span><span></span></div>
            <b>家長學習週報</b>
            <em>本週 +12%</em>
          </div>
          <div class="data-metric-grid">
            <article><small>學習時長</small><strong>175 分</strong><span>+18%</span></article>
            <article><small>任務完成</small><strong>88%</strong><span>+12%</span></article>
            <article><small>正確率</small><strong>86%</strong><span>+9%</span></article>
          </div>
          <div class="data-dashboard-main">
            <article class="data-chart-panel">
              <div><strong>進步曲線</strong><small>最近 7 天</small></div>
              <svg viewBox="0 0 420 190" aria-hidden="true">
                <path class="data-area" d="M32 146 C84 130 103 116 146 120 S215 134 247 96 320 108 386 42 L386 168 L32 168Z" />
                <path class="data-line" d="M32 146 C84 130 103 116 146 120 S215 134 247 96 320 108 386 42" />
              </svg>
            </article>
            <article class="data-subject-panel">
              <strong>各科掌握</strong>
              ${[
                ["數學", "86%", 86, "teal"],
                ["英文", "78%", 78, "sky"],
                ["閱讀", "72%", 72, "coral"],
              ]
                .map(([subject, value, width, tone]) => `<div class="data-subject ${tone}"><span>${subject}</span><i><b style="width:${width}%"></b></i><em>${value}</em></div>`)
                .join("")}
            </article>
            <article class="data-note-card">
              ${icon("heart", "coral")}
              <div><strong>教練回饋</strong><span>應用題已明顯進步，下週可增加閱讀理解任務。</span></div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>`;
}

function dashboardMock(label, greeting, metrics, tone = "teal") {
  return `<article class="mock-dashboard ${tone}">
    <div class="mock-side"><span></span><span></span><span></span><span></span></div>
    <div class="mock-main">
      <div class="mock-badge">${label}</div>
      <h3>${greeting}</h3>
      <div class="mock-metrics">${metrics.map((item) => `<div>${item}</div>`).join("")}</div>
      <div class="mock-lower">
        <div><h4>學習進度</h4>${[
          ["數學", "85%", "85%"],
          ["國文", "72%", "72%"],
          ["英文", "90%", "90%"],
          ["自然", "78%", "78%"],
        ]
          .map(([subject, value, width]) => `<div class="mini-row"><span>${subject}</span><div class="mini-progress"><span style="width:${width}"></span></div><b>${value}</b></div>`)
          .join("")}</div>
        <div class="line-chart small mock-chart"><svg viewBox="0 0 320 140"><path d="M20 105 C58 92 70 78 105 76 S162 88 190 70 242 80 292 35"/></svg>${tone === "coral" ? '<span class="mock-trend-badge">本週進步 +12%</span>' : '<span class="mock-trend-badge teal">週日 25 分鐘</span>'}</div>
      </div>
    </div>
  </article>`;
}

const coachImageBase = "./assets/content/coach";

function coachImage(name, alt = "") {
  return `<img src="${coachImageBase}/${name}" alt="${alt}" loading="lazy" decoding="async" />`;
}

function coachTone(tone) {
  return tone === "coral" ? "coral" : tone === "sky" ? "sky" : tone === "sand" ? "sand" : "";
}

function coachChecklist(items) {
  return `<ul class="coach-check-list">${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
}

function coachSectionHeading(kicker, title, copy) {
  return `<div class="coach-ref-heading">
    <span>${kicker}</span>
    <h2>${title}</h2>
    <p>${copy}</p>
  </div>`;
}

function coachRoles() {
  const roles = [
    { image: "role-reminder.png", icon: "bell", tone: "teal", title: "提醒", copy: "定期提醒學習任務", note: "養成穩定學習習慣" },
    { image: "role-encourage.png", icon: "heart", tone: "coral", title: "鼓勵", copy: "肯定孩子的努力", note: "增強自信與動力" },
    { image: "role-track.png", icon: "chart", tone: "sky", title: "追蹤", copy: "隨時掌握學習進度", note: "看見每一次進步" },
    { image: "role-adjust.png", icon: "sliders", tone: "sand", title: "調整", copy: "依學習狀況調整策略", note: "優化學習路徑" },
    { image: "role-feedback.png", icon: "chat", tone: "sand", title: "回饋", copy: "與孩子與家長溝通", note: "給予具體建議" },
  ];

  return `<section class="section coach-reference-section">
    <div class="coach-reference-shell">
      <figure class="coach-reference-hero" aria-label="教練陪伴孩子學習情境">
        ${coachImage("coach-hero-family.png", "教練陪伴孩子寫作業")}
      </figure>
      <div class="coach-reference-content">
        ${coachSectionHeading("從學習到成長，教練一路陪孩子穩定前行", "教練的 <span>5</span> 大陪跑角色", "把提醒、鼓勵、追蹤、調整與回饋放進同一個陪跑節奏，孩子不只有人督促，也有人懂他的狀態。")}
        <div class="coach-role-grid coach-ref-role-grid">
          ${roles
            .map(
              (item) => `<article class="coach-role-card coach-ref-role-card ${item.tone}">
                <div class="coach-role-photo">${coachImage(item.image, "")}</div>
                <div class="coach-role-symbol">${icon(item.icon, coachTone(item.tone))}</div>
                <h3>${item.title}</h3>
                <p>${item.copy}</p>
                <small>${item.note}</small>
              </article>`,
            )
            .join("")}
        </div>
      </div>
    </div>
  </section>`;
}

function coachPlusAi() {
  const panels = [
    {
      image: "ai-dashboard.png",
      icon: "brain",
      tone: "teal",
      title: "AI 負責效率",
      subtitle: "讓學習更聰明",
      list: ["智能系統分析學習數據", "精準推薦學習內容", "即時批改與解題建議", "24 小時隨時可用"],
    },
    {
      image: "coach-companion.png",
      icon: "users",
      tone: "coral",
      title: "教練負責陪伴",
      subtitle: "讓成長更完整",
      list: ["理解孩子的情緒與困難", "給予鼓勵與支持", "陪伴建立目標與習慣", "在關鍵時刻不離不棄"],
    },
  ];

  return `<section class="section coach-dual-section">
    <div class="coach-dual-grid">
      ${panels
        .map(
          (panel, index) => `<article class="coach-dual-card ${panel.tone}">
            <div class="coach-dual-photo">${coachImage(panel.image, index === 0 ? "平板上的學習數據系統畫面" : "教練與孩子面對面討論學習")}</div>
            <div class="coach-dual-copy">
              ${icon(panel.icon, coachTone(panel.tone))}
              <h2>${panel.title}</h2>
              <p>${panel.subtitle}</p>
              ${coachChecklist(panel.list)}
            </div>
          </article>`,
        )
        .join('<div class="coach-plus-badge" aria-hidden="true">+</div>')}
    </div>
  </section>`;
}

function weeklyFlow() {
  const steps = [
    ["01", "學習提醒", "教練主動提醒本週學習重點", "bell", "teal", "flow-reminder.png"],
    ["02", "進度追蹤", "檢視學習狀況，掌握進度與表現", "heart", "coral", "flow-progress.png"],
    ["03", "策略調整", "依狀況調整計畫，優化學習方法", "sliders", "sky", "flow-adjust.png"],
    ["04", "回饋溝通", "與孩子互動回饋，給予具體建議", "chat", "sand", "flow-feedback.png"],
    ["05", "成果累積", "記錄每次進步，累積學習成就感", "chart", "sand", "flow-result.png"],
  ];

  return `<section class="section weekly-flow-section coach-flow-section">
    <div class="coach-flow-shell">
      <div class="coach-flow-intro">
        ${icon("calendar")}
        <h2>每週陪跑流程</h2>
        <p>有節奏的陪伴，讓進步看得見。</p>
      </div>
      <div class="weekly-flow-track coach-flow-track">${steps
        .map(
          ([num, title, copy, iconName, tone, image], index) => `<article class="weekly-flow-card coach-flow-card ${tone}">
            <div class="coach-flow-photo">${coachImage(image, "")}</div>
            <span>${num}</span>
            ${icon(iconName, coachTone(tone))}
            <h3>${title}</h3>
            <p>${copy}</p>
          </article>${index < steps.length - 1 ? '<b class="weekly-flow-arrow coach-flow-arrow">→</b>' : ""}`,
        )
        .join("")}</div>
    </div>
  </section>`;
}

function reassureBlock() {
  const panels = [
    {
      tone: "teal",
      label: "家長週報",
      title: "為什麼家長很放心？",
      list: ["透明的學習報告，隨時掌握進度", "專業教練團隊，值得信賴", "孩子學習狀況，有人真正關心", "溝通順暢，家長不再焦慮"],
      visual: "parent",
    },
    {
      tone: "coral",
      label: "今日任務",
      title: "為什麼孩子更有動力？",
      list: ["有人陪伴，不再孤單放棄", "被理解、被鼓勵，建立自信", "小目標達成，累積成就感", "學習變得有趣，願意主動學"],
      visual: "child",
    },
  ];

  return `<section class="section coach-reassure-section">
    <div class="coach-reassure-grid">${panels
      .map(
        (panel) => `<article class="reassure-card coach-reassure-card ${panel.tone}">
          ${reassureVisual(panel.visual, panel.tone)}
          <div class="coach-reassure-copy">
            <span>${panel.label}</span>
            <h3>${panel.title}</h3>
            ${coachChecklist(panel.list)}
          </div>
        </article>`,
      )
      .join("")}</div>
  </section>`;
}

function reassureVisual(type, tone) {
  if (type === "child") {
    return `<figure class="reassure-visual coach-reassure-visual child" aria-label="孩子每日任務示意圖">
      <div class="coach-task-face"><span></span><i></i></div>
      <article class="coach-task-card"><b>今日任務</b><strong>3 / 4</strong><small>完成後獲得鼓勵回饋</small><i><em style="width:75%"></em></i></article>
      <div class="coach-reward-row"><span></span><span></span><span></span></div>
    </figure>`;
  }
  return `<figure class="reassure-visual coach-reassure-visual ${tone}" aria-label="家長週報系統示意圖">
    <div class="coach-report-tab"><span></span><b>家長週報</b></div>
    <article><small>任務完成</small><strong>88%</strong><i><em style="width:88%"></em></i></article>
    <article><small>教練回饋</small><strong>下週補強閱讀推論</strong></article>
    <article><small>數據回饋</small><strong>本週提升 12%</strong><i><em style="width:62%"></em></i></article>
  </figure>`;
}

function consultFlow() {
  const steps = [
    ["01", "15 分鐘 AI 體檢", "先看懂孩子目前卡住的地方", "calendar"],
    ["02", "整理學習狀態", "看見知識缺口、錯因與學習習慣", "brain"],
    ["03", "提出陪伴建議", "判斷需要節奏陪伴或弱點突破", "users"],
    ["04", "建立 7 天路線", "把下一步拆成孩子做得到的小任務", "heart"],
    ["05", "教練開始陪跑", "持續提醒、回饋與調整學習計畫", "users"],
  ];
  return `<section class="section"><h2 class="section-title"><span class="teal">5</span> 步驟，開啟孩子的學習新旅程</h2><div class="consult-steps">${steps
    .map(
      ([num, title, copy, iconName], index) => `<article class="consult-step ${index === 2 ? "coral" : index === 3 ? "sky" : index === 4 ? "sand" : ""}">${icon(iconName, index === 2 ? "coral" : index === 3 ? "sky" : index === 4 ? "sand" : "")}<b>${num}</b><h3>${title}</h3><p>${copy}</p></article>${index < steps.length - 1 ? '<span class="consult-arrow">→</span>' : ""}`,
    )
    .join("")}</div></section>`;
}

function pricingPlans() {
  return `<section class="section"><h2 class="section-title">先體檢，再建議適合孩子的陪伴方式</h2><div class="plans">
    ${pricingPlanCard("適合先建立節奏", "穩定陪伴路線", "體檢後建議", ["幫孩子先養成每日開始的節奏", "AI 學習體檢報告", "個人化學習計畫", "每週學習追蹤與回饋", "教練提醒與任務調整"], "teal")}
    ${pricingPlanCard("適合突破卡點", "弱點突破路線", "體檢後建議", ["針對關鍵弱點安排更密集的拆解與回饋", "AI 學習體檢報告", "個人化學習計畫", "每日任務追蹤與回饋", "教練針對卡點做策略調整", "階段性成效分析"], "coral")}
  </div></section>`;
}

function pricingPlanCard(label, heading, status, list, tone = "teal") {
  const [summary, ...features] = list;
  return `<article class="plan-card pricing-plan ${tone === "coral" ? "coral" : ""}">
    <div class="pricing-orb">${icon(tone === "coral" ? "brain" : "heart", tone === "coral" ? "coral" : "")}</div>
    <div class="plan-copy">
      <div class="pricing-ribbon">${label}</div>
      <h3>${heading}</h3>
      <div class="price">${status}</div>
      <p class="plan-summary">${summary}</p>
      <ul class="check-list">${features.map((x) => `<li>${x}</li>`).join("")}</ul>
      <div class="plan-actions">
        <a class="btn ${tone === "coral" ? "coral" : ""}" href="#/diagnosis">開始 15 分鐘 AI 體檢</a>
        <a class="btn secondary" href="#/programs">了解陪伴方式</a>
      </div>
    </div>
  </article>`;
}

function pricingAssistBlock() {
  return `<section class="section flush-top">
    <div class="consult-strip">
      <div>
        <h2>不確定孩子需要哪種陪伴？</h2>
        <p>先完成 15 分鐘 AI 學習體檢，讓建議從孩子的真實狀態開始。</p>
      </div>
      <a class="btn" href="#/diagnosis">開始 15 分鐘 AI 體檢</a>
    </div>
  </section>`;
}

function whyChoose() {
  return `<section class="section"><h2 class="section-title">為什麼家長選擇 伴伴辦學？</h2><div class="choice-row">${[
    { icon: "heart", title: "AI × 專業陪伴", copy: "AI 專屬診斷搭配專業教練，雙效提升學習成效" },
    { icon: "brain", title: "客製化學習計畫", copy: "依孩子個性與學習狀況，打造專屬學習路徑" },
    { icon: "users", title: "全程陪伴不孤單", copy: "專屬教練全程陪伴，孩子學習不再孤單" },
    { icon: "chart", title: "成效看得見", copy: "定期成效分析與回饋，進步看得見，家長更放心" },
  ]
    .map((item, index) => `<article class="choice-feature">${icon(item.icon, index === 1 ? "sky" : index === 2 ? "coral" : index === 3 ? "sand" : "")}<h3>${item.title}</h3><p>${item.copy}</p></article>`)
    .join("")}</div><div class="stats compact">${[
    ["10,000+", "家庭的信任選擇", "users"],
    ["95%", "家長滿意度", "heart"],
    ["85%", "學生學習成效提升", "chart"],
    ["4.9/5", "家庭評價", "star"],
  ].map(([num, label, iconName], index) => `<div class="stat">${icon(iconName, index === 1 ? "coral" : index === 2 ? "sky" : "")}<div><strong>${num}</strong><span>${label}</span></div></div>`).join("")}</div></section>`;
}

function faqBlock() {
  return `<section class="section faq-section"><h2 class="section-title">常見問題</h2><div class="split"><div class="faq">${[
    ["伴伴辦學適合什麼樣的孩子？", "適合需要建立學習習慣、想補強弱點或希望有人陪伴前進的孩子。"],
    ["如何進行 AI 學習診斷？", "完成線上測驗後，系統會分析弱點並產出個人化建議。"],
    ["方案可以隨時調整或取消嗎？", "可以，顧問會依孩子狀況協助調整最適合的方案。"],
    ["教練是如何陪伴孩子的？", "教練會追蹤進度、提醒任務、回饋狀況並與家長保持溝通。"],
    ["付款方式有哪些？", "可使用信用卡、轉帳與其他客服提供的付款方式。"],
  ]
    .map(([q, a]) => `<details name="pricing-faq"><summary>${q}</summary><p>${a}</p></details>`)
    .join("")}</div><div class="soft-panel" style="text-align:center">${icon("heart")}<h3>還有其他問題？</h3><p>我們的顧問團隊為您解答</p><a class="btn" href="#/parent">立即聯繫顧問</a></div></div></section>`;
}

function parentTone(tone) {
  return tone === "coral" ? "coral" : tone === "sky" ? "sky" : tone === "sand" ? "sand" : "";
}

function parentBlockHeading(kicker, title, copy) {
  return `<div class="parent-block-heading">
    <span>${kicker}</span>
    <h2>${title}</h2>
    <p>${copy}</p>
  </div>`;
}

function parentMiniChart(tone = "teal") {
  const points = [
    [24, 110],
    [78, 92],
    [130, 98],
    [184, 68],
    [238, 74],
    [292, 42],
  ];
  return `<svg class="parent-mini-chart ${tone}" viewBox="0 0 320 140" aria-hidden="true">
    <path class="area" d="M24 110 C62 98 78 92 116 94 S164 86 184 68 236 74 292 42 V126 H24 Z" />
    <path class="line" d="M24 110 C62 98 78 92 116 94 S164 86 184 68 236 74 292 42" />
    ${points.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="5" />`).join("")}
  </svg>`;
}

function parentGeneratedPhoto(name, alt) {
  return `<img src="./assets/generated/parent/${name}.png" alt="${alt}" decoding="async" loading="eager" />`;
}

function concernsBlock() {
  const concerns = [
    {
      icon: "doc",
      tone: "teal",
      title: "看不見學習狀態",
      question: "不知道孩子這週到底學會了什麼？",
      answer: "系統把任務完成、掌握度、弱點變化與教練建議整理成一份家長能快速理解的週報。",
      metric: "1 分鐘讀完",
      tags: ["任務完成", "掌握度", "下週建議"],
      photo: "parent-weekly-review",
      insight: ["本週學習 8.5 小時", "完成率 88%", "加強分數應用題"],
    },
    {
      icon: "chart",
      tone: "coral",
      title: "進步沒有證據",
      question: "孩子很努力，但成效到底在哪裡？",
      answer: "每一次練習都回到數據趨勢，讓家長看到弱點改善幅度，也知道下一步為什麼這樣安排。",
      metric: "弱點改善 +24%",
      tags: ["趨勢追蹤", "錯題回補", "目標調整"],
      photo: "parent-weekly-review",
      insight: ["數學應用 +18%", "英文時態 +12%", "連續 3 週進步"],
    },
    {
      icon: "chat",
      tone: "sky",
      title: "卡關時沒人接",
      question: "孩子遇到問題時，家長不知道怎麼幫？",
      answer: "教練會根據孩子的練習紀錄與情緒狀態，給出拆題提醒、鼓勵回覆與可執行的小任務。",
      metric: "教練已回覆",
      tags: ["拆題建議", "情緒支持", "即時提醒"],
      photo: "parent-coach-update",
      insight: ["卡關題型 2 類", "教練回覆 3 則", "今晚任務已縮短"],
    },
    {
      icon: "calendar",
      tone: "sand",
      title: "學習容易斷線",
      question: "上完課就中斷，日常沒有延續？",
      answer: "每週節奏被拆成預告、陪跑、回顧與調整，讓孩子知道今天要做什麼，家長知道正在往哪裡走。",
      metric: "每週 4 節點",
      tags: ["週一預告", "週中陪跑", "週末回顧"],
      photo: "parent-coach-update",
      insight: ["本週 5 個任務", "完成提醒 2 次", "下週調整 1 項"],
    },
  ];

  return `<section class="section parent-concern-section parent-2026-section">
    <div class="parent-2026-shell parent-assurance-shell parent-story-shell" data-parent-concern-switcher data-active-concern="0">
      ${parentBlockHeading("家長安心雷達", "我們理解，這些是您常有的<span>擔心</span>", "把模糊的不安轉成看得懂的狀態、有人負責的回覆，以及每週可以追蹤的下一步。")}
      <div class="parent-assurance-grid">
        <div class="parent-assurance-stage">
          ${concerns
            .map(
              (item, index) => `<article class="parent-assurance-panel ${item.tone} ${index === 0 ? "is-active" : ""}" role="tabpanel" id="parent-concern-panel-${index}" aria-labelledby="parent-concern-tab-${index}" data-parent-concern-panel="${index}" ${index === 0 ? "" : "hidden"}>
                <figure class="parent-assurance-photo" aria-label="${item.title}安心情境照片">
                  ${parentGeneratedPhoto(item.photo, `${item.title}的家長安心情境`)}
                  <figcaption>
                    <small>家長同步</small>
                    <strong>${item.metric}</strong>
                  </figcaption>
                </figure>
                <div class="parent-assurance-console">
                  <div class="parent-browser-bar"><i></i><i></i><i></i><span>家長安心中控台</span><em>Live</em></div>
                  <div class="parent-assurance-copy">
                    ${icon(item.icon, parentTone(item.tone))}
                    <span>${item.title}</span>
                    <h3>${item.question}</h3>
                    <p>${item.answer}</p>
                  </div>
                  <div class="parent-assurance-list">
                    ${item.insight.map((text) => `<div><b></b><span>${text}</span></div>`).join("")}
                  </div>
                  <div class="parent-assurance-tags">${item.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
                </div>
              </article>`,
            )
            .join("")}
        </div>
        <div class="parent-assurance-tabs" role="tablist" aria-label="家長常見擔心清單">
          ${concerns
            .map(
              (item, index) => `<button class="parent-assurance-tab ${item.tone} ${index === 0 ? "is-active" : ""}" type="button" role="tab" aria-selected="${index === 0 ? "true" : "false"}" aria-controls="parent-concern-panel-${index}" id="parent-concern-tab-${index}" data-parent-concern-tab="${index}">
                <em>${String(index + 1).padStart(2, "0")}</em>
                <div>
                  <b>${item.title}</b>
                  <span>${item.question}</span>
                </div>
                <strong>${item.metric}</strong>
              </button>`,
            )
            .join("")}
          <div class="parent-assurance-note">
            ${icon("shield")}
            <p>家長不用先變成老師，也能看懂孩子的狀態，並知道下一步由誰接手。</p>
          </div>
        </div>
      </div>
    </div>
  </section>`;
}

function parentCareBlock() {
  const items = [
    { icon: "brain", tone: "teal", title: "AI 找線索", badge: "先看懂卡點", copy: "從答題紀錄、錯題類型與練習節奏判斷真正需要補強的地方。", metric: "92%", note: "弱點辨識率", queue: ["分數應用", "閱讀理解", "計算穩定度"] },
    { icon: "users", tone: "coral", title: "教練接狀態", badge: "有人陪孩子走", copy: "教練把數據翻成孩子聽得懂的提醒，也把情緒和動機納入陪伴。", metric: "6 次", note: "本週互動", queue: ["任務提醒", "鼓勵回覆", "卡關拆題"] },
    { icon: "doc", tone: "sky", title: "週報給家長", badge: "一眼看懂進步", copy: "把完成度、掌握度與下週建議整合在同一份週報，家長不需要自己拼湊。", metric: "88%", note: "任務完成", queue: ["本週摘要", "弱點改善", "下週策略"] },
    { icon: "chat", tone: "sand", title: "回饋再調整", badge: "下一週更貼近", copy: "家長回覆、孩子狀態與系統數據會一起回到下一週任務安排。", metric: "2 項", note: "策略調整", queue: ["節奏放慢", "題型替換", "目標校準"] },
  ];

  return `<section class="section parent-care-section parent-2026-section">
    <div class="parent-2026-shell parent-command-shell parent-story-shell" data-parent-switcher data-active-parent="0">
      ${parentBlockHeading("安心雙引擎", "伴伴辦學如何讓您<span>安心</span>", "AI 負責看見訊號，教練負責陪孩子行動；系統把每一步整理成家長可以理解的同步。")}
      <div class="parent-command-tabs" role="tablist" aria-label="安心系統項目">
        ${items
          .map(
            (item, index) => `<button class="parent-command-tab ${item.tone} ${index === 0 ? "is-active" : ""}" type="button" role="tab" aria-selected="${index === 0 ? "true" : "false"}" aria-controls="parent-care-panel-${index}" id="parent-care-tab-${index}" data-parent-tab="${index}">
              ${icon(item.icon, parentTone(item.tone))}
              <span>${item.badge}</span>
              <b>${item.title}</b>
            </button>`,
          )
          .join("")}
      </div>
      <div class="parent-command-panels">
          ${items
            .map(
              (item, index) => `<article class="parent-command-panel ${item.tone} ${index === 0 ? "is-active" : ""}" role="tabpanel" id="parent-care-panel-${index}" aria-labelledby="parent-care-tab-${index}" data-parent-panel="${index}" ${index === 0 ? "" : "hidden"}>
                <div class="parent-command-board">
                  <div class="parent-browser-bar"><i></i><i></i><i></i><span>${item.title}工作台</span><em>${item.badge}</em></div>
                  <div class="parent-command-dashboard">
                    <div class="parent-command-score">
                      ${icon(item.icon, parentTone(item.tone))}
                      <strong>${item.metric}</strong>
                      <span>${item.note}</span>
                    </div>
                    <div class="parent-command-chart">
                      <b>學習趨勢</b>
                      ${parentMiniChart(item.tone)}
                    </div>
                    <div class="parent-command-queue">
                      <b>本週處理</b>
                      ${item.queue.map((task) => `<span>${task}</span>`).join("")}
                    </div>
                    <div class="parent-command-phone">
                      <small>家長端</small>
                      <strong>${item.title}</strong>
                      <p>${item.copy}</p>
                    </div>
                  </div>
                </div>
                <aside class="parent-command-copy">
                  <span>${item.badge}</span>
                  <h3>${item.title}</h3>
                  <p>${item.copy}</p>
                  <div>
                    <b>孩子端</b>
                    <i></i>
                    <b>教練端</b>
                    <i></i>
                    <b>家長端</b>
                  </div>
                </aside>
              </article>`,
            )
            .join("")}
      </div>
    </div>
  </section>`;
}

function reasonsBlock() {
  const reasons = [
    {
      icon: "heart",
      tone: "teal",
      title: "孩子不被丟進制式進度",
      copy: "任務依孩子狀態拆小，先能開始，再慢慢拉高挑戰。",
      metric: "每日 15-30 分鐘",
      detail: "把大目標拆成今天能完成的一小步，孩子比較容易開始，也更容易累積自信。",
      chips: ["小任務", "低壓開始", "建立節奏"],
    },
    {
      icon: "doc",
      tone: "sky",
      title: "家長不用自己解讀數據",
      copy: "週報只保留該看的重點，讓家長知道進步、弱點與下一步。",
      metric: "一頁週報",
      detail: "系統會把時間、掌握度、弱點與教練建議收斂在同一份週報，不讓家長自己拼湊。",
      chips: ["完成率", "弱點變化", "下週建議"],
    },
    {
      icon: "shield",
      tone: "coral",
      title: "有人負責孩子的卡關",
      copy: "教練會看紀錄、回覆問題、調整任務，不讓問題一直累積。",
      metric: "教練陪跑",
      detail: "孩子卡住時，教練會依紀錄判斷原因，給提醒、拆題或縮短任務，讓問題被接住。",
      chips: ["拆題", "鼓勵", "任務調整"],
    },
    {
      icon: "chart",
      tone: "sand",
      title: "每週都能重新校準",
      copy: "孩子狀態、家長回饋與系統數據會回到下一週安排。",
      metric: "週週調整",
      detail: "每週不是只回顧成果，也會把新的狀態轉成下一週的任務策略，陪伴會跟著孩子變化。",
      chips: ["回顧", "校準", "下一步"],
    },
  ];

  return `<section class="section parent-reasons-section parent-2026-section">
    <div class="parent-2026-shell parent-trust-shell" data-parent-trust-switcher data-active-trust="0">
      ${parentBlockHeading("信任證據", "選擇伴伴辦學，家長最安心的理由", "我們把陪伴拆成具體服務：孩子有人帶、狀態有人看、週報有人整理、下一步有人調整。")}
      <div class="parent-trust-grid">
        <article class="parent-trust-hero">
          <figure>
            ${parentGeneratedPhoto("parent-weekly-review", "家長和孩子一起查看學習週報")}
            <figcaption>透明週報讓親子對話更具體</figcaption>
          </figure>
          <div>
            <span>安心不是口號</span>
            <h3>每一週，家長都能看見孩子正在被好好照顧。</h3>
            <p>不是等到考試才知道結果，而是在每一週就知道孩子做了什麼、卡在哪裡、下一步怎麼陪。</p>
          </div>
        </article>
        ${reasons
          .map(
            (item, index) => `<button class="parent-trust-card ${item.tone} ${index === 0 ? "is-active" : ""}" type="button" role="tab" aria-selected="${index === 0 ? "true" : "false"}" aria-controls="parent-trust-panel-${index}" id="parent-trust-tab-${index}" data-parent-trust-tab="${index}">
              ${icon(item.icon, parentTone(item.tone))}
              <strong>${item.metric}</strong>
              <h3>${item.title}</h3>
              <p>${item.copy}</p>
              <div class="parent-trust-meter"><i style="--fill:${index === 0 ? "72%" : index === 1 ? "86%" : index === 2 ? "78%" : "92%"}"></i></div>
            </button>`,
          )
          .join("")}
        <article class="parent-trust-system">
          <div class="parent-browser-bar"><i></i><i></i><i></i><span>家長安心路徑</span><em>同步中</em></div>
          <div class="parent-trust-detail">
            ${reasons
              .map(
                (item, index) => `<div class="parent-trust-panel ${item.tone} ${index === 0 ? "is-active" : ""}" role="tabpanel" id="parent-trust-panel-${index}" aria-labelledby="parent-trust-tab-${index}" data-parent-trust-panel="${index}" ${index === 0 ? "" : "hidden"}>
                  <div class="parent-trust-flow">
                    <span>診斷</span><i></i><span>任務</span><i></i><span>陪跑</span><i></i><span>週報</span>
                  </div>
                  <h3>${item.title}</h3>
                  <p>${item.detail}</p>
                  <div>${item.chips.map((chip) => `<span>${chip}</span>`).join("")}</div>
                </div>`,
              )
              .join("")}
          </div>
        </article>
      </div>
    </div>
  </section>`;
}

function parentReasonCard(item, index) {
  const content = {
    child: `<div class="parent-route-map"><span>今天任務</span><i></i><span>完成回饋</span><i></i><span>下週調整</span></div>`,
    report: `<div class="parent-report-mini"><b>家長週報</b><strong>82%</strong>${parentMiniChart("sky")}</div>`,
    team: `<div class="parent-team-mini"><span>教練</span><span>顧問</span><span>AI</span><b>共同追蹤</b></div>`,
    trend: `<div class="parent-trend-mini">${parentMiniChart("sand")}<span>弱點改善 +24%</span></div>`,
  }[item.visual];
  return `<article class="parent-reason-card ${item.tone} ${index === 1 ? "wide" : index === 3 ? "tall" : ""}">
    <div class="parent-reason-icon">${icon(item.icon, parentTone(item.tone))}</div>
    <div>
      <h3>${item.title}</h3>
      <p>${item.copy}</p>
    </div>
    ${content}
  </article>`;
}

function testimonialsBlock() {
  const quotes = [
    { quote: "以前我只會問功課寫完沒，現在週報會告訴我孩子真正進步在哪裡。", name: "陳媽媽", grade: "小三家長", initial: "陳", tag: "週報清楚", metric: "2 分鐘看懂", tone: "teal" },
    { quote: "孩子卡住時有人回覆，我不用急著扮演老師，親子關係輕鬆很多。", name: "黃爸爸", grade: "小五家長", initial: "黃", tag: "有人接住", metric: "回覆 3 則", tone: "coral" },
    { quote: "教練會提醒得很細，孩子慢慢願意自己開始，這比只補課重要。", name: "林媽媽", grade: "小四家長", initial: "林", tag: "主動開始", metric: "連續 4 天", tone: "sky" },
  ];

  return `<section class="section parent-testimonials-section parent-2026-section">
    <div class="parent-2026-shell parent-voices-shell parent-story-shell" data-parent-feedback-switcher data-active-feedback="0">
      ${parentBlockHeading("家長回饋", "家長<span>真實回饋</span>", "真實回饋不只放在頁面上展示，也會成為教練調整孩子陪伴方式的依據。")}
      <div class="parent-voices-grid">
        <div class="parent-voices-main">
          ${quotes
            .map(
              (item, index) => `<article class="parent-voice-panel ${item.tone} ${index === 0 ? "is-active" : ""}" role="tabpanel" id="parent-feedback-panel-${index}" aria-labelledby="parent-feedback-tab-${index}" data-parent-feedback-panel="${index}" ${index === 0 ? "" : "hidden"}>
                <div class="parent-voice-score">
                  <strong>${item.metric}</strong>
                  <span>${item.tag}</span>
                </div>
                <p>「${item.quote}」</p>
                <div class="parent-voice-author"><b>${item.initial}</b><span>${item.name} / ${item.grade}</span></div>
                <div class="parent-voice-actions"><span>回到學習策略</span><i></i><span>下週任務調整</span></div>
              </article>`,
            )
            .join("")}
        </div>
        <figure class="parent-voices-photo" aria-label="家長收到教練同步訊息的情境">
          ${parentGeneratedPhoto("parent-coach-update", "家長收到教練同步訊息，孩子在旁穩定學習")}
          <figcaption><strong>4.9/5</strong><span>家長滿意度</span></figcaption>
        </figure>
        <div class="parent-voices-controls" role="tablist" aria-label="家長回饋案例切換">
          ${quotes
            .map(
              (item, index) => `<button class="parent-voice-card ${item.tone} ${index === 0 ? "is-active" : ""}" type="button" role="tab" aria-selected="${index === 0 ? "true" : "false"}" aria-controls="parent-feedback-panel-${index}" id="parent-feedback-tab-${index}" data-parent-feedback-tab="${index}">
                <b>${item.initial}</b>
                <div>
                  <span>${item.name} / ${item.grade}</span>
                  <p>${item.quote}</p>
                  <em>${item.tag}</em>
                </div>
              </button>`,
            )
            .join("")}
        </div>
        <figure class="parent-voices-system" aria-label="家長回饋分析示意圖">
          <div class="parent-browser-bar"><i></i><i></i><i></i><span>回饋分析</span><em>本月</em></div>
          <div class="parent-voices-metrics">
            <article><strong>91%</strong><span>看得懂週報</span></article>
            <article><strong>88%</strong><span>放心交給教練</span></article>
            <article><strong>84%</strong><span>親子溝通變順</span></article>
          </div>
          <div class="parent-voices-tags"><span>透明</span><span>有人回覆</span><span>孩子更穩定</span></div>
        </figure>
      </div>
    </div>
  </section>`;
}

function connectionBlock() {
  const items = [
    { icon: "calendar", title: "週一", label: "本週預告", copy: "同步本週目標、任務量與需要家長知道的提醒。", tone: "teal", metric: "5 個任務", status: "已排定", parent: "本週主軸是分數應用題，每天 20 分鐘即可完成。", action: "確認本週節奏", checks: ["任務已排程", "提醒已開啟", "週目標已同步"] },
    { icon: "chat", title: "週中", label: "陪跑提醒", copy: "孩子卡住時，教練協助拆題與鼓勵，避免問題累積。", tone: "coral", metric: "3 則回覆", status: "處理中", parent: "孩子卡在題意轉換，今晚任務已改成 2 題拆解練習。", action: "查看教練回覆", checks: ["卡點已標記", "題量已調整", "鼓勵訊息已送出"] },
    { icon: "doc", title: "週末", label: "週報同步", copy: "整理完成度、弱點改善與下週建議，家長一眼看懂。", tone: "sky", metric: "88% 完成", status: "已送出", parent: "本週完成率 88%，分數應用題比上週進步 24%。", action: "閱讀週報重點", checks: ["完成率更新", "弱點改善", "下週建議"] },
    { icon: "users", title: "下週", label: "策略調整", copy: "依孩子狀態與家長回饋，調整下一週任務與陪伴方式。", tone: "sand", metric: "2 項調整", status: "待確認", parent: "下週會保留應用題練習，並增加閱讀題意判斷。", action: "確認下週安排", checks: ["任務縮短", "題型替換", "目標校準"] },
  ];

  return `<section class="section parent-connection-section parent-2026-section">
    <div class="parent-2026-shell parent-week-shell parent-story-shell" data-parent-week-switcher data-active-week="0">
      ${parentBlockHeading("每週連結", "我們每週都與您保持<span>緊密連結</span>", "從預告、陪跑、報告到家長回覆，每一週都有清楚節點，讓陪伴不中斷。")}
      <div class="parent-week-grid">
        <div class="parent-week-tabs" role="tablist" aria-label="每週連結流程">
          ${items
            .map(
              (item, index) => `<button class="parent-week-tab ${item.tone} ${index === 0 ? "is-active" : ""}" type="button" role="tab" aria-selected="${index === 0 ? "true" : "false"}" aria-controls="parent-week-panel-${index}" id="parent-week-tab-${index}" data-parent-week-tab="${index}">
                <em>${item.title}</em>
                ${icon(item.icon, parentTone(item.tone))}
                <div><h3>${item.label}</h3><p>${item.copy}</p></div>
                <em>${item.metric}</em>
              </button>`,
            )
            .join("")}
        </div>
        <figure class="parent-week-device" aria-label="每週家長連結系統示意圖">
          <div class="parent-browser-bar"><i></i><i></i><i></i><span>家長同步中心</span><em>週報已送出</em></div>
          <div class="parent-week-screen">
            <div class="parent-week-summary">
              <strong>本週摘要</strong>
              <div><span>任務完成</span><b>88%</b></div>
              <div><span>弱點改善</span><b>24%</b></div>
              <div><span>教練回饋</span><b>3 則</b></div>
              <div class="parent-week-progress"><i style="--fill:88%"></i></div>
            </div>
            <div class="parent-week-panels">
              ${items
                .map(
                  (item, index) => `<article class="parent-week-panel ${item.tone} ${index === 0 ? "is-active" : ""}" role="tabpanel" id="parent-week-panel-${index}" aria-labelledby="parent-week-tab-${index}" data-parent-week-panel="${index}" ${index === 0 ? "" : "hidden"}>
                    <div class="parent-week-message">
                      <small>${item.title} / ${item.status}</small>
                      <b>${item.label}</b>
                      <p>${item.copy}</p>
                    </div>
                    <div class="parent-week-next"><span>目前狀態</span><strong>${item.metric}</strong><em>${item.action}</em></div>
                    <div class="parent-week-checks">${item.checks.map((check) => `<span>${check}</span>`).join("")}</div>
                  </article>`,
                )
                .join("")}
            </div>
            <div class="parent-week-feed">
              <strong>家長訊息流</strong>
              ${items
                .map(
                  (item, index) => `<button class="parent-week-feed-item ${item.tone} ${index === 0 ? "is-active" : ""}" type="button" data-parent-week-tab="${index}" aria-label="切換到${item.title}${item.label}">
                    <b>${item.title}</b>
                    <span>${item.parent}</span>
                  </button>`,
                )
                .join("")}
            </div>
            <div class="parent-week-phone">
              <small>手機通知</small>
              <strong>本週週報已更新</strong>
              <p>點開即可看見孩子進度、教練建議與下週任務。</p>
              <div><span>已讀</span><span>可回覆</span></div>
            </div>
          </div>
        </figure>
      </div>
    </div>
  </section>`;
}

function parentImageToCodeReplacement() {
  const steps = [
    ["01", "先看懂狀況", "AI 學習體檢先整理孩子目前卡住的地方，避免一開始就補錯方向。", "15 分鐘", "2", "教練陪孩子查看平板上的學習狀況", ""],
    ["02", "每天知道下一步", "每日任務拆得很小，孩子不用自己面對一整片壓力。", "每日 30 分鐘", "4", "孩子依照每日任務在桌前練習", "coral"],
    ["03", "家長同步看見", "週報把進度、弱點與教練建議整理好，陪伴不再靠猜。", "每週回饋", "3", "家長用手機查看孩子的學習回饋", "sky"],
  ];
  const systemBadges = [
    ["brain", "AI 任務引擎", "先找下一步"],
    ["calendar", "每日學習節奏", "穩定前進"],
    ["doc", "家長週報", "看見變化"],
  ];
  const tracker = [
    ["01", "孩子今天做什麼", "每日任務與完成狀態清楚呈現，家長不用追問。"],
    ["02", "教練調整了什麼", "每週依照表現調整任務，避免太難或太鬆。"],
    ["03", "下週該注意什麼", "把弱點、鼓勵與下一步整理成家長看得懂的建議。"],
  ];
  const concerns = [
    ["不知道孩子真實狀況", "不知道卡住的是觀念、習慣還是信心", "hero-student-tablet", "孩子使用平板查看學習狀況", "teal", "frown"],
    ["學習進度跟不上", "每天做很多，卻不知道有沒有往前", "laptop-taskboard", "學習任務看板與進度示意", "coral", "target"],
    ["家長沒時間盯細節", "想陪孩子，但不想變成每天催促", "parent-phone", "手機版家長週報與提醒", "sky", "clock"],
    ["成效看不清楚", "只看分數，很難知道下一步怎麼幫", "laptop-analytics", "學習數據與趨勢分析", "sand", "chart"],
  ];
  const advantages = [
    ["AI 任務引擎", "把診斷結果轉成今天可完成的小任務，孩子知道下一步。", "tablet-dashboard", "平板中的學習 dashboard", "brain", "teal"],
    ["教練節奏管理", "真人教練每週檢視進度，該鼓勵、該調整都有人接住。", "hero-student-tablet", "孩子依照教練節奏使用平板學習", "heart", "coral"],
    ["家長週報後台", "用簡潔報告呈現學習時間、完成率、弱點與教練建議。", "photo-3", "家長用手機查看孩子的學習回饋", "doc", "sky"],
    ["進步看得見", "用趨勢與任務完成狀態，讓努力不只停在感覺裡。", "photo-5", "明亮書桌上的學習系統與任務畫面", "chart", "sand"],
  ];
  const reasons = ["孩子每天有明確任務，不再靠臨時催促", "教練每週檢視與調整，陪伴不只是一句加油", "家長用報告看懂進度、弱點與下一步", "AI 與真人教練一起把學習節奏穩住"];
  const weeklyCards = [
    ["家長週報", "每週一次，把孩子的努力整理成看得懂的摘要", ["任務完成率與學習時間", "弱點變化與強項提醒", "教練建議與下週重點"], "teal", "tablet-dashboard", "家長週報系統示意圖"],
    ["教練同步", "不是等成績出來才處理，而是在每週節奏中微調", ["檢視學習狀況", "調整任務量與難度", "給孩子鼓勵與具體回饋"], "coral", "photo-5", "教練任務看板示意圖"],
  ];
  const stats = [
    ["1,200+", "家長安心選擇", "users"],
    ["92%", "任務完成率提升", "chart"],
    ["98%", "家長滿意推薦", "heart"],
    ["每週", "固定同步回饋", "chat"],
  ];

  return `<section class="section flush-top page-home parent-home-skin home-redesign-entry" aria-label="家長中心三步總覽">
    <div class="home-reference-shell">
      <div class="home-quick-guide">
        <article class="home-guide-intro">
          <span class="home-pill"><i></i>家長中心</span>
          <h2>三步看懂陪伴如何發生</h2>
          <p>伴伴辦學把診斷、每日任務、教練調整與家長回饋串成一套看得懂的節奏，讓您不用每天追問，也能知道孩子正在往哪裡前進。</p>
        </article>
        ${steps
          .map(
            ([no, titleText, copy, tag, image, alt, tone]) => `<article class="home-step-card ${tone}">
              <div>
                <span>${no}</span>
                <h3>${titleText}</h3>
                <p>${copy}</p>
                <em>${tag}</em>
              </div>
              <figure>${homePhoto(image, alt)}</figure>
            </article>`,
          )
          .join("")}
      </div>

      <div class="home-system-panel parent-home-system-panel">
        <div class="home-system-copy">
          <span class="home-pill"><i></i>安心陪跑系統</span>
          <h2>孩子、教練、家長都看同一張學習地圖</h2>
          <p>每日任務讓孩子知道今天做什麼；教練依照數據調整節奏；家長用週報看見進步與下一步。</p>
          <div class="home-system-badges">
            ${systemBadges
              .map(
                ([iconName, label, meta], index) => `<span>${icon(iconName, index === 1 ? "coral" : index === 2 ? "sky" : "")}<b>${label}</b><small>${meta}</small></span>`,
              )
              .join("")}
          </div>
        </div>
        <figure class="home-system-photo">${systemPhoto("hero-student-tablet", "孩子使用平板查看學習任務")}</figure>
        <figure class="home-system-tablet">${systemPhoto("tablet-dashboard", "家長與孩子共用的學習 dashboard")}</figure>
        <figure class="home-system-phone">${homePhotoEager("7", "手機版家長週報與學習提醒")}</figure>
      </div>

      <div class="home-parent-tracker">
        <h3>家長可以這樣跟進</h3>
        <p>不用自己整理一堆訊息，只看三件事：孩子做了什麼、教練調整什麼、下一週要注意什麼。</p>
        <div>
          ${tracker.map(([no, label, copy]) => `<article><b>${no}</b><strong>${label}</strong><span>${copy}</span></article>`).join("")}
        </div>
      </div>

      <div class="home-pain-strip">
        <h2>我們理解，這些是您常有的擔心</h2>
        <div class="home-pain-grid">
          ${concerns
            .map(
              ([titleText, copy, imageName, alt, tone, iconName]) => `<article class="home-pain-card ${tone}">
                <figure>${systemPhoto(imageName, alt)}</figure>
                <span>${icon(iconName, tone === "coral" ? "coral" : tone === "sky" ? "sky" : tone === "sand" ? "sand" : "")}</span>
                <div><strong>${titleText}</strong><small>${copy}</small></div>
              </article>`,
            )
            .join("")}
        </div>
      </div>
    </div>
  </section>

  <section class="section page-home parent-home-skin home-advantage-redesign" aria-label="伴伴辦學如何讓家長安心">
    <div class="home-section-head">
      <h2>伴伴辦學如何讓您<span>安心</span></h2>
      <p>不是把更多資訊丟給家長，而是把重要訊號整理成能行動的陪伴節奏。</p>
    </div>
    <div class="home-advantage-grid">
      ${advantages
        .map(
          ([titleText, copy, imageName, alt, iconName, tone], index) => `<article class="home-adv-card ${tone}">
            <figure>${parentHomeVisual(imageName, alt)}</figure>
            <div class="home-adv-copy">
              <span>${icon(iconName, tone === "coral" ? "coral" : tone === "sky" ? "sky" : tone === "sand" ? "sand" : "")}</span>
              <b>${String(index + 1).padStart(2, "0")}</b>
              <h3>${titleText}</h3>
              <p>${copy}</p>
            </div>
          </article>`,
        )
        .join("")}
    </div>
  </section>

  <section class="section page-home parent-home-skin home-choice-section" aria-label="家長最安心的理由">
    <div class="home-choice-band">
      <div class="home-choice-copy">
        <h2>選擇伴伴辦學，家長最安心的<span>理由</span></h2>
        <ul>${reasons.map((item) => `<li>${item}</li>`).join("")}</ul>
        <a class="btn secondary" href="#/progress">查看學習成果</a>
      </div>
      <figure>${systemPhoto("hero-student-tablet", "孩子在明亮環境中使用平板學習")}</figure>
      <div class="home-choice-note">從每天任務到每週週報，陪伴不是靠感覺，而是有節奏、有回饋、有調整。</div>
    </div>
  </section>

  <section class="section page-home parent-home-skin home-course-section" aria-label="每週緊密連結">
    <div class="home-section-head compact">
      <h2>我們每週都與您保持緊密連結</h2>
      <p>讓家長不用每天盯細節，也能穩定掌握孩子的學習狀態。</p>
    </div>
    <div class="home-course-grid">
      ${weeklyCards
        .map(
          ([label, heading, list, tone, imageName, alt]) => `<article class="home-course-card ${tone === "coral" ? "coral" : ""}">
            <div class="home-course-copy">
              <div class="label">${label}</div>
              <h3>${heading}</h3>
              <ul>${list.map((item) => `<li>${item}</li>`).join("")}</ul>
              <a class="btn ${tone === "coral" ? "coral" : ""}" href="#/diagnosis">先做 AI 體檢</a>
            </div>
            <figure class="home-course-visual ${tone}">${parentHomeVisual(imageName, alt)}</figure>
          </article>`,
        )
        .join("")}
    </div>
  </section>

  <section class="section page-home parent-home-skin home-stats-section" aria-label="家長安心數據">
    <div class="home-stat-row">
      ${stats
        .map(
          ([num, label, iconName], index) => `<div class="home-stat-tile">${icon(iconName, index === 1 ? "coral" : index === 2 ? "sky" : index === 3 ? "sand" : "")}<div><strong>${num}</strong><span>${label}</span></div></div>`,
        )
        .join("")}
    </div>
  </section>

  ${cta("parent")}`;
}

function renderBlock(block) {
  const map = {
    pain: painBlock,
    advantages: () => advantagesBlock(block.count),
    why: whyBlock,
    plans: plansBlock,
    stats: () => statsBlock(),
    statsWide: () => statsBlock(true),
    aboutInteractive: aboutInteractiveBlock,
    advantageSix,
    formula: formulaBlock,
    comparison: comparisonBlock,
    fit: fitBlock,
    recommend: recommendBlock,
    programStats: programStatsBlock,
    metricStrip,
    dashboard: dashboardBlock,
    dataWhy: dataWhyBlock,
    diagnosisSteps,
    report: reportBlock,
    weakness: weaknessBlock,
    recommendationPanel,
    journey: journeyBlock,
    rhythm: rhythmBlock,
    engine: engineBlock,
    studentDash: studentDashBlock,
    coachRoles,
    coachPlusAi,
    weeklyFlow,
    reassure: reassureBlock,
    consultFlow,
    pricingPlans,
    pricingAssist: pricingAssistBlock,
    whyChoose,
    faq: faqBlock,
    concerns: concernsBlock,
    parentCare: parentCareBlock,
    reasons: reasonsBlock,
    testimonials: testimonialsBlock,
    connection: connectionBlock,
    homeAdvantagePanel,
    aboutData: aboutDataBlock,
    diagnosisCompanion: diagnosisCompanionBlock,
  };
  return map[block.type] ? map[block.type]() : "";
}

function cta(route) {
  const data = {
    home: { title: "先看懂孩子，再開始有效學習", copy: "15 分鐘 AI 學習體檢會整理知識缺口、錯因分析與 7 天改善建議，讓下一步學習更有方向。", primary: "開始 15 分鐘 AI 學習體檢", route: "diagnosis", secondary: "查看課程方案", secondaryRoute: "programs", mark: "brain" },
    about: { title: "先看懂孩子，再決定怎麼陪", copy: "15 分鐘 AI 學習體檢會整理孩子目前卡住的地方，讓家長少一點猜測，多一點具體下一步。", primary: "開始 15 分鐘 AI 體檢", route: "diagnosis", secondary: "了解陪伴方式", secondaryRoute: "programs" },
    programs: { title: "不確定哪種陪伴最適合？", copy: "先做 15 分鐘 AI 學習體檢，再依孩子狀態建議節奏陪伴或弱點突破。", primary: "開始 15 分鐘 AI 體檢", route: "diagnosis", mark: "target" },
    progress: { title: "先看孩子現在卡在哪裡", copy: "體檢後再追蹤學習時間、弱點改善與教練建議，讓家長每週看懂孩子是否真的前進。", primary: "開始 15 分鐘 AI 體檢", route: "diagnosis", mark: "heart" },
    diagnosis: { title: "開始 15 分鐘 AI 學習體檢", copy: "掌握孩子的知識缺口、錯因與學習行為，開啟有效自學第一步。", primary: "開始 AI 學習體檢", route: "diagnosis", note: "無需註冊會員，先看懂狀態再決定下一步", mark: "brain" },
    system: { title: "讓家長先看懂孩子的下一步", copy: "從 15 分鐘 AI 學習體檢開始，把孩子的卡點轉成每日任務、教練陪伴與家長週報。", primary: "開始 15 分鐘 AI 體檢", route: "diagnosis", mark: "heart" },
    coach: { title: "孩子卡住時，先讓我們看懂原因", copy: "體檢會整理知識缺口與學習行為，教練才能更精準地提醒、拆解與陪伴。", primary: "開始 15 分鐘 AI 體檢", route: "diagnosis", mark: "heart" },
    faq: { title: "先看懂孩子，再討論適合的陪伴方式", copy: "完成 15 分鐘 AI 學習體檢後，再依孩子狀態判斷下一步，不讓家長盲目選擇。", primary: "開始 15 分鐘 AI 體檢", route: "diagnosis", mark: "heart" },
    parent: { title: "少一點追問，多一點看得懂的狀態", copy: "先用 AI 學習體檢看見孩子卡點，再用週報與教練回饋讓家長知道下一步怎麼陪。", primary: "開始 15 分鐘 AI 體檢", route: "diagnosis", mark: "heart" },
  }[route];

  return `<section class="cta-band cta-${route} ${data.media ? "has-media" : ""} ${data.mark ? "has-mark" : ""}"><div><h2>${data.title}</h2><p>${data.copy}</p>${data.note ? `<small>${data.note}</small>` : ""}</div><div class="cta-actions"><a class="btn" href="#/${data.route || "faq"}">${data.primary}</a>${data.secondary ? `<a class="btn secondary" href="#/${data.secondaryRoute || "programs"}">${data.secondary}</a>` : ""}</div>${data.media ? `<img class="cta-figure" src="${data.media}" alt="" />` : ""}${data.mark ? `<span class="cta-mark">${icon(data.mark)}</span>` : ""}</section>`;
}

const socialLinks = [
  { id: "facebook", label: "Facebook" },
  { id: "instagram", label: "Instagram" },
  { id: "line", label: "LINE" },
  { id: "youtube", label: "YouTube" },
  { id: "tiktok", label: "TikTok" },
  { id: "threads", label: "Threads" },
];

const socialIcons = {
  facebook: `<svg viewBox="0 0 32 32" aria-hidden="true" focusable="false"><path fill="currentColor" d="M18.5 27v-9.3h3.1l.5-3.7h-3.6v-2.4c0-1.1.3-1.9 1.9-1.9h2V6.4c-.9-.1-1.9-.2-3-.2-3 0-5.1 1.9-5.1 5.3V14h-3.4v3.7h3.4V27h4.2Z"/></svg>`,
  instagram: `<svg viewBox="0 0 32 32" aria-hidden="true" focusable="false"><rect x="7" y="7" width="18" height="18" rx="5.2" fill="none" stroke="currentColor" stroke-width="2.2"/><circle cx="16" cy="16" r="4.2" fill="none" stroke="currentColor" stroke-width="2.2"/><circle cx="21.4" cy="10.8" r="1.45" fill="currentColor"/></svg>`,
  line: `<svg viewBox="0 0 32 32" aria-hidden="true" focusable="false"><path fill="none" stroke="currentColor" stroke-width="2.1" stroke-linejoin="round" d="M16 6.7c-5.8 0-10.5 3.8-10.5 8.5 0 4.2 3.7 7.7 8.8 8.4l1.4 2.3c.3.5 1 .5 1.2-.1l.9-2.1c4.9-.7 8.7-4.2 8.7-8.5 0-4.7-4.7-8.5-10.5-8.5Z"/><text x="16" y="17.5" text-anchor="middle" font-size="5.4" font-weight="900" fill="currentColor" font-family="Arial, sans-serif">LINE</text></svg>`,
  youtube: `<svg viewBox="0 0 32 32" aria-hidden="true" focusable="false"><rect x="5.2" y="9.2" width="21.6" height="13.6" rx="4.2" fill="none" stroke="currentColor" stroke-width="2.1"/><path fill="currentColor" d="M14.1 13.1v5.8l5.4-2.9-5.4-2.9Z"/></svg>`,
  tiktok: `<svg viewBox="0 0 32 32" aria-hidden="true" focusable="false"><path fill="currentColor" d="M19.1 6.1c.4 3 2.2 4.9 5.2 5.3v3.7c-1.9-.1-3.5-.6-5-1.6v6.3c0 4.3-2.7 7-6.7 7-3.5 0-6.1-2.5-6.1-5.9 0-3.6 2.9-6 6.8-6 .5 0 1 .1 1.4.2v3.7c-.5-.2-.9-.2-1.4-.2-1.6 0-2.7.9-2.7 2.2s1 2.2 2.4 2.2c1.6 0 2.5-1 2.5-2.9v-14h3.6Z"/></svg>`,
  threads: `<svg viewBox="0 0 32 32" aria-hidden="true" focusable="false"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.25" d="M21.6 13.4c-.5-3.2-2.5-5-5.8-5-4 0-6.4 2.9-6.4 7.6 0 4.9 2.5 7.7 6.8 7.7 3.1 0 5.4-1.7 5.4-4.2 0-2.3-1.8-3.7-4.8-3.7h-2.1"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2.25" d="M22.7 10.9c1.8 1.4 2.8 3.5 2.8 6 0 5.5-4.1 9.5-9.6 9.5S6.5 22.2 6.5 16 10.4 5.6 16 5.6c2.6 0 4.9.9 6.4 2.6"/></svg>`,
};

function footer(route) {
  const page = pages[route] || pages.home;
  const data = {
    intro: "專為國中、高中學生打造的 AI 陪伴式學習平台，讓學習更有效，讓成長更有方向。",
    groups: [
      ["關於我們", ["品牌理念", "教學團隊", "最新消息", "加入我們"]],
      ["課程與服務", ["國中方案", "高中方案", "學習系統介紹", "常見問題"]],
      ["資源與支持", ["學習文章", "家長中心", "聯絡我們", "隱私權政策"]],
      ["聯絡我們", ["02-1234-5678", "service@banbanai.com", "週一至週五 09:00 - 18:00"]],
    ],
  };
  return `<footer class="footer footer-home">
    <div class="footer-shell">
      <div class="footer-brand">${brand(page.brandSub, "home")}<p>${data.intro}</p></div>
      ${data.groups
        .map(([heading, links]) => `<div class="footer-group"><h3>${heading}</h3>${links.map((text) => `<a href="#/home">${text}</a>`).join("")}</div>`)
        .join("")}
      <div class="footer-bottom">
        <span>© 2024 伴伴辦學 All rights reserved.</span>
        <nav class="footer-legal" aria-label="頁尾法律連結">
          <a href="#/home">隱私權政策</a>
          <a href="#/home">服務條款</a>
        </nav>
        <div class="footer-social" aria-label="社群連結">
          <span class="footer-social-label">追蹤伴伴</span>
          <div class="footer-social-links">
            ${socialLinks
              .map(
                ({ id, label }) =>
                  `<a class="footer-social-link social-${id}" href="#/home" aria-label="${label}">${socialIcons[id]}</a>`,
              )
              .join("")}
          </div>
        </div>
      </div>
    </div>
  </footer>`;
}

function aboutReferencePage() {
  const values = [
    ["target", "看見真正卡點", "透過 AI 解析學習歷程，精準找出孩子的盲點與瓶頸。"],
    ["doc", "把自學變成系統", "將目標、內容、練習與回饋串成孩子可持續的學習流程。"],
    ["brain", "AI + 教練雙引擎", "AI 提供科學判讀，教練給予策略引導與有溫度的支持。"],
    ["heart", "讓成長被看見", "數據可視化讓進步清晰可見，建立自信，也讓家長放心。"],
  ];
  const team = [
    ["教學總監", "林宜蓁", "20 年教學與課程研發經驗，擅長把複雜觀念轉成孩子聽得懂的路線。", "./assets/hero/hero-about-large.png", ["課程設計與學習規劃", "學習策略陪伴", "教師培訓與督導"]],
    ["學習教練", "陳昱誠", "陪伴孩子建立每日節奏，引導自律與完成感。", "./assets/content/coach/coach-hero-family.png", ["學習動機引導", "時間管理教練", "讀書方法優化"]],
    ["AI 學習顧問", "黃韻涵", "AI 數據分析專家，協助教練把洞察轉成具體行動。", "./assets/generated/system-023942/laptop-analytics.png", ["學習數據分析", "自適應學習策略", "成效追蹤與優化"]],
    ["家長陪伴顧問", "劉心妤", "協助家長理解孩子學習狀態，打造安心的成長回饋。", "./assets/generated/premium-home/coach-companion.png", ["親職溝通諮詢", "家庭學習規劃", "情緒支持與陪伴"]],
  ];
  const news = [
    ["2024", "05/20", "AiMii 學習系統升級", "全新學習與週報模組上線，讓學習更精準、更有感。", "./assets/generated/premium-home/product-dashboard.png"],
    ["2024", "05/10", "暑期學習計畫開放預約", "專屬顧問協助規劃暑假陪伴，讓孩子穩定前進。", "./assets/generated/system-023942/hero-student-tablet.png"],
    ["2024", "05/02", "教練陪跑說明會", "想用專業陪伴孩子成長？加入我們，一起創造改變。", "./assets/content/coach/coach-companion.png"],
  ];
  const roles = [
    ["users", "學習教練", "陪伴孩子設定目標、建立習慣，引導他肯定進步與自己的學習節奏。"],
    ["chat", "課程顧問", "理解家長與孩子的需求，提供最適合的學習方案與支持。"],
    ["doc", "產品 / 設計", "用設計與技術優化學習體驗，打造更好用、更有感的產品。"],
  ];
  return `
    <section class="section about-ref-section about-ref-values" aria-label="品牌理念">
      <div class="about-ref-section-head">
        <span>品牌理念</span>
        <h2>讓孩子不是被推著學，<br>而是看見自己正在變好。</h2>
      </div>
      <div class="about-ref-value-grid">
        ${values
          .map(([iconName, title, copy]) => `<article class="about-ref-value-card" data-premium-tilt>${icon(iconName)}<h3>${title}</h3><p>${copy}</p></article>`)
          .join("")}
      </div>
    </section>

    <section class="section about-ref-section about-ref-founder" aria-label="創辦人的話">
      <div class="about-founder-shell">
        <div class="about-founder-lead">
          <span>創辦人的話</span>
          <h2>我們相信，每個孩子都值得被理解，而不是只被比較。</h2>
          <p>看見卡點，陪出自學力。</p>
        </div>
        <article class="about-founder-letter" data-premium-tilt>
          <p>孩子學不好，很多時候不是因為不努力，而是沒有人真正看見他卡在哪裡。家長焦慮，也不是因為不愛孩子，而是缺少一套能信任的方法。</p>
          <p>伴伴辦學因此誕生。</p>
          <p>我們用 AI 找出孩子的學習盲點，用實體空間建立穩定的學習節奏，用真人教練陪孩子面對困難，也用清楚的報告讓家長看見孩子每一步的進步。</p>
          <p>我們不只是教孩子答對題目，而是陪孩子建立面對學習的能力。</p>
          <p>因為真正重要的，不只是這一次考得更好，而是孩子開始相信：我知道自己哪裡不會，我知道下一步怎麼做，我也可以慢慢變好。</p>
          <footer>
            <strong>這就是伴伴辦學。</strong>
            <span>EduBaania Founder</span>
          </footer>
        </article>
      </div>
    </section>

    <section class="section about-ref-section about-ref-team" aria-label="教學團隊">
      <div class="about-ref-section-head">
        <span>教學團隊</span>
        <h2>專業團隊陪伴，<br>讓孩子學得更對，也走得更遠。</h2>
        <p>我們相信，好的學習支持不只是題目與答案，而是有人理解孩子的卡點、情緒與節奏。</p>
      </div>
      <div class="about-ref-team-grid">
        ${team
          .map(
            ([role, name, intro, image, bullets]) => `<article class="about-ref-team-card">
              <div class="about-ref-team-photo"><img src="${image}" alt="${role} ${name}" loading="lazy" decoding="async" /></div>
              <div class="about-ref-team-copy">
                <span>${role}</span>
                <h3>${name}</h3>
                <p>${intro}</p>
                <ul>${bullets.map((item) => `<li>${item}</li>`).join("")}</ul>
              </div>
            </article>`,
          )
          .join("")}
      </div>
    </section>

    <section class="section about-ref-section about-ref-news" aria-label="最新消息">
      <div class="about-ref-section-head about-ref-row-head">
        <div><span>最新消息</span><h2>把有效學習，持續做得更好。</h2></div>
        <a href="#/parent">查看全部消息 →</a>
      </div>
      <div class="about-ref-news-grid">
        ${news
          .map(
            ([year, date, title, copy, image]) => `<article class="about-ref-news-card">
              <div class="about-ref-news-image"><img src="${image}" alt="${title}" loading="lazy" decoding="async" /><time><small>${year}</small><strong>${date}</strong></time></div>
              <div class="about-ref-news-body"><h3>${title}</h3><p>${copy}</p><a href="#/parent">閱讀更多 →</a></div>
            </article>`,
          )
          .join("")}
      </div>
    </section>

    <section class="section about-ref-section about-ref-join" aria-label="加入我們">
      <div class="about-ref-join-shell">
        <div class="about-ref-join-copy">
          <span>加入我們</span>
          <h2>和我們一起，用科技與人文的力量，讓學習成為改變的起點。</h2>
          <div class="about-ref-role-grid">
            ${roles
              .map(([iconName, title, copy]) => `<article class="about-ref-role-card">${icon(iconName)}<h3>${title}</h3><p>${copy}</p><a href="#/about">了解更多</a></article>`)
              .join("")}
          </div>
          <a class="btn primary" href="#/diagnosis">開始 15 分鐘 AI 體檢 →</a>
        </div>
        <figure class="about-ref-join-scene" aria-label="伴伴辦學理念情境">
          <img src="./assets/generated/premium-home/conversion-ai-test.png" alt="溫暖學習空間與家庭陪伴情境" loading="lazy" decoding="async" />
          <blockquote>讓每個孩子都能被理解、被支持、被看見，並持續成長。<cite>EduBaania</cite></blockquote>
        </figure>
      </div>
    </section>`;
}

function render() {
  const route = getRoute();
  const page = pages[route];
  const postHeroMarkup =
    route === "home"
      ? homeOnePageContent()
      : route === "parent"
      ? parentImageToCodeReplacement()
      : `
        ${tasteLoopStrip(route)}
        ${productLens(route)}
        ${page.blocks.map(renderBlock).join("")}
        ${cta(route)}
      `;
  const mainMarkup =
    route === "about"
      ? `${siteDepthField(route)}${hero(page, route)}${aboutReferencePage()}`
      : `${siteDepthField(route)}
          ${hero(page, route)}
          ${postHeroMarkup}`;
  app.innerHTML = `
    <div class="site-scale-viewport" data-desktop-scale>
      <div class="site">
        ${header(route)}
        <main class="page-main page-${route}">
          ${mainMarkup}
        </main>
        ${footer(route)}
      </div>
    </div>`;
  bindDesktopScale();
  bindHeroInteraction(route);
  bindLensInteraction();
  bindDiagnosisInteractions();
  bindProgramInteractions();
  bindProgressInteractions();
  bindParentInteractions();
  bindAboutInteractions();
  bindPremiumInteractions();
  bindSiteDepthMotion();
  bindPremiumHomeInteractions();
  bindHeroCarousel();
  bindHeaderState();
  bindHomeLeadPanel();
  bindHomeConversionForm();
  bindPageGuide();
  bindFaqInteraction();
  bindRevealMotion();
}

function bindRevealMotion() {
  const targets = [...app.querySelectorAll(".taste-loop-strip, .section, .cta-band, .footer")];
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
  app.querySelectorAll(".faq details").forEach((item) => {
    item.addEventListener("toggle", () => {
      if (!item.open) return;
      app.querySelectorAll(".faq details").forEach((other) => {
        if (other !== item) other.removeAttribute("open");
      });
    });
  });
}

function bindLensInteraction() {
  app.querySelectorAll(".product-lens").forEach((section) => {
    const tabs = [...section.querySelectorAll(".lens-tab")];
    const proofs = [...section.querySelectorAll(".lens-proof")];
    const panels = [...section.querySelectorAll(".lens-detail")];
    const activate = (index, shouldFocus = false) => {
      const safeIndex = Math.max(0, Math.min(index, tabs.length - 1));
      section.dataset.activeLens = String(safeIndex + 1);
      tabs.forEach((item, itemIndex) => {
        const active = itemIndex === safeIndex;
        item.classList.toggle("is-active", active);
        item.setAttribute("aria-selected", active ? "true" : "false");
        if (shouldFocus && active) item.focus();
      });
      proofs.forEach((item, itemIndex) => {
        const active = itemIndex === safeIndex;
        item.classList.toggle("is-active", active);
        item.setAttribute("aria-pressed", active ? "true" : "false");
      });
      panels.forEach((panel, itemIndex) => {
        const active = itemIndex === safeIndex;
        panel.classList.toggle("is-active", active);
        if (active) panel.removeAttribute("hidden");
        else panel.setAttribute("hidden", "");
      });
    };

    [...tabs, ...proofs].forEach((control) => {
      control.addEventListener("click", () => {
        activate(Number(control.dataset.lensTab || 0));
      });
    });

    tabs.forEach((tab) => {
      tab.addEventListener("keydown", (event) => {
        if (!["ArrowDown", "ArrowRight", "ArrowUp", "ArrowLeft", "Home", "End"].includes(event.key)) return;
        event.preventDefault();
        const current = Number(tab.dataset.lensTab || 0);
        if (event.key === "Home") activate(0, true);
        else if (event.key === "End") activate(tabs.length - 1, true);
        else activate(current + (event.key === "ArrowUp" || event.key === "ArrowLeft" ? -1 : 1), true);
      });
    });
    activate(0);
  });
}

function bindDiagnosisInteractions() {
  app.querySelectorAll("[data-diagnosis-switcher]").forEach((section) => {
    const tabs = [...section.querySelectorAll("[data-diagnosis-tab]")];
    const panels = [...section.querySelectorAll("[data-diagnosis-panel]")];
    if (!tabs.length || !panels.length) return;

    const activate = (index, shouldFocus = false) => {
      const safeIndex = Math.max(0, Math.min(index, tabs.length - 1));
      section.dataset.activeDiagnosis = String(safeIndex);
      tabs.forEach((tab, tabIndex) => {
        const active = tabIndex === safeIndex;
        tab.classList.toggle("is-active", active);
        tab.setAttribute("aria-selected", active ? "true" : "false");
        if (shouldFocus && active) tab.focus();
      });
      panels.forEach((panel, panelIndex) => {
        const active = panelIndex === safeIndex;
        panel.classList.toggle("is-active", active);
        if (active) panel.removeAttribute("hidden");
        else panel.setAttribute("hidden", "");
      });
    };

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => activate(Number(tab.dataset.diagnosisTab || 0)));
      tab.addEventListener("keydown", (event) => {
        if (!["ArrowDown", "ArrowRight", "ArrowUp", "ArrowLeft", "Home", "End"].includes(event.key)) return;
        event.preventDefault();
        const current = Number(tab.dataset.diagnosisTab || 0);
        if (event.key === "Home") activate(0, true);
        else if (event.key === "End") activate(tabs.length - 1, true);
        else activate(current + (event.key === "ArrowUp" || event.key === "ArrowLeft" ? -1 : 1), true);
      });
    });

    activate(0);
  });
}

function bindProgramInteractions() {
  app.querySelectorAll("[data-program-switcher]").forEach((section) => {
    const tabs = [...section.querySelectorAll("[data-program-tab]")];
    const panels = [...section.querySelectorAll("[data-program-panel]")];
    if (!tabs.length || !panels.length) return;

    const activate = (index, shouldFocus = false) => {
      const maxIndex = Math.min(tabs.length, panels.length) - 1;
      const safeIndex = Math.max(0, Math.min(index, maxIndex));
      section.dataset.activeProgram = String(safeIndex);
      tabs.forEach((tab, tabIndex) => {
        const active = tabIndex === safeIndex;
        tab.classList.toggle("is-active", active);
        tab.setAttribute("aria-selected", active ? "true" : "false");
        if (shouldFocus && active) tab.focus();
      });
      panels.forEach((panel, panelIndex) => {
        const active = panelIndex === safeIndex;
        panel.classList.toggle("is-active", active);
        if (active) panel.removeAttribute("hidden");
        else panel.setAttribute("hidden", "");
      });
    };

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => activate(Number(tab.dataset.programTab || 0)));
      tab.addEventListener("keydown", (event) => {
        if (!["ArrowDown", "ArrowRight", "ArrowUp", "ArrowLeft", "Home", "End"].includes(event.key)) return;
        event.preventDefault();
        const current = Number(tab.dataset.programTab || 0);
        if (event.key === "Home") activate(0, true);
        else if (event.key === "End") activate(tabs.length - 1, true);
        else activate(current + (event.key === "ArrowUp" || event.key === "ArrowLeft" ? -1 : 1), true);
      });
    });

    activate(Number(section.dataset.activeProgram || 0));
  });
}

function bindProgressInteractions() {
  app.querySelectorAll("[data-progress-switcher]").forEach((section) => {
    const tabs = [...section.querySelectorAll("[data-progress-tab]")];
    const panels = [...section.querySelectorAll("[data-progress-panel]")];
    if (!tabs.length || !panels.length) return;

    const activate = (index, shouldFocus = false) => {
      const maxIndex = Math.min(tabs.length, panels.length) - 1;
      const safeIndex = Math.max(0, Math.min(index, maxIndex));
      section.dataset.activeProgress = String(safeIndex);
      tabs.forEach((tab, tabIndex) => {
        const active = tabIndex === safeIndex;
        tab.classList.toggle("is-active", active);
        tab.setAttribute("aria-selected", active ? "true" : "false");
        if (shouldFocus && active) tab.focus();
      });
      panels.forEach((panel, panelIndex) => {
        const active = panelIndex === safeIndex;
        panel.classList.toggle("is-active", active);
        if (active) panel.removeAttribute("hidden");
        else panel.setAttribute("hidden", "");
      });
    };

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => activate(Number(tab.dataset.progressTab || 0)));
      tab.addEventListener("keydown", (event) => {
        if (!["ArrowDown", "ArrowRight", "ArrowUp", "ArrowLeft", "Home", "End"].includes(event.key)) return;
        event.preventDefault();
        const current = Number(tab.dataset.progressTab || 0);
        if (event.key === "Home") activate(0, true);
        else if (event.key === "End") activate(tabs.length - 1, true);
        else activate(current + (event.key === "ArrowUp" || event.key === "ArrowLeft" ? -1 : 1), true);
      });
    });

    activate(Number(section.dataset.activeProgress || 0));
  });
}

function bindParentInteractions() {
  const bindSwitch = (sectionSelector, tabSelector, panelSelector, getIndex, datasetName) => {
    app.querySelectorAll(sectionSelector).forEach((section) => {
      const tabs = [...section.querySelectorAll(tabSelector)];
      const panels = [...section.querySelectorAll(panelSelector)];
      if (!tabs.length || !panels.length) return;
      const canHoverPreview = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

      const activate = (index, shouldFocus = false) => {
        const maxIndex = Math.min(tabs.length, panels.length) - 1;
        const safeIndex = Math.max(0, Math.min(index, maxIndex));
        if (section.dataset[datasetName] === String(safeIndex) && !shouldFocus) return;
        section.dataset[datasetName] = String(safeIndex);
        section.classList.add("is-switching");
        window.clearTimeout(section._parentSwitchTimer);
        section._parentSwitchTimer = window.setTimeout(() => section.classList.remove("is-switching"), 260);
        tabs.forEach((tab) => {
          const active = getIndex(tab) === safeIndex;
          tab.classList.toggle("is-active", active);
          tab.setAttribute("aria-selected", active ? "true" : "false");
          if (shouldFocus && active) tab.focus();
        });
        panels.forEach((panel, panelIndex) => {
          const active = panelIndex === safeIndex;
          panel.classList.toggle("is-active", active);
          if (active) panel.removeAttribute("hidden");
          else panel.setAttribute("hidden", "");
        });
      };

      tabs.forEach((tab) => {
        tab.addEventListener("click", () => activate(getIndex(tab)));
        tab.addEventListener("pointerdown", () => {
          tab.classList.add("is-pressing");
          window.setTimeout(() => tab.classList.remove("is-pressing"), 180);
        });
        if (canHoverPreview) {
          tab.addEventListener("pointerenter", () => activate(getIndex(tab)));
        }
        tab.addEventListener("keydown", (event) => {
          if (!["ArrowDown", "ArrowRight", "ArrowUp", "ArrowLeft", "Home", "End"].includes(event.key)) return;
          event.preventDefault();
          const current = getIndex(tab);
          if (event.key === "Home") activate(0, true);
          else if (event.key === "End") activate(tabs.length - 1, true);
          else activate(current + (event.key === "ArrowUp" || event.key === "ArrowLeft" ? -1 : 1), true);
        });
      });

      activate(Number(section.dataset[datasetName] || 0));
    });
  };

  bindSwitch("[data-parent-switcher]", "[data-parent-tab]", "[data-parent-panel]", (tab) => Number(tab.dataset.parentTab || 0), "activeParent");
  bindSwitch("[data-parent-concern-switcher]", "[data-parent-concern-tab]", "[data-parent-concern-panel]", (tab) => Number(tab.dataset.parentConcernTab || 0), "activeConcern");
  bindSwitch("[data-parent-feedback-switcher]", "[data-parent-feedback-tab]", "[data-parent-feedback-panel]", (tab) => Number(tab.dataset.parentFeedbackTab || 0), "activeFeedback");
  bindSwitch("[data-parent-week-switcher]", "[data-parent-week-tab]", "[data-parent-week-panel]", (tab) => Number(tab.dataset.parentWeekTab || 0), "activeWeek");
  bindSwitch("[data-parent-trust-switcher]", "[data-parent-trust-tab]", "[data-parent-trust-panel]", (tab) => Number(tab.dataset.parentTrustTab || 0), "activeTrust");
}

function bindAboutInteractions() {
  const bindSwitch = (sectionSelector, tabSelector, panelSelector, getIndex, datasetName, extraSelector = "", getExtraIndex = null) => {
    app.querySelectorAll(sectionSelector).forEach((section) => {
      const tabs = [...section.querySelectorAll(tabSelector)];
      const panels = [...section.querySelectorAll(panelSelector)];
      const extras = extraSelector ? [...section.querySelectorAll(extraSelector)] : [];
      if (!tabs.length || !panels.length) return;

      const activate = (index, shouldFocus = false) => {
        const maxIndex = Math.min(tabs.length, panels.length) - 1;
        const safeIndex = Math.max(0, Math.min(index, maxIndex));
        section.dataset[datasetName] = String(safeIndex);
        tabs.forEach((tab, tabIndex) => {
          const active = tabIndex === safeIndex;
          tab.classList.toggle("is-active", active);
          tab.setAttribute("aria-selected", active ? "true" : "false");
          if (shouldFocus && active) tab.focus();
        });
        panels.forEach((panel, panelIndex) => {
          const active = panelIndex === safeIndex;
          panel.classList.toggle("is-active", active);
          if (active) panel.removeAttribute("hidden");
          else panel.setAttribute("hidden", "");
        });
        extras.forEach((extra) => {
          const extraIndex = getExtraIndex ? getExtraIndex(extra) : 0;
          extra.classList.toggle("is-active", extraIndex === safeIndex);
        });
      };

      tabs.forEach((tab) => {
        tab.addEventListener("click", () => activate(getIndex(tab)));
        tab.addEventListener("keydown", (event) => {
          if (!["ArrowDown", "ArrowRight", "ArrowUp", "ArrowLeft", "Home", "End"].includes(event.key)) return;
          event.preventDefault();
          const current = getIndex(tab);
          if (event.key === "Home") activate(0, true);
          else if (event.key === "End") activate(tabs.length - 1, true);
          else activate(current + (event.key === "ArrowUp" || event.key === "ArrowLeft" ? -1 : 1), true);
        });
      });

      extras.forEach((extra) => {
        extra.addEventListener("click", () => activate(getExtraIndex ? getExtraIndex(extra) : 0));
      });

      activate(Number(section.dataset[datasetName] || 0));
    });
  };

  bindSwitch("[data-about-switcher]", "[data-about-tab]", "[data-about-panel]", (tab) => Number(tab.dataset.aboutTab || 0), "activeAbout");
  bindSwitch(
    "[data-about-loop-switcher]",
    "[data-about-loop-tab]",
    "[data-about-loop-panel]",
    (tab) => Number(tab.dataset.aboutLoopTab || 0),
    "activeLoop",
    "[data-about-loop-node]",
    (node) => Number(node.dataset.aboutLoopNode || 0),
  );
  bindSwitch("[data-about-proof-switcher]", "[data-about-proof-tab]", "[data-about-proof-panel]", (tab) => Number(tab.dataset.aboutProofTab || 0), "activeProof");
}

function bindPremiumInteractions() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const targets = [
    ...app.querySelectorAll(".card, .feature-panel, .plan-card, .metric-card, .lens-shell, .lens-node, .lens-detail, .taste-loop-strip, .taste-loop-step, .hero-flow-command, .hero-preview-card, .home-reference-shell, .home-step-card, .home-system-panel, .home-parent-tracker, .home-pain-card, .home-adv-card, .home-choice-band, .home-course-card, .home-stat-tile, .home-screen-card, .home-screen-flow article, .home-os-problem-card, .home-os-loop-node, .home-os-dashboard-card, .home-os-value-panel, .home-os-mini-report, .home-screen-dashboard, .home-screen-diagnosis-board, .home-screen-photo-card, .home-screen-parent-report, .home-conversion-form, .home-diagnosis-artboard, .home-art-report, .home-art-steps article, .home-art-primary, .home-art-secondary, .home-test-timeline article, .about-interactive-shell, .about-path-button, .about-stage-panel, .about-stage-visual, .about-loop-shell, .about-loop-tab, .about-orbit-node, .about-loop-detail, .about-proof-shell, .about-proof-tab, .about-proof-card, .about-parent-view, .coach-reference-shell, .coach-role-card, .coach-dual-card, .coach-flow-shell, .weekly-flow-card, .coach-reassure-card, .parent-concern-shell, .parent-worry-card, .parent-concern-console, .parent-concern-panel, .parent-photo-board, .parent-answer-console, .parent-care-shell, .parent-care-tab, .parent-care-panel, .parent-care-device, .parent-reason-card, .parent-feedback-shell, .parent-feedback-photo, .parent-featured-quote, .parent-feedback-card, .parent-sentiment-panel, .parent-weekly-shell, .parent-weekly-step, .parent-week-panel, .parent-weekly-device, .parent-2026-shell, .parent-assurance-panel, .parent-assurance-tab, .parent-command-tab, .parent-command-panel, .parent-trust-card, .parent-trust-system, .parent-voice-panel, .parent-voice-card, .parent-week-tab, .parent-week-device, .journey-node, .consult-step, .diagnosis-process-shell, .diagnosis-report-shell, .diagnosis-weakness-shell, .diagnosis-plan-shell, .diagnosis-partner-shell, .diagnosis-process-step, .weakness-hotspot, .partner-node, .programs-compare-shell, .programs-fit-shell, .programs-recommend-shell, .programs-trust-shell, .programs-plan-tab, .recommend-choice, .programs-persona-card, .trust-metric, .progress-command-shell, .progress-insight-shell, .progress-value-shell, .progress-metric-tile, .progress-insight-card, .progress-value-card, .progress-loop-node"),
  ];
  targets.forEach((target) => {
    target.addEventListener("pointermove", (event) => {
      const rect = target.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      target.style.setProperty("--pointer-x", `${x}%`);
      target.style.setProperty("--pointer-y", `${y}%`);
    });
    target.addEventListener("pointerleave", () => {
      target.style.removeProperty("--pointer-x");
      target.style.removeProperty("--pointer-y");
    });
  });
}

function bindSiteDepthMotion() {
  if (depthScrollHandler) window.removeEventListener("scroll", depthScrollHandler);
  if (depthPointerHandler) window.removeEventListener("pointermove", depthPointerHandler);
  if (depthObserver) depthObserver.disconnect();

  const main = app.querySelector(".page-main");
  if (!main) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const tiltSelectors = [
    ".photo-card",
    ".hero-widget",
    ".taste-loop-step",
    ".lens-shell",
    ".lens-node",
    ".lens-detail",
    ".about-stage-visual",
    ".about-path-button",
    ".about-loop-detail",
    ".about-proof-card",
    ".diagnosis-process-step",
    ".diagnosis-report-shell",
    ".diagnosis-weakness-shell",
    ".diagnosis-plan-shell",
    ".diagnosis-partner-shell",
    ".programs-plan-tab",
    ".programs-persona-card",
    ".recommend-choice",
    ".trust-metric",
    ".progress-metric-tile",
    ".progress-insight-card",
    ".progress-value-card",
    ".coach-role-card",
    ".coach-dual-card",
    ".weekly-flow-card",
    ".coach-reassure-card",
    ".parent-assurance-panel",
    ".parent-command-panel",
    ".parent-trust-card",
    ".parent-voice-card",
    ".parent-week-device",
    ".plan-card",
    ".feature-panel",
    ".metric-card",
    ".card",
  ].join(",");

  main.querySelectorAll(tiltSelectors).forEach((target) => {
    target.setAttribute("data-premium-tilt", "");
  });

  const updateDepth = () => {
    const doc = document.documentElement;
    const maxScroll = Math.max(1, doc.scrollHeight - window.innerHeight);
    const progress = Math.min(1, Math.max(0, window.scrollY / maxScroll));
    main.style.setProperty("--depth-near-y", `${(-96 * progress).toFixed(2)}px`);
    main.style.setProperty("--depth-mid-y", `${(-56 * progress).toFixed(2)}px`);
    main.style.setProperty("--depth-far-y", `${(-28 * progress).toFixed(2)}px`);
    main.style.setProperty("--depth-rotate", `${(progress * 9).toFixed(2)}deg`);
  };

  updateDepth();
  if (!reduceMotion) {
    depthScrollHandler = updateDepth;
    window.addEventListener("scroll", depthScrollHandler, { passive: true });
  }

  if (!reduceMotion && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    depthPointerHandler = (event) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 18;
      const y = (event.clientY / window.innerHeight - 0.5) * 14;
      main.style.setProperty("--depth-pointer-x", `${x.toFixed(2)}px`);
      main.style.setProperty("--depth-pointer-y", `${y.toFixed(2)}px`);
    };
    window.addEventListener("pointermove", depthPointerHandler, { passive: true });
  }

  if (!("IntersectionObserver" in window)) return;
  const sections = [...main.querySelectorAll(".hero, .taste-loop-strip, .section, .cta-band")];
  depthObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("is-depth-current", entry.isIntersecting);
      });
    },
    { threshold: 0.24, rootMargin: "-18% 0px -42% 0px" },
  );
  sections.forEach((section) => depthObserver.observe(section));
}

function bindPremiumHomeInteractions() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  app.querySelectorAll("[data-premium-report]").forEach((section) => {
    const tabs = [...section.querySelectorAll("[data-report-tab]")];
    const panels = [...section.querySelectorAll("[data-report-panel]")];
    const activate = (index, shouldFocus = false) => {
      const safeIndex = Math.max(0, Math.min(index, tabs.length - 1));
      tabs.forEach((tab, tabIndex) => {
        const active = tabIndex === safeIndex;
        tab.classList.toggle("is-active", active);
        tab.setAttribute("aria-selected", active ? "true" : "false");
        if (shouldFocus && active) tab.focus();
      });
      panels.forEach((panel, panelIndex) => {
        const active = panelIndex === safeIndex;
        panel.classList.toggle("is-active", active);
        if (active) panel.removeAttribute("hidden");
        else panel.setAttribute("hidden", "");
      });
    };
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => activate(Number(tab.dataset.reportTab || 0)));
      tab.addEventListener("keydown", (event) => {
        if (!["ArrowRight", "ArrowLeft", "Home", "End"].includes(event.key)) return;
        event.preventDefault();
        const current = Number(tab.dataset.reportTab || 0);
        if (event.key === "Home") activate(0, true);
        else if (event.key === "End") activate(tabs.length - 1, true);
        else activate(current + (event.key === "ArrowLeft" ? -1 : 1), true);
      });
    });
    activate(0);
  });

  app.querySelectorAll("[data-premium-journey]").forEach((section) => {
    const steps = [...section.querySelectorAll("[data-journey-step]")];
    const panels = [...section.querySelectorAll("[data-journey-panel]")];
    let manualLockUntil = 0;
    const activate = (index, manual = false) => {
      if (manual) manualLockUntil = Date.now() + 2400;
      const safeIndex = Math.max(0, Math.min(index, steps.length - 1));
      steps.forEach((step, stepIndex) => {
        const active = stepIndex === safeIndex;
        step.classList.toggle("is-active", active);
        step.setAttribute("aria-selected", active ? "true" : "false");
      });
      panels.forEach((panel, panelIndex) => {
        const active = panelIndex === safeIndex;
        panel.classList.toggle("is-active", active);
        if (active) panel.removeAttribute("hidden");
        else panel.setAttribute("hidden", "");
      });
    };
    steps.forEach((step) => {
      step.addEventListener("click", () => activate(Number(step.dataset.journeyStep || 0), true));
      step.addEventListener("focus", () => activate(Number(step.dataset.journeyStep || 0), true));
    });
    activate(0);
    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (Date.now() < manualLockUntil) return;
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) activate(Number(visible.target.dataset.journeyStep || 0));
      },
      { threshold: [0.35, 0.6], rootMargin: "-16% 0px -36% 0px" },
    );
    steps.forEach((step) => observer.observe(step));
  });

  if (reduceMotion || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
  app.querySelectorAll("[data-premium-tilt]").forEach((target) => {
    target.addEventListener("pointermove", (event) => {
      const rect = target.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width - 0.5;
      const py = (event.clientY - rect.top) / rect.height - 0.5;
      target.style.setProperty("--tilt-rx", `${(-py * 5).toFixed(2)}deg`);
      target.style.setProperty("--tilt-ry", `${(px * 6).toFixed(2)}deg`);
      target.style.setProperty("--tilt-x", `${(px * 16).toFixed(1)}px`);
      target.style.setProperty("--tilt-y", `${(py * 14).toFixed(1)}px`);
    });
    target.addEventListener("pointerleave", () => {
      target.style.removeProperty("--tilt-rx");
      target.style.removeProperty("--tilt-ry");
      target.style.removeProperty("--tilt-x");
      target.style.removeProperty("--tilt-y");
    });
  });
}

function bindHomeConversionForm() {
  const form = app.querySelector("[data-home-conversion-form]");
  if (!form) return;
  const success = form.querySelector("[data-home-form-success]");
  const formBody = form.querySelector(".home-conversion-form-body");
  const editButton = form.querySelector("[data-home-form-edit]");
  const fields = [...form.querySelectorAll("input, select, textarea")];
  const errors = Object.fromEntries([...form.querySelectorAll("[data-home-error]")].map((node) => [node.dataset.homeError, node]));
  const messages = {
    parentName: "請留下家長姓名",
    contact: "請留下可聯繫的手機或 Email",
    grade: "請選擇孩子年級",
    concern: "請簡短描述最擔心的學習問題",
  };
  const contactPattern = /(^[^@\s]+@[^@\s]+\.[^@\s]+$)|(\d[\d\s+\-()]{5,}\d)/;

  const setError = (field, message = "") => {
    const errorNode = errors[field.name];
    field.setAttribute("aria-invalid", message ? "true" : "false");
    field.closest(".home-conversion-field")?.classList.toggle("has-error", Boolean(message));
    if (errorNode) errorNode.textContent = message;
  };

  const validateField = (field) => {
    const value = field.value.trim();
    let message = "";
    if (!value) message = messages[field.name] || "請填寫此欄位";
    if (!message && field.name === "contact" && !contactPattern.test(value)) message = "請確認手機或 Email 格式";
    if (!message && field.name === "concern" && value.length < 6) message = "請至少輸入 6 個字，讓我們更快理解狀況";
    setError(field, message);
    return !message;
  };

  fields.forEach((field) => {
    field.addEventListener("input", () => setError(field));
    field.addEventListener("change", () => validateField(field));
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const isValid = fields.map(validateField).every(Boolean);
    if (!isValid) {
      const firstInvalid = fields.find((field) => field.getAttribute("aria-invalid") === "true");
      firstInvalid?.focus();
      return;
    }
    form.classList.add("is-submitted");
    if (formBody) formBody.hidden = true;
    if (success) success.hidden = false;
    fields.forEach((field) => field.setAttribute("disabled", "disabled"));
  });

  editButton?.addEventListener("click", () => {
    form.classList.remove("is-submitted");
    if (formBody) formBody.hidden = false;
    if (success) success.hidden = true;
    fields.forEach((field) => {
      field.removeAttribute("disabled");
      setError(field);
    });
    fields[0]?.focus();
  });
}

function bindHomeLeadPanel() {
  const section = app.querySelector(".home-screen-lead-form");
  const button = app.querySelector("[data-home-lead-toggle]");
  const panel = app.querySelector("[data-home-lead-panel]");
  if (!section || !button || !panel) return;

  button.addEventListener("click", () => {
    const shouldOpen = panel.hidden;
    panel.hidden = !shouldOpen;
    section.classList.toggle("is-form-open", shouldOpen);
    button.setAttribute("aria-expanded", String(shouldOpen));
    button.textContent = shouldOpen ? "收起資料表單" : "也可以先留下資料";
    if (shouldOpen) {
      setTimeout(() => panel.querySelector("input, select, textarea")?.focus(), 120);
    }
  });
}

function bindHeaderState() {
  if (headerScrollHandler) window.removeEventListener("scroll", headerScrollHandler);
  const header = app.querySelector(".site-header");
  if (!header) return;
  headerScrollHandler = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 16);
  };
  headerScrollHandler();
  window.addEventListener("scroll", headerScrollHandler, { passive: true });
}

function scheduleDesktopScaleUpdate() {
  if (desktopScaleFrame) window.cancelAnimationFrame(desktopScaleFrame);
  desktopScaleFrame = window.requestAnimationFrame(updateDesktopScale);
}

function updateDesktopScale() {
  desktopScaleFrame = null;
  const viewport = app.querySelector("[data-desktop-scale]");
  const site = viewport?.querySelector(".site");
  if (!viewport || !site) return;

  const designWidth = 1536;
  const viewportWidth = window.innerWidth || document.documentElement.clientWidth || designWidth;
  if (viewportWidth < 1024) {
    viewport.classList.remove("is-desktop-stage", "is-zoom", "is-transform");
    viewport.style.removeProperty("--desktop-scale");
    viewport.style.removeProperty("--desktop-design-width");
    viewport.style.removeProperty("height");
    site.style.removeProperty("width");
    site.style.removeProperty("margin-left");
    site.style.removeProperty("margin-right");
    return;
  }

  const scale = Math.min(1, viewportWidth / designWidth);
  const supportsZoom = typeof CSS !== "undefined" && CSS.supports?.("zoom: 1");
  viewport.classList.add("is-desktop-stage");
  viewport.classList.toggle("is-zoom", Boolean(supportsZoom));
  viewport.classList.toggle("is-transform", !supportsZoom);
  viewport.style.setProperty("--desktop-design-width", `${designWidth}px`);
  viewport.style.setProperty("--desktop-scale", String(scale));
  site.style.width = `${designWidth}px`;
  site.style.marginLeft = "auto";
  site.style.marginRight = "auto";

  window.requestAnimationFrame(() => {
    if (!viewport.isConnected || !site.isConnected) return;
    const visualHeight = site.getBoundingClientRect().height;
    viewport.style.height = `${Math.ceil(visualHeight)}px`;
  });
}

function bindDesktopScale() {
  if (desktopScaleResizeHandler) {
    window.removeEventListener("resize", desktopScaleResizeHandler);
    window.removeEventListener("orientationchange", desktopScaleResizeHandler);
  }
  if (desktopScaleObserver) desktopScaleObserver.disconnect();

  const viewport = app.querySelector("[data-desktop-scale]");
  const site = viewport?.querySelector(".site");
  if (!viewport || !site) return;

  desktopScaleResizeHandler = scheduleDesktopScaleUpdate;
  window.addEventListener("resize", desktopScaleResizeHandler, { passive: true });
  window.addEventListener("orientationchange", desktopScaleResizeHandler, { passive: true });
  if ("ResizeObserver" in window) {
    desktopScaleObserver = new ResizeObserver(scheduleDesktopScaleUpdate);
    desktopScaleObserver.observe(site);
  }
  scheduleDesktopScaleUpdate();
}

function bindPageGuide() {
  if (guideObserver) guideObserver.disconnect();
  if (guideScrollHandler) window.removeEventListener("scroll", guideScrollHandler);
  const guide = app.querySelector(".page-guide");
  const main = app.querySelector(".page-main");
  if (!guide || !main) return;
  const buttons = [...guide.querySelectorAll(".page-guide-dot")];
  let guideClickLockUntil = 0;
  const sections = [
    main.querySelector(".hero"),
    ...[...main.children].filter((element) => element.classList.contains("section")),
    main.querySelector(".cta-band"),
  ].filter(Boolean);

  const activate = (index) => {
    buttons.forEach((button, buttonIndex) => {
      const active = buttonIndex === index;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-current", active ? "true" : "false");
    });
  };

  sections.forEach((section, index) => {
    section.dataset.guideSection = String(index);
  });

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.guideIndex || 0);
      const target = sections[index];
      if (!target) return;
      activate(index);
      guideClickLockUntil = Date.now() + 1200;
      target.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: index === 0 ? "start" : "center" });
    });
  });

  const isParentGuide = main.classList.contains("page-parent");
  guideScrollHandler = () => {
    const doc = document.documentElement;
    const heroHeight = sections[0]?.getBoundingClientRect().height || 0;
    const isDesktopStage = Boolean(app.querySelector("[data-desktop-scale].is-desktop-stage"));
    const effectiveWidth = isDesktopStage ? 1536 : window.innerWidth;
    const showGuide = isParentGuide ? effectiveWidth >= 1440 : window.scrollY > heroHeight * 0.42;
    const nearBottom = window.scrollY + window.innerHeight >= doc.scrollHeight - 24;
    guide.classList.toggle("is-guide-visible", showGuide || nearBottom);
    if (nearBottom) activate(buttons.length - 1);
  };
  guideScrollHandler();
  window.addEventListener("scroll", guideScrollHandler, { passive: true });

  if (!("IntersectionObserver" in window)) return;
  guideObserver = new IntersectionObserver(
    (entries) => {
      if (Date.now() < guideClickLockUntil) return;
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top))[0];
      if (!visible) return;
      activate(Number(visible.target.dataset.guideSection || 0));
    },
    { threshold: 0.08, rootMargin: "-18% 0px -58% 0px" },
  );
  sections.forEach((section) => guideObserver.observe(section));
}

function bindHeroCarousel() {
  if (heroCarouselTimer) {
    window.clearInterval(heroCarouselTimer);
    heroCarouselTimer = null;
  }
  if (heroCarouselVisibilityHandler) {
    document.removeEventListener("visibilitychange", heroCarouselVisibilityHandler);
    heroCarouselVisibilityHandler = null;
  }

  const carousel = app.querySelector("[data-hero-carousel]");
  if (!carousel) return;

  const slides = [...carousel.querySelectorAll("[data-hero-slide]")];
  const intervalMs = Number(carousel.dataset.interval || 6000);
  let activeIndex = Number(carousel.dataset.activeIndex || 0);

  const activate = (nextIndex) => {
    if (!slides.length) return;
    activeIndex = (nextIndex + slides.length) % slides.length;
    const activeSlide = slides[activeIndex];
    const activeRoute = activeSlide.dataset.route || "home";

    carousel.dataset.activeIndex = String(activeIndex);
    carousel.dataset.activeRoute = activeRoute;
    carousel.style.setProperty("--hero-x", "0px");
    carousel.style.setProperty("--hero-y", "0px");
    carousel.style.setProperty("--hero-widget-x", "0px");
    carousel.style.setProperty("--hero-widget-y", "0px");
    carousel.style.setProperty("--hero-micro-x", "0px");
    carousel.style.setProperty("--hero-micro-y", "0px");

    slides.forEach((slide, index) => {
      const active = index === activeIndex;
      slide.classList.toggle("is-active", active);
      slide.setAttribute("aria-hidden", active ? "false" : "true");
    });
  };

  const restartTimer = () => {
    if (heroCarouselTimer) window.clearInterval(heroCarouselTimer);
    heroCarouselTimer = window.setInterval(() => {
      if (!document.hidden) activate(activeIndex + 1);
    }, intervalMs);
  };

  heroCarouselVisibilityHandler = () => {
    if (document.hidden) {
      if (heroCarouselTimer) window.clearInterval(heroCarouselTimer);
      heroCarouselTimer = null;
      return;
    }
    restartTimer();
  };
  document.addEventListener("visibilitychange", heroCarouselVisibilityHandler);

  activate(activeIndex);
  restartTimer();
}

function bindHeroInteraction(route) {
  const heroEl = app.querySelector(".hero");
  if (!heroEl || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const routeTunings = {
    home: [14, -10, 7],
    about: [-10, 12, 5],
    programs: [9, 7, -6],
    progress: [-8, -12, 9],
    diagnosis: [12, -8, -10],
    system: [-12, 8, 12],
    coach: [7, 13, -8],
    faq: [-9, -7, 10],
    parent: [10, 10, -7],
  };

  const setMotion = (x, y) => {
    const activeRoute = heroEl.dataset.activeRoute || route;
    const routeTuning = routeTunings[activeRoute] || routeTunings[route] || [10, 8, 6];
    heroEl.style.setProperty("--hero-x", `${x * routeTuning[0]}px`);
    heroEl.style.setProperty("--hero-y", `${y * routeTuning[1]}px`);
    heroEl.style.setProperty("--hero-widget-x", `${x * routeTuning[2]}px`);
    heroEl.style.setProperty("--hero-widget-y", `${y * routeTuning[2]}px`);
    heroEl.style.setProperty("--hero-micro-x", `${x * routeTuning[1]}px`);
    heroEl.style.setProperty("--hero-micro-y", `${y * routeTuning[0]}px`);
  };

  heroEl.addEventListener("pointermove", (event) => {
    const rect = heroEl.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    window.requestAnimationFrame(() => setMotion(x, y));
  });
  heroEl.addEventListener("pointerleave", () => setMotion(0, 0));
}

window.addEventListener("hashchange", render);
render();
