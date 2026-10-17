import Hero from "@/components/Hero";
import Statement from "@/components/Statement";
import Story from "@/components/Story";
import Breeds from "@/components/Breeds";
import Offers from "@/components/Offers";
import WaitlistSection from "@/components/WaitlistSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Statement />
      <Story />
      <Breeds />
      <Offers />
      <WaitlistSection />
    </>
  );
}
