import Image from "next/image"

export function DesignSection() {
  const designs = [
    {
      title: "The Voice of Gen Z",
      category: "Logo Design",
      image: "/images/design-1.jpg",
      bgColor: "bg-[#FFFFFF]",
      colSpan: "md:col-span-1 lg:col-span-1"
    },
    {
      title: "UKM Film Awards (Arch)",
      category: "Logo Design",
      image: "/images/design-2.jpg",
      bgColor: "bg-[#FFFFFF]",
      colSpan: "md:col-span-1 lg:col-span-1"
    },
    {
      title: "UKM Film Awards (Curtain)",
      category: "Logo Design",
      image: "/images/design-3.jpg",
      bgColor: "bg-[#FFFFFF]",
      colSpan: "md:col-span-1 lg:col-span-1"
    },
    {
      title: "Film Awards Night (Dark)",
      category: "Logo Design",
      image: "/images/design-4.jpg",
      bgColor: "bg-[#222222]",
      colSpan: "md:col-span-1 lg:col-span-1"
    },
    {
      title: "Film Awards Night (Light)",
      category: "Logo Design",
      image: "/images/design-5.jpg",
      bgColor: "bg-[#FFFFFF]",
      colSpan: "md:col-span-1 lg:col-span-1"
    },
    {
      title: "Easy Trip",
      category: "Logo Design",
      image: "/images/design-6.jpg",
      bgColor: "bg-[#FFFFFF]",
      colSpan: "md:col-span-1 lg:col-span-1"
    },
    {
      title: "Cultural Frame Studio",
      category: "Logo Design",
      image: "/images/design-7.jpg",
      bgColor: "bg-[#FFFFFF]",
      colSpan: "md:col-span-1 lg:col-span-1"
    },
    {
      title: "NIO (Nine In One)",
      category: "Logo Design",
      image: "/images/design-8.jpg",
      bgColor: "bg-[#FFFFFF]",
      colSpan: "md:col-span-1 lg:col-span-1"
    },
    {
      title: "Horizon News",
      category: "Logo Design",
      image: "/images/design-9.jpg",
      bgColor: "bg-[#FFFFFF]",
      colSpan: "md:col-span-1 lg:col-span-1"
    },
    {
      title: "Symbol Mystery (The Sign Lab)",
      category: "Logo Design",
      image: "/images/design-10.jpg",
      bgColor: "bg-[#515151]",
      colSpan: "md:col-span-1 lg:col-span-1"
    },
    {
      title: "Beyond Fake News (Grunge)",
      category: "Poster Design",
      image: "/images/poster-1.jpg",
      bgColor: "bg-[#111111]",
      colSpan: "md:col-span-1 lg:col-span-1"
    },
    {
      title: "Beyond Fake News (Infographic)",
      category: "Poster Design",
      image: "/images/poster-2.jpg",
      bgColor: "bg-[#1A365D]",
      colSpan: "md:col-span-1 lg:col-span-1"
    },
    {
      title: "Easy Trip Brand Set",
      category: "Brand Identity",
      image: "/images/brand-1.jpg",
      bgColor: "bg-[#E5E7EB]",
      colSpan: "md:col-span-2 lg:col-span-2"
    }
  ]

  return (
    <section id="design" className="bg-black py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-[52px] md:leading-[60px] font-bold mb-4 text-white">
              My <span className="bg-[#2F81F7] text-white px-3 py-1 inline-block">Design Works</span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg font-medium leading-relaxed max-w-2xl mx-auto">
              A showcase of my graphic design projects, branding, and visual experiments. Featuring logos, posters, and brand identity sets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {designs.map((design, index) => (
              <div key={index} className={`group flex flex-col ${design.colSpan}`}>
                <div className={`${design.bgColor} relative flex-grow min-h-[300px] border-[3px] border-white rounded-[32px] overflow-hidden mb-4 hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] transition-all duration-300`}>
                  <Image
                    src={design.image}
                    alt={design.title}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>
                <div className="px-2">
                  <span className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-1 block">
                    {design.category}
                  </span>
                  <h3 className="text-xl font-bold text-white truncate" title={design.title}>{design.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
