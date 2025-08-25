'use client'
import ArrowUpRightSVG from '@/assets/arrow-up-right.svg'

interface ServiceItem {
  title: string
  subtitle: string
}

const services: ServiceItem[] = [
  {
    title: "Conversion-Centered Design",
    subtitle: "Elevate Your Brand. Outpace The Competition."
  },
  {
    title: "User Experience Research",
    subtitle: "Elevate Your Brand. Outpace The Competition."
  },
  {
    title: "Brand Identity Design",
    subtitle: "Elevate Your Brand. Outpace The Competition."
  },
  {
    title: "Product Strategy",
    subtitle: "Elevate Your Brand. Outpace The Competition."
  }
]

export default function ServiceItems() {
  return (
    <section className="bg-bg-black mx-10 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-12">
          <div className="lg:col-span-3 flex items-start">
            <h2 className="text-lg text-text-700" style={{ letterSpacing: "-0.03em" }}>
              Your Grow Starts Here
            </h2>
          </div>
          
          <div className="lg:col-span-7 flex flex-col">
            <div className="space-y-6 mb-20 max-w-[456px] text-lg">
              <p className="text-text-700 leading-relaxed">
                Over 10 years grinding alongside founders with a chip on their shoulder and a story that needs telling.
              </p>
              <p className="text-text-700 leading-relaxed">
                UXLab is the design partner teams turn to when speed and quality matter most. Our approach is fast and flexible - purpose built for startup speed.
              </p>
            </div>

            <div className="space-y-0">
              {services.map((service, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="flex items-center justify-between py-10 border-t border-border-50">
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-bold text-text-700 mb-3">
                          {service.title}
                        </h3>
                        <div className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                          <ArrowUpRightSVG className="w-6 h-6 text-text-700" />
                        </div>
                      </div>
                      <p className="text-text-500 text-lg">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    </section>
  )
}
