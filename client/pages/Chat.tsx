import { useState } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Message = { id: number; user: string; text: string; time: string };

const initial: Message[] = [
  { id: 1, user: "Alex", text: "Hey team, ready for the session?", time: "10:24" },
  { id: 2, user: "Jamie", text: "Yep! I brought flashcards.", time: "10:25" },
  { id: 3, user: "Taylor", text: "Let’s start with chapter 5.", time: "10:26" },
];

export const Chat = () => {
  const [messages, setMessages] = useState<Message[]>(initial);
  const [value, setValue] = useState("");

  const send = () => {
    if (!value.trim()) return;
    setMessages((m) => [...m, { id: Date.now(), user: "You", text: value.trim(), time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
    setValue("");
  };

  return (
    <section className="mx-auto max-w-2xl">
      <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4">Group chat</h1>
      <div className="rounded-lg border bg-card overflow-hidden flex flex-col h-[60vh]">
        <div className="flex-1 space-y-4 p-4 overflow-y-auto">
          {messages.map((m) => (
            <div key={m.id} className="flex items-start gap-3">
              <Avatar>
                <AvatarFallback className="text-xs">
                  {m.user
                    .split(" ")
                    .map((s) => s[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="font-medium text-foreground">{m.user}</span>
                  <span>•</span>
                  <span>{m.time}</span>
                </div>
                <p className="mt-1 text-sm">{m.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="border-t p-3 flex gap-2">
          <Input
            placeholder="Write a message"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send()}
          />
          <Button onClick={send}>Send</Button>
        </div>
      </div>
    </section>
  );
};

export default Chat;
