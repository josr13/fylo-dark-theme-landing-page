import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Feature from "./components/Feature";
import Info from "./components/Info";
import Testimonials from "./components/Testimonials";
import Signup from "./components/Signup";

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
      <Info
        src={"/assets/illustration-stay-productive.png"}
        alt={"Stay productive illustration"}
        heading={"Stay productive, wherever you are"}
        body1={
          "Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs."
        }
        body2={
          "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required."
        }
        more={"See how Fylo works ➡"}
      />
      <section className="testimWrapper">
        <img
          src="/assets/bg-quotes.png"
          alt="Quote icon"
          className="quote-icon"
        />
        <Testimonials
          quote={
            "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
          }
          picture={"/assets/profile-1.jpg"}
          customer={"Satish Patel"}
          position={"Founder & CEO, Huddle"}
        />
        <Testimonials
          quote={
            "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
          }
          picture={"/assets/profile-2.jpg"}
          customer={"Bruce McKenzie"}
          position={"Founder & CEO, Huddle"}
        />
        <Testimonials
          quote={
            "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
          }
          picture={"/assets/profile-3.jpg"}
          customer={"Iva Boyd"}
          position={"Founder & CEO, Huddle"}
        />
      </section>
      <Signup
        header={"Get early access today"}
        body={
          "It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you."
        }
        input={"email@example.com"}
        button={"Get Started For Free"}
      />
    </>
  );
}
