import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Feature from "./components/Feature";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero
        src={"/assets/illustration-intro.png"}
        alt={"Hero image"}
        heading={"All your files in one secure location, accessible anywhere."}
        body={
          "Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers."
        }
        cta={"Get Started"}
      />
      <section className="featureWrapper">
        <Feature
          icon={"/assets/icon-access-anywhere.svg"}
          alt={"Files icon"}
          heading={"Access your files, anywhere"}
          body={
            "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere."
          }
        />
        <Feature
          icon={"/assets/icon-security.svg"}
          alt={"Security icon"}
          heading={"Security you can trust"}
          body={
            "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files."
          }
        />
        <Feature
          icon={"/assets/icon-collaboration.svg"}
          alt={"Collaboration icon"}
          heading={"Real-time collaboration"}
          body={
            "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required."
          }
        />
        <Feature
          icon={"/assets/icon-any-file.svg"}
          alt={"Storage icon"}
          heading={"Store any type of file"}
          body={
            "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared."
          }
        />
      </section>
    </>
  );
}
