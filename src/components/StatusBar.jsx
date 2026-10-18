import { useEffect, useState } from "react";

// On GitHub Pages this is the deploy time of index.html; in dev it's "now".
const modified = new Date(document.lastModified).toLocaleDateString("en-CA");

const linkOf = (e) => e.target.closest?.("a[href]");

// Old-browser status bar: shows where a link goes while you hover or tab onto it.
export default function StatusBar() {
  const [href, setHref] = useState(null);

  useEffect(() => {
    const show = (e) => {
      const a = linkOf(e);
      if (a) setHref(a.href);
    };
    const hide = (e) => {
      if (linkOf(e)) setHref(null);
    };
    const events = [
      ["mouseover", show],
      ["focusin", show],
      ["mouseout", hide],
      ["focusout", hide],
    ];
    events.forEach(([type, fn]) => document.addEventListener(type, fn));
    return () => events.forEach(([type, fn]) => document.removeEventListener(type, fn));
  }, []);

  return (
    <div className="status">
      <span>rashmin.tech</span>
      <span className="status-msg">{href ?? `last modified ${modified}`}</span>
    </div>
  );
}
