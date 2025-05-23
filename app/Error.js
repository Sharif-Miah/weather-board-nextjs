// app/error.js
'use client';

export default function Error({ error, reset }) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <p>Error digest: {error.digest}</p>
      <button onClick={reset}>Try again</button>
    </div>
  );
}
