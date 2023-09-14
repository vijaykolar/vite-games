import { useEffect, useState } from "react";
import axiosUrl from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

export function useData<T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[],
) {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(
    function () {
      const controller = new AbortController();
      setLoading(true);
      axiosUrl
        .get<FetchResponse<T>>(endpoint, {
          signal: controller.signal,
          ...requestConfig,
        })
        .then((res) => {
          setData(res.data.results);
          setLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setLoading(false);
        });
      // console.log(z);
      return () => controller.abort();
    },
    deps ? [...deps] : [],
  );

  return { data, loading, error };
}
