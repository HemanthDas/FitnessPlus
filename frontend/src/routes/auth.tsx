import { createFileRoute, Outlet } from "@tanstack/react-router";
import img from "../assets/images/authbg.jpg";
export const Route = createFileRoute("/auth")({
  component: RouteComponent,
});

function RouteComponent() {
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
