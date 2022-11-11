import { brand } from '@helpers/brand';
import { from, Device, until } from '@helpers/media';
import styled from 'styled-components';

const Container = styled.div`
	position: relative;
	z-index: 1;
	padding-bottom: 60px;
	width: 100%;
	background-color: ${brand.black};
`;

const FeaturedImageWrapper = styled.div`
	display: block;
	width: 100%;
	background: radial-gradient(circle at center, #d56e75 0%, #8d303c 80%);
	position: relative;
	z-index: 1;

	img {
		width: 100%;
	}

	@media ${until(Device.Tablet)} {
		display: none !important;
	}
`;

const AnimatedBackground = styled.div`
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
		&::before {
			animation: move-right 30s linear infinite;
			background-size: 50%;
			transform: scale(1);
		}

		&::after {
			animation: move-left 30s linear infinite;
			background-size: 50%;
			transform: scale(1);
		}
	}
`;

const FeatureMobileImage = styled.div`
	display: block;
	width: 100%;
	background: radial-gradient(circle at center, #d56e75 0%, #8d303c 80%);
	padding-top: 20vh;
	position: relative;
	z-index: 1;
	overflow: hidden;

	@media ${from(Device.Tablet)} {
		display: none;
	}
`;

const RedMessTitle = styled.div`
	padding: 0 16px;
	transform: translateY(-10%);
	position: sticky;
	bottom: 0;
	z-index: 2;

	svg {
		width: 100%;
	}

	@media ${from(Device.TabletLarge)} {
		position: absolute;
		left: 50%;
		bottom: 0;
		transform: translateX(-50%) translateY(10%);
		z-index: 2;
		width: 80%;
		max-width: 1200px;
		opacity: 0.85;

		svg {
			width: 100%;
		}
	}
`;

const LandingBannerStyles = {
	Container,
	FeaturedImageWrapper,
	FeatureMobileImage,
	RedMessTitle,
	AnimatedBackground,
};

export default LandingBannerStyles;
