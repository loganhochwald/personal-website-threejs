import { Text3D, Center, Outlines } from '@react-three/drei';

function Name() {
  return (
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
  );
}

export default Name;
