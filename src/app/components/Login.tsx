"use client";

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import '../assets/styles/Login.css'; // Import login styles
import '../assets/styles/Sidebar.css';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Logging in with:", { email, password });
    router.push("/home"); // Redirect after login
  };

  return (
    <div className="login-container">
      {/* <h2>Login to Tally</h2> */}
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
