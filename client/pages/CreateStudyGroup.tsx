import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const CreateStudyGroup = () => {
  return (
    <section className="mx-auto max-w-xl">
      <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4">Create a study group</h1>
      <div className="grid gap-4">
        <label className="grid gap-2">
          <span className="text-sm font-medium">Group name</span>
          <Input placeholder="Calculus Wizards" />
        </label>
        <label className="grid gap-2">
          <span className="text-sm font-medium">Description</span>
          <Textarea placeholder="What will this group focus on?" />
        </label>
        <Button className="w-full">Create Group</Button>
      </div>
    </section>
  );
};

export default CreateStudyGroup;
