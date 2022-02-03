import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Collection = () => {
	const router = useRouter();
	return <Link href='/'>{router.query.collectionId}</Link>;
};

export default Collection;
