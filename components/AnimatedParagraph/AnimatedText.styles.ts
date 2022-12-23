import { staggerChildren, verticalSlideIn } from '@helpers/variants';
import { m } from 'framer-motion';
import styled from 'styled-components';

const Inner = styled(m.div).attrs({ variants: verticalSlideIn() })``;

const Outer = styled(m.div).attrs(({ inView }: { inView: boolean }) => ({
	initial: 'hidden',
	animate: inView ? 'visible' : 'hidden',
	variants: staggerChildren(0),
}))<{ inView: boolean }>`
	position: relative;
	overflow: hidden;
`;

const AnimatedTextStyles = {
	Outer,
	Inner,
};

export default AnimatedTextStyles;
