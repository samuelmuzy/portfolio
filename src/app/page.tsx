import { About } from "@/components/About";
import { Email } from "@/components/Email";
import { Header } from "@/components/Header";
import { Links } from "@/components/Links";
import { Project } from "@/components/Project";
import { Technologies } from "@/components/Technologies";

export default function Home() {
  return (
    <div>
      <About/>
      <Project/>
      <Technologies/>
      <Links/>
      <Email/>
    </div>
  );
}
