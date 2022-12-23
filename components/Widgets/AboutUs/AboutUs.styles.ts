import { brand } from '@helpers/brand';
import fonts from '@helpers/fonts';
import { from, Device, until } from '@helpers/media';
import styled from 'styled-components';

const Container = styled.div`
	width: 100%;
	background: linear-gradient(
		180deg,
		${brand.white} 150px,
		${brand.black} 150px
	);
	padding-bottom: 40px;
`;

const BannerWrapper = styled.div`
	width: 100%;
	margin-bottom: 16px;

	img {
		width: 100%;
	}
`;

const TitleWrapper = styled.h2`
	@media ${until(Device.Mobile)} {
		> svg {
			height: auto;
			width: 100%;
		}
	}

	display: flex;
	justify-content: center;

	> svg {
		height: 46px;
	}

	@media ${from(Device.TabletLarge)} {
		> svg {
			height: 64px;
		}
	}

	@media ${from(Device.Desktop)} {
		> svg {
			height: 72px;
		}
	}
`;

const Content = styled.div`
	padding: 40px 24px 0;
	font-size: 16px;
	line-height: 1.3em;

	@media ${from(Device.TabletLarge)} {
		padding: 40px 48px 0;
	}
`;

const Header = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
	margin-bottom: 40px;
`;

const LargeText = styled.h4`
	text-transform: uppercase;
	text-align: center;
	font-size: 21px;
	width: 100%;

	strong {
		${fonts.exo2.bold};
	}

	&:first-child {
		padding-bottom: 8px;
	}

	&:not(:first-child) {
		padding-top: 8px;
		border-top: 2px solid ${brand.red};
	}

	@media ${from(Device.TabletLarge)} {
		font-size: 24px;
	}
`;

const Inner = styled.div`
	display: flex;
	flex-direction: column;
	gap: 24px;
	margin-bottom: 40px;

	@media ${from(Device.TabletLarge)} {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}

	@media ${from(Device.DesktopSmall)} {
		grid-template-columns: 2fr 3fr;
	}
`;

const Description = styled.p`
	font-size: 18px;
	line-height: 2em;
	position: relative;
	z-index: 1;

	.highlight {
		background-color: ${brand.red};
	}
`;

const GalleryImage = styled.div`
	margin: 0 -24px;

	img {
		width: 100%;
	}

	@media ${from(Device.TabletLarge)} {
		margin: 0;
	}
`;

const CallToActionCollection = styled.div`
	display: flex;
	flex-direction: column;
	gap: 32px;
	margin: 0 -24px;
	overflow: hidden;

	@media ${from(Device.TabletLarge)} {
		margin: 0;
		flex-direction: row;

		position: relative;
		z-index: 1;

		&::after {
			content: '';
			position: absolute;
			z-index: -1;
			left: 50%;
			top: 72%;
			width: 100vw;
			height: 2px;
			transform: translate(-50%, -50%);
			background-color: ${brand.white};
		}
	}
`;

const CTAWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	gap: 8px;
`;

const CTATitle = styled.strong`
	display: block;
	${fonts.exo2.bold};
	color: ${brand.red};
	font-size: 21px;
	letter-spacing: 8px;
	text-align: center;
`;

const CTA = styled.span`
	${fonts.exo2.bold};
	background-color: ${brand.white};
	border-radius: 4px;
	color: ${brand.black};
	display: grid;
	font-size: 18px;
	letter-spacing: 8px;
	padding: 8px 16px;
	place-items: center;
	text-align: center;
	text-decoration: none;
	text-transform: uppercase;

	cursor: pointer;

	width: 100%;
	max-width: 400px;

	position: relative;
	z-index: 1;

	&::after {
		content: '';
		position: absolute;
		z-index: -1;
		left: 50%;
		top: 50%;
		width: 100vw;
		height: 2px;
		transform: translate(-50%, -50%);
		background-color: ${brand.white};
	}

	@media ${from(Device.TabletLarge)} {
		&::after {
			display: none;
		}
	}
`;

const AboutUsStyles = {
	Container,
	BannerWrapper,
	TitleWrapper,
	Content,
	Header,
	LargeText,
	Inner,
	Description,
	GalleryImage,
	CallToActionCollection,
	CTAWrapper,
	CTATitle,
	CTA,
};

export default AboutUsStyles;
