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
			<S.FeaturedImageWrapper>
				<S.AnimatedBackground />

				<Image
					src={FeaturedImage}
					width={1920}
					height={1143}
					layout="responsive"
					alt="Red Mess Trio posing. Tiago is standing in to the left looking towards the horizon. Douglas is standing to the right wearing a cap with the saying 'Fck your bad vibes'. Lucas is sitting in the centre, his long hair thrown over his chest."
				/>
			</S.FeaturedImageWrapper>

			<S.FeatureMobileImage>
				<S.AnimatedBackground />

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
