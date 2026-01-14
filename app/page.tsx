"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [studentName, setStudentName] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [mobile, setMobile] = useState('');

  const handleSubmit = () => {
    if (!studentName || !fatherName || !mobile) {
      alert("దయచేసి అన్ని వివరాలు నింపండి! ⚠️");
      return;
    }
    const newStudent = { id: Date.now(), name: studentName, father: fatherName, mobile: mobile };
    const existingData = localStorage.getItem("students");
    let list = existingData ? JSON.parse(existingData) : [];
    list.push(newStudent);
    localStorage.setItem("students", JSON.stringify(list));
    alert("Success! ✅ " + studentName + " వివరాలు సేవ్ అయ్యాయి.");
    setStudentName(''); setFatherName(''); setMobile('');
  };

  return (
    <div style={{ 
      textAlign: 'center', 
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #e0f2fe 0%, #f0f9ff 100%)', 
      padding: '20px' 
    }}>
      
      {/* టాప్ బటన్స్ */}
      <div style={{ position: 'absolute', top: '20px', right: '20px', display: 'flex', gap: '15px' }}>
        <Link href="/login">
          <button style={{ padding: '12px 20px', backgroundColor: '#f97316', color: 'white', border: 'none', borderRadius: '30px', cursor: 'pointer', fontWeight: 'bold', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>Teacher Login 🔐</button>
        </Link>
        <Link href="/contact">
          <button style={{ padding: '12px 20px', backgroundColor: '#0ea5e9', color: 'white', border: 'none', borderRadius: '30px', cursor: 'pointer', fontWeight: 'bold', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>Contact Us 📞</button>
        </Link>
      </div>

      <div style={{ marginTop: '30px' }}>
        {/* లోగో సెక్షన్ */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
          <img src="/logo.jpg" alt="School Logo" style={{ width: '130px', height: '130px', borderRadius: '50%', border: '5px solid white', boxShadow: '0 10px 20px rgba(0,0,0,0.15)' }} />
        </div>
        
        <h1 style={{ color: '#0369a1', fontSize: '38px', margin: '10px 0', fontWeight: '800' }}>Sri Balaji School</h1>
        <p style={{ color: '#64748b', fontSize: '18px', marginBottom: '30px' }}>Shape Your Future with Excellence</p>

        {/* అడ్మిషన్ ఫామ్ కార్డ్ */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          gap: '20px', 
          backgroundColor: 'white', 
          padding: '40px', 
          borderRadius: '25px', 
          width: '380px', 
          margin: '0 auto', 
          boxShadow: '0px 20px 40px rgba(0,0,0,0.1)' 
        }}>
          <h3 style={{ margin: 0, color: '#334155' }}>Admission Form 2026</h3>
          <input type="text" placeholder="Student Name" value={studentName} onChange={(e) => setStudentName(e.target.value)} style={{ padding: '14px', width: '100%', border: '2px solid #f1f5f9', borderRadius: '12px', outline: 'none' }} />
          <input type="text" placeholder="Father Name" value={fatherName} onChange={(e) => setFatherName(e.target.value)} style={{ padding: '14px', width: '100%', border: '2px solid #f1f5f9', borderRadius: '12px', outline: 'none' }} />
          <input type="text" placeholder="Mobile Number" value={mobile} onChange={(e) => setMobile(e.target.value)} style={{ padding: '14px', width: '100%', border: '2px solid #f1f5f9', borderRadius: '12px', outline: 'none' }} />
          <button onClick={handleSubmit} style={{ marginTop: '10px', padding: '14px', backgroundColor: '#0284c7', color: 'white', border: 'none', borderRadius: '12px', cursor: 'pointer', fontWeight: 'bold', width: '100%', boxShadow: '0 5px 15px rgba(2, 132, 199, 0.3)' }}>Submit Admission 🚀</button>
        </div>

        {/* Payment & Donation బటన్స్ - ఇవి ఇప్పుడు ఖచ్చితంగా కనిపిస్తాయి */}
        <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'center', gap: '25px' }}>
<a href="/scan.jpg" target="_blank" style={{ textDecoration: 'none' }}>
  <button style={{ padding: '15px 30px', borderRadius: '50px', border: 'none', backgroundColor: '#10B981', color: 'white', fontSize: '18px', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 10px 20px rgba(16, 185, 129, 0.4)' }}>
    Online Payment 💳
  </button>
</a>
          <button onClick={() => alert("Donation Page coming soon! 🎁")} style={{ padding: '15px 30px', backgroundColor: '#8b5cf6', color: 'white', border: 'none', borderRadius: '15px', cursor: 'pointer', fontWeight: 'bold', boxShadow: '0 10px 20px rgba(139, 92, 246, 0.2)' }}>School Donation 🎁</button>
        </div>
      </div>

      <footer style={{ marginTop: '60px', color: '#94a3b8', fontSize: '14px' }}>
        © 2026 Sri Balaji School | Educational Society | All rights reserved.
      </footer>
    </div>
  );
}