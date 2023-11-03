// import { css, FlattenInterpolation, ThemeProps } from 'styled-components';

// export const helveticaConfig = {
//   ['45-light']: {
//     family: 'Helvetica Neue LT W05_45 Light',
//     weight: 300,
//     style: 'normal',
//   },
//   ['45-light-italic']: {
//     family: 'Helvetica Neue LT W05_46 Lt It',
//     weight: 300,
//     style: 'italic',
//   },
//   ['53-extended']: {
//     family: 'Helvetica Neue LT W05_53 Ext',
//     weight: 400,
//     style: 'normal',
//   },
//   ['53-extended-oblique']: {
//     family: 'Helvetica Neue LT W05_53 Ex Ob',
//     weight: 400,
//     style: 'oblique',
//   },
//   ['55-roman']: {
//     family: 'Helvetica Neue LT W05_55 Roman',
//     weight: 500,
//     style: 'normal',
//   },
//   ['55-roman-italic']: {
//     family: 'Helvetica Neue LT W05_55 Roman',
//     weight: 500,
//     style: 'italic',
//   },
//   ['63-medium-extended']: {
//     family: 'Helvetica Neue LT W05_63 Md Ex',
//     weight: 400,
//     style: 'normal',
//   },
//   ['63-medium-extended-oblique']: {
//     family: 'Helvetica Neue LT W05_63MdExOb',
//     weight: 400,
//     style: 'oblique',
//   },
//   ['67-medium-condensed']: {
//     family: 'Helvetica Neue LT W05_67 Md Cn',
//     weight: 400,
//     style: 'normal',
//   },
//   ['73-bold-extended']: {
//     family: 'Helvetica Neue LT W05_73 Bd Ex',
//     weight: 700,
//     style: 'normal',
//   },
//   ['73-bold-extended-oblique']: {
//     family: 'Helvetica Neue LT W05_73BdExObl',
//     weight: 700,
//     style: 'oblique',
//   },
//   ['77-bold-condensed']: {
//     family: 'Helvetica Neue LT W05_77 Bd Cn',
//     weight: 700,
//     style: 'normal',
//   },
//   ['83-heavy-extended']: {
//     family: 'Helvetica Neue LT W05_83 Hv Ex',
//     weight: 800,
//     style: 'normal',
//   },
//   ['83-heavy-extended-oblique']: {
//     family: 'Helvetica Neue LT W05_83HvExObl',
//     weight: 800,
//     style: 'oblique',
//   },
//   ['87-heavy-condensed']: {
//     family: 'Helvetica Neue LT W05_87 Hv Cn',
//     weight: 800,
//     style: 'normal',
//   },
//   ['87-heavy-condensed-oblique']: {
//     family: 'Helvetica Neue LT W05_87HvCnObl',
//     weight: 800,
//     style: 'oblique',
//   },
//   ['93-black-extended']: {
//     family: 'Helvetica Neue LT W05_93 Blk E',
//     weight: 900,
//     style: 'normal',
//   },
//   ['93-black-extended-oblique']: {
//     family: 'Helvetica Neue LT W0593BlkExObl',
//     weight: 900,
//     style: 'oblique',
//   },
//   ['97-black-condensed']: {
//     family: 'Helvetica Neue LT W05_97 Blk C',
//     weight: 900,
//     style: 'normal',
//   },
//   ['97-black-condensed-oblique']: {
//     family: 'Helvetica Neue LT W0597BlkCnObl',
//     weight: 900,
//     style: 'oblique',
//   },
// };

// export const arimoConfig = {
//   family: 'Arimo',
// };

// function font(family: string, weight?: number, style?: string): FlattenInterpolation<ThemeProps<unknown>> {
//   return css`
//     body.RURU & {
//       ${weight && weight >= 800
//         ? css`
//             font-family: ${() => arimoConfig.family} !important;
//           `
//         : css`
//             font-family: ${() => arimoConfig.family}, ${family} !important;
//           `}
//     }

//     font-family: ${family} !important;
//     font-weight: normal !important;
//     font-style: ${style} !important;
//   `;
// }

