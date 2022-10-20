import { brand } from '@helpers/brand';
import { navHeight } from '@helpers/global';
import styled from 'styled-components';

const Wrapper = styled.div`
	color: ${brand.white};
	background-color: ${brand.black};
	/* background-color: ${brand.white}; */

	display: flex;
	flex-direction: column;
`;

const Content = styled.main`
	flex-grow: 1;
`;

const BannerWrapper = styled.div`
	min-height: calc(100vh - ${navHeight.mobile}px);
`;

const HomeStyles = {
	Wrapper,
	Content,
	BannerWrapper,
};

export default HomeStyles;
