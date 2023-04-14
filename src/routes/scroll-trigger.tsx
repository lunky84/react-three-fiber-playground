import React, { useRef, useEffect } from "react";
import { useControls, folder } from "leva";
import { Mac } from "../components/Mac";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function ScrollTriggerExample(): JSX.Element {
  const { duration } = useControls({
    "Navigation options": folder({
      duration: {
        value: 0.5,
        min: 0,
        max: 2,
        step: 0.5,
      },
    }),
  });

  // Prevents over-scroll and bounce-back scroll behavior
  ScrollTrigger.normalizeScroll(true); // enable

  const home = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (["home", "projects", "contact"].includes(hash)) {
      goToSection(hash);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const { target } = entry;
            history.pushState(null, "", "#" + target.id);
          }
        });
      },
      { threshold: 0.5 } // trigger the callback when 50% of the section is in view
    );

    if (home.current) {
      observer.observe(home.current);
    }
    if (projects.current) {
      observer.observe(projects.current);
    }
    if (contact.current) {
      observer.observe(contact.current);
    }

    return () => observer.disconnect();
  }, []);

  function goToSection(section: string) {
    gsap.to(window, {
      duration: duration,
      scrollTo: `#${section}`,
      ease: "power2.inOut",
    });
    history.pushState(null, "", "#" + section);
  }

  const ref = useRef<HTMLDivElement>(null);

  return (
    <div className="scrollTrigger">
      <div className="navigation">
        <div className="button" onClick={() => goToSection("home")}>
          Home
        </div>
        <div className="button" onClick={() => goToSection("projects")}>
          Projects
        </div>
        <div className="button" onClick={() => goToSection("contact")}>
          Contact
        </div>
      </div>

      <div className="webgl">
        <Canvas gl={{ alpha: true }}>
          <PerspectiveCamera makeDefault position={[0, 3, 15]} fov={50} />
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Mac position={[0, 0, 0]} scale={[2, 2, 2]} />
        </Canvas>
      </div>

      <div id="scroll-animation-wrapper">
        <section id="home" ref={home}>
          <h1>Home</h1>
        </section>
        <section id="projects" ref={projects}>
          <h1>Projects</h1>
        </section>
        <section id="contact" ref={contact}>
          <h1>Contact</h1>
        </section>
      </div>
    </div>
  );
}

export default ScrollTriggerExample;
