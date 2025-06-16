import React from 'react';
import { Text as DreiText } from '@react-three/drei';

const Text = () => {
  return (
    <>
    <DreiText
      position={[-3.5, 4.5, 1]}
      rotation={[0,1.85,0]}
      font="/fonts/Bebas_Neue/BebasNeue-Regular.ttf"
      fontSize={3}
      color="#392119"
      anchorX="center"
      anchorY="middle"
      >
      WELCOME
    </DreiText>
        </>
  );
};

export default Text;
