import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="home" className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-[42px] leading-[50px] md:text-[60px] font-bold md:leading-[75px]">
              I'm <span className="bg-[#FF6B7A] text-white px-3 py-1 inline-block">Liang Lihao</span>, studying{" "}
              <span className="bg-[#2F81F7] text-white px-3 py-1 inline-block">Media and Communication</span> at{" "}
              <span className="bg-[#FDB927] text-black px-3 py-1 inline-block">UKM</span>
            </h1>

          <p className="text-[#393939] text-[16px] md:text-[18px] font-medium leading-[28px] md:leading-[30px] max-w-xl">
            A final-year Media Communications student with hands-on experience in short film editing, documentary production, and live broadcasting. Passionate about storytelling and media production.
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            <span className="bg-[#ff3838] text-white px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wider">Media Production Intern</span>
            <span className="bg-[#5ca0ff] text-white px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wider">Content Creator</span>
            <span className="bg-[#f9fd26] text-black px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wider">Video Editor</span>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-7 pt-4">
            <Button className="bg-[#0B0B0B] text-white hover:bg-black/90 rounded-lg py-5 px-8 md:py-[22px] md:px-[62px] text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-[240px]">
              <Mail className="w-5 h-5" />
              Get in touch
            </Button>
          </div>
        </div>

        <div className="flex justify-center md:justify-center md:-ml-8 lg:-ml-12">
          <div className="relative w-full max-w-md aspect-square bg-[#FDB927] border-4 border-black rounded-3xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <img
              src="/images/my-avatar.jpg"
              alt="Liang Lihao"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
