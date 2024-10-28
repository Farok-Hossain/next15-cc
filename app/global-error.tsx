"use client"; // Error boundaries must be Client Components

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return (
    // global-error must include html and body tags
    <html>
      <body>
        <h1>Global error</h1>
      </body>
    </html>
  );
}
