"use client";
import React from "react";
import {motion, useInView} from "framer-motion";
import SplitText from "../../SplitText";
import EmblaCarousel from "../EmblaCarousel";
import {useIsMobile} from "@/hooks/useIsMobile";
import VideoCard from "./VideoCard";

// Logos
import ZamnesiaLogo from "@/assets/Glance/logo_for_cases/zamnesia.svg";
import ArhiveLogo from "@/assets/Glance/logo_for_cases/Wellow.svg";
import EasyjetLogo from "@/assets/Glance/logo_for_cases/valyou.svg";
import FormulaPrescotLogo from "@/assets/Glance/logo_for_cases/formulae_prescott.svg";
import CbdMall from "@/assets/Glance/logo_for_cases/cbd_mall.svg";
import BecaHomeLogo from "@/assets/Glance/logo_for_cases/beccashome.svg";


import Zamnesia from "@/assets/image/posts/zamnesia-min.jpg";
import Wellow from "@/assets/image/posts/wellow-min.jpg";
import Valouy from "@/assets/image/posts/valoyu-min.jpg";
import Formula from "@/assets/image/posts/formula-min.jpg";
import Cbd from "@/assets/image/posts/cbd-min.jpg";
import BecaHome from "@/assets/image/posts/becca_home-min.jpg";


//Avatars
import PaulBenigeriAvatar from "@/assets/Glance/Avatars/Paul Benigeri.svg";
import SteliosHajiIoannouAvatar from "@/assets/Glance/Avatars/Stelios Haji-Ioannou.svg";

const slides = [
    {
        element: (
            <VideoCard
                classNames="max-w-[280px] sm:max-w-[496px] min-h-[280px] sm:min-h-[440px] text-white"
                containerClassName="min-h-[280px] sm:min-h-[440px]"
                // badgetText="saas"
                persentage={[
                    {
                        quant: "+2%",
                        text: "CR"
                    },
                    {
                        quant: "+33%",
                        text: "AOV"
                    }
                ]}
                imageSrc={Zamnesia}
                descriptionText="Lifted Conversion Rate and Average Order Value by polishing CTA and user flows"
                logo={<ZamnesiaLogo className="post-logo__svg"/>}
                withAuthor={false}
                url=""
            />
        ),
    },
    {
        element: (
            <VideoCard
                imageSrc={Formula}
                classNames="max-w-[280px] min-w-[495px] sm:max-w-[496px] min-h-[320px] sm:min-h-[482px]"
                containerClassName="min-h-[320px] sm:min-h-[482px]"
                persentage={[
                    {
                        quant: "-30%",
                        text: "Cart abandonment rate"
                    },
                    {
                        quant: "+27%",
                        text: "CSAT"
                    }
                ]}
                // badgetText="Marketplaces"
                descriptionText="Reducing user friction resulted into improving Cart Abandonment Rate"
                authorText="Gerhard Marringer"
                logo={<FormulaPrescotLogo className="post-logo__svg"/>}
                isForbes={false}
                withAuthor={false}
                url=""
                videoSrc={""}
            />
        ),
    },
    {
        element: (
            <VideoCard
                imageSrc={Cbd}
                classNames="max-w-[280px] sm:max-w-[496px] min-h-[250px] sm:min-h-[305px] text-black"
                containerClassName="min-h-[250px] sm:min-h-[305px]"
                persentage={[
                    {
                        quant: "+37%",
                        text: "CLV"
                    },
                    {
                        quant: "+21%",
                        text: "Retention Rate"
                    }
                ]}
                // badgetText="SaaS | AI"
                descriptionText="Increased CLV by adding product subscription"
                authorText="Paul Benigeri"
                companyText="Co-Founder & CEO at Archive"
                logo={<CbdMall className="post-logo__svg"/>}
                withAuthor={false}
                avatar={<PaulBenigeriAvatar/>}
                url="https://www.linkedin.com/in/benigeri/"
            />
        ),
    },
    {
        element: (
            <VideoCard
                imageSrc={Wellow}
                classNames="max-w-[280px] min-w-[495px] sm:max-w-[496px] min-h-[280px] sm:min-h-[440px] "
                containerClassName="min-h-[280px] sm:min-h-[440px]"
                persentage={[
                    {
                        quant: "+28%",
                        text: "Add-To-Cart Rate"
                    },
                    {
                        quant: "-11%",
                        text: "Bounce Rate"
                    }
                ]}
                // badgetText="IOT"
                descriptionText="UXLAB revamped UX positioning to increase add-to-cart rate"
                logo={<ArhiveLogo className="post-logo__svg"/>}
                withAuthor={false}
                videoSrc={""}
                url=""
            />
        ),
    },
    {
        element: (
            <VideoCard
                imageSrc={Valouy}
                classNames="max-w-[280px] sm:max-w-[496px] min-h-[305px] sm:min-h-[305px] text-black"
                containerClassName="min-h-[305px] sm:min-h-[305px]"
                persentage={[
                    {
                        quant: "18%",
                        text: "Long Stat Name"
                    },
                    {
                        quant: "18%",
                        text: "Long Stat Name"
                    }
                ]}
                // badgetText="Travel"
                descriptionText="Next-level experience for booking boutique apartments online."
                logo={<BecaHomeLogo className="post-logo__svg"/>}
                withAuthor={false}
                url=""
                // videoSrc={"/glance-section-video/numa.mp4"}
            />
        ),
    },


    {
        element: (
            <VideoCard
                imageSrc={BecaHome}
                classNames="max-w-[280px] sm:max-w-[496px] min-h-[280px] sm:min-h-[305px] text-black"
                containerClassName="min-h-[280px] sm:min-h-[305px]"
                persentage={[
                    {
                        quant: "18%",
                        text: "Long Stat Name"
                    },
                    {
                        quant: "18%",
                        text: "Long Stat Name"
                    }
                ]}
                // badgetText="e-commerce | Airlines"
                descriptionText="UXLAB helped us launch 3 new ecommerce apps that attracted 1m new MAU."
                authorText="Stelios Haji-Ioannou"
                companyText="Founder at easyGroup"
                withAuthor={false}
                logo={<EasyjetLogo className="post-logo__svg"/>}
                avatar={<SteliosHajiIoannouAvatar/>}
                videoSrc={""}
                url="https://www.linkedin.com/in/stelios-haji-ioannou/"
            />
        ),
    }
];

