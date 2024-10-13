import { useState } from "react";
import { Button, Input } from "@milk";
import { Link } from "@remix-run/react";

import { supabaseClient } from "@integrations/supabase";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    console.log("Logging in...");
    const { data, error } = await supabaseClient.auth.signUp({
      email: "example@email.com",
      password: "example-password",
    });
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div className="p-8 bg-background rounded-md">
      <form className="w-full flex flex-col gap-4 mb-4">
        <Input
          type="email"
          value={email}
          placeholder="Email"
          onChange={handleEmailChange}
        />
        <Input
          type="password"
          value={password}
          placeholder="Password"
          onChange={handlePasswordChange}
        />
      </form>
      <div className="flex gap-4">
        <Button className="flex-1" variant="secondary">
          Create account
        </Button>
        <Button className="flex-1" onClick={handleLogin}>
          Sign in
        </Button>
      </div>
      <div className="flex w-full justify-end">
        <Button asChild variant="link">
          <Link to="/dashboard">Forgot password?</Link>
        </Button>
      </div>
    </div>
  );
};

export { LoginForm };
