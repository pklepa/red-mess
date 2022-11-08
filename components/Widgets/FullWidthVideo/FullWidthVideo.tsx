import {
	AnimatePresence,
	useMotionTemplate,
	useScroll,
	useTransform,
} from 'framer-motion';
import { withMotion } from 'hocs/withMotion';
import * as React from 'react';
import S from './FullWidthVideo.styles';
import ReactPlayer from 'react-player/youtube';

export type FullWidthVideoProps = {};

const FullWidthVideo: React.FC<FullWidthVideoProps> = () => {
	const elementRef = React.useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: elementRef,
		offset: ['start end', '80% end'],
	});
	const clipHorizontalLeft = useTransform(scrollYProgress, [0, 1], [75, 100]);
	const clipHorizontalRight = useTransform(scrollYProgress, [0, 1], [20, 0]);
	const clipPath = useMotionTemplate`polygon(${clipHorizontalRight}% 0, ${clipHorizontalLeft}% 0, ${clipHorizontalLeft}% 100%, ${clipHorizontalRight}% 100%)`;
	const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
	const [isVideoOpen, setIsVideoOpen] = React.useState(false);

	return (
		<>
			<S.Container ref={elementRef}>
				<S.PreviewWrapper
					style={{ clipPath }}
					onClick={() => setIsVideoOpen(true)}
				>
					<S.PreviewInner style={{ scale }}>
						<video
							autoPlay
							loop
							muted
							className="video-preview"
							controls={false}
						>
							<source src="/featured-video-preview.mp4" />
						</video>

						<S.PlayButtonWrapper>
							<S.PlayButton />
						</S.PlayButtonWrapper>
					</S.PreviewInner>
				</S.PreviewWrapper>
			</S.Container>

			<AnimatePresence>
				{isVideoOpen && (
					<S.Modal key="featured-video-modal">
						<S.ModalBackground onClick={() => setIsVideoOpen(false)} />
						<S.ModalInner>
							<ReactPlayer
								playsinline
								width="100%"
								height="100%"
								controls
								playing={isVideoOpen}
								url={'https://www.youtube.com/watch?v=au316tGlpyc&t=8s'}
							/>
						</S.ModalInner>
					</S.Modal>
				)}
			</AnimatePresence>
		</>
	);
};

export default withMotion(FullWidthVideo);
