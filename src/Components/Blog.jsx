// // File: src/pages/Blog.jsx
// import React from "react";
// import { Link } from "react-router-dom";

// const posts = [
//   {
//     id: 1,
//     title: "Top 10 Summer Fashion Trends",
//     excerpt:
//       "Discover the hottest fashion trends for this summer. From flowy dresses to sustainable fabrics, here's what you need to know.",
//     image: "/assets/blog/blog1.jpg",
//     category: "Fashion",
//     date: "July 20, 2025",
//   },
//   {
//     id: 2,
//     title: "How to Style Accessories Like a Pro",
//     excerpt:
//       "Accessories can make or break your look. Learn expert tips to style jewelry, bags, and more to elevate any outfit.",
//     image: "/assets/blog/blog2.jpg",
//     category: "Style Tips",
//     date: "August 5, 2025",
//   },
//   {
//     id: 3,
//     title: "Why Sustainable Fashion Matters",
//     excerpt:
//       "The fashion industry is changing. Find out why eco-friendly clothing is not just a trend but the future of style.",
//     image: "/assets/blog/blog3.jpg",
//     category: "Sustainability",
//     date: "August 15, 2025",
//   },
// ];

// const Blog = () => {
//   return (
//     <div>
//       {/* Hero Section */}
//       <section className="bg-gray-100 py-16 text-center">
//         <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Blog</h1>
//         <p className="text-gray-600 text-lg">
//           Latest news, style tips & fashion inspiration
//         </p>
//       </section>

//       {/* Blog Grid */}
//       <section className="container mx-auto px-4 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//         {posts.map((post) => (
//           <div
//             key={post.id}
//             className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
//           >
//             <img
//               src={post.image}
//               alt={post.title}
//               className="w-full h-56 object-cover"
//             />
//             <div className="p-6">
//               <span className="text-sm text-[#B88E2F] font-medium uppercase">
//                 {post.category}
//               </span>
//               <h2 className="mt-2 text-xl font-bold">{post.title}</h2>
//               <p className="text-gray-600 text-sm mt-2 mb-4">{post.excerpt}</p>
//               <div className="flex justify-between items-center text-sm text-gray-500">
//                 <span>{post.date}</span>
//                 <Link
//                   to={`/blog/${post.id}`}
//                   className="text-[#B88E2F] hover:underline font-medium"
//                 >
//                   Read More →
//                 </Link>
//               </div>
//             </div>
//           </div>
//         ))}
//       </section>
//     </div>
//   );
// };

// export default Blog;
import React from "react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "Elegant Evening Gown",
    excerpt:
      "This exquisite evening gown exudes elegance and sophistication, making it the perfect choice for formal events and special occasions...",
    image: "/assets/blog/b1.jpg",
    date: "13/01",
  },
  {
    id: 2,
    title: "Cozy Cashmere Sweater",
    excerpt:
      "Embrace warmth and style with this luxurious cashmere sweater. Made from the finest cashmere fibers, it offers unparalleled softness...",
    image: "/assets/blog/b2.jpg",
    date: "12/21",
  },
  {
    id: 3,
    title: "Versatile Tailored Blazer",
    excerpt:
      "Elevate your professional attire with this versatile tailored blazer. Cut to perfection with sleek lapel collar, structured shoulders...",
    image: "/assets/blog/b3.jpg",
    date: "10/06",
  },
  {
    id: 4,
    title: "Relaxed Boho Maxi Dress",
    excerpt:
      "Embrace carefree bohemian vibes with this relaxed maxi dress. Made from lightweight fabric, perfect for sunny days and beach getaways...",
    image: "/assets/blog/b4.jpg",
    date: "11/05",
  },
  {
    id: 5,
    title: "Athleisure Hooded Jacket",
    excerpt:
      "Embrace the fusion of fashion and function with this trendy athleisure hooded jacket. Crafted from high-performance blend materials...",
    image: "/assets/blog/b5.jpg",
    date: "12/23",
  },
];

const Blog = () => {
  return (
    <div>
      {/* Header Banner */}
      <section
        className="h-64 flex flex-col justify-center items-center text-center text-white"
        style={{
          backgroundImage: "url('/assets/banner/b19.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2 className="text-4xl font-bold mb-2">#readmore</h2>
        <p className="text-lg">Read all case studies about our products!</p>
      </section>

      {/* Blog Section */}
      <section className="px-6 md:px-20 py-16">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="flex flex-col md:flex-row items-center relative mb-16 border-b pb-10"
          >
            {/* Image */}
            <div className="w-full md:w-1/2 md:pr-8 mb-6 md:mb-0">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-72 object-cover rounded-md"
              />
            </div>

            {/* Details */}
            <div className="w-full md:w-1/2 relative">
              <h4 className="text-xl font-semibold mb-4">{post.title}</h4>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <Link
                to={`/blog/${post.id}`}
                className="text-black text-xs font-bold tracking-wide relative inline-block"
              >
                CONTINUE READING
                <span className="absolute left-full top-1/2 -translate-y-1/2 ml-2 w-12 h-[2px] bg-black transition-all group-hover:bg-[#B88E2F]" />
              </Link>
            </div>

            {/* Date Overlay */}
            <h1 className="absolute text-[70px] font-bold text-gray-300 top-0 left-6 -z-10 opacity-60">
              {post.date}
            </h1>
          </div>
        ))}
      </section>

      {/* Pagination */}
      <section className="flex justify-center space-x-4 py-10">
        <Link
          to="#"
          className="px-4 py-2 border rounded hover:bg-[#B88E2F] hover:text-white transition"
        >
          1
        </Link>
        <Link
          to="#"
          className="px-4 py-2 border rounded hover:bg-[#B88E2F] hover:text-white transition"
        >
          2
        </Link>
        <Link
          to="#"
          className="px-4 py-2 border rounded hover:bg-[#B88E2F] hover:text-white transition"
        >
          →
        </Link>
      </section>

      {/* Newsletter */}
      <section className="bg-gray-100 py-12 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-6 md:mb-0">
          <h4 className="text-lg font-semibold mb-2">Sign up for newsletters</h4>
          <p className="text-gray-600">
            Get E-mail updates about our latest shop and{" "}
            <span className="text-[#B88E2F]">special offers.</span>
          </p>
        </div>
        <div className="flex">
          <input
            type="email"
            placeholder="Your email address"
            className="px-4 py-2 border border-gray-300 rounded-l-md outline-none"
          />
          <button className="bg-[#B88E2F] text-white px-6 rounded-r-md hover:bg-[#A07D28] transition">
            Sign Up
          </button>
        </div>
      </section>
    </div>
  );
};

export default Blog;
