import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Feature from "./components/Feature";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <section className="featureWrapper">
        <Feature
          icon={"src/assets/icon-access-anywhere.svg"}
          alt={"Files icon"}
          heading={"Access your files, anywhere"}
          body={
            "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere."
          }
        />
        <Feature
          icon={"src/assets/icon-security.svg"}
          alt={"Security icon"}
          heading={"Security you can trust"}
          body={
            "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files."
          }
        />
        <Feature
          icon={"src/assets/icon-collaboration.svg"}
          alt={"Collaboration icon"}
          heading={"Real-time collaboration"}
          body={
            "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required."
          }
        />
        <Feature
          icon={"src/assets/icon-any-file.svg"}
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
