import { useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ScrollControls, Scroll, useScroll, useGLTF } from "@react-three/drei";
import { useControls, folder } from "leva";

function ScrollControlsExample(): JSX.Element {
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

  const [page, setPage] = useState(1);

  function setPageNumber(page: number) {
    setPage(page);
  }

  function Model() {
    const gltf = useGLTF("/models/mac/model.gltf");
    gltf.scene.rotation.y = Math.PI;
    gltf.scene.position.y = -1.5;
    gltf.scene.scale.set(2, 2, 2);
    return <primitive object={gltf.scene} />;
  }

  function MyScene() {
    const scroll = useScroll();

    // console.log(page);

    useFrame((state, delta) => {
      // The offset is between 0 and 1, you can apply it to your models any way you like
      // console.log(scroll.offset);

      // if (page > 0) {
      //   scroll.el.scrollTo({ top: (page - 1) * (window.innerHeight * 1.5) });
      // }

      const offset = 1 - scroll.offset;
      state.camera.position.set(
        Math.sin(offset) * -10,
        Math.atan(offset * Math.PI * 2) * 5,
        Math.cos((offset * Math.PI) / 3) * -10
      );
      state.camera.lookAt(0, 0, 0);
    });

    return (
      <>
        <Model />

        <Scroll html>
          <section className="section">
            <h2>My Portfolio</h2>
          </section>
          <section className="section">
            <h2>My projects</h2>
          </section>
          <section className="section">
            <h2>Contact me</h2>
          </section>
        </Scroll>
      </>
    );
  }

  return (
    <div className="App">
      <div className="webgl">
        <div className="navigation">
          <div className="button" onClick={() => setPageNumber(1)}>
            Home
          </div>
          <div className="button" onClick={() => setPageNumber(2)}>
            Projects
          </div>
          <div className="button" onClick={() => setPageNumber(3)}>
            Contact
          </div>
        </div>
        <Canvas camera={{ position: [0, 0, 10] }} gl={{ alpha: true }}>
          <axesHelper args={[5]} />
          <ambientLight intensity={0.5} />
          <ScrollControls pages={3}>
            <MyScene />
          </ScrollControls>
        </Canvas>
      </div>
    </div>
  );
}

export default ScrollControlsExample;
