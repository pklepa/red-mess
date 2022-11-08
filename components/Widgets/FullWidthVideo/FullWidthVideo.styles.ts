import { brand } from '@helpers/brand';
import { zIndex } from '@helpers/global';
import { Device, from } from '@helpers/media';
import { scaleFadeIn, staggerChildren } from '@helpers/variants';
import { m } from 'framer-motion';
import styled from 'styled-components';

const Container = styled.section`
	width: 100%;
	background: linear-gradient(0deg, ${brand.white} 20%, ${brand.black} 40%);
`;

const Modal = styled(m.div).attrs({
	initial: 'hidden',
	animate: 'visible',
	exit: 'hidden',
	variants: staggerChildren(0.2),
})`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	z-index: ${zIndex.modal};
	padding: 24px;

	display: grid;
	place-items: center;

	@media ${from(Device.TabletLarge)} {
		padding: 64px 48px;
	}
`;

const ModalBackground = styled(m.div).attrs({ variants: scaleFadeIn(1) })`
	position: absolute;
	inset: 0;
	z-index: -1;
	background-color: rgba(0 0 0 / 95%);
	backdrop-filter: blur(2px);
`;

const ModalInner = styled(m.div).attrs({ variants: scaleFadeIn(0.9) })`
	position: relative;
	aspect-ratio: 16 / 9;
	overflow: hidden;
	width: 100%;
	max-width: 1600px;

	video,
	iframe {
		position: absolute;
	}
`;

const PreviewWrapper = styled(m.div)`
	overflow: hidden;
	margin-bottom: 48px;
`;

const PreviewInner = styled(m.div)`
	position: relative;
	aspect-ratio: 1;
	overflow: hidden;
	background: linear-gradient(90deg, ${brand.red} 0%, ${brand.black} 100%);

	img,
	video {
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		object-fit: cover;
		object-position: center;
	}

	@media ${from(Device.Tablet)} {
		aspect-ratio: 16 / 9;
	}
`;

const PlayButtonWrapper = styled.div`
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	z-index: 2;
`;

const PlayButton = styled(m.button).attrs({ type: 'button' })`
	width: 80px;
	height: 80px;
	background-color: transparent;
	border: 2px solid ${brand.white};
	border-radius: 50%;

	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	transition: width 0.35s ease, height 0.35s ease;

	&::before {
		content: '';
		position: absolute;
		inset: -8px;
		background: transparent;
		border: 2px solid ${brand.white};
		border-top-color: transparent;
		border-bottom-color: transparent;
		border-radius: 50%;
		transform: rotate(45deg);
		opacity: 0.5;
		animation: detailRotate 1s ease infinite;
		transition: opacity 0.35s ease-out;

		@keyframes detailRotate {
			from {
				transform: rotate(45deg);
			}

			to {
				transform: rotate(405deg);
			}
		}
	}

	&::after {
		content: '';
		width: 0;
		height: 0;
		border-top: 12px solid transparent;
		border-bottom: 12px solid transparent;

		border-left: 24px solid ${brand.white};
		margin-left: 5px;
	}

	&:hover {
		width: 112px;
		height: 112px;

		&::before {
			opacity: 0;
		}
	}

	@media ${from(Device.TabletLarge)} {
		width: 100px;
		height: 100px;

		&::before {
			inset: -12px;
		}

		&::after {
			border-top: 18px solid transparent;
			border-bottom: 18px solid transparent;
			border-left: 30px solid ${brand.white};
		}
	}
`;

const FullWidthVideoStyles = {
	Container,
	Modal,
	ModalBackground,
	ModalInner,
	PreviewWrapper,
	PreviewInner,
	PlayButtonWrapper,
	PlayButton,
};

export default FullWidthVideoStyles;
