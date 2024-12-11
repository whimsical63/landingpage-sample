import { useGLTF } from '@react-three/drei'

export function ComputerModel(props) {
    const { nodes, materials } = useGLTF('/computer.glb')
    return (
        <group {...props} dispose={null}>
            <group position={[0.121, 0.007, 0]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_6.geometry}
                    material={materials.MacBookPro}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_8.geometry}
                    material={materials.MacBookPro}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_4.geometry}
                material={materials.MacBookPro}
            />
        </group>
    )
}

useGLTF.preload('/computer.glb')
