import { Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Name from './Name';
import Logos from './Logos';
import Loading from './Loading';
import { useState, useEffect } from 'react';
import { useProgress } from '@react-three/drei';

function App() {
  const { active, progress } = useProgress();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!active && progress === 100) {
      const timeout = setTimeout(() => setIsLoaded(true), 300);
      return () => clearTimeout(timeout);
    }
  }, [active, progress]);

  return (
    <div className="h-dvh bg-bg-neutral-900 flex flex-col items-center justify-center relative">
      {!isLoaded && <Loading />}
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
  );
}

export default App;