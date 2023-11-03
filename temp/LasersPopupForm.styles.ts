// import { ButtonReset } from '@helpers/global';
// import { ButtonStyles } from '@stories/Elements/Forms/Buttons/Button.styles';
// import { fluid } from '@helpers/fluid';
// import { from, Device, until } from '@helpers/media';
// import { Grid } from '@stories/Settings/Grids/Grid.styles';
// import { Variants, m } from 'framer-motion';
// import { ErrorText, SplitField } from '@stories/Elements/Forms/Fields/Form.styles';
// import { Theme } from '@core/enums';
// import { verticalFadeIn } from '@helpers/variants';
// import { WYSIWYG } from '@stories/Elements/Content/wysiwyg/WYSIWYG.styles';
// import brand from '@helpers/brand';
// import fonts from '@helpers/fonts';
// import styled, { css } from 'styled-components';

// const outerContainerVariants: Variants = {
// 	hidden: {
// 		opacity: 0,
// 		transition: {
// 			duration: 0.3,
// 		},
// 	},
// 	visible: {
// 		opacity: 1,
// 		transition: {
// 			duration: 0.35,
// 		},
// 	},
// };

// const OuterContainer = styled(m.div).attrs({
// 	initial: 'hidden',
// 	animate: 'visible',
// 	exit: 'hidden',
// 	variants: outerContainerVariants,
// })`
// 	position: fixed;
// 	inset: 0;
// 	z-index: 1000;
// 	background-color: ${brand.black}77;
// 	backdrop-filter: blur(3px);
// 	padding: 24px 0;
// 	display: flex;
// 	align-items: center;
// 	max-height: 100vh;
// 	overflow: auto;

// 	${Grid.Default} {
// 		pointer-events: none;
// 	}
// `;

// const Container = styled.div`
// 	position: relative;
// 	z-index: 1;
// 	grid-column: 1 / span 12;
// 	--main-color: ${brand.red.base};
// 	--accent-color: ${brand.white};
// 	pointer-events: all;

// 	[data-form-theme='${Theme.Black}'] & {
// 		--main-color: ${brand.black};
// 	}

// 	[data-form-theme='${Theme.White}'] & {
// 		--main-color: ${brand.white};
// 		--accent-color: ${brand.black};
// 	}
// `;

// const closeButtonVariants = {
// 	hidden: {
// 		opacity: 0,
// 		scale: 1.2,
// 		transition: {
// 			duration: 0.3,
// 		},
// 	},
// 	visible: {
// 		opacity: 1,
// 		scale: 1,
// 		transition: {
// 			duration: 0.6,
// 			delay: 0.8,
// 		},
// 	},
// 	hover: {
// 		scale: 1.1,
// 		transition: {
// 			duration: 0.2,
// 		},
// 	},
// };

// const CloseButton = styled(m.button).attrs({
// 	type: 'button',
// 	variants: closeButtonVariants,
// 	whileHover: 'hover',
// })`
// 	${ButtonReset};
// 	position: absolute;
// 	z-index: 3;
// 	top: -8px;
// 	right: -8px;
// 	width: 32px;
// 	height: 32px;
// 	background-color: ${brand.black};
// 	display: grid;
// 	place-items: center;

// 	svg {
// 		width: 60%;
// 		color: ${brand.white};
// 	}

// 	[data-form-theme='${Theme.Black}'] & {
// 		background-color: ${brand.white};

// 		svg {
// 			color: ${brand.black};
// 		}
// 	}
// `;

// const Split = styled.div<{ showGrid: boolean }>`
// 	display: grid;
// 	grid-template-columns: 1fr;

// 	${({ showGrid }) =>
// 		showGrid &&
// 		css`
// 			grid-template-columns: 1fr;

// 			@media ${from(Device.TabletLarge)} {
// 				grid-template-columns: 1fr 1fr;
// 			}
// 		`};
// `;

// const ImageWrapper = styled(m.div).attrs({ variants: verticalFadeIn(60) })`
// 	@media ${until(Device.TabletLarge)} {
// 		display: none;
// 	}

