import Link from "next/link";

export default function NotFound() {
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
      <h1>404</h1>
      <p>Page Not Found</p>

      <Link href="/">Go Home</Link>
    </div>
  );
}
