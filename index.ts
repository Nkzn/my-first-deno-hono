import { Hono } from "https://deno.land/x/hono@v3.11.8/mod.ts";
import { serveStatic } from "https://deno.land/x/hono/middleware.ts";

const app = new Hono();

app.use("/static/*", serveStatic({ root: "./" }));
app.use("/favicon.ico", serveStatic({ path: "./favicon.ico" }));
app.get("/", (c) => c.text("You can access: /static/hello.txt"));
app.get("*", serveStatic({ path: "./static/fallback.txt" }));

Deno.serve(app.fetch);
