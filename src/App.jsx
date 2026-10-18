import { useEffect } from "react";
import Section from "./components/Section";
import Entry from "./components/Entry";
import Contributions from "./components/Contributions";
import CopyAddress from "./components/CopyAddress";
import StatusBar from "./components/StatusBar";
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

const toc = ["about", "work", "projects", "stack", "wins", "talks", "contact"];

function App() {
  // the browser tries the #hash before React has rendered the target
  useEffect(() => {
    document.getElementById(location.hash.slice(1))?.scrollIntoView();
  }, []);

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
          quant infra / ai / founder’s office / <s>sleep</s>
        </p>
        <nav className="toc" aria-label="Sections">
          [{" "}
          {toc.map((id) => (
            <span key={id}>
              <a href={`#${id}`}>{id}</a>
              {" · "}
            </span>
          ))}
          <a href="/master_resume_aug.pdf" download="Rashmin_Resume.pdf">
            resume.pdf
          </a>{" "}
          ]
        </nav>
      </header>

      <Section id="about" title="about">
        <p>
          Quantitative software developer in Nagpur. I build trading
          infrastructure at <strong>WIN Private Equity</strong>: daily market
          data pipelines across <mark>5,500+ equities and futures</mark>, and{" "}
          <mark>10+ systematic strategies</mark> on top of them.
        </p>
        <p>
          I’m also in the founder’s office at <strong>eigi.ai</strong>, working
          across product, engineering, and growth. Before that I built stock
          screeners and breakout strategies over 2,200+ equities at{" "}
          <strong>AimFi Capital</strong>.
        </p>
        <p>
          I pick up unfamiliar stacks fast. Rust, ZK circuits, and production
          data engineering all went from zero to shipped in weeks. I like
          building things slightly beyond what I think I can build.
        </p>
        <p className="aside">
          This website will not be getting any fancier. The work is below.
        </p>
        <p className="label">commits, last 12 months:</p>
        <Contributions />
      </Section>

      <hr />

      <Section id="work" title="work">
        {experiences.map((exp) => (
          <Entry
            key={exp.company}
            title={exp.company}
            href={exp.link}
            date={exp.duration}
            meta={`${exp.role} — ${exp.location}`}
            isNew={exp.isNew}
          >
            <ul>
              {exp.details.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </Entry>
        ))}
      </Section>

      <hr />

      <Section id="projects" title="projects">
        {projects.map((p) => {
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
      </Section>

      <hr />

      <Section id="stack" title="stack">
        <dl className="stack">
          {skillsCategories.map((cat) => (
            <div key={cat.title}>
              <dt>{cat.title.toLowerCase()}</dt>
              <dd>{cat.items.join(", ")}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <hr />

      <Section id="wins" title="wins">
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
      </Section>

      <hr />

      <Section id="talks" title="talks & community">
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
      </Section>

      <hr />

      <Section id="contact" title="contact">
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
      </Section>

      <footer>
        <p>no cookies. no trackers. no gradients. <a href="#top">↑ top</a></p>
        <p>
          © 2026 Rashmin Chaudhari. Often misspelled as <em>Rashmi Chaudhari</em>;
          no hard feelings.
        </p>
      </footer>
    </div>
  );
}

export default App;
