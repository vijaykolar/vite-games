import { useEffect, useState } from "react";
import axiosUrl from "../services/api-client";
import { CanceledError } from "axios";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

export function useData<T>(endpoint: string) {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(
    function () {
      const controller = new AbortController();
      setLoading(true);
      axiosUrl
        .get<FetchResponse<T>>(endpoint, { signal: controller.signal })
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
    [endpoint]
  );

  return { data, loading, error };
}
