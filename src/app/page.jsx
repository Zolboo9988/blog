import { AllPlog } from "@/components/AllPlog";
import { Image } from "@/components/Image";
import { Trending } from "@/components/Trending";

export default async function Home() {
  const result = await fetch("https://dev.to/api/articles");
  const objResult = await result.json();
  return (
    <div className="flex flex-col items-center text-center justify-center ">
      <Image />
      <Trending />
      <AllPlog posts={objResult} />
    </div>
  );
}
