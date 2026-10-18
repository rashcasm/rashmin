export default function Section({ id, title, children }) {
  return (
    <section id={id} className="section">
      <h2>
        <a href={`#${id}`}>{title}</a>
      </h2>
      {children}
    </section>
  );
}
