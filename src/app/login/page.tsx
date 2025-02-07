"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import "../assets/styles/Login.css"; // Adjust import based on your structure

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Logging in with:", { email, password });

    // Example: Redirect user to home after login
    router.push("/home");
  };

  return (
    <div className="login-container">
      <h2>Login to <span style={{ color: "#444EAA", fontWeight: "bold" }}>Tally</span></h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />

        <label>Password:</label>
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
