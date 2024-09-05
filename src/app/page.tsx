import Button from "@/components/Button";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import MakeConversation from "@/components/MakeConversation";
import NavBar from "@/components/NavBar";
import SignUp from "@/components/SignUp";

import Features from "@/components/Features";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <MakeConversation />
      <FAQ />
      <SignUp />
    </main>
  );
}
