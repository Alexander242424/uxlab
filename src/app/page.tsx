import VideoPlayer from "@/components/VideoPlayer";


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold underline">Hello World</h1>
      <div className="w-full max-w-2xl">
        <VideoPlayer src="/video/createsite.mp4" />
      </div>
    </div>
  );
}
