import { from, Device } from '@helpers/media';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 32px;
	margin-bottom: 40px;

	@media ${from(Device.TabletLarge)} {
		gap: 40px;
	}
`;

const Content = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	gap: 24px;

	@media ${from(Device.TabletLarge)} {
		grid-template-columns: repeat(2, 1fr);
		gap: 24px 32px;
	}

	@media ${from(Device.Desktop)} {
		gap: 24px 64px;
	}
`;

const Item = styled.a`
	list-style: none;
	padding: 0;
	height: 14px;

	display: grid;
	place-items: center;

	svg {
		height: 100%;
	}

	@media ${from(Device.TabletLarge)} {
		height: 18px;
	}
`;

const LinkListStyles = {
	Container,
	Content,
	Item,
};

export default LinkListStyles;
