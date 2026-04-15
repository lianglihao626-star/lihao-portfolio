import Image from "next/image"

export function PostersSection() {
  const posters = [
    {
      title: "Awards Night",
      image: "/images/poster-3.jpg",
      bgColor: "bg-[#1C110C]"
    },
    {
      title: "Teaser",
      image: "/images/poster-4.jpg",
      bgColor: "bg-[#111A24]"
    },
    {
      title: "Call For Entries",
      image: "/images/poster-5.jpg",
      bgColor: "bg-[#18130B]"
    },
    {
      title: "Gen Z Film Project",
      image: "/images/poster-6.jpg",
      bgColor: "bg-[#3D4732]"
    },
    {
      title: "City Life",
      image: "/images/poster-7.jpg",
      bgColor: "bg-[#E6DFD4]"
    }
  ]

  return (
    <section id="promotional-posters" className="bg-[#FF6B7A] py-16 md:py-24 border-t-[3px] border-black">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-[52px] md:leading-[60px] font-bold mb-4 text-black">
              Promotional <span className="bg-black text-white px-3 py-1 inline-block">Posters</span>
            </h2>
            <p className="text-black text-base md:text-lg font-bold leading-relaxed max-w-2xl mx-auto">
              A curated collection of promotional posters designed for various film events, campaigns, and visual experiments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
            {posters.map((poster, index) => (
              <div key={index} className="group flex flex-col">
                <div className={`${poster.bgColor} relative flex-grow aspect-[2/3] border-[3px] border-black rounded-[16px] overflow-hidden mb-4 hover:translate-y-[-8px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300`}>
                  <Image
                    src={poster.image}
                    alt={poster.title}
                    fill
                    className="object-cover p-2 group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>
                <div className="px-1 text-center">
                  <h3 className="text-lg font-bold text-black truncate" title={poster.title}>{poster.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

