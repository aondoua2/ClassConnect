import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const Profile = () => {
  return (
    <section className="mx-auto max-w-2xl">
      <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4">Your profile</h1>
      <div className="rounded-lg border bg-card p-4 sm:p-6">
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src="https://i.pravatar.cc/150?img=5" alt="User" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <Button variant="secondary">Change photo</Button>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <label className="grid gap-2">
            <span className="text-sm font-medium">Name</span>
            <Input defaultValue="Alex Johnson" />
          </label>
          <label className="grid gap-2">
            <span className="text-sm font-medium">Email</span>
            <Input type="email" defaultValue="alex@example.com" />
          </label>
          <label className="sm:col-span-2 grid gap-2">
            <span className="text-sm font-medium">Bio</span>
            <Textarea placeholder="Tell others what you're studying and your goals" />
          </label>
        </div>
        <div className="mt-6 flex justify-end">
          <Button>Save changes</Button>
        </div>
      </div>
    </section>
  );
};

export default Profile;
