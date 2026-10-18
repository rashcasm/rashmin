// Runs once per page load (module scope), so StrictMode double-renders don't double count.
const visits = (() => {
  try {
    const n = Number(localStorage.getItem("visits") || 0) + 1;
    localStorage.setItem("visits", String(n));
    return n;
  } catch {
    return null;
  }
})();

// On GitHub Pages this is the deploy time of index.html; in dev it's "now".
const modified = new Date(document.lastModified).toLocaleDateString("en-CA");

export default function StatusBar() {
  return (
    <div className="status">
      <span>rashmin.tech</span>
      <span>last modified {modified}</span>
      {visits && (
        <span>{visits === 1 ? "first visit? hi." : `you've been here ${visits} times`}</span>
      )}
    </div>
  );
}
