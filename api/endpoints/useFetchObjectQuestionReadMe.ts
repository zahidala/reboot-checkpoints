import { useClient } from "@/api/hooks/useClient";
import { QueryOptions, useQuery } from "@tanstack/react-query";

interface Params {
  key: string;
  questionKey: string;
}


export const useFetchObjectQuestionReadMe = (params: Params, options?: QueryOptions<any>) => {
	const client = useClient();
	const queryKey = ["fetch-object-question-readme", params.key, params.questionKey];

	const queryFn = async () => {
		const response = await client.get("/object/bahrain");
		return response?.data?.children?.["bh-module"]?.children?.["piscine-rust"]?.children?.[params.key]?.children?.[params.questionKey]?.attrs.subject;
	};

	return useQuery({
		queryKey,
		queryFn,
		...options,
	});
};
