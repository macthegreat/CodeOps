
"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";

export default function SignInPage() {
  const [email, setEmail] = useState("demo@addiseats.com");
  const [password, setPassword] = useState("DemoPass123!");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setLoading(true);

    const params = new URLSearchParams(window.location.search);
    const next = params.get("next");

    const destination =
      next && next.startsWith("/") && !next.startsWith("//")
        ? next
        : "/";

    try {
      await signIn("credentials", {
        email,
        password,
        redirectTo: destination,
      });
    } catch {
      setError("Sign-in failed. Please try again.");
      setLoading(false);
    }
  }

  return (
    <main>
      <h1>Sign in to Addis Eats</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>

        {error && <p role="alert">{error}</p>}

        <button type="submit" disabled={loading}>
          {loading ? "Signing in..." : "Sign in"}
        </button>
      </form>
    </main>
  );
}
