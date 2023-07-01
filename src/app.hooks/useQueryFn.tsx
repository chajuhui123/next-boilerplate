import { useQuery } from "react-query";
import api from "@modules/api/api";
import { qs } from "@modules/util/qs";

export const request = async ({ queryKey, param, ...props }) => {
  try {
    let url = queryKey;
    if (param) url = url + qs.stringURL(param);
    const res = await api.GET(url);
    return res?.data?.result ?? res?.data?.data;
  } catch (error) {
    throw error;
  }
};

const useQueryFn = <T,>(queries, options = {}) => {
  const queryKey = Array.isArray(queries) ? queries[0] : queries;
  const param = Array.isArray(queries) ? queries[1] : null;

  const queryOptions = { enabled: !!queries, ...options };
  const fetch = async () => await request({ queryKey, param });

  return useQuery<T>(queries, fetch, queryOptions);
};

export default useQueryFn;
