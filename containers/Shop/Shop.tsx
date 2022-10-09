import PageHead from '@components/PageHead/PageHead';
import * as React from 'react';
import S from './Shop.styles';
import SiteFooter from '@components/Widgets/SiteFooter/SiteFooter';
import { footerDefaultArgs } from '@components/Widgets/SiteFooter/SiteFooter.args';
import SiteNav from '@components/Widgets/SiteNav/SiteNav';
import { siteNavDefaultArgs } from '@components/Widgets/SiteNav/SiteNav.args';
import RecordsText from '@img/text-svg/text-records.svg';
import MerchText from '@img/text-svg/text-merch.svg';
import NoiseOverlayStyles from '@components/NoiseOverlay/NoiseOverlay.styles';

export type ShopProps = {
	records: {
		text: string;
		region: string;
		url: string;
	}[];

	merch: {
		email?: boolean;
		instagram?: boolean;
		live?: boolean;
	};
};

const Shop: React.FC = () => {
	// FIXME: this information should be coming from the CMS
	const { records, merch }: ShopProps = {
		records: [
			{
				text: 'Cianeto Discos',
				region: 'Brasil',
				url: '#',
			},
			{
				text: 'All Good Clean Records',
				region: 'Norway',
				url: '#',
			},
			{
				text: 'Stickman Records',
				region: 'Germany',
				url: '#',
			},
		],

		merch: {
			email: true,
			instagram: true,
		},
	};

	return (
		<>
			<PageHead
				title="Shop - Red Mess Music"
				description="Red Mess - Shop schedule"
			/>

			<NoiseOverlayStyles.Overlay />

			<S.Wrapper>
				<SiteNav {...siteNavDefaultArgs} />

				<S.Content>
					<S.Inner>
						<S.Section>
							<S.SectionTitle>
								<RecordsText />
							</S.SectionTitle>

							<S.ButtonsList>
								{records.map((record, index) => (
									<S.ExternalLink
										href={record.url}
										target="_blank"
										rel="noopener noreferrer"
										key={`record-${index}`}
									>
										<strong>{record.text}</strong> ({record.region})
									</S.ExternalLink>
								))}
							</S.ButtonsList>
						</S.Section>

						<S.Section>
							<S.SectionTitle>
								<MerchText />
							</S.SectionTitle>

							<S.ButtonsList>
								{merch.email && (
									<S.Button>
										Contact us via <strong>email</strong>
									</S.Button>
								)}

								{merch.instagram && (
									<S.Button>
										Contact us via <strong>Instagram</strong>
									</S.Button>
								)}
							</S.ButtonsList>
						</S.Section>
					</S.Inner>
				</S.Content>

				<SiteFooter {...footerDefaultArgs} />
			</S.Wrapper>
		</>
	);
};

export default Shop;
