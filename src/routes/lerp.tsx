import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, Float } from "@react-three/drei";
import { Vector3 } from "three";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useControls, folder } from "leva";
import { Kiwi } from "../components/Kiwi";

function Lerp() {
  const { scale } = useControls({
    "Kiwi options": folder({
      scale: 30,
    }),
  });

  // Prevents over-scroll and bounce-back scroll behavior
  ScrollTrigger.normalizeScroll(true); // enable

  const vec = new Vector3();

  function Rig() {
    return useFrame(({ camera, mouse }) => {
      vec.set(mouse.x * 0.3, mouse.y * 0.2, camera.position.z);
      camera.position.lerp(vec, 0.025);
    });
  }

  return (
    <div className="App">
      <div style={{ width: "100vw", height: "100vh" }}>
        <Canvas
          style={{ backgroundColor: "#d4ef68" }}
          camera={{ position: [0, -1, 5] }}
        >
          <axesHelper args={[5]} />
          <Rig />
          <ambientLight />
          <Float speed={1.4} rotationIntensity={1.5} floatIntensity={2.3}>
            <Kiwi scale={scale} />
          </Float>
          <ContactShadows
            position={[0, -0.3, 0]}
            blur={2.5}
            scale={20}
            far={20}
          />
        </Canvas>
      </div>
    </div>
  );
}

export default Lerp;
