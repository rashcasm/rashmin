export const experiences = [
  {
    role: "Chief of Staff Intern",
    company: "eigi.ai",
    isNew: true,
    duration: "Aug 2026 – Present",
    location: "Remote (India)",
    link: "https://eigi.ai",
    summary: "eigi makes businesses AI-native. I work directly with the founder across product, tech, and GTM.",
    details: [
      "Led product for a finance learning app (investment banking and private equity) for a US client.",
      "Led product with a team of forward-deployed engineers on the automation layer of a US-based supply chain company, covering customer support and operations.",
      "Make technical calls and scope integrations (Meta, GCP, Anthropic, etc.) with the engineering team.",
      "Set up academic partnerships that feed our hiring and community pipeline.",
      "Handled first-round screening for forward-deployed engineer roles.",
    ],
  },
  {
    role: "Quantitative Software Developer Intern",
    company: "WIN Private Equity Ltd",
    duration: "March 2026 – Sept 2026",
    location: "Remote (International)",
    details: [
      "Built an automated data pipeline that delivers clean daily market data for 5,500+ equities and futures (NYSE and crypto) to the trading team, ingesting and processing raw price feeds with Python and PostgreSQL.",
      "Developed 10+ systematic trading strategies on top of the pipeline, with the best performers reaching a profit factor of ≈3 in backtests.",
      "Removed a full day of lag in daily price data by building an intraday-to-daily aggregation process, after catching accuracy gaps in yfinance through automated cross-checks.",
      "Made deployments repeatable across development and production by packaging the pipeline with Docker.",
    ],
  },
  {
    role: "Algorithmic Trading Intern",
    company: "AimFi Capital",
    duration: "Jan 2026 – July 2026",
    location: "Remote (India)",
    details: [
      "Cut daily stock screening from 2–3 days of manual chart-checking to under 5 minutes, by building a real-time engine that scans 2,200+ NSE & BSE stocks for 8+ technical chart patterns in Python.",
      "Gave traders a ready-to-act shortlist every day by delivering ranked watchlists that automatically flag breakouts, trendline breaks, and bullish & bearish divergences.",
    ],
  },
  {
    role: "Co-Founder",
    company: "Daemons Build",
    duration: "Jan 2026 – Present",
    location: "Remote (Nagpur)",
    link: "https://daemonsbuild.me",
    details: [
      "Whether you need high-scale Web2 infrastructure, automated Python trading pipelines, or systems built close to the metal, we ship production-ready code.",
    ],
  },
];
export const skillsCategories = [
  {
    title: "Languages",
    items: ["Python", "SQL", "Rust", "C++", "TypeScript", "JavaScript"],
  },
  {
    title: "Quant & Data",
    items: ["pandas", "NumPy", "Matplotlib", "Backtesting", "Isolation Forest", "TradingView"],
  },
  {
    title: "Libraries & Frameworks",
    items: ["FastAPI", "React", "Node.js", "MERN", "Anchor"],
  },
  {
    title: "Developer Tools",
    items: ["Git", "Docker", "PostgreSQL", "GCP", "Postman", "Surfpool"],
  },
];

export const achievements = [
  {
    title: "Copyright: QuantLabs",
    org: "SW-11555/2026-CO",
    year: "2026",
    desc: "Registered copyright for QuantLabs: NLP Based Backtesting Engine and Portfolio Rebalancer.",
  },
  {
    title: "Copyright: Smart Browser Extension",
    org: "LD-46176/2025-CO",
    year: "2025",
    desc: "Registered copyright for Automated Job Application Using a Smart Browser Extension.",
  },
  {
    title: "First Position, Blockchain Nexus",
    org: "IIT Kanpur",
    year: "2025",
    desc: "Created network topology architecture using Hyperledger Fabric and defined high-level system architecture.",
  },
  {
    title: "Second Position, Stellar Ragnarok",
    org: "Nagpur",
    year: "2025",
    desc: "Pitched a product idea using Stellar blockchain and deployed Soroban Smart Contracts.",
  },
  {
    title: "First Position, Raisoni Tech Hackathon",
    org: "Nagpur",
    year: "2024",
    desc: "Secured 1st place for innovative technical solutions.",
  },
];

