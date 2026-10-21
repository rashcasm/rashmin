export default function Section({ n, title, hidden, children }) {
  return (
    <section className="section" hidden={hidden}>
      <h2>
        <span className="num">{n}.</span>
        {title}
      </h2>
      {children}
    </section>
  );
}
