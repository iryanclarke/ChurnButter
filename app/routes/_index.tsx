import type { MetaFunction } from "@remix-run/node";
import { LoginForm } from "@shared";

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
        <LoginForm />
      </main>
    </div>
  );
}
