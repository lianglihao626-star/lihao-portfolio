import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="container mx-auto px-4 py-16 md:py-32">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="flex justify-center">
          <div className="relative w-full max-w-lg aspect-square border-[4px] border-black rounded-full overflow-hidden bg-white shadow-[-8px_8px_0px_0px_rgba(0,0,0,1)]">
            <Image src="/images/ukm-campus.jpg" alt="UKM Campus" fill className="object-cover" />
          </div>
        </div>

        <div className="space-y-6 md:space-y-8">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              My background & <span className="bg-[#2F81F7] text-white px-3 py-1 inline-block">education</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Skilled in using Mimolive for simulated TV news directing and experienced in directing campus variety show productions. Seeking an internship in media production or broadcasting to further develop creative and technical expertise.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="w-5 h-5 bg-[#6366F1] border-2 border-black rounded-[5px] flex-shrink-0 mt-1"></div>
              <div>
                <h3 className="text-xl md:text-[30px] font-bold mb-2">Universiti Kebangsaan Malaysia</h3>
                <p className="text-gray-600 text-sm md:text-base font-semibold mb-1">2023 - 2026</p>
                <p className="text-gray-600 text-sm md:text-base">
                  Bachelor of Social Sciences (Media Communications) • CGPA 3.45 / 4
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-5 h-5 bg-[#FF6B7A] border-2 border-black rounded-[5px] flex-shrink-0 mt-1"></div>
              <div>
                <h3 className="text-xl md:text-[25px] font-bold mb-2">Arts-Focused High School, China</h3>
                <p className="text-gray-600 text-sm md:text-base font-semibold mb-1">2019 - 2021</p>
                <p className="text-gray-600 text-sm md:text-base">
                  Specialized in Media Directing through professional arts training. Admitted to university via Unified National Art College Entrance Examination.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
