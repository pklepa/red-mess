import * as React from 'react';
import S from './SiteFooter.styles';

export type SiteFooterProps = {
	email: string;
	socialLinks: {
		facebook?: string;
		instagram?: string;
		youtube?: string;
		spotify?: string;
	};
};

const SiteFooter: React.FC<SiteFooterProps> = ({ email, socialLinks }) => {
	return (
		<S.Container>
			<S.SocialLinkCollection>
				{socialLinks.facebook && <S.SocialLink></S.SocialLink>}
				{socialLinks.instagram && <S.SocialLink></S.SocialLink>}
				{socialLinks.youtube && <S.SocialLink></S.SocialLink>}
				{socialLinks.spotify && <S.SocialLink></S.SocialLink>}
			</S.SocialLinkCollection>

			<S.Email>{email}</S.Email>
		</S.Container>
	);
};

export default SiteFooter;
