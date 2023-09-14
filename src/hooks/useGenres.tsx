// import { useData } from "./useData";
import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client.ts";
import { FetchResponse } from "./useData.tsx";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

export function useGenres() {
  return useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000,
  });
}
