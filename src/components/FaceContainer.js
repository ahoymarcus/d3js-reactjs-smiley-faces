 /*
	Using the 'group' SVG element to position the Arc element together with the whole group
*/
const FaceContainer = (props) => (
	 <svg width={props.width} height={props.height}>
  	
   
    <g transform={`translate(${props.centerX}, ${props.centerY})`}>
      {props.children}
    </g>
  </svg>
);


export default FaceContainer;
