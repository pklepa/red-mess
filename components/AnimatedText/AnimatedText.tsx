import { useInView } from 'hooks/useInView';
import * as React from 'react';
import S from './AnimatedText.styles';

export type AnimatedTextProps = {
	children: React.ReactElement;
	reverseDirection?: boolean;
	inView?: boolean;
	preferInViewProps?: boolean;
};

const AnimatedText: React.FC<AnimatedTextProps> = (props) => {
	const [elementRef, inView] = useInView<HTMLDivElement>(
		{ threshold: 0.35 },
		true
	);

	return (
		<S.Outer ref={elementRef}>
			<S.Inner
				inView={props.preferInViewProps ? props.inView ?? true : inView}
				reverseDirection={props.reverseDirection}
			>
				{props.children}
			</S.Inner>
		</S.Outer>
	);
};

export default AnimatedText;
