import { QueryOptions, useQuery } from "@tanstack/react-query";


export const useFetchAllBahrainObjects = (options?: QueryOptions<any>) => {
	const queryKey = ["fetch-all-bahrain-objects"];

	const queryFn = async () => {
		const response = await fetch("/api/objects");
		const data = await response.json();
		return data;
	};

	return useQuery({
		queryKey,
		queryFn,
		...options,
	});
};
