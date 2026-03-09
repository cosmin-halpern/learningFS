import { useState } from "react";

// ─── DATA ──────────────────────────────────────────────────────

const aiRoadmapPhases = [

    //data for each phase of the AI engineering roadmap, including resources and non-negotiables
  {
    num: "01",
    title: "Python & Data Foundations",
    duration: "2–3 months",
    color: "#FF6B35",
    summary: "Get fluent in Python before touching ML. The goal is velocity — you should be able to prototype any idea in Python before reaching for a library.",
    nonneg: "Automate the Boring Stuff — finish it before touching anything else. It's yours, it's free, and it's better than Udemy for your background.",
    resources: [
      { label: "Pragmatic Thinking & Learning", sub: "STABLE BET · Andy Hunt · YOU OWN THIS · read before starting · about how developers actually build mental models · 2 hours well spent", type: "Book", url: "https://pragprog.com/titles/ahptl/pragmatic-thinking-and-learning/" },
      { label: "Automate the Boring Stuff with Python", sub: "STABLE BET · Al Sweigart · YOU OWN THIS · START HERE · task-driven from page one · free at automatetheboringstuff.com", type: "Book", url: "https://automatetheboringstuff.com/" },
      { label: "Fluent Python", sub: "Luciano Ramalho · O'Reilly", type: "Book", url: "https://www.oreilly.com/library/view/fluent-python-2nd/9781492056348/" },
      { label: "Kaggle Learn", sub: "Free · Pandas, SQL, Viz", type: "Free", url: "https://www.kaggle.com/learn" },
    ],
  },
  {
    num: "02",
    title: "Math & ML Fundamentals",
    duration: "3–4 months",
    color: "#FFD166",
    summary: "Enough math to understand what models are doing. Enough ML to build and evaluate your own. You don't need a PhD — you need solid intuition.",
    nonneg: "Hands-On ML + fast.ai (do both, they're complementary)",
    resources: [
      { label: "ML Specialization", sub: "STABLE BET · Andrew Ng · Coursera · audit free · start here — best ML foundation that exists", type: "Course", url: "https://www.coursera.org/specializations/machine-learning-introduction" },
      { label: "Hands-On ML", sub: "STABLE BET · Aurélien Géron · O'Reilly · buy the book · best practical ML reference · do in parallel with Ng", type: "Book", url: "https://www.oreilly.com/library/view/hands-on-machine-learning/9781098125967/" },
      { label: "fast.ai", sub: "STABLE BET · course.fast.ai · top-down complement to Ng · completely free", type: "Free", url: "https://course.fast.ai/" },
      { label: "Math for ML Specialization", sub: "STABLE BET · Imperial College · Coursera · audit free · do after Ng, not before — you need context first", type: "Course", url: "https://www.coursera.org/specializations/mathematics-machine-learning" },
    ],
  },
  {
    num: "03",
    title: "Deep Learning & Neural Nets",
    duration: "2–3 months",
    color: "#06D6A0",
    summary: "Build from scratch before using libraries. Karpathy's philosophy: if you can implement it, you own it. PyTorch is the standard — learn it properly.",
    nonneg: "Karpathy Zero to Hero — every video, every exercise",
    resources: [
      { label: "Deep Learning Specialization", sub: "Andrew Ng · Coursera", type: "Course", url: "https://www.coursera.org/specializations/deep-learning" },
      { label: "Zero to Hero", sub: "Andrej Karpathy · YouTube free", type: "Free", url: "https://karpathy.ai/zero-to-hero.html" },
      { label: "The Deep Learning Book", sub: "Goodfellow et al. · free online", type: "Free", url: "https://www.deeplearningbook.org/" },
      { label: "Anthropic Docs", sub: "STABLE BET · docs.anthropic.com · free · read every page once you finish Karpathy — this is your actual stack", type: "Free", url: "https://docs.anthropic.com/" },
    ],
  },
  {
    num: "04",
    title: "LLMs & Generative AI",
    duration: "2–3 months",
    color: "#118AB2",
    summary: "You already ship with the Claude API. This phase goes deeper — prompt engineering, RAG, function calling, agents, evals. You're building the knowledge behind what you've already been using intuitively.",
    nonneg: "DeepLearning.AI short courses — pick 4, finish them",
    resources: [
      { label: "Anthropic Cookbook", sub: "CURRENT BEST · github.com/anthropics/anthropic-cookbook · free · practical code examples for everything you'll actually build", type: "Free", url: "https://github.com/anthropics/anthropic-cookbook" },
      { label: "AI Agents in LangGraph", sub: "CURRENT BEST · DeepLearning.AI · free · best practical agents course available", type: "Free", url: "https://learn.deeplearning.ai/courses/ai-agents-in-langgraph" },
      { label: "AI Engineering", sub: "Chip Huyen · O'Reilly 2024", type: "Book", url: "https://www.oreilly.com/library/view/ai-engineering/9781098166298/" },
      { label: "Prompt Engineering for Devs", sub: "DeepLearning.AI · free", type: "Free", url: "https://learn.deeplearning.ai/courses/chatgpt-prompt-eng-for-devs" },
    ],
  },
  {
    num: "05",
    title: "MLOps & Production AI",
    duration: "2–3 months",
    color: "#EF476F",
    summary: "Your QA background is your edge here. Production AI is about reliability, monitoring, versioning, and catching failures — exactly what you do for a living. Most ML engineers skip this phase.",
    nonneg: "Designing ML Systems — read cover to cover",
    resources: [
      { label: "MLOps Specialization", sub: "DeepLearning.AI · Coursera", type: "Course", url: "https://www.coursera.org/specializations/machine-learning-engineering-for-production-mlops" },
      { label: "Full Stack Deep Learning", sub: "UC Berkeley · free", type: "Free", url: "https://fullstackdeeplearning.com/course/" },
      { label: "Designing ML Systems", sub: "Chip Huyen · O'Reilly", type: "Book", url: "https://www.oreilly.com/library/view/designing-machine-learning/9781098107956/" },
      { label: "Weights & Biases Courses", sub: "CURRENT BEST · wandb.ai/courses · free · LLMOps + experiment tracking courses", type: "Free", url: "https://www.wandb.courses/" },
    ],
  },
  {
    num: "06",
    title: "Specialize & Ship",
    duration: "Ongoing",
    color: "#B983FF",
    summary: "Pick a lane and go deep. Agents, RAG systems, evals, fine-tuning, multimodal. The AI field rewards specialists with breadth, not generalists who skimmed everything.",
    nonneg: "Ship something real — Competary's AI features count",
    resources: [
      { label: "Braintrust", sub: "CURRENT BEST · braintrustdata.com · AI eval platform · free tier · purpose-built for LLM evals · works with Anthropic API", type: "Free", url: "https://www.braintrustdata.com/" },
      { label: "LlamaIndex Docs", sub: "RAG & agents framework", type: "Free", url: "https://docs.llamaindex.ai/" },
      { label: "Full Stack Deep Learning", sub: "STABLE BET · fullstackdeeplearning.com · free · end-to-end ML product thinking · bridges theory to shipping", type: "Free", url: "https://fullstackdeeplearning.com/course/" },
      { label: "Latent Space Podcast", sub: "State of AI engineering", type: "Free", url: "https://www.latent.space/" },
    ],
  },
];

