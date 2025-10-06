import { useClient } from "@/api/hooks/useClient";
import { QueryOptions, useQuery } from "@tanstack/react-query";


export const useFetchAllBahrainObjects = (options?: QueryOptions<any>) => {
	const client = useClient();
	const queryKey = ["fetch-all-bahrain-objects"];

	const queryFn = async () => {
		const response = await client.get("/object/bahrain");
		return response?.data;
	};

	return useQuery({
		queryKey,
		queryFn,
		...options,
	});
};
