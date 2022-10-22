import { from, Device } from '@helpers/media';
import styled from 'styled-components';

const Wrapper = styled.h2`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	gap: 8px;

	> svg {
		display: block;
		height: 20px;
	}

	@media ${from(Device.TabletLarge)} {
		> svg {
			height: 28px;
		}
	}

	@media ${from(Device.Desktop)} {
		> svg {
			height: 32px;
		}
	}
`;

const SectionTitleStyles = {
	Wrapper,
};

export default SectionTitleStyles;
