/** @jsx jsx */
import { FC } from "https://deno.land/x/hono@v3.11.9/middleware.ts";
import { jsx } from "https://deno.land/x/hono@v3.11.9/middleware.ts"

const Layout: FC = (props) => {
  return (
    <html>
      <body>{props.children}</body>
    </html>
  )
}

export const Top: FC<{ messages: string[] }> = (props: { messages: string[] }) => {
  return (
    <Layout>
      <h1>Hello Hono!</h1>
      <ul>
        {props.messages.map((message) => {
          return <li>{message}!!</li>
        })}
      </ul>
    </Layout>
  )
}