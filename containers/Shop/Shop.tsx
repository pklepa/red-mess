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
import { defaultShopArgs } from './Shop.args';
import DOMPurify from 'isomorphic-dompurify';

type LinkEntry = {
	text: string;
	url: string;
};

export type ShopProps = {
	records: LinkEntry[];
	merch: LinkEntry[];
};

const Shop: React.FC = () => {
	// FIXME: this information should be coming from the CMS
	const { records, merch } = defaultShopArgs;

	return (
		<>
			<PageHead
				title="Shop - Red Mess Music"
				description="Red Mess - Shop schedule"
			/>

			<NoiseOverlayStyles.Overlay />

			<S.Wrapper>
				<SiteNav {...siteNavDefaultArgs} title="shop" />

				<S.Content>
					<S.Inner>
						<S.Section>
							<S.SectionTitle>
								<RecordsText />
							</S.SectionTitle>

							<S.ButtonsList>
								{records.map((record, index) => {
									const sanatisedText = DOMPurify.sanitize(record.text);

									return (
										<S.ExternalLink
											href={record.url}
											target="_blank"
											rel="noopener noreferrer"
											key={`record-${index}`}
										>
											<S.ButtonText
												dangerouslySetInnerHTML={{ __html: sanatisedText }}
											/>
										</S.ExternalLink>
									);
								})}
							</S.ButtonsList>
						</S.Section>

						<S.Section>
							<S.SectionTitle>
								<MerchText />
							</S.SectionTitle>

							<S.ButtonsList>
								{merch.map((entry, index) => {
									const sanatisedText = DOMPurify.sanitize(entry.text);

									return (
										<S.ExternalLink
											href={entry.url}
											target="_blank"
											rel="noopener noreferrer"
											key={`merch-${index}`}
										>
											<S.ButtonText
												dangerouslySetInnerHTML={{ __html: sanatisedText }}
											/>
										</S.ExternalLink>
									);
								})}
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
