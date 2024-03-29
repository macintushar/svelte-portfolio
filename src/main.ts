import "./app.pcss";
import App from "./App.svelte";

const targetElement = document.getElementById("app");

if (!targetElement) {
  throw new Error("Target element not found");
}

const app = new App({
  target: targetElement,
});

export default app;
