import Image from 'next/image';
import * as React from 'react';
import S from './LandingBanner.styles';
import FeaturedImage from 'public/landingBannerFeaturedImage.png';
import FeaturedImageMobile from 'public/landingBannerFeaturedImage_mobile.png';
import RedMessText from '@img/text-svg/RedMess.svg';

export type LandingBannerProps = {};

const LandingBanner: React.FC<LandingBannerProps> = () => {
	return (
		<S.Container>
			<S.FeaturedImage>
				<Image
					src={FeaturedImage}
					width={1920}
					height={1143}
					layout="responsive"
				/>
			</S.FeaturedImage>

			<S.FeatureMobileImage>
				<Image
					src={FeaturedImageMobile}
					width={800}
					height={955}
					layout="responsive"
				/>
			</S.FeatureMobileImage>

			{/* TODO: Animate text using Lottie? */}
			<S.RedMessTitle aria-label="Red Mess">
				<RedMessText />
			</S.RedMessTitle>
		</S.Container>
	);
};

export default LandingBanner;
