import { renderToString } from "react-dom/server";
import App from "./App";

export { notes } from "./data";

// used by the prerender plugin in vite.config.js
export const render = (page) => renderToString(<App page={page} />);
