import { css, FlattenSimpleInterpolation } from 'styled-components';

const inter = {
	extraLight: {
		family: 'Inter',
		weight: 100,
	},
	light: {
		family: 'Inter',
		weight: 300,
	},
	base: {
		family: 'Inter',
		weight: 400,
	},
	semiBold: {
		family: 'Inter',
		weight: 600,
	},
	bold: {
		family: 'Inter',
		weight: 700,
	},
	black: {
		family: 'Inter',
		weight: 900,
	},
};

export default {
	inter: {
		extraLight: (): FlattenSimpleInterpolation => css`
			font-family: ${inter.extraLight.family}, sans-serif;
			font-weight: ${inter.extraLight.weight};
		`,
		light: (): FlattenSimpleInterpolation => css`
			font-family: ${inter.light.family}, sans-serif;
			font-weight: ${inter.light.weight};
		`,
		base: (): FlattenSimpleInterpolation => css`
			font-family: ${inter.base.family}, sans-serif;
			font-weight: ${inter.base.weight};
		`,
		semiBold: (): FlattenSimpleInterpolation => css`
			font-family: ${inter.semiBold.family}, sans-serif;
			font-weight: ${inter.semiBold.weight};
		`,
		bold: (): FlattenSimpleInterpolation => css`
			font-family: ${inter.bold.family}, sans-serif;
			font-weight: ${inter.bold.weight};
		`,
		black: (): FlattenSimpleInterpolation => css`
			font-family: ${inter.black.family}, sans-serif;
			font-weight: ${inter.black.weight};
		`,
	},
	ls: (value: number): string => {
		return `calc(${value / 1000} * 1em)`;
	},
};
