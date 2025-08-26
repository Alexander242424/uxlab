import React from "react";
import Image from "next/image";
import Background from "../assets/image/Insights/Background.png";

const insightsData = [
  {
    id: 1,
    image: Background,
    title: "Improving User Retention Through UX Design",
    author: "John Doe",
    date: "20 November 2024",
  },
  {
    id: 2,
    image: Background,
    title: "The Future of Mobile App Design Trends",
    author: "Jane Smith",
    date: "18 November 2024",
  },
  {
    id: 3,
    image: Background,
    title: "Improving User Retention Through UX Design",
    author: "Mike Johnson",
    date: "15 November 2024",
  },
  {
    id: 4,
    image: Background,
    title: "Design Thinking in Product Development",
    author: "Sarah Wilson",
    date: "12 November 2024",
  },
];

export default function InsightsSection() {
  return (
    <div className="flex flex-col bg-bg-white mx-10 mb-40">
      <div className="flex py-8 border-t border-border-100 hoves-p1-reg">
        <p className="text-black">Insights, Inspirations</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 w-full">
        {insightsData.map((insight) => (
          <div
            key={insight.id}
            className="flex flex-col gap-3 w-full md:max-w-[334px]"
          >
            <Image src={insight.image} alt={insight.title} />
            <div className="flex flex-col gap-6">
              <p className="text-black hoves-p1-reg">{insight.title}</p>
              <p className="text-black hoves-p3-reg">
                {insight.author} · {insight.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
