// components
import FaceContainer from './FaceContainer';
import BackgroundFace from '../components/BackgroundFace';
import Eye from '../components/Eye';
import Mouth from '../components/Mouth';



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

