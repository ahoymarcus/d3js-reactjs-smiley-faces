

const Eye = ({ eyeOffSetX, eyeOffSetY, eyeRadius }) => (
	<circle
    /*cx={centerX - eyeOffSetX}
    cy={centerY - eyeOffSetY}*/
    cx={eyeOffSetX}
    cy={eyeOffSetY}
    r={eyeRadius}
  />
);


export default Eye;

