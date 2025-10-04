import { NavBar } from "./NavBar";
import { Outlet } from "react-router-dom";
import InstallPrompt from "./InstallPrompt";

export default function Layout() {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <main className="mx-auto w-full max-w-6xl px-4 sm:px-6 py-6 pb-24" style={{ paddingBottom: "calc(env(safe-area-inset-bottom) + 6rem)" }}>
        <Outlet />
      </main>
      <InstallPrompt />
      <footer className="border-t bg-background/70 hidden md:block">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} ClassConnect. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
