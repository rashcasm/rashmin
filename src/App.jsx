import { useEffect, useState } from "react";
import Section from "./components/Section";
import Entry from "./components/Entry";
import Contributions from "./components/Contributions";
import CopyAddress from "./components/CopyAddress";
import StatusBar from "./components/StatusBar";
import Terms from "./components/Terms";
import {
  experiences,
  projects,
  skillsCategories,
  achievements,
  community,
  links,
  solanaAddress,
} from "./data";
import "./App.css";

const tabs = [
  ["about", "about"],
  ["work", "work"],
  ["projects", "projects"],
  ["stack", "stack"],
  ["wins", "wins"],
  ["talks", "talks & community"],
  ["values", "terms of working with me"],
  ["contact", "contact"],
];
const ids = tabs.map(([id]) => id);

// the tab lives in the URL hash, so links like /#work and the back button work
const tabFromHash = () => {
  const id = location.hash.slice(1);
  return ids.includes(id) ? id : null;
};

function App() {
  const [tab, setTab] = useState(() => tabFromHash() ?? "about");

  useEffect(() => {
    const onHash = () => {
      const id = tabFromHash();
      if (id) setTab(id);
    };
    addEventListener("hashchange", onHash);
    return () => removeEventListener("hashchange", onHash);
  }, []);

  const [, title] = tabs.find(([id]) => id === tab);
  const n = ids.indexOf(tab) + 1;

  return (
    <div className="page" id="top">
      <StatusBar />

      <header className="masthead">
        <figure className="photo">
          <img
            src="/min.jpg"
            alt="Rashmin Chaudhari - Software Engineer (not Rashmi Chaudhari)"
            width="120"
            height="120"
          />
          <figcaption>fig. 1 — me</figcaption>
        </figure>
        <h1>Rashmin Chaudhari</h1>
        <p className="tagline">
          chief of staff / quant infra / ai
        </p>
      </header>

      <nav className="tabs" aria-label="Sections">
        {tabs.map(([id]) => (
          <a key={id} href={`#${id}`} aria-current={tab === id ? "page" : undefined}>
            {id}
          </a>
        ))}
      </nav>

      <main>
        <Section key={tab} n={n} title={title}>
          {tab === "about" && (
            <>
              <p>
                I’m the chief of staff intern at{" "}
                <a href="https://eigi.ai" target="_blank" rel="noopener noreferrer">
                  <strong>eigi.ai</strong>
                </a>
                , where we make businesses AI-native. I work with the founder
                across product, tech, and GTM.
              </p>
              <p>
                Until September I built trading infrastructure at{" "}
                <strong>WIN Private Equity</strong>: daily market data pipelines
                across <mark>5,500+ equities and futures</mark>, and{" "}
                <mark>10+ systematic strategies</mark> on top of them. Before
                that I built stock screeners and breakout strategies over 2,200+
                equities at <strong>AimFi Capital</strong>.
              </p>
              <p>
                I love analytical decision making, whether the call is a trading
                strategy, a GTM bet, or what gets prioritized this week.
              </p>
              <p>
                I pick up unfamiliar stacks fast. Rust, ZK circuits, and
                production data engineering all went from zero to shipped in
                weeks. I like building things slightly beyond what I think I can
                build.
              </p>
              <p className="aside">This website will not be getting any fancier.</p>
              <p className="label">commits, last 12 months:</p>
              <Contributions />
            </>
          )}

          {tab === "work" &&
            experiences.map((exp) => (
              <Entry
                key={exp.company}
                title={exp.company}
                href={exp.link}
                date={exp.duration}
                meta={`${exp.role} — ${exp.location}`}
                isNew={exp.isNew}
              >
                {exp.summary && <p>{exp.summary}</p>}
                <ul>
                  {exp.details.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </Entry>
            ))}

          {tab === "projects" &&
            projects.map((p) => {
              const [first, ...rest] = p.details;
              return (
                <Entry key={p.title} title={p.title} href={p.link} date={p.year} meta={p.tech}>
                  <p>{first}</p>
                  {rest.length > 0 && (
                    <details>
                      <summary>{rest.length} more</summary>
                      <ul>
                        {rest.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    </details>
                  )}
                </Entry>
              );
            })}

          {tab === "stack" && (
            <dl className="stack">
              {skillsCategories.map((cat) => (
                <div key={cat.title}>
                  <dt>{cat.title.toLowerCase()}</dt>
                  <dd>{cat.items.join(", ")}</dd>
                </div>
              ))}
            </dl>
          )}

          {tab === "wins" && (
            <ul className="log">
              {achievements.map((a) => (
                <li key={a.title}>
                  <span className="yr">{a.year}</span>
                  <span>
                    <strong>{a.title}</strong>, {a.org}. {a.desc}
                  </span>
                </li>
              ))}
            </ul>
          )}

          {tab === "talks" && (
            <ul className="log">
              {community.map((c) => (
                <li key={c.event}>
                  <span className="yr">{c.year}</span>
                  <span>
                    <strong>{c.event}</strong> <em>({c.role.toLowerCase()})</em>.{" "}
                    {c.details.join(" ")}
                  </span>
                </li>
              ))}
            </ul>
          )}

          {tab === "values" && <Terms />}

          {tab === "contact" && (
            <>
              <p>Email is best. I read everything.</p>
              <dl className="stack">
                {links.map((l) => (
                  <div key={l.label}>
                    <dt>{l.label}</dt>
                    <dd>
                      <a
                        href={l.href}
                        {...(l.href.startsWith("http") && {
                          target: "_blank",
                          rel: "noopener noreferrer",
                        })}
                      >
                        {l.text}
                      </a>
                    </dd>
                  </div>
                ))}
              </dl>
              <CopyAddress address={solanaAddress} />
            </>
          )}
        </Section>
      </main>

      <footer>
        <p>
          © 2026 Rashmin Chaudhari. Often misspelled as <em>Rashmi Chaudhari</em>;
          no hard feelings. <a href="#top">↑ top</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
