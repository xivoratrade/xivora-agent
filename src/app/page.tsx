import Hero from "@/components/Hero";
import Features from "@/components/Features";
import TokenScanner from "@/components/TokenScanner";
import BotCard from "@/components/BotCard";
import PortfolioOverview from "@/components/PortfolioOverview";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <TokenScanner />
      <BotCard />
      <PortfolioOverview />
    </>
  );
}
