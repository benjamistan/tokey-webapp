import React from 'react';

const style = {
	container:
		'justify-center flex flex-row flex-wrap text-center h-screen bg-white pt-96 space-x-4',
	text: 'align-middle text-5xl border-solid border-2 border-indigo-600',
};

function ValueProposition() {
	return (
		<div className={style.container}>
			<div className={style.text}>ValueProposition</div>
			<div className={style.text}>ValueProposition</div>
			<div className={style.text}>ValueProposition</div>
			<div className={style.text}>ValueProposition</div>
		</div>
	);
}

export default ValueProposition;
