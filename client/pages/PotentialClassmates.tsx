import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const classmates = Array.from({ length: 8 }).map((_, i) => ({
  id: i + 1,
  name: ["Jamie", "Taylor", "Jordan", "Riley", "Morgan", "Casey", "Sam", "Alex"][i] + " "+ ["Lee","Patel","Nguyen","Garcia","Kim","Johnson","Smith","Davis"][i],
  avatar: `https://i.pravatar.cc/150?img=${i + 10}`,
}));

export const PotentialClassmates = () => {
  return (
    <section className="mx-auto max-w-2xl">
      <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4">Suggested classmates</h1>
      <ul className="divide-y rounded-md border bg-card">
        {classmates.map((u) => (
          <li key={u.id} className="flex items-center justify-between gap-3 p-4">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src={u.avatar} alt={u.name} />
                <AvatarFallback>{u.name.slice(0, 2)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium leading-tight">{u.name}</p>
                <p className="text-xs text-muted-foreground">Tap to connect</p>
              </div>
            </div>
            <Button size="sm">Connect</Button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PotentialClassmates;