export const projects = [
  {
    title: "QuantLabs",
    tech: "React, Node.js, Python",
    year: "2026",
    link: "https://quant-ecru-seven.vercel.app/",
    details: [
      "Built a trading-strategy sandbox that turns a plain-English strategy description into runnable Python backtest code, shipping with 8+ pre-built strategies.",
      "Wrote a backtesting engine that simulates execution latency for realistic fills and reports Sharpe ratio, maximum drawdown, and other risk metrics on historical price data.",
      "Added an automatic portfolio rebalancer that controls risk and hedges with options based on live market conditions.",
    ],
  },
  {
    title: "WhyLine",
    tech: "Python, FastAPI, React, TypeScript",
    year: "2026",
    link: "https://github.com/rashcasm/WhyLine",
    details: [
      "Built a real-time anomaly detection system monitoring 10 crypto symbols concurrently, flagging statistically significant price moves (|z| ≥ 3) and volume surges (z ≥ 3.5) within a single 1-minute candle using rolling z-scores and a streaming Isolation Forest over live Binance data.",
      "Removed the dashboard’s cold-start gap by backfilling and back-scanning 1,000 candles per symbol (~16 hours of annotated history) before handing off to live WebSocket streaming.",
      "Validated detection correctness with 33 passing automated tests spanning z-score math, outlier flagging, and API parsing, built as a fully offline test suite with a 4-person team.",
    ],
  },
  {
    title: "Commit-Mirror",
    tech: "Python, PyPI Package",
    year: "2026",
    link: "https://github.com/rashcasm/portfolio-check",
    details: [
      "Solved GitHub’s contribution-graph loss for developers exiting private organizations by building and publishing a pip-installable CLI that mirrors commit metadata to a public repo with zero code or diff exposure.",
      "Enabled fully automated, hands-off operation via daily syncing with cron/Task Scheduler, a dry-run preview mode, and a config-driven setup wizard.",
    ],
  },
  {
    title: "Quill.ai",
    tech: "JavaScript, Chrome Extensions, AI",
    year: "2025",
    link: "https://github.com/rashcasm/form_fill_mini",
    details: [
      "Built a Google Chrome extension that generates AI-based responses and auto-fills web forms.",
      "Implemented DOM parsing and field detection to inject context-aware responses directly into forms.",
    ],
  },
  {
    title: "Multi-threaded Web Server",
    tech: "Rust",
    year: "2025",
    link: "https://github.com/rashcasm/rust_web_server",
    details: [
      "Built a multi-threaded web server in Rust.",
      "No framework. Create thread pool manually to really understand how things work under the hood.",
    ],
  },
  {
    title: "Minigrep",
    tech: "Rust, CLI",
    year: "2025",
    link: "https://github.com/rashcasm/minigrep-rustbook",
    details: [
      "Built a fast command-line text search tool inspired by grep using Rust.",
      "Implemented pattern matching, file reading, and case-insensitive search via environment variables.",
    ],
  },
  {
    title: "Bhishi",
    tech: "TypeScript, Compact, Midnight (ZK)",
    year: "2026",
    link: "https://github.com/rashcasm/bhishi",
    details: [
      "Eliminated organizer-fraud risk in traditional chit funds by holding 100% of member contributions in trustless on-chain escrow via an 8-circuit smart contract on the Midnight privacy blockchain.",
      "Protected members from publicly signaling financial distress by sealing every round’s bid behind a zero-knowledge commitment cryptographically verified against its reveal.",
      "Verified the auction and payout logic with 14 passing tests covering sealed-bid integrity, one-win-per-cycle guarantees, and full-cycle money conservation, using a TypeScript simulator mirroring every on-chain circuit assertion.",
    ],
  },
  {
    title: "Ekonos",
    tech: "Rust, Solana, Anchor",
    year: "2025",
    link: "https://github.com/rashcasm/ekonos-v1",
    details: [
      "Started as the capstone project under turbin3.org (The Solana Talent Engine).",
      "Designing a protocol enabling fractional ownership of assets on Solana.",
    ],
  },
  {
    title: "Automated Market Maker (AMM)",
    tech: "Rust, Solana, Anchor",
    year: "2025",
    link: "https://github.com/rashcasm/anchor-amm",
    details: [
      "Built an Automated Market Maker smart contract on Solana.",
      "Implemented liquidity pools, swaps, and LP token minting using Anchor framework.",
    ],
  },
  {
    title: "IdeaSpark",
    tech: "React, MongoDB, Flutter, MERN",
    year: "2024",
    link: "https://github.com/rashcasm/RTH-ideaspark",
    details: [
      "Built a platform to connect student innovators with mentors and investors.",
      "Implemented WebSocket for live communication and pitching.",
    ],
  },
  {
    title: "Rust-Solana Learning Repo",
    tech: "markdown",
    year: "2025",
    link: "https://github.com/rashcasm/web3-journal",
    details: [
      "personal learning repository documenting Rust and Solana concepts.",
    ],
  },
];

