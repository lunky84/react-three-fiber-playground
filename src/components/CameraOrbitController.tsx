import { useEffect, useRef } from "react";
import { useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const CameraOrbitController = (props: any) => {
  const { camera, gl } = useThree();

  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);
    controls.enabled = props.enableCamera;
    // controls.enableDamping = true;
    // controls.enablePan = true;
    controls.enableRotate = props.enableRotate;
    // controls.enableZoom = true;
    return () => {
      controls.dispose();
    };
  }, [camera, gl, props]);
  return null;
};

export default CameraOrbitController;
