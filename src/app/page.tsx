import { About } from "@/components/About";

import { Links } from "@/components/Links";
import { MainSection } from "@/components/MainSection";
import { Project } from "@/components/Project";
import { Technologies } from "@/components/Technologies";

export default function Home() {
  return (
    <div className="flex flex-col">
      <MainSection/>
      <About/>
      <Links/>
      <Project/>
      <Technologies/>
    </div>
  );
}
