import * as React from 'react';
import S from './Home.styles';
import NoiseOverlayStyles from '@components/NoiseOverlay/NoiseOverlay.styles';

import SiteNav from '@components/Widgets/SiteNav/SiteNav';
import { siteNavDefaultArgs } from '@components/Widgets/SiteNav/SiteNav.args';
import SiteFooter from '@components/Widgets/SiteFooter/SiteFooter';
import { footerDefaultArgs } from '@components/Widgets/SiteFooter/SiteFooter.args';

import PageHead from '@components/PageHead/PageHead';
import LandingBanner from '@components/Widgets/LandingBanner/LandingBanner';

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
					<LandingBanner />
				</S.Content>

				<SiteFooter {...footerDefaultArgs} />
			</S.Wrapper>
		</>
	);
};

export default Home;
