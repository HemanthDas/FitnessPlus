import { createFileRoute, Outlet, useNavigate } from "@tanstack/react-router";
import img from "../assets/images/authbg.jpg";
import { useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
export const Route = createFileRoute("/auth")({
  component: RouteComponent,
});

function RouteComponent() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (currentUser) {
      navigate({ to: "/dashboard" });
    }
  }, [currentUser, navigate]);
  return (
    <div
      className={`flex items-center justify-center min-h-screen w-full bg-center bg-no-repeat bg-origin-border bg-cover`}
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <Outlet />
    </div>
  );
}
