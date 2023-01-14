export const load = async ({ params }) => {
	const res = await import(`./index.${params.foo}.js`);
	return { metadata: res.metadata };
};
