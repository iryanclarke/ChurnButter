import type { MetaFunction } from "@remix-run/node";
import { Button, Input } from "@milk";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="h-screen w-screen bg-stone-100">
      <nav className="flex items-center gap-4 rounded-3xl p-2 dark:border-gray-700">
        <img
          src="/churnbutter.png"
          alt="ChurnButter"
          className="w-8 border rounded"
        />
        <header className="flex flex-col items-center gap-9">
          <h1 className="leading text-xl font-bold text-gray-800 dark:text-gray-100">
            ChurnButter
          </h1>
        </header>
      </nav>
      <main className="w-full h-full flex items-center justify-center">
        <div className="p-8 bg-background rounded-md">
          <form className="w-full flex flex-col gap-4">
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
          </form>
          <div className="flex gap-4">
            <Button className="flex-1" variant="secondary">
              Create account
            </Button>
            <Button className="flex-1">Sign in</Button>
          </div>
          <div className="flex w-full justify-end">
            <Button asChild variant="link">
              <Link to="/dashboard">Forgot password?</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
