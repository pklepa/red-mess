import * as React from 'react';
import S from './SectionTitle.styles';

export type SectionTitleProps = {
	label: string;
	children: React.ReactNode;
};

const SectionTitle: React.FC<SectionTitleProps> = ({ children, label }) => {
	return <S.Wrapper aria-label={label}>{children}</S.Wrapper>;
};

export default SectionTitle;
