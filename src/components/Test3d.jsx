import {Canvas} from "@react-three/fiber";
import {MeshDistortMaterial, OrbitControls, Sphere} from "@react-three/drei";


const Test3D = () => {
    return (
        <section
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Canvas>
                <mesh>
                    <Sphere args={[1, 100, 200]} scale={2.4}>
                        {/*<meshStandardMaterial color="red"/>*/}
                        <MeshDistortMaterial
                            color="#DB8B9B"
                            attach="material"
                            distort={0.5}
                            speed={2}/>
                    </Sphere>
                    <ambientLight intensity={2}/>
                    <directionalLight position={[1, 2, 3]}/>
                    {/*<OrbitControls enableZoom={false}/>*/}
                </mesh>
            </Canvas>


        </section>
    )
}
export default Test3D
