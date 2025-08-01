import { About } from "@/components/About";
import { Email } from "@/components/Email";
import { Links } from "@/components/Links";
import { Project } from "@/components/Project";
import { Technologies } from "@/components/Technologies";

export default function Home() {
  return (
    <div className="flex flex-col">
      <About/>
      <Project/>
      <Technologies/>
      <Links/>
      <Email/>
    </div>
  );
}
