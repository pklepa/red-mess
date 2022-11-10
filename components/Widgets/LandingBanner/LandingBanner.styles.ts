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

const FeaturedImage = styled.div`
	display: block;
	width: 100%;
	background: radial-gradient(circle at center, #d56e75 0%, #8d303c 80%);

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
	background: radial-gradient(circle at center, #d56e75 0%, #8d303c 80%);
	padding-top: 20vh;

	@media ${from(Device.Tablet)} {
		display: none;
	}
`;

const RedMessTitle = styled.div`
	padding: 0 16px;
	transform: translateY(-10%);
	position: sticky;
	bottom: 0;

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
		max-width: 900px;
		opacity: 0.85;

		svg {
			width: 100%;
		}
	}
`;

const LandingBannerStyles = {
	Container,
	FeaturedImage,
	FeatureMobileImage,
	RedMessTitle,
};

export default LandingBannerStyles;
