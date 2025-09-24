"use client";
import AlexIcon from "@/assets/alex.svg";
import OverviewCaseVideoSection from "@/components/OverviewCaseVideoSection";
import ArticleNavigation from "@/components/ArticleNavigation";
import ArticleSubscribeBlock from "@/components/ArticleSubscribeBlock";
import InsightsSection from "@/components/InsightsSection";
import { useEffect, useState } from "react";

const ArticlePage = () => {
  const [isKeepDoorOpenInView, setIsKeepDoorOpenInView] = useState(false);

  useEffect(() => {
    // Set data-page attribute for article page styling
    document.body.setAttribute('data-page', 'article');
    
    const handleScroll = () => {
      const keepDoorOpenSection = document.getElementById('keep-the-door-open');
      if (keepDoorOpenSection) {
        const rect = keepDoorOpenSection.getBoundingClientRect();
        // Коли секція "keep-the-door-open" досягає верху екрану (з урахуванням відступу)
        setIsKeepDoorOpenInView(rect.top <= 230);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Перевіряємо початковий стан

    return () => {
      window.removeEventListener('scroll', handleScroll);
      // Clean up the data-page attribute when component unmounts
      document.body.removeAttribute('data-page');
    };
  }, []);
  return (
    <div className="relative flex flex-col bg-white text-black">
      {/* Side components that stop at keep-the-door-open section */}
      <div 
        className={`${isKeepDoorOpenInView ? 'absolute' : 'fixed'} left-[40px] w-fit not-xl:hidden z-10 transition-all duration-300`}
        style={{ 
          top: isKeepDoorOpenInView ? 'auto' : '135px',
          bottom: isKeepDoorOpenInView ? '650px' : 'auto'
        }}
      >
        <ArticleNavigation />
      </div>
      <div 
        className={`${isKeepDoorOpenInView ? 'absolute' : 'fixed'} right-[40px] w-[290px] not-xl:hidden z-10 transition-all duration-300`}
        style={{ 
          top: isKeepDoorOpenInView ? 'auto' : '135px',
          bottom: isKeepDoorOpenInView ? '650px' : 'auto'
        }}
      >
        <ArticleSubscribeBlock />
      </div>
      {/* Main content with exact positioning */}
      <div className="flex flex-row pt-4 md:pt-[48px] pb-[92px] md:pb-[158px] xl:ml-[400px] xl:mr-[400px] w-full] px-4 xl:px-0">
        <div className="flex flex-col w-full xl:gap-10 gap-8">
          <div className="flex flex-col">
            <div className="flex flex-col gap-5">
              <h3 className="hoves-h3-med">
                Conversions, revenue, acquisition, and the metrics that drive
                growth.
              </h3>
              <div className="flex flex-row gap-6 items-center">
                <div className="flex gap-4 items-center">
                  <AlexIcon className="min-w-[45px] min-h-[45px]" />
                  <div className="flex flex-col">
                    <p className="hoves-p2-med">Alex Tyshchenko</p>
                    <p className="hoves-p3-reg text-[#5C5C5C]">Designer</p>
                  </div>
                </div>
                <div className="flex flex-col gap-[2px]">
                  <p className="hoves-p3-reg">Jul 26, 2025</p>
                  <p className="hoves-p3-reg text-[#5C5C5C]">Release</p>
                </div>
                <div className="flex flex-col gap-[2px]">
                  <p className="hoves-p3-reg">8 min read</p>
                  <p className="hoves-p3-reg text-[#5C5C5C]">Reading time</p>
                </div>
              </div>
            </div>
          </div>
          <OverviewCaseVideoSection
            className="!p-0 !m-0"
            src="/video/reel-short.mp4"
          />
          <h6 className="hoves-h6-med">
            The ultimate canvas is out there — as opposed to what&apos;s
            commonly thought about the act of designing or creating something,
            great work doesn&apos;t usually start on a blank canvas. It always
            starts somewhere else.
          </h6>
          <div className="flex flex-col gap-4">
            <p className="hoves-p1-reg">
              Most often, out there, in the real world. In the messy, vivid,
              ever-shifting territory of culture. Because the truth is, to
              create work that resonates — that really resonates — design
              can&apos;t happen in a vacuum. You have to stay close to the
              pulse.
            </p>
            <p className="hoves-p1-reg">
              Culture is much more than a moodboard. It&apos;s not a hashtag, a
              fad, or a trendy idea. It&apos;s not a list of references at the
              end of a presentation. It&apos;s a living thing — made of people,
              language, behaviours, symbols, passions, obsessions,
              contradictions, and dreams. And whether you&apos;re building a
              fintech platform, a healthcare app, a brand for a fashion startup,
              or the next tool for creators, culture is already in the room. The
              question is: are you?
            </p>
            {/* Image section */}
            <p className="hoves-p1-reg">
              We truly believe that design is at its best when it belongs. It
              gets it. It feels specific, yet universal. Simple, yet charged. It
              speaks in a voice people understand, because it was made by
              someone who listens. And for us, that’s where it all begins. Being
              in the world — not just behind it
            </p>
          </div>
          <div id="being-in-the-world" className="flex flex-col gap-4">
            <h5 className="hoves-h5-med">
              Being in the world — not just behind it
            </h5>
            <p className="hoves-p1-reg">
              As creators, we are drawn to the in-between spaces. The liminal,
              the emerging, the weird-but-beautiful corners of the internet,
              design, tech, art, and daily life. Not because it&apos;s trendy,
              but because it&apos;s real. Because it tells us something about
              what people care about, worry about, laugh at, dream of.
            </p>
            <p className="hoves-p1-reg">
              That curiosity is part of the job. It&apos;s what helps our work
              connect. It helps us understand how people behave today, and
              imagine where they might go next. And that only happens if we pay
              attention. If we&apos;re there, in the mix, not on the sidelines.
            </p>
            <p className="hoves-p1-reg">
              Culture moves fast. But it also runs deep. Beyond what&apos;s
              trending, there is also what&apos;s transforming. Being in touch
              with culture doesn&apos;t mean constantly chasing the new. It
              means noticing. Being present. Letting things surprise you.
              Letting things happen. And, most of all, letting things matter.
            </p>
          </div>
          <div id="output-follows-input" className="flex flex-col gap-4">
            <h5 className="hoves-h5-med">Output follows input</h5>
            <p className="hoves-p1-reg">
              Originality always comes from great inputs. From consuming the
              right things — not necessarily the same things as everyone else.
              Reading weird zines. Watching a film from the &apos;80s you&apos;d
              never heard of. Following a side thread in a Discord server about
              the design of vending machines in Japan. Walking around your
              neighborhood and noticing a typeface painted on a wall.
            </p>
            <p className="hoves-p1-reg">
              So, a big part of the creative practice is staying open. Staying
              curious. Not only about what&apos;s popular, but about what&apos;s
              poignant. To dig, to listen, to feel. To gather not just
              inspiration, but understanding.
            </p>
          </div>
          {/* BigTextSection */}
          <h4 className="hoves-h4-med">
            Those things stick. They feed your taste. They sharpen your
            intuition. And when the time comes to design something — to give
            shape to an interface, an identity, an experience — those fragments
            come back. Not as references, but as raw material. As instincts. As
            ideas.
          </h4>
          <div id="taste-and-intuition" className="flex flex-col gap-4">
            <h5 className="hoves-h5-med">Taste and intuition are cumulative</h5>
            <p className="hoves-p1-reg">
              We often talk about creativity as this magical thing — a spark, a
              flash, a sudden solution. And sure, sometimes it feels like that,
              and we just recently were talking about the importance of
              intuition in design. But behind that spark is often a long period
              of curated, and also spontaneous, consumption. Of being in the
              world. Letting culture — and counterculture — flow through your
              senses.
            </p>
            {/* Image Section */}
            <p className="hoves-p1-reg">
              We&apos;re not here to simply follow trends or repeat what&apos;s
              already been done. What we want is to make work that cuts through.
              That feels meaningful. That adds something. And that takes
              patience, generosity, openness.
            </p>
          </div>
          <div id="sharing-we-make-culture" className="flex flex-col gap-4">
            <h5 className="hoves-h5-med">Sharing, we make culture</h5>
            <p className="hoves-p1-reg">
              Culture isn&apos;t something any one person owns, of course.
              It&apos;s a space the group inhabits. Which means staying close to
              it is something we do together. We share links, playlists,
              screenshots. We talk about what we&apos;re watching, what
              we&apos;re reading, what&apos;s making us think. Not to stay ahead
              — but to stay attuned.
            </p>
            <p className="hoves-p1-reg">
              This is how we keep our work grounded. Human. How we avoid the
              expected and make room for the specific. How we hold on to the
              originality of our ideas and the integrity of the craft.
            </p>
            <p className="hoves-p1-reg">
              We don&apos;t claim to have all the answers. But we try to stay
              open to where they might be. And more often than not, they&apos;re
              already out there.
            </p>
          </div>
          <div id="keep-the-door-open" className="flex flex-col gap-4">
            <h5 className="hoves-h5-med">Keep the door open</h5>
            <ul className="hoves-p1-reg list-disc list-inside pl-2">
              <li>
                Let curiosity lead — even when it doesn&apos;t feel &quot;useful&quot; at
                first.
              </li>
              <li>
                Explore what&apos;s happening outside your comfort zone or feed
                bubble.
              </li>
              <li>Make space for conversations about things that move you.</li>
              <li>
                Share what you&apos;re into — with no pressure for it to be
                on-trend.
              </li>
              <li>
                Be present, wherever you are. Culture is everywhere, if
                you&apos;re open to it.
              </li>
            </ul>
            <p className="hoves-p1-reg">
              Because in the end, culture isn&apos;t just something we react to.
              It&apos;s something we live in. Something we shape — and are
              shaped by. Culture matters. So, let&apos;s stay close to it.
            </p>
          </div>
          <div className="xl:hidden">
            <ArticleSubscribeBlock />
          </div>
        </div>
      </div>
      <InsightsSection />
    </div>
  );
};

export default ArticlePage;
