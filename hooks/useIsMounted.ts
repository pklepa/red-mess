import * as React from 'react';

export default function useIsMounted(): boolean {
	const [isMounted, setIsMounted] = React.useState(false);

	React.useEffect(() => {
		setIsMounted(true);
	});

	return isMounted;
}
