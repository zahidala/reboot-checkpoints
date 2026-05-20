import { QueryOptions, useQuery } from "@tanstack/react-query";

interface Params {
  key: string;
  questionKey: string;
}


export const useFetchObjectQuestionReadMe = (params: Params, options?: QueryOptions<any>) => {
	const queryKey = ["fetch-object-question-readme", params.key, params.questionKey];

	const queryFn = async () => {
		const response = await fetch("/api/objects");
		const data = await response.json();
		return data?.children?.["bh-module"]?.children?.["piscine-rust"]?.children?.[params.key]?.children?.[params.questionKey]?.attrs.subject;
	};

	return useQuery({
		queryKey,
		queryFn,
		...options,
	});
};
