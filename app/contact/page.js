import { Seperator } from "@/components/sections";

import Contact from "@/components/sections/contact";
import AllMedia from "@/components/sections/all-media";

export const metadata = {
  title: "Derick Dalmolin | Software Engineer & Web Developer",
  description:
    "Aqui estão minhas redes sociais, onde você poderá entrar em contato.",
};

export default function ContactPage() {
  return (
    <>
      <Contact />
      <Seperator />
      <AllMedia />
    </>
  );
}
