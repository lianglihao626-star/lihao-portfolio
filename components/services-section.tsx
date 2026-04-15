import Image from "next/image"

export function ServicesSection() {
  const services = [
    {
      title: "Media Production",
      description: "Short film and documentary editing, scriptwriting, content creation, live broadcast directing using Mimolive, and campus variety show directing.",
      image: "/images/media-production-new.jpg",
    },
    {
      title: "Video & Photography",
      description: "Video editing in CapCut, filming and camera operation (including composition and lighting), basic color grading and visual effects.",
      image: "/images/video-photography-new.jpg",
    },
    {
      title: "Productivity & Tools",
      description: "Advanced Microsoft PowerPoint, Excel for data analysis, and Word for scriptwriting & documentation.",
      image: "/images/productivity-tools-new.jpg",
    },
    {
      title: "Language Proficiency",
      description: "Mandarin (Native), English (Fluent), Japanese (Basic), Malay (Beginner).",
      image: "/images/language-proficiency-new.jpg",
    },
  ]

  return (
    <section id="skills" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-[52px] md:leading-[60px] font-bold mb-4">
              My core <span className="bg-[#FF4A60] text-white px-3 py-1 inline-block">skills & expertise</span>
            </h2>
            <p className="text-[#393939] text-base md:text-lg font-medium leading-relaxed md:leading-[30px] max-w-2xl mx-auto">
              Proficient in media production, video editing, and essential productivity tools to deliver high-quality, engaging content.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border-[3px] border-black rounded-[32px] overflow-hidden hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 min-h-[480px] flex flex-col group"
              >
                <div className="mb-6 -mx-[3px] -mt-[3px] overflow-hidden rounded-t-[29px] aspect-[382/328] relative">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover rounded-t-[29px] group-hover:scale-110 transition-transform duration-500 ease-out"
                  />
                </div>
                <div className="px-6 pb-6 flex-1 flex flex-col">
                  <h3 className="text-[22px] leading-[32px] lg:text-[24px] lg:leading-[34px] font-bold mb-3 text-[#0B0B0B]">{service.title}</h3>
                  <p className="text-[16px] leading-[26px] font-medium text-[#393939]">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
