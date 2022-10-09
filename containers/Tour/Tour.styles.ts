import { brand } from '@helpers/brand';
import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
	background-color: ${brand.black};
`;

const Content = styled.main`
	flex-grow: 1;

	display: grid;
	place-items: center;
`;

const Disclaimer = styled.span`
	display: block;
	width: 270px;

	svg {
		width: 100%;
	}
`;

const TourStyles = {
	Wrapper,
	Content,
	Disclaimer,
};

export default TourStyles;
