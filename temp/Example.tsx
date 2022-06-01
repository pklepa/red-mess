import PageHead from 'components/PageHead/PageHead';
import * as React from 'react';
import S from './Example.styles';

// TODO: Remove this file once project is done
export type ExampleProps = {};

const Example: React.FC<ExampleProps> = () => {
	return (
		<S.Wrapper>
			<PageHead title="Example title" description="Example description" />
			<S.Container></S.Container>
		</S.Wrapper>
	);
};

export default Example;
