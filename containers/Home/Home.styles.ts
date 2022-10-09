import { brand } from '@helpers/brand';
import styled from 'styled-components';

const Wrapper = styled.div`
	color: ${brand.white};
	background-color: ${brand.black};

	display: flex;
	flex-direction: column;
`;

const Content = styled.main`
	flex-grow: 1;
`;

const HomeStyles = {
	Wrapper,
	Content,
};

export default HomeStyles;
