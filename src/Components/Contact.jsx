// File: src/components/Contact.jsx
import { useState } from 'react'
import { FaLocationDot, FaPhone, FaEnvelope, FaClock } from "react-icons/fa6";
import { FaFacebookF, FaInstagram,  FaTwitter, FaTiktok, FaYoutube } from "react-icons/fa";
import OTS from "../../public/obinnatvstudios.webp"


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className="min-h-screen ">
      {/* Header */}
      <section 
        className="bg-cover bg-center h-80 flex items-center justify-center text-center"
        style={{ backgroundImage: `linear-gradient(rgba(60, 30, 10, 0.6), rgba(60, 30, 10, 0.6)), url(${OTS})` }}
      >
        <div className="text-[#FE7F02]">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">Contact Us</h2>
          <p className="text-xl max-w-2xl px-4">GET IN TOUCH - WE'D LOVE TO HEAR FROM YOU</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-[#FE7F02]">Get In Touch</h2>
            <p className=" mb-8">
              Have questions about our clothing collections, need style advice, or want to check availability? 
              Reach out to us—we're here to help you look your best!
            </p>
            
            <div className="space-y-6">
              {[
                { icon: <FaLocationDot />, title: 'Main Office', text: 'Obinnatv Studios, Hillcrest Court, Westlands, Nairobi, Kenya' },
                { icon: <FaPhone />, title: 'Phone Numbers', text: '+254 798 663936' },
                { icon: <FaEnvelope />, title: 'Email Address', text: 'shop@obinnatvstudios.com' },
                { icon: <FaClock />, title: 'Opening Hours', text: 'Monday - Friday: 9:00 AM - 4:30 PM Saturday: 10:00 AM - 4:00 PM' }
              ].map((item, i) => (
                <div key={i} className="flex items-start">
                  <div className="bg-[#FE7F02]  p-3 rounded-full mr-4 text-lg">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#FE7F02]">{item.title}</h3>
                    <p className="text-black-700">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>


            {/* Social Media */}
<div className="mt-6">
  <h4 className="font-bold text-lg mb-4">Follow us</h4>
  <div className="flex space-x-4 text-gray-600">
    <a
      href="https://www.facebook.com/profile.php?id=61568959716931"
      target="_blank"
      rel="noopener noreferrer"
      className=" bg-[#FE7F02] text-black font-bold  hover:bg-black hover:text-[#FE7F02] w-10 h-10 rounded-full flex items-center justify-center transition-colors"
    >
      <FaFacebookF className=" text-lg" />
    </a>
    <a
      href="https://www.instagram.com/obinnatvupdates/"
      target="_blank"
      rel="noopener noreferrer"
      className=" bg-[#FE7F02] text-black font-bold  hover:bg-black hover:text-[#FE7F02] w-10 h-10 rounded-full flex items-center justify-center transition-colors"
    >
      <FaInstagram className=" text-lg" />
    </a>
    <a
      href="https://x.com/ObinnaTvNetwork"
      target="_blank"
      rel="noopener noreferrer"
      className=" bg-[#FE7F02] text-black font-bold  hover:bg-black hover:text-[#FE7F02] w-10 h-10 rounded-full flex items-center justify-center transition-colors"
    >
      <FaTwitter className=" text-lg" />
    </a>
    <a
      href="https://www.tiktok.com/@obinnatvupdatesofficial"
      target="_blank"
      rel="noopener noreferrer"
      className=" bg-[#FE7F02] text-black font-bold  hover:bg-black hover:text-[#FE7F02] w-10 h-10 rounded-full flex items-center justify-center transition-colors"
    >
      <FaTiktok className=" text-lg" />
    </a>
    <a
      href="https://www.youtube.com/@obinnatvupdates"
      target="_blank"
      rel="noopener noreferrer"
      className=" bg-[#FE7F02] text-black font-bold  hover:bg-black hover:text-[#FE7F02] w-10 h-10 rounded-full flex items-center justify-center transition-colors"
    >
      <FaYoutube className="text-lg" />
    </a>
  </div>
</div>

          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-xl border border-[#FE7F02]">
            <h2 className="text-3xl font-bold mb-6 text-[#FE7F02]">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {['name', 'email', 'subject'].map((field, i) => (
                <div key={i}>
                  <label htmlFor={field} className="block  font-medium mb-2 capitalize">
                    {field}
                  </label>
                  <input
                    type={field === 'email' ? 'email' : 'text'}
                    id={field}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-[#FE7F02] rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
                  />
                </div>
              ))}
              <div>
                <label htmlFor="message" className="block  font-medium mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-[#FE7F02] rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#FE7F02] text-black font-bold py-3 px-6 rounded-lg hover:bg-black hover:text-[#FE7F02] transition-colors"

              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
