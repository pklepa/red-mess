import * as React from 'react';
import S from './SiteFooter.styles';
import IconFacebook from '@img/icon-facebook.svg';
import IconInstagram from '@img/icon-instagram.svg';
import IconYoutube from '@img/icon-youtube.svg';

export type SiteFooterProps = {
	email: string;
	socialLinks: {
		facebook?: string;
		instagram?: string;
		youtube?: string;
	};
};

const SiteFooter: React.FC<SiteFooterProps> = ({ email, socialLinks }) => {
	return (
		<S.Container>
			<S.SocialLinkCollection>
				{socialLinks.facebook && (
					<S.SocialLink
						target="_blank"
						rel="noopener noreferrer"
						href={socialLinks.facebook}
					>
						<IconFacebook />
					</S.SocialLink>
				)}
				{socialLinks.instagram && (
					<S.SocialLink
						target="_blank"
						rel="noopener noreferrer"
						href={socialLinks.instagram}
					>
						<IconInstagram />
					</S.SocialLink>
				)}
				{socialLinks.youtube && (
					<S.SocialLink
						target="_blank"
						rel="noopener noreferrer"
						href={socialLinks.youtube}
					>
						<IconYoutube />
					</S.SocialLink>
				)}
			</S.SocialLinkCollection>

			<S.Email>{email}</S.Email>
		</S.Container>
	);
};

export default SiteFooter;
