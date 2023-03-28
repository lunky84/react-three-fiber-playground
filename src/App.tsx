import "./App.css";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Float } from "@react-three/drei";
import CameraOrbitController from "./components/CameraOrbitController";

import { useControls, folder } from "leva";
import { Kiwi } from "./components/Kiwi";

function App() {
  const { enableCamera, enableRotate, scale } = useControls({
    "Kiwi options": folder({
      scale: 30,
    }),
    "Camera options": folder({
      enableCamera: { value: true, label: "Camera" },
      enableRotate: { value: true, label: "Rotate" },
    }),
  });

  return (
    <div className="App">
      <div style={{ width: "100vw", height: "100vh" }}>
        <Canvas style={{ backgroundColor: "#7fdab8" }}>
          <CameraOrbitController
            enableCamera={enableCamera}
            enableRotate={enableRotate}
          />
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

export default App;
