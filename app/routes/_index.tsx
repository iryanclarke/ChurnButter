import type { MetaFunction } from "@remix-run/node";
import { Button, Input } from "@milk";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-16">
        <header className="flex flex-col items-center gap-9">
          <h1 className="leading text-4xl font-bold text-gray-800 dark:text-gray-100">
            ChurnButter
          </h1>
        </header>
        <nav className="flex flex-col items-center justify-center gap-4 rounded-3xl border border-gray-200 p-6 dark:border-gray-700">
          <form>
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
          </form>
          <p className="leading-6 text-gray-700 dark:text-gray-200">
            What&apos;s next?
          </p>
          <Button>Meep</Button>
        </nav>
      </div>
    </div>
  );
}
