"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const Providers = ({ children }: { children: React.ReactNode }) => {
	const queryClient = new QueryClient();
	queryClient.setDefaultOptions({
		queries: {
			refetchOnWindowFocus: false,
			retry: false,
		},
	});

	return (
		<QueryClientProvider client={queryClient}>
			{children}
		</QueryClientProvider>
	);
};
