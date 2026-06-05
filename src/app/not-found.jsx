import Link from 'next/link';

export const metadata = {
  title: 'Page Not Found',
};

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0a0a0a',
        color: '#fafafa',
        fontFamily: 'var(--font-geist-sans), system-ui, sans-serif',
        padding: '2rem',
        textAlign: 'center',
      }}
    >
      <h1
        style={{
          fontSize: 'clamp(6rem, 15vw, 10rem)',
          fontWeight: 800,
          lineHeight: 1,
          margin: 0,
          background: 'linear-gradient(135deg, #dc2626, #ef4444)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        404
      </h1>

      <h2
        style={{
          fontSize: 'clamp(1.5rem, 4vw, 2rem)',
          fontWeight: 600,
          margin: '0.5rem 0 1rem',
          color: '#e5e5e5',
        }}
      >
        Page Not Found
      </h2>

      <p
        style={{
          fontSize: '1.125rem',
          color: '#a3a3a3',
          maxWidth: '28rem',
          margin: '0 0 2.5rem',
          lineHeight: 1.6,
        }}
      >
        Sorry, we couldn&apos;t find the page you&apos;re looking for.
      </p>

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link
          href="/"
          style={{
            display: 'inline-block',
            padding: '0.875rem 2rem',
            backgroundColor: '#dc2626',
            color: '#ffffff',
            fontWeight: 600,
            fontSize: '1rem',
            borderRadius: '0.5rem',
            textDecoration: 'none',
            transition: 'background-color 0.2s',
          }}
        >
          Back to Home
        </Link>

        <Link
          href="/services"
          style={{
            display: 'inline-block',
            padding: '0.875rem 2rem',
            border: '1px solid #404040',
            color: '#d4d4d4',
            fontWeight: 600,
            fontSize: '1rem',
            borderRadius: '0.5rem',
            textDecoration: 'none',
            backgroundColor: 'transparent',
            transition: 'border-color 0.2s',
          }}
        >
          View Our Services
        </Link>
      </div>
    </div>
  );
}
