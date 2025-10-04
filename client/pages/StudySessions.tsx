import { Button } from "@/components/ui/button";

const sessions = [
  { id: 1, title: "Algebra II Review", time: "Today 3:00 PM", status: "Active" },
  { id: 2, title: "Biology Lab Prep", time: "Tomorrow 10:00 AM", status: "Upcoming" },
  { id: 3, title: "World History Quiz", time: "Fri 5:30 PM", status: "Upcoming" },
];

export const StudySessions = () => {
  return (
    <section className="mx-auto max-w-2xl">
      <div className="mb-4 flex items-end justify-between gap-2">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Study sessions</h1>
          <p className="text-muted-foreground">Join active or plan upcoming sessions.</p>
        </div>
        <Button>New Session</Button>
      </div>
      <div className="grid gap-3">
        {sessions.map((s) => (
          <div key={s.id} className="rounded-lg border bg-card p-4 sm:p-5 flex items-center justify-between">
            <div>
              <p className="font-medium">{s.title}</p>
              <p className="text-xs text-muted-foreground">{s.time} • {s.status}</p>
            </div>
            <Button variant={s.status === "Active" ? "default" : "secondary"}>
              {s.status === "Active" ? "Join now" : "Remind me"}
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StudySessions;
