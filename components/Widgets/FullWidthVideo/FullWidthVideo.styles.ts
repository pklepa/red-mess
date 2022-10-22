import { brand } from '@helpers/brand';
import { m } from 'framer-motion';
import styled from 'styled-components';

const Container = styled.section`
	width: 100%;
	background: linear-gradient(0deg, ${brand.white} 50%, ${brand.black} 50%);
`;

const VideoPlaceholder = styled(m.div)`
	background-color: ${brand.red};
	width: 100%;
	aspect-ratio: 16 / 9;
	margin-bottom: 48px;
`;

const FullWidthVideoStyles = {
	Container,
	VideoPlaceholder,
};

export default FullWidthVideoStyles;
