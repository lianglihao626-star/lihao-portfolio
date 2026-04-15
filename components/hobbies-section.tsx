import { Camera, Plane, Film, Dumbbell } from "lucide-react"

export function HobbiesSection() {
  const hobbies = [
    {
      title: "Traveling",
      description: "Exploring new cultures, landscapes, and capturing memories around the world.",
      icon: Plane,
      bgColor: "bg-[#2F81F7]",
    },
    {
      title: "Photography",
      description: "Documenting street life, nature, and telling stories through my lens.",
      icon: Camera,
      bgColor: "bg-[#FF6B7A]",
    },
    {
      title: "Film Lover",
      description: "Analyzing classic cinema, exploring director styles, and deep diving into film history.",
      icon: Film,
      bgColor: "bg-[#FDB927]",
    },
    {
      title: "Sports",
      description: "Staying active, challenging myself physically, and enjoying the thrill of competition.",
      icon: Dumbbell,
      bgColor: "bg-[#6366F1]",
    },
  ]

  return (
    <section id="hobbies" className="bg-[#f3f4f6] py-16 md:py-24 border-y-[3px] border-black">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-[52px] md:leading-[60px] font-bold mb-4">
              What I do in my <span className="bg-[#6366F1] text-white px-3 py-1 inline-block">free time</span>
            </h2>
            <p className="text-[#393939] text-base md:text-lg font-medium leading-relaxed md:leading-[30px] max-w-2xl mx-auto">
              When I'm not studying or working on media projects, here are a few hobbies and activities I love to do.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {hobbies.map((hobby, index) => {
              const Icon = hobby.icon
              return (
                <div
                  key={index}
                  className="bg-white border-[3px] border-black rounded-[24px] p-6 hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 group"
                >
                  <div className={`w-14 h-14 ${hobby.bgColor} border-2 border-black rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-[22px] font-bold mb-3 text-[#0B0B0B]">{hobby.title}</h3>
                  <p className="text-[16px] leading-[26px] font-medium text-[#393939]">{hobby.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
