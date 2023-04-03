import { Canvas } from "@react-three/fiber";
import { ScrollControls, Scroll } from "@react-three/drei";

import { useControls, folder } from "leva";

function ScrollControlsExample() {
  const { damping } = useControls({
    "Scroll options": folder({
      damping: {
        value: 0.1,
        min: 0,
        max: 0.5,
        step: 0.1,
      },
    }),
  });

  return (
    <div className="App">
      <div style={{ width: "100vw", height: "100vh" }}>
        <Canvas
          style={{ backgroundColor: "#f4a1f1" }}
          camera={{ position: [0, -1, 5] }}
        >
          <axesHelper args={[5]} />

          <ScrollControls pages={3} damping={damping}>
            {/* Canvas contents in here will *not* scroll, but receive useScroll! */}

            <Scroll>{/* Canvas contents in here will scroll along */}</Scroll>
            <Scroll html>
              {/* DOM contents in here will scroll along */}
              <h1>html in here (optional)</h1>
              <h1 style={{ top: "100vh", position: "absolute" }}>
                second page
              </h1>
              <h1 style={{ top: "200vh", position: "absolute" }}>third page</h1>
            </Scroll>
          </ScrollControls>
        </Canvas>
      </div>
    </div>
  );
}

export default ScrollControlsExample;
