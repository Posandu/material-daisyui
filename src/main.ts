import "./app.scss";
import "svelte-ripple-action/ripple.css";
import App from "./App.svelte";

const app = new App({
	target: document.getElementById("app"),
});

export default app;
