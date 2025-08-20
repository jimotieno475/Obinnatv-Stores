import { useEffect, useState } from 'react';

const hearts = ['💖', '💕', '💞', '💘', '❤️'];

export default function LoveFloat() {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBubbles((prev) => [
        ...prev,
        {
          id: Math.random(),
          emoji: hearts[Math.floor(Math.random() * hearts.length)],
          side: Math.random() > 0.5 ? 'left' : 'right',
          bottom: Math.random() * 30 + 10,
          size: Math.random() * 16 + 20,
          delay: Math.random() * 0.5,
        },
      ]);
    }, 500); // float one every 0.5s

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 w-full h-full pointer-events-none z-10">
      {bubbles.map((b) => (
        <div
          key={b.id}
          className="absolute"
          style={{
            left: b.side === 'left' ? '2%' : 'auto',
            right: b.side === 'right' ? '2%' : 'auto',
            bottom: `${b.bottom}px`,
            fontSize: `${b.size}px`,
            animation: `${b.side === 'left' ? 'floatUpLeft' : 'floatUpRight'} 5s linear ${b.delay}s forwards`,
          }}
        >
          {b.emoji}
        </div>
      ))}
    </div>
  );
}
