"use client";

export default function Error({ error, reset }: any) {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h2>Something went wrong</h2>

      <button onClick={() => reset()}>Try Again</button>
    </div>
  );
}
