import * as React from 'react';
import S from './Home.styles';
import NoiseOverlayStyles from '@components/NoiseOverlay/NoiseOverlay.styles';

import SiteNav from '@components/Widgets/SiteNav/SiteNav';
import { siteNavDefaultArgs } from '@components/Widgets/SiteNav/SiteNav.args';
import SiteFooter from '@components/Widgets/SiteFooter/SiteFooter';
import { footerDefaultArgs } from '@components/Widgets/SiteFooter/SiteFooter.args';

import PageHead from '@components/PageHead/PageHead';
import LandingBanner from '@components/Widgets/LandingBanner/LandingBanner';

import LinkList from '@components/Widgets/LinkList/LinkList';
import { linkListDefaultargs } from '@components/Widgets/LinkList/LinkList.args';
import FullWidthVideo from '@components/Widgets/FullWidthVideo/FullWidthVideo';

export type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
	return (
		<>
			<PageHead
				title="Red Mess Music"
				description="Red's a color vulgar, bright - Home page of Red Mess Music"
			/>

			<NoiseOverlayStyles.Overlay />

			<S.Wrapper>
				<SiteNav {...siteNavDefaultArgs} />

				<S.Content>
					<S.BannerWrapper>
						<LandingBanner />
					</S.BannerWrapper>

					<FullWidthVideo />

					<LinkList {...linkListDefaultargs} />
				</S.Content>

				<SiteFooter {...footerDefaultArgs} />
			</S.Wrapper>
		</>
	);
};

export default Home;