export const community = [
  {
    event: "Get On-Chain Workshop",
    role: "Speaker and Instructor",
    year: "2025",
    details: [
      "Conducted a hands-on workshop titled ‘Get On-Chain’ for 70+ participants.",
      "Introduced blockchain fundamentals and guided attendees to deploy their first dApp using Noah.ai.",
    ],
  },
  {
    event: "Superteam India & Solana Foundation",
    role: "Conference Attendee",
    year: "2025",
    details: [
      "Participated in the OnlyDevs Conference by Superteam India and Solana Apex by Solana Foundation.",
      "Engaged with the Solana developer ecosystem and explored upcoming trends in decentralized applications.",
    ],
  },
  {
    event: "HacKronyX",
    role: "Coordinator and Organizer",
    year: "2025",
    details: [
      "Led a national-level hackathon with 3500+ registrations.",
      "Managed logistics, sponsorships, volunteers, and end-to-end event execution.",
    ],
  },
  {
    event: "HackGenX",
    role: "Technical Mentor and Judge",
    year: "2025",
    details: [
      "Guided participants and evaluated projects on innovation, design, and technical depth.",
    ],
  },
  {
    event: "Guest Speaker on AI",
    role: "Vigyan Va Ganit Sanskar Shibir (ViBha)",
    year: "2025",
    details: [
      "Delivered a talk on AI applications, emerging trends, and societal impact in Daryapur.",
    ],
  },
  {
    event: "Google Devfest Nagpur",
    role: "Volunteer",
    year: "2025",
    details: [
      "Contributed in the management and operations of Devfest 2025.",
    ],
  },
];


export const links = [
  { label: "email", text: "rashmin.work@gmail.com", href: "mailto:rashmin.work@gmail.com" },
  { label: "github", text: "rashcasm", href: "https://github.com/rashcasm" },
  { label: "linkedin", text: "rashminchaudhari", href: "https://www.linkedin.com/in/rashminchaudhari" },
  { label: "twitter", text: "@rashcasm", href: "https://twitter.com/rashcasm" },
  { label: "telegram", text: "@rashminc", href: "https://t.me/rashminc" },
];

export const solanaAddress = "GsJYonU5Kz4MJBHZ5UFx9oyStBpXXswnZcFUorktj2yZ";

export const values = [
  {
    title: "Ambition and agency",
    text: "Aim high enough that it’s a little embarrassing to say out loud. Then go do it without waiting for permission. FAFO* is a valid research method.",
  },
  {
    title: "Experiments over opinions",
    text: "Don’t know if it works? Build it and find out. A weekend prototype settles more arguments than a month of meetings.",
  },
  {
    title: "Losing is allowed",
    text: "Not trying is a guaranteed 100% loss. Trying and losing still pays out in data, scar tissue, and a better second attempt.",
  },
  {
    title: "Build your own thing",
    text: "I like people who want to start something of their own, whether that’s next year or next Monday.",
  },
  {
    title: "Ride the wave",
    text: "Big technology shifts show up maybe once a decade. Paddle early, paddle hard, and don’t wait for the wave to look obvious.",
  },
  {
    title: "Process over outcome",
    text: "Outcomes are lagging indicators. Get the process right, repeat it, and the results follow.",
  },
  {
    title: "Speed",
    text: "Fast and slightly wrong beats slow and perfectly late. You can fix a shipped thing. You can’t fix a thing that’s still in a doc.",
  },
  {
    title: "Ownership",
    text: "If it’s broken and you saw it, it’s yours now.",
  },
  {
    title: "Skin in the game",
    text: "Opinions are free. Positions cost money. I trust people who’ve taken a position.",
  },
  {
    title: "Show up on boring days",
    text: "Motivation shows up on day one. Consistency is what’s still there on day ninety.",
  },
];

export const prohibited = [
  "“Let’s circle back” with no date attached",
  "“We’ve always done it this way”",
  "Asking for permission you already have",
  "A 40-slide deck for a four-line idea",
  "Waiting for the perfect time",
];
