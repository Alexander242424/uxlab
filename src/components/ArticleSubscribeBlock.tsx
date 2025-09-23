import ClickHandIcon from "@/assets/click-hand.svg";

const ArticleSubscribeBlock = () => {
  return (
    <div className="fixed right-[40px] top-72.5 w-[280px] h-screen overflow-y-auto">
      <div className="flex flex-col gap-10 pt-[48px]">
        <div className="flex flex-col bg-bg-black px-5 py-4">
          <div className="flex flex-row justify-between">
            <p className="hoves-p1-reg text-white text-wrap max-w-[172px]">
              Subscribe to stay informed about our latest work, projects and
              studio news.
            </p>
            <ClickHandIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleSubscribeBlock;
