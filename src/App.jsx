import { useState } from "react";
import {
  Github,
  Twitter,
  Linkedin,
  Mail,
  Terminal,
  Database,
  Cpu,
  Globe,
  Code2,
  ExternalLink,
  Wrench,
  Library,
  Layers,
  Zap,
  BookOpen,
  Send,
  Instagram,
  Coffee,
  Check,
  FileText,
} from "lucide-react";
import { GitHubCalendar } from "react-github-calendar";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("about");
  // REPLACE THIS WITH YOUR ACTUAL SOLANA WALLET ADDRESS
  const [copied, setCopied] = useState(false);
  const solanaAddress = "GsJYonU5Kz4MJBHZ5UFx9oyStBpXXswnZcFUorktj2yZ";

  const handleCopy = () => {
    navigator.clipboard.writeText(solanaAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  // Custom theme for the calendar to match your pastel look
  // Calendar ramp: pc-plastic empty cell -> bubbletech pink
  const calendarTheme = {
    light: ["#e4ddd2", "#ffb4c5", "#ff8ba6", "#ff7392", "#ff6183"],
    dark: ["#e4ddd2", "#ffb4c5", "#ff8ba6", "#ff7392", "#ff6183"],
  };

  const experiences = [
    {
      role: "Quantitative Software Developer Intern",
      company: "WIN Private Equity Ltd",
      duration: "March 2026 – Present",
      location: "Remote (International)",
      details: [
        "Built an automated data pipeline that delivers clean daily market data for 5,500+ equities and futures (NYSE and crypto) to the trading team, ingesting and processing raw price feeds with Python and PostgreSQL.",
        "Developed 10+ systematic trading strategies on top of the pipeline, with the best performers reaching a profit factor of ≈3 in backtests.",
        "Removed a full day of lag in daily price data by building an intraday-to-daily aggregation process, after catching accuracy gaps in yfinance through automated cross-checks.",
        "Made deployments repeatable across development and production by packaging the pipeline with Docker.",
      ],
    },
    {
      role: "Founder’s Office — Product",
      company: "eigi.ai",
      duration: "Aug 2026 – Present",
      location: "Remote (India)",
      details: [
        "Working directly with the founder across product, engineering, and growth at an early-stage AI startup.",
        "Scoping technical decisions and third-party integrations (Meta, GCP, Anthropic) alongside the engineering team.",
        "Stepping into strategy, hiring, and whatever else the week requires.",
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
      details: [
        "https://daemonsbuild.me",
        "Whether you need high-scale Web2 infrastructure, automated Python trading pipelines, or systems built close to the metal, we ship production-ready code.",
      ],
    },
  ];
  // Categorized Skills Data
  const skillsCategories = [
    {
      title: "Languages",
      icon: <Code2 size={20} />,
      color: "var(--accent-4)",
      items: ["Python", "SQL", "Rust", "C++", "TypeScript", "JavaScript"],
    },
    {
      title: "Quant & Data",
      icon: <Zap size={20} />,
      color: "var(--accent-5)",
      items: ["pandas", "NumPy", "Matplotlib", "Backtesting", "Isolation Forest", "TradingView"],
    },
    {
      title: "Libraries & Frameworks",
      icon: <Layers size={20} />,
      color: "var(--accent-1)",
      items: ["FastAPI", "React", "Node.js", "MERN", "Anchor"],
    },
    {
      title: "Developer Tools",
      icon: <Wrench size={20} />,
      color: "var(--accent-3)",
      items: ["Git", "Docker", "PostgreSQL", "GCP", "Postman", "Surfpool"],
    },
  ];

  const achievements = [
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

  const projects = [
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

  const community = [
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

  /* GITHUB CALCULATIONS */
  // const selectLastHalfYear = (contributions) => {
  //   const now = new Date();
  //   const sixMonthsAgo = new Date();
  //   sixMonthsAgo.setMonth(now.getMonth() - 6);
  //   return contributions.filter(activity => {
  //     const activityDate = new Date(activity.date);
  //     return activityDate >= sixMonthsAgo && activityDate <= now;
  //   });
  // };

  return (
    <div className="container">
      {/* HEADER SECTION */}
      <header className="header">
        <div className="profile-pic-container">
          <img
            src="/min.jpg"
            alt="Rashmin Chaudhari - Software Engineer (not Rashmi Chaudhari)"
            className="profile-pic"
          />
        </div>

        <h1>Rashmin Chaudhari</h1>
        <div className="tagline">QUANT INFRA | AI | FOUNDER’S OFFICE</div>

        <div className="socials">
          <a
            href="https://www.linkedin.com/in/rashminchaudhari"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://twitter.com/rashcasm"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn"
          >
            <Twitter size={20} />
          </a>
          <a
            href="https://github.com/rashcasm"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn"
          >
            <Github size={20} />
          </a>
          <a
            href="https://t.me/rashminc"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn"
          >
            <Send size={20} />
          </a>
          <a href="mailto:rashmin.work@gmail.com" className="icon-btn">
            <Mail size={20} />
          </a>
          <a
            href="/master_resume_aug.pdf"
            download="Rashmin_Resume.pdf"
            className="icon-btn"
          >
            <FileText size={20} />
          </a>
        </div>
      </header>

      {/* NAVIGATION */}
      <nav className="nav">
        {[
          "about",
          "experience",
          "stack",
          "projects",
          "achievements",
          "community",
        ].map((tab) => (
          <button
            key={tab}
            className={`nav-btn ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </nav>

      {/* MAIN CONTENT AREA */}
      <main>
        {activeTab === "about" && (
          <>
            <section
              className="card"
              style={{ textAlign: "left", padding: "24px 26px" }}
            >
              <p>
                <strong>Quantitative Software Developer</strong> based in
                Nagpur, building quant trading infrastructure at{" "}
                <strong>WIN Private Equity Ltd</strong> — daily market data
                pipelines across 5,500+ equities and futures, and 10+
                systematic strategies on top of them.
              </p>
              <p>
                Alongside that I’m in the <strong>Founder’s Office</strong> at{" "}
                <strong>eigi.ai</strong>, working with the founder across
                product, engineering, and growth. Before this I built stock
                screeners and breakout strategies across 2,200+ equities as an{" "}
                <strong>Algo Trading Developer</strong> at{" "}
                <strong>AimFi Capital</strong>.
              </p>
              <p>
                I pick up unfamiliar stacks fast — Rust, ZK circuits, and
                production data engineering all went from zero to shipped in
                weeks. I like building things that are slightly beyond what I
                think I can build.
              </p>
            </section>

            {/* GITHUB CALENDAR SECTION */}
            <div
              className="card"
              style={{
                marginTop: "20px",
                padding: "20px",
                textAlign: "center",
              }}
            >
              <h3
                style={{
                  margin: "0 0 20px 0",
                  fontSize: "1.5rem",
                  fontFamily: "var(--font-display)",
                  fontWeight: 400,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                }}
              >
                <Github size={20} /> Contributions
              </h3>
              {/* Wrapper for overflow scrolling on small screens */}
              <div
                style={{
                  width: "100%",
                  overflowX: "auto",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <GitHubCalendar
                  username="rashcasm"
                  blockSize={12}
                  blockMargin={2}
                  fontSize={14}
                  blockRadius={5}
                  theme={calendarTheme}
                  style={{ color: "var(--text-color)" }}
                  showColorLegend={false}
                />
              </div>
            </div>
            <div
              style={{
                marginTop: "40px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <button
                onClick={handleCopy}
                className="nav-btn"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  fontSize: "1rem",
                  padding: "15px 30px",
                  backgroundColor: copied ? "var(--ok)" : "var(--pc-plastic-2)",
                }}
              >
                {copied ? <Check size={20} /> : <Coffee size={20} />}
                {copied ? "Address Copied!" : "Buy me a Solana coffee"}
              </button>
            </div>
          </>
        )}

        {/* NEW EXPERIENCE TAB */}
        {activeTab === "experience" && (
          <section>
            <h2 className="section-title">EXPERIENCE</h2>
            {experiences.map((exp, index) => (
              <div key={index} className="card">
                <div className="card-header">
                  <div>
                    <h3 className="card-title" style={{ fontSize: "1.3rem" }}>
                      {exp.role}
                    </h3>
                    <div className="chip" style={{ background: "var(--accent-2)" }}>
                      {exp.company}
                    </div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <span className="card-year">{exp.duration}</span>
                    <div
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.8rem",
                        marginTop: "5px",
                        opacity: 0.8,
                      }}
                    >
                      {exp.location}
                    </div>
                  </div>
                </div>
                <ul
                  style={{
                    marginTop: "15px",
                    paddingLeft: "20px",
                    fontSize: "0.95rem",
                  }}
                >
                  {exp.details.map((point, i) => (
                    <li key={i} style={{ marginBottom: "5px" }}>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        )}

        {/* NEW STACK TAB */}
        {activeTab === "stack" && (
          <section>
            <h2 className="section-title">TECH STACK</h2>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              {skillsCategories.map((cat, index) => (
                <div
                  key={index}
                  className="card"
                  style={{ padding: "20px", textAlign: "left" }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      marginBottom: "15px",
                      borderBottom: "1.5px dashed var(--pc-plastic-4)",
                      paddingBottom: "10px",
                    }}
                  >
                    <span style={{ color: "var(--hot)", display: "flex" }}>{cat.icon}</span>
                    <h3
                      style={{
                        margin: 0,
                        fontSize: "1.35rem",
                        fontFamily: "var(--font-display)",
                        fontWeight: 400,
                      }}
                    >
                      {cat.title}
                    </h3>
                  </div>

                  <div
                    style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}
                  >
                    {cat.items.map((item, i) => (
                      <span
                        key={i}
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.78rem",
                          letterSpacing: "0.04rem",
                          fontWeight: 700,
                          backgroundColor: cat.color,
                          padding: "7px 14px",
                          border: "1.5px solid var(--border-color)",
                          boxShadow: "var(--shadow-sm)",
                          borderRadius: "50vw",
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === "achievements" && (
          <section>
            <h2 className="section-title">AWARDS & WINS</h2>
            {achievements.map((item, index) => (
              <div key={index} className="card">
                <div className="card-header">
                  <div>
                    <h3 className="card-title">{item.title}</h3>
                    <small
                      style={{ fontFamily: "var(--font-mono)", opacity: 0.7 }}
                    >
                      {item.org}
                    </small>
                  </div>
                  <span className="card-year">{item.year}</span>
                </div>
                <p style={{ marginTop: "10px", fontSize: "0.95rem" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </section>
        )}

        {activeTab === "projects" && (
          <section>
            <h2 className="section-title">BUILD LOG</h2>
            {projects.map((project, index) => (
              <div key={index} className="card">
                <div className="card-header">
                  <div>
                    <h3 className="card-title" style={{ fontSize: "1.3rem" }}>
                      {project.title}
                    </h3>
                    <div className="chip" style={{ background: "var(--accent-4)" }}>
                      {project.tech}
                    </div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <span className="card-year">{project.year}</span>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-btn"
                      style={{
                        width: "30px",
                        height: "30px",
                        marginTop: "5px",
                        marginLeft: "auto",
                      }}
                    >
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
                <ul
                  style={{
                    marginTop: "15px",
                    paddingLeft: "20px",
                    fontSize: "0.95rem",
                  }}
                >
                  {project.details.map((point, i) => (
                    <li key={i} style={{ marginBottom: "5px" }}>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        )}

        {activeTab === "community" && (
          <section>
            <h2 className="section-title">COMMUNITY & TALKS</h2>
            {community.map((item, index) => (
              <div key={index} className="card">
                <div className="card-header">
                  <div>
                    <h3 className="card-title" style={{ fontSize: "1.2rem" }}>
                      {item.event}
                    </h3>
                    <div className="chip" style={{ background: "var(--accent-3)" }}>
                      {item.role}
                    </div>
                  </div>
                  <span className="card-year">{item.year}</span>
                </div>
                <ul
                  style={{
                    marginTop: "15px",
                    paddingLeft: "20px",
                    fontSize: "0.95rem",
                  }}
                >
                  {item.details.map((point, i) => (
                    <li key={i} style={{ marginBottom: "5px" }}>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        )}
      </main>

      <footer>
        <p>© 2026 Rashmin</p>
        <p style={{ fontSize: "0.8em", color: "#888" }}>
          (Note: My name is <strong>Rashmin Chaudhari</strong>, often misspelled as <em>Rashmi Chaudhari</em>.)
        </p>
      </footer>
    </div>
  );
}

export default App;
