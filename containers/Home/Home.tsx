import PageHead from 'components/PageHead/PageHead';
import * as React from 'react';
import S from './Home.styles';

export type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
	return (
		<S.Wrapper>
			<PageHead />

			<S.Container>
				<p>hello there</p>
			</S.Container>
		</S.Wrapper>
	);
};

export default Home;
