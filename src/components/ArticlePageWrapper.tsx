"use client";

import { useEffect, useState } from "react";
import ArticleNavigation, { ArticleNavigationProps } from "./ArticleNavigation";
import ArticleSubscribeBlock from "./ArticleSubscribeBlock";

interface ArticlePageWrapperProps {
  children: React.ReactNode;
  navigationItems: ArticleNavigationProps['navigationItems'];
  elementById: string;
}

const ArticlePageWrapper = ({ children, navigationItems, elementById }: ArticlePageWrapperProps) => {
  const [isKeepDoorOpenInView, setIsKeepDoorOpenInView] = useState(false);

  useEffect(() => {
    // Set data-page attribute for article page styling
    document.body.setAttribute('data-page', 'article');
    
    const handleScroll = () => {
      const keepDoorOpenSection = document.getElementById(elementById);
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
        <ArticleNavigation navigationItems={navigationItems} />
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
      {children}
    </div>
  );
};

export default ArticlePageWrapper;
