import { Link, NavLink, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Moon, Sun, Users, Home, MessageSquare, Calendar, Settings as SettingsIcon, UserCircle2 } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { to: "/", label: "Home", icon: Home },
  { to: "/onboarding", label: "Onboarding", icon: Users },
  { to: "/classmates", label: "Classmates", icon: Users },
  { to: "/sessions", label: "Sessions", icon: Calendar },
  { to: "/chat", label: "Chat", icon: MessageSquare },
  { to: "/settings", label: "Settings", icon: SettingsIcon },
  { to: "/profile", label: "Profile", icon: UserCircle2 },
];

export function NavBar() {
  const location = useLocation();
  const [dark, setDark] = useState<boolean>(() =>
    typeof document !== "undefined" ? document.documentElement.classList.contains("dark") : false,
  );

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <header className="hidden md:block sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-14 items-center justify-between px-4 sm:px-6">
        <Link to="/" className="inline-flex items-center gap-2">
          <div className="h-7 w-7 rounded-md bg-gradient-to-br from-primary to-accent" />
          <span className="font-bold text-lg tracking-tight">ClassConnect</span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  isActive || location.pathname === to
                    ? "text-primary bg-secondary"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent",
                )
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button
            variant="secondary"
            size="icon"
            aria-label="Toggle theme"
            onClick={() => setDark((d) => !d)}
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
        </div>
      </div>
      {/* Mobile bottom nav */}
      <nav className="md:hidden border-t bg-background">
        <ul className="grid grid-cols-7">
          {links.map(({ to, label, icon: Icon }) => {
            const active = location.pathname === to;
            return (
              <li key={to} className="flex">
                <Link
                  to={to}
                  className={cn(
                    "flex flex-1 flex-col items-center justify-center gap-1 py-2 text-xs",
                    active ? "text-primary" : "text-muted-foreground",
                  )}
                >
                  <Icon className="h-5 w-5" />
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
