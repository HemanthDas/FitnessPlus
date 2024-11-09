import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { login } from "../../firebase/authentication";

export const Route = createFileRoute("/auth/")({
  component: RouteComponent,
});
function RouteComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      const result = await login(email, password);
      if (result && result.success) {
        navigate({ to: "/dashboard" });
      } else {
        setError("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError("An unexpected error occurred. Please try again later.");
    }
  };

  return (
    <div className="shadow-white w-full max-w-sm p-8 space-y-6 rounded-lg shadow-lg bg-black bg-opacity-50 text-white backdrop-blur-md transition-all duration-500">
      <h1 className="text-3xl font-bold text-center text-white">Login</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {error && (
          <div className="text-red-500 text-sm text-center">{error}</div>
        )}
        <div>
          <label className="block text-sm font-medium text-white">
            Email:
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full px-4 py-2 mt-2 border border-gray-300 rounded-md shadow-sm focus:ring-white focus:border-white sm:text-sm text-black transition duration-300 ease-in-out"
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
              className="block w-full px-4 py-2 mt-2 border border-gray-300 rounded-md shadow-sm focus:ring-white focus:border-white sm:text-sm text-black transition duration-300 ease-in-out"
            />
          </label>
        </div>
        <div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-medium text-black bg-white rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition duration-300 ease-in-out"
          >
            Login
          </button>
        </div>
        <div className="flex justify-between">
          <Link
            to="/auth/signup"
            className="text-sm font-medium text-white hover:text-gray-300 transition duration-300 ease-in-out"
          >
            Sign-up
          </Link>
          <Link
            to="/auth/forgot-password"
            className="text-sm font-medium text-white hover:text-gray-300 transition duration-300 ease-in-out"
          >
            Forgot Password
          </Link>
        </div>
      </form>
    </div>
  );
}
