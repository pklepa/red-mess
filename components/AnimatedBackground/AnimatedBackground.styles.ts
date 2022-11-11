import { from, Device } from '@helpers/media';
import styled from 'styled-components';

const Container = styled.div`
	position: absolute;
	inset: 0;
	z-index: 0;
	opacity: 0.05;

	&::before,
	&::after {
		content: '';
		position: absolute;
		inset: 0;
		background-repeat: repeat;
		background-size: 50%;
		transform-origin: top left;
		transform: scale(2);
	}

	&::before {
		animation: move-right 30s linear infinite;
		background-image: url('/repeatable-bg-1.svg');
	}

	&::after {
		animation: move-left 30s linear infinite;
		background-image: url('/repeatable-bg-2.svg');
	}

	@keyframes move-right {
		from {
			background-position: 0% 0%;
		}
		to {
			background-position: 200% 0%;
		}
	}

	@keyframes move-left {
		from {
			background-position: 0% 0%;
		}
		to {
			background-position: -200% 0%;
		}
	}

	@media ${from(Device.Tablet)} {
		&::before,
		&::after {
			transform: scale(1);
		}
	}
`;

const AnimatedBackgroundStyles = {
	Container,
};

export default AnimatedBackgroundStyles;
