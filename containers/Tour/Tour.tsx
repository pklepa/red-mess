import PageHead from '@components/PageHead/PageHead';
import * as React from 'react';
import S from './Tour.styles';
import SiteFooter from '@components/Widgets/SiteFooter/SiteFooter';
import { footerDefaultArgs } from '@components/Widgets/SiteFooter/SiteFooter.args';
import ToBeAnnouncedText from '@img/text-svg/ToBeAnnouncedText.svg';
import SiteNav from '@components/Widgets/SiteNav/SiteNav';
import { siteNavDefaultArgs } from '@components/Widgets/SiteNav/SiteNav.args';
import NoiseOverlayStyles from '@components/NoiseOverlay/NoiseOverlay.styles';

export type TourProps = {};

const Tour: React.FC<TourProps> = () => {
	return (
		<>
			<PageHead
				title="Tour - Red Mess Music"
				description="Red Mess - Tour schedule"
			/>

			<NoiseOverlayStyles.Overlay />

			<S.Wrapper>
				<SiteNav {...siteNavDefaultArgs} title="tour" />

				<S.Content>
					<S.Disclaimer aria-label="To Be Announced">
						<ToBeAnnouncedText />
					</S.Disclaimer>
				</S.Content>

				<SiteFooter {...footerDefaultArgs} />
			</S.Wrapper>
		</>
	);
};

export default Tour;
