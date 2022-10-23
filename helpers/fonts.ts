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

const exo2 = {
	extraLight: {
		family: "'Exo 2'",
		weight: 200,
	},
	light: {
		family: "'Exo 2'",
		weight: 300,
	},
	base: {
		family: "'Exo 2'",
		weight: 400,
	},
	semiBold: {
		family: "'Exo 2'",
		weight: 600,
	},
	bold: {
		family: "'Exo 2'",
		weight: 700,
	},
	black: {
		family: "'Exo 2'",
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
	exo2: {
		extraLight: (): FlattenSimpleInterpolation => css`
			font-family: ${exo2.extraLight.family}, sans-serif;
			font-weight: ${exo2.extraLight.weight};
		`,
		light: (): FlattenSimpleInterpolation => css`
			font-family: ${exo2.light.family}, sans-serif;
			font-weight: ${exo2.light.weight};
		`,
		base: (): FlattenSimpleInterpolation => css`
			font-family: ${exo2.base.family}, sans-serif;
			font-weight: ${exo2.base.weight};
		`,
		semiBold: (): FlattenSimpleInterpolation => css`
			font-family: ${exo2.semiBold.family}, sans-serif;
			font-weight: ${exo2.semiBold.weight};
		`,
		bold: (): FlattenSimpleInterpolation => css`
			font-family: ${exo2.bold.family}, sans-serif;
			font-weight: ${exo2.bold.weight};
		`,
		black: (): FlattenSimpleInterpolation => css`
			font-family: ${exo2.black.family}, sans-serif;
			font-weight: ${exo2.black.weight};
		`,
	},
	ls: (value: number): string => {
		return `calc(${value / 1000} * 1em)`;
	},
};
