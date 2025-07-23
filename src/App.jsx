import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from './Loader';
import Scene from './Scene';

export default function App() {
  return (
    <div className="h-dvh flex flex-col items-center justify-center relative">
      <Canvas
        shadows
        gl={{ antialias: true }}
        dpr={[1, 2]}
        camera={{ position: [-5, 2, 10], fov: 60 }}
      >
        <Suspense fallback={<Loader />}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
