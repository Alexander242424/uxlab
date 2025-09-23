const ArticleNavigation = () => {
  const navigationItems = [
    "Being in the world — not just behind it",
    "Output follows input",
    "Taste and intuition are cumulative",
    "Sharing, we make culture",
    "Keep the door open"
  ];

  return (
    <div className="fixed left-[40px] top-72.5 w-[280px] h-screen overflow-y-auto">
      <div className="flex flex-col pt-[48px]">
        {navigationItems.map((item, index) => (
          <div key={index} className="flex border-l-[1px] border-l-black pl-4 py-2">
            <p className="hoves-p1-reg">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleNavigation;