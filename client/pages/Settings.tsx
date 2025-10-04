import { Switch } from "@/components/ui/switch";

export const Settings = () => {
  return (
    <section className="mx-auto max-w-xl">
      <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4">Settings</h1>
      <div className="rounded-lg border bg-card divide-y">
        <label className="flex items-center justify-between p-4">
          <div>
            <p className="font-medium">Push notifications</p>
            <p className="text-xs text-muted-foreground">Get notified about session updates</p>
          </div>
          <Switch defaultChecked aria-label="Toggle notifications" />
        </label>
        <label className="flex items-center justify-between p-4">
          <div>
            <p className="font-medium">Privacy</p>
            <p className="text-xs text-muted-foreground">Hide profile from public search</p>
          </div>
          <Switch aria-label="Toggle privacy" />
        </label>
        <label className="flex items-center justify-between p-4">
          <div>
            <p className="font-medium">Theme</p>
            <p className="text-xs text-muted-foreground">Use device appearance</p>
          </div>
          <Switch defaultChecked aria-label="Toggle theme" />
        </label>
      </div>
    </section>
  );
};

export default Settings;
