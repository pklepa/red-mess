import * as React from 'react';
import S from './SiteNav.styles';
import IconBurger from '@img/icon-burger.svg';
import IconX from '@img/icon-x.svg';

import TourText from '@img/text-svg/text-tour.svg';
import ShopText from '@img/text-svg/text-shop.svg';

import Link from 'next/link';
import { useRouter } from 'next/router';

export type SiteNavProps = {
	items: {
		text: string;
		url: string;
	}[];
};

const SiteNav: React.FC<SiteNavProps> = ({ items }) => {
	const { asPath } = useRouter();
	const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

	return (
		<>
			<S.Container>
				<S.CurrentAnchor>
					{asPath === '/tour' && <TourText />}
					{asPath === '/shop' && <ShopText />}
				</S.CurrentAnchor>

				<S.BurgerMenuButton onClick={() => setIsMobileMenuOpen(true)}>
					<IconBurger />
				</S.BurgerMenuButton>
			</S.Container>

			{isMobileMenuOpen && (
				<S.MobileMenu>
					<S.List>
						{items.map((item) => (
							<S.ListItem key={item.text} isCurrent={asPath === item.url}>
								<Link href={item.url}>
									<span>{item.text}</span>
								</Link>
							</S.ListItem>
						))}
					</S.List>

					<S.CloseButton onClick={() => setIsMobileMenuOpen(false)}>
						<IconX />
					</S.CloseButton>
				</S.MobileMenu>
			)}
		</>
	);
};

export default SiteNav;
