import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Onboarding = () => {
  const [preferences, setPreferences] = useState<string[]>([]);
  const tags = ["Math", "Biology", "Chemistry", "History", "CS", "Languages", "Physics", "Art"];

  const toggleTag = (tag: string) => {
    setPreferences((p) => (p.includes(tag) ? p.filter((t) => t !== tag) : [...p, tag]));
  };

  return (
    <section className="mx-auto max-w-xl">
      <div className="mb-6 text-center">
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Create your study profile</h1>
        <p className="mt-2 text-muted-foreground">Tell us about you so we can tailor better study groups.</p>
      </div>

      <div className="grid gap-4">
        <label className="grid gap-2">
          <span className="text-sm font-medium">Name</span>
          <Input placeholder="Alex Johnson" aria-label="Name" />
        </label>
        <label className="grid gap-2">
          <span className="text-sm font-medium">Email</span>
          <Input type="email" placeholder="alex@example.com" aria-label="Email" />
        </label>
        <div className="grid gap-2">
          <span className="text-sm font-medium">Study preferences</span>
          <div className="flex flex-wrap gap-2">
            {tags.map((t) => (
              <button
                type="button"
                key={t}
                onClick={() => toggleTag(t)}
                className={cn(
                  "px-3 py-1.5 rounded-full border text-sm transition-colors",
                  preferences.includes(t)
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-background hover:bg-accent border-input",
                )}
                aria-pressed={preferences.includes(t)}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
        <Button className="mt-2 w-full">Continue</Button>
      </div>
    </section>
  );
};

export default Onboarding;
