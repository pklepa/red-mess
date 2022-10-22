import * as React from 'react';
import S from './LinkList.styles';

import TextFindUsOn from '@img/text-svg/text-findUsOn.svg';
import TextAmazon from '@img/text-svg/text-amazon.svg';
import TextApple from '@img/text-svg/text-apple.svg';
import TextBandcamp from '@img/text-svg/text-bandcamp.svg';
import TextDeezer from '@img/text-svg/text-deezer.svg';
import TextInstagram from '@img/text-svg/text-instagram.svg';
import TextSpotify from '@img/text-svg/text-spotify.svg';
import TextTidal from '@img/text-svg/text-tidal.svg';
import TextYoutube from '@img/text-svg/text-youtube.svg';
import SectionTitle from '@components/SectionTitle/SectionTitle';

type ItemText =
	| 'amazon'
	| 'apple'
	| 'bandcamp'
	| 'deezer'
	| 'instagram'
	| 'spotify'
	| 'tidal'
	| 'youtube';

type LinkItem = {
	text: ItemText;
	url: string;
};

export type LinkListProps = {
	title: string;
	items: LinkItem[];
};

const LinkList: React.FC<LinkListProps> = ({ items, title }) => {
	const renderLink = (item: LinkItem) => {
		switch (item.text) {
			case 'amazon':
				return <TextAmazon />;

			case 'apple':
				return <TextApple />;

			case 'bandcamp':
				return <TextBandcamp />;

			case 'deezer':
				return <TextDeezer />;

			case 'instagram':
				return <TextInstagram />;

			case 'spotify':
				return <TextSpotify />;

			case 'tidal':
				return <TextTidal />;

			case 'youtube':
				return <TextYoutube />;

			default:
				break;
		}
	};

	return (
		<S.Container>
			<SectionTitle label={title}>
				<TextFindUsOn />
			</SectionTitle>

			<S.Content>
				{items.map((item, index) => (
					<S.Item
						key={`link-list-item-${index}`}
						href={item.url}
						target="_blank"
						rel="noreferrer noopener"
					>
						{renderLink(item)}
					</S.Item>
				))}
			</S.Content>
		</S.Container>
	);
};

export default LinkList;
