// import { useData } from "./useData";
import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client.ts";
import { FetchResponse } from "./useData.tsx";
// import { FetchResponse } from "./useData.tsx";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

export function usePlatforms() {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000,
  });
  // return useData<Platform>("");
}
