import { brand } from '@helpers/brand';
import fonts from '@helpers/fonts';
import { Device, from } from '@helpers/media';
import styled from 'styled-components';

const Container = styled.footer`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 10px;
	padding: 24px;

	justify-self: flex-end;
	background-color: ${brand.black};

	@media ${from(Device.TabletLarge)} {
		padding: 48px 24px;
		gap: 16px;
	}
`;

const SocialLinkCollection = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 30px;
`;

const SocialLink = styled.a`
	color: ${brand.white};

	svg {
		height: 25px;
	}
`;

const Divider = styled.div`
	width: 100%;
	height: 2px;
	background-color: ${brand.red};
`;

const Email = styled.span`
	${fonts.inter.extraLight};
	font-size: 14px;
	line-height: 1em;
	text-transform: uppercase;

	&::before {
		content: '';
		display: block;
		width: 100%;
		height: 2px;
		background-color: ${brand.red};
		margin-bottom: 10px;
	}

	@media ${from(Device.TabletLarge)} {
		&::before {
			margin-bottom: 16px;
		}
	}
`;

const FooterStyles = {
	Container,
	SocialLinkCollection,
	SocialLink,
	Divider,
	Email,
};

export default FooterStyles;