export default function GlanceSection() {
    const ref = React.useRef(null);
    const isInView = useInView(ref, {once: true, margin: "-300px"});
    const isMobile = useIsMobile();

    return (
        <section className="relative glanse_section">

            <div
                ref={ref}
                className="flex flex-col bg-bg-white relative overflow-hidden"
            >

                <div className="container-fluid">
                    <div className="mx-4">
                        <motion.div
                            className={`h-[1px]`}
                            style={{
                                backgroundColor: "#E5E5E5",
                                transformOrigin: "left center",
                            }}
                            initial={{width: 0}}
                            whileInView={{width: "100%"}}
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                duration: 2.5,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                        />
                    </div>
                    <div className="flex justify-between mx-4 md:mx-10 md:py-8 py-4 t-p1">

                        <div>
                            <SplitText
                                text="UXLAB at a Glance."
                                className="t-p1 text-black"
                                splitType="lines"
                                delay={100}
                                duration={0.5}
                                ease="power3.out"
                                from={{opacity: 0, y: 50}}
                                to={{opacity: 1, y: 0}}
                                threshold={0.1}
                                rootMargin="0px"
                                textAlign="left"
                            />
                        </div>
                        <div className="relative group">
                            <a
                                href="mailto:hello@uxlab.digital"
                                className="text-black relative group"
                            >
                                <SplitText
                                    text="hello@uxlab.digital"
                                    className="hoves-p1-reg text-black"
                                    splitType="lines"
                                    delay={200}
                                    duration={0.5}
                                    ease="power3.out"
                                    from={{opacity: 0, y: 50}}
                                    to={{opacity: 1, y: 0}}
                                    threshold={0.1}
                                    rootMargin="0px"
                                    textAlign="left"
                                />
                                <span
                                    className="absolute bottom-[-3px] left-0 w-0 h-[1px] header-underline underline-animation"></span>
                            </a>
                        </div>
                    </div>
                </div>
                <EmblaCarousel
                    slides={slides}
                    slideSpacing={isMobile ? 8 : 32}
                    speed={80}
                    className="cursor-grab"
                />
                <div className="flex mx-4 md:mx-10 my-[96px] md:my-40 hoves-p1-reg after_carousel__line"/>
            </div>
            {/* <div className="relative mx-4 md:mx-10">
          <motion.div
            className="absolute -bottom-3 left-0 w-full h-[1px] bg-border-100"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
              delay: 0.5,
            }}
            style={{ transformOrigin: "left" }}
          />
        </div> */}
        </section>
    );
}
