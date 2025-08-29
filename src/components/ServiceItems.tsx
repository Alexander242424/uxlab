"use client";
import { motion } from "framer-motion";
import ArrowUpRightSVG from "@/assets/arrow-up-right.svg";
import SplitText from "./SplitText";

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
    <section className="bg-bg-black mx-10 pt-20 relative overflow-hidden">
      <motion.div
        className="absolute top-0 left-0 w-full h-[1px] bg-border-50"
        style={{
          transformOrigin: "left",
        }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "0px" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      <div className="grid grid-cols-1 lg:grid-cols-10 gap-12">
        <div
          className="lg:col-span-3 flex items-start"

        >
          <SplitText
            text="Your Grow Starts Here"
            className="text-text-700 hoves-p1-reg"
            splitType="lines"
            delay={100}
            duration={0.8}
            ease="power3.out"
            from={{ opacity: 0, y: 50 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="100px"
          />
        </div>

        <div className="lg:col-span-7 flex flex-col">
          <div
            className="space-y-6 mb-20 max-w-[456px]"
          >
            <SplitText
              text="Over 10 years grinding alongside founders with a chip on their shoulder and a story that needs telling."
              className="text-text-700 leading-relaxed hoves-p1-reg"
              splitType="lines"
              delay={100}
              duration={0.8}
              ease="power3.out"
              from={{ opacity: 0, y: 50 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="100px"
            />
            <SplitText
              text="UXLab is the design partner teams turn to when speed and quality matter most. Our approach is fast and flexible - purpose built for startup speed."
              className="text-text-700 leading-relaxed hoves-p1-reg"
              splitType="lines"
              delay={100}
              duration={0.8}
              ease="power3.out"
              from={{ opacity: 0, y: 50 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="100px"
            />
          </div>

          <div className="space-y-0">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="group cursor-pointer relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.1,
                }}
              >
                <motion.div
                  className="absolute top-0 left-0 w-full h-[1px] bg-border-50"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                    delay: index * 0.1 + 0.3,
                  }}
                  style={{ transformOrigin: "left" }}
                />
                <div className="flex items-center justify-between py-10">
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
