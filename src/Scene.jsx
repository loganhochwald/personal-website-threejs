import { Stage } from '@react-three/drei';
import Name from './Name';
import Logos from './Logos';

export default function Scene() {
    return (
      <>
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
      </>
    );
  }