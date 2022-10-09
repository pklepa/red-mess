import { zIndex } from '@helpers/global';
import styled from 'styled-components';

const Overlay = styled.div`
	pointer-events: none;
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	z-index: ${zIndex.noise};
	background-image: url('/Noise.png');
	background-repeat: repeat;

	/* filter: invert(1);
	opacity: 0.075; */
	opacity: 0.3;
`;

const NoiseOverlayStyles = {
	Overlay,
};

export default NoiseOverlayStyles;
