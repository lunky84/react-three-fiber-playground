import { useControls, folder } from "leva";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Prevents over-scroll and bounce-back scroll behavior
ScrollTrigger.normalizeScroll(true); // enable

function ScrollTriggerExample(): JSX.Element {
  const { duration } = useControls({
    "Scroll options": folder({
      duration: {
        value: 0.5,
        min: 0,
        max: 2,
        step: 0.5,
      },
    }),
  });

  function goToSection(section: string) {
    gsap.to(window, {
      duration: duration,
      scrollTo: `#${section}`,
      ease: "power2.inOut",
    });
  }

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

      <section id="home">
        <h1>Home</h1>
      </section>
      <section id="projects">
        <h1>Projects</h1>
      </section>
      <section id="contact">
        <h1>Contact</h1>
      </section>
    </div>
  );
}

export default ScrollTriggerExample;
