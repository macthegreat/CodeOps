
"use client";

import { useState } from "react";
import Link from "next/link";
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
    <div className="signin-page">
      <section className="signin-card">
        <Link href="/" className="signin-brand">
          <span className="site-brand-mark" aria-hidden="true">A</span>
          <span>Addis Eats</span>
        </Link>

        <div className="signin-heading">
          <span className="eyebrow">WELCOME BACK</span>
          <h1>Sign in to Addis Eats</h1>
          <p>Sign in to continue to your food ordering experience.</p>
        </div>

        <form onSubmit={handleSubmit} className="signin-form">
          <div className="form-field">
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>

          {error && (
            <p className="form-feedback form-feedback-error" role="alert">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="signin-submit"
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign in"}
            {!loading && <span aria-hidden="true">→</span>}
          </button>
        </form>

        <p className="signin-footer">
          Hungry? <Link href="/menu">Explore the menu</Link>
        </p>
      </section>
    </div>
  );
}
