import { Facebook, Twitter, Instagram, Youtube, Linkedin, Mail, Phone } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer id="contact" className="bg-black text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src="/images/my-avatar.jpg"
                    alt="Liang Lihao"
                    width={32}
                    height={32}
                    className="object-cover"
                  />
                </div>
                <span className="text-lg md:text-xl font-bold">Liang Lihao</span>
              </div>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                Media Communications student at Universiti Kebangsaan Malaysia.
                <br />
                Kuala Lumpur, Malaysia
              </p>
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/in/lihaoliang"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 bg-[#2F81F7] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:kngsg520@163.com"
                  className="w-10 h-10 bg-[#FF6B7A] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4">Pages</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#home" className="hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#skills" className="hover:text-white transition-colors">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="hover:text-white transition-colors">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#experience" className="hover:text-white transition-colors">
                    Experience
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Utility Pages</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#hobbies" className="hover:text-white transition-colors">
                    Hobbies
                  </a>
                </li>
                <li>
                  <a href="#photography" className="hover:text-white transition-colors">
                    Photography
                  </a>
                </li>
                <li>
                  <a href="#design" className="hover:text-white transition-colors">
                    Design Works
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4 text-[25px]">Contact me</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-white" />
                  <a href="mailto:kngsg520@163.com" className="text-white hover:text-gray-300 transition-colors">
                    kngsg520@163.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-white" />
                  <a href="tel:+60175221833" className="text-white hover:text-gray-300 transition-colors">
                    +60-1752-21833
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>Made by Liang Lihao - All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
