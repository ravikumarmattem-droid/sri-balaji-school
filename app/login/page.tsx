"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // మన సీక్రెట్ పాస్‌వర్డ్: school123
    if (username === "admin" && password === "school123") {
      setIsLoggedIn(true);
      alert("Login Success! Welcome Teacher.");
    } else {
      alert("Wrong Password! (Hint: school123)");
    }
  };

  if (isLoggedIn) {
    return (
      <div style={{ textAlign: 'center', fontFamily: 'Arial', padding: '50px' }}>
        <h1 style={{ color: 'green' }}>Welcome back, Teacher! 👩‍🏫</h1>
        <h2>Student List</h2>
        <table style={{ margin: '20px auto', borderCollapse: 'collapse', width: '50%' }}>
          <thead>
            <tr style={{ backgroundColor: '#ddd' }}>
              <th style={{ border: '1px solid black', padding: '10px' }}>ID</th>
              <th style={{ border: '1px solid black', padding: '10px' }}>Name</th>
              <th style={{ border: '1px solid black', padding: '10px' }}>Class</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid black', padding: '10px' }}>101</td>
              <td style={{ border: '1px solid black', padding: '10px' }}>Raju</td>
              <td style={{ border: '1px solid black', padding: '10px' }}>10th</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid black', padding: '10px' }}>102</td>
              <td style={{ border: '1px solid black', padding: '10px' }}>Sita</td>
              <td style={{ border: '1px solid black', padding: '10px' }}>9th</td>
            </tr>
          </tbody>
        </table>
        <button onClick={() => setIsLoggedIn(false)} style={{ padding: '10px 20px', backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Logout
        </button>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: '#f0f9ff', fontFamily: 'Arial' }}>
      <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '15px', boxShadow: '0px 10px 25px rgba(0,0,0,0.1)', textAlign: 'center', width: '300px' }}>
        <h1 style={{ color: '#0369a1' }}>Teacher Login</h1>
        <input type="text" placeholder="Username (admin)" value={username} onChange={(e) => setUsername(e.target.value)} style={{ display: 'block', width: '100%', padding: '10px', margin: '10px 0', border: '1px solid #ccc', borderRadius: '5px' }} />
        <input type="password" placeholder="Password (school123)" value={password} onChange={(e) => setPassword(e.target.value)} style={{ display: 'block', width: '100%', padding: '10px', margin: '10px 0', border: '1px solid #ccc', borderRadius: '5px' }} />
        <button onClick={handleLogin} style={{ width: '100%', padding: '12px', backgroundColor: '#0369a1', color: 'white', border: 'none', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer', marginTop: '10px' }}>Login 🔐</button>
        <Link href="/"><p style={{ marginTop: '20px', color: 'gray', cursor: 'pointer', fontSize: '14px' }}>← Go Back Home</p></Link>
      </div>
    </div>
  );
}