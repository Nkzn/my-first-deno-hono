/** @jsx jsx */
import { Hono } from "https://deno.land/x/hono@v3.11.9/mod.ts";
import { serveStatic } from "https://deno.land/x/hono@v3.11.9/middleware.ts";
import { jsx } from "https://deno.land/x/hono@v3.11.9/middleware.ts"
import { Top } from "./component.tsx";

const app = new Hono();

app.use("/static/*", serveStatic({ root: "./" }));
app.use("/favicon.ico", serveStatic({ path: "./favicon.ico" }));
app.get("/", (c) => c.text("You can access: /static/hello.txt"));
app.get("/jsx", (c) => {
  const messages = ['Good Morning', 'Good Evening', 'Good Night']
  return c.html(<Top messages={messages} />);
});
app.get("*", serveStatic({ path: "./static/fallback.txt" }));

Deno.serve(app.fetch);