// 	position: relative;
// 	z-index: 1;
// 	height: 100%;
// 	background: ${brand.black};

// 	&::before {
// 		content: '';
// 		position: absolute;
// 		top: 0;
// 		left: 0;
// 		z-index: 2;
// 		width: 100%;
// 		height: 50%;
// 		background: linear-gradient(to bottom, rgba(0 0 0 / 70%) 0%, transparent 100%);
// 	}

// 	img {
// 		display: block;
// 		width: 100%;
// 		height: 100%;
// 		object-fit: cover;
// 		object-position: right center;
// 	}

// 	[data-form-theme='${Theme.Black}'] & {
// 		background: ${brand.white};
// 	}
// `;

// const FormWrapper = styled(m.div).attrs({ variants: verticalFadeIn(-60) })`
// 	padding: 24px;
// 	position: relative;
// 	display: flex;
// 	align-items: flex-start;
// 	background-color: var(--main-color);
// `;

// const Overlay = styled(m.div).attrs({
// 	initial: 'hidden',
// 	animate: 'visible',
// 	exit: 'hidden',
// 	variants: verticalFadeIn(0),
// })`
// 	position: absolute;
// 	inset: 0;
// 	z-index: 3;
// 	background-color: ${brand.black}AA;
// 	backdrop-filter: blur(3px);

// 	display: flex;
// 	align-items: center;
// 	justify-content: center;
// `;

// const LoaderWrapper = styled.div`
// 	width: 60px;
// 	height: 60px;
// 	display: grid;
// 	place-items: center;
// `;

// const OverlayContent = styled.div`
// 	display: flex;
// 	flex-direction: column;
// 	width: 100%;
// 	padding: 24px;
// 	gap: 24px;
// `;

// const OverlayTitle = styled.strong`
// 	${fonts.helvetica['93-black-extended']};
// 	color: var(--accent-color);
// 	font-size: ${fluid(20, 26)};
// 	line-height: 1.2em;
// 	text-transform: uppercase;
// 	text-align: center;
// `;

// const OverlayMessage = styled(WYSIWYG.Standard)`
// 	${fonts.helvetica['53-extended']};
// 	font-size: ${fluid(14, 16)};
// 	line-height: 1.5em;
// 	color: var(--accent-color);
// 	text-align: center;
// `;

// const Form = styled.div`
// 	display: flex;
// 	flex-direction: column;
// 	align-items: flex-start;

// 	${SplitField} {
// 		width: 100%;
// 	}

// 	${ErrorText} {
// 		font-size: 12px;
// 		line-height: 1.3em;
// 		display: block;
// 		padding-top: 8px;
// 	}
// `;

// const FormHeader = styled.div`
// 	display: flex;
// 	flex-direction: column;
// 	gap: 16px;
// 	margin-bottom: 40px;
// `;

// const FormTitle = styled.h3`
// 	${fonts.helvetica['93-black-extended']};
// 	color: var(--accent-color);
// 	font-size: ${fluid(20, 26)};
// 	line-height: 1.2em;
// 	text-transform: uppercase;
// 	text-align: center;
// `;

// const FormDescription = styled.p`
// 	${fonts.helvetica['53-extended']};
// 	font-size: ${fluid(14, 16)};
// 	line-height: 1.5em;
// 	color: var(--accent-color);
// 	text-align: center;
// `;

// const SubmitButtonWrapper = styled.div`
// 	display: flex;
// 	width: 100%;

// 	${ButtonStyles.ButtonElement} {
// 		width: 100%;
// 	}
// `;

// const LasersPopupFormStyles = {
// 	OuterContainer,
// 	Container,
// 	CloseButton,
// 	Split,
// 	ImageWrapper,
// 	FormWrapper,
// 	Overlay,
// 	LoaderWrapper,
// 	OverlayContent,
// 	OverlayTitle,
// 	OverlayMessage,
// 	Form,
// 	FormHeader,
// 	FormTitle,
// 	FormDescription,
// 	SubmitButtonWrapper,
// };

// export default LasersPopupFormStyles;
