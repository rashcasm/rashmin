export default function Entry({ title, href, date, meta, isNew, children }) {
  return (
    <article className="entry">
      <div className="entry-head">
        <h3>
          {href ? (
            <a href={href} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          ) : (
            title
          )}
          {isNew && <span className="new">NEW</span>}
        </h3>
        <span className="date">{date}</span>
      </div>
      {meta && <p className="meta">{meta}</p>}
      {children}
    </article>
  );
}
