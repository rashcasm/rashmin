import { useState } from "react";
import { values, prohibited } from "../data";

const replies = {
  agree: (
    <>
      Good. Now email me:{" "}
      <a href="mailto:rashmin.work@gmail.com">rashmin.work@gmail.com</a>
    </>
  ),
  disagree: "Fair. Convince me over coffee. Data counts, and so do vibes.",
};

export default function Terms() {
  const [answer, setAnswer] = useState(null);

  return (
    <div className="terms">
      <p className="meta">
        Last updated: whenever I learned something. By reading past this line
        you agree to the following.
      </p>

      <ol className="clauses">
        {values.map((v, i) => (
          <li key={v.title}>
            <span className="clause-no">§{i + 1}</span>
            <div>
              <strong>{v.title}.</strong> {v.text}
            </div>
          </li>
        ))}
      </ol>

      <h3>Prohibited conduct</h3>
      <ul className="prohibited">
        {prohibited.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>

      <h3>Acceptance</h3>
      <p className="buttons">
        <button type="button" className="btn" onClick={() => setAnswer("agree")}>
          I agree
        </button>
        <button type="button" className="btn" onClick={() => setAnswer("disagree")}>
          I disagree
        </button>
      </p>
      {answer && <p aria-live="polite">{replies[answer]}</p>}

      <p className="fine-print">
        * FAFO: look it up. These terms are governed by the laws of physics and
        compounding.
      </p>
    </div>
  );
}
