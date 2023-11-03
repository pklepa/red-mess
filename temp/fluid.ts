// import { Device } from './media';

// /**
//  * Base pixel value for the "rem" unit.
//  */
// export const PIXELS_PER_REM = 16;

// /**
//  * Default pixel value for the min width.
//  */
// export const DEFAULT_MIN_VALUE = Device.Mobile;

// /**
//  * Default pixel value for the max width.
//  */
// export const DEFAULT_MAX_VALUE = Device.ActualDesktop;

// /**
//  * Define a fluid value between the min/max values at the min/max widths.
//  */
// export function fluid(
//   min: number,
//   max: number,
//   minWidth: number = DEFAULT_MIN_VALUE,
//   maxWidth: number = DEFAULT_MAX_VALUE,
// ): string {
//   const minRem = min / PIXELS_PER_REM;
//   const maxRem = max / PIXELS_PER_REM;
//   const minWidthRem = minWidth / PIXELS_PER_REM;
//   const maxWidthRem = maxWidth / PIXELS_PER_REM;

//   const slope = (maxRem - minRem) / (maxWidthRem - minWidthRem);
//   const yAxisIntersection = -minWidthRem * slope + minRem;

//   const clampMin = `${round(minRem)}rem`;
//   const clampVal = `${round(yAxisIntersection)}rem + ${round(slope * 100)}vw`;
//   const clampMax = `${round(maxRem)}rem`;

//   return `clamp(${clampMin}, ${clampVal}, ${clampMax})`;
// }

// /**
//  * Define a fluid value between the min/max values at the min/max widths.
//  */
// export function fluidUnit(
//   min: number,
//   max: number,
//   minWidth: number = DEFAULT_MIN_VALUE,
//   maxWidth: number = DEFAULT_MAX_VALUE,
//   unit: string,
// ): string {
//   const slope = (max - min) / (maxWidth - minWidth);
//   const yAxisIntersection = -minWidth * slope + min;

//   const clampMin = `${round(min)}`;
//   const clampVal = `${round(yAxisIntersection)}${unit} + ${round(slope * 100)}vw`;
//   const clampMax = `${round(max)}`;

//   return `clamp(${clampMin}${unit}, ${clampVal}, ${clampMax}${unit})`;
// }

// /**
//  * Round to nearest hundredth.
//  */
// function round(num: number): number {
//   return Math.round(num * 100) / 100;
// }
