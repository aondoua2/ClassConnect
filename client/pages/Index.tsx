import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Index() {
  return (
    <section className="relative overflow-hidden">

      <div className="mx-auto max-w-3xl text-center">
        <p className="inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1 text-xs text-muted-foreground">
          Mobile-first • Real-time study groups
        </p>
        <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight">
          Learn faster with the right study group
        </h1>
        <p className="mt-3 text-muted-foreground">
          Match with classmates, create focused study sessions, and chat in one beautiful app.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button asChild className="w-full sm:w-auto">
            <Link to="/create-group">Start a group</Link>
          </Button>
          <Button asChild variant="secondary" className="w-full sm:w-auto">
            <Link to="/sessions">Join a session</Link>
          </Button>
        </div>
        <div className="mt-10 grid gap-6">
          <div className="overflow-hidden rounded-xl border bg-card shadow-sm">
            <img src="https://images.pexels.com/photos/8199708/pexels-photo-8199708.jpeg" alt="College students studying together in a university library" className="h-48 w-full object-cover sm:h-64" />
          </div>
          <div className="rounded-xl border bg-card p-4 sm:p-6 text-left shadow-sm">
            <h2 className="text-lg font-semibold">Why ClassConnect?</h2>
            <ul className="mt-3 grid gap-3 sm:grid-cols-3">
              <li className="rounded-lg bg-secondary p-3">
                <p className="font-medium">Smart onboarding</p>
                <p className="text-xs text-muted-foreground">Tailored to your subjects and schedule</p>
              </li>
              <li className="rounded-lg bg-secondary p-3">
                <p className="font-medium">Find classmates</p>
                <p className="text-xs text-muted-foreground">Connect with peers in seconds</p>
              </li>
              <li className="rounded-lg bg-secondary p-3">
                <p className="font-medium">Chat built-in</p>
                <p className="text-xs text-muted-foreground">Keep the momentum with quick messages</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
