import type { MetaFunction } from "@remix-run/node";
import { Button, Input } from "@milk";
import { SideNav } from "@shared";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Dashboard() {
  return (
    <div className="h-screen w-screen flex">
      <SideNav />
      <main className="w-full h-full flex items-center justify-center">
        <div>
          <p>Smorp</p>
        </div>
      </main>
    </div>
  );
}
