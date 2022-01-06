// components
import FaceContainer from './FaceContainer';
import BackgroundFace from './BackgroundFace';
import Eye from './Eye';
import Mouth from './Mouth';



const Face = ({ 
  width, 
  height, 
  centerX, 
  centerY, 
  strokeWidth, 
  eyeOffSetX, 
  eyeOffSetY, 
  eyeRadius, 
  mouthWidth, 
  mouthRadius 
}) => (
    <FaceContainer
     	width={width}
      height={height}
      centerX={centerX}
      centerY={centerY}
    >
      <BackgroundFace 
        radius={centerY - strokeWidth / 2} 
        strokeWidth={strokeWidth} 
      />
      <Eye 
        eyeOffSetX={-eyeOffSetX} 
        eyeOffSetY={-eyeOffSetY}
        eyeRadius={eyeRadius}
      />
      <Eye 
      	eyeOffSetX={eyeOffSetX}
        eyeOffSetY={-eyeOffSetY}
        eyeRadius={eyeRadius}
      />
    	<Mouth 
        mouthWidth={mouthWidth}
        mouthRadius={mouthRadius} 
        />
    </FaceContainer>
);


export default Face;

