import Head from "next/head";

function Meta() {
  const title =
    "Reactra - A React framework for building scalable and maintainable UI apps";
  const description = `Reactra is an opinionated open-source UI framework that helps you build React apps with speed and using the best practices. It's a great choice for React developers who want to build performant and accessible web apps.`;

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <meta name="Author" content="Luteya Coulston Namasa" key="author" />
      <meta name="description" content={description} />
      <title>{title}</title>
      <link sizes="180x180" href="/static/apple-touch-icon.png" />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/static/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/static/favicon-16x16.png"
      />
      <link rel="manifest" href="/static/site.webmanifest" />
    </Head>
  );
}

export { Meta };
