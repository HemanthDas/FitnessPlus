import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useAuth } from "../hooks/useAuth";
import { useEffect } from "react";
export const Route = createFileRoute("/dashboard")({
  component: RouteComponent,
});

function RouteComponent() {
  const { logout, currentUser } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!currentUser) {
      navigate({ to: "/auth" });
    }
  }, [currentUser, navigate]);

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
