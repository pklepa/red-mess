import { brand } from '@helpers/brand';
import fonts from '@helpers/fonts';
import { ButtonReset } from '@helpers/global';
import { from, Device } from '@helpers/media';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	background-color: ${brand.black};
`;

const Content = styled.main`
	flex-grow: 1;
	display: grid;
	place-items: center;
	padding: 48px 24px;
`;

const Inner = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 64px;
`;

const Section = styled.div`
	display: flex;
	flex-direction: column;
	gap: 24px;
	width: 100%;
`;

const SectionTitle = styled.div`
	display: flex;
	justify-content: center;
	height: 24px;

	svg {
		height: 100%;
	}

	@media ${from(Device.TabletLarge)} {
		height: 30px;
	}
`;

const ButtonsList = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
`;

const baseButtonStyles = css`
	padding: 10px 16px;
	border: 1px solid ${brand.red};
	border-radius: 4px;
	display: flex;
	justify-content: center;
`;

const ExternalLink = styled.a`
	${baseButtonStyles};
	text-decoration: none;
`;

const ButtonText = styled.span`
	text-align: center;
	${fonts.inter.base};
	color: ${brand.white};
	font-size: 18px;
`;

const Button = styled.button.attrs({ type: 'button' })`
	${ButtonReset};

	${baseButtonStyles};
	display: block;
	width: 100%;
`;

const ShopStyles = {
	Wrapper,
	Content,
	Inner,
	Section,
	SectionTitle,
	ButtonsList,
	Button,
	ButtonText,
	ExternalLink,
};

export default ShopStyles;
