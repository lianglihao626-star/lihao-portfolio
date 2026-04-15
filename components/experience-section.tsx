"use client"

import { useState } from "react"
import { FileText, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function ExperienceSection() {
  const [isResumeOpen, setIsResumeOpen] = useState(false)

  const experiences = [
    {
      period: "Jul 2025 - Sep 2025",
      title: "Marketing & Content Intern",
      description:
        "Shenzhen Yiliqun Trading Co., Ltd. — Created and managed short-form video content on TikTok and Xiaohongshu, including promotional visuals. Produced 20+ promotional videos targeting youth demographics, leading to a 40% increase in online sales.",
      icon: "/images/company.png",
    },
  ]

  return (
    <>
      <section id="experience" className="bg-black py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
            <div className="text-white pt-0 md:pt-12 md:sticky md:top-12 self-start">
              <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 md:mb-8 leading-[1.3]">
                Take a look at my <span className="bg-[#6366F1] text-white px-3 py-1 inline-block">past experience</span>
              </h2>
              <p className="text-gray-400 mb-8 md:mb-10 leading-relaxed text-base md:text-lg">
                A brief timeline of my professional journey, internships, and university media projects.
              </p>
              <Button 
                onClick={() => setIsResumeOpen(true)}
                className="bg-white text-black hover:bg-gray-50 rounded-lg py-5 px-8 md:py-[22px] md:px-[62px] text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-[240px]"
              >
                <FileText className="w-5 h-5" />
                See full resume
              </Button>
            </div>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="bg-white border-4 border-black rounded-3xl min-h-[220px] md:min-h-[240px]">
                  <div className="flex items-center justify-between mb-4 md:mb-6 pt-6 md:pt-8 px-6 md:px-8">
                    <div className="text-base md:text-[22px] leading-tight md:leading-[34px] font-bold text-[#0B0B0B]">
                      {exp.period}
                    </div>
                    <div className="rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      <Image
                        src={exp.icon || "/placeholder.svg"}
                        alt={exp.title}
                        width={48}
                        height={48}
                        className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 rounded-full"
                      />
                    </div>
                  </div>

                  <div className="border-t-[3px] border-black mb-4 md:mb-6"></div>

                  <div className="px-6 md:px-8 pb-6 md:pb-8">
                    <h3 className="text-xl md:text-[28px] leading-tight md:leading-[40px] font-bold text-[#0B0B0B] mb-2 md:mb-3">
                      {exp.title}
                    </h3>
                    <p className="text-[#393939] text-base md:text-[20px] leading-relaxed md:leading-[32px]">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resume Fullscreen Modal */}
      {isResumeOpen && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 md:p-8 backdrop-blur-sm"
          onClick={() => setIsResumeOpen(false)}
        >
          <div 
            className="relative w-full max-w-4xl max-h-[90vh] h-full flex flex-col items-center justify-center bg-white rounded-xl border-4 border-black overflow-hidden shadow-[12px_12px_0px_0px_rgba(99,102,241,1)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setIsResumeOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="relative w-full h-full overflow-y-auto">
              <Image
                src="/images/resume.jpg"
                alt="Full Resume"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 1000px"
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
