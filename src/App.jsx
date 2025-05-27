import {
  Stage,
  OrbitControls,
  Text3D,
  Center,
  Outlines,
} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

function App() {
  return (
    <div className="h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center">
      <Canvas
        shadows
        gl={{ antialias: true }}
        dpr={[1, 2]}
        camera={{ position: [-5, 2, 10], fov: 60 }}
      >
        <color attach="background" args={['#1a1a1a']} />
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <Stage
          intensity={0.8}
          preset="rembrandt"
          shadows="contact"
          adjustCamera={1.2}
          environment="sunset"
        >
          <Center>
            <Text3D
              bevelEnabled
              bevelSize={0.03}
              bevelThickness={0.1}
              height={0.6}
              lineHeight={0.7}
              letterSpacing={-0.05}
              size={1.8}
              font="/Share_Tech_Mono_Regular.json"
            >
              {`Logan\nHochwald`}
              <meshStandardMaterial color="#0b5626" />
              <Outlines thickness={2} color="#43040b" />
            </Text3D>
          </Center>
        </Stage>
      </Canvas>
    </div>
  );
}

export default App;
