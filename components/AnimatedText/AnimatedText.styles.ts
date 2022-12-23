import { verticalSlideIn } from '@helpers/variants';
import { m } from 'framer-motion';
import styled from 'styled-components';

const Outer = styled.div`
	position: relative;
	overflow: hidden;
`;

const Inner = styled(m.div).attrs(
	({
		inView,
		reverseDirection,
	}: {
		inView: boolean;
		reverseDirection?: boolean;
	}) => ({
		initial: 'hidden',
		animate: inView ? 'visible' : 'hidden',
		variants: verticalSlideIn(reverseDirection ? '-100%' : '100%'),
	})
)<{ inView: boolean; reverseDirection?: boolean }>``;

const AnimatedTextStyles = {
	Outer,
	Inner,
};

export default AnimatedTextStyles;
