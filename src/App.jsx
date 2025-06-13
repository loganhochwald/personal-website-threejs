import {
  Stage,
} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Name from './Name';
import Logos from './Logos';

function App() {
  return (
    <div className="h-dvh bg-bg-neutral-900 flex flex-col bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center">
      <Canvas
        shadows
        gl={{ antialias: true }}
        dpr={[1, 2]}
        camera={{ position: [-5, 2, 10], fov: 60 }}
      >
        <color attach="background" args={['#171717']} />
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <Logos />
        <Stage
          intensity={0.8}
          preset="rembrandt"
          shadows="contact"
          adjustCamera={1.2}
          environment="sunset"
        >
          <Name />
        </Stage>
      </Canvas>
    </div>
  );}

export default App;
