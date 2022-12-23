import { brand } from '@helpers/brand';
import fonts from '@helpers/fonts';
import { ButtonReset, navHeight, zIndex } from '@helpers/global';
import { from, Device } from '@helpers/media';
import { horizontalSlideIn, scaleFadeIn } from '@helpers/variants';
import { m } from 'framer-motion';
import styled, { css } from 'styled-components';

const Container = styled.nav<{ hasTitle: boolean }>`
	height: ${navHeight.mobile}px;

	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0px 24px;

	position: fixed;
	top: 0;
	z-index: 5;
	width: 100%;

	${({ hasTitle }) =>
		hasTitle &&
		css`
			position: sticky;
			background-color: ${brand.white};
		`}

	@media ${from(Device.TabletLarge)} {
		height: ${navHeight.desktop}px;
	}
`;

const Title = styled.strong`
	display: block;
	height: 25px;

	svg {
		height: 100%;
	}
`;

const BurgerMenuButton = styled.button.attrs({ type: 'button' })`
	${ButtonReset};

	background-color: ${brand.black};
	width: 50px;
	height: 50px;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0 12px;
`;

const MobileMenu = styled(m.div).attrs({
	initial: 'hidden',
	animate: 'visible',
	exit: 'hidden',
	variants: scaleFadeIn(1, 0.3),
})`
	position: fixed;
	z-index: ${zIndex.priority};
	height: 100vh;
	width: 100vw;
	padding: 24px;
	background-color: ${brand.black};

	display: grid;
	place-items: center;
`;

const List = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 40px;
	margin: 0;
	padding: 0;
`;

const ListItem = styled.li<{ isCurrent?: boolean }>`
	list-style: none;
	padding: 0;
	text-align: center;
	cursor: pointer;

	span {
		display: block;
		${fonts.inter.base};
		color: ${brand.white};
		text-transform: uppercase;
		text-decoration: none;
		text-align: center;
		font-size: 21px;
		letter-spacing: 8px;
	}

	${({ isCurrent }) =>
		isCurrent &&
		css`
			span {
				${fonts.inter.bold};
				background-color: ${brand.red};
				padding-left: 8px;
				margin-left: -8px;
			}
		`}
`;

const CloseButton = styled.button.attrs({ type: 'button' })`
	${ButtonReset};

	position: absolute;
	right: 40px;
	top: 30px;
	z-index: 2;

	width: 20px;
	height: 20px;
	display: flex;
	align-items: center;
	justify-content: center;

	@media ${from(Device.TabletLarge)} {
		width: 32px;
		height: 32px;
		right: 56px;
		top: 32px;
	}
`;

const SiteNavStyles = {
	Container,
	Title,
	BurgerMenuButton,
	MobileMenu,
	List,
	ListItem,
	CloseButton,
};

export default SiteNavStyles;
