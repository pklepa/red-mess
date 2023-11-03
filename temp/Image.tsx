// import { Device, from } from '@helpers/media';
// import { ForwardRefComponent, HTMLMotionProps, MotionProps } from 'framer-motion';
// import React, { FunctionComponent } from 'react';
// import { StyledComponent } from 'styled-components';
// import { ImageStyles } from './Image.styles';

// export type ImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
//   Component?:
//     | StyledComponent<'img', any, any, never> // eslint-disable-line @typescript-eslint/no-explicit-any
//     | StyledComponent<ForwardRefComponent<HTMLImageElement, HTMLMotionProps<'img'>>, any, any, never>; // eslint-disable-line @typescript-eslint/no-explicit-any
//   src: string;
//   mobileSrc?: string;
//   mobileBreakpoint?: Device;
//   srcSetSizes?: number[];
//   alt?: string;
//   role?: string;
//   sizes: string;
//   loading?: 'eager' | 'lazy';
//   motionProps?: MotionProps;
// };

// const defaultSrcSetSizes = [
//   Device.MobileSmall,
//   Device.Mobile,
//   Device.Tablet,
//   Device.DesktopSmall,
//   Device.Desktop,
//   Device.DesktopLarge,
//   Device.ActualDesktop,
// ];

// const Image: FunctionComponent<ImageProps> = ({
//   src,
//   mobileSrc,
//   mobileBreakpoint = Device.TabletLarge,
//   sizes,
//   alt,
//   role,
//   Component = ImageStyles.Image,
//   srcSetSizes = defaultSrcSetSizes,
//   loading = 'lazy',
//   motionProps,
//   ...remainingImgProps
// }) => {
//   if (src) {
//     // Check to see if url contains ?, if it does use & instead
//     const queryCombiner = getQueryCombiner(src);

//     // Generate srcSet from all of the given sizes
//     const srcSet = srcSetSizes.map((x) => `${src}${queryCombiner}width=${x} ${x}w`).join(', ');

//     const props: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> = {
//       ...remainingImgProps,
//       decoding: 'async',
//       loading,
//       src,
//       srcSet,
//       sizes,
//       alt,
//       role,
//     };

//     if (mobileSrc) {
//       const mobileQueryCombiner = getQueryCombiner(mobileSrc);
//       const mobileSrcSet = srcSetSizes.map((x) => `${mobileSrc}${mobileQueryCombiner}width=${x} ${x}w`).join(', ');

//       return (
//         <picture>
//           <source media={from(mobileBreakpoint)} src={src} srcSet={srcSet} />

//           {Component ? (
//             <Component {...props} {...motionProps} src={mobileSrc} srcSet={mobileSrcSet} />
//           ) : (
//             <img {...props} src={mobileSrc} srcSet={mobileSrcSet} />
//           )}
//         </picture>
//       );
//     }

//     return Component !== undefined ? <Component {...props} {...motionProps} /> : <img {...props} />;
//   }

//   // If no src or mobileSrc provided, we can't render anything //
//   return null;
// };

// function getQueryCombiner(src: string): string {
//   return src.indexOf('?') === -1 ? '?' : '&';
// }

// export default Image;
