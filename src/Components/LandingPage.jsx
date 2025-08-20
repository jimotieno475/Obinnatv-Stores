import { useNavigate } from 'react-router-dom';
import jim from '../../public/assets/Pictures/jim.jpg';
import mummy from '../../public/assets/Mama/Mama.jpg';
import princess from '../../public/assets/Princess/Princess.jpg';
import FlowerDrop from './FlowerDrop';
import LoveFloat from './LoveFloat';
import Footer from './Footer';

const members = [
  { id: 1, name: "Jim", image: jim, path: "/gallery" },
  { id: 2, name: "Mummy", image: mummy, path: "/mom" },
  { id: 3, name: "Princess", image: princess, path: "/princess" },
];

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen pt-20 bg-gradient-to-br from-pink-200 via-purple-200 to-yellow-100 flex flex-col justify-between overflow-hidden">
      <FlowerDrop />
      <LoveFloat />

      <header className="text-center py-8">
        <h1 className="text-4xl font-bold text-pink-700">Welcome to Our Family The Most Wonerful Home 💖</h1>
        <p className="text-lg text-gray-700 mt-2">A space full of love, joy, and memories.</p>
      </header>

      <main className="flex flex-col md:flex-row items-center justify-center gap-6 px-6 pb-10">
        {members.map((member) => (
          <div
            key={member.id}
            onClick={() => navigate(member.path)}
            className="cursor-pointer bg-white rounded-3xl shadow-xl p-6 w-72 text-center hover:scale-105 transition"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-40 h-40 mx-auto object-cover rounded-full border-4 border-pink-300"
            />
            <h2 className="mt-4 text-xl font-semibold text-pink-600">{member.name}</h2>
          </div>
        ))}
      </main>

        <Footer />
    </div>
  );
}