const fsRoadmapPhases = [
  {
    num: "01",
    title: "JavaScript Mastery",
    duration: "2–3 months",
    color: "#F7B731",
    summary: "Modern JS is a different language from what most tutorials show. Go deep on closures, async, prototypes, and TypeScript before touching any framework. This phase is the foundation everything else builds on.",
    nonneg: "YDKJS books 1–3 + JavaScript: The Hard Parts — do both, in that order",
    resources: [
      { label: "JavaScript: The Hard Parts v2", sub: "STABLE BET · Will Sentance · Frontend Masters · paid · best course for JS mental models", type: "Course", url: "https://frontendmasters.com/courses/javascript-hard-parts-v2/" },
      { label: "Total TypeScript", sub: "CURRENT BEST · Matt Pocock · totaltypescript.com · free tutorials + paid workshops · the best TS resource available", type: "Course", url: "https://www.totaltypescript.com/tutorials" },
      { label: "You Don't Know JS", sub: "Kyle Simpson · free on GitHub", type: "Book", url: "https://github.com/getify/You-Dont-Know-JS" },
      { label: "JavaScript & jQuery", sub: "STABLE BET · Jon Duckett · YOU OWN THIS · use as visual companion when concepts don't click in YDKJS · Duckett's layout is uniquely good for visual learners", type: "Book", url: "https://www.amazon.com/JavaScript-JQuery-Interactive-Front-End-Development/dp/1118531647" },
    ],
  },
  {
    num: "02",
    title: "React & Modern Frontend",
    duration: "2–3 months",
    color: "#45AAF2",
    summary: "React 18, Next.js App Router, Server Components, Suspense. The goal is understanding WHY things work — not just that they do. Most devs skip this and stay stuck forever.",
    nonneg: "Epic React by Kent C. Dodds — every workshop, every exercise",
    resources: [
      { label: "React – The Complete Guide", sub: "Udemy · Maximilian Schwarzmüller", type: "Course", url: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/" },
      { label: "Next.js & React – Complete Guide", sub: "Udemy · Maximilian Schwarzmüller", type: "Course", url: "https://www.udemy.com/course/nextjs-react-the-complete-guide/" },
      { label: "TanStack Query Docs", sub: "CURRENT BEST · tanstack.com · server state management · every real React app needs this · free", type: "Free", url: "https://tanstack.com/query/latest/docs/framework/react/overview" },
      { label: "React Official Docs", sub: "STABLE BET · react.dev · the new interactive docs are genuinely excellent · free · start here before any paid course", type: "Free", url: "https://react.dev/learn" },
    ],
  },
  {
    num: "03",
    title: "Backend & APIs",
    duration: "2–3 months",
    color: "#2ECC71",
    summary: "Build APIs you'd actually trust in production. Node, Express, tRPC, auth patterns, and the design principles behind REST. Understanding the server side transforms how you think about the whole stack.",
    nonneg: "Node.js Complete Guide (Schwarzmüller) — the long one, don't skip the auth sections",
    resources: [
      { label: "Node.js: The Complete Guide", sub: "Udemy · Maximilian Schwarzmüller", type: "Course", url: "https://www.udemy.com/course/nodejs-the-complete-guide/" },
      { label: "API Design in Node.js", sub: "STABLE BET · Scott Moss · Frontend Masters · paid · best course for REST API architecture patterns", type: "Course", url: "https://frontendmasters.com/courses/api-design-nodejs-v4/" },
      { label: "Zod Docs", sub: "CURRENT BEST · zod.dev · runtime validation · non-negotiable for any production API · free", type: "Free", url: "https://zod.dev/" },
      { label: "Head First Design Patterns", sub: "STABLE BET · Freeman & Robson · YOU OWN THIS (2nd Ed.) · read Chapters 1–5 during this phase · patterns transfer directly to Node/Express architecture", type: "Book", url: "https://www.oreilly.com/library/view/head-first-design/9781492077992/" },
    ],
  },
  {
    num: "04",
    title: "Databases & Data Layer",
    duration: "1–2 months",
    color: "#A55EEA",
    summary: "Postgres, Prisma, Supabase, Redis. Writing SQL that doesn't embarrass you in code review. Understanding what your ORM is doing under the hood so you can optimise when it matters.",
    nonneg: "Complete SQL & Databases Bootcamp — do every Postgres-specific section",
    resources: [
      { label: "Complete SQL & Databases Bootcamp", sub: "Udemy · Zero to Mastery", type: "Course", url: "https://www.udemy.com/course/complete-sql-databases-bootcamp-zero-to-mastery/" },
      { label: "Prisma Docs", sub: "prisma.io · official, free", type: "Free", url: "https://www.prisma.io/docs/getting-started" },
      { label: "Learning SQL", sub: "Alan Beaulieu · O'Reilly", type: "Book", url: "https://www.oreilly.com/library/view/learning-sql-3rd/9781492057604/" },
      { label: "Supabase Docs & Tutorials", sub: "supabase.com · free", type: "Free", url: "https://supabase.com/docs" },
    ],
  },
  {
    num: "05",
    title: "DevOps & Deployment",
    duration: "1–2 months",
    color: "#FF6B6B",
    summary: "Docker, CI/CD, cloud deployment, and monitoring. The difference between a side project and a real product. Your CI/CD background is a head start — this phase formalises it.",
    nonneg: "Docker and Kubernetes: The Complete Guide — the best Docker course available, do it fully",
    resources: [
      { label: "Docker for Web Developers", sub: "CURRENT BEST · Bret Fisher · Udemy · €13-15 on sale · Docker without the K8s overhead — right level for freelance/SaaS", type: "Course", url: "https://www.udemy.com/course/docker-mastery/" },
      { label: "Test-Driven Development", sub: "STABLE BET · Kent Beck · YOU OWN THIS · read during this phase · TDD + CI/CD together is the full quality picture", type: "Book", url: "https://www.amazon.com/Test-Driven-Development-Kent-Beck/dp/0321146530" },
      { label: "The Art of Unit Testing", sub: "STABLE BET · Roy Osherove · YOU OWN THIS (3rd Ed.) · read alongside TDD Beck · covers JS/TS testing patterns directly applicable to your stack", type: "Book", url: "https://www.artofunittesting.com/" },
      { label: "Vercel Docs", sub: "vercel.com/docs · free", type: "Free", url: "https://vercel.com/docs" },
    ],
  },
  {
    num: "06",
    title: "AI-Native Development",
    duration: "Ongoing",
    color: "#FD9644",
    summary: "The highest-value full-stack engineers in 2025–2030 will be those who ship AI-powered products fast. Vercel AI SDK, RAG pipelines, agents, vector databases. This is where full-stack and AI engineering merge.",
    nonneg: "AI Engineering by Chip Huyen — read cover to cover, it bridges both worlds perfectly",
    resources: [
      { label: "Vercel AI SDK Docs", sub: "sdk.vercel.ai · free", type: "Free", url: "https://sdk.vercel.ai/docs" },
      { label: "LangChain for LLM Apps", sub: "DeepLearning.AI · free", type: "Free", url: "https://learn.deeplearning.ai/courses/langchain" },
      { label: "AI Engineering", sub: "Chip Huyen · O'Reilly 2024", type: "Book", url: "https://www.oreilly.com/library/view/ai-engineering/9781098166298/" },
      { label: "Playwright Docs", sub: "CURRENT BEST · playwright.dev · E2E testing · free · the standard for modern web testing — your QA background makes this a superpower", type: "Free", url: "https://playwright.dev/docs/intro" },
    ],
  },
];

const aiCurriculumProjectPhases = [
  {
    id: 1,
    phase: "Phase 01",
    title: "Python & Data Foundations",
    color: "#00E5FF",
    intro: "Every task uses pure Python — no ML libraries yet. The goal is to get completely comfortable with the language before adding complexity. Tasks are tied to data you already work with.",
    tasks: [
      {
        id: "01-01",
        title: "Parse and analyse your Invoysr invoice data",
        difficulty: "Warm-up",
        time: "1–2h",
        what: "Export or mock 20–30 invoice records as a JSON file. Write a Python script that loads them, calculates total revenue per month, finds the highest-value invoice, and prints a simple text summary.",
        why: "You already understand invoice data from building Invoysr. Using familiar data removes the mental overhead of learning Python syntax AND a new domain at the same time.",
        output: "analyse_invoices.py that prints a clean monthly revenue breakdown and top invoice to the terminal.",
        skills: ["JSON parsing", "dictionaries", "list comprehensions", "datetime", "sorted()"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
      {
        id: "01-02",
        title: "Build a CSV exporter for Invoysr",
        difficulty: "Beginner",
        time: "2h",
        what: "Write a Python script that takes a list of invoice dictionaries and exports them to a properly formatted CSV. Include headers, handle missing fields gracefully, and format currency values correctly.",
        why: "CSV export is something Invoysr's users actually need. You're solving a real product problem while learning Python's csv module and data handling.",
        output: "export_invoices.py that produces a clean invoices.csv file ready to open in Excel.",
        skills: ["csv module", "file I/O", "string formatting", "error handling", "None handling"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
      {
        id: "01-03",
        title: "Scrape competitor pricing with BeautifulSoup",
        difficulty: "Intermediate",
        time: "3–4h",
        what: "Pick 2–3 SaaS pricing pages (your actual competitors or any public ones). Use requests + BeautifulSoup to extract plan names and prices. Store results in a JSON file with a timestamp.",
        why: "This is literally what Competary does under the hood before Firecrawl. Understanding raw scraping first means you'll use Firecrawl intelligently instead of blindly.",
        output: "scraper.py that produces competitors.json with structured pricing data and a scraped_at timestamp.",
        skills: ["requests", "BeautifulSoup", "HTML parsing", "JSON", "data structuring"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
      {
        id: "01-04",
        title: "Build a diff detector for scraped pages",
        difficulty: "Intermediate",
        time: "2–3h",
        what: "Extend your scraper. Run it twice on the same page (or mock two versions of the HTML). Use Python's difflib to detect what changed between runs. Print only the lines that are new or removed.",
        why: "Diffing is the core logic of Competary's change detection. Understanding it at the Python level before wrapping it in an API means you'll design it properly.",
        output: "diff_detector.py that takes two HTML strings and outputs a clean list of added/removed content.",
        skills: ["difflib", "string comparison", "data structures", "text processing"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
      {
        id: "01-05",
        title: "Analyse Trovaly influencer data with Pandas",
        difficulty: "Intermediate",
        time: "3h",
        what: "Create a mock dataset of 50 influencers (name, platform, followers, engagement_rate, niche). Load it with Pandas. Find: top 10 by engagement, average followers per niche, correlation between followers and engagement rate.",
        why: "Pandas DataFrames are how ML engineers think about data. Using Trovaly's domain means you're building intuition for a product you own.",
        output: "analyse_influencers.py with 3 clear outputs: top 10 table, niche averages, and a correlation value.",
        skills: ["Pandas", "DataFrame", "groupby", "sort_values", "correlation"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
    ],
  },
  {
    id: 2,
    phase: "Phase 02",
    title: "Math & ML Fundamentals",
    color: "#CCFF00",
    intro: "No deep math required. Each task builds just enough intuition to understand what ML models are actually doing. Grounded in data from your products.",
    tasks: [
      {
        id: "02-01",
        title: "Predict churn risk for Invoysr users",
        difficulty: "Beginner",
        time: "3–4h",
        what: "Create a mock dataset of 100 Invoysr users with features: days_since_last_login, invoices_created_last_month, subscription_tier, churned (0/1). Train a logistic regression model with scikit-learn. Print accuracy and which features matter most.",
        why: "Churn prediction is something you'd actually want for Invoysr. Building it on fake-but-realistic data teaches ML concepts without the abstract toy examples.",
        output: "churn_model.py with model accuracy score and a ranked list of feature importances.",
        skills: ["scikit-learn", "logistic regression", "train/test split", "feature importance", "accuracy score"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
      {
        id: "02-02",
        title: "Cluster Trovaly influencers by behaviour",
        difficulty: "Beginner",
        time: "3h",
        what: "Take your Trovaly influencer dataset from Phase 1. Use KMeans clustering to group them into 3–4 segments. Label each cluster with a human-readable name based on the centroid values (e.g. 'Micro High-Engagement', 'Mega Low-Engagement').",
        why: "Clustering is unsupervised learning — you don't tell it the answer. Understanding this distinction is fundamental to knowing which ML technique to reach for.",
        output: "cluster_influencers.py that prints each cluster's label, size, and average stats.",
        skills: ["KMeans", "unsupervised learning", "cluster analysis", "Pandas", "matplotlib basics"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
      {
        id: "02-03",
        title: "Visualise Competary pricing trends over time",
        difficulty: "Beginner",
        time: "2–3h",
        what: "Mock 6 months of pricing data for 4 competitors (one price point per month, with some changes). Use matplotlib to plot a line chart showing price evolution over time. Add annotations for the months where a price changed.",
        why: "Visualisation is how you validate ML results and communicate findings. Competary's dashboard will need exactly this chart.",
        output: "pricing_trends.py that saves a clean chart as pricing_chart.png.",
        skills: ["matplotlib", "line charts", "annotations", "time series", "data visualisation"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
      {
        id: "02-04",
        title: "Build a simple pricing anomaly detector",
        difficulty: "Intermediate",
        time: "3–4h",
        what: "Use your 6-month pricing dataset. Apply a simple statistical anomaly detection approach (Z-score or IQR) to flag price changes that are unusually large. Print: 'Competitor X had an unusual price change in Month Y: +$40 (3.2 standard deviations above mean)'.",
        why: "Anomaly detection is a core ML use case and directly maps to Competary's alert system. You're designing the feature's logic before building the product.",
        output: "anomaly_detector.py with clear output flagging which changes are statistically unusual.",
        skills: ["statistics", "Z-score", "numpy", "anomaly detection", "threshold logic"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
      {
        id: "02-05",
        title: "Train a niche classifier for Trovaly",
        difficulty: "Intermediate",
        time: "4h",
        what: "Create a dataset of 200 mock influencer bios labelled by niche (fitness, tech, food, travel, fashion). Use a TF-IDF vectoriser + Naive Bayes classifier to predict the niche from the bio text. Test it on 5 new bios you write yourself.",
        why: "Text classification is the foundation of NLP. Trovaly's influencer categorisation could use exactly this. Building it yourself means you'll understand what LLMs replaced and why.",
        output: "niche_classifier.py with accuracy score and predictions for your 5 test bios.",
        skills: ["TF-IDF", "Naive Bayes", "text classification", "scikit-learn pipeline", "NLP basics"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
    ],
  },
  {
    id: 3,
    phase: "Phase 03",
    title: "Deep Learning & Neural Nets",
    color: "#FF6B6B",
    intro: "Build things from scratch before using frameworks. Karpathy's approach — understanding what PyTorch is doing under the hood — is the whole point of this phase.",
    tasks: [
      {
        id: "03-01",
        title: "Implement backpropagation by hand",
        difficulty: "Intermediate",
        time: "4–5h",
        what: "Following Karpathy's micrograd approach, implement a Value class that supports +, *, tanh operations and backward(). Build a tiny 2-layer neural net with it. Train it to learn XOR (the classic non-linear problem).",
        why: "If you can implement backprop manually, you will never be confused by gradient descent again. Every neural network — including GPT — runs on this exact mechanism.",
        output: "micrograd.py with a Value class and a tiny net that correctly learns XOR after training.",
        skills: ["backpropagation", "chain rule", "computational graph", "gradient descent", "autograd"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
      {
        id: "03-02",
        title: "Build a character-level name generator",
        difficulty: "Intermediate",
        time: "4–5h",
        what: "Following Karpathy's makemore tutorial, build a bigram model that learns from a list of names and generates new ones. Start with a simple lookup table, then upgrade to a small MLP. Generate 10 new plausible-sounding names.",
        why: "Language models predict the next token. This simple name generator is exactly the same architecture as GPT — just massively smaller. Understanding this scales directly to LLM engineering.",
        output: "namegen.py that prints 10 generated names that sound plausible (not random gibberish).",
        skills: ["bigram model", "MLP", "PyTorch basics", "embeddings", "sampling"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
      {
        id: "03-03",
        title: "Train a sentiment classifier on Trovaly reviews",
        difficulty: "Intermediate",
        time: "4h",
        what: "Create 200 mock brand collaboration reviews (positive/negative). Build a simple LSTM text classifier in PyTorch. Train it, evaluate accuracy, and test it on 5 reviews you write yourself — 3 obvious and 2 ambiguous.",
        why: "Trovaly could flag negative brand sentiment automatically. Building the classifier yourself means you understand why transformers replaced LSTMs, which matters when you're choosing AI approaches.",
        output: "sentiment_classifier.py with training curve, final accuracy, and predictions for your 5 test reviews.",
        skills: ["LSTM", "text classification", "PyTorch training loop", "embeddings", "evaluation"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
      {
        id: "03-04",
        title: "Replicate a real paper: build a transformer attention head",
        difficulty: "Advanced",
        time: "5–6h",
        what: "Implement a single self-attention head from scratch in PyTorch following 'Attention Is All You Need'. No libraries — just matrix multiplications. Feed it a sequence of 5 tokens and verify the attention weights sum to 1.",
        why: "Every LLM you will ever work with is built on this. Understanding the QKV mechanism at the matrix level is the single most important technical concept in AI engineering.",
        output: "attention.py with a SelfAttention class, a forward pass on a toy sequence, and printed attention weights.",
        skills: ["self-attention", "Q K V matrices", "softmax", "scaled dot-product", "PyTorch matmul"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
      {
        id: "03-05",
        title: "Fine-tune a small model on Competary descriptions",
        difficulty: "Advanced",
        time: "5–6h",
        what: "Use HuggingFace's distilbert-base-uncased and fine-tune it on a small dataset of SaaS product descriptions labelled by category (analytics, payments, CRM, etc). Use the Trainer API. Test it on 3 new descriptions.",
        why: "Fine-tuning is one of the most in-demand AI engineering skills. Using SaaS product data connects directly to what Competary does — categorising competitors by type.",
        output: "Fine-tuned model saved locally + classifier.py that predicts category for new descriptions.",
        skills: ["HuggingFace Trainer", "fine-tuning", "tokenisation", "transfer learning", "model evaluation"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
    ],
  },
  {
    id: 4,
    phase: "Phase 04",
    title: "LLMs & Generative AI",
    color: "#B983FF",
    intro: "This is where your SaaS builder background becomes a direct advantage. You already ship with the Anthropic API. These tasks go deeper into the patterns that make LLM products reliable.",
    tasks: [
      {
        id: "04-01",
        title: "Build a structured competitor analysis prompt",
        difficulty: "Beginner",
        time: "2–3h",
        what: "Write a prompt that takes raw text from a competitor's About page and pricing page and returns a structured JSON object: { positioning, target_customer, pricing_model, key_features[], weaknesses[] }. Test on 3 real SaaS companies. Iterate the prompt until the JSON is consistently valid.",
        why: "Prompt engineering for structured outputs is the foundation of every reliable LLM feature. If your prompt produces inconsistent JSON, your product breaks.",
        output: "prompt_engineer.py that hits the Claude API and reliably returns valid JSON for any SaaS about page.",
        skills: ["prompt engineering", "structured outputs", "JSON validation", "Claude API", "iteration"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
      {
        id: "04-02",
        title: "Build a multi-step analysis chain for Competary",
        difficulty: "Intermediate",
        time: "3–4h",
        what: "Chain 3 Claude calls: (1) extract raw facts from competitor page, (2) identify strategic positioning from those facts, (3) generate a recommended response for your product. Each step's output feeds the next as context.",
        why: "Single prompts hit a ceiling. Chaining is how you build complex AI reasoning. This is the architecture behind every serious LLM product.",
        output: "analysis_chain.py that takes a URL and produces a 3-section analysis report via 3 sequential API calls.",
        skills: ["prompt chaining", "context passing", "multi-step reasoning", "Claude API", "output parsing"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
      {
        id: "04-03",
        title: "Add memory to a Competary research session",
        difficulty: "Intermediate",
        time: "3h",
        what: "Build a CLI tool where you can ask questions about competitors across multiple turns. The conversation history is maintained and passed with each new message so Claude remembers what you discussed earlier in the session.",
        why: "Stateless API calls forget everything. Understanding how to manage conversation memory manually is what separates toy demos from real chat products.",
        output: "research_chat.py — a CLI where you can ask 5 follow-up questions and Claude remembers context throughout.",
        skills: ["conversation history", "message array management", "context window", "Claude API", "stateful CLI"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
      {
        id: "04-04",
        title: "Build a Competary digest writer with tone control",
        difficulty: "Intermediate",
        time: "3–4h",
        what: "Given a list of competitor changes (mock data), generate a weekly digest email in 3 different tones: Executive Summary (2 sentences), Analyst Report (structured bullets), and Casual Slack Update. Same data, 3 prompts, 3 completely different outputs.",
        why: "Tone control is a product feature. Competary could let users choose their digest style. This teaches you how system prompts and user prompts interact.",
        output: "digest_writer.py that prints all 3 versions side by side for the same input data.",
        skills: ["system prompts", "tone control", "prompt structure", "Claude API", "content generation"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
      {
        id: "04-05",
        title: "Implement tool use / function calling for Competary",
        difficulty: "Advanced",
        time: "4–5h",
        what: "Define 3 tools for Claude: get_competitor_pricing(name), get_recent_changes(days), compare_competitors(name_a, name_b). Build a loop where Claude decides which tool to call based on a natural language question. Return results back to Claude and get a final answer.",
        why: "Tool use is how LLM agents work. Every AI product beyond simple Q&A uses this pattern. Building it manually means you'll use LangChain and the Vercel AI SDK with full understanding.",
        output: "agent.py where asking 'How has Competitor X's pricing changed vs Competitor Y?' triggers the right tool calls automatically.",
        skills: ["tool use", "function calling", "agent loop", "Claude API", "tool result handling"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
    ],
  },
  {
    id: 5,
    phase: "Phase 05",
    title: "MLOps & Production AI",
    color: "#FF9F43",
    intro: "Your QA mindset is your biggest asset here. Thinking about failure modes, monitoring, and reliability is exactly what MLOps requires. These tasks build Competary's AI infrastructure.",
    tasks: [
      {
        id: "05-01",
        title: "Build an eval suite for Competary's AI outputs",
        difficulty: "Beginner",
        time: "3–4h",
        what: "Write 20 test cases for your competitor analysis prompt: 10 where the output should be positive quality, 5 edge cases (empty page, paywall, foreign language), 5 intentional bad inputs. Score each output on structure validity, completeness, and hallucination risk.",
        why: "Evals are the QA of AI. Your QA background makes this natural. This is the most underrated AI engineering skill and directly leverages what you already do for a living.",
        output: "eval_suite.py that runs all 20 cases, scores each, and prints a pass/fail report with a total score.",
        skills: ["LLM evaluation", "test case design", "scoring rubrics", "edge cases", "hallucination detection"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
      {
        id: "05-02",
        title: "Add prompt versioning to Competary",
        difficulty: "Beginner",
        time: "2–3h",
        what: "Store your prompts in a prompts/ folder as versioned text files (e.g. competitor_analysis_v1.txt, v2.txt). Write a prompt loader that picks the version from an environment variable. Run your eval suite against v1 and v2 and compare scores.",
        why: "Prompt changes break products silently. Versioning prompts like code means you can roll back when a prompt update causes regressions.",
        output: "prompt_loader.py + two prompt versions + an eval comparison showing which version scores better.",
        skills: ["prompt versioning", "environment variables", "A/B testing prompts", "regression testing", "config management"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
      {
        id: "05-03",
        title: "Build a RAG pipeline for Competary from scratch",
        difficulty: "Intermediate",
        time: "5–6h",
        what: "Scrape 3 competitor websites (About + Pricing + Features pages). Chunk the text into 500-token segments. Generate embeddings with the Anthropic or OpenAI embeddings API. Store in a local ChromaDB. Then ask 5 questions and retrieve the most relevant chunks before sending to Claude.",
        why: "RAG is the most in-demand AI engineering skill right now. Building it without LangChain first means you understand every component — chunking, embedding, retrieval — instead of just calling a function.",
        output: "rag_pipeline.py where asking 'What does Competitor X charge for API access?' returns an accurate, cited answer.",
        skills: ["chunking", "embeddings", "ChromaDB", "vector search", "retrieval", "context injection"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
      {
        id: "05-04",
        title: "Add latency and cost tracking to every Claude call",
        difficulty: "Intermediate",
        time: "2–3h",
        what: "Wrap every Claude API call in Competary with a decorator that logs: timestamp, prompt tokens, completion tokens, latency (ms), estimated cost, and prompt version. Write logs to a JSONL file. Add a script that summarises daily spend and slowest calls.",
        why: "Claude API costs add up fast at scale. You need to know which features are expensive before you hit a surprise invoice. This is production-grade thinking.",
        output: "claude_wrapper.py with logging decorator + analyse_costs.py that prints a daily cost and latency summary.",
        skills: ["decorators", "token counting", "cost estimation", "JSONL logging", "performance monitoring"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
      {
        id: "05-05",
        title: "Deploy Competary's AI pipeline to production",
        difficulty: "Advanced",
        time: "5–6h",
        what: "Package your RAG pipeline and analysis chain into a FastAPI app with 2 endpoints: POST /analyse (takes a competitor URL, returns structured analysis) and POST /ask (takes a question, returns RAG-backed answer). Dockerise it. Deploy to Railway. Add a /health endpoint.",
        why: "Notebooks don't make money. APIs do. This is the step from ML engineer to AI engineer — wrapping your models in something that ships.",
        output: "A live Railway URL where POST /analyse returns a real competitor analysis for any SaaS URL you pass it.",
        skills: ["FastAPI", "Docker", "Railway deployment", "async endpoints", "production RAG"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
    ],
  },
  {
    id: 6,
    phase: "Phase 06",
    title: "Specialize & Build Portfolio",
    color: "#20BF6B",
    intro: "You're an AI engineer now. These tasks ship real features to real products and establish your public presence. The goal is to have something you can point to in every conversation.",
    tasks: [
      {
        id: "06-01",
        title: "Ship Competary's AI change detection publicly",
        difficulty: "Intermediate",
        time: "1 week",
        what: "Take everything from Phases 4 and 5 — scraping, diffing, Claude analysis, RAG, digest emails — and wire it all together in the actual Competary product. A user adds a competitor URL. The system scrapes it, detects changes, and sends a digest. End to end.",
        why: "Features in notebooks are not features. Shipping this publicly — even to 5 beta users — is the difference between 'I learned AI' and 'I built an AI product'.",
        output: "competary.com with a working competitor tracking feature. At least one real user who isn't you.",
        skills: ["full pipeline integration", "product thinking", "user feedback", "bug fixing in production"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
      {
        id: "06-02",
        title: "Build and publish an AI eval framework",
        difficulty: "Intermediate",
        time: "3–4 days",
        what: "Take your eval suite from Phase 5 and generalise it into a small open-source Python library. It should let any developer define test cases, score LLM outputs on custom criteria, and generate a report. Publish to PyPI. Write a short README.",
        why: "Your QA background makes you uniquely qualified to build eval tooling. Publishing it signals to the industry that you understand AI quality — which is rare and valuable.",
        output: "A pip-installable package on PyPI with a GitHub repo, README, and at least one star that isn't yours.",
        skills: ["library design", "PyPI publishing", "documentation", "open source", "AI evals"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
      {
        id: "06-03",
        title: "Write a technical post: 'How I built Competary's change detector'",
        difficulty: "Beginner",
        time: "1 day",
        what: "Write a 1,000–1,500 word technical blog post explaining how you built the competitor change detection system: what you scrape, how you diff, how you use Claude to summarise changes, and what you learned. Publish on dev.to or your own site.",
        why: "Writing forces clarity. If you can explain it, you understand it. Technical writing is also how you get inbound — developers who read it become users or employers.",
        output: "A published post with a real URL. Share it once on LinkedIn or X.",
        skills: ["technical writing", "explaining AI systems", "content marketing", "personal brand"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
      {
        id: "06-04",
        title: "Add AI features to Trovaly using your new skills",
        difficulty: "Advanced",
        time: "1 week",
        what: "Go back to Trovaly and add 2 AI-powered features using everything you've learned: (1) auto-categorise influencers by niche using embeddings + clustering, (2) generate an AI-written outreach email for each influencer based on their profile and the brand's brief.",
        why: "Applying AI to a product you already shipped proves you can integrate AI into existing systems — which is 90% of what AI engineering jobs actually involve.",
        output: "Two new features live on Trovaly, with a short before/after description of how the product improved.",
        skills: ["embeddings", "clustering", "prompt engineering", "product integration", "API design"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
      {
        id: "06-05",
        title: "Apply for an AI engineering role or land your first AI consulting client",
        difficulty: "Advanced",
        time: "Ongoing",
        what: "Put together your AI portfolio: Competary (live product), your eval library (open source), your technical blog post, and your Trovaly AI features. Apply to 5 AI engineering roles or reach out to 3 companies offering to audit their AI pipeline as a freelance consultant.",
        why: "Everything in this roadmap was preparation for this moment. You have working code, a live product, open source contributions, and writing. That's a stronger portfolio than most people with 'AI Engineer' in their title.",
        output: "Either an interview at an AI-focused company or a paid consulting engagement. Either counts.",
        skills: ["portfolio presentation", "technical interviews", "consulting", "networking", "negotiation"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
    ],
  },
];

const aiCurriculumGenericPhases = [
  {
    id: 1,
    phase: "Phase 01",
    title: "Python & Data Foundations",
    color: "#00E5FF",
    intro: "Pure Python, no ML libraries yet. Build comfort with the language through classic data tasks. Every exercise here is something you'll use repeatedly as an AI engineer.",
    tasks: [
      {
        id: "01-01",
        title: "Build a word frequency counter",
        difficulty: "Warm-up",
        time: "1h",
        what: "Write a Python script that reads any .txt file, cleans the text (lowercase, strip punctuation), and outputs the top 20 most frequent words with their counts. Exclude common stop words (the, a, is, etc.).",
        why: "Word frequency analysis is the foundation of NLP. Before embeddings and transformers, this is how machines 'understood' text. You'll reference this mental model constantly.",
        output: "word_freq.py that prints a clean top-20 table to the terminal for any input file.",
        skills: ["file I/O", "string methods", "Counter", "collections", "text cleaning"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
      {
        id: "01-02",
        title: "Implement a stack, queue, and linked list",
        difficulty: "Beginner",
        time: "2h",
        what: "Implement all three data structures from scratch in Python — no importing collections. Each must support insert, remove, peek/top, and size operations. Write 5 test cases per structure.",
        why: "AI engineers work with queues constantly (job queues, message queues, inference batches). Understanding them at the implementation level removes all confusion about how tools like Redis or Celery work.",
        output: "data_structures.py with all three classes and a test block at the bottom that passes all 15 cases.",
        skills: ["OOP", "classes", "__init__", "methods", "unit testing basics"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
      {
        id: "01-03",
        title: "Write a recursive JSON flattener",
        difficulty: "Beginner",
        time: "2h",
        what: "Write a function that takes a deeply nested JSON object (any depth) and flattens it into a single-level dict with dot-notation keys. E.g. {\"a\": {\"b\": {\"c\": 1}}} → {\"a.b.c\": 1}. Handle arrays too.",
        why: "AI APIs return deeply nested JSON constantly. Being able to flatten, traverse, and extract from arbitrary JSON without thinking is a core production skill.",
        output: "flatten.py with the flatten() function and 6 test cases covering edge cases (empty, arrays, mixed types).",
        skills: ["recursion", "dictionaries", "JSON", "string formatting", "edge case handling"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
      {
        id: "01-04",
        title: "Build a CLI argument parser from scratch",
        difficulty: "Intermediate",
        time: "2–3h",
        what: "Build a simple CLI tool that accepts flags like --input file.csv --output results.json --verbose --limit 100. Parse sys.argv manually first, then refactor to use argparse. Add help text for every argument.",
        why: "Most ML scripts and AI tools are run from the command line. Writing clean CLIs is a professional habit that makes your work usable by others (and your future self).",
        output: "cli_tool.py that parses all flags, validates inputs, and prints a usage guide when run with --help.",
        skills: ["sys.argv", "argparse", "CLI design", "validation", "error messages"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
      {
        id: "01-05",
        title: "Analyse a public dataset with Pandas",
        difficulty: "Intermediate",
        time: "3h",
        what: "Download any free CSV dataset (Kaggle, UCI, or data.gov — e.g. Titanic, Iris, or housing data). Load it with Pandas. Find: missing values per column, top correlations, summary stats per category, and one surprising insight.",
        why: "Exploratory data analysis (EDA) is always the first step in any AI/ML project. You need to understand your data before you can model it.",
        output: "eda.py that prints a structured report: nulls, dtypes, top correlations, and your one insight with supporting numbers.",
        skills: ["Pandas", "describe()", "isnull()", "corr()", "groupby", "EDA"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
    ],
  },
  {
    id: 2,
    phase: "Phase 02",
    title: "Math & ML Fundamentals",
    color: "#CCFF00",
    intro: "Just enough math to understand what models are doing. Every task builds intuition first, then formalises it. No PhD required.",
    tasks: [
      {
        id: "02-01",
        title: "Implement linear regression from scratch",
        difficulty: "Beginner",
        time: "3–4h",
        what: "Build linear regression using only NumPy — no scikit-learn. Implement gradient descent manually. Train it on the Boston Housing or California Housing dataset. Plot the loss curve over epochs.",
        why: "Every neural network is just many linear regressions stacked together. Understanding gradient descent at this level means you'll never be confused by 'loss is not decreasing' again.",
        output: "linear_regression.py with the full training loop, final MSE score, and a saved loss_curve.png.",
        skills: ["NumPy", "gradient descent", "MSE", "vectorisation", "matplotlib"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
      {
        id: "02-02",
        title: "Build a spam classifier with Naive Bayes",
        difficulty: "Beginner",
        time: "3h",
        what: "Use the SMS Spam Collection dataset (free on UCI). Clean the text, vectorise with CountVectorizer, train a Multinomial Naive Bayes classifier, and evaluate with precision, recall, and F1. Test it on 5 messages you write.",
        why: "Text classification is everywhere in AI applications. Naive Bayes is fast, interpretable, and often surprisingly effective — understanding when to use it vs. an LLM is valuable judgment.",
        output: "spam_classifier.py with a classification report and predictions for your 5 test messages.",
        skills: ["scikit-learn", "CountVectorizer", "Naive Bayes", "precision/recall", "F1 score"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
      {
        id: "02-03",
        title: "Visualise how KMeans clustering works",
        difficulty: "Beginner",
        time: "2–3h",
        what: "Generate synthetic 2D data with sklearn.datasets.make_blobs (4 clusters). Run KMeans with k=2, 3, 4, 5. For each k, plot the clusters with different colours and mark the centroids. Also plot the elbow curve (inertia vs k).",
        why: "Seeing clustering visually in 2D builds permanent intuition for what the algorithm is doing. You'll use this mental model when applying clustering to high-dimensional embedding spaces.",
        output: "kmeans_visual.py that saves 4 cluster plots and one elbow_curve.png.",
        skills: ["KMeans", "make_blobs", "inertia", "matplotlib subplots", "elbow method"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
      {
        id: "02-04",
        title: "Implement a decision tree by hand",
        difficulty: "Intermediate",
        time: "4h",
        what: "Build a simple decision tree classifier from scratch using only NumPy and Python. Use information gain (entropy) as the split criterion. Test it on the Iris dataset. Compare your accuracy to sklearn's DecisionTreeClassifier.",
        why: "Decision trees are the foundation of Random Forests and Gradient Boosting. Implementing entropy and information gain yourself makes 'feature importance' and 'overfitting' concrete concepts, not buzzwords.",
        output: "decision_tree.py with your implementation, accuracy comparison, and a printed tree structure.",
        skills: ["entropy", "information gain", "recursion", "tree data structures", "NumPy"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
      {
        id: "02-05",
        title: "Build a recommendation system with cosine similarity",
        difficulty: "Intermediate",
        time: "3–4h",
        what: "Use the MovieLens 100K dataset (free). Build a simple item-based collaborative filter using cosine similarity. Given a movie title, return the top 5 most similar movies. No ML libraries — just NumPy and math.",
        why: "Cosine similarity is used everywhere in AI: semantic search, RAG retrieval, embedding comparisons. Understanding it from scratch means you'll use it correctly in production.",
        output: "recommender.py that accepts any movie title and prints the top 5 recommendations with similarity scores.",
        skills: ["cosine similarity", "NumPy", "dot products", "normalisation", "collaborative filtering"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
    ],
  },
  {
    id: 3,
    phase: "Phase 03",
    title: "Deep Learning & Neural Nets",
    color: "#FF6B9D",
    intro: "Neural networks demystified. You'll build them from scratch before using PyTorch, so the abstraction makes sense instead of feeling like magic.",
    tasks: [
      {
        id: "03-01",
        title: "Build a neural network from scratch with NumPy",
        difficulty: "Intermediate",
        time: "5–6h",
        what: "Implement a 2-layer neural network (input → hidden → output) using only NumPy. Include forward pass, backpropagation, and weight updates with gradient descent. Train it to classify the Iris dataset. Target >90% accuracy.",
        why: "If you can implement backprop by hand, you understand deep learning. This is the single most valuable exercise in this entire curriculum. Do it slowly.",
        output: "neural_net_numpy.py with the full forward/backward pass, training loop, and final accuracy.",
        skills: ["backpropagation", "chain rule", "activation functions", "weight initialisation", "NumPy"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
      {
        id: "03-02",
        title: "Train an image classifier with PyTorch",
        difficulty: "Intermediate",
        time: "4–5h",
        what: "Build a CNN in PyTorch to classify CIFAR-10 images (10 classes). Use 2 conv layers + 2 fully connected layers. Train for 10 epochs. Plot training vs validation loss. Try one improvement (dropout, batch norm, or data augmentation) and measure the effect.",
        why: "CNNs are still foundational even in the transformer era. More importantly, this teaches you the full PyTorch training loop: DataLoader, optimizer, loss, .backward(), .step(). Every model uses this same skeleton.",
        output: "cifar_classifier.py with final test accuracy, saved loss_curve.png, and a written note on your improvement.",
        skills: ["PyTorch", "CNN", "DataLoader", "optimizer", "training loop", "Conv2d"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
      {
        id: "03-03",
        title: "Build a character-level language model",
        difficulty: "Advanced",
        time: "5–6h",
        what: "Following Karpathy's makemore approach, build a bigram and then a simple MLP character-level language model. Train on any text corpus (Shakespeare, names dataset). Generate 10 new samples. Measure cross-entropy loss.",
        why: "Building a language model from scratch is the best way to understand what GPT is actually doing. After this task, 'next token prediction' will mean something real to you.",
        output: "char_lm.py that trains on your corpus and generates 10 coherent-ish text samples with final loss printed.",
        skills: ["character tokenisation", "embeddings", "MLP", "cross-entropy", "text generation", "torch.nn"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
      {
        id: "03-04",
        title: "Implement attention from scratch",
        difficulty: "Advanced",
        time: "4–5h",
        what: "Implement scaled dot-product attention using only PyTorch tensors (no nn.MultiheadAttention). Then implement a single transformer block (attention + feedforward + layer norm). Test it on a toy sequence-to-sequence task.",
        why: "Attention is the core mechanism of every modern LLM. Implementing it yourself means you'll understand 'context window', 'KV cache', and 'attention heads' from first principles — not from blog posts.",
        output: "attention.py with working attention and transformer block, plus a test showing it processes a batch of sequences correctly.",
        skills: ["scaled dot-product attention", "Q/K/V matrices", "softmax", "layer norm", "transformer block"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
      {
        id: "03-05",
        title: "Fine-tune a pre-trained model with HuggingFace",
        difficulty: "Intermediate",
        time: "4h",
        what: "Use HuggingFace Transformers to fine-tune DistilBERT on the IMDb sentiment dataset (positive/negative reviews). Use the Trainer API. Evaluate on the test set. Compare performance to the pre-trained baseline.",
        why: "Fine-tuning is one of the most common tasks in applied AI. Understanding the difference between a frozen base model and a fine-tuned head is essential before working with any foundation model.",
        output: "fine_tune_bert.py with baseline accuracy, fine-tuned accuracy, and a comparison of 5 example predictions.",
        skills: ["HuggingFace", "DistilBERT", "Trainer API", "tokenizer", "fine-tuning", "evaluation"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
    ],
  },
  {
    id: 4,
    phase: "Phase 04",
    title: "LLMs & Generative AI",
    color: "#FF9F43",
    intro: "Working with foundation models in production. Prompting, chaining, tool use, and RAG — the core toolkit of an AI engineer in 2025.",
    tasks: [
      {
        id: "04-01",
        title: "Build a structured data extractor with an LLM",
        difficulty: "Beginner",
        time: "2–3h",
        what: "Use the Anthropic or OpenAI API to extract structured data from unstructured text. Given 10 job listings (copy from any job board), extract: company, role, salary range, required skills, remote/onsite. Output as clean JSON.",
        why: "Structured extraction is one of the highest-value LLM use cases in production. It replaces fragile regex with flexible, reliable parsing — and it's how most real AI pipelines ingest data.",
        output: "extractor.py that processes 10 job listings and saves a clean jobs.json with all fields populated.",
        skills: ["LLM API", "prompt engineering", "JSON mode", "structured output", "error handling"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
      {
        id: "04-02",
        title: "Implement a multi-turn chatbot with memory",
        difficulty: "Beginner",
        time: "3h",
        what: "Build a terminal chatbot using any LLM API. Maintain a conversation history array that grows with each turn. Add a /summarise command that condenses the history into a shorter context when it gets too long. Test with a 20-turn conversation.",
        why: "Context window management is a real production problem. Understanding how conversation history works — and how to compress it — is more useful than any framework abstraction.",
        output: "chatbot.py with a working REPL loop, history management, and the /summarise command that trims the context.",
        skills: ["LLM API", "conversation history", "context management", "summarisation", "REPL"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
      {
        id: "04-03",
        title: "Build a RAG pipeline from scratch",
        difficulty: "Intermediate",
        time: "5–6h",
        what: "Choose any set of documents (5–10 PDFs or text files — could be Wikipedia articles, docs, anything). Chunk them, embed each chunk with a HuggingFace sentence transformer, store in a simple in-memory vector store. At query time, retrieve the top-3 chunks and pass them to an LLM with a grounded prompt. Ask 10 questions and evaluate the answers.",
        why: "RAG is the most deployed AI architecture in enterprise software today. Building it from scratch (no LangChain) means you understand every component and can debug when retrieval breaks.",
        output: "rag_pipeline.py with chunking, embedding, retrieval, and generation steps clearly separated. Q&A log for your 10 questions.",
        skills: ["chunking", "sentence transformers", "cosine similarity", "vector search", "grounded prompting"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
      {
        id: "04-04",
        title: "Implement an LLM agent with tool use",
        difficulty: "Intermediate",
        time: "4–5h",
        what: "Build an agent that can use tools: a calculator, a web search stub, and a get_current_time function. Implement the ReAct loop (Reason → Act → Observe → Reason...) manually without a framework. Test with 5 multi-step questions that require multiple tool calls.",
        why: "Agents are the fastest-growing AI architecture. Understanding the ReAct loop without an abstraction layer means you can build reliable agents instead of hoping LangChain does the right thing.",
        output: "agent.py with the ReAct loop and 3 tools. A test log showing the full reasoning trace for all 5 questions.",
        skills: ["ReAct", "tool use", "function calling", "reasoning loops", "agent design"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
      {
        id: "04-05",
        title: "Evaluate and red-team your own LLM app",
        difficulty: "Intermediate",
        time: "3–4h",
        what: "Take any LLM app you've built (RAG pipeline, chatbot, extractor). Design an evaluation suite: 20 test cases with expected outputs. Score each on accuracy, relevance, and groundedness. Then red-team it — find 5 ways to make it produce wrong or harmful outputs.",
        why: "Evals are what separate junior AI engineers from senior ones. Building a systematic eval suite before shipping is a professional habit that most people skip until something breaks in production.",
        output: "eval_suite.py with 20 test cases, a scoring function, a results summary, and a red-team report (5 failure modes).",
        skills: ["LLM evaluation", "test case design", "scoring", "red-teaming", "hallucination detection"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
    ],
  },
  {
    id: 5,
    phase: "Phase 05",
    title: "MLOps & Production AI",
    color: "#A29BFE",
    intro: "Getting models out of notebooks and into the real world. Serving, monitoring, versioning, and reliability — the unglamorous work that makes AI products actually work.",
    tasks: [
      {
        id: "05-01",
        title: "Package and serve an ML model as an API",
        difficulty: "Beginner",
        time: "3–4h",
        what: "Take any model you've trained (spam classifier, sentiment model, etc.). Wrap it in a FastAPI endpoint: POST /predict accepts JSON input and returns a prediction + confidence. Add input validation with Pydantic. Test with curl and a Python client.",
        why: "Every ML model in production is served via an API. Understanding how to go from a trained model to a working endpoint is the most direct path to shipping AI products.",
        output: "api.py (FastAPI app) + client.py (test script). The API must handle invalid inputs gracefully with proper error codes.",
        skills: ["FastAPI", "Pydantic", "model serving", "REST API", "input validation", "pickle/joblib"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
      {
        id: "05-02",
        title: "Dockerise your ML API",
        difficulty: "Beginner",
        time: "2–3h",
        what: "Write a Dockerfile for your FastAPI ML service. Use a slim Python base image. Include a .dockerignore. Build the image, run it locally, and verify predictions work from inside the container. Then write a docker-compose.yml that adds a Redis cache layer.",
        why: "Every production AI service runs in a container. Building this yourself — rather than clicking a deploy button — means you understand layer caching, image size, and what actually runs in production.",
        output: "Dockerfile + docker-compose.yml + a README with build and run commands. Container must serve predictions correctly.",
        skills: ["Docker", "Dockerfile", "docker-compose", "layer caching", "container networking"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
      {
        id: "05-03",
        title: "Add logging, metrics, and health checks",
        difficulty: "Intermediate",
        time: "3h",
        what: "Extend your FastAPI service with: structured JSON logging (every request logged with timestamp, input, prediction, latency), a /health endpoint that checks model is loaded and returns uptime, and a /metrics endpoint that returns request count and average latency. Use the logging module — no external APM tools.",
        why: "In production, the first question when something breaks is 'what does the log say?' Engineers who build observable systems from day one spend far less time debugging incidents.",
        output: "Updated api.py with logging, /health, and /metrics. A test that fires 20 requests and shows the metrics updating correctly.",
        skills: ["structured logging", "health checks", "metrics collection", "observability", "JSON logs"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
      {
        id: "05-04",
        title: "Detect and handle data drift",
        difficulty: "Intermediate",
        time: "4h",
        what: "Take your trained classifier. Simulate data drift by gradually shifting the input distribution (change feature means by 10%, 20%, 30%). For each level of drift, calculate: prediction confidence distribution, feature distribution shift (KL divergence or Wasserstein distance), and accuracy drop. Build an alert that fires when drift exceeds a threshold.",
        why: "Models degrade silently in production when the real-world data shifts away from training data. Engineers who can detect and measure drift before users notice are invaluable.",
        output: "drift_detector.py that simulates 3 drift levels, outputs a drift report, and triggers an alert at the threshold you set.",
        skills: ["data drift", "KL divergence", "distribution shift", "model monitoring", "alerting"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
      {
        id: "05-05",
        title: "Build a CI/CD pipeline for an ML model",
        difficulty: "Intermediate",
        time: "4–5h",
        what: "Create a GitHub Actions workflow that: runs your test suite on every push, re-trains the model if training data changes, evaluates the new model and blocks merge if accuracy drops below baseline, and publishes a model card (accuracy, dataset size, training date) as a workflow artifact.",
        why: "ML code without CI/CD is a liability. Building this pipeline yourself means you understand what makes ML systems safe to iterate on — and why 'it works on my machine' is not acceptable.",
        output: ".github/workflows/ml_pipeline.yml + eval_gate.py. The pipeline must block on accuracy regression.",
        skills: ["GitHub Actions", "CI/CD", "automated testing", "model gating", "model cards", "YAML"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
    ],
  },
  {
    id: 6,
    phase: "Phase 06",
    title: "Specialise & Portfolio",
    color: "#55EFC4",
    intro: "Five substantial projects that demonstrate AI engineering at a senior level. Each should be something you'd be proud to walk through in a technical interview.",
    tasks: [
      {
        id: "06-01",
        title: "Build a semantic search engine",
        difficulty: "Intermediate",
        time: "6–8h",
        what: "Choose a corpus (Wikipedia subset, Arxiv papers, any public dataset with 1000+ documents). Embed all documents with a sentence transformer. Build a search interface (CLI or simple web UI) that takes a query, embeds it, and returns the top 5 most semantically similar results with scores. Compare semantic results to BM25 (keyword) results on 20 queries.",
        why: "Semantic search is in virtually every modern AI product. This project demonstrates end-to-end understanding: embedding, indexing, retrieval, and evaluation — all the components of a production search system.",
        output: "Semantic search app + comparison report showing where semantic beats keyword and vice versa. Hosted on GitHub with a README.",
        skills: ["sentence transformers", "FAISS/Annoy", "BM25", "search evaluation", "nDCG"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
      {
        id: "06-02",
        title: "Fine-tune an LLM for a specific task",
        difficulty: "Advanced",
        time: "8–10h",
        what: "Pick a task where a fine-tuned small model (Llama 3.1 8B or Mistral 7B) can match or beat GPT-4 prompting: medical Q&A, legal document classification, code review, etc. Create or find a dataset (500+ examples). Fine-tune with QLoRA using HuggingFace + PEFT. Evaluate against both the base model and GPT-4 prompting on 50 held-out examples.",
        why: "Fine-tuning is increasingly valuable as companies want models that are cheaper, faster, and more private than frontier APIs. Demonstrating you can fine-tune and evaluate rigorously is a rare, hireable skill.",
        output: "Fine-tuned model on HuggingFace Hub + evaluation notebook + a write-up comparing all three approaches.",
        skills: ["QLoRA", "PEFT", "HuggingFace Hub", "evaluation design", "quantisation", "LoRA adapters"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
      {
        id: "06-03",
        title: "Build a production-ready AI API with rate limiting and auth",
        difficulty: "Intermediate",
        time: "6–8h",
        what: "Build a FastAPI service that wraps an LLM endpoint with: API key authentication, per-key rate limiting (e.g. 100 requests/hour), request/response logging to a database, a usage dashboard endpoint showing requests and token usage per key, and graceful degradation when the upstream LLM is down.",
        why: "Most AI startups are building exactly this — a wrapper around a foundation model with auth and billing. This project shows you understand the full stack of a real AI product.",
        output: "Production API on GitHub with Docker support, all features working, and a Postman collection or test suite demonstrating each feature.",
        skills: ["FastAPI", "API key auth", "rate limiting", "SQLite/Postgres", "graceful degradation"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
      {
        id: "06-04",
        title: "Build an autonomous research agent",
        difficulty: "Advanced",
        time: "8–10h",
        what: "Build an agent that, given a research question, autonomously: searches the web for relevant sources, reads and summarises each source, identifies contradictions and gaps, and writes a structured report with citations. The agent should run without human intervention and handle errors (dead links, rate limits) gracefully.",
        why: "Autonomous agents are the frontier of AI engineering. This project demonstrates you can build a reliable multi-step agentic system — one that doesn't just work in demos but handles the messiness of the real web.",
        output: "Research agent on GitHub. Run it on 3 different questions and include the 3 generated reports in the repo. Document failure modes and how you handled them.",
        skills: ["agentic loops", "web search", "error recovery", "structured reporting", "citation extraction"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
      {
        id: "06-05",
        title: "Ship a public AI tool and get 100 users",
        difficulty: "Advanced",
        time: "Ongoing",
        what: "Build and launch a small, focused AI tool that solves a real problem. It must be live on the internet (not just a GitHub repo). Get 100 people to actually use it. Document: what you built, how you got users, what broke in production, and what you'd do differently.",
        why: "The difference between an AI engineer and an AI hobbyist is shipping. Getting real users exposes you to problems no tutorial covers: cold starts, unexpected inputs, infrastructure costs, user feedback. This is the most important task in the entire curriculum.",
        output: "Live product with 100 users, a public post-mortem (blog post or Twitter thread), and a technical write-up of lessons learned.",
        skills: ["product thinking", "deployment", "user feedback", "incident response", "growth"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
    ],
  },
];

const fsCurriculumProjectPhases = [
  {
    id: 1,
    phase: "Phase 01",
    title: "JavaScript Mastery",
    color: "#F7B731",
    intro: "Every task uses only vanilla JS — no frameworks. The constraint is the point. You already have Invoysr and Trovaly as reference codebases.",
    tasks: [
      {
        id: "01-01",
        title: "Rewrite one Playwright test in pure JS",
        difficulty: "Warm-up",
        diff_color: "#2ECC71",
        time: "1–2h",
        what: "Pick any existing Playwright test from your QA work. Rewrite the same assertion logic using only vanilla JS — no test runner, just console.log and throw.",
        why: "Forces you to understand what the test framework is doing under the hood. Closures and callbacks will click immediately.",
        output: "A .js file that runs with node script.js and logs PASS or throws on failure.",
        skills: ["closures", "callbacks", "error handling"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
      {
        id: "01-02",
        title: "Build a local invoice number generator",
        difficulty: "Beginner",
        diff_color: "#2ECC71",
        time: "2–3h",
        what: "CLI tool in Node.js. Takes a prefix (e.g. INV) and auto-increments a counter stored in a local JSON file. Running node generate.js outputs INV-0042.",
        why: "Directly useful for Invoysr. Teaches file I/O, JSON parsing, closures, and basic Node modules.",
        output: "generate.js that reads/writes a counter.json and prints the next invoice number.",
        skills: ["Node.js fs module", "JSON", "closures", "CLI args"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
      {
        id: "01-03",
        title: "Implement your own Promise",
        difficulty: "Intermediate",
        diff_color: "#F7B731",
        time: "3–4h",
        what: "Write a MyPromise class from scratch with .then(), .catch(), and .resolve(). It doesn't need to be spec-compliant — just make it work for a basic async chain.",
        why: "If you can build it, you understand it. Every API call in your SaaS products runs on this under the hood.",
        output: "mypromise.js with tests proving .then() chains and .catch() error handling work.",
        skills: ["async JS", "classes", "event loop", "callbacks"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
      {
        id: "01-04",
        title: "Type your Invoysr data models in TypeScript",
        difficulty: "Intermediate",
        diff_color: "#F7B731",
        time: "2–3h",
        what: "Look at the actual data structures Invoysr uses (invoices, users, line items). Write TypeScript interfaces and types for all of them. Add utility types: Partial<Invoice>, a CreateInvoiceDTO, an UpdateInvoiceDTO.",
        why: "Real schema you already understand. TypeScript generics will make sense immediately when applied to something familiar.",
        output: "types/invoysr.ts — a complete type file you could actually drop into the project.",
        skills: ["TypeScript interfaces", "generics", "utility types", "DTOs"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
      {
        id: "01-05",
        title: "Build a debounce & throttle utility",
        difficulty: "Intermediate",
        diff_color: "#F7B731",
        time: "2h",
        what: "Implement debounce(fn, delay) and throttle(fn, limit) from scratch without lodash. Then use debounce on a search input simulation — log the query only after the user stops typing for 300ms.",
        why: "Competary will need live search. This is how you'd implement it. Closure mastery in a real use case.",
        output: "utils.js with both functions + a small demo showing debounced console output.",
        skills: ["closures", "setTimeout", "higher-order functions"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
    ],
  },
  {
    id: 2,
    phase: "Phase 02",
    title: "React & Modern Frontend",
    color: "#45AAF2",
    intro: "Every task targets Competary or Trovaly directly. By the end of this phase you should have rebuilt at least one real page from one of your products.",
    tasks: [
      {
        id: "02-01",
        title: "Build the Competary competitor card component",
        difficulty: "Beginner",
        diff_color: "#2ECC71",
        time: "2–3h",
        what: "Design and build a React component that displays one competitor: name, website, pricing tier, last updated date, and a status badge (Active / Inactive). Use only Tailwind. No data fetching yet — use hardcoded props.",
        why: "This is a real component you will ship. Starting from something you'll actually use removes the 'what do I build' problem entirely.",
        output: "CompetitorCard.tsx with props typed in TypeScript. Looks production-ready.",
        skills: ["React components", "props", "TypeScript", "Tailwind"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
      {
        id: "02-02",
        title: "Add a filter & sort bar to the competitor list",
        difficulty: "Beginner",
        diff_color: "#2ECC71",
        time: "2–3h",
        what: "Take your CompetitorCard and render a list of 5–6 hardcoded competitors. Add a filter by status (Active/Inactive) and a sort by name or last updated. All client-side with useState.",
        why: "This teaches controlled components, derived state, and lifting state up — the three things that trip every React beginner.",
        output: "CompetitorList.tsx with working filter + sort. No backend needed.",
        skills: ["useState", "derived state", "controlled inputs", "array methods"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
      {
        id: "02-03",
        title: "Build a Trovaly influencer profile modal",
        difficulty: "Intermediate",
        diff_color: "#F7B731",
        time: "3–4h",
        what: "Build a modal component that opens when you click an influencer card. Shows avatar, name, platform, follower count, engagement rate, and a fake contact button. Implement open/close with useReducer instead of useState.",
        why: "useReducer is the step between useState and Redux. Modal state management is something every SaaS uses.",
        output: "InfluencerModal.tsx using useReducer for open/close/loading states.",
        skills: ["useReducer", "portals", "useEffect cleanup", "compound components"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
      {
        id: "02-04",
        title: "Implement a dark/light theme toggle for Competary",
        difficulty: "Intermediate",
        diff_color: "#F7B731",
        time: "2–3h",
        what: "Add a theme toggle to Competary using React Context. The theme (dark/light) should persist to localStorage and be accessible from any component without prop drilling.",
        why: "Context + localStorage is a pattern you'll use in every SaaS product. This is the real-world version of the classic 'counter' tutorial.",
        output: "ThemeContext.tsx + useTheme hook + toggle button that persists on refresh.",
        skills: ["React Context", "custom hooks", "localStorage", "CSS variables"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
      {
        id: "02-05",
        title: "Rebuild the Invoysr invoice list page in Next.js App Router",
        difficulty: "Advanced",
        diff_color: "#FF6B6B",
        time: "4–6h",
        what: "Take the invoice list UI from Invoysr and rebuild it as a Next.js Server Component. Data comes from a hardcoded array (no DB yet). Add a loading.tsx skeleton and an error.tsx boundary. Deploy to Vercel.",
        why: "Server Components, loading states, and error boundaries are the three things that separate a Next.js beginner from someone who actually understands the App Router.",
        output: "A live Vercel URL with a working invoice list page using RSC + loading + error states.",
        skills: ["Server Components", "loading.tsx", "error.tsx", "Vercel deploy"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
    ],
  },
  {
    id: 3,
    phase: "Phase 03",
    title: "Backend & APIs",
    color: "#2ECC71",
    intro: "You've been testing APIs for years. Now you build them. All tasks target Competary's backend — by the end you'll have a real working API for the product.",
    tasks: [
      {
        id: "03-01",
        title: "Build the Competary competitors REST API",
        difficulty: "Beginner",
        diff_color: "#2ECC71",
        time: "3–4h",
        what: "Express.js API with 5 endpoints: GET /competitors, GET /competitors/:id, POST /competitors, PATCH /competitors/:id, DELETE /competitors/:id. Data stored in a local JSON file for now. Full TypeScript.",
        why: "This is the actual Competary backend. You're not building a fake project — you're building the real thing, just without a database yet.",
        output: "Express server running on localhost:3001. Test all 5 endpoints with a .http file or Postman collection.",
        skills: ["Express", "REST conventions", "TypeScript", "error handling middleware"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
      {
        id: "03-02",
        title: "Add input validation with Zod",
        difficulty: "Beginner",
        diff_color: "#2ECC71",
        time: "2h",
        what: "Take your competitors API and add Zod validation to the POST and PATCH routes. If the body is missing required fields, return a 400 with a clear error message listing exactly what's wrong.",
        why: "Zod is the standard in the Next.js ecosystem. You'll use it in every tRPC route and Server Action you ever write.",
        output: "Updated API where invalid POST bodies return structured 400 errors instead of crashing.",
        skills: ["Zod schemas", "validation middleware", "error response format"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
      {
        id: "03-03",
        title: "Add JWT authentication",
        difficulty: "Intermediate",
        diff_color: "#F7B731",
        time: "3–4h",
        what: "Add a POST /auth/login endpoint that accepts email + password (hardcoded user for now) and returns a JWT. Protect your /competitors routes with an auth middleware that validates the token.",
        why: "Authentication is the thing most tutorials skip or abstract away. Doing it manually once means you'll never be confused by NextAuth or Clerk again.",
        output: "Protected API — requests without a valid Bearer token get a 401. Login returns a token you can use.",
        skills: ["JWT", "middleware", "Bearer tokens", "auth flow"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
      {
        id: "03-04",
        title: "Convert the Competary API to tRPC",
        difficulty: "Intermediate",
        diff_color: "#F7B731",
        time: "4–5h",
        what: "Take your Express REST API and rewrite the competitors endpoints as tRPC procedures inside a Next.js app. Use React Query on the frontend to fetch and display the competitor list.",
        why: "tRPC is the modern full-stack pattern for Next.js. End-to-end type safety means TypeScript errors on the frontend if your backend changes.",
        output: "Competary frontend fetching from tRPC backend with full TypeScript safety. No more any types on API responses.",
        skills: ["tRPC router", "procedures", "React Query", "end-to-end types"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
      {
        id: "03-05",
        title: "Build a webhook receiver for Stripe events",
        difficulty: "Advanced",
        diff_color: "#FF6B6B",
        time: "3–4h",
        what: "You already use Stripe. Build a /webhooks/stripe endpoint that receives and verifies Stripe webhook events. Handle checkout.session.completed and customer.subscription.deleted — log what you'd do (update DB) without actually doing it yet.",
        why: "Webhook handling is something most tutorials never cover. You already have Stripe set up — this closes the last gap in your payments understanding.",
        output: "Verified webhook handler that logs the right action for each event type. Tested with Stripe CLI.",
        skills: ["webhook verification", "Stripe CLI", "event handling", "idempotency"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
    ],
  },
  {
    id: 4,
    phase: "Phase 04",
    title: "Databases & Data Layer",
    color: "#A55EEA",
    intro: "You use Supabase but you haven't owned the schema. These tasks make you design and build the actual Competary data layer from scratch.",
    tasks: [
      {
        id: "04-01",
        title: "Design the Competary database schema",
        difficulty: "Warm-up",
        diff_color: "#2ECC71",
        time: "2h",
        what: "On paper or in GoodNotes first, design the full schema for Competary: users, workspaces, competitors, pricing_pages, changes, alerts. Draw the relationships. Then write the SQL CREATE TABLE statements.",
        why: "Designing before building is a senior engineer habit. Most bugs come from bad schema decisions made in a rush.",
        output: "schema.sql with all tables, foreign keys, and indexes. No ORM yet — raw SQL.",
        skills: ["schema design", "normalisation", "foreign keys", "indexes"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
      {
        id: "04-02",
        title: "Seed the database with realistic data",
        difficulty: "Beginner",
        diff_color: "#2ECC71",
        time: "2h",
        what: "Write a seed.ts script using Prisma that inserts 3 workspaces, 10 competitors per workspace, and 3–5 pricing change records per competitor. Use realistic company names and prices.",
        why: "Seeding teaches you the data model from the inside out. You'll catch schema mistakes here before they hit production.",
        output: "seed.ts that runs with npx prisma db seed and populates a local Postgres instance.",
        skills: ["Prisma client", "relations", "transactions", "seed data"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
      {
        id: "04-03",
        title: "Write the Competary query layer",
        difficulty: "Intermediate",
        diff_color: "#F7B731",
        time: "3–4h",
        what: "Write 6 Prisma queries your app will actually use: getCompetitorsByWorkspace, getRecentChanges(limit), getCompetitorWithHistory, createCompetitor, updatePricing, deleteCompetitor. Wrap them in a repository file.",
        why: "Repository pattern keeps your database logic separate from your API logic. Every senior engineer does this instinctively.",
        output: "lib/competitors.repository.ts with all 6 functions, fully typed with Prisma return types.",
        skills: ["Prisma queries", "relations", "repository pattern", "TypeScript return types"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
      {
        id: "04-04",
        title: "Add Row Level Security to Supabase",
        difficulty: "Intermediate",
        diff_color: "#F7B731",
        time: "2–3h",
        what: "In your Supabase project (Competary or Invoysr), enable RLS on the competitors and workspaces tables. Write policies so users can only read/write their own workspace data. Test by calling the API as two different users.",
        why: "You're already using Supabase without RLS which means any user can theoretically read any data. This is a real security fix for a real product.",
        output: "RLS policies in Supabase dashboard + a test proving cross-workspace data is blocked.",
        skills: ["Row Level Security", "Supabase policies", "auth.uid()", "security testing"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
      {
        id: "04-05",
        title: "Build a slow query finder",
        difficulty: "Advanced",
        diff_color: "#FF6B6B",
        time: "2–3h",
        what: "Use EXPLAIN ANALYZE in Postgres to find the slowest query in your Competary schema (hint: it's probably the change history join). Add the right index and measure the improvement.",
        why: "Query performance is the difference between a SaaS that works at 100 users and one that works at 10,000. You'll impress any interviewer who asks about databases.",
        output: "A before/after showing query time with and without the index. Screenshot + notes in your GoodNotes log.",
        skills: ["EXPLAIN ANALYZE", "query planning", "indexing strategy", "performance"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
    ],
  },
  {
    id: 5,
    phase: "Phase 05",
    title: "DevOps & Deployment",
    color: "#FF6B6B",
    intro: "Your QA background means you already think in pipelines. These tasks formalise that and give Competary a production-grade deployment setup.",
    tasks: [
      {
        id: "05-01",
        title: "Dockerise the Competary API",
        difficulty: "Beginner",
        diff_color: "#2ECC71",
        time: "2–3h",
        what: "Write a Dockerfile for your Express/Node API. It should: use node:20-alpine as base, copy only what's needed, run as a non-root user, and expose port 3001. Build the image and run it locally with docker run.",
        why: "If it runs in Docker locally, it runs the same everywhere. This is the foundation of every deployment pipeline.",
        output: "Dockerfile + .dockerignore. docker run -p 3001:3001 competary-api works locally.",
        skills: ["Dockerfile", "layers", "non-root user", "docker run"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
      {
        id: "05-02",
        title: "Add a docker-compose for local dev",
        difficulty: "Beginner",
        diff_color: "#2ECC71",
        time: "2h",
        what: "Write a docker-compose.yml that spins up: your API container, a Postgres container, and a Redis container (for future caching). One command — docker compose up — starts everything.",
        why: "This replaces the 'install Postgres locally' problem. Any developer (including future you) can run the full stack with one command.",
        output: "docker-compose.yml where docker compose up starts API + DB + Redis with correct networking.",
        skills: ["docker compose", "service networking", "environment variables", "volumes"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
      {
        id: "05-03",
        title: "Build a CI pipeline for Competary",
        difficulty: "Intermediate",
        diff_color: "#F7B731",
        time: "3h",
        what: "GitHub Actions workflow that runs on every push to main: installs deps, runs TypeScript type-check, runs any tests, builds the Docker image. If anything fails, the push is blocked.",
        why: "You already know CI/CD from QA. This is the same concept applied to your own product. It will catch the TypeScript errors you'd otherwise ship.",
        output: ".github/workflows/ci.yml that shows green/red checks on your GitHub PRs.",
        skills: ["GitHub Actions", "workflow syntax", "Docker build in CI", "type checking"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
      {
        id: "05-04",
        title: "Add auto-deploy to Railway on merge",
        difficulty: "Intermediate",
        diff_color: "#F7B731",
        time: "2–3h",
        what: "Extend your GitHub Actions pipeline to deploy the Competary API to Railway automatically when CI passes on main. Use Railway's CLI in the workflow. Prod URL updates on every merge.",
        why: "Continuous deployment closes the loop. Merging = shipping. This is how real products are run.",
        output: "Merge to main triggers CI → on success, deploys to Railway → live URL updated within 3 minutes.",
        skills: ["Railway CLI", "CD pipeline", "environment secrets", "deployment strategy"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
      {
        id: "05-05",
        title: "Add uptime monitoring & alerts",
        difficulty: "Advanced",
        diff_color: "#FF6B6B",
        time: "2h",
        what: "Add a GET /health endpoint to your API that returns status, uptime, and DB connection state. Set up BetterUptime or UptimeRobot (both free) to ping it every 5 minutes and email you if it's down.",
        why: "You can't fix what you don't know is broken. Every production service needs this. Takes 2 hours and will save you hours of confusion later.",
        output: "/health endpoint returning JSON + monitoring dashboard showing uptime percentage.",
        skills: ["health checks", "monitoring", "DB connectivity check", "alerting"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
    ],
  },
  {
    id: 6,
    phase: "Phase 06",
    title: "AI-Native Dev",
    color: "#FD9644",
    intro: "This is where everything connects. These tasks build the actual AI features Competary needs. You're not practicing anymore — you're shipping.",
    tasks: [
      {
        id: "06-01",
        title: "Build a competitor pricing change detector",
        difficulty: "Intermediate",
        diff_color: "#F7B731",
        time: "4–5h",
        what: "Use Firecrawl to scrape a competitor's pricing page. Store the raw HTML in your DB. On the next scrape, diff the two versions and use Claude to summarise what changed in plain English: 'The Pro plan increased from $49 to $59.'",
        why: "This is the core Competary feature. You're building the product, not a tutorial project.",
        output: "A cron-able function that detects pricing changes and generates a human-readable summary via Claude API.",
        skills: ["Firecrawl", "HTML diffing", "Claude API", "structured outputs"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
      {
        id: "06-02",
        title: "Add a RAG-powered competitor Q&A",
        difficulty: "Intermediate",
        diff_color: "#F7B731",
        time: "4–5h",
        what: "Scrape and chunk a competitor's entire website (About, Pricing, Features pages). Store embeddings in pgvector (Supabase supports this). Build a chat interface where users can ask 'What does [competitor] charge for API access?' and get an accurate answer.",
        why: "RAG is the most in-demand AI engineering skill right now. Building it on top of Competary makes it immediately valuable.",
        output: "A working Q&A interface backed by vector search + Claude. Answers cite which page the information came from.",
        skills: ["embeddings", "pgvector", "chunking strategy", "RAG pipeline", "Vercel AI SDK"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
      {
        id: "06-03",
        title: "Build the weekly digest email",
        difficulty: "Intermediate",
        diff_color: "#F7B731",
        time: "3–4h",
        what: "Every Monday, generate a digest of all competitor changes from the past week. Use Claude to write the email body in a clear, business-friendly tone. Send via Resend. The email should read like a human analyst wrote it.",
        why: "This is a core Competary monetisation feature — the digest is what enterprise customers pay for. You're building your MRR, not a fake project.",
        output: "A schedulable function that generates + sends a real email digest. Test by triggering it manually first.",
        skills: ["Resend API", "Claude prompt engineering", "cron scheduling", "email templates"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
      {
        id: "06-04",
        title: "Add AI-generated competitive analysis report",
        difficulty: "Advanced",
        diff_color: "#FF6B6B",
        time: "5–6h",
        what: "Given a list of competitors, generate a 1-page competitive analysis: positioning, pricing comparison table, strengths/weaknesses, and a recommended response. Use Claude with structured outputs (JSON schema) so the frontend can render each section independently.",
        why: "Structured AI outputs are what separates toy demos from real products. This teaches you how to constrain LLM output into something a frontend can use reliably.",
        output: "A /reports/generate endpoint that returns structured JSON rendered as a formatted report page.",
        skills: ["Claude structured outputs", "JSON schema", "multi-section prompts", "report UI"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
      {
        id: "06-05",
        title: "Ship Competary v1 publicly",
        difficulty: "Advanced",
        diff_color: "#FF6B6B",
        time: "1–2 weeks",
        what: "Put together everything you've built across all 6 phases: auth, competitor tracking, change detection, RAG Q&A, digest emails, Stripe payments. Deploy it. Put it on Product Hunt. Charge real money.",
        why: "This is the whole point. Everything else was practice for this. Shipping beats perfection. A live product with 3 paying users teaches you more than 6 more months of tutorials.",
        output: "competary.com (or whatever the domain is) — live, working, with a Stripe payment link.",
        skills: ["everything", "product thinking", "launch", "real users"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
    ],
  },
];

const fsCurriculumGenericPhases = [
  {
    id: 1,
    phase: "Phase 01",
    title: "JavaScript Mastery",
    color: "#F7B731",
    intro: "Pure vanilla JS — no frameworks allowed. The constraint is the point. You'll build the mental models that React and Node abstract away, so nothing is a mystery later.",
    tasks: [
      {
        id: "01-01",
        title: "Implement your own Promise from scratch",
        difficulty: "Intermediate",
        time: "3–4h",
        what: "Write a MyPromise class with .then(), .catch(), .finally(), and static .resolve() and .reject(). It doesn't need to be fully spec-compliant — make it work for chained async operations. Write 8 test cases covering success, failure, and chaining.",
        why: "Every API call, every fetch, every database query in your future apps runs on this. If you can build it, you will never be confused by async JavaScript again.",
        output: "mypromise.js with the full class + test block that logs PASS or FAIL for all 8 cases when run with node.",
        skills: ["async JS", "classes", "event loop", "callbacks", "error handling"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
      {
        id: "01-02",
        title: "Build a debounce and throttle utility",
        difficulty: "Beginner",
        time: "2h",
        what: "Implement debounce(fn, delay) and throttle(fn, limit) from scratch — no lodash. Test debounce with a simulated search input (log the query only after 300ms of no typing). Test throttle with a scroll handler simulation that fires max once per 200ms.",
        why: "Search bars, scroll listeners, resize handlers — every real frontend uses these. Building them teaches closures and higher-order functions more effectively than any tutorial.",
        output: "utils.js with both functions + a demo file showing debounced and throttled console output.",
        skills: ["closures", "setTimeout", "higher-order functions", "timers"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
      {
        id: "01-03",
        title: "Implement a pub/sub event emitter",
        difficulty: "Intermediate",
        time: "2–3h",
        what: "Build an EventEmitter class with .on(event, handler), .off(event, handler), .emit(event, data), and .once(event, handler). Test with at least 6 cases: multiple listeners on one event, removing a listener, once-only firing, and emitting with data.",
        why: "Node's core is built on event emitters. WebSockets, streams, and real-time features all use this pattern. Understanding it removes the magic from half of Node's ecosystem.",
        output: "event_emitter.js with the class and a passing test suite.",
        skills: ["observer pattern", "event-driven architecture", "closures", "Map/Set"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
      {
        id: "01-04",
        title: "Build a deep clone and deep equality function",
        difficulty: "Intermediate",
        time: "2–3h",
        what: "Implement deepClone(obj) that handles nested objects, arrays, dates, nulls, and circular references. Then implement deepEqual(a, b) that returns true only if two objects are structurally identical. Write 10 test cases.",
        why: "JSON.parse(JSON.stringify()) breaks on dates and circular refs. React's state management, diffing, and immutability patterns all rely on understanding deep equality.",
        output: "deep_utils.js with both functions and 10 passing test assertions.",
        skills: ["recursion", "object traversal", "WeakMap", "structural equality", "edge cases"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
      {
        id: "01-05",
        title: "Build a typed data model system in TypeScript",
        difficulty: "Intermediate",
        time: "2–3h",
        what: "Model a small e-commerce domain in TypeScript: User, Product, Order, OrderItem. Write full interfaces + utility types: CreateOrderDTO, UpdateProductDTO, PaginatedResponse<T>, ApiResponse<T>. No runtime code — just types. Then write a function that accepts a PaginatedResponse<Product> and returns the first item.",
        why: "TypeScript generics are what make large codebases manageable. Practising on a familiar domain (e-commerce) means you can focus on the type system, not the business logic.",
        output: "types/ecommerce.ts with all types defined and a small usage file that compiles without errors.",
        skills: ["TypeScript", "generics", "utility types", "interfaces", "DTOs"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
    ],
  },
  {
    id: 2,
    phase: "Phase 02",
    title: "React & Modern Frontend",
    color: "#45AAF2",
    intro: "Build real UI components — not counter apps. Every task here produces something you could drop into a production codebase.",
    tasks: [
      {
        id: "02-01",
        title: "Build a data table with sort, filter, and pagination",
        difficulty: "Beginner",
        time: "3–4h",
        what: "Build a React component that takes an array of objects and renders a table with: clickable column headers that sort ascending/descending, a text input that filters rows across all columns, and pagination (10 rows per page with prev/next). Use mock user data (name, email, role, joined date).",
        why: "Data tables are in every admin dashboard, every SaaS product, every internal tool. Building this once correctly — with controlled state and no library — teaches React state management better than any tutorial.",
        output: "DataTable.jsx that works with any array of flat objects. Demo it with 50 mock users.",
        skills: ["useState", "useMemo", "controlled components", "array methods", "pagination logic"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
      {
        id: "02-02",
        title: "Build a multi-step form with validation",
        difficulty: "Beginner",
        time: "3–4h",
        what: "Create a 3-step signup form: Step 1 (name, email), Step 2 (password, confirm password), Step 3 (profile: bio, avatar URL). Validate each step before allowing progression. Show a progress indicator. On submit, log the complete form data as JSON.",
        why: "Multi-step forms appear in onboarding flows everywhere. The challenge is managing shared state across steps and validating correctly — skills that transfer directly to any form-heavy app.",
        output: "MultiStepForm.jsx with validation, progress indicator, and a final submission summary.",
        skills: ["useState", "form validation", "controlled inputs", "conditional rendering", "UX patterns"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
      {
        id: "02-03",
        title: "Implement a global state manager with Context + useReducer",
        difficulty: "Intermediate",
        time: "3h",
        what: "Build a shopping cart using only React Context + useReducer — no Redux, no Zustand. Actions: ADD_ITEM, REMOVE_ITEM, UPDATE_QUANTITY, CLEAR_CART. Persist state to localStorage. Show a cart icon with item count in a header component.",
        why: "Understanding Context + useReducer is what makes Redux make sense. It also shows you when you need a library and when you don't — critical judgment for a senior developer.",
        output: "A small shop UI with product cards, an add-to-cart button on each, and a cart sidebar that updates in real time.",
        skills: ["Context API", "useReducer", "localStorage", "state management patterns", "prop drilling avoidance"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
      {
        id: "02-04",
        title: "Build a real-time search with debounce and API calls",
        difficulty: "Intermediate",
        time: "3h",
        what: "Build a search component that queries the free JSONPlaceholder or Open Library API as the user types. Debounce the input by 300ms. Show a loading spinner during fetch, results on success, and an error state on failure. Handle race conditions (ignore stale responses).",
        why: "Race conditions in async React are one of the most common bugs in production apps. Solving this correctly — with cleanup functions or AbortController — is a senior-level skill.",
        output: "SearchBar.jsx that handles loading/error/success states correctly and never shows stale results.",
        skills: ["useEffect", "AbortController", "debounce", "async state", "race condition handling"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
      {
        id: "02-05",
        title: "Build and deploy a Next.js App Router project",
        difficulty: "Intermediate",
        time: "4–5h",
        what: "Build a simple blog with Next.js App Router: a home page listing posts, a dynamic [slug] page for each post, a layout with a nav, and a not-found page. Fetch data from a free API (JSONPlaceholder /posts). Deploy to Vercel. Use Server Components for data fetching.",
        why: "Next.js App Router is the current standard for React in production. Understanding the difference between Server Components and Client Components is now a baseline skill for any frontend role.",
        output: "Live Vercel URL + GitHub repo. Blog must have working routes, proper loading states, and a custom 404 page.",
        skills: ["Next.js App Router", "Server Components", "dynamic routes", "layouts", "Vercel deployment"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
    ],
  },
  {
    id: 3,
    phase: "Phase 03",
    title: "Backend & APIs",
    color: "#20BF6B",
    intro: "Build APIs that you'd actually trust in production. Proper validation, auth, error handling, and testing — not just endpoints that work in Postman.",
    tasks: [
      {
        id: "03-01",
        title: "Build a REST API for a blog with full CRUD",
        difficulty: "Beginner",
        time: "4–5h",
        what: "Build an Express.js REST API for a blog: GET /posts, GET /posts/:id, POST /posts, PATCH /posts/:id, DELETE /posts/:id. Add GET /posts?author=&tag= query filtering. Use an in-memory array as the data store (no database yet). Return proper HTTP status codes for every response.",
        why: "REST conventions are the shared language of web development. Building CRUD correctly — with proper status codes, query params, and error responses — is the foundation everything else builds on.",
        output: "server.js with all endpoints + a Postman collection or .http file demonstrating every route.",
        skills: ["Express.js", "REST conventions", "HTTP status codes", "query params", "route params"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
      {
        id: "03-02",
        title: "Add request validation with Zod",
        difficulty: "Beginner",
        time: "2–3h",
        what: "Add Zod schemas to your blog API for all POST and PATCH endpoints. Return structured validation errors (which field failed and why) with a 400 status. Write a reusable validate middleware. Test with intentionally malformed requests.",
        why: "Unvalidated inputs are the most common source of bugs and security issues in production APIs. Writing validation as middleware — not inline — is a pattern you'll use in every serious project.",
        output: "Updated API with Zod schemas + a validate.js middleware. All invalid requests return structured errors.",
        skills: ["Zod", "middleware", "schema validation", "error formatting", "type safety"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
      {
        id: "03-03",
        title: "Implement JWT authentication",
        difficulty: "Intermediate",
        time: "4h",
        what: "Add auth to your blog API: POST /auth/register (hash password with bcrypt), POST /auth/login (return access + refresh tokens), a protect middleware that validates the JWT on protected routes, and POST /auth/refresh to rotate the refresh token. Store tokens in httpOnly cookies.",
        why: "JWT auth is in every SaaS product. Understanding the access/refresh token pattern and httpOnly cookies — rather than just copying boilerplate — means you can make security decisions confidently.",
        output: "Updated API with auth routes + protect middleware. Only authenticated users can create or delete posts.",
        skills: ["JWT", "bcrypt", "httpOnly cookies", "refresh tokens", "auth middleware"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
      {
        id: "03-04",
        title: "Add rate limiting, CORS, and security headers",
        difficulty: "Intermediate",
        time: "2–3h",
        what: "Harden your Express API: add express-rate-limit (100 req/15min globally, 5 req/15min on /auth routes), configure CORS to only allow specific origins, add helmet for security headers, and sanitise inputs with express-validator to prevent XSS. Test each protection works.",
        why: "Security basics are not optional. These four additions protect against the most common attacks on public APIs. Getting into the habit of adding them from day one separates professional engineers from beginners.",
        output: "Updated API with all four protections. A test script that demonstrates rate limiting kicking in after 5 rapid /auth requests.",
        skills: ["express-rate-limit", "CORS", "helmet", "XSS prevention", "API security"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
      {
        id: "03-05",
        title: "Write integration tests with Vitest and Supertest",
        difficulty: "Intermediate",
        time: "3–4h",
        what: "Write integration tests for your blog API using Vitest + Supertest. Cover: creating a post (happy path), creating a post with invalid data (should fail), getting a non-existent post (404), and the full auth flow (register → login → create post as authenticated user → fail to create as unauthenticated).",
        why: "Integration tests are what let you refactor confidently. Writing them forces you to think about your API as a contract — which is how your future users will think about it.",
        output: "tests/api.test.js with all scenarios passing. npm test must run all tests and report results.",
        skills: ["Vitest", "Supertest", "integration testing", "test setup/teardown", "test coverage"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
    ],
  },
  {
    id: 4,
    phase: "Phase 04",
    title: "Databases & Data Layer",
    color: "#FF6B9D",
    intro: "Data modelling, querying, and performance. The goal is to think like your database — understanding what it costs to run a query before you write it.",
    tasks: [
      {
        id: "04-01",
        title: "Design and migrate a relational schema",
        difficulty: "Beginner",
        time: "3h",
        what: "Design a schema for a task management app: users, workspaces, projects, tasks, tags, task_tags (many-to-many), comments. Write SQL migrations (CREATE TABLE with proper constraints, foreign keys, indexes). Include a seed script with 5 users, 3 projects, 20 tasks, and realistic relationships.",
        why: "Good data modelling prevents years of pain. Thinking through foreign keys, nullability, and indexes before writing code is a habit that separates senior engineers from junior ones.",
        output: "migrations/ folder with sequential .sql files + seed.sql. Database must have all tables with real referential integrity.",
        skills: ["relational modelling", "foreign keys", "indexes", "constraints", "SQL migrations"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
      {
        id: "04-02",
        title: "Write complex queries with joins and aggregations",
        difficulty: "Beginner",
        time: "3h",
        what: "Using your task management schema, write 8 SQL queries: tasks with their project name and assignee, tasks overdue grouped by project, users with their task completion rate, the most active user per workspace, tasks with all their tags as an array, and 3 more of your choice. Explain each query's purpose.",
        why: "Most developers can write SELECT * FROM table. Writing queries with multiple joins, GROUP BY, HAVING, and subqueries fluently is what makes you productive with any ORM or raw SQL tool.",
        output: "queries.sql with all 8 queries, each preceded by a comment explaining what it returns.",
        skills: ["JOINs", "GROUP BY", "HAVING", "subqueries", "aggregations", "array_agg"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
      {
        id: "04-03",
        title: "Add a repository pattern with Prisma",
        difficulty: "Intermediate",
        time: "3–4h",
        what: "Set up Prisma with your schema. Write a repository layer: TaskRepository with findById, findByProject, create, update, delete, and findOverdue. Each method should use the correct Prisma query, handle not-found gracefully, and return typed results. Never call prisma directly outside the repository.",
        why: "Repositories isolate your database logic from your business logic. Switching databases, mocking in tests, and adding caching all become trivial when your data access is behind an interface.",
        output: "repositories/TaskRepository.ts with all methods + a test file that calls each one and logs results.",
        skills: ["Prisma", "repository pattern", "TypeScript", "data access layer", "separation of concerns"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
      {
        id: "04-04",
        title: "Analyse and optimise slow queries",
        difficulty: "Intermediate",
        time: "3h",
        what: "Seed your database with 10,000 tasks. Write 3 intentionally slow queries (full table scan, missing index, N+1). Run EXPLAIN ANALYSE on each. Add the right indexes or rewrite the query. Document before/after execution times and explain why each fix worked.",
        why: "Every application hits a slow query eventually. Being able to read a query plan and fix it — rather than throwing it at a DBA — is a highly valued skill that most frontend-leaning developers lack.",
        output: "optimisation_report.md documenting each slow query, the EXPLAIN output, your fix, and the measured improvement.",
        skills: ["EXPLAIN ANALYSE", "query planning", "index strategy", "N+1 problem", "query optimisation"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
      {
        id: "04-05",
        title: "Implement row-level security with Supabase",
        difficulty: "Intermediate",
        time: "3h",
        what: "Set up a Supabase project with your task management schema. Enable RLS on tasks, projects, and comments. Write policies: users can only read tasks in their workspace, users can only update their own tasks, workspace owners can delete any task. Test each policy by making requests as different users.",
        why: "RLS moves security to the database layer, where it can't be accidentally bypassed by a missing auth check in your API. Understanding it makes you a much safer full-stack developer.",
        output: "supabase/migrations/ with RLS policies + a test script that verifies each policy blocks and allows the right operations.",
        skills: ["Supabase", "row-level security", "PostgreSQL policies", "auth.uid()", "security testing"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
    ],
  },
  {
    id: 5,
    phase: "Phase 05",
    title: "DevOps & Deployment",
    color: "#A29BFE",
    intro: "Getting your code from your machine to the internet reliably. Containers, CI/CD, and monitoring — the difference between a side project and a real product.",
    tasks: [
      {
        id: "05-01",
        title: "Dockerise a Node.js API",
        difficulty: "Beginner",
        time: "2–3h",
        what: "Write a Dockerfile for your Express API using a slim Node base image. Use multi-stage builds to keep the final image small. Write a .dockerignore. Build and run the container locally, verify all endpoints work, and check the final image size. Document how to reduce it further.",
        why: "Every production backend runs in a container. Understanding layer caching and image size — not just 'it works' — is what production engineers care about.",
        output: "Dockerfile + .dockerignore. Image must be under 200MB. README with build and run instructions.",
        skills: ["Docker", "multi-stage builds", "layer caching", "image optimisation", "container networking"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
      {
        id: "05-02",
        title: "Orchestrate a full stack with docker-compose",
        difficulty: "Beginner",
        time: "3h",
        what: "Write a docker-compose.yml that runs your API, a PostgreSQL database, and a Redis cache together. The API should connect to both on startup. Add health checks so dependent services wait for dependencies to be ready. Include a .env.example file for all required variables.",
        why: "Local dev parity with production is the single biggest reducer of 'works on my machine' bugs. Knowing docker-compose well means you can spin up any project in minutes.",
        output: "docker-compose.yml + .env.example. Running docker-compose up must start all 3 services with the API fully connected.",
        skills: ["docker-compose", "service dependencies", "health checks", "environment variables", "networking"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
      {
        id: "05-03",
        title: "Build a GitHub Actions CI pipeline",
        difficulty: "Intermediate",
        time: "3–4h",
        what: "Set up a GitHub Actions workflow that runs on every push: installs dependencies, runs linting (ESLint), runs your test suite, builds the Docker image, and posts a comment on PRs with the test results summary. The pipeline must block merging if tests fail.",
        why: "CI pipelines are the safety net that lets teams move fast without breaking things. Building one yourself — rather than copying a template — means you understand every step and can debug failures.",
        output: ".github/workflows/ci.yml. Create a PR with a failing test to verify it blocks. Then fix the test and verify it passes.",
        skills: ["GitHub Actions", "CI/CD", "workflow YAML", "ESLint", "branch protection"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
      {
        id: "05-04",
        title: "Add structured logging and error tracking",
        difficulty: "Intermediate",
        time: "3h",
        what: "Replace all console.log calls in your API with structured JSON logging using pino or winston. Every log must include: timestamp, level, request ID, user ID (if authenticated), and the message. Add a global error handler that logs uncaught errors with a stack trace. Set up log levels (debug in dev, info in production).",
        why: "When something breaks at 3am, logs are all you have. Structured logs that are searchable and include context reduce debugging time from hours to minutes.",
        output: "Updated API with structured logging throughout. A test that triggers an error and shows the full structured log output.",
        skills: ["pino/winston", "structured logging", "request IDs", "error handling", "log levels"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
      {
        id: "05-05",
        title: "Set up uptime monitoring and alerting",
        difficulty: "Beginner",
        time: "2h",
        what: "Add a /health endpoint to your API that checks database connectivity and returns { status: 'ok', db: 'connected', uptime: 123 }. Set up a free uptime monitor (Better Uptime, UptimeRobot, or similar) to ping it every minute. Configure an email alert for downtime. Then intentionally break the DB connection and verify the alert fires.",
        why: "You should know your app is down before your users do. This is the minimum viable monitoring setup for any production app, and it takes less than 2 hours to do right.",
        output: "/health endpoint + screenshots showing the monitor dashboard and the downtime alert email.",
        skills: ["health checks", "uptime monitoring", "alerting", "observability basics"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
    ],
  },
  {
    id: 6,
    phase: "Phase 06",
    title: "AI-Native Development",
    color: "#55EFC4",
    intro: "Integrating LLMs into real products — not toy demos. The focus is on reliability, cost control, and building features that actually work in production.",
    tasks: [
      {
        id: "06-01",
        title: "Build a streaming AI chat interface",
        difficulty: "Beginner",
        time: "3–4h",
        what: "Build a full-stack chat app: a Next.js frontend with a chat UI (message history, input, send button) and a Node.js API route that calls an LLM and streams the response token by token using Server-Sent Events. The UI must show the response appearing word by word, like ChatGPT.",
        why: "Streaming is the standard UX for AI chat. Users abandon apps that wait 10 seconds for a full response. Implementing it correctly — with SSE, proper backpressure, and error handling — is a baseline skill.",
        output: "Live Next.js app with streaming chat. Response must appear token by token in the UI, not all at once.",
        skills: ["Server-Sent Events", "streaming", "LLM API", "Next.js API routes", "React state"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
      {
        id: "06-02",
        title: "Build a document Q&A tool with RAG",
        difficulty: "Intermediate",
        time: "5–6h",
        what: "Build a web app where a user uploads a PDF, it gets chunked and embedded, and they can ask questions about it. Stack: Next.js frontend, Node API, pgvector in Supabase for vector storage, any embedding model, and an LLM for generation. Show which chunks were retrieved as sources.",
        why: "Document Q&A is the most common enterprise AI use case. Building it end-to-end — with chunking strategy, retrieval, and source attribution — teaches every component of production RAG.",
        output: "Live app that accepts a PDF upload and correctly answers at least 10 questions about it. Deployed to Vercel.",
        skills: ["RAG", "pgvector", "chunking", "embeddings", "source attribution", "file upload"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
      {
        id: "06-03",
        title: "Add AI-powered features to an existing CRUD app",
        difficulty: "Intermediate",
        time: "4–5h",
        what: "Take your task management app. Add 3 AI features: auto-generate a task description from a title (one-click), suggest related tasks based on semantic similarity, and a weekly summary digest that emails a summary of completed tasks. Each feature must have a loading state, error handling, and cost guardrails (max tokens).",
        why: "The real skill in AI engineering is knowing where AI adds value in an existing product — not building AI toys from scratch. Adding it to a real CRUD app forces you to solve the UX and cost challenges.",
        output: "Updated task app with all 3 AI features working. A cost log showing token usage per feature.",
        skills: ["LLM integration", "semantic similarity", "email digests", "token budgeting", "UX for AI"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
      {
        id: "06-04",
        title: "Build a code review bot with GitHub webhooks",
        difficulty: "Advanced",
        time: "6–8h",
        what: "Build a GitHub App that automatically reviews pull requests. When a PR is opened, your webhook server receives the event, fetches the diff, sends it to an LLM with a code review prompt, and posts the review as a PR comment. Handle large diffs by chunking. Include a /re-review command in comments.",
        why: "Webhook-driven AI automation is how most B2B AI products work. This project teaches GitHub's API, webhook security (signature verification), and agentic workflows triggered by external events.",
        output: "GitHub App installed on a test repo. Opening a PR must trigger an automated review comment within 30 seconds.",
        skills: ["GitHub Apps", "webhooks", "signature verification", "diff parsing", "LLM automation"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
      {
        id: "06-05",
        title: "Ship a public AI micro-product and get 50 users",
        difficulty: "Advanced",
        time: "Ongoing",
        what: "Build and launch a small, focused AI tool that solves one specific problem. It must be live (not just a repo). Get 50 real users. Instrument it with analytics. Document: what you built, how you acquired users, what broke in production, what the LLM got wrong, and what you'd do differently.",
        why: "Shipping separates engineers from hobbyists. 50 users will surface bugs, edge cases, and UX problems no amount of local testing reveals. The post-mortem you write is worth more than any tutorial.",
        output: "Live product + public write-up (blog post or thread) covering the technical architecture and lessons learned.",
        skills: ["product thinking", "deployment", "analytics", "incident response", "user feedback loops"],
        ipad: true,
        codespaces: "Works in Codespaces. Run in the terminal or port-forward your dev server.",
      },
    ],
  },
];



// ─── PROGRESS HELPERS ───────────────────────────────────────────
const STORAGE_KEY = "career_os_progress";

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch { return {}; }
}

function saveProgress(progress) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {}
}

function exportProgress(progress) {
  const blob = new Blob([JSON.stringify(progress, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "career-os-progress.json"; // consistent name — always overwrites in iCloud Drive
  a.click();
  URL.revokeObjectURL(url);
}

function importProgress(onImport) {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = ".json";
  input.onchange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const data = JSON.parse(ev.target.result);
        onImport(data);
      } catch { alert("Invalid progress file."); }
    };
    reader.readAsText(file);
  };
  input.click();
}

// ─── ROADMAP VIEWER ──────────────────────────────────────────────
// ─── BEGINNER FREELANCE ROADMAP DATA ────────────────────────────
const beginnerRoadmapPhases = [
  {
    num: "01",
    title: "JavaScript Foundations",
    duration: "2–3 months",
    color: "#F7B731",
    summary: "You know HTML and CSS — now add the language that makes things actually work. No frameworks yet. Just vanilla JS until you can build things without looking everything up.",
    nonneg: "The Odin Project JS path — do every project, skip nothing. This is your core.",
    resources: [
      { label: "The Odin Project", sub: "Full Stack JS · free, project-based", type: "Free", url: "https://www.theodinproject.com/paths/full-stack-javascript" },
      { label: "JavaScript.info", sub: "The best JS reference on the internet · free", type: "Free", url: "https://javascript.info/" },
      { label: "Eloquent JavaScript", sub: "Marijn Haverbeke · free online", type: "Book", url: "https://eloquentjavascript.net/" },
      { label: "JavaScript & jQuery", sub: "STABLE BET · Jon Duckett · YOU OWN THIS · use as visual companion to Odin Project — Duckett's design makes JS concrete for visual learners", type: "Book", url: "https://www.amazon.com/JavaScript-JQuery-Interactive-Front-End-Development/dp/1118531647" },
    ],
  },
  {
    num: "02",
    title: "React & Building UIs",
    duration: "2–3 months",
    color: "#45AAF2",
    summary: "Every client who wants a modern website wants React or something built on it. Learn it properly — components, state, hooks, and how data flows. Build 3 real projects before moving on.",
    nonneg: "Build 3 complete projects from scratch — a weather app, a todo list, and one of your own choosing",
    resources: [
      { label: "React Official Docs", sub: "react.dev · the new docs are excellent · free", type: "Free", url: "https://react.dev/learn" },
      { label: "React – The Complete Guide", sub: "Udemy · Maximilian Schwarzmüller", type: "Course", url: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/" },
      { label: "TanStack Query Docs", sub: "CURRENT BEST · tanstack.com · free · start using this from your first real project — server state done right", type: "Free", url: "https://tanstack.com/query/latest/docs/framework/react/overview" },
      { label: "Tailwind CSS Docs", sub: "STABLE BET · tailwindcss.com · free · learn this alongside React — utility CSS is the standard now", type: "Free", url: "https://tailwindcss.com/docs/installation" },
    ],
  },
  {
    num: "03",
    title: "Next.js & Real Websites",
    duration: "2 months",
    color: "#06D6A0",
    summary: "Next.js is what you'll actually use for client projects. Routing, SEO, server-side rendering, image optimisation — the things that make a website work in the real world, not just in the browser.",
    nonneg: "Build a complete multi-page site in Next.js and deploy it to Vercel before touching anything else",
    resources: [
      { label: "Next.js Official Docs", sub: "nextjs.org/learn · free, interactive", type: "Free", url: "https://nextjs.org/learn" },
      { label: "Next.js & React – Complete Guide", sub: "Udemy · Maximilian Schwarzmüller", type: "Course", url: "https://www.udemy.com/course/nextjs-react-the-complete-guide/" },
      { label: "Fireship YouTube", sub: "Short, dense, practical · free", type: "Free", url: "https://www.youtube.com/@Fireship" },
      { label: "shadcn/ui Docs", sub: "CURRENT BEST · ui.shadcn.com · free · the component system every Next.js project uses now", type: "Free", url: "https://ui.shadcn.com/docs" },
    ],
  },
  {
    num: "04",
    title: "Backend Basics & Databases",
    duration: "2 months",
    color: "#A55EEA",
    summary: "Most client projects need a backend — contact forms, user auth, a CMS, a booking system. You don't need to be a backend expert. You need to know enough to ship working products.",
    nonneg: "Build one full-stack project with auth, a database, and at least one form that saves data",
    resources: [
      { label: "Supabase Docs", sub: "supabase.com · backend without the pain · free tier", type: "Free", url: "https://supabase.com/docs" },
      { label: "Prisma Getting Started", sub: "prisma.io · the easiest ORM · free", type: "Free", url: "https://www.prisma.io/docs/getting-started" },
      { label: "Complete SQL Bootcamp", sub: "Udemy · Zero to Mastery", type: "Course", url: "https://www.udemy.com/course/complete-sql-databases-bootcamp-zero-to-mastery/" },
      { label: "Node.js Crash Course", sub: "Traversy Media · YouTube · free", type: "Free", url: "https://www.youtube.com/watch?v=fBNz5xF-Kx4" },
    ],
  },
  {
    num: "05",
    title: "Freelance Skills & Portfolio",
    duration: "1–2 months",
    color: "#FF6B6B",
    summary: "Technical skill gets you 50% of the way. The rest is being able to find clients, price your work, communicate clearly, and deliver on time. Most developers skip this phase and then wonder why no one hires them.",
    nonneg: "Launch a portfolio site with 3 real case studies before applying for any client work",
    resources: [
      { label: "The Freelance Bible", sub: "STABLE BET · Percival & Woods · YOU OWN THIS · read during this phase · pricing, client comms, contracts — all of it", type: "Book", url: "https://www.dk.com/uk/book/9780241390313-the-freelance-bible/" },
      { label: "Auth.js Docs", sub: "CURRENT BEST · authjs.dev · free · add auth to every portfolio project — clients always need login", type: "Free", url: "https://authjs.dev/" },
      { label: "Upwork + Fiverr", sub: "Start here for first clients", type: "Free", url: "https://www.upwork.com/" },
      { label: "Patrick Dang – Sales for Devs", sub: "YouTube · how to land clients · free", type: "Free", url: "https://www.youtube.com/@patrickdang" },
    ],
  },
  {
    num: "06",
    title: "Level Up & Specialise",
    duration: "Ongoing",
    color: "#FD9644",
    summary: "Once you have paying clients, pick a niche and go deep. E-commerce, landing pages, SaaS MVPs, or web apps. Specialists earn 2–3x generalists. The clients also become easier to find.",
    nonneg: "Pick one niche and do 3 projects in that niche before calling yourself a specialist",
    resources: [
      { label: "Shopify Dev Docs", sub: "E-commerce niche · huge market · free", type: "Free", url: "https://shopify.dev/" },
      { label: "Vercel AI SDK", sub: "CURRENT BEST · sdk.vercel.ai · free · add AI to your client projects — this is what separates you from other beginners in 2026", type: "Free", url: "https://sdk.vercel.ai/docs" },
      { label: "Stripe Docs", sub: "stripe.com/docs · payments for SaaS MVPs", type: "Free", url: "https://stripe.com/docs" },
      { label: "Syntax Podcast", sub: "Wes Bos & Scott Tolinski · stays current · free", type: "Free", url: "https://syntax.fm/" },
    ],
  },
];


// ─── QA-TO-FULLSTACK ROADMAP (FOR COSMIN) ───────────────────────
// Built around the question: what does a freelance full-stack developer
// need to land clients consistently over the next 5-7 years?
// Core bet: TypeScript + React + Next.js + PostgreSQL + REST fundamentals.
// These are fundamentals-first, with current tools as the practice vehicle.
// Each phase note marks resources as STABLE BET or CURRENT BEST.

const qaFsRoadmapPhases = [
  {
    num: "01",
    title: "JavaScript & TypeScript Foundations",
    duration: "4–6 weeks",
    color: "#F7B731",
    summary: "You already program in Java daily — loops, OOP, data structures, the lot. This phase is about learning what makes JavaScript genuinely different, then immediately layering TypeScript on top. In 2026 and beyond, TypeScript is not optional for client work. It is just how JavaScript is written professionally. Treat it as one language, not two.",
    nonneg: "javascript.info chapters 1–9 + TypeScript Handbook in full. Both free. Do every exercise. These are your permanent reference — bookmark them.",
    resources: [
      { label: "JavaScript: The Hard Parts", sub: "STABLE BET · Will Sentance · Frontend Masters · paid · the best course for understanding JS deeply", type: "Course", url: "https://frontendmasters.com/courses/javascript-hard-parts-v2/" },
      { label: "You Don't Know JS (2nd Ed.)", sub: "STABLE BET · Get Started + Scope & Closures · free on GitHub · read alongside the course", type: "Book", url: "https://github.com/getify/You-Dont-Know-JS" },
      { label: "TypeScript Fundamentals v4", sub: "STABLE BET · Mike North · Frontend Masters · paid · best structured TS course available", type: "Course", url: "https://frontendmasters.com/courses/typescript-v4/" },
      { label: "javascript.info + TypeScript Handbook + JS & jQuery (Duckett)", sub: "STABLE BET · all free/owned · javascript.info + TS Handbook as primary references · Duckett (you own it) as visual fallback when something doesn't click", type: "Free", url: "https://javascript.info/" },
    ],
  },
  {
    num: "02",
    title: "React — Deep, Not Fast",
    duration: "8–10 weeks",
    color: "#45AAF2",
    summary: "React has too much market share to go anywhere in your 5-7 year window. But most developers learn it shallow — they can follow tutorials but can't architect a real application. This phase goes deep: the mental model of declarative UI, component design, state management, performance, and accessibility. Your Selenium background means you understand the DOM — now learn the abstraction layer on top of it. Do not rush this phase.",
    nonneg: "Build 4 projects from scratch — not from tutorials. A data table, a multi-step form, a real-time search, and one of your own choosing. No project = no next phase.",
    resources: [
      { label: "React Official Docs (react.dev)", sub: "STABLE BET · The new docs are genuinely excellent · free · start here", type: "Free", url: "https://react.dev/learn" },
      { label: "React – The Complete Guide", sub: "CURRENT BEST · Schwarzmüller · Udemy · €13-15 on sale · most comprehensive course", type: "Course", url: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/" },
      { label: "Complete Intro to React v9", sub: "STABLE BET · Brian Holt · Frontend Masters · paid · excellent mental model focus", type: "Course", url: "https://frontendmasters.com/courses/complete-react-v9/" },
      { label: "TanStack Query Docs", sub: "CURRENT BEST · tanstack.com · server state management · every client project needs this · free", type: "Free", url: "https://tanstack.com/query/latest/docs/framework/react/overview" },
    ],
  },
  {
    num: "03",
    title: "Next.js & the Modern Web Stack",
    duration: "6–8 weeks",
    color: "#2ECC71",
    summary: "Next.js is what clients are buying. The App Router, Server Components, and the Vercel deployment model are where the ecosystem has landed. Alongside Next.js, you need Tailwind CSS (utility-first CSS has won — even if Tailwind itself gets replaced in 5 years, the mental model transfers) and a component system. shadcn/ui is the current best answer: unstyled primitives you own, not a locked-in library. These tools change — the underlying skill of composing UI systems does not.",
    nonneg: "Build and deploy a complete multi-page Next.js app with Tailwind + shadcn/ui to Vercel. Must have: dynamic routes, loading states, error boundaries, SEO metadata, and a 90+ Lighthouse score.",
    resources: [
      { label: "Next.js Official Docs", sub: "STABLE BET · nextjs.org/learn · App Router focused · free · start here", type: "Free", url: "https://nextjs.org/learn" },
      { label: "Next.js & React – Complete Guide", sub: "CURRENT BEST · Schwarzmüller · Udemy · €13-15 on sale · most thorough App Router course", type: "Course", url: "https://www.udemy.com/course/nextjs-react-the-complete-guide/" },
      { label: "Tailwind CSS From Scratch", sub: "CURRENT BEST · Brad Traversy · Udemy · €13-15 on sale · best Tailwind course for practical projects", type: "Course", url: "https://www.udemy.com/course/tailwind-from-scratch/" },
      { label: "shadcn/ui Docs", sub: "CURRENT BEST · ui.shadcn.com · components you own, not import · free", type: "Free", url: "https://ui.shadcn.com/docs" },
      { label: "Head First Design Patterns", sub: "STABLE BET · Freeman & Robson · YOU OWN THIS (2nd Ed.) · read Chapter 1–4 during this phase · component design patterns transfer directly to React architecture", type: "Book", url: "https://www.oreilly.com/library/view/head-first-design/9781492077992/" },
    ],
  },
  {
    num: "04",
    title: "Backend, APIs & Authentication",
    duration: "6–8 weeks",
    color: "#A55EEA",
    summary: "Your RestAssured background means you already think in HTTP — request/response cycles, status codes, JSON payloads, auth headers. You're moving from the test side to the implementation side of the same contracts. REST API design is a fundamental that does not expire. Authentication patterns — sessions, JWT, OAuth — are also fundamentals, even if the specific libraries change every few years. Learn the concepts deeply. The library you implement them with today is secondary.",
    nonneg: "Build a REST API with full CRUD, JWT auth with refresh rotation, Zod validation on every input, and structured error responses. Then write a test suite for it — applying your QA instinct to your own code.",
    resources: [
      { label: "Node.js: The Complete Guide", sub: "STABLE BET · Schwarzmüller · Udemy · €13-15 on sale · fundamentals-first, kept updated", type: "Course", url: "https://www.udemy.com/course/nodejs-the-complete-guide/" },
      { label: "Test-Driven Development", sub: "STABLE BET · Kent Beck · YOU OWN THIS · read alongside building your API · applying TDD to your own endpoints is the fastest way to level up from QA tester to QA-minded developer", type: "Book", url: "https://www.amazon.com/Test-Driven-Development-Kent-Beck/dp/0321146530" },
      { label: "Zod Docs", sub: "CURRENT BEST · zod.dev · runtime type validation · free · non-negotiable for client projects", type: "Free", url: "https://zod.dev/" },
      { label: "Auth.js (NextAuth) Docs", sub: "CURRENT BEST · authjs.dev · authentication for Next.js · free · understand the concepts behind it too", type: "Free", url: "https://authjs.dev/" },
    ],
  },
  {
    num: "05",
    title: "Databases — SQL as a Permanent Skill",
    duration: "4–6 weeks",
    color: "#FF6B6B",
    summary: "SQL has been 'about to be replaced' for 30 years. PostgreSQL specifically is more popular than ever. Learn SQL deeply — not just how to query, but how to design schemas, write migrations, use indexes, and think about data integrity. The ORM (Prisma today, something else in 3 years) is just a layer on top. Supabase gives you PostgreSQL with auth, storage, and realtime out of the box — it's the fastest path to client-ready backends. But always understand what's happening underneath.",
    nonneg: "Design a schema from scratch, write 20 non-trivial queries without the ORM, then rebuild the same queries with Prisma. You must understand both layers.",
    resources: [
      { label: "Complete SQL & Databases Bootcamp", sub: "CURRENT BEST · Zero to Mastery · Udemy · €13-15 on sale · best practical SQL course", type: "Course", url: "https://www.udemy.com/course/complete-sql-databases-bootcamp-zero-to-mastery/" },
      { label: "Learning SQL", sub: "STABLE BET · Alan Beaulieu · O'Reilly · fundamentals that don't expire · buy the book", type: "Book", url: "https://www.oreilly.com/library/view/learning-sql-3rd/9781492057604/" },
      { label: "Prisma Docs", sub: "CURRENT BEST · prisma.io · standard ORM for Next.js · free", type: "Free", url: "https://www.prisma.io/docs/getting-started" },
      { label: "Supabase Docs", sub: "CURRENT BEST · supabase.com · PostgreSQL + auth + storage · free tier", type: "Free", url: "https://supabase.com/docs" },
    ],
  },
  {
    num: "06",
    title: "Quality, Delivery & Landing Clients",
    duration: "Ongoing",
    color: "#FD9644",
    summary: "This is where your QA background becomes a direct competitive advantage. Most freelance developers ship untested code and poor documentation. You already know what a proper handover looks like, what test coverage means, and how to think about quality systematically. That is rare and valuable. Add payments (Stripe — the market standard), AI features (the baseline expectation within 2-3 years), and the ability to reach out to your existing QA clients with a new service offering. Your first full-stack client is already in your network.",
    nonneg: "Ship one complete client-ready project publicly — auth, database, payments, CI pipeline, Playwright E2E tests, and a written handover document. This is your portfolio. Then reach out to 3 existing QA clients.",
    resources: [
      { label: "Stripe Docs", sub: "STABLE BET · stripe.com/docs · payments are in every client project · free", type: "Free", url: "https://stripe.com/docs" },
      { label: "JavaScript Testing Practices", sub: "STABLE BET · Kent C. Dodds · Frontend Masters · paid · testing JS/TS the right way — your QA background makes this click fast", type: "Course", url: "https://frontendmasters.com/courses/testing-practices-principles/" },
      { label: "Vercel AI SDK", sub: "CURRENT BEST · sdk.vercel.ai · AI features in Next.js · bridges to AI roadmap · free", type: "Free", url: "https://sdk.vercel.ai/docs" },
      { label: "The Art of Unit Testing", sub: "STABLE BET · Roy Osherove · YOU OWN THIS (3rd Ed.) · read during Phase 06 · directly reinforces your QA competitive advantage in a JS/TS context", type: "Book", url: "https://www.artofunittesting.com/" },
      { label: "Syntax Podcast", sub: "STABLE BET · syntax.fm · Wes Bos & Scott Tolinski · stays current · free", type: "Free", url: "https://syntax.fm/" },
    ],
  },
];


// ─── QA-TO-AI-ENGINEER ROADMAP (FOR COSMIN) ─────────────────────
const qaAiRoadmapPhases = [
  {
    num: "01",
    title: "Python Fast-Track",
    duration: "3–4 weeks",
    color: "#FF6B35",
    summary: "Java to Python is one of the easiest language transitions in programming. The syntax is simpler, there's no type verbosity, and everything you know about OOP, data structures, and algorithms transfers directly. Focus on Python-specific idioms: list comprehensions, generators, decorators, and the data science ecosystem.",
    nonneg: "Finish Automate the Boring Stuff first — you own it, start page one tonight. Then automate one real QA task: parse a test report, rename files, or scrape a test result page.",
    resources: [
      { label: "Automate the Boring Stuff with Python", sub: "STABLE BET · Al Sweigart · YOU OWN THIS (2nd Ed.) · START HERE · task-driven from page one · free online at automatetheboringstuff.com · better than any Udemy course for your background", type: "Book", url: "https://automatetheboringstuff.com/" },
      { label: "Fluent Python", sub: "STABLE BET · Luciano Ramalho · O'Reilly · idiomatic Python · buy the book · permanent reference", type: "Book", url: "https://www.oreilly.com/library/view/fluent-python-2nd/9781492056348/" },
      { label: "Kaggle Learn", sub: "CURRENT BEST · kaggle.com/learn · free · Python, Pandas, SQL · best free supplement", type: "Free", url: "https://www.kaggle.com/learn" },
      { label: "Pragmatic Thinking & Learning", sub: "STABLE BET · Andy Hunt · YOU OWN THIS · read during Phase 01 · directly about how developers build mental models · given your note-taking struggles this is worth 2 hours of your time before starting", type: "Book", url: "https://pragprog.com/titles/ahptl/pragmatic-thinking-and-learning/" },
    ],
  },
  {
    num: "02",
    title: "ML Fundamentals",
    duration: "6–8 weeks",
    color: "#FFD166",
    summary: "Enough math and ML to understand what models are doing — not to become a researcher. Your analytical QA mindset will make model evaluation click immediately. You already think in terms of test cases, edge cases, and failure modes — which is exactly how you should think about ML models.",
    nonneg: "Hands-On ML + fast.ai — do both. They're complementary: one is top-down, one is bottom-up.",
    resources: [
      { label: "ML Specialization", sub: "STABLE BET · Andrew Ng · Coursera · audit free or pay for certificate · the gold standard · no better ML intro exists", type: "Course", url: "https://www.coursera.org/specializations/machine-learning-introduction" },
      { label: "Hands-On ML", sub: "STABLE BET · Aurélien Géron · O'Reilly · buy the book · best practical ML reference", type: "Book", url: "https://www.oreilly.com/library/view/hands-on-machine-learning/9781098125967/" },
      { label: "fast.ai", sub: "STABLE BET · course.fast.ai · top-down approach · completely free · do alongside Andrew Ng", type: "Free", url: "https://course.fast.ai/" },
      { label: "Math for ML Specialization", sub: "STABLE BET · Imperial College · Coursera · audit free · just enough math, nothing more", type: "Course", url: "https://www.coursera.org/specializations/mathematics-machine-learning" },
    ],
  },
  {
    num: "03",
    title: "LLMs & the Anthropic API",
    duration: "4–6 weeks",
    color: "#06D6A0",
    summary: "You're already building with the Anthropic API. This phase goes deeper — prompt engineering, structured outputs, RAG, function calling, agents, and evals. Your QA instinct for edge cases and failure modes is a direct superpower for building reliable LLM features.",
    nonneg: "Build a production-quality LLM feature with a proper eval suite — apply your QA mindset to AI output quality.",
    resources: [
      { label: "Anthropic Docs", sub: "STABLE BET · docs.anthropic.com · your primary reference · free · read every page", type: "Free", url: "https://docs.anthropic.com/" },
      { label: "ChatGPT Prompt Engineering for Devs", sub: "CURRENT BEST · Isa Fulford + Andrew Ng · DeepLearning.AI · free · best prompt engineering intro", type: "Free", url: "https://learn.deeplearning.ai/courses/chatgpt-prompt-eng-for-developers" },
      { label: "AI Engineering", sub: "STABLE BET · Chip Huyen · O'Reilly 2024 · buy the book · the definitive production LLM reference", type: "Book", url: "https://www.oreilly.com/library/view/ai-engineering/9781098166298/" },
      { label: "DeepLearning.AI Short Courses", sub: "CURRENT BEST · learn.deeplearning.ai · pick 4 relevant ones · all free", type: "Free", url: "https://learn.deeplearning.ai/" },
    ],
  },
  {
    num: "04",
    title: "RAG, Agents & Production Patterns",
    duration: "4–6 weeks",
    color: "#118AB2",
    summary: "The patterns that make LLM products actually work in production — not just in demos. RAG architecture, the ReAct agent loop, tool use, context management, and cost control. Your API testing background means you already understand the contracts between services. Agents are just API orchestration with an LLM in the loop.",
    nonneg: "Build a RAG pipeline from scratch with raw Anthropic API + pgvector first. Understand every layer. Only then add LlamaIndex on top — not before.",
    resources: [
      { label: "Building and Evaluating Advanced RAG", sub: "CURRENT BEST · DeepLearning.AI · free · best focused RAG course available", type: "Free", url: "https://learn.deeplearning.ai/courses/building-evaluating-advanced-rag" },
      { label: "AI Agents in LangGraph", sub: "CURRENT BEST · DeepLearning.AI · free · agents built properly", type: "Free", url: "https://learn.deeplearning.ai/courses/ai-agents-in-langgraph" },
      { label: "LlamaIndex Docs", sub: "CURRENT BEST · docs.llamaindex.ai · RAG framework · free · alternative to LangChain", type: "Free", url: "https://docs.llamaindex.ai/" },
      { label: "Latent Space Podcast", sub: "STABLE BET · latent.space · state of AI engineering · free · listen while commuting", type: "Free", url: "https://www.latent.space/" },
    ],
  },
  {
    num: "05",
    title: "Evals, MLOps & Production AI",
    duration: "4–6 weeks",
    color: "#EF476F",
    summary: "This is where your QA career becomes your biggest asset. Production AI is fundamentally a quality problem: models hallucinate, drift, and fail silently. Building eval suites, monitoring pipelines, and systematic testing for AI systems is something most ML engineers skip — and you already know how to do it instinctively.",
    nonneg: "Build a full eval suite for an LLM feature: 20+ test cases, scoring rubric, regression detection. Treat it like a QA handover.",
    resources: [
      { label: "MLOps Specialization", sub: "STABLE BET · Andrew Ng · Coursera · audit free · production ML mindset · the right way to think about deployed models", type: "Course", url: "https://www.coursera.org/specializations/machine-learning-engineering-for-production-mlops" },
      { label: "Designing ML Systems", sub: "STABLE BET · Chip Huyen · O'Reilly · buy the book · the production ML bible · more important than any course", type: "Book", url: "https://www.oreilly.com/library/view/designing-machine-learning/9781098107956/" },
      { label: "LLM Evaluation & Monitoring", sub: "CURRENT BEST · Arize AI · free course · purpose-built for LLM evals · directly applicable", type: "Free", url: "https://arize.com/llm-course/" },
      { label: "Weights & Biases Courses", sub: "CURRENT BEST · wandb.ai/courses · free · experiment tracking + LLMOps course", type: "Free", url: "https://www.wandb.courses/" },
    ],
  },
  {
    num: "06",
    title: "Specialise & Land AI Clients",
    duration: "Ongoing",
    color: "#B983FF",
    summary: "Pick your lane: AI-powered SaaS products, enterprise AI pipelines, or AI quality consulting — where your QA + AI skills are a truly unique combination. AI quality consulting is particularly strong: very few people can audit AI systems for quality and reliability. That's a premium service most companies don't know they need yet, but will within 2-3 years.",
    nonneg: "Ship one AI-powered product or land one AI consulting engagement. Either counts as proof of the skill.",
    resources: [
      { label: "Full Stack Deep Learning", sub: "STABLE BET · fullstackdeeplearning.com · free · end-to-end ML product thinking", type: "Free", url: "https://fullstackdeeplearning.com/course/" },
      { label: "HuggingFace NLP Course", sub: "STABLE BET · huggingface.co/learn · free · understand the model ecosystem", type: "Free", url: "https://huggingface.co/learn/nlp-course" },
      { label: "Braintrust", sub: "CURRENT BEST · braintrustdata.com · AI eval platform · free tier · use for client eval work", type: "Free", url: "https://www.braintrustdata.com/" },
      { label: "Lenny's Newsletter + Latent Space", sub: "STABLE BET · both free · product strategy + AI engineering · read both weekly", type: "Free", url: "https://www.lennysnewsletter.com/" },
    ],
  },
];


// ─── QA-TO-FULLSTACK CURRICULUM (GENERIC) ────────────────────────
const qaFsCurriculumPhases = [
  {
    id: 1,
    phase: "Phase 01",
    title: "JavaScript & TypeScript Foundations",
    color: "#F7B731",
    intro: "You write Java every day. These tasks focus exclusively on what JS/TS does differently — not what you already know. Expected pace: 4-6 weeks. Move faster where Java knowledge transfers, slower where it doesn't.",
    tasks: [
      {
        id: "01-01",
        title: "Map every JS gotcha that would break a Java developer",
        difficulty: "Warm-up",
        time: "3h",
        what: "Write a JS file that deliberately demonstrates 15 behaviours that differ from Java: loose equality (== vs ===), type coercion, hoisting, var vs let vs const scope, this in different contexts, null vs undefined vs NaN, prototype chain, truthy/falsy values, closures capturing loop variables, async order of execution, object reference vs value, array methods returning new arrays, arguments object vs rest params, and default parameter evaluation. For each: write the code, log the output, and write a comment explaining why Java would behave differently.",
        why: "Before writing production JS you need a map of the traps. You'll hit every one of these in client code. Better to encounter them in a controlled experiment than in a bug at 2am.",
        output: "gotchas.js — 15 annotated examples. Each one must show the 'surprising' output and explain the why. This becomes a permanent reference.",
        skills: ["type coercion", "hoisting", "closures", "this binding", "equality"],
        ipad: true,
        codespaces: "Create two .ts files, run with npx ts-node in the Codespaces terminal. All output via console.log.",
      },
      {
        id: "01-02",
        title: "Build a typed API client in TypeScript from scratch",
        difficulty: "Beginner",
        time: "4h",
        what: "Build a typed HTTP client in TypeScript that wraps the native fetch API. It must have: generic response type ApiResponse<T>, typed error class ApiError with status code and message, methods for GET/POST/PUT/DELETE each with correct type signatures, automatic JSON serialisation/deserialisation, a timeout mechanism using AbortController, and retry logic with exponential backoff (max 3 retries). Test it against JSONPlaceholder.",
        why: "You know API clients from RestAssured. Rebuilding one in TypeScript teaches generics, interfaces, and error typing through a domain you completely own. The timeout and retry logic are production patterns every real client project needs.",
        output: "api-client.ts with full type coverage + a usage file making real calls to JSONPlaceholder demonstrating all 4 methods, error handling, and a timeout triggering.",
        skills: ["TypeScript generics", "interfaces", "fetch API", "AbortController", "error classes"],
        ipad: true,
        codespaces: "Single TypeScript file — npx ts-node api-client.ts. Uses JSONPlaceholder — no local server needed.",
      },
      {
        id: "01-03",
        title: "Implement every Array method from scratch",
        difficulty: "Beginner",
        time: "3h",
        what: "Implement map, filter, reduce, find, findIndex, some, every, flat, and flatMap from scratch using only basic for loops — no built-in array methods. Type all implementations with TypeScript generics. Then write 5 non-trivial examples using the built-in versions that process a dataset of 50 mock users with name, age, role, and salary fields.",
        why: "Array methods are in every line of frontend and backend JavaScript. Understanding them at the implementation level — not just the usage level — means you can reason about performance, chain them correctly, and debug when they don't behave as expected.",
        output: "array-methods.ts with all 9 implementations + 5 real usage examples on the mock dataset. All types must be correct — no 'any'.",
        skills: ["TypeScript generics", "higher-order functions", "functional patterns", "array methods", "type signatures"],
        ipad: true,
        codespaces: "Single TypeScript file — npx ts-node array-methods.ts. Pure computation, no external dependencies.",
      },
      {
        id: "01-04",
        title: "Master async: callbacks → Promises → async/await → error handling",
        difficulty: "Intermediate",
        time: "4h",
        what: "Build the same feature 4 ways: a function that fetches a user, then fetches their posts, then fetches comments on the first post (3 sequential API calls). Implement with: (1) nested callbacks, (2) Promise chaining, (3) async/await, (4) async/await with proper error handling including network errors, JSON parse errors, and not-found errors. For each implementation, add a comment explaining what breaks if you get it wrong.",
        why: "Java developers trip on JS async the most — not because it's hard but because it's different. Walking through all 4 patterns in sequence, with the same feature, builds the mental model that sticks. Your RestAssured tests are synchronous — this will feel different until it clicks.",
        output: "async-patterns.ts with all 4 implementations. The 4th must handle at least 3 distinct error types with specific messages. Add a test that deliberately triggers each error.",
        skills: ["Promises", "async/await", "error handling", "sequential async", "AbortController"],
        ipad: true,
        codespaces: "Single TypeScript file — npx ts-node async-patterns.ts. Uses JSONPlaceholder API.",
      },
      {
        id: "01-05",
        title: "Rewrite a Selenium test file in Playwright with TypeScript",
        difficulty: "Intermediate",
        time: "3–4h",
        what: "Take a real test file from your QA work (or create a realistic mock). Rewrite it in Playwright with TypeScript — same test cases, same assertions, just TypeScript. Add: typed page objects, a test data factory function with typed parameters, parameterised test cases using test.each, and a custom expect matcher. Run it against a real public site (Wikipedia, GitHub, or similar).",
        why: "Rewriting tests you already know the intent of removes all cognitive load around 'what am I testing.' You focus 100% on TypeScript patterns, Playwright's API, and async test structure. You'll also discover Playwright is significantly more ergonomic than Selenium.",
        output: "A working Playwright test suite in TypeScript: typed page objects + data factory + parameterised tests + custom matcher. All tests must pass.",
        skills: ["Playwright", "TypeScript", "page objects", "test.each", "custom matchers"],
        ipad: true,
        codespaces: "Install Playwright in Codespaces: npx playwright install chromium --with-deps. Tests run headless.",
      },
    ],
  },
  {
    id: 2,
    phase: "Phase 02",
    title: "React — Deep, Not Fast",
    color: "#45AAF2",
    intro: "Genuinely new territory. The mental shift from imperative (Selenium: find element, click it) to declarative (React: describe what the UI should look like given this state) is the real challenge — not the syntax. Don't rush.",
    tasks: [
      {
        id: "02-01",
        title: "Build a sortable, filterable data table from scratch",
        difficulty: "Beginner",
        time: "5h",
        what: "Build a React component that takes any array of objects and renders a data table. Features: click column header to sort ascending/descending (visual indicator), a global search input that filters all string columns simultaneously, pagination with configurable page size (10/25/50 rows), row count display ('Showing 1-10 of 47'), and a 'no results' empty state. Use TypeScript generics so it works with any data shape. No libraries — just React state.",
        why: "Data tables are in virtually every client project — dashboards, admin panels, reports. Building this forces the core React mental model: state drives UI, not the other way around. Your Selenium instinct of 'find the element and check it' has to flip to 'define what the table looks like when state is X'.",
        output: "DataTable.tsx — generic, typed, works with any flat object array. Demonstrated with a mock dataset of 50 users. All 5 features working.",
        skills: ["useState", "useMemo", "TypeScript generics", "derived state", "controlled components"],
        ipad: true,
        codespaces: "npm create vite@latest myapp -- --template react-ts in Codespaces. Port-forward 5173 in the Ports tab.",
      },
      {
        id: "02-02",
        title: "Implement global state management without a library",
        difficulty: "Intermediate",
        time: "4h",
        what: "Build a mini state management system using only React's useContext and useReducer. Implement: a typed action system (discriminated union types), selectors to avoid unnecessary re-renders, a useDispatch and useSelector hook API (similar to Redux but yours), and a devtools panel that shows the current state and last 10 actions. Apply it to manage a shopping cart: add item, remove item, update quantity, clear cart, apply discount code.",
        why: "Most React developers use Redux or Zustand without understanding what problem they solve. Building the same thing manually teaches you when you actually need a state library and when you don't. This knowledge doesn't expire even as the specific libraries change.",
        output: "A shopping cart app using your custom state system. Typed actions, selectors, hooks, and a visible devtools panel showing state and action history.",
        skills: ["useContext", "useReducer", "discriminated unions", "custom hooks", "state patterns"],
        ipad: true,
        codespaces: "Same Vite React app in Codespaces. Port-forward 5173.",
      },
      {
        id: "02-03",
        title: "Build a real-time search with race condition handling",
        difficulty: "Intermediate",
        time: "4h",
        what: "Build a search component that calls a public API as the user types. Requirements: 300ms debounce, show loading/error/empty/results states, handle race conditions correctly using AbortController (only the latest request's result renders), cache results in a useRef to avoid redundant requests, and display a 'stale' indicator when showing cached results. Test by typing fast enough to trigger multiple concurrent requests and verify only the last one renders.",
        why: "Race conditions in async React are one of the most common production bugs — and they're invisible until a user notices wrong data appearing. Your QA instinct should immediately recognise this as a timing issue. This task teaches you to fix it properly, not just hope it doesn't happen.",
        output: "SearchComponent.tsx that correctly handles all 5 states and provably never renders stale results. Add a console.log showing cancelled requests to demonstrate it works.",
        skills: ["useEffect cleanup", "AbortController", "debounce", "caching", "race conditions"],
        ipad: true,
        codespaces: "Same Vite app. Uses public API — no local backend needed. Port-forward 5173.",
      },
      {
        id: "02-04",
        title: "Build an accessible multi-step form with validation",
        difficulty: "Intermediate",
        time: "5h",
        what: "Build a 4-step registration form. Each step: personal info, account details, preferences, review & submit. Requirements: validate each step before allowing progression, show inline field errors (not just on submit), a progress indicator, back navigation that preserves entered data, full keyboard navigation, ARIA labels and live regions for screen readers, and a submission summary before final submit. Use React Hook Form + Zod for validation.",
        why: "Accessibility is increasingly contractually required by clients — especially enterprise and public sector. React Hook Form + Zod is the current standard for form handling. Building an accessible form from scratch teaches both the library and the WCAG principles that won't change even when the library does.",
        output: "MultiStepForm.tsx — all 4 steps, full validation, accessible, keyboard navigable. Test it with your keyboard only — if you can complete it without a mouse, it passes.",
        skills: ["React Hook Form", "Zod", "ARIA", "accessibility", "multi-step state"],
        ipad: true,
        codespaces: "Same Vite app. npm install react-hook-form zod. Port-forward 5173.",
      },
      {
        id: "02-05",
        title: "Optimise a slow React application",
        difficulty: "Advanced",
        time: "5h",
        what: "Build a deliberately slow React app: a list of 500 items, each with a complex card component, a global counter that updates every second, and a search filter. Measure initial render time and interaction performance with React DevTools Profiler. Then optimise using: React.memo, useMemo, useCallback, virtualization with a windowing library, code splitting with React.lazy, and moving the counter to a separate context. Measure again and document the improvement.",
        why: "Performance is a real client requirement — not just a nice-to-have. Clients notice slow apps and leave. More importantly, fixing performance issues without understanding the root cause is guesswork. This task teaches you to measure first, then fix — which is exactly how you approach testing.",
        output: "Before and after Profiler screenshots + a performance report listing each optimisation, what it fixed, and the measured improvement. Treat it like a QA performance bug report.",
        skills: ["React.memo", "useMemo", "useCallback", "windowing", "code splitting", "Profiler"],
        ipad: true,
        codespaces: "Same Vite app. React DevTools Profiler works in the Codespaces browser preview.",
      },
    ],
  },
  {
    id: 3,
    phase: "Phase 03",
    title: "Next.js & the Modern Web Stack",
    color: "#2ECC71",
    intro: "This is what clients are buying. These tasks build real, deployable projects using the stack that dominates the market right now — and is a safe bet for the next 5-7 years.",
    tasks: [
      {
        id: "03-01",
        title: "Build a production-ready Next.js app and score 90+ on Lighthouse",
        difficulty: "Intermediate",
        time: "6–8h",
        what: "Build a multi-page Next.js App Router application: a home page, a dynamic /blog/[slug] page, an /about page, and a /contact page with a working form. Requirements: TypeScript throughout, Tailwind CSS for styling, shadcn/ui components, proper metadata for each page (title, description, og:image), a sitemap.xml, robots.txt, error.tsx and loading.tsx for every route, and a Lighthouse score of 90+ on Performance, Accessibility, Best Practices, and SEO. Deploy to Vercel.",
        why: "A 90+ Lighthouse score is the difference between a professional deliverable and a hobby project. Clients and their SEO teams will run Lighthouse on anything you ship. Building to this standard from the start teaches you what matters — image optimisation, font loading, semantic HTML, meta tags — not as afterthoughts but as defaults.",
        output: "Live Vercel URL + GitHub repo + screenshot of Lighthouse scores (all 4 categories). If any score is below 90, fix it before submitting.",
        skills: ["Next.js App Router", "metadata API", "Tailwind", "shadcn/ui", "Lighthouse", "SEO"],
        ipad: true,
        codespaces: "npx create-next-app in Codespaces. Port-forward 3000. Deploy to Vercel from terminal with npx vercel.",
      },
      {
        id: "03-02",
        title: "Implement Server Components vs Client Components correctly",
        difficulty: "Intermediate",
        time: "4h",
        what: "Build a dashboard page that demonstrates correct Server/Client Component boundaries. Requirements: data fetching in Server Components (no useEffect), interactive UI in Client Components, a streaming pattern with Suspense boundaries for slow data, a Server Action for a form submission, passing server data to client components correctly, and a comparison showing bundle size with and without 'use client'. Document every decision with a comment explaining why.",
        why: "Server Components are the biggest mental model shift in Next.js App Router. Most developers get it wrong by adding 'use client' everywhere — which defeats the purpose and bloats the bundle. Understanding the boundary correctly is what separates a developer who knows Next.js from one who just uses it.",
        output: "A dashboard with correct SC/CC boundaries + Suspense streaming + Server Action + a written explanation (code comments) of every boundary decision + bundle size comparison.",
        skills: ["Server Components", "Client Components", "Suspense", "Server Actions", "streaming"],
        ipad: true,
        codespaces: "Same Next.js app in Codespaces. Port-forward 3000. Server Actions work normally.",
      },
      {
        id: "03-03",
        title: "Build a reusable component library with Tailwind + shadcn/ui",
        difficulty: "Intermediate",
        time: "5h",
        what: "Build a small but complete component library for a hypothetical client: Button (5 variants, 3 sizes), Input with validation states, Modal with focus trap, Dropdown with keyboard navigation, DataTable (from Phase 02, now with Tailwind), Toast notification system, and a LoadingSpinner. Each component must be: typed with TypeScript, accessible (keyboard + screen reader), documented with usage examples, and themed (support light/dark mode via CSS variables).",
        why: "Every client project starts with component setup. Building a reusable, accessible, themed component system teaches you Tailwind composition patterns, CSS variables for theming, and accessibility primitives that transfer to every future project regardless of which component library is popular at the time.",
        output: "A components/ directory with all 7 components + a demo page showing every variant and state. All keyboard navigable. Light/dark mode working.",
        skills: ["Tailwind composition", "CSS variables", "accessibility", "dark mode", "component APIs"],
        ipad: true,
        codespaces: "Same Next.js app. npx shadcn@latest init. All UI work — no external services needed.",
      },
      {
        id: "03-04",
        title: "Implement data fetching patterns for every scenario",
        difficulty: "Intermediate",
        time: "4h",
        what: "Build 4 pages demonstrating the correct data fetching pattern for each scenario: (1) Static page with build-time data (SSG), (2) Dynamic page with per-request server data (SSR), (3) Client-side data with TanStack Query (loading/error/refetch/optimistic update), (4) Infinite scroll with TanStack Query's useInfiniteQuery. For each, explain in a comment when you'd choose this pattern for a client project and why.",
        why: "Choosing the wrong data fetching pattern is one of the most common Next.js mistakes — it causes performance issues, stale data bugs, and unnecessary server load. Your QA instinct for 'what breaks if the data is stale' is directly applicable here.",
        output: "4 pages with correct patterns + TanStack Query with optimistic update + infinite scroll + decision guide comments explaining when to use each.",
        skills: ["SSG", "SSR", "TanStack Query", "optimistic updates", "infinite scroll"],
        ipad: true,
        codespaces: "Same Next.js app. TanStack Query uses public APIs. Port-forward 3000.",
      },
      {
        id: "03-05",
        title: "Build and deploy a complete client-ready landing page",
        difficulty: "Advanced",
        time: "1 week",
        what: "Build a complete SaaS landing page as if for a real client: hero section, features grid, pricing table (3 tiers), testimonials, FAQ accordion, contact form with validation and email sending (Resend), mobile-responsive, animated (Framer Motion for entry animations only — no gratuitous animation), 90+ Lighthouse score, deployed to a custom domain on Vercel. This is a portfolio piece. Treat it like a client deliverable.",
        why: "Landing pages are the most common first client project. Building one to a professional standard — not a tutorial clone — gives you a portfolio piece you can show to clients who ask 'have you built something like this before?' The Resend + form integration teaches transactional email, which appears in almost every client project.",
        output: "Live URL on a custom domain + GitHub repo + a 1-page case study documenting the stack choices, performance metrics, and any interesting decisions. This is what you show clients.",
        skills: ["responsive design", "Framer Motion", "Resend", "form handling", "custom domain", "portfolio"],
        ipad: false,
        codespaces: "Core build works in Codespaces. Custom domain setup and Resend email integration are easier on laptop.",
      },
    ],
  },
  {
    id: 4,
    phase: "Phase 04",
    title: "Backend, APIs & Authentication",
    color: "#A55EEA",
    intro: "You already think in HTTP from RestAssured. These tasks move you from the test side to the implementation side of the same API contracts. The concepts — REST design, auth patterns, validation — are fundamentals. The libraries are the current best choices.",
    tasks: [
      {
        id: "04-01",
        title: "Design and build a REST API you'd be happy to test",
        difficulty: "Beginner",
        time: "6h",
        what: "Build a REST API for a task management system following REST conventions properly: correct HTTP verbs, meaningful status codes (not just 200 and 500), consistent error response format ({ error: { code, message, details } }), Zod validation on all inputs, pagination with cursor-based navigation on list endpoints, and filtering/sorting via query params. Then — write a test suite for it using Supertest. Aim for the test suite you'd want to hand off as a QA engineer.",
        why: "You've spent your career testing APIs. Now build one, then test it yourself. The experience of being on both sides of the API contract permanently sharpens both skills. The REST conventions are stable — they'll be valid in 7 years regardless of what framework you use.",
        output: "server.ts + tests/api.test.ts with 100% endpoint coverage including all error cases and edge cases. The test suite should read like a QA spec sheet.",
        skills: ["REST design", "Zod validation", "cursor pagination", "Supertest", "error formatting"],
        ipad: true,
        codespaces: "Node.js + Express in Codespaces. Port-forward the API port (e.g. 4000). Supertest runs in terminal.",
      },
      {
        id: "04-02",
        title: "Implement authentication — understand every layer",
        difficulty: "Intermediate",
        time: "6h",
        what: "Implement auth from scratch first — no Auth.js: bcrypt password hashing (understand why bcrypt, not SHA256), JWT access tokens (15min expiry) + refresh tokens (7 day, httpOnly cookie), refresh token rotation (invalidate old token on use), logout (clear cookie + invalidate refresh token in DB), and a protect middleware. Then implement the same auth using Auth.js v5. Write a comparison: what does Auth.js abstract away? What does it still require you to understand?",
        why: "Auth bugs are security vulnerabilities. Every client project has authentication. If you only know the library abstraction, you can't debug it when it breaks or audit it when a client asks. Build it from scratch once so you understand every layer. Then use the library productively because you know what it's doing.",
        output: "Scratch auth implementation + Auth.js implementation + a written comparison document. Both must pass the same test suite: happy path + 5 attack scenarios (expired token, tampered JWT, reused refresh token, missing cookie, SQL injection attempt on login).",
        skills: ["bcrypt", "JWT", "refresh rotation", "httpOnly cookies", "Auth.js", "security testing"],
        ipad: true,
        codespaces: "Same Node.js app. Cookies work with the Codespaces port-forwarded URL. All terminal work.",
      },
      {
        id: "04-03",
        title: "Build a file upload API with processing pipeline",
        difficulty: "Intermediate",
        time: "4–5h",
        what: "Build an API endpoint that accepts image uploads: validate file type (magic bytes, not just extension), validate file size (max 5MB), upload to Supabase Storage, generate a thumbnail server-side using Sharp, store metadata in the database (original URL, thumbnail URL, size, dimensions, upload timestamp, user ID), and return a typed response. Write tests covering: valid upload, wrong file type, oversized file, missing auth, duplicate filename handling.",
        why: "File upload is in almost every client project — profile photos, document uploads, product images. The security considerations (magic bytes, not extension) and server-side processing are things most tutorials skip. Your QA background will immediately generate the test cases — now implement what they test against.",
        output: "Upload endpoint + Sharp processing + Supabase Storage integration + typed response + full test suite covering all 5 test cases.",
        skills: ["multipart/form-data", "file validation", "Sharp", "Supabase Storage", "typed responses"],
        ipad: true,
        codespaces: "Sharp installs fine on the Codespaces Linux container. Supabase Storage is remote — connect from anywhere.",
      },
      {
        id: "04-04",
        title: "Add rate limiting, structured logging, and a health check",
        difficulty: "Beginner",
        time: "3h",
        what: "Add production hardening to your API from 04-01: rate limiting with express-rate-limit (100 req/15min globally, 5 req/15min on auth endpoints), structured JSON logging with Pino (every request: timestamp, method, path, status, response time, user ID if authenticated, request ID for tracing), and a /health endpoint that checks database connectivity and returns { status, uptime, database, timestamp }. Write tests verifying rate limiting triggers and the health check catches a bad DB connection.",
        why: "These are the basics you'd expect to see in a QA handover for any production API. You know what observable, testable, production-ready systems look like — now build one. The structured logging format is a stable pattern regardless of which logging library is popular.",
        output: "Updated API with rate limiting + Pino logging + health endpoint + tests proving rate limiting triggers after threshold + health check returning correct status on DB disconnect.",
        skills: ["rate limiting", "Pino logging", "health checks", "request tracing", "observability"],
        ipad: true,
        codespaces: "Pure Node.js additions — all runs in Codespaces terminal. No additional services needed.",
      },
      {
        id: "04-05",
        title: "Integrate Stripe payments end to end",
        difficulty: "Advanced",
        time: "6–8h",
        what: "Implement a complete Stripe integration: a product/pricing page (3 tiers, fetched from Stripe), checkout session creation, success and cancel redirect handling, webhook receiver with signature verification and idempotency, subscription status management (active/cancelled/past_due), a customer portal link, and a billing page showing current plan and invoice history. Test with Stripe's test mode and CLI webhook forwarding.",
        why: "Stripe is in nearly every client project that involves money. It's also complex enough that most developers get it subtly wrong — especially webhooks and idempotency. Your QA instinct for 'what happens if this webhook fires twice' is exactly the right question. Getting this right is a meaningful differentiator from other freelancers.",
        output: "Complete Stripe integration in a Next.js app: pricing page + checkout + webhooks + subscription management + billing portal. All tested in Stripe test mode. Webhook handling must be idempotent.",
        skills: ["Stripe Checkout", "webhooks", "HMAC verification", "idempotency", "subscription management"],
        ipad: false,
        codespaces: "Stripe CLI webhook forwarding works in Codespaces but setup is complex. Better done on laptop first.",
      },
    ],
  },
  {
    id: 5,
    phase: "Phase 05",
    title: "Databases — SQL as a Permanent Skill",
    color: "#FF6B6B",
    intro: "SQL is not going away. PostgreSQL specifically is thriving. These tasks build the underlying knowledge that transfers regardless of which ORM or BaaS is popular in 5 years.",
    tasks: [
      {
        id: "05-01",
        title: "Design a production schema and write a QA data integrity audit",
        difficulty: "Beginner",
        time: "4h",
        what: "Design a schema for a SaaS booking platform: users, organisations, memberships (user-org relationship with roles), services, bookings, availability_slots, payments, audit_log. Write SQL migrations with proper constraints (NOT NULL, UNIQUE, CHECK), foreign keys with correct ON DELETE behaviour, and indexes on every foreign key and commonly queried column. Then write 10 SQL queries that verify data integrity — the kind you'd write as a QA engineer checking a release.",
        why: "Schema design decisions made early are expensive to change later. Your QA instinct for 'what data invariants should always be true' is exactly the right lens for designing constraints. The 10 integrity queries are literally QA test cases written in SQL.",
        output: "migrations/ folder with numbered SQL files + 10 integrity verification queries with expected results and an explanation of what each one checks.",
        skills: ["schema design", "constraints", "foreign keys", "indexes", "data integrity queries"],
        ipad: true,
        codespaces: "Add PostgreSQL to Codespaces via devcontainer or connect to a remote Supabase project. psql available in terminal.",
      },
      {
        id: "05-02",
        title: "Write complex queries without an ORM",
        difficulty: "Intermediate",
        time: "4h",
        what: "Seed your booking schema with realistic data: 100 users, 10 organisations, 500 bookings, 1000 availability slots. Write 10 non-trivial SQL queries without any ORM: (1) bookings per organisation this month with revenue, (2) users with no bookings in 30 days, (3) most popular service per organisation, (4) availability gaps longer than 2 hours, (5) organisations where cancellation rate exceeds 20%, (6) user lifetime value, (7) running total of revenue by day, (8) users who booked the same service more than 3 times, (9) a recursive query for organisation hierarchy, (10) a window function showing each booking's rank within its organisation by value.",
        why: "ORMs abstract SQL but they can't replace understanding it. When a query is slow, when a report needs complex logic, when you're debugging unexpected data — you need to read and write SQL directly. These queries cover the patterns that appear most in real client projects.",
        output: "queries.sql with all 10 queries + their output on your seeded dataset. Each query must have a comment explaining what business question it answers.",
        skills: ["JOINs", "CTEs", "window functions", "recursive queries", "aggregation", "subqueries"],
        ipad: true,
        codespaces: "Same PostgreSQL setup. All SQL runs in psql or the SQLTools VS Code extension.",
      },
      {
        id: "05-03",
        title: "Find and fix slow queries — applied performance testing",
        difficulty: "Intermediate",
        time: "4h",
        what: "Seed the database with 100,000 bookings. Write 4 intentionally slow queries: full table scan on a large table, a missing index on a JOIN column, an N+1 query pattern (simulate it in SQL with a correlated subquery), and a non-SARGable WHERE clause (function on indexed column). Run EXPLAIN ANALYSE on each. Add the correct index or rewrite the query. Document before and after execution times. Write a report like a performance bug report.",
        why: "Performance testing is in your QA skill set. Applying it to database queries — find the bottleneck, measure it, fix it, verify the fix — is the same process you use every day. The EXPLAIN ANALYSE output is just a different kind of profiler output.",
        output: "performance_report.md documenting each slow query as a bug report: the query, EXPLAIN output, execution time, root cause, fix applied, new execution time, and percentage improvement.",
        skills: ["EXPLAIN ANALYSE", "index strategy", "N+1 detection", "SARGability", "query optimisation"],
        ipad: true,
        codespaces: "EXPLAIN ANALYSE runs in psql. Seed script runs in Codespaces terminal.",
      },
      {
        id: "05-04",
        title: "Implement row-level security and test it adversarially",
        difficulty: "Intermediate",
        time: "4h",
        what: "Enable RLS in Supabase on your booking schema. Write policies for 3 roles: anonymous users (can only read public service listings), authenticated users (can read/write their own bookings, read their organisation's data), organisation admins (can manage all bookings and users within their organisation). Then — write a test suite that attempts 10 unauthorised data accesses and verifies every one is blocked. Apply your adversarial QA thinking.",
        why: "Data leakage between tenants is one of the most serious bugs in multi-tenant SaaS applications — and one of the most common. RLS at the database layer is the most reliable prevention. Testing it adversarially — trying to break it — is exactly what you do professionally.",
        output: "Supabase migrations with 3-role RLS policies + a test suite with 10 adversarial access attempts, all blocked, with the exact error message logged for each.",
        skills: ["Supabase RLS", "multi-tenancy", "security testing", "auth.uid()", "adversarial testing"],
        ipad: true,
        codespaces: "Supabase is remote — connect from anywhere. Supabase CLI works in Codespaces terminal.",
      },
      {
        id: "05-05",
        title: "Build a full-stack feature end to end with database verification",
        difficulty: "Advanced",
        time: "8–10h",
        what: "Build a complete booking flow end to end: a Next.js booking form, a Server Action that validates input with Zod and creates the booking in the database, optimistic UI update in the client, a confirmation email via Resend, and a Playwright E2E test that: fills the form, submits it, verifies the success state in the UI, queries the database directly to verify the booking was created correctly, and checks the confirmation email was sent (use a test inbox). This is your Phase 05 capstone.",
        why: "End-to-end testing a full-stack feature — where you verify the database and the email, not just the UI — is what separates a QA-minded developer from one who just checks 'it looked like it worked.' You built it and you test it properly. That combination is rare.",
        output: "Complete booking flow + Playwright E2E test that verifies UI + database + email. The test must check the database row directly, not just the UI. All passing.",
        skills: ["Server Actions", "Zod", "optimistic UI", "Resend", "Playwright E2E", "database verification"],
        ipad: true,
        codespaces: "Full-stack Next.js in Codespaces. Playwright E2E runs headless. Port-forward 3000.",
      },
    ],
  },
  {
    id: 6,
    phase: "Phase 06",
    title: "Quality, Delivery & Landing Clients",
    color: "#FD9644",
    intro: "Your QA background is your competitive advantage. Use it. Most freelance developers ship untested code with no documentation. You know what professional delivery looks like.",
    tasks: [
      {
        id: "06-01",
        title: "Build a CI/CD pipeline that would pass your own QA review",
        difficulty: "Intermediate",
        time: "5h",
        what: "Set up a GitHub Actions workflow for your Next.js + Node.js project: TypeScript type checking (tsc --noEmit), ESLint, unit tests with coverage report (block merge if below 80%), integration tests, E2E tests in CI using Playwright with a headless browser, Docker build verification, and automatic deployment to Vercel on main branch merge. The PR must be blocked if any step fails. Add a test coverage badge to the README. Make it something you'd be satisfied receiving as a QA handover.",
        why: "Every professional client project needs CI. You know what a good pipeline looks like from the receiving end — now build one from the delivery end. The coverage threshold and blocking behaviour are things you've probably asked for in your QA career. Now they're your own standard.",
        output: ".github/workflows/ci.yml + deployment working + PR blocked by a failing test (screenshot) + passing PR deploying to Vercel (screenshot) + coverage badge in README.",
        skills: ["GitHub Actions", "TypeScript checking", "test coverage", "Playwright in CI", "automated deployment"],
        ipad: true,
        codespaces: "GitHub Actions — push from Codespaces to trigger CI. Edit .yml files in VS Code. All browser-based.",
      },
      {
        id: "06-02",
        title: "Add an AI feature to a real project",
        difficulty: "Intermediate",
        time: "4–5h",
        what: "Add one AI-powered feature to any project from this curriculum using the Anthropic API or Vercel AI SDK. Choose a feature that solves a real user problem: smart form auto-fill from context, content summarisation, natural language search, automated email drafting, or data extraction from unstructured input. Requirements: streaming response (no waiting 10 seconds), loading state, error handling with a fallback if the API is down, a token cost guardrail (max_tokens limit), and a usage log (model, tokens used, latency, feature name).",
        why: "Within 2-3 years, clients will expect AI features as baseline capability — not a premium add-on. Getting comfortable with the integration patterns now (streaming, error handling, cost control) means you'll be ahead of most freelancers when that expectation becomes standard. The usage log is QA thinking applied to AI.",
        output: "Live AI feature with all 5 requirements + a note on cost per call and how you'd price this into a client project budget.",
        skills: ["Anthropic API", "streaming", "error handling", "cost control", "usage logging"],
        ipad: true,
        codespaces: "Anthropic API calls work from anywhere. npm install @anthropic-ai/sdk. Port-forward 3000.",
      },
      {
        id: "06-03",
        title: "Write a professional project handover document",
        difficulty: "Beginner",
        time: "3h",
        what: "Write a complete handover document for your largest project from this curriculum — as if handing it to a client who will maintain it themselves or give it to another developer. Include: system overview (what it does, who it's for), architecture diagram (can be simple ASCII or a tool like Excalidraw), environment setup instructions (step-by-step, assume a new developer), deployment process, environment variables with descriptions, database schema overview, known limitations and technical debt, monitoring and alerting setup, and contact/support expectations.",
        why: "A professional handover document is the thing that gets you referrals. Clients remember the developer who handed over something well-documented. Most developers hand over a GitHub link and a verbal explanation. The contrast is stark and memorable.",
        output: "handover.md — a real document you'd be proud to send to a client. If a new developer couldn't set up the project from this document alone, it's not done.",
        skills: ["technical writing", "system documentation", "architecture diagrams", "client communication", "professional delivery"],
        ipad: true,
        codespaces: "Pure writing — use VS Code in Codespaces or any Markdown editor on iPad (iA Writer, Notion, etc).",
      },
      {
        id: "06-04",
        title: "Build your freelance full-stack portfolio and positioning",
        difficulty: "Beginner",
        time: "1 day",
        what: "Build your professional presence as a QA + Full Stack developer. Requirements: a portfolio site (built with Next.js + Tailwind, 90+ Lighthouse) with 3 case studies from this curriculum, each describing the problem, your approach, and the outcome. A GitHub profile README that clearly shows the QA + Full Stack combination. An updated professional profile (LinkedIn or Upwork) positioned as 'Full Stack Developer with QA background — I build software and test it properly.' Write one short testimonial request to an existing QA client.",
        why: "The 'QA + Full Stack' combination is genuinely rare and valuable. Clients who have worked with developers who don't test their own code will immediately understand the value. Most freelancers compete on price — you can compete on quality and charge accordingly.",
        output: "Live portfolio URL + GitHub README + updated professional profile + drafted testimonial request (you decide whether to send it). Screenshot the before/after of your professional profile.",
        skills: ["portfolio design", "case studies", "personal branding", "positioning", "client outreach"],
        ipad: true,
        codespaces: "Build in Codespaces, deploy to Vercel with npx vercel from terminal.",
      },
      {
        id: "06-05",
        title: "Scope, price, and deliver a first paid full-stack project",
        difficulty: "Advanced",
        time: "Ongoing",
        what: "Land and deliver your first paid full-stack client project. Start from your existing QA network — companies who already pay you and trust your work are warmer leads than cold outreach. Scope it clearly in writing before starting. Deliver with: a CI pipeline, test coverage, a handover document, and a post-project retrospective. Price it based on value to the client, not hours (at least EUR 500 for even a small project — if you're charging less, you're undervaluing the QA + development combination).",
        why: "Everything in this curriculum was preparation for this task. The first paid project teaches more than all 29 previous tasks combined. The retrospective is how you improve your scoping, pricing, and delivery for the next one. The pricing guidance is intentional — your skill set justifies it.",
        output: "A delivered project + a written retrospective: what you scoped, what you charged, what you'd scope differently, what you'd charge differently, and your net promoter score (would the client recommend you?).",
        skills: ["scoping", "pricing", "client management", "professional delivery", "retrospective"],
        ipad: false,
        codespaces: "Client calls and contract work. Use your laptop. The actual coding can be done in Codespaces.",
      },
    ],
  },
];


const qaAiCurriculumPhases = [
  {
    id: 1,
    phase: "Phase 01",
    title: "Python Fast-Track",
    color: "#FF6B35",
    intro: "Java to Python in weeks, not months. These tasks use your existing programming knowledge and focus on what's genuinely different — not what you already know.",
    tasks: [
      {
        id: "01-01",
        title: "Port your most complex Java utility class to Python",
        difficulty: "Warm-up",
        time: "2–3h",
        what: "Take the most complex utility class from your Java test automation work. Rewrite it in Python — idiomatic Python, not Java-with-Python-syntax. Use list comprehensions where you'd use loops, dataclasses instead of POJOs, and f-strings instead of string formatting. Document every idiom difference.",
        why: "The fastest way to learn Python is through code you already completely understand. Focus 100% on the language, not the logic.",
        output: "Side-by-side Java and Python files + a markdown doc listing every Python idiom you used and why it's preferred over the Java equivalent.",
        skills: ["Python idioms", "dataclasses", "list comprehensions", "f-strings", "Java vs Python"],
        ipad: true,
        codespaces: "Python 3 is pre-installed in Codespaces. No pip installs needed for this task.",
      },
      {
        id: "01-02",
        title: "Build a RestAssured-style HTTP client in Python",
        difficulty: "Beginner",
        time: "3h",
        what: "Build a fluent HTTP client in Python using the requests library that mirrors the RestAssured API you know: client.given().header('Authorization', token).when().get('/users').then().status_code(200).body('name', 'John'). Implement the builder pattern in Python.",
        why: "You know RestAssured deeply. Rebuilding its interface in Python teaches the requests library and Python class patterns through a domain you own completely.",
        output: "http_client.py with the fluent interface + 10 test cases calling JSONPlaceholder API that read exactly like RestAssured specs.",
        skills: ["requests library", "builder pattern", "fluent interface", "method chaining", "HTTP testing"],
        ipad: true,
        codespaces: "pip install requests in Codespaces terminal. Single Python file.",
      },
      {
        id: "01-03",
        title: "Analyse a test results dataset with Pandas",
        difficulty: "Beginner",
        time: "3h",
        what: "Create a mock dataset of 500 test runs (test name, status, duration, environment, build number, timestamp). Load with Pandas. Calculate: flaky tests (pass rate between 20-80%), slowest 10 tests, failure rate per environment, trend over last 30 builds. Output a summary report.",
        why: "You look at test result data every day. Analysing it with Pandas teaches the library through a domain where you already know what 'interesting' looks like.",
        output: "analyse_test_results.py that prints a structured report with all 4 analyses. You should find at least 3 flaky tests in your mock data.",
        skills: ["Pandas", "groupby", "filtering", "aggregation", "data analysis"],
        ipad: true,
        codespaces: "pip install pandas in Codespaces terminal. Single Python file, all output in terminal.",
      },
      {
        id: "01-04",
        title: "Automate a repetitive QA task with Python",
        difficulty: "Intermediate",
        time: "3–4h",
        what: "Identify something you currently do manually in your QA work (generating test reports, comparing JSON responses, diffing API outputs, parsing log files). Build a Python CLI tool that does it automatically. Use argparse for the interface, handle errors gracefully, and add a --dry-run flag.",
        why: "The best automation target is something you already do manually. You know the edge cases, you know what the output should look like, and you'll actually use it.",
        output: "A CLI tool that solves a real problem from your workflow. Demo it on a real (or realistic) input. You should save at least 10 minutes of work per use.",
        skills: ["argparse", "file I/O", "CLI design", "automation", "error handling"],
        ipad: true,
        codespaces: "All Python CLI work — runs entirely in Codespaces terminal. argparse works as normal.",
      },
      {
        id: "01-05",
        title: "Build a JSON response validator in Python",
        difficulty: "Intermediate",
        time: "3h",
        what: "Build a Python library that validates JSON API responses against a schema — similar to what you do in RestAssured with .body() assertions but more powerful. Support: required fields, type checking, nested object validation, array element validation, and custom assertion messages. Write 15 test cases.",
        why: "You know what API response validation should look like — you do it every day in Java. Building it in Python teaches the language while producing something genuinely useful for your QA work.",
        output: "validator.py library + 15 passing test cases covering happy path and all validation failure modes.",
        skills: ["Python classes", "recursion", "type checking", "test design", "library design"],
        ipad: true,
        codespaces: "Single Python file, no dependencies. Runs in Codespaces terminal.",
      },
    ],
  },
  {
    id: 2,
    phase: "Phase 02",
    title: "ML Fundamentals",
    color: "#FFD166",
    intro: "Enough ML to understand what models are doing and evaluate them properly. Your QA instinct for edge cases and failure modes is a genuine advantage here.",
    tasks: [
      {
        id: "02-01",
        title: "Build a test flakiness predictor",
        difficulty: "Beginner",
        time: "4h",
        what: "Create a dataset of 200 mock tests with features: avg_duration, duration_variance, failure_rate, environment_sensitivity, last_5_results. Train a logistic regression model to predict whether a test is flaky. Evaluate with precision and recall. What does a 'false positive' mean here — flagging a stable test as flaky?",
        why: "Flaky test detection is a real ML use case in QA. Using a domain you understand completely lets you focus on the ML concepts. The precision/recall tradeoff will mean something concrete to you.",
        output: "flakiness_predictor.py with the model, evaluation metrics, and an analysis of what false positives and false negatives mean in this context.",
        skills: ["logistic regression", "scikit-learn", "precision/recall", "feature engineering", "model evaluation"],
        ipad: true,
        codespaces: "pip install scikit-learn pandas in Codespaces. Single Python file.",
      },
      {
        id: "02-02",
        title: "Cluster API endpoints by response behaviour",
        difficulty: "Beginner",
        time: "3h",
        what: "Create a dataset of 100 mock API endpoints with features: avg_response_time, error_rate, payload_size, call_frequency, timeout_rate. Use KMeans to cluster them into 4 groups. Label each cluster (e.g. 'High-traffic stable', 'Slow and unreliable'). What would you prioritise testing in each cluster?",
        why: "Clustering is unsupervised learning — no right answer. Using API endpoint data you understand makes the output interpretable. You'll naturally validate the clusters against your intuition.",
        output: "cluster_endpoints.py with cluster labels, sizes, average stats, and your QA interpretation of what each cluster means.",
        skills: ["KMeans", "cluster interpretation", "unsupervised learning", "Pandas", "feature selection"],
        ipad: true,
        codespaces: "pip install scikit-learn pandas matplotlib in Codespaces. Single Python file.",
      },
      {
        id: "02-03",
        title: "Implement linear regression to predict test suite runtime",
        difficulty: "Intermediate",
        time: "4h",
        what: "Build linear regression from scratch using only NumPy — no scikit-learn. Use mock data: test suite runtime as a function of number of tests, number of parallel threads, and environment. Implement gradient descent manually. Compare your implementation's predictions against scikit-learn's.",
        why: "Every neural network is stacked linear regressions with gradient descent. Building it manually is the most direct path to understanding what ML frameworks are actually doing.",
        output: "linear_regression.py with manual implementation + comparison against scikit-learn. Both should produce nearly identical predictions.",
        skills: ["gradient descent", "NumPy", "loss function", "MSE", "manual implementation"],
        ipad: true,
        codespaces: "pip install numpy scikit-learn in Codespaces. Single Python file.",
      },
      {
        id: "02-04",
        title: "Build a bug report classifier",
        difficulty: "Intermediate",
        time: "4h",
        what: "Create 300 mock bug reports with text descriptions, labelled by severity (critical/high/medium/low). Use TF-IDF vectorisation + a Naive Bayes or SVM classifier. Evaluate with a confusion matrix. Test on 5 bug reports you write yourself. What kinds of bugs does it misclassify?",
        why: "Text classification on QA data. You know what bug reports look like and what severity means. Analysing the confusion matrix will reveal patterns in what the model gets wrong — pure QA instinct.",
        output: "bug_classifier.py with model, confusion matrix, classification report, and analysis of misclassified examples.",
        skills: ["TF-IDF", "Naive Bayes", "confusion matrix", "text classification", "NLP basics"],
        ipad: true,
        codespaces: "pip install scikit-learn pandas in Codespaces. Single Python file.",
      },
      {
        id: "02-05",
        title: "Detect anomalies in API response times",
        difficulty: "Intermediate",
        time: "3–4h",
        what: "Generate 6 months of mock API response time data for 5 endpoints (with realistic spikes and degradation periods). Apply IQR and Z-score anomaly detection. Flag anomalies and print: 'Endpoint /users had an anomalous response time on 2024-03-15: 2340ms (4.2 standard deviations above mean)'. Compare which method catches more real anomalies.",
        why: "Anomaly detection on API performance data is something you'd immediately use in your QA work. Understanding the statistics behind it makes you a better performance tester.",
        output: "anomaly_detector.py that produces a report comparing IQR vs Z-score detection on the same dataset.",
        skills: ["IQR", "Z-score", "time series", "anomaly detection", "NumPy statistics"],
        ipad: true,
        codespaces: "pip install numpy pandas in Codespaces. Single Python file.",
      },
    ],
  },
  {
    id: 3,
    phase: "Phase 03",
    title: "LLMs & the Anthropic API",
    color: "#06D6A0",
    intro: "You're already building with LLM APIs. These tasks go deeper into what makes LLM features reliable — applying your QA mindset to AI output quality.",
    tasks: [
      {
        id: "03-01",
        title: "Build a structured bug report generator",
        difficulty: "Beginner",
        time: "3h",
        what: "Write a prompt that takes a free-text description of a bug ('the login button doesn't work on mobile when the keyboard is open') and returns a structured bug report JSON: { title, severity, steps_to_reproduce[], expected_result, actual_result, environment, suggested_labels[] }. Test on 10 different bug descriptions. Measure how often the JSON is valid and complete.",
        why: "Structured extraction is one of the highest-value LLM use cases. Using bug reports — a domain you own — means you can judge output quality accurately. Measuring validity and completeness is applied QA thinking.",
        output: "bug_extractor.py + 10 test cases with expected fields + a quality report showing validity rate and most common missing fields.",
        skills: ["prompt engineering", "structured outputs", "JSON mode", "LLM API", "output validation"],
        ipad: true,
        codespaces: "pip install anthropic in Codespaces. Uses Anthropic API — works from anywhere.",
      },
      {
        id: "03-02",
        title: "Build an LLM eval suite from scratch",
        difficulty: "Intermediate",
        time: "4–5h",
        what: "Build a testing framework for LLM outputs. Define 5 evaluation criteria: factual accuracy (for verifiable claims), JSON validity, completeness (all required fields present), tone consistency, and hallucination risk. Write 20 test cases for a bug report generator. Score each output 0–1 per criterion. Generate a test report.",
        why: "This is exactly what you do for a living — applied to AI. LLM evals are QA for AI systems. Your instinct for edge cases, boundary conditions, and measurement will produce a better eval suite than most ML engineers build.",
        output: "eval_framework.py with 5 criteria + 20 test cases + a report showing scores per criterion and overall pass rate. Treat it like a professional QA deliverable.",
        skills: ["LLM evaluation", "scoring rubrics", "test case design", "measurement", "QA methodology"],
        ipad: true,
        codespaces: "pip install anthropic in Codespaces. All runs in terminal. No browser needed.",
      },
      {
        id: "03-03",
        title: "Implement context window management for long conversations",
        difficulty: "Intermediate",
        time: "3–4h",
        what: "Build a chat system that handles long conversations: track token count, summarise old messages when approaching the context limit, keep the last 3 messages always in full, and test with a 50-turn conversation. Measure: tokens before and after summarisation, information loss (ask questions about early conversation after summarisation).",
        why: "Context management is a production engineering problem, not just a prompt engineering one. The 'information loss measurement' is classic QA thinking — define what you're testing and measure it.",
        output: "chat_manager.py with context management + a test showing a 50-turn conversation stays within limits + information retention measurement.",
        skills: ["token counting", "summarisation", "context management", "LLM API", "memory patterns"],
        ipad: true,
        codespaces: "pip install anthropic in Codespaces. Single Python file, runs in terminal.",
      },
      {
        id: "03-04",
        title: "Red-team an LLM feature you've built",
        difficulty: "Intermediate",
        time: "3h",
        what: "Take any LLM feature from this curriculum. Write 20 adversarial test cases designed to make it fail: edge case inputs, ambiguous instructions, inputs that exploit the prompt structure, inputs that cause hallucination, and inputs that produce inconsistent outputs. Document every failure mode you find. Propose fixes for the top 3.",
        why: "Red-teaming an LLM is QA. You already know how to find edge cases, think adversarially, and document failure modes. Apply that skill directly to AI systems — it's one of the most in-demand skills in the field.",
        output: "red_team_report.md — a professional document listing all 20 test cases, which ones failed, failure mode classification, and 3 proposed fixes.",
        skills: ["adversarial testing", "prompt injection", "edge cases", "failure mode analysis", "red-teaming"],
        ipad: true,
        codespaces: "pip install anthropic in Codespaces. All runs in terminal. Pure prompt testing.",
      },
      {
        id: "03-05",
        title: "Build a multi-step test case generator",
        difficulty: "Advanced",
        time: "4–5h",
        what: "Chain 3 LLM calls: (1) given a feature description, identify all test scenarios, (2) for each scenario generate detailed test steps, (3) review the full test suite and flag gaps or redundancies. Each step's output feeds the next. Compare the AI-generated suite against one you'd write manually for the same feature.",
        why: "LLM chaining for QA automation is a direct business application of your skills. Building it teaches prompt chaining patterns. Comparing it against your own manual output gives you a calibrated sense of where LLMs help and where they fall short.",
        output: "test_generator.py that produces a structured test suite from a feature description + your comparison analysis of AI vs manual coverage.",
        skills: ["prompt chaining", "structured outputs", "multi-step reasoning", "context passing", "QA automation"],
        ipad: true,
        codespaces: "pip install anthropic in Codespaces. Single Python file, runs in terminal.",
      },
    ],
  },
  {
    id: 4,
    phase: "Phase 04",
    title: "RAG, Agents & Production Patterns",
    color: "#118AB2",
    intro: "The patterns that make LLM products work reliably in production. Your API testing background means you already understand service contracts — agents are just API orchestration with an LLM in the loop.",
    tasks: [
      {
        id: "04-01",
        title: "Build a RAG system over test documentation",
        difficulty: "Intermediate",
        time: "6–8h",
        what: "Collect 10–15 documents: test plans, API docs, QA guidelines, or any technical docs you use at work. Chunk them (500 tokens, 50 token overlap). Embed with a sentence transformer. Store in a local ChromaDB. Build a Q&A interface: ask questions, retrieve top-3 chunks, generate a grounded answer. Test with 15 questions — 10 answerable from the docs, 5 that aren't.",
        why: "RAG is the most deployed AI architecture in enterprise. Building it from scratch — no LangChain — means you understand every layer. Using your own documentation makes the retrieval quality immediately obvious.",
        output: "rag_pipeline.py with chunking, embedding, retrieval, and generation clearly separated + quality report for all 15 test questions.",
        skills: ["chunking strategy", "sentence transformers", "ChromaDB", "cosine similarity", "grounded generation"],
        ipad: true,
        codespaces: "pip install chromadb sentence-transformers anthropic in Codespaces. All terminal work.",
      },
      {
        id: "04-02",
        title: "Implement the ReAct agent loop manually",
        difficulty: "Intermediate",
        time: "4–5h",
        what: "Build an agent without a framework. Give it 3 tools: run_test_query(sql) that queries a mock test results DB, get_api_status(endpoint) that returns mock uptime data, and calculate_flakiness(test_id) that returns a score. Implement the Reason → Act → Observe → Reason loop manually. Test with 5 multi-step questions that require 2+ tool calls.",
        why: "Agents are just API orchestration with an LLM deciding which API to call next — you already understand that pattern from RestAssured test orchestration. Building the loop manually removes all framework mystery.",
        output: "agent.py with the ReAct loop + 3 tools + logs showing the full reasoning trace for all 5 test questions.",
        skills: ["ReAct loop", "tool use", "function calling", "agent design", "reasoning traces"],
        ipad: true,
        codespaces: "pip install anthropic in Codespaces. Single Python file, all output in terminal.",
      },
      {
        id: "04-03",
        title: "Add streaming to an LLM feature",
        difficulty: "Beginner",
        time: "3h",
        what: "Take your bug report generator from Phase 03. Add streaming so the output appears token by token instead of waiting for the full response. Build both a CLI version (print tokens as they arrive) and a simple FastAPI SSE endpoint that streams to a browser. Measure: time to first token vs time to complete response.",
        why: "Streaming is the standard UX for AI features. Users abandon apps that wait 10 seconds for a response. Measuring time to first token vs completion time teaches you why it matters.",
        output: "Streaming CLI + FastAPI SSE endpoint + latency measurements comparing streaming vs non-streaming UX.",
        skills: ["streaming", "Server-Sent Events", "FastAPI", "latency measurement", "async generators"],
        ipad: true,
        codespaces: "pip install anthropic fastapi uvicorn in Codespaces. Port-forward the FastAPI port.",
      },
      {
        id: "04-04",
        title: "Build an AI-powered API test generator",
        difficulty: "Advanced",
        time: "5–6h",
        what: "Given an OpenAPI/Swagger spec, use an LLM to automatically generate: happy path test cases, boundary value tests, negative tests, and security test cases (auth bypass, injection attempts). Output as a structured JSON test suite. Validate the output against a real API and measure what percentage of generated tests catch real bugs.",
        why: "This is the intersection of your QA expertise and AI engineering. You know what good API test cases look like — now build a system that generates them. The 'what percentage catch real bugs' measurement is pure QA rigour applied to AI output.",
        output: "test_generator.py that takes a Swagger spec and outputs a structured test suite + validation results against a real API.",
        skills: ["OpenAPI parsing", "LLM structured output", "test generation", "validation", "QA automation"],
        ipad: true,
        codespaces: "pip install anthropic pyyaml in Codespaces. Single Python file, runs in terminal.",
      },
      {
        id: "04-05",
        title: "Measure and reduce RAG hallucination rate",
        difficulty: "Advanced",
        time: "4–5h",
        what: "Take your Phase 04-01 RAG system. Design a hallucination test: 20 questions where the answer is in the docs and the correct answer is known. Measure baseline hallucination rate. Then apply 3 mitigation strategies: better chunking, adding source citations to the prompt, and post-processing validation. Measure after each. Report what worked.",
        why: "Hallucination measurement is applied QA for AI. Defining the test, measuring the baseline, applying fixes, and verifying improvement is exactly the defect → fix → regression test cycle you do every day.",
        output: "hallucination_report.md: baseline rate, 3 mitigation experiments, results per experiment, recommendation. Written like a QA bug report.",
        skills: ["hallucination detection", "RAG optimisation", "chunking strategy", "citation prompting", "measurement"],
        ipad: true,
        codespaces: "Same RAG setup from 04-01. pip install chromadb sentence-transformers anthropic. All terminal.",
      },
    ],
  },
  {
    id: 5,
    phase: "Phase 05",
    title: "Evals, MLOps & Production AI",
    color: "#EF476F",
    intro: "Your strongest phase. Production AI is fundamentally a quality problem. You've been solving quality problems professionally for years.",
    tasks: [
      {
        id: "05-01",
        title: "Build a full LLM regression test suite",
        difficulty: "Intermediate",
        time: "4–5h",
        what: "Build an eval framework that runs automatically: 30 test cases with expected output criteria, automated scoring (exact match, semantic similarity, JSON validity, completeness), a pass/fail threshold per criterion, and a summary report. Then make a deliberate prompt change and verify the suite catches the regression. Write it like a QA regression suite — because it is one.",
        why: "LLM regression testing is the direct application of your QA skills to AI systems. A prompt change is a code change. Your eval suite is the test suite. Catching the regression proves the system works.",
        output: "eval_suite.py + 30 test cases + a demo showing it catching a deliberate prompt regression. Report must show which tests passed/failed and why.",
        skills: ["regression testing", "semantic similarity", "automated scoring", "threshold design", "CI integration"],
        ipad: true,
        codespaces: "pip install anthropic in Codespaces. Runs in terminal. CI integration via GitHub Actions.",
      },
      {
        id: "05-02",
        title: "Track LLM costs and latency in production",
        difficulty: "Beginner",
        time: "3h",
        what: "Wrap every LLM API call in a decorator that logs: timestamp, model, prompt tokens, completion tokens, latency (ms), estimated cost (USD), and feature name. Write to a JSONL file. Build a dashboard script that shows: daily spend, cost per feature, slowest features, and cost trend over 7 days. Set a budget alert threshold.",
        why: "Cost monitoring is non-negotiable in production AI. You wouldn't ship a system without monitoring — this is monitoring for LLM features. The budget alert is just a threshold-based assertion, which you write every day in QA.",
        output: "llm_monitor.py decorator + dashboard.py + sample output showing 7 days of mock usage data with alerts triggered at threshold.",
        skills: ["decorators", "JSONL logging", "cost estimation", "token counting", "budget alerting"],
        ipad: true,
        codespaces: "pip install anthropic in Codespaces. Single Python file, all output in terminal.",
      },
      {
        id: "05-03",
        title: "Detect prompt injection attempts",
        difficulty: "Intermediate",
        time: "3–4h",
        what: "Build a classification system that detects prompt injection attempts in user inputs before they reach your LLM. Create a dataset of 100 clean inputs and 50 injection attempts ('ignore previous instructions', jailbreak patterns, role-play attacks). Train a classifier. Then evaluate it with your adversarial QA mindset: find 5 injections it misses.",
        why: "Prompt injection is a security vulnerability — and finding security vulnerabilities is something you do professionally. Applying QA adversarial thinking to AI security is a rare and valuable skill combination.",
        output: "injection_detector.py with classifier + 5 bypasses you found + analysis of which injection patterns are hardest to detect.",
        skills: ["text classification", "security testing", "adversarial examples", "classifier evaluation", "AI security"],
        ipad: true,
        codespaces: "pip install scikit-learn anthropic in Codespaces. Single Python file.",
      },
      {
        id: "05-04",
        title: "Build a CI pipeline for an LLM application",
        difficulty: "Intermediate",
        time: "4h",
        what: "Set up GitHub Actions to run your LLM eval suite on every PR. The pipeline must: run the eval suite, block merge if pass rate drops below 85%, post a comment on the PR with the eval results, and track eval scores over time (store results as a GitHub Actions artifact). Make it feel like a real CI pipeline for AI.",
        why: "LLM applications need CI just like regular software. You know what a good CI pipeline looks like. Build one that would satisfy your own QA standards for an AI product.",
        output: ".github/workflows/llm_ci.yml + demo showing a PR blocked by a failing eval + PR comment with results + artifact showing score history.",
        skills: ["GitHub Actions", "eval automation", "CI for AI", "pass rate thresholds", "artifact storage"],
        ipad: true,
        codespaces: "GitHub Actions — edit YAML in Codespaces, push to trigger. All browser-based.",
      },
      {
        id: "05-05",
        title: "Write an AI quality audit for a real product",
        difficulty: "Advanced",
        time: "4–5h",
        what: "Choose any AI-powered product you use or can access (a chatbot, an AI writing tool, an AI search feature). Conduct a structured quality audit: define 5 quality dimensions, write 30 test cases, execute them, document all failures, calculate a quality score per dimension, and write an executive summary with recommendations. Format it like a professional QA audit report.",
        why: "AI quality consulting is an emerging service that commands premium rates. You have the QA methodology and the AI knowledge to do this. This task is the proof of concept for a new service offering.",
        output: "A professional AI quality audit report (PDF or Notion). Good enough to show a potential client as a sample of your work.",
        skills: ["audit methodology", "quality dimensions", "test execution", "report writing", "consulting deliverable"],
        ipad: true,
        codespaces: "Pure research and writing — Notion, VS Code, or any iPad writing app works perfectly.",
      },
    ],
  },
  {
    id: 6,
    phase: "Phase 06",
    title: "Specialise & Land AI Clients",
    color: "#B983FF",
    intro: "Package the unique combination of QA + AI + full-stack. This is a rare profile. Position it correctly and you can command premium rates.",
    tasks: [
      {
        id: "06-01",
        title: "Build and ship an AI-powered QA tool",
        difficulty: "Advanced",
        time: "1–2 weeks",
        what: "Build and deploy a small AI-powered tool that solves a real QA problem: an AI test case generator from user stories, a bug report analyser that suggests severity and labels, a test data generator, or an API mock generator from a Swagger spec. Make it publicly available. Write a product description, not just a README.",
        why: "This is your portfolio piece at the intersection of all your skills. A tool that solves a QA problem demonstrates QA expertise, AI engineering, and full-stack development simultaneously — to exactly the clients who would hire you.",
        output: "Live product at a public URL + GitHub repo + a product description explaining the problem it solves and who it's for.",
        skills: ["product thinking", "AI integration", "deployment", "QA domain knowledge", "marketing"],
        ipad: true,
        codespaces: "Build in Codespaces (Python + FastAPI or Next.js). Deploy to Railway or Vercel from terminal.",
      },
      {
        id: "06-02",
        title: "Write a technical post on AI quality engineering",
        difficulty: "Beginner",
        time: "1 day",
        what: "Write a 1,500-word technical article on a topic only you can write authoritatively: 'How to build an eval suite for LLM features (a QA engineer's approach)', 'Red-teaming AI systems with QA methodology', or 'What QA engineers know about AI quality that ML engineers don't.' Publish on dev.to or Medium.",
        why: "Writing at the intersection of QA + AI positions you as a thought leader in a very small, very valuable niche. The people who read it are exactly your target clients and employers.",
        output: "Published article with a real URL. Share it once. Track the views over 30 days.",
        skills: ["technical writing", "thought leadership", "positioning", "content marketing", "niche authority"],
        ipad: true,
        codespaces: "Pure writing — any Markdown editor on iPad. dev.to and Medium both have iPad apps.",
      },
      {
        id: "06-03",
        title: "Design a productised AI quality audit service",
        difficulty: "Intermediate",
        time: "2–3h",
        what: "Design a service you could sell: an AI quality audit. Define: what's included (scope, deliverables, timeline), what's excluded, your methodology (from Phase 05-05), pricing (fixed price, not hourly), and a 1-page service description suitable for a website. Research 3 competitors and differentiate your offering.",
        why: "Productised services are more scalable than hourly consulting. Designing the service forces you to think through the value proposition clearly — which also makes you better at selling it.",
        output: "A service description document: scope, deliverables, methodology summary, pricing, and differentiation. Good enough to put on a freelance website.",
        skills: ["service design", "pricing strategy", "competitive analysis", "value proposition", "productisation"],
        ipad: true,
        codespaces: "Pure writing and research — any app on iPad works. Notion is great for this.",
      },
      {
        id: "06-04",
        title: "Build an AI feature for a client project",
        difficulty: "Advanced",
        time: "1 week",
        what: "Add an AI feature to the client project from your full-stack curriculum — or to a new standalone project. The feature should solve a real user problem (not just 'chatbot'). Apply everything: proper evals, cost monitoring, streaming, error handling, fallbacks. Write a technical handover document that explains the AI components to a non-technical client.",
        why: "Delivering an AI feature to a real project and explaining it clearly to a client is the complete proof of the skill set. The handover document is what separates a professional from a developer who just got it working.",
        output: "Live AI feature in a deployed project + a client-facing handover document explaining what it does, how it works at a high level, costs, and maintenance requirements.",
        skills: ["client delivery", "AI feature integration", "cost monitoring", "technical communication", "handover"],
        ipad: true,
        codespaces: "pip/npm install in Codespaces. Port-forward as needed. Anthropic API works from anywhere.",
      },
      {
        id: "06-05",
        title: "Land a paid AI engineering or AI quality engagement",
        difficulty: "Advanced",
        time: "Ongoing",
        what: "Use your portfolio (AI QA tool, technical article, audit service design) to find a paid engagement. Target: a company that already uses AI and needs quality assurance for it, a startup building an LLM product that needs evals and monitoring, or an enterprise that wants an AI quality audit. Reach out to 5 warm contacts first.",
        why: "Everything in this curriculum built toward this. The combination of QA expertise + AI engineering is rare enough that the right client will pay a significant premium for it. You don't need to compete on price — you're in a different category.",
        output: "Either a paid engagement or 5 documented outreach attempts with responses and learnings. A retrospective on what your pitch was, what worked, and what you'd change.",
        skills: ["business development", "positioning", "outreach", "negotiation", "consulting"],
        ipad: false,
        codespaces: "Client outreach and calls — use laptop or your phone. The pitch document can be written on iPad.",
      },
    ],
  },
];

const qaFsRoadmapTypeColor = { Course: "#F7B731", Book: "#45AAF2", Free: "#2ECC71" };
const qaAiRoadmapTypeColor = { Course: "#FFD166", Book: "#FF6B35", Free: "#06D6A0" };

const aiRoadmapTypeColor = { Course: "#FFD166", Book: "#FF6B35", Free: "#06D6A0" };
const fsRoadmapTypeColor = { Course: "#F7B731", Book: "#45AAF2", Free: "#2ECC71" };
const beginnerRoadmapTypeColor = { Course: "#A55EEA", Book: "#FF6B6B", Free: "#06D6A0" };

function RoadmapViewer({ phases, title, totalDuration, typeColor, onBack, progress, onToggle }) {
  const [active, setActive] = useState(0);
  const p = phases[active];

  // Count completed resources for this roadmap
  const totalRes = phases.reduce((a, ph) => a + ph.resources.length, 0);
  const doneRes = phases.reduce((a, ph) =>
    a + ph.resources.filter((_, ri) => progress[`${title}-${ph.num}-${ri}`]).length, 0);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: "#F7F3EE", fontFamily: "'DM Serif Display', Georgia, serif", color: "#111" }}>
      <style>{`
        a { text-decoration: none; }
        a:hover .res-card { background: #111 !important; }
        a:hover .res-label { color: #F7F3EE !important; }
        a:hover .res-sub { color: #888 !important; }
        a:hover .res-arrow { color: #F7F3EE !important; }
        .phase-btn { cursor: pointer; border: none; background: none; transition: all 0.15s; }
        .phase-btn:hover .ph-num { opacity: 1 !important; }
        @keyframes fadeUp { from { opacity:0; transform:translateY(12px); } to { opacity:1; transform:translateY(0); } }
        .fadeup { animation: fadeUp 0.25s ease forwards; }
        .res-card { transition: background 0.15s; }
        .back-btn { cursor: pointer; border: none; background: none; font-family: "Karla", sans-serif; font-size: 10px; letter-spacing: 3px; text-transform: uppercase; color: #888; padding: 0; transition: color 0.15s; }
        .back-btn:hover { color: #111; }
        .rcheck { cursor: pointer; appearance: none; width: 16px; height: 16px; border: 1.5px solid #ddd; border-radius: 3px; flex-shrink: 0; transition: all 0.15s; background: white; position: relative; }
        .rcheck:checked { background: #111; border-color: #111; }
        .rcheck:checked::after { content: ""; position: absolute; left: 4px; top: 1px; width: 5px; height: 9px; border: 2px solid white; border-top: none; border-left: none; transform: rotate(45deg); }
        .rcheck:hover { border-color: #999; }
      `}</style>

      <div style={{ borderBottom: "2px solid #111", padding: "12px 40px", display: "flex", justifyContent: "space-between", alignItems: "center", background: "#F7F3EE" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <button className="back-btn" onClick={onBack}>← Dashboard</button>
          <span style={{ fontFamily: "'Karla', sans-serif", color: "#ddd" }}>|</span>
          <div>
            <span style={{ fontFamily: "'Karla', sans-serif", fontSize: 10, letterSpacing: 5, textTransform: "uppercase", color: "#888" }}>Roadmap · {title}</span>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ fontFamily: "'Karla', sans-serif", fontSize: 10, color: "#888" }}>
            <span style={{ fontWeight: 700, color: "#111" }}>{doneRes}</span>
            <span style={{ color: "#ccc" }}> / {totalRes} completed</span>
          </div>
          <div style={{ width: 80, height: 3, background: "#eee", borderRadius: 2 }}>
            <div style={{ width: `${totalRes ? (doneRes/totalRes)*100 : 0}%`, height: "100%", background: "#111", borderRadius: 2, transition: "width 0.3s" }} />
          </div>
          <div style={{ fontFamily: "'Karla', sans-serif", fontSize: 10, letterSpacing: 3, color: "#bbb", textTransform: "uppercase" }}>6 phases · {totalDuration}</div>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "300px 1fr", flex: 1, minHeight: 0 }}>
        <div style={{ borderRight: "1px solid #ddd", overflowY: "auto", padding: "32px 0" }}>
          {phases.map((ph, i) => {
            const phDone = ph.resources.filter((_, ri) => progress[`${title}-${ph.num}-${ri}`]).length;
            return (
              <button key={i} className="phase-btn" onClick={() => setActive(i)}
                style={{ display: "block", width: "100%", textAlign: "left", padding: "16px 32px", borderBottom: "1px solid #eee", borderLeft: `3px solid ${active === i ? ph.color : "transparent"}`, background: active === i ? "#fff" : "transparent" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
                  <span className="ph-num" style={{ fontFamily: "'Karla', sans-serif", fontSize: 10, letterSpacing: 3, color: active === i ? ph.color : "#ccc", opacity: active === i ? 1 : 0.5, fontWeight: 700, transition: "all 0.15s" }}>{ph.num}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: active === i ? 17 : 15, color: active === i ? "#111" : "#777", lineHeight: 1.2, marginBottom: 3 }}>{ph.title}</div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontFamily: "'Karla', sans-serif", fontSize: 10, color: "#bbb", letterSpacing: 1 }}>{ph.duration}</span>
                      {phDone > 0 && <span style={{ fontFamily: "'Karla', sans-serif", fontSize: 9, color: ph.color }}>{phDone}/{ph.resources.length}</span>}
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
          <div style={{ padding: "24px 32px", borderTop: "1px solid #eee", marginTop: 12 }}>
            <div style={{ fontFamily: "'Karla', sans-serif", fontSize: 9, letterSpacing: 3, textTransform: "uppercase", color: "#ccc", marginBottom: 12 }}>Resource types</div>
            {Object.entries(typeColor).map(([type, color]) => (
              <div key={type} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 7 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: color }} />
                <span style={{ fontFamily: "'Karla', sans-serif", fontSize: 11, color: "#888" }}>{type}</span>
              </div>
            ))}
          </div>
        </div>

        <div key={active} className="fadeup" style={{ padding: "48px 52px", maxWidth: 780, overflowY: "auto" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: 20, marginBottom: 36 }}>
            <div style={{ fontSize: 80, lineHeight: 0.85, color: p.color, fontStyle: "italic", opacity: 0.25, userSelect: "none", marginTop: 8 }}>{p.num}</div>
            <div>
              <h1 style={{ fontSize: 36, lineHeight: 1.1, marginBottom: 12 }}>{p.title}</h1>
              <p style={{ fontFamily: "'Karla', sans-serif", fontSize: 14, color: "#555", lineHeight: 1.7, maxWidth: 500 }}>{p.summary}</p>
            </div>
          </div>

          <div style={{ background: "#111", color: "#F7F3EE", padding: "16px 22px", marginBottom: 36, display: "flex", gap: 14, alignItems: "flex-start" }}>
            <div style={{ width: 4, flexShrink: 0, alignSelf: "stretch", background: p.color }} />
            <div>
              <div style={{ fontFamily: "'Karla', sans-serif", fontSize: 9, letterSpacing: 4, textTransform: "uppercase", color: p.color, marginBottom: 6 }}>Non-negotiable</div>
              <div style={{ fontFamily: "'Karla', sans-serif", fontSize: 13, color: "#ddd", lineHeight: 1.6 }}>{p.nonneg}</div>
            </div>
          </div>

          <div style={{ borderBottom: "2px solid #111", paddingBottom: 8, marginBottom: 20, display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
            <span style={{ fontFamily: "'Karla', sans-serif", fontSize: 11, letterSpacing: 4, textTransform: "uppercase", color: "#111" }}>Resources</span>
            <span style={{ fontFamily: "'Karla', sans-serif", fontSize: 10, color: "#bbb" }}>{p.resources.length} items</span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 40 }}>
            {p.resources.map((r, ri) => {
              const key = `${title}-${p.num}-${ri}`;
              const done = !!progress[key];
              return (
                <div key={ri} style={{ position: "relative" }}>
                  <a href={r.url} target="_blank" rel="noopener noreferrer">
                    <div className="res-card" style={{ border: `1px solid ${done ? "#111" : "#ddd"}`, padding: "18px 20px", background: done ? "#f9f7f4" : "#fff", display: "flex", flexDirection: "column", gap: 8, height: "100%", opacity: done ? 0.7 : 1 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                        <div style={{ width: 8, height: 8, borderRadius: "50%", background: typeColor[r.type] || "#ccc", marginTop: 3, flexShrink: 0 }} />
                        <span className="res-arrow" style={{ fontFamily: "'Karla', sans-serif", fontSize: 14, color: "#ccc", transition: "color 0.15s" }}>↗</span>
                      </div>
                      <div className="res-label" style={{ fontSize: 16, lineHeight: 1.2, color: done ? "#888" : "#111", transition: "color 0.15s", textDecoration: done ? "line-through" : "none" }}>{r.label}</div>
                      <div className="res-sub" style={{ fontFamily: "'Karla', sans-serif", fontSize: 11, color: "#aaa", lineHeight: 1.4, transition: "color 0.15s" }}>{r.sub}</div>
                    </div>
                  </a>
                  <div
                    onClick={(e) => { e.stopPropagation(); onToggle(key); }}
                    style={{ position: "absolute", top: 12, right: 44, width: 18, height: 18, border: `1.5px solid ${done ? "#111" : "#ddd"}`, borderRadius: 3, background: done ? "#111" : "white", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.15s", zIndex: 2 }}
                    title={done ? "Mark as incomplete" : "Mark as complete"}
                  >
                    {done && <span style={{ color: "white", fontSize: 11, lineHeight: 1, marginTop: -1 }}>✓</span>}
                  </div>
                </div>
              );
            })}
          </div>

          <div style={{ borderTop: "1px solid #eee", paddingTop: 24, display: "flex", gap: 6 }}>
            {phases.map((ph, i) => (
              <div key={i} onClick={() => setActive(i)}
                style={{ height: 3, flex: 1, background: i === active ? ph.color : "#ddd", cursor: "pointer", transition: "background 0.2s" }} />
            ))}
          </div>
          <div style={{ fontFamily: "'Karla', sans-serif", fontSize: 10, color: "#bbb", marginTop: 8, letterSpacing: 1 }}>Phase {active + 1} of {phases.length}</div>
        </div>
      </div>
    </div>
  );
}

// ─── CURRICULUM VIEWER ───────────────────────────────────────────
const diffColors = {
  "Warm-up": "#45AAF2",
  Beginner: "#20BF6B",
  Intermediate: "#FF9F43",
  Advanced: "#FF6B9D",
};

function CurriculumViewer({ phases, title, onBack, progress, onToggle }) {
  const [activePhase, setActivePhase] = useState(1);
  const [activeTask, setActiveTask] = useState(null);
  const phase = phases.find((p) => p.id === activePhase);
  const task = phase?.tasks.find((t) => t.id === activeTask);

  const totalTasks = phases.reduce((a, p) => a + p.tasks.length, 0);
  const doneTasks = phases.reduce((a, p) =>
    a + p.tasks.filter(t => progress[`${title}-${t.id}`]).length, 0);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: "#080810", fontFamily: "'IBM Plex Mono', monospace", color: "#E0E0E0" }}>
      <style>{`
        .ctab { cursor: pointer; transition: all 0.15s; border: none; background: none; }
        .ctask-row { cursor: pointer; transition: background 0.12s; }
        .ctask-row:hover { background: #111118 !important; }
        @keyframes cin { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:translateY(0); } }
        .cani { animation: cin 0.2s ease forwards; }
        .cback { cursor: pointer; border: none; background: none; transition: opacity 0.15s; }
        .cback:hover { opacity: 0.5; }
        .cgrid-dots { position: fixed; inset: 0; pointer-events: none; z-index: 0; background-image: radial-gradient(circle, #1A1A2E 1px, transparent 1px); background-size: 28px 28px; }
        .dash-back { cursor: pointer; border: none; background: none; font-family: "IBM Plex Mono", monospace; font-size: 9px; letter-spacing: 3px; text-transform: uppercase; color: #333; padding: 0; transition: color 0.15s; }
        .dash-back:hover { color: #aaa; }
        .task-check { appearance: none; width: 15px; height: 15px; border: 1px solid #2a2a3a; border-radius: 3px; background: transparent; cursor: pointer; flex-shrink: 0; position: relative; transition: all 0.15s; }
        .task-check:checked { background: #20BF6B; border-color: #20BF6B; }
        .task-check:checked::after { content: ""; position: absolute; left: 4px; top: 1px; width: 4px; height: 8px; border: 1.5px solid #080810; border-top: none; border-left: none; transform: rotate(45deg); }
        .task-check:hover { border-color: #555; }
      `}</style>
      <div className="cgrid-dots" />

      <div style={{ position: "relative", zIndex: 1, background: "#0A0A14", borderBottom: "1px solid #111120", padding: "10px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <button className="dash-back" onClick={onBack}>← Dashboard</button>
          <span style={{ color: "#1a1a2e" }}>|</span>
          <span style={{ fontSize: 10, letterSpacing: 4, color: "#333", textTransform: "uppercase" }}>{title}</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <span style={{ fontSize: 10, color: "#444" }}>
            <span style={{ color: "#20BF6B", fontWeight: 600 }}>{doneTasks}</span>
            <span style={{ color: "#222" }}> / {totalTasks} tasks</span>
          </span>
          <div style={{ width: 80, height: 2, background: "#111120" }}>
            <div style={{ width: `${totalTasks ? (doneTasks/totalTasks)*100 : 0}%`, height: "100%", background: "#20BF6B", transition: "width 0.3s" }} />
          </div>
        </div>
      </div>

      <div style={{ position: "relative", zIndex: 1, display: "grid", gridTemplateColumns: "220px 1fr", flex: 1, minHeight: 0 }}>
        <div style={{ borderRight: "1px solid #111120", padding: "20px 0", overflowY: "auto" }}>
          {phases.map(p => {
            const phaseDone = p.tasks.filter(t => progress[`${title}-${t.id}`]).length;
            return (
              <button key={p.id} className="ctab"
                onClick={() => { setActivePhase(p.id); setActiveTask(null); }}
                style={{ display: "block", width: "100%", textAlign: "left", padding: "12px 20px", borderLeft: `3px solid ${activePhase === p.id ? p.color : "transparent"}`, background: activePhase === p.id ? "#0D0D1A" : "transparent" }}>
                <div style={{ fontSize: 9, letterSpacing: 3, color: activePhase === p.id ? p.color : "#2A2A3A", marginBottom: 3, textTransform: "uppercase" }}>{p.phase}</div>
                <div style={{ fontSize: 12, color: activePhase === p.id ? "#FFF" : "#444", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 600 }}>{p.title}</div>
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: 3 }}>
                  <span style={{ fontSize: 9, color: "#1E1E2E" }}>{p.tasks.length} tasks</span>
                  {phaseDone > 0 && <span style={{ fontSize: 9, color: p.color }}>{phaseDone}/{p.tasks.length}</span>}
                </div>
              </button>
            );
          })}
        </div>

        <div style={{ padding: "28px 32px", overflow: "auto" }}>
          {task ? (
            <div key={task.id} className="cani">
              <button className="cback" onClick={() => setActiveTask(null)}
                style={{ display: "flex", alignItems: "center", gap: 8, color: "#444", fontSize: 11, letterSpacing: 2, marginBottom: 24 }}>
                ← BACK
              </button>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8, flexWrap: "wrap" }}>
                <span style={{ fontSize: 10, color: "#333", letterSpacing: 2 }}>{task.id}</span>
                <span style={{ fontSize: 9, letterSpacing: 2, color: diffColors[task.difficulty] || "#888", background: `${diffColors[task.difficulty]}15`, border: `1px solid ${diffColors[task.difficulty]}33`, padding: "3px 10px", borderRadius: 3, textTransform: "uppercase" }}>{task.difficulty}</span>
                <span style={{ fontSize: 9, color: "#333", letterSpacing: 1 }}>⏱ {task.time}</span>
                {task.ipad
                  ? <span style={{ fontSize: 9, letterSpacing: 2, color: "#45AAF2", background: "#45AAF215", border: "1px solid #45AAF233", padding: "3px 10px", borderRadius: 3 }}>📱 iPad OK</span>
                  : <span style={{ fontSize: 9, letterSpacing: 2, color: "#555", background: "#55555510", border: "1px solid #55555530", padding: "3px 10px", borderRadius: 3 }}>💻 Laptop only</span>
                }
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 28 }}>
                <h2 style={{ fontSize: 24, fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, color: "#FFF", lineHeight: 1.2, maxWidth: 500 }}>{task.title}</h2>
                <div
                  onClick={() => onToggle(`${title}-${task.id}`)}
                  style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer", flexShrink: 0, marginLeft: 20, background: progress[`${title}-${task.id}`] ? "#20BF6B18" : "#111120", border: `1px solid ${progress[`${title}-${task.id}`] ? "#20BF6B44" : "#1e1e2e"}`, borderRadius: 4, padding: "8px 14px", transition: "all 0.15s" }}>
                  <div style={{ width: 14, height: 14, border: `1.5px solid ${progress[`${title}-${task.id}`] ? "#20BF6B" : "#333"}`, borderRadius: 3, background: progress[`${title}-${task.id}`] ? "#20BF6B" : "transparent", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.15s" }}>
                    {progress[`${title}-${task.id}`] && <span style={{ color: "#080810", fontSize: 9 }}>✓</span>}
                  </div>
                  <span style={{ fontSize: 9, letterSpacing: 2, color: progress[`${title}-${task.id}`] ? "#20BF6B" : "#333", textTransform: "uppercase" }}>{progress[`${title}-${task.id}`] ? "Completed" : "Mark done"}</span>
                </div>
              </div>
              {[
                { label: "WHAT TO BUILD", content: task.what, color: "#45AAF2" },
                { label: "WHY THIS SPECIFICALLY", content: task.why, color: "#20BF6B" },
                { label: "EXPECTED OUTPUT", content: task.output, color: "#FF9F43" },
              ].map(({ label, content, color }) => (
                <div key={label} style={{ background: "#0D0D1A", border: "1px solid #111120", borderLeft: `3px solid ${color}`, borderRadius: 6, padding: "18px 20px", marginBottom: 12 }}>
                  <div style={{ fontSize: 9, letterSpacing: 3, color, marginBottom: 10, textTransform: "uppercase" }}>{label}</div>
                  <p style={{ fontSize: 13, color: "#888", lineHeight: 1.8 }}>{content}</p>
                </div>
              ))}
              <div style={{ background: "#0D0D1A", border: "1px solid #111120", borderRadius: 6, padding: "18px 20px" }}>
                <div style={{ fontSize: 9, letterSpacing: 3, color: "#333", marginBottom: 12, textTransform: "uppercase" }}>Skills Practised</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {task.skills.map(s => (
                    <span key={s} style={{ fontSize: 11, color: phase.color, background: `${phase.color}10`, border: `1px solid ${phase.color}28`, borderRadius: 3, padding: "4px 10px" }}>{s}</span>
                  ))}
                </div>
              </div>
              {task.codespaces && (
                <div style={{ background: "#0a0f1a", border: "1px solid #45AAF222", borderLeft: "3px solid #45AAF2", borderRadius: 6, padding: "14px 18px", marginTop: 12 }}>
                  <div style={{ fontSize: 9, letterSpacing: 3, color: "#45AAF2", marginBottom: 8, textTransform: "uppercase" }}>📱 Codespaces / iPad</div>
                  <p style={{ fontSize: 12, color: "#45AAF299", lineHeight: 1.7 }}>{task.codespaces}</p>
                </div>
              )}
            </div>
          ) : phase && (
            <div key={phase.id} className="cani">
              <div style={{ marginBottom: 28 }}>
                <div style={{ fontSize: 10, letterSpacing: 4, color: phase.color, textTransform: "uppercase", marginBottom: 6 }}>{phase.phase}</div>
                <h1 style={{ fontSize: 30, fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, color: "#FFF", marginBottom: 12 }}>{phase.title}</h1>
                <p style={{ fontSize: 13, color: "#444", lineHeight: 1.7, maxWidth: 560, borderLeft: `2px solid ${phase.color}`, paddingLeft: 14 }}>{phase.intro}</p>
              </div>
              <div style={{ display: "grid", gap: 8 }}>
                {phase.tasks.map((t, i) => {
                  const done = !!progress[`${title}-${t.id}`];
                  return (
                    <div key={t.id} className="ctask-row" onClick={() => setActiveTask(t.id)}
                      style={{ background: done ? "#0a0a12" : "#0D0D1A", border: `1px solid ${done ? "#1a2a1a" : "#111120"}`, borderRadius: 6, padding: "16px 20px", display: "grid", gridTemplateColumns: "28px 1fr auto", gap: 16, alignItems: "center" }}>
                      <div style={{ fontSize: 11, color: done ? "#20BF6B44" : "#222", fontWeight: 700 }}>{String(i + 1).padStart(2, "0")}</div>
                      <div>
                        <div style={{ fontSize: 14, color: done ? "#444" : "#DDD", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 600, marginBottom: 4, textDecoration: done ? "line-through" : "none" }}>{t.title}</div>
                        <div style={{ fontSize: 11, color: "#333" }}>⏱ {t.time} · {t.skills.slice(0, 3).join(" · ")}</div>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 6 }}>
                        <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                          {t.ipad && <span style={{ fontSize: 9, color: "#45AAF2" }}>📱</span>}
                          <span style={{ fontSize: 9, letterSpacing: 1, color: diffColors[t.difficulty], background: `${diffColors[t.difficulty]}12`, border: `1px solid ${diffColors[t.difficulty]}28`, padding: "3px 8px", borderRadius: 3, textTransform: "uppercase", whiteSpace: "nowrap" }}>{t.difficulty}</span>
                        </div>
                        {done
                          ? <span style={{ fontSize: 10, color: "#20BF6B" }}>✓</span>
                          : <span style={{ fontSize: 10, color: "#222" }}>→</span>
                        }
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── CODESPACES GUIDE ────────────────────────────────────────────
function CodespacesGuide({ onBack }) {
  const sections = [
    {
      title: "What is GitHub Codespaces?",
      color: "#45AAF2",
      content: "A full VS Code development environment running in the cloud, accessible from any browser — including Safari on your iPad. Your code, terminal, extensions, and running servers all live in a Linux container on GitHub's servers. When you close the tab, the container pauses (not deleted). When you reopen it, everything is exactly where you left it.",
    },
    {
      title: "First-time setup (5 minutes)",
      color: "#20BF6B",
      steps: [
        "Go to github.com and create a repository for your project (or use an existing one).",
        "Click the green Code button → Codespaces tab → Create codespace on main.",
        "Wait ~60 seconds. VS Code opens in your browser with a full terminal.",
        "You get 60 free hours/month on the free GitHub plan. A 2-core machine is enough for everything in this curriculum.",
        "On iPad: open github.com in Safari, navigate to your repo, and follow the same steps. Codespaces works fully in Safari.",
      ],
    },
    {
      title: "Running a dev server and accessing it on iPad",
      color: "#FFD166",
      steps: [
        "Start your server normally in the terminal: npm run dev (port 3000) or node server.js (port 4000).",
        "Codespaces automatically detects the open port and shows a notification: 'Your application on port 3000 is available.'",
        "Click Open in Browser — or go to the Ports tab at the bottom of VS Code.",
        "In the Ports tab, right-click the port and set visibility to Public if you want to open it on your iPad separately.",
        "Copy the forwarded URL (looks like https://your-codespace-name-3000.preview.app.github.dev) and open it in Safari on iPad.",
        "The forwarded URL works from any device — your iPad can view the app running in Codespaces on your laptop session.",
      ],
    },
    {
      title: "Python tasks on iPad",
      color: "#FF6B35",
      steps: [
        "Python 3 is pre-installed in every Codespace. Type python3 --version in the terminal to confirm.",
        "Install packages normally: pip install anthropic pandas scikit-learn (no --break-system-packages needed).",
        "Run scripts: python3 your_script.py",
        "For tasks using the Anthropic API: add your API key as a Codespaces secret. Go to github.com → Settings → Codespaces → Secrets. Add ANTHROPIC_API_KEY. It's available as an environment variable in all your Codespaces automatically.",
      ],
    },
    {
      title: "Playwright headless on Codespaces",
      color: "#A55EEA",
      steps: [
        "Install Playwright: npm init playwright@latest (choose TypeScript, add example tests).",
        "Install browser: npx playwright install chromium --with-deps",
        "Playwright runs headless by default in Codespaces (no display needed). All tests work normally.",
        "To see a browser visually: install the Playwright VS Code extension and use the 'Show browser' option — it streams the browser to VS Code's built-in browser preview.",
        "Run tests: npx playwright test",
      ],
    },
    {
      title: "Supabase from Codespaces",
      color: "#EF476F",
      steps: [
        "Supabase is a remote service — it doesn't run locally. Connect to it from anywhere, including Codespaces.",
        "Install Supabase CLI: npm install -g supabase",
        "Log in: supabase login (opens a browser window — works on both laptop and iPad Codespaces).",
        "Link your project: supabase link --project-ref your-project-ref",
        "Push migrations: supabase db push",
        "Your SUPABASE_URL and SUPABASE_ANON_KEY go in a .env.local file or as Codespaces secrets.",
      ],
    },
    {
      title: "iCloud Drive sync workflow",
      color: "#FD9644",
      content: "This is how you keep progress in sync between iPad and laptop without losing anything.",
      steps: [
        "On iPad after a session: tap Export in the dashboard header. Safari downloads career-os-progress.json to Files → iCloud Drive.",
        "On laptop, open career-os (in your browser or local dev server). Click Import → navigate to iCloud Drive → select career-os-progress.json.",
        "Your progress is now synced. The file always has the same name so it overwrites the previous version — no duplicate files.",
        "On laptop after a session: click Export → save to iCloud Drive (overwrite the existing file).",
        "On iPad next session: Import from iCloud Drive → pick the file → progress restored.",
        "The file is just JSON — you can also open it in any text editor to see or edit your progress manually.",
      ],
    },
    {
      title: "SSH into your own machine from iPad",
      color: "#FF6B35",
      content: "Instead of Codespaces, you can SSH directly into your PC or MacBook. Everything runs on your own hardware — your files, your servers, your ports. Works on the same WiFi network out of the box. Add Tailscale for anywhere access.",
      steps: [
        "macOS: go to System Settings → General → Sharing → turn on Remote Login. That's it — SSH server is built in and ready.",
        "Windows: open PowerShell as Administrator and run: Add-WindowsCapability -Online -Name OpenSSH.Server~~~~0.0.1.0 then Start-Service sshd then Set-Service -Name sshd -StartupType Automatic",
        "Find your machine's local IP: on Mac run ifconfig | grep 'inet ' in Terminal. On Windows run ipconfig and look for IPv4 Address under your WiFi adapter. It will look like 192.168.x.x",
        "On iPad, install Prompt 3 (€10 one-time, best SSH client for iOS) or Termius (free tier works). Create a new connection: host = your local IP, username = your Mac/Windows username, password = your login password.",
        "Connect — you get a full terminal session on your machine. Run npm run dev, python3 script.py, psql — exactly like sitting at your desk.",
        "To access a running dev server in Safari: if your dev server is on port 3000, open Safari on iPad and go to http://192.168.x.x:3000 (same local IP). Your Mac/PC firewall may need to allow the port — on Mac this is usually automatic, on Windows you may need to add a firewall rule.",
      ],
    },
    {
      title: "Tailscale — SSH from anywhere, not just home WiFi",
      color: "#06D6A0",
      content: "The local IP only works when your iPad and computer are on the same network. Tailscale gives your machine a permanent private IP that works from anywhere — café, commute, different country.",
      steps: [
        "Go to tailscale.com and create a free account.",
        "Install Tailscale on your Mac or PC: download from tailscale.com/download. Sign in with your account.",
        "Install Tailscale on iPad: it's a free app on the App Store. Sign in with the same account.",
        "That's it. Your machine now has a permanent 100.x.x.x address visible in the Tailscale app on both devices. It never changes.",
        "In Prompt 3 or Termius, create a second connection profile using the Tailscale IP (100.x.x.x) instead of the local IP. Use this one when you're away from home.",
        "For dev servers: same as local — open Safari and navigate to http://100.x.x.x:3000. Tailscale encrypts all traffic end to end so it's safe to use on public WiFi.",
        "Free tier covers up to 3 devices with no time limit. More than enough for iPad + laptop/PC + one more.",
      ],
    },
    {
      title: "code-server — full VS Code UI in Safari on iPad",
      color: "#A55EEA",
      content: "If you want the full VS Code editor experience (not just a terminal) on your iPad over SSH, code-server runs VS Code as a web server on your machine. Open it in Safari — it looks and works exactly like VS Code on desktop.",
      steps: [
        "On your Mac or PC, install code-server: run curl -fsSL https://code-server.dev/install.sh | sh (Mac/Linux) or download the Windows installer from github.com/coder/code-server/releases",
        "Start it: code-server --bind-addr 0.0.0.0:8080 --auth password",
        "Set a password when prompted. It will show in the terminal output.",
        "On iPad Safari: navigate to http://your-local-ip:8080 (on same WiFi) or http://your-tailscale-ip:8080 (from anywhere). Enter your password.",
        "You get the full VS Code UI: file explorer, editor, integrated terminal, extensions. Install your usual extensions once and they persist.",
        "Tip: on iPad, add the page to your Home Screen (Share → Add to Home Screen) for a full-screen app-like experience without the Safari address bar taking space.",
      ],
    },
    {
      title: "Recommended iPad apps alongside Codespaces",
      color: "#B983FF",
      steps: [
        "Safari — primary browser for Codespaces and code-server. Add to Home Screen for full-screen experience.",
        "Prompt 3 (€10) — best SSH client for iOS. Saves connection profiles, handles keyboard well, stays connected in background.",
        "Tailscale (free) — install this to make SSH work from anywhere, not just home WiFi.",
        "Working Copy — Git client for iPad. Pull, commit, push without needing the terminal. Useful for reviewing diffs on the go.",
        "iA Writer or Obsidian — for writing tasks (handover docs, case studies, technical posts). Syncs with iCloud.",
        "Udemy / Coursera apps — download course videos for offline viewing. Watch on the commute, code when you have WiFi.",
        "Notion — good for task notes alongside GoodNotes, and the service proposal tasks in Phase 06.",
      ],
    },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: "#080810", fontFamily: "'IBM Plex Mono', monospace", color: "#E0E0E0" }}>
      <style>{`
        .cgrid-dots { position: fixed; inset: 0; pointer-events: none; z-index: 0; background-image: radial-gradient(circle, #1A1A2E 1px, transparent 1px); background-size: 28px 28px; }
        .dash-back { cursor: pointer; border: none; background: none; font-family: "IBM Plex Mono", monospace; font-size: 9px; letter-spacing: 3px; text-transform: uppercase; color: #333; padding: 0; transition: color 0.15s; }
        .dash-back:hover { color: #aaa; }
        @keyframes cin { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:translateY(0); } }
        .cani { animation: cin 0.2s ease forwards; }
      `}</style>
      <div className="cgrid-dots" />

      <div style={{ position: "relative", zIndex: 1, background: "#0A0A14", borderBottom: "1px solid #111120", padding: "10px 24px", display: "flex", alignItems: "center", gap: 16 }}>
        <button className="dash-back" onClick={onBack}>← Dashboard</button>
        <span style={{ color: "#1a1a2e" }}>|</span>
        <span style={{ fontSize: 10, letterSpacing: 4, color: "#333", textTransform: "uppercase" }}>GitHub Codespaces Guide</span>
      </div>

      <div className="cani" style={{ position: "relative", zIndex: 1, maxWidth: 760, margin: "0 auto", padding: "40px 32px 80px" }}>
        <div style={{ marginBottom: 40 }}>
          <div style={{ fontSize: 10, letterSpacing: 4, color: "#45AAF2", textTransform: "uppercase", marginBottom: 8 }}>Setup Guide</div>
          <h1 style={{ fontSize: 28, fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, color: "#FFF", marginBottom: 12 }}>Code from iPad — Codespaces, SSH & Tailscale</h1>
          <p style={{ fontSize: 13, color: "#444", lineHeight: 1.8, borderLeft: "2px solid #45AAF2", paddingLeft: 14 }}>
            Three ways to code from your iPad: GitHub Codespaces (cloud VM, works anywhere), SSH into your own Mac or PC (local machine, needs Tailscale for away access), and code-server (full VS Code UI in Safari). Pick one or combine them.
          </p>
        </div>

        {sections.map((sec, i) => (
          <div key={i} style={{ background: "#0D0D1A", border: "1px solid #111120", borderLeft: `3px solid ${sec.color}`, borderRadius: 6, padding: "20px 22px", marginBottom: 16 }}>
            <div style={{ fontSize: 9, letterSpacing: 3, color: sec.color, marginBottom: 10, textTransform: "uppercase" }}>{String(i + 1).padStart(2, "0")}</div>
            <h2 style={{ fontSize: 16, fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, color: "#FFF", marginBottom: 12 }}>{sec.title}</h2>
            {sec.content && <p style={{ fontSize: 13, color: "#666", lineHeight: 1.8, marginBottom: sec.steps ? 12 : 0 }}>{sec.content}</p>}
            {sec.steps && (
              <ol style={{ margin: 0, padding: 0, listStyle: "none" }}>
                {sec.steps.map((step, si) => (
                  <li key={si} style={{ display: "flex", gap: 12, marginBottom: 8, alignItems: "flex-start" }}>
                    <span style={{ fontSize: 10, color: sec.color, minWidth: 18, marginTop: 2, fontWeight: 700 }}>{si + 1}.</span>
                    <span style={{ fontSize: 13, color: "#666", lineHeight: 1.7 }}>{step}</span>
                  </li>
                ))}
              </ol>
            )}
          </div>
        ))}

        <div style={{ background: "#0a0f1a", border: "1px solid #45AAF222", borderRadius: 6, padding: "18px 22px", marginTop: 8 }}>
          <div style={{ fontSize: 9, letterSpacing: 3, color: "#45AAF2", marginBottom: 8, textTransform: "uppercase" }}>Quick reference</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
            {[
              ["📱 iPad OK", "Task works fully in Codespaces or via SSH from iPad"],
              ["💻 Laptop only", "Some setup or integration is easier on laptop"],
              ["Codespaces", "60h/month free · github.com → your repo → Code → Codespaces"],
              ["SSH (Mac)", "System Settings → Sharing → Remote Login → done"],
              ["SSH (Windows)", "PowerShell as Admin → Add-WindowsCapability OpenSSH.Server"],
              ["Tailscale", "SSH from anywhere · free · tailscale.com · 5 min setup"],
              ["code-server", "VS Code UI in Safari · runs on your machine · github.com/coder/code-server"],
              ["iCloud sync", "Export → save to iCloud Drive (same filename every time)"],
            ].map(([label, desc]) => (
              <div key={label} style={{ padding: "10px 12px", background: "#080810", borderRadius: 4 }}>
                <div style={{ fontSize: 10, color: "#45AAF2", marginBottom: 4 }}>{label}</div>
                <div style={{ fontSize: 11, color: "#444", lineHeight: 1.5 }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── DASHBOARD ───────────────────────────────────────────────────
const views = [
  { id: "qa-fs-roadmap",        section: "For You",           title: "Full Stack Roadmap (QA Engineer)",  description: "Resequenced for Java/Selenium background. JS fast-track → React → APIs you already understand → Ship clients.", tag: "For You",      tagColor: "#2ECC71", meta: ["6 phases", "6–8 months"],   totalItems: 24 },
  { id: "qa-ai-roadmap",        section: "For You",           title: "AI Engineer Roadmap (QA Engineer)", description: "Built around your QA instincts. Python fast-track → ML → LLMs → Evals → AI quality consulting.", tag: "For You",      tagColor: "#2ECC71", meta: ["6 phases", "8–12 months"],  totalItems: 24 },
  { id: "qa-fs-curriculum",     section: "For You",           title: "Full Stack Curriculum (QA Engineer)",description: "30 tasks using your QA background as the entry point. Port Java code, test your own APIs, Playwright E2E.", tag: "For You",      tagColor: "#2ECC71", meta: ["6 phases", "30 tasks"],     totalItems: 30 },
  { id: "qa-ai-curriculum",     section: "For You",           title: "AI Engineer Curriculum (QA Engineer)",description: "30 tasks applying QA methodology to AI. Evals, red-teaming, hallucination testing, AI quality audits.", tag: "For You",      tagColor: "#2ECC71", meta: ["6 phases", "30 tasks"],     totalItems: 30 },
  { id: "codespaces-guide",    section: "Setup & Guides",    title: "iPad Setup Guide",                  description: "Code from anywhere — Codespaces, SSH into your Mac/PC, Tailscale for away access, code-server for VS Code in Safari, and iCloud progress sync.", tag: "Guide",       tagColor: "#45AAF2", meta: ["iPad ready", "3 options"], totalItems: 0 },
  { id: "beginner-roadmap",     section: "Roadmaps",          title: "Beginner Freelance Roadmap",       description: "From HTML/CSS basics to paid client work. JS → React → Next.js → Backend → Landing clients.", tag: "Beginner",     tagColor: "#06D6A0", meta: ["6 phases", "9–12 months"],  totalItems: 24 },
  { id: "ai-roadmap",           section: "Roadmaps",          title: "AI Engineer Roadmap",              description: "6-phase roadmap from Python foundations to MLOps & specialisation. All resources linked.", tag: "AI Engineer",  tagColor: "#FF6B35", meta: ["6 phases", "12–18 months"], totalItems: 24 },
  { id: "fs-roadmap",           section: "Roadmaps",          title: "Full Stack Developer Roadmap",     description: "6-phase roadmap from JS mastery to AI-native development. All resources linked.",        tag: "Full Stack",   tagColor: "#F7B731", meta: ["6 phases", "11–16 months"], totalItems: 24 },
  { id: "ai-curriculum-project",section: "Practice Curricula",title: "AI Engineer Curriculum",           description: "30 practice tasks tied to real projects — Competary, Trovaly, Invoysr.",               tag: "AI Engineer",  tagColor: "#FF6B35", meta: ["6 phases", "30 tasks"],     totalItems: 30 },
  { id: "ai-curriculum-generic",section: "Practice Curricula",title: "AI Engineer Curriculum (Generic)", description: "30 standalone practice tasks using public datasets. No project context required.",      tag: "AI Engineer",  tagColor: "#FF6B35", meta: ["6 phases", "30 tasks"],     totalItems: 30 },
  { id: "fs-curriculum-project",section: "Practice Curricula",title: "Full Stack Curriculum",            description: "30 practice tasks tied to real projects — Competary, Trovaly, Invoysr.",               tag: "Full Stack",   tagColor: "#F7B731", meta: ["6 phases", "30 tasks"],     totalItems: 30 },
  { id: "fs-curriculum-generic",section: "Practice Curricula",title: "Full Stack Curriculum (Generic)",  description: "30 standalone practice tasks. Blog APIs, auth flows, Docker. No project context.",      tag: "Full Stack",   tagColor: "#F7B731", meta: ["6 phases", "30 tasks"],     totalItems: 30 },
];

function Dashboard({ onNavigate, progress, onExport, onImport }) {
  const sections = ["For You", "Setup & Guides", "Roadmaps", "Practice Curricula"];

  // Map view id -> progress key prefix to count done items
  const viewPrefixMap = {
    "qa-fs-roadmap":         "Full Stack Roadmap (QA)",
    "qa-ai-roadmap":         "AI Engineer Roadmap (QA)",
    "qa-fs-curriculum":      "Full Stack Curriculum (QA)",
    "qa-ai-curriculum":      "AI Engineer Curriculum (QA)",
    "codespaces-guide":      "",
    "beginner-roadmap":      "Beginner Freelance",
    "ai-roadmap":            "AI Engineer",
    "fs-roadmap":            "Full Stack Developer",
    "ai-curriculum-project": "AI Engineer Curriculum · Project-Based",
    "ai-curriculum-generic": "AI Engineer Curriculum · Generic",
    "fs-curriculum-project": "Full Stack Curriculum · Project-Based",
    "fs-curriculum-generic": "Full Stack Curriculum · Generic",
  };

  const getDone = (viewId) => {
    const prefix = viewPrefixMap[viewId];
    return Object.keys(progress).filter(k => k.startsWith(prefix + "-") && progress[k]).length;
  };

  const totalDone = Object.values(progress).filter(Boolean).length;
  const totalAll = views.reduce((a, v) => a + v.totalItems, 0);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: "#F7F3EE", fontFamily: "'DM Serif Display', Georgia, serif", color: "#111" }}>
      <style>{`
        @keyframes fadeUp { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:translateY(0); } }
        .dcard { background: #fff; border: 1px solid #ddd; padding: 28px 28px 22px; cursor: pointer; transition: border-color 0.15s, box-shadow 0.15s, transform 0.15s; display: flex; flex-direction: column; gap: 14px; animation: fadeUp 0.3s ease both; }
        .dcard:hover { border-color: #111; box-shadow: 4px 4px 0px #111; transform: translate(-2px, -2px); }
        .dcard:hover .darrow { transform: translate(3px, -3px); }
        .darrow { transition: transform 0.15s; display: inline-block; }
        .dsec-label { font-family: "Karla", sans-serif; font-size: 9px; letter-spacing: 5px; text-transform: uppercase; color: #bbb; margin-bottom: 20px; padding-bottom: 12px; border-bottom: 1px solid #e8e3dc; }
        .hdr-btn { cursor: pointer; border: 1px solid #ddd; background: white; font-family: "Karla", sans-serif; font-size: 9px; letter-spacing: 2px; text-transform: uppercase; color: #888; padding: 6px 12px; border-radius: 2px; transition: all 0.15s; }
        .hdr-btn:hover { border-color: #111; color: #111; }
      `}</style>

      <div style={{ borderBottom: "2px solid #111", padding: "14px 48px", display: "flex", justifyContent: "space-between", alignItems: "center", background: "#F7F3EE", position: "sticky", top: 0, zIndex: 10, flexWrap: "wrap", gap: 8 }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 16 }}>
          <span style={{ fontFamily: "'Karla', sans-serif", fontSize: 10, letterSpacing: 5, textTransform: "uppercase", color: "#888" }}>Career Roadmap</span>
          <span style={{ fontFamily: "'Karla', sans-serif", fontSize: 10, color: "#ddd" }}>·</span>
          <span style={{ fontFamily: "'Karla', sans-serif", fontSize: 10, letterSpacing: 3, color: "#bbb", textTransform: "uppercase" }}>Dashboard</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ fontFamily: "'Karla', sans-serif", fontSize: 10, color: "#bbb" }}>
            <span style={{ color: "#111", fontWeight: 700 }}>{totalDone}</span> / {totalAll} completed
          </span>
          <div style={{ width: 60, height: 3, background: "#eee", borderRadius: 2 }}>
            <div style={{ width: `${totalAll ? (totalDone/totalAll)*100 : 0}%`, height: "100%", background: "#111", borderRadius: 2, transition: "width 0.3s" }} />
          </div>
          <button className="hdr-btn" onClick={onExport}>↓ Export</button>
          <button className="hdr-btn" onClick={onImport}>↑ Import</button>
        </div>
      </div>

      <div style={{ padding: "64px 48px 48px", borderBottom: "1px solid #e8e3dc" }}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 24, maxWidth: 700 }}>
          <div style={{ fontSize: 96, lineHeight: 0.85, color: "#111", fontStyle: "italic", opacity: 0.07, userSelect: "none", marginTop: 8, flexShrink: 0 }}>FS</div>
          <div>
            <h1 style={{ fontSize: 44, lineHeight: 1.05, marginBottom: 14 }}>
              Full Stack &<br />
              <span style={{ fontStyle: "italic", color: "#888" }}>AI Engineer</span>
            </h1>
            <p style={{ fontFamily: "'Karla', sans-serif", fontSize: 14, color: "#777", lineHeight: 1.8, maxWidth: 440 }}>
              Two career roadmaps, four practice curricula. Everything you need to go from QA automation engineer to full-stack developer and AI engineer.
            </p>
          </div>
        </div>
        <div style={{ display: "flex", gap: 40, marginTop: 40 }}>
          {[["5", "Roadmaps"], ["6", "Curricula"], ["180", "Practice tasks"], ["18", "Learning phases"]].map(([val, label]) => (
            <div key={label}>
              <div style={{ fontSize: 32, lineHeight: 1, marginBottom: 4 }}>{val}</div>
              <div style={{ fontFamily: "'Karla', sans-serif", fontSize: 10, letterSpacing: 3, textTransform: "uppercase", color: "#bbb" }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: "48px 48px 80px" }}>
        {sections.map((section, si) => (
          <div key={section} style={{ marginBottom: 56 }}>
            <div className="dsec-label">{section}</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 16 }}>
              {views.filter(v => v.section === section).map((item, i) => {
                const done = getDone(item.id);
                const pct = item.totalItems ? Math.round((done / item.totalItems) * 100) : 0;
                return (
                  <div key={item.id} className="dcard" style={{ animationDelay: `${(si * 4 + i) * 60}ms` }} onClick={() => onNavigate(item.id)}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                      <span style={{ fontFamily: "'Karla', sans-serif", fontSize: 9, letterSpacing: 3, textTransform: "uppercase", color: item.tagColor, background: `${item.tagColor}14`, border: `1px solid ${item.tagColor}33`, padding: "3px 10px", borderRadius: 2 }}>{item.tag}</span>
                      <span className="darrow" style={{ fontSize: 18, color: "#ccc" }}>↗</span>
                    </div>
                    <div>
                      <h2 style={{ fontSize: 20, lineHeight: 1.2, marginBottom: 8 }}>{item.title}</h2>
                      <p style={{ fontFamily: "'Karla', sans-serif", fontSize: 12, color: "#888", lineHeight: 1.7 }}>{item.description}</p>
                    </div>
                    <div style={{ display: "flex", gap: 16 }}>
                      {item.meta.map(m => (
                        <div key={m} style={{ fontFamily: "'Karla', sans-serif", fontSize: 10, color: "#bbb" }}>{m}</div>
                      ))}
                    </div>
                    {done > 0 && (
                      <div>
                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
                          <span style={{ fontFamily: "'Karla', sans-serif", fontSize: 9, color: "#bbb", letterSpacing: 1 }}>PROGRESS</span>
                          <span style={{ fontFamily: "'Karla', sans-serif", fontSize: 9, color: "#888" }}>{done}/{item.totalItems} · {pct}%</span>
                        </div>
                        <div style={{ height: 2, background: "#f0ede8", borderRadius: 1 }}>
                          <div style={{ width: `${pct}%`, height: "100%", background: item.tagColor, borderRadius: 1, transition: "width 0.4s" }} />
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── MAIN APP ────────────────────────────────────────────────────
export default function CareerOS() {
  const [view, setView] = useState("dashboard");
  const [progress, setProgress] = useState(() => loadProgress());

  const toggle = (key) => {
    setProgress(prev => {
      const next = { ...prev, [key]: !prev[key] };
      saveProgress(next);
      return next;
    });
  };

  const handleExport = () => exportProgress(progress);
  const handleImport = () => importProgress((data) => {
    setProgress(data);
    saveProgress(data);
  });

  const goBack = () => setView("dashboard");
  const commonCurriculumProps = { progress, onToggle: toggle, onBack: goBack };
  const commonRoadmapProps = { progress, onToggle: toggle, onBack: goBack };

  let content;
  if (view === "codespaces-guide") content = <CodespacesGuide onBack={goBack} />;
  else if (view === "qa-fs-roadmap") content = <RoadmapViewer phases={qaFsRoadmapPhases} title="Full Stack Roadmap (QA)" totalDuration="6–8 months" typeColor={qaFsRoadmapTypeColor} {...commonRoadmapProps} />;
  else if (view === "qa-ai-roadmap") content = <RoadmapViewer phases={qaAiRoadmapPhases} title="AI Engineer Roadmap (QA)" totalDuration="8–12 months" typeColor={qaAiRoadmapTypeColor} {...commonRoadmapProps} />;
  else if (view === "qa-fs-curriculum") content = <CurriculumViewer phases={qaFsCurriculumPhases} title="Full Stack Curriculum (QA)" {...commonCurriculumProps} />;
  else if (view === "qa-ai-curriculum") content = <CurriculumViewer phases={qaAiCurriculumPhases} title="AI Engineer Curriculum (QA)" {...commonCurriculumProps} />;
  else if (view === "beginner-roadmap") content = <RoadmapViewer phases={beginnerRoadmapPhases} title="Beginner Freelance" totalDuration="9–12 months" typeColor={beginnerRoadmapTypeColor} {...commonRoadmapProps} />;
  else if (view === "ai-roadmap") content = <RoadmapViewer phases={aiRoadmapPhases} title="AI Engineer" totalDuration="12–18 months" typeColor={aiRoadmapTypeColor} {...commonRoadmapProps} />;
  else if (view === "fs-roadmap") content = <RoadmapViewer phases={fsRoadmapPhases} title="Full Stack Developer" totalDuration="11–16 months" typeColor={fsRoadmapTypeColor} {...commonRoadmapProps} />;
  else if (view === "ai-curriculum-project") content = <CurriculumViewer phases={aiCurriculumProjectPhases} title="AI Engineer Curriculum · Project-Based" {...commonCurriculumProps} />;
  else if (view === "ai-curriculum-generic") content = <CurriculumViewer phases={aiCurriculumGenericPhases} title="AI Engineer Curriculum · Generic" {...commonCurriculumProps} />;
  else if (view === "fs-curriculum-project") content = <CurriculumViewer phases={fsCurriculumProjectPhases} title="Full Stack Curriculum · Project-Based" {...commonCurriculumProps} />;
  else if (view === "fs-curriculum-generic") content = <CurriculumViewer phases={fsCurriculumGenericPhases} title="Full Stack Curriculum · Generic" {...commonCurriculumProps} />;
  else content = <Dashboard onNavigate={setView} progress={progress} onExport={handleExport} onImport={handleImport} />;

  return (
    <div style={{ position: "fixed", inset: 0, display: "flex", flexDirection: "column", overflow: "hidden" }}>
      <div style={{ flex: 1, overflow: "auto", minHeight: 0 }}>
        {content}
      </div>
    </div>
  );
}
