// File: src/components/Features.jsx
const Features = () => {
  const features = [
    { img: '/assets/features/f1.png', title: 'Free Shipping' },
    { img: '/assets/features/f2.png', title: 'Online Order' },
    { img: '/assets/features/f3.png', title: 'Save Money' },
    { img: '/assets/features/f4.png', title: 'Promotion' },
    { img: '/assets/features/f5.png', title: 'Happy Sell' },
    { img: '/assets/features/f6.png', title: '24/7 Support' },
  ]

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="border border-[#cce7d0] rounded-lg p-6 text-center shadow-sm hover:shadow-lg transition-shadow cursor-pointer"
          >
            <img src={feature.img} alt={feature.title} className="mx-auto mb-4 h-16" />
            <h6 className="bg-[#fddde4] text-[#088178] rounded-md px-2 py-1 inline-block">
              {feature.title}
            </h6>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features