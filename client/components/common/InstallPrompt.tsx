import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

type BeforeInstallPromptEvent = Event & { prompt: () => Promise<void>; userChoice?: Promise<{ outcome: "accepted" | "dismissed" }>; };

export default function InstallPrompt() {
  const [deferred, setDeferred] = useState<BeforeInstallPromptEvent | null>(null);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const onBeforeInstall = (e: Event) => {
      e.preventDefault();
      setDeferred(e as BeforeInstallPromptEvent);
      setHidden(false);
    };
    window.addEventListener("beforeinstallprompt", onBeforeInstall as any);
    return () => window.removeEventListener("beforeinstallprompt", onBeforeInstall as any);
  }, []);

  if (!deferred || hidden) return null;

  const install = async () => {
    try {
      await deferred.prompt();
    } finally {
      setHidden(true);
      setDeferred(null);
    }
  };

  return (
    <div className="fixed inset-x-2 bottom-20 z-50 rounded-xl border bg-background p-3 shadow-lg md:bottom-6 md:left-1/2 md:max-w-md md:-translate-x-1/2">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-medium">Install ClassConnect</p>
          <p className="text-xs text-muted-foreground">Add to your home screen for a native app experience.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button size="sm" variant="secondary" onClick={() => setHidden(true)}>Later</Button>
          <Button size="sm" onClick={install}>Install</Button>
        </div>
      </div>
    </div>
  );
}
