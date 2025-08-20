import { useEffect, useState } from 'react';

const colors = ['text-red-400', 'text-pink-400', 'text-purple-500'];
const flowers = ['🌸', '🌺', '💮', '🌼'];

export default function FlowerDrop() {
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPetals((prev) => [
        ...prev,
        {
          id: Math.random(),
          flower: flowers[Math.floor(Math.random() * flowers.length)],
          color: colors[Math.floor(Math.random() * colors.length)],
          left: `${Math.random() * 100}%`,
          duration: Math.random() * 5 + 5, // 5–10s
          size: Math.random() * 20 + 20, // 20–40px
        },
      ]);
    }, 300); // drop one every 300ms

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pointer-events-none fixed top-0 left-0 w-full h-full overflow-hidden z-10">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className={`absolute ${petal.color}`}
          style={{
            left: petal.left,
            fontSize: `${petal.size}px`,
            animation: `fall ${petal.duration}s linear forwards`,
          }}
        >
          {petal.flower}
        </div>
      ))}
    </div>
  );
}
