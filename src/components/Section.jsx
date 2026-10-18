export default function Section({ n, title, children }) {
  return (
    <section className="section">
      <h2>
        <span className="num">{n}.</span>
        {title}
      </h2>
      {children}
    </section>
  );
}
