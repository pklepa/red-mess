import { brand } from '@helpers/brand';
import fonts from '@helpers/fonts';
import { until, Device, from } from '@helpers/media';
import { scaleFadeIn, verticalFadeIn } from '@helpers/variants';
import { m } from 'framer-motion';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 40px;
	margin-bottom: 64px;
	overflow: hidden;

	@media ${from(Device.TabletLarge)} {
		margin-bottom: 80px;
	}
`;

const CarouselWrapper = styled(m.div).attrs(
	({ inView }: { inView: boolean }) => ({
		initial: 'hidden',
		animate: inView ? 'visible' : 'hidden',
		variants: scaleFadeIn(1.1),
	})
)<{ inView: boolean }>`
	overflow: hidden;
	padding: 0 24px;
`;

const Carousel = styled.div`
	.embla__container {
		display: flex;
	}
`;

const ItemWrapper = styled.div`
	aspect-ratio: 1 / 1;

	flex: 0 0 100%;
	margin-left: 8px;
	margin-right: 16px;
	max-width: 400px;
	background-color: ${brand.black};
	position: relative;
	overflow: hidden;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	@media ${until(Device.Tablet)} {
		opacity: 0.5;
		transform: scale(0.8) translateX(80px);
		transition: transform 0.3s ease, opacity 0.3s ease,
			background-color 0.3s ease;

		&.is-selected {
			transform: scale(1);
			opacity: 1;
			z-index: 2;
		}

		.is-selected + & {
			transform: scale(0.8) translateX(-80px);
		}
	}
`;

const ItemOverlay = styled.div`
	position: absolute;
	inset: 0;
	background: linear-gradient(0deg, ${brand.black} 5%, ${brand.black}00 70%);

	display: flex;
	align-items: flex-end;
	justify-content: center;
	gap: 6px;
	padding: 16px;
	flex-wrap: wrap;

	@media (hover: hover) or (pointer: fine) {
		transition: opacity 0.35s ease;
		opacity: 0;

		${() => ItemOverlayContent} {
			transition: opacity 0.35s ease, transform 0.35s ease;
			opacity: 0;
			transform: translateY(20px);
		}

		&:hover {
			opacity: 1;

			${() => ItemOverlayContent} {
				transform: none;
				opacity: 1;
			}
		}
	}
`;

const ItemOverlayContent = styled.p`
	color: ${brand.white};

	strong {
		${fonts.exo2.bold};
	}
`;

const IframeWrapper = styled(m.div).attrs(
	({ inView }: { inView: boolean }) => ({
		initial: 'hidden',
		animate: inView ? 'visible' : 'hidden',
		variants: verticalFadeIn(30),
	})
)<{ inView: boolean }>`
	width: 100%;
	min-height: 406px;
	padding: 24px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const PublishedStuffStyles = {
	CarouselWrapper,
	Container,
	Carousel,
	ItemWrapper,
	ItemOverlay,
	ItemOverlayContent,
	IframeWrapper,
};

export default PublishedStuffStyles;
