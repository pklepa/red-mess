import AnimatedText from '@components/AnimatedText/AnimatedText';
import * as React from 'react';
import S from './SectionTitle.styles';

export type SectionTitleProps = {
	label: string;
	children: React.ReactNode;
};

const SectionTitle: React.FC<SectionTitleProps> = ({ children, label }) => {
	return (
		<AnimatedText>
			<S.Wrapper aria-label={label}>{children}</S.Wrapper>
		</AnimatedText>
	);
};

export default SectionTitle;
