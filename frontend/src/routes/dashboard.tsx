import { createFileRoute, Outlet, useNavigate } from "@tanstack/react-router";
import { useAuth } from "../hooks/useAuth";
import { useEffect } from "react";
export const Route = createFileRoute("/dashboard")({
  component: RouteComponent,
});

function RouteComponent() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!currentUser) {
      navigate({ to: "/auth" });
    }
  }, [currentUser, navigate]);
  useEffect(() => {}, []);
  return (
    <div>
      <Outlet />
    </div>
  );
}
