import { useInView } from 'hooks/useInView';
import * as React from 'react';
import S from './AnimatedText.styles';

export type AnimatedTextProps = {
	children: React.ReactElement;
};

const AnimatedText: React.FC<AnimatedTextProps> = ({ children }) => {
	const [elementRef, inView] = useInView<HTMLDivElement>(
		{ threshold: 0.35 },
		true
	);

	return (
		<S.Outer ref={elementRef} inView={inView}>
			<S.Inner>{children}</S.Inner>
		</S.Outer>
	);
};

export default AnimatedText;
