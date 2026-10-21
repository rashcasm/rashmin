import { notes } from "../data";

export default function Notes() {
  return (
    <div className="notes">
      <p className="meta">
        Things I believe right now, dated so I can be held to them.
      </p>

      <ul className="note-index">
        {notes.map((n) => (
          <li key={n.id}>
            <a href={`#${n.id}`}>{n.title}</a>
          </li>
        ))}
      </ul>

      {notes.map((n) => (
        <article key={n.id} id={n.id} className="note">
          <h3>{n.title}</h3>
          <p className="meta">
            <time dateTime={n.date}>{n.date}</time>
          </p>
          {n.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </article>
      ))}
    </div>
  );
}
