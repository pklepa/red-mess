import { useScroll, useTransform } from 'framer-motion';
import { withMotion } from 'hocs/withMotion';
import * as React from 'react';
import S from './FullWidthVideo.styles';

export type FullWidthVideoProps = {};

const FullWidthVideo: React.FC<FullWidthVideoProps> = () => {
	const elementRef = React.useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: elementRef,
		offset: ['start end', 'center end'],
	});
	const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

	return (
		<S.Container ref={elementRef}>
			<S.VideoPlaceholder style={{ scale }} />
		</S.Container>
	);
};

export default withMotion(FullWidthVideo);
