import { from, Device, until } from '@helpers/media';
import styled from 'styled-components';

const Container = styled.div`
	position: relative;
	z-index: 1;
	margin-bottom: 60px;
	width: 100%;
	/* max-height: 800px; */
	background: radial-gradient(circle at center, #d56e75 0%, #8d303c 80%);
`;

const FeaturedImage = styled.div`
	display: block;
	width: 100%;

	img {
		width: 100%;
	}

	@media ${until(Device.Tablet)} {
		display: none !important;
	}
`;

const FeatureMobileImage = styled.div`
	display: block;
	width: 100%;

	@media ${from(Device.Tablet)} {
		display: none;
	}
`;

const RedMessTitle = styled.div`
	position: absolute;
	left: 50%;
	bottom: 0;
	transform: translateX(-50%) translateY(10%);
	z-index: 2;
	width: 80%;
	max-width: 900px;
	opacity: 0.85;

	svg {
		width: 100%;
	}
`;

const LandingBannerStyles = {
	Container,
	FeaturedImage,
	FeatureMobileImage,
	RedMessTitle,
};

export default LandingBannerStyles;
