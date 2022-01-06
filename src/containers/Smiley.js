import React from 'react';

// components
import Face from './Face';



/*
	r=height / 2 - stroke-width / 2 
	cx=centerX - eyeOffsetX
	cy=centerX + eyeOffsetX
*/
const width = 960;
const height = 500;

const Smiley = () => (
	<Face 
		width={width}
		height={height}
		centerX={width / 2}
		centerY={height / 2}
		strokeWidth={20}
		eyeOffSetX={90}
		eyeOffSetY={100}
		eyeRadius={40}
		mouthWidth={20}
		mouthRadius={140}
	/>
);


export default Smiley;

