---
title: Next.js
--- 

# Next.js Basics

Next.js is a popular React framework built by Vercel that offers features like server-side rendering and static site generation. In this cheat sheet, we'll explore key topics to help you get started with Next.js, including setting up a project, routing, styling, server actions, and more. Let's dive in!

## Creating a new Next.js Project

Starting a new Next.js project is simple with the `create-next-app` command.

```bash
npx create-next-app@latest nextjs-project
cd nextjs-project
```

This command bootstraps a new Next.js application in a directory called `nextjs-project`. You can replace `nextjs-project` with the name of your preference. After the command runs, `cd` into the directory to start working on your project.

## Styling

Next.js supports various styling strategies, but we'll focus on CSS Modules, a CSS file in which all class names and animation names are scoped locally by default. Here's a code example:

```css
/* styles/Home.module.css */
.container {
  margin: 0 auto;
  padding: 2rem;
}
```

```jsx
// pages/index.js
import styles from '../styles/Home.module.css';

export default function Home() {
  return <div className={styles.container}>Welcome to Next.js!</div>
}
```

This demonstrates how to create a CSS Module and use it in a React component. Note the use of `<code>.module.css</code>` extension, which enables CSS Modules.

## Links

In Next.js, you can use the `<code>Link</code>` component from the `<code>next/link</code>` package to navigate between pages.

```jsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <Link href="/"><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
    </nav>
  )
}
```

In this snippet, we have a navigation bar with links to the Home and About pages. When clicked, the `Link` component enables client-side navigation between these pages.

## Routing

Next.js uses a file-based routing system. Any file inside the `<code>pages</code>` directory is a route.

```jsx
// pages/about.js
export default function About() {
  return <h1>About Us</h1>
}
```

The code above creates a new route `/about`. By visiting yourdomain.com/about, the About function will be rendered.

## Custom Document (_document.js)

Custom Document is commonly used to augment your application's `<html>` and `<body>` tags. 

```jsx
// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
```

This is an example of a custom `Document`. Here, we've added a language attribute to the `<html>` tag. Note that `<Main />` and `<NextScript />` are essential and should be included in `Document`.

## Custom App (_app.js)

The Custom App in Next.js allows you to initialize pages with a layout, keep state when navigating pages, and add custom error handling.

```jsx
// pages/_app.js
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
```

In the above example, the `MyApp` component

 is importing a global stylesheet. It also receives a `Component` and `pageProps` and renders the `Component` with the `pageProps`.

## Dynamic Routes

Next.js supports dynamic routes, allowing you to capture segments of the URL as parameters.

```jsx
// pages/posts/[id].js
import { useRouter } from 'next/router'

export default function Post() {
  const router = useRouter()

  return <h1>Post: {router.query.id}</h1>
}
```

In the above example, `[id].js` is a dynamic route that matches `/posts/a`, `/posts/b`, etc. The page receives the matched segments as a `query` parameter, accessible with the `useRouter` hook.


## Server Actions

Server Actions are a new feature in Next.js introduced to streamline data fetching operations. These actions are serverless functions you write directly in a special `server` directory, allowing Next.js to automatically make them available as API routes. They are essentially an evolution of the API routes previously defined in the `pages/api` directory. 

Server Actions let you easily perform server-side data fetching, compute derived data, manage database operations, perform authorization, and much more. They also benefit from fast refresh and local development with hot reloading. 

Here is a basic example of a Server Action:

```jsx
// server/hello.js
export default function helloHandler(req, res) {
  res.send(`Hello ${req.query.name}!`);
}
```

In this code, `server/hello.js` defines a server action. It exports a default function that will handle requests made to `/api/hello?name=John`, and respond with the message `Hello John!`.

Remember, the logic in server actions runs server-side, which means it won't be accessible to the client nor visible in your JavaScript bundle. This makes it a perfect place to perform secure operations, like interacting with a database or third-party API with secret tokens. 

For complex operations requiring async processing, `async` and `await` keywords can be used. 

```jsx
// server/getUser.js
import { getUserFromDatabase } from '../lib/db';

export default async function getUserHandler(req, res) {
  const user = await getUserFromDatabase(req.query.id);
  res.json(user);
}
```

In the example above, the server action `getUserHandler` retrieves user data from a hypothetical database. The function is marked `async` because the `getUserFromDatabase` function returns a promise. 

For more complex server-side data fetching scenarios, consider exploring the [getServerSideProps](https://nextjs.org/docs/basic-features/data-fetching#getserverprops-server-side-rendering) and [getStaticProps](https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation) features of Next.js.

## Prefetching

Next.js automatically prefetches the code for linked pages in the background. It makes the application incredibly fast and improves user experience.

```jsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <Link href="/"><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
    </nav>
  )
}
```

In this example, when the `Navbar` component is rendered, Next.js automatically prefetches the Home and About pages, making transitions between these pages extremely fast.

With these basics, you'll have a solid foundation to continue exploring Next.js and its vast features. You can find more information about [components](/react/components), [JSX](/react/JSX), [useEffect](/react/use-effect), and [useState](/react/use-state) on our React cheat sheet. Happy coding!
