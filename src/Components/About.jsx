// File: src/components/About.jsx
import { useState } from "react";
import OTS from "../../public/obinnatvstudios.webp"
import banner from "../../public/banner.jpg"
import shoot from "../../public/shoot.webp"
import OgaObinna from "../../public/oga-obinna.webp"
import leslie from "../../public/leslie.webp"
import robert from "../../public/robert.webp"

const About = () => {
  const [activeTab, setActiveTab] = useState("story");

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      {/* Hero Section */}
<section
  className="bg-cover bg-center h-80 flex items-center justify-center text-center"
  style={{
    backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${OTS})`,
  }}
>
  <div className="text-white">
    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#FE7F02]">Know Us</h2>
    <p className="text-xl max-w-2xl px-4">
      Discover Obinna TV Studios Fashion – Kenya’s Exclusive Online Clothing Shop
    </p>
  </div>
</section>

      {/* Main Content */}
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        {/* Intro Section */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
          <div className="md:w-1/2 h-100">
            <img
              src={OTS}
              alt="Obinna TV Studios Online Fashion"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-black">Who We Are</h2>
            <p className="text-gray-800 mb-6">
              Founded with a vision to revolutionize digital entertainment, Obinnatv Studios is a creative powerhouse specializing
               in high-quality productions, engaging content, and brand storytelling. From talk shows to comedy, music, 
              and philanthropy-driven initiatives, our goal is to inform, entertain, and inspire audiences across the globe.
              Unlike traditional stores, we Have an{" "}
              <span className="font-bold text-gold-600">online-only shop</span> – with
              physical sales happening exclusively during our{" "}
              <span className="italic">live TV shows</span>.
            </p>
            <p className="text-gray-800 mb-6">
              Our vision is To be the leading digital media studio in Africa, setting the benchmark for creativity, innovation, and impact-driven storytelling
              to redefine how Kenyans shop for fashion by blending digital
              convenience with the excitement of live, interactive experiences.
            </p>
            <div className="bg-gold-50 p-4 rounded-lg mb-6 border-l-4 border-gold-500">
              <p className="text-gray-800 italic">
                "Fashion is not just what you wear – it’s how you express yourself.
                At Obinna TV Studios, we make sure you do it with confidence."
              </p>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mb-16">
          <div className="flex border-b border-gray-300 mb-8 overflow-x-auto">
            {[
              { id: "story", label: "Our Story" },
              { id: "products", label: "Our Products" },
              { id: "values", label: "Our Values" },
              { id: "impact", label: "Community Impact" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-3 px-6 font-medium whitespace-nowrap ${
                  activeTab === tab.id
                    ? "text-black border-b-2 border-gold-600"
                    : "text-gray-600 hover:text-black"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="p-4">
            {activeTab === "story" && (
              <div>
                <h3 className="text-2xl font-bold mb-4 text-black">Our Fashion Journey</h3>
                <p className="text-gray-800 mb-4">
                  Born out of Obinna TV Studios, our fashion line started as a way to
                  connect with audiences through style. Viewers loved our designs, and
                  soon the demand grew beyond live shows. That’s when we decided to
                  launch our online shop.
                </p>
                <p className="text-gray-800 mb-4">
                  Today, we serve customers all over Kenya, with{" "}
                  <span className="font-bold">online-first shopping</span> and occasional
                  physical pop-up stores during live events.
                </p>
              </div>
            )}

            {activeTab === "products" && (
              <div>
                <h3 className="text-2xl font-bold mb-6 text-black">What We Offer</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      name: "Jampas",
                      description:
                        "Stylish and comfortable shorts designed for Kenya’s vibrant lifestyle.",
                      icon: "fa-solid fa-shorts",
                    },
                    {
                      name: "Sweatpants",
                      description:
                        "Premium sweatpants for both relaxation and style.",
                      icon: "fa-solid fa-vest",
                    },
                    {
                      name: "T-Shirts",
                      description:
                        "Bold designs inspired by Nairobi street culture and African heritage.",
                      icon: "fa-solid fa-shirt",
                    },
                    {
                      name: "Sweaters & Hoodies",
                      description:
                        "Perfect for chilly evenings, combining warmth with urban edge.",
                      icon: "fa-solid fa-shirt",
                    },
                  ].map((product, index) => (
                    <div
                      key={index}
                      className="bg-white p-6 rounded-lg shadow flex items-start border-l-4 border-gold-600"
                    >
                      <div className="text-gold-600 text-2xl mr-4">
                        <i className={product.icon}></i>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2 text-black">
                          {product.name}
                        </h4>
                        <p className="text-gray-800">{product.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "values" && (
              <div>
                <h3 className="text-2xl font-bold mb-4 text-black">What We Stand For</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow border-t-4 border-gold-600">
                    <h4 className="font-bold text-lg mb-2 text-black">
                      Quality First
                    </h4>
                    <p className="text-gray-800">
                      Every piece is designed with durability, comfort, and style in mind.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow border-t-4 border-gold-600">
                    <h4 className="font-bold text-lg mb-2 text-black">
                      Kenyan Authenticity
                    </h4>
                    <p className="text-gray-800">
                      We celebrate Kenya’s identity by blending urban culture with
                      African-inspired creativity.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow border-t-4 border-gold-600">
                    <h4 className="font-bold text-lg mb-2 text-black">
                      Affordable Fashion
                    </h4>
                    <p className="text-gray-800">
                      Fashion shouldn’t be expensive. We keep our collections accessible.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow border-t-4 border-gold-600">
                    <h4 className="font-bold text-lg mb-2 text-black">
                      Sustainability
                    </h4>
                    <p className="text-gray-800">
                      We use eco-friendly packaging and promote sustainable practices.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "impact" && (
              <div>
                <h3 className="text-2xl font-bold mb-4 text-black">
                  Giving Back to the Society
                </h3>
                <p className="text-gray-800 mb-6">
                  We believe in community. Through <span className="text-black">Obinna<span className="text-[#FE7F02]">tv</span> Foundation </span>, we support local
                  artisans, mentor young talents, and contribute to social causes lime mental health ,charity and even Adopting children.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-black">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Oga Obinna",
                role: "Founder & Creative Director",
                desc: "Visionary media personality, comedian, and entrepreneur behind Obinna TV Studios, blending media and fashion.",
                img: OgaObinna,
              },
              {
                name: "Robert Ocham",
                role: "Business and Brand Manager",
                desc: "Creates designs inspired by Kenyan culture and global trends.",
                img: robert,
              },
              {
                name: "Lesly Daniel",
                role: "Managing Director",
                desc: "Ensures smooth online logistics and timely deliveries.",
                img: leslie,
              },

            ].map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow overflow-hidden border-t-4 border-gold-600"
              >
                <div className=" bg-gray-100 flex items-center justify-center">
                  {member.img ? (
                    <img
                      src={member.img}
                      alt={member.name}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="text-5xl text-gold-600">
                      <i className="fa-solid fa-user"></i>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-lg text-black">{member.name}</h4>
                  <p className="text-gold-700 font-medium">{member.role}</p>
                  <p className="text-gray-800 mt-2 text-sm">{member.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-black text-white p-10 rounded-lg text-center"
        
          style={{ backgroundImage: `url(${shoot})`, backgroundSize: 'cover' }}>
          <h2 className="text-3xl font-bold mb-4 text-gold-400">
            Shop with Obinna TV Studios
          </h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Join thousands of Kenyans shopping the smart way – online with style and
            confidence.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-gold-500  font-bold py-3 px-8 rounded hover:bg-gold-600 transition-colors">
              Browse Our Collection
            </button>
            <a
              href="https://www.youtube.com/@obinnatvupdates"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-[#FE7F02] text-black border-2 border-[##FE7F02]  font-bold py-3 px-8 rounded hover:bg-red-600 hover:text-white transition-colors">
                Watch Our Live Show
              </button>
            </a>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
