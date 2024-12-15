import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { MugModel } from "./MugModel";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import {ConsoleModel} from "../console/ConsoleModel.jsx";

const MugModelContainer = () => {
    return (
        // <Canvas>
        //     <Suspense fallback="loading...">
        //         {/*<Stage environment="night" intensity={10}>*/}
        //             <MugModel />
        //         {/*</Stage>*/}
        //         <OrbitControls enableZoom={false} autoRotate />
        //         <PerspectiveCamera position={[0, -1, 2]} zoom={0.7} makeDefault />
        //     </Suspense>
        // </Canvas>

        <Canvas position>
            <Suspense fallback="loading...">
                {/* 3D Model */}
                <MugModel scale={0.1} />

                {/* Lighting Setup */}
                <ambientLight intensity={0.2} /> {/* Increased intensity for overall brightness */}
                <hemisphereLight
                    skyColor={"white"} /* Light from above */
                    groundColor={"lightblue"} /* Subtle bounce light */
                    intensity={5} /* Adds natural lighting balance */
                />

                {/* Camera Controls */}
                <OrbitControls enableZoom={false} autoRotate />
                <PerspectiveCamera position={[-3, 1, 1.8]} zoom={1} makeDefault />
            </Suspense>
        </Canvas>
    );
};

export default MugModelContainer;