// export default {
//   helvetica: {
//     ['45-light']: font(
//       helveticaConfig['45-light'].family,
//       helveticaConfig['45-light'].weight,
//       helveticaConfig['45-light'].style,
//     ),
//     ['45-light-italic']: font(
//       helveticaConfig['45-light-italic'].family,
//       helveticaConfig['45-light-italic'].weight,
//       helveticaConfig['45-light-italic'].style,
//     ),
//     ['53-extended']: font(
//       helveticaConfig['53-extended'].family,
//       helveticaConfig['53-extended'].weight,
//       helveticaConfig['53-extended'].style,
//     ),
//     ['53-extended-oblique']: font(
//       helveticaConfig['53-extended-oblique'].family,
//       helveticaConfig['53-extended-oblique'].weight,
//       helveticaConfig['53-extended-oblique'].style,
//     ),
//     ['55-roman']: font(
//       helveticaConfig['55-roman'].family,
//       helveticaConfig['55-roman'].weight,
//       helveticaConfig['55-roman'].style,
//     ),
//     ['63-medium-extended']: font(
//       helveticaConfig['63-medium-extended'].family,
//       helveticaConfig['63-medium-extended'].weight,
//       helveticaConfig['63-medium-extended'].style,
//     ),
//     ['63-medium-extended-oblique']: font(
//       helveticaConfig['63-medium-extended-oblique'].family,
//       helveticaConfig['63-medium-extended-oblique'].weight,
//       helveticaConfig['63-medium-extended-oblique'].style,
//     ),
//     ['67-medium-condensed']: font(
//       helveticaConfig['67-medium-condensed'].family,
//       helveticaConfig['67-medium-condensed'].weight,
//       helveticaConfig['67-medium-condensed'].style,
//     ),
//     ['73-bold-extended']: font(
//       helveticaConfig['73-bold-extended'].family,
//       helveticaConfig['73-bold-extended'].weight,
//       helveticaConfig['73-bold-extended'].style,
//     ),
//     ['73-bold-extended-oblique']: font(
//       helveticaConfig['73-bold-extended-oblique'].family,
//       helveticaConfig['73-bold-extended-oblique'].weight,
//       helveticaConfig['73-bold-extended-oblique'].style,
//     ),
//     ['77-bold-condensed']: font(
//       helveticaConfig['77-bold-condensed'].family,
//       helveticaConfig['77-bold-condensed'].weight,
//       helveticaConfig['77-bold-condensed'].style,
//     ),
//     ['83-heavy-extended']: font(
//       helveticaConfig['83-heavy-extended'].family,
//       helveticaConfig['83-heavy-extended'].weight,
//       helveticaConfig['83-heavy-extended'].style,
//     ),
//     ['83-heavy-extended-oblique']: font(
//       helveticaConfig['83-heavy-extended-oblique'].family,
//       helveticaConfig['83-heavy-extended-oblique'].weight,
//       helveticaConfig['83-heavy-extended-oblique'].style,
//     ),
//     ['87-heavy-condensed']: font(
//       helveticaConfig['87-heavy-condensed'].family,
//       helveticaConfig['87-heavy-condensed'].weight,
//       helveticaConfig['87-heavy-condensed'].style,
//     ),
//     ['87-heavy-condensed-oblique']: font(
//       helveticaConfig['87-heavy-condensed-oblique'].family,
//       helveticaConfig['87-heavy-condensed-oblique'].weight,
//       helveticaConfig['87-heavy-condensed-oblique'].style,
//     ),
//     ['93-black-extended']: font(
//       helveticaConfig['93-black-extended'].family,
//       helveticaConfig['93-black-extended'].weight,
//       helveticaConfig['93-black-extended'].style,
//     ),
//     ['93-black-extended-oblique']: font(
//       helveticaConfig['93-black-extended-oblique'].family,
//       helveticaConfig['93-black-extended-oblique'].weight,
//       helveticaConfig['93-black-extended-oblique'].style,
//     ),
//     ['97-black-condensed']: font(
//       helveticaConfig['97-black-condensed'].family,
//       helveticaConfig['97-black-condensed'].weight,
//       helveticaConfig['97-black-condensed'].style,
//     ),
//     ['97-black-condensed-oblique']: font(
//       helveticaConfig['97-black-condensed-oblique'].family,
//       helveticaConfig['97-black-condensed-oblique'].weight,
//       helveticaConfig['97-black-condensed-oblique'].style,
//     ),
//   },
//   ls: (value: number): string => {
//     return `calc(${value / 1000} * 1em)`;
//   },
//   arimo: (): FlattenInterpolation<ThemeProps<unknown>> => {
//     return font(arimoConfig.family);
//   },
// };
