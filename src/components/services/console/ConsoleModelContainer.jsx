import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { ConsoleModel } from "./ConsoleModel";
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";

export default function ConsoleModelContainer() {
    return (
        // <Canvas>
        //     <Suspense fallback="loading...">
        //         {/*<Stage environment="night" intensity={0.5}>*/}
        //             <ConsoleModel />
        //         {/*</Stage>*/}
        //         <OrbitControls enableZoom={false} autoRotate/>
        //         <PerspectiveCamera position={[-1,0,1.8]} zoom={0.8} makeDefault/>
        //     </Suspense>
        // </Canvas>

        <Canvas position>
            <Suspense fallback="loading...">
                {/* 3D Model */}
                <ConsoleModel scale={2} />

                {/* Lighting Setup */}
                <ambientLight intensity={0.5} /> {/* Increased intensity for overall brightness */}
                <hemisphereLight
                    skyColor={"white"} /* Light from above */
                    groundColor={"lightblue"} /* Subtle bounce light */
                    intensity={5} /* Adds natural lighting balance */
                />
                <directionalLight
                    castShadow
                    position={[5, 10, 5]} /* Primary light source */
                    intensity={1.5} /* Increased brightness */
                />

                {/* Camera Controls */}
                <OrbitControls enableZoom={false} autoRotate />
                <PerspectiveCamera position={[-3, 1, 1.8]} zoom={1} makeDefault />
            </Suspense>
        </Canvas>



    );
}