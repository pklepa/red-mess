import Image from 'next/image';
import * as React from 'react';
import { aboutUsResourceStrings } from './AboutUs.args';
import S from './AboutUs.styles';

import AboutUsBannerImage from 'public/aboutUsBanner.png';
import ImageGallery1 from 'public/gallery-img-1.jpg';
import TextWhoTheFAreRedMess from '@img/text-svg/text-whoTheFAreRedMess.svg';
import Link from 'next/link';
import AnimatedText from '@components/AnimatedText/AnimatedText';
import { useInView } from '@hooks/useInView';

export type AboutUsProps = {
	title: string;
	resourceStrings: typeof aboutUsResourceStrings;
};

const AboutUs: React.FC<AboutUsProps> = ({ title, resourceStrings }) => {
	const [elementRef, inView] = useInView<HTMLDivElement>(
		{ threshold: 0.35 },
		true
	);

	return (
		<S.Container>
			<S.BannerWrapper>
				<Image
					src={AboutUsBannerImage}
					width={1440}
					height={850}
					sizes="100vw"
					alt="Red Mess trio posing. Douglas hand is reaching out to the camera, Lucas holds his hair back."
				/>
			</S.BannerWrapper>

			<AnimatedText preferInViewProps>
				<S.TitleWrapper aria-label={title}>
					<TextWhoTheFAreRedMess />
				</S.TitleWrapper>
			</AnimatedText>

			<S.Content ref={elementRef}>
				<S.Header>
					<AnimatedText inView={inView} preferInViewProps>
						<S.LargeText
							dangerouslySetInnerHTML={{ __html: resourceStrings.basedIn }}
						/>
					</AnimatedText>

					<AnimatedText inView={inView} preferInViewProps reverseDirection>
						<S.LargeText
							dangerouslySetInnerHTML={{ __html: resourceStrings.bornIn }}
						/>
					</AnimatedText>
				</S.Header>

				<S.Inner>
					<S.Description
						dangerouslySetInnerHTML={{ __html: resourceStrings.description }}
					/>

					<S.GalleryImage>
						<Image
							src={ImageGallery1}
							width={1000}
							height={789}
							sizes="100vw"
							alt="Red Mess trio posing on a red background. They are standing with hands in pocket and there's geometric lights projected onto them."
						/>
					</S.GalleryImage>
				</S.Inner>

				<S.CallToActionCollection>
					<S.CTAWrapper>
						<S.CTATitle>SEE US</S.CTATitle>
						<Link href="/tour">
							<S.CTA>TOUR</S.CTA>
						</Link>
					</S.CTAWrapper>

					<S.CTAWrapper>
						<S.CTATitle>SUPORT US</S.CTATitle>
						<Link href="/shop">
							<S.CTA>SHOP</S.CTA>
						</Link>
					</S.CTAWrapper>
				</S.CallToActionCollection>
			</S.Content>
		</S.Container>
	);
};

export default AboutUs;
