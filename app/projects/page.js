import { Seperator } from "@/components/sections";
import AIProjects from "@/components/sections/ai-projects";
import Projects from "@/components/sections/completed-projects";
import OtherProjects from "@/components/sections/other-projects";
import UtilProjects from "@/components/sections/util-projects";

export const metadata = {
  title: "Derick Dalmolin | Software Engineer & Web Developer",
  description: "A seguir, apresento minhas habilidades e experiência em Engenharia de Software.",
};

export default function ProjectsPage() {
  return (
    <>
      <Projects />
      <Seperator />
      <AIProjects />
      <Seperator />
      <UtilProjects />
      <Seperator />
      <OtherProjects/>
    </>
  );
}
