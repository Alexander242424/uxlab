"use client";
import { motion } from "framer-motion";
import ArrowUpRightSVG from "@/assets/arrow-up-right.svg";

interface ServiceItem {
  title: string;
  subtitle: string;
}

const services: ServiceItem[] = [
  {
    title: "Conversion-Centered Design",
    subtitle: "Elevate Your Brand. Outpace The Competition.",
  },
  {
    title: "User Experience Research",
    subtitle: "Elevate Your Brand. Outpace The Competition.",
  },
  {
    title: "Brand Identity Design",
    subtitle: "Elevate Your Brand. Outpace The Competition.",
  },
  {
    title: "Product Strategy",
    subtitle: "Elevate Your Brand. Outpace The Competition.",
  },
];

export default function ServiceItems() {
  return (
    <section className="bg-bg-black mx-10 pt-10">
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-12">
        <motion.div
          className="lg:col-span-3 flex items-start"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-text-700 hoves-p1-reg">Your Grow Starts Here</h2>
        </motion.div>

        <div className="lg:col-span-7 flex flex-col">
          <motion.div
            className="space-y-6 mb-20 max-w-[456px] hoves-p1-reg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <p className="text-text-700 leading-relaxed">
              Over 10 years grinding alongside founders with a chip on their
              shoulder and a story that needs telling.
            </p>
            <p className="text-text-700 leading-relaxed">
              UXLab is the design partner teams turn to when speed and quality
              matter most. Our approach is fast and flexible - purpose built for
              startup speed.
            </p>
          </motion.div>

          <div className="space-y-0">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.1,
                }}
              >
                <div className="flex items-center justify-between py-10 border-t border-border-50">
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="hoves-h5-med text-text-700 mb-3">
                        {service.title}
                      </h3>
                      <div className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                        <ArrowUpRightSVG className="w-6 h-6 text-text-700" />
                      </div>
                    </div>
                    <p className="text-text-500 hoves-p1-reg">
                      {service.subtitle}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
