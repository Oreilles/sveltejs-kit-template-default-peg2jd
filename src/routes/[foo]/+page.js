export const load = async ({ params }) => {
	const res = await import(`./index.${params.foo}.ts`);
	return {
		metadata: res.metadata
	};
};
