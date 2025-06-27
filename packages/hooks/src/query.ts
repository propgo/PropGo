import { useQuery as useReactQuery, UseQueryOptions, QueryKey } from '@tanstack/react-query';

export const useQueryWithConfig = <
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey
>(
  options: Omit<UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>, 'initialData'> & {
    initialData?: () => undefined;
  }
) => {
  return useReactQuery({
    ...options,
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 2
  });
}; 