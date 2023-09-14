// import { useData } from "./useData";
import { useQuery } from "@tanstack/react-query";
import { APIClient } from "../services/api-client.ts";
import { Genre } from "../types.ts";

const apiClient = new APIClient<Genre>("/genres");
export function useGenres() {
  return useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
  });
}
