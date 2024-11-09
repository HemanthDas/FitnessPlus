import { createFileRoute, Link } from "@tanstack/react-router";
import { signUp } from "../../firebase/authentication";
import { useState } from "react";

export const Route = createFileRoute("/auth/signup")({
  component: RouteComponent,
});

function RouteComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const user = await signUp(email, password);
      console.log("User signed up:", user);
    } catch (error) {
      console.error("Error during sign-up:", error);
    }
  };

  return (
    <div className="shadow-white w-full max-w-sm p-8 space-y-6 rounded-lg shadow-lg bg-black bg-opacity-50 text-white backdrop-blur-md transform transition-all duration-500 hover:scale-105">
      <h1 className="text-3xl font-bold text-center text-white">Sign Up</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-white">
            Email:
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full px-4 py-2 mt-2 border border-gray-300 rounded-md shadow-sm focus:ring-white focus:border-white sm:text-sm text-black transition duration-300 ease-in-out transform hover:scale-105"
            />
          </label>
        </div>
        <div>
          <label className="block text-sm font-medium text-white">
            Password:
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full px-4 py-2 mt-2 border border-gray-300 rounded-md shadow-sm focus:ring-white focus:border-white sm:text-sm text-black transition duration-300 ease-in-out transform hover:scale-105"
            />
          </label>
        </div>
        <div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-medium text-black bg-white rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition duration-300 ease-in-out transform hover:scale-105"
          >
            Sign Up
          </button>
        </div>
        <div className="flex justify-between">
          <Link
            to="/auth"
            className="text-sm font-medium text-white hover:text-gray-300 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Login
          </Link>
          <Link
            to="/auth/forgot-password"
            className="text-sm font-medium text-white hover:text-gray-300 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Forgot Password
          </Link>
        </div>
      </form>
    </div>
  );
}
