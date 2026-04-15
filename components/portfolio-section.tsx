import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function PortfolioSection() {
  const projects = [
    {
      title: "Tv Show Content",
      description:
        "Created and managed short-form video content on TikTok and Xiaohongshu. Produced 20+ promotional videos targeting youth demographics, which led to a 40% increase in online sales.",
      tag: "Content Creation",
      logo: "/images/company.png",
      bgColor: "bg-black",
      illustration: "https://img.youtube.com/vi/X9uytA2FFbI/maxresdefault.jpg",
      videoUrl: "https://youtu.be/X9uytA2FFbI",
    },
    {
      title: "Live Broadcast Directing",
      description:
        "Directed simulated TV news broadcasts using Mimolive. Gained hands-on experience in directing campus variety show productions with professional arts training.",
      tag: "Video Editing",
      logo: "/images/agency.png",
      bgColor: "bg-[#2F81F7]",
      illustration: "https://img.youtube.com/vi/u4XhRQKie4o/maxresdefault.jpg",
      videoUrl: "https://youtu.be/u4XhRQKie4o?si=Dz_CLNK4Ona07aE8",
    },
    {
      title: "Short Film & Documentary",
      description:
        "Extensive experience in short film and documentary editing. Involved in scriptwriting, content creation, filming, camera operation, basic color grading, and visual effects.",
      tag: "Media Directing",
      logo: "/images/startup.png",
      bgColor: "bg-black",
      illustration: "https://img.youtube.com/vi/RNgVqkBQ8cQ/maxresdefault.jpg",
      videoUrl: "https://youtu.be/RNgVqkBQ8cQ?si=yoNa1NMIOKyem43I",
    },
    {
      title: "AI Video Production",
      description:
        "Exploring and utilizing advanced AI tools for video generation, automated editing, and intelligent post-production. Combining creative storytelling with cutting-edge artificial intelligence technologies.",
      tag: "AI Generation",
      logo: "/images/busines.png",
      bgColor: "bg-[#FFC224]",
      illustration: "https://img.youtube.com/vi/XUfWP71FEpE/maxresdefault.jpg",
      videoUrl: "https://youtu.be/XUfWP71FEpE",
    },
  ]

  return (
    <section id="portfolio" className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Take a look at my <br />
            <span className="bg-[#FFC224] text-black px-3 py-1 inline-block">media portfolio</span>
          </h2>
        </div>

        <div className="space-y-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group grid md:grid-cols-2 bg-white border-[3px] border-black rounded-[32px] overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <div className="p-6 md:p-12 flex flex-col justify-center bg-white">
                <div className="flex items-center gap-3 mb-6">
                  <Image
                    src={project.logo || "/placeholder.svg"}
                    alt={`${project.title} logo`}
                    width={120}
                    height={32}
                    className="h-6 md:h-8 w-auto"
                  />
                </div>

                <span className="inline-block bg-black text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-6 w-fit">
                  {project.tag}
                </span>

                <h3 className="text-xl md:text-[28px] font-bold mb-4 leading-tight md:leading-[40px] text-[#0B0B0B]">
                  {project.title}
                </h3>

                <p className="text-base md:text-[18px] text-[#393939] mb-8 leading-relaxed md:leading-[30px] font-medium">
                  {project.description}
                </p>

                <a
                  href={project.videoUrl || "#"}
                  target={project.videoUrl ? "_blank" : "_self"}
                  rel={project.videoUrl ? "noreferrer" : ""}
                  className="flex items-center gap-2 font-semibold text-[#0B0B0B] hover:gap-3 transition-all text-sm md:text-base w-fit"
                >
                  {project.videoUrl ? "Watch Video" : "View case study"}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <div className={`${project.bgColor} relative overflow-hidden min-h-[250px] md:min-h-[500px]`}>
                {project.videoUrl ? (
                  <a href={project.videoUrl} target="_blank" rel="noreferrer" className="block w-full h-full">
                    <Image
                      src={project.illustration || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      unoptimized={project.illustration?.startsWith('http')}
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm group-hover:scale-110 transition-transform">
                        <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-black border-b-[10px] border-b-transparent ml-1" />
                      </div>
                    </div>
                  </a>
                ) : (
                  <Image
                    src={project.illustration || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                    unoptimized={project.illustration?.startsWith('http')}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
