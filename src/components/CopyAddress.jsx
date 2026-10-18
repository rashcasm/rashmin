import { useState } from "react";

export default function CopyAddress({ address }) {
  const [copied, setCopied] = useState(false);

  const copy = () =>
    navigator.clipboard
      ?.writeText(address)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(() => {}); // address is on screen, user can select it by hand

  return (
    <p>
      buy me a coffee, in SOL: <code className="addr">{address}</code>{" "}
      <button type="button" className="text-btn" onClick={copy}>
        [{copied ? "copied" : "copy"}]
      </button>
    </p>
  );
}
