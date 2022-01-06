import React from 'react';
import { range } from 'd3';

// components
import Face from './Face';



/*
	r=height / 2 - stroke-width / 2 
	cx=centerX - eyeOffsetX
	cy=centerX + eyeOffsetX
*/
const width = 160;
const height = 160;

const array = range(6 * 3);


const Smileys = () => array.map((index) => (
		<Face 
			key={index}
      width={width}
      height={height}
      centerX={width / 2}
      centerY={height / 2}
      strokeWidth={6 + Math.random() * 3}
      eyeOffSetX={20 + Math.random() * 9}
      eyeOffSetY={20 + Math.random() * 15}
      eyeRadius={5 + Math.random() * 10}
      mouthWidth={7 + Math.random() * 9}
      mouthRadius={30 + Math.random() * 10}
    />
));


export default Smileys;


