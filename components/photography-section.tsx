import Image from "next/image"

export function PhotographySection() {
  const photographyData = [
    {
      id: "sea",
      title: "Breath of the Sea",
      description: "海的呼吸｜广阔的蓝与金色沙线，人物剪影构成生活的节奏。",
      image: "/images/photo-sea.jpg",
      wide: true,
    },
    {
      id: "city",
      title: "Beauty of Eaves",
      description: "檐角之美｜对称与色彩，匠心的几何秩序。",
      image: "/images/photo-city.jpg",
    },
    {
      id: "form",
      title: "Bells and Textures",
      description: "钟铃与纹理｜时间在锈迹与铃声中回响。",
      image: "/images/photo-form.jpg",
    },
    {
      id: "silence",
      title: "Silence and Light",
      description: "静与光｜雕塑与阴影，柔与坚的并置。",
      image: "/images/photo-silence.jpg",
    },
    {
      id: "swim",
      title: "Clear and Swim",
      description: "游与清｜水下的色点，缓慢的诗意。",
      image: "/images/photo-swim.jpg",
    },
  ]

  return (
    <section id="photography" className="bg-white py-16 md:py-24 border-b-[3px] border-black">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Photography Showcase: <br />
              <span className="bg-[#FF6B7A] text-white px-3 py-1 inline-block">Sea · City · Form · Silence · Swim</span>
            </h2>
            <p className="text-[#393939] text-base md:text-lg font-medium leading-relaxed">
              呈现从海岸到建筑、器物与生命的流动。自然、人文与静物的叙事。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
            {photographyData.map((photo) => (
              <div key={photo.id} className="group flex flex-col">
                <div className="relative flex-grow aspect-[4/5] bg-gray-100 border-[3px] border-black rounded-[24px] overflow-hidden hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
                  <Image
                    src={photo.image}
                    alt={photo.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                  />
                </div>
                <div className="mt-4 px-2">
                  <p className="text-sm font-bold text-[#0B0B0B] line-clamp-2" title={photo.description}>{photo.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t-2 border-dashed border-gray-200">
            <p className="text-xs md:text-sm text-gray-400 font-medium italic">
              Theme Colors: Sea Blue, Vermilion, Golden Yellow, Limestone White. 
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
