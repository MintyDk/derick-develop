import { Seperator } from "@/components/sections";

import About from "@/components/sections/about";
import Skills from "@/components/sections/skills";
import FunFacts from "@/components/sections/fun-facts";

export const metadata = {
  title: "Derick Dalmolin | Software Engineer & Web Developer",
  description:
    "Apresento aqui minhas habilidades e minha experiência como Engenheiro de Software.",
};

export default function AboutPage() {
  return (
    <>
      <About />
      <Seperator />

      <Skills />
      <Seperator />

      <FunFacts />
    </>
  );
}
