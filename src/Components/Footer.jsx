// File: src/components/Footer.jsx
import { useNavigate,Link } from "react-router-dom";
import { FaFacebookF, FaInstagram,  FaTwitter, FaTiktok, FaYoutube } from "react-icons/fa";
import logo from "../../public/logo.png"
import mpesa from "../../public/mpesa.png"

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-16 px-4 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Brand & Contact */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <img src={logo} alt="Ots" className="h-10" />
            <p>
            <span className="text-xl font-bold text-[#14110d]">Obinna</span><span className="text-xl font-bold text-[#FE7F02]">tv</span>  
        <span className="text-xl font-bold text-[#14110d]"> Studios</span></p>
          </div>
          <h4 className="font-bold text-lg mb-4">Contact</h4>
          <p className="mb-2"><strong>Address:</strong> Obinnatv Studios, Hillcrest Court, Westlands, Nairobi, Kenya</p>
          <p className="mb-2"><strong>Phone:</strong> shop@obinnatvstudios.com
              +254 798 663936</p>
          <p className="mb-4"><strong>Hours:</strong> Monday - Friday: 9:00 AM - 4:30 PM Saturday: 10:00 AM - 4:00 PM</p>
<div className="mt-6">
  <h4 className="font-bold text-lg mb-4">Follow us</h4>
  <div className="flex space-x-4 text-gray-600 text-lg">
    <a
      href="https://www.facebook.com/profile.php?id=61568959716931"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaFacebookF className="hover:text-[#FE7F02] cursor-pointer transition" />
    </a>
    <a
      href="https://www.instagram.com/obinnatvupdates/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaInstagram className="hover:text-[#FE7F02] cursor-pointer transition" />
    </a>
    <a
      href="hhttps://x.com/ObinnaTvNetwork"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaTwitter className="hover:text-[#FE7F02] cursor-pointer transition" />
    </a>
    <a
      href="https://www.tiktok.com/@obinnatvupdatesofficial"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaTiktok className="hover:text-[#FE7F02] cursor-pointer transition" />
    </a>
    <a
      href="https://www.instagram.com/obinnatvupdates/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaYoutube className="hover:text-[#FE7F02] cursor-pointer transition" />
    </a>
  </div>
</div>
          
        </div>

        
        {/* About */}
        <div>
          <h4 className="font-bold text-lg mb-4">About</h4>
          {[
            { label: "About Us", link: "/about" },
            { label: "Delivery Information", link: "/delivery" },
            { label: "Privacy Policy", link: "/privacy" },
            { label: "Terms & Conditions", link: "/terms" },
            { label: "Contact Us", link: "/contact" },
          ].map((item) => (
            <Link
              key={item.label}
              to={item.link}
              className="block mb-3 text-gray-600 hover:text-[#FE7F02] transition"
            >
              {item.label}
            </Link>
          ))}
        </div>
        
        {/* My Account */}
        <div>
          <h4 className="font-bold text-lg mb-4">My Account</h4>
          {[
            { label: "Sign In", link: "/login" },
            { label: "View Cart", link: "/cart" },
            { label: "My Wishlist", link: "/wishlist" },
            { label: "Track My Order", link: "/orders/track" },
            { label: "Help", link: "/help" },
          ].map((item) => (
            <Link
              key={item.label}
              to={item.link}
              className="block mb-3 text-gray-600 hover:text-[#FE7F02] transition"
            >
              {item.label}
            </Link>
          ))}
        </div>
        
        

        {/* App Install */}
        <div>
          <h4 className="font-bold text-lg mb-4">Install App</h4>
          <p className="mb-4">App will install instanly when you alow it to install onclick of a button when you open the website</p>
          <div className="flex space-x-2 mb-4">
            {/* <img src="/assets/pay/app.jpg" alt="App Store" className="h-10 border border-[#FE7F02] rounded" />
            <img src="/assets/pay/play.jpg" alt="Google Play" className="h-10 border border-[#FE7F02] rounded" /> */}
          </div>
          <p className="mb-2">Secured Payment Gateways</p>
          <img src={mpesa} alt="Payment Methods" className="h-8 object-contain" />
        </div>
      </div>

      {/* Copyright + Back to Top */}
      <div className="container mx-auto mt-12 flex flex-col md:flex-row items-center justify-between text-gray-600 text-center md:text-left gap-4">
        <p>© {new Date().getFullYear()}  <span className="font-bold text-[#14110d]">Obinna</span><span className="font-bold text-[#FE7F02]">tv</span>  
        <span className="font-bold text-[#14110d]"> Studios</span>. All Rights Reserved. Created By Otieno Jim Hariclint</p>
        <button
          onClick={scrollToTop}
          className="bg-[#FE7F02] text-white px-4 py-2 rounded-lg shadow hover:bg-[#A07D28] transition"
        >
          Back to Top ↑
        </button>
      </div>
    </footer>
  );
};

export default Footer;
