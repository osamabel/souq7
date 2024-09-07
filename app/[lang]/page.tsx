"use client";
import Hero from "../components/Hero";
import ScrollProgress from "../components/ScrollProgress";
import { useEffect, useState } from "react";
import ContactSideIno from "../components/SideBarInfo/ContactSideIno";
import Footer from "../components/Footer";
import { useGlobalContext } from "../context/GlobalContext";
import Categories from "../components/Categories";
import Map from "../components/Map";

export default function Home() {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set()
  );
  const { isMenuOpen } = useGlobalContext();

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("selectedValue", "0");
    }
  }, []);

  return (
    !isMenuOpen && (
      <main className={`flex flex-col items-center h-screen relative `}>
        <section
          id="hero-section"
          className="min-h-[60vh] sm:min-h-[70vh] lg:min-h-screen flex flex-col items-center justify-center w-full relative"
        >
          <Hero />
          <div className="w-[87%] lg:w-[719px] xl:w-[900px] 2xl:w-[1128px] absolute top-0 h-full flex items-end bg-rced">
            <div className="w-[30px] md:w-[72px] flex flex-col items-center h-[50%] lg:h-[50%] ">
              <img
                style={{ animationDelay: ".6s" }}
                className="w-[10px] md:w-[18px] fade"
                src="/circle.svg"
                alt=""
              />
              <ScrollProgress
                sectionId="hero-section"
                expandedSections={expandedSections}
                setExpandedSections={setExpandedSections}
              />
            </div>
          </div>
        </section>
        <section
          id="category-section"
          className="h-auto flex flex-col items-center justify-center w-full relative"
        >
          <Categories/>
          <div className="w-[87%] lg:w-[719px] xl:w-[900px] 2xl:w-[1128px] absolute top-0 h-full flex items-end">
            <div className="w-[30px] md:w-[72px] fade flex flex-col h-full items-center">
              <ScrollProgress
                sectionId="category-section"
                expandedSections={expandedSections}
                setExpandedSections={setExpandedSections}
              />
            </div>
          </div>
        </section>
        <section
          id="map-section"
          className="h-auto flex flex-col items-center justify-center w-full relative py-[40px]"
        >
          
          <Map/>
          <ContactSideIno
            expandedSections={expandedSections}
            setExpandedSections={setExpandedSections}
            id="map-section"
          />
          {/* <div className="w-[87%] lg:w-[719px] xl:w-[900px] 2xl:w-[1128px] absolute top-0 h-full flex items-end">
            <div className="w-[30px] md:w-[72px] fade flex flex-col h-full items-center">
              <ScrollProgress
                sectionId="map-section"
                expandedSections={expandedSections}
                setExpandedSections={setExpandedSections}
              />
            </div>
          </div> */}
        </section>






        {/* <section
          id="about-section"
          className="h-auto pb-[50px] flex items-start justify-center w-full relative"
        >
          <About />
          <div className="w-[87%] lg:w-[719px] xl:w-[900px] 2xl:w-[1128px] absolute top-0 h-full flex items-end z-[-1]">
            <div className="w-[30px] md:w-[72px] fade flex flex-col h-full items-center">
              <ScrollProgress
                sectionId="about-section"
                expandedSections={expandedSections}
                setExpandedSections={setExpandedSections}
              />
            </div>
          </div>
        </section>

        <section
          id="services-section"
          className="h-auto pb-[50px] flex items-start justify-center w-full relative"
        >
          <Services />
          <div className="w-[87%] lg:w-[719px] xl:w-[900px] 2xl:w-[1128px] absolute top-0 h-full flex items-end z-[-1]">
            <div className="w-[30px] md:w-[72px] fade flex flex-col h-full items-center">
              <ScrollProgress
                sectionId="about-section"
                expandedSections={expandedSections}
                setExpandedSections={setExpandedSections}
              />
            </div>
          </div>
        </section>

        <section
          id="technologies-section"
          className="h-auto pb-[50px] flex items-start justify-center w-full relative"
        >
          <Technologies />
          <div className="w-[87%] lg:w-[719px] xl:w-[900px] 2xl:w-[1128px] absolute top-0 h-full flex items-end z-[-1]">
            <div className="w-[30px] md:w-[72px] fade flex flex-col h-full items-center">
              <ScrollProgress
                sectionId="technologies-section"
                expandedSections={expandedSections}
                setExpandedSections={setExpandedSections}
              />
            </div>
          </div>
        </section>

        <section
          id="contact-section"
          className="h-auto flex items-start justify-center w-full relative bg-primary rounded-t-[20px] z-[20]"
        >
          <Contact />
          <ContactSideIno
            expandedSections={expandedSections}
            setExpandedSections={setExpandedSections}
          />
        </section> */}

        <section
          id="footer-section"
          className="h-auto flex items-start justify-center w-full relative bg-primary"
        >
          <Footer />
        </section>
      </main>
    )
  );
}
