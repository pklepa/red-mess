import Head from 'next/head';
import * as React from 'react';

export type PageHeadProps = {
	title?: string;
	description?: string;
};

const PageHead: React.FC<PageHeadProps> = ({
	title = 'Red Mess Music',
	description = 'Red Mess Music',
}) => {
	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content={description} />
			<link rel="icon" href="/favicon.ico" />
		</Head>
	);
};

export default PageHead;
