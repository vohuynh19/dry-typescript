import { dehydrate, QueryClient } from "@tanstack/react-query";

export const dehydrateQueryClient = async (
  prefetchQueries?: Parameters<
    (typeof QueryClient)["prototype"]["prefetchQuery"]
  >[]
) => {
  const queryClient = new QueryClient();

  await Promise.all(
    (prefetchQueries || []).map((param) => queryClient.prefetchQuery(...param))
  );

  return {
    dehydratedState: dehydrate(queryClient),
  };
};
