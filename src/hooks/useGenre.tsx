import { useEffect, useState } from "react";
import axiosUrl from "../services/api-client";
import { CanceledError } from "axios";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// export interface Game {
//   id: number;
//   name: string;
//   background_image: string;
//   parent_platforms: { platform: Platform }[];
//   metacritic: number;
// }

interface FetchGenresResponse {
  count: number;
  results: Genre[];
}

export function useGenres() {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(function () {
    const controller = new AbortController();
    setLoading(true);
    axiosUrl
      .get<FetchGenresResponse>("/genres", { signal: controller.signal })
      .then((res) => {
        setGenres(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
    // console.log(z);
    return () => controller.abort();
  }, []);

  return { genres, loading, error };
}
