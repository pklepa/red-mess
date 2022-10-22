import * as React from 'react';
import S from './PublishedStuff.styles';
import TextPublished from '@img/text-svg/text-published.svg';
import TextStuff from '@img/text-svg/text-stuff.svg';

import useEmblaCarousel from 'embla-carousel-react';
import ClassNames from 'embla-carousel-class-names';
import Image from 'next/image';

import ImageBreathtaker from 'public/releases/item-breathtaker.jpg';
import ImageCrimson from 'public/releases/item-crimson.jpg';
import ImageDrowningInRed from 'public/releases/item-drowning-in-red.jpg';
import ImageIntoTheMess from 'public/releases/item-into-the-mess.jpg';
import ImagePhantomLimb from 'public/releases/item-phantom-limb.jpg';
import ImageResearchChemicals from 'public/releases/item-research-chemicals.jpg';
import { Device, until } from '@helpers/media';
import useMediaQuery from 'hooks/useMediaQuery';
// import useMedia from 'hooks/useMedia';

type ItemId =
	| 'breathtaker'
	| 'crimson'
	| 'drowning-in-red'
	| 'into-the-mess'
	| 'phantom-limb'
	| 'research-chemicals';

type Item = {
	id: ItemId;
	imageUrl: string;
	name: string;
	yearOfRelease: string;
	type: 'Single' | 'EP' | 'Album';
};

export type PublishedStuffProps = {
	items: Item[];
};

const PublishedStuff: React.FC<PublishedStuffProps> = ({ items }) => {
	const isMobile = useMediaQuery(until(Device.TabletLarge));

	const [emblaRef] = useEmblaCarousel(
		{ loop: false, align: isMobile ? 'center' : 'start', inViewThreshold: 1 },
		[ClassNames({ selected: 'is-selected' })]
	);

	const renderImage = (id: ItemId): React.ReactNode => {
		switch (id) {
			case 'breathtaker':
				return <Image src={ImageBreathtaker} sizes="800px" />;

			case 'crimson':
				return <Image src={ImageCrimson} sizes="800px" />;

			case 'drowning-in-red':
				return <Image src={ImageDrowningInRed} sizes="800px" />;

			case 'into-the-mess':
				return <Image src={ImageIntoTheMess} sizes="800px" />;

			case 'phantom-limb':
				return <Image src={ImagePhantomLimb} sizes="800px" />;

			case 'research-chemicals':
				return <Image src={ImageResearchChemicals} sizes="800px" />;

			default:
				return null;
		}
	};

	return (
		<S.Container>
			<S.Title>
				<TextPublished />
				<TextStuff />
			</S.Title>

			<S.CarouselWrapper>
				<S.Carousel className="embla" ref={emblaRef}>
					<div className="embla__container">
						{items.map((item, index) => (
							<S.ItemWrapper
								className="embla__slide"
								key={`published-stuff-item-${index}`}
							>
								{renderImage(item.id)}

								<S.ItemOverlay>
									<S.ItemOverlayContent>
										<strong>{item.name}</strong>{' '}
										<span>({item.yearOfRelease})</span>
									</S.ItemOverlayContent>
								</S.ItemOverlay>
							</S.ItemWrapper>
						))}
					</div>
				</S.Carousel>
			</S.CarouselWrapper>
		</S.Container>
	);
};

export default PublishedStuff;
