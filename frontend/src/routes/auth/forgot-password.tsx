import { createFileRoute, Link } from "@tanstack/react-router";
import React, { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

export const Route = createFileRoute("/auth/forgot-password")({
  component: RouteComponent,
});

function RouteComponent() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    setError("");

    const auth = getAuth();
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset email sent! Please check your inbox.");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || "Something went wrong. Please try again later.");
      } else {
        setError("Something went wrong. Please try again later.");
      }
    }
  };

  return (
    <div className="shadow-white w-full max-w-sm p-8 space-y-6 rounded-lg shadow-lg bg-black bg-opacity-50 text-white backdrop-blur-md transition-all duration-500">
      <h2 className="text-3xl font-bold text-center text-white">
        Forgot Password?
      </h2>
      {message && <p className="text-green-600 mb-4">{message}</p>}
      {error && <p className="text-red-600 mb-4">{error}</p>}
      <form onSubmit={handlePasswordReset} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-white">
            Email:
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full px-4 py-2 mt-2 border border-gray-300 rounded-md shadow-sm focus:ring-white focus:border-white sm:text-sm text-black transition duration-300 ease-in-out"
              required
            />
          </label>
        </div>
        <div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-medium text-black bg-white rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition duration-300 ease-in-out"
          >
            Send Reset Link
          </button>
        </div>
      </form>
      <p className="mt-4 text-center text-white">
        Remembered your password?{" "}
        <Link to="/auth" className="text-blue-600 hover:underline">
          Login here
        </Link>
      </p>
    </div>
  );
}
