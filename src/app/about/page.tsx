import Button from "@/components/Button";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import MakeConversation from "@/components/MakeConversation";
import SignUp from "@/components/SignUp";

export default function Home() {
  return (
    <main>
      <MakeConversation />
      <FAQ />
      <SignUp />
    </main>
  );
}
