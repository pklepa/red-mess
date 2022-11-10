import { Variants } from 'framer-motion';

export function verticalFadeIn(amount?: number, duration?: number): Variants {
	return {
		hidden: {
			y: amount ?? 30,
			opacity: 0,
			transition: {
				duration: duration ? duration / 2 : 0.3,
				staggerChildren: 0.1,
			},
		},
		visible: {
			y: 0,
			opacity: 1,
			transition: { duration: duration ?? 0.6, staggerChildren: 0.15 },
		},
	};
}

export function horizontalFadeIn(amount?: number, duration?: number): Variants {
	return {
		hidden: {
			x: amount ?? -30,
			opacity: 0,
		},
		visible: {
			x: 0,
			opacity: 1,
			transition: { duration: duration ?? 0.6, staggerChildren: 0.15 },
		},
	};
}

export function scaleFadeIn(amount?: number, duration?: number): Variants {
	return {
		hidden: {
			scale: amount ?? 2,
			opacity: 0,
			transition: { duration: duration ?? 0.4 },
		},
		visible: {
			scale: 1,
			opacity: 1,
			transition: { duration: duration ?? 0.6, staggerChildren: 0.15 },
		},
	};
}

export function staggerChildren(staggerDuration?: number): Variants {
	return {
		hidden: {
			opacity: 1,
			transition: {
				duration: 0.4,
				staggerChildren: staggerDuration ? staggerDuration / 2 : 0.1,
			},
		},
		visible: {
			opacity: 1,
			transition: { duration: 0.6, staggerChildren: staggerDuration ?? 0.15 },
		},
	};
}

export function scaleIn(amount?: number, duration?: number): Variants {
	return {
		hidden: {
			scale: amount ?? 2,
			transition: { duration: duration ?? 0.4 },
		},
		visible: {
			scale: 1,
			transition: { duration: duration ?? 0.6, staggerChildren: 0.15 },
		},
	};
}

export function horizontalSlideIn(
	amount?: number | string,
	duration?: number
): Variants {
	return {
		hidden: {
			x: amount ?? '100%',
			transition: { duration: duration ? duration / 2 : 0.3 },
		},
		visible: {
			x: '0%',
			transition: { duration: duration ?? 0.6, staggerChildren: 0.15 },
		},
	};
}
