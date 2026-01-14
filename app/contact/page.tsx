import Link from 'next/link';

export default function Contact() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial' }}>
      <h1 style={{ color: '#2563eb' }}>Contact Us</h1>
      <h2>Sri Balaji School</h2>
      <p><strong>📍 Address:</strong> Vijayawada, Andhra Pradesh.</p>
      <p><strong>📞 Phone:</strong> 98765 43210</p>

      <Link href="/">
        <button style={{ 
          marginTop: '20px', 
          padding: '10px 20px', 
          backgroundColor: 'gray', 
          color: 'white', 
          border: 'none', 
          borderRadius: '5px',
          cursor: 'pointer' 
        }}>
          Go Back Home
        </button>
      </Link>
    </div>
  );
}