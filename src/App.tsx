import "./App.css";
import { Canvas, useThree } from "@react-three/fiber";
import { ContactShadows, Float, OrbitControls } from "@react-three/drei";
import { Kiwi } from "./components/Kiwi";

function Controls() {
  const {
    camera,
    gl: { domElement },
  } = useThree();

  return <OrbitControls args={[camera, domElement]} />;
}

function App() {
  return (
    <div className="App">
      <div style={{ width: "100vw", height: "100vh" }}>
        <Canvas style={{ backgroundColor: "#7fdab8" }}>
          <ambientLight />
          <Float speed={1.4} rotationIntensity={1.5} floatIntensity={2.3}>
            <Kiwi scale={30} />
          </Float>
          <ContactShadows
            position={[0, -0.3, 0]}
            blur={2.5}
            scale={20}
            far={20}
          />
          <Controls />
        </Canvas>
      </div>
    </div>
  );
}

export default App;
