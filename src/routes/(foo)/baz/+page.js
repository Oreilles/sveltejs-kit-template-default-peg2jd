export const load = async ({ url }) => {
	const res = await import(`./index.${url.searchParams.get('foo') ?? 'foo'}.js`);
	return { metadata: res.metadata };
};
