import { createRootRoute, Outlet } from "@tanstack/react-router";
export const Route = createRootRoute({
  component: () => {
    return (
      <div className="bg-[#ECECEC] w-full min-h-screen">
        <Outlet />
      </div>
    );
  },
});
