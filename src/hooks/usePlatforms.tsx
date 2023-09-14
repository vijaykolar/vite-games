// import { useData } from "./useData";
import { useQuery } from "@tanstack/react-query";
import { Platform } from "../types.ts";
import APIClient from "../services/api-client.ts";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");
export function usePlatforms() {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
  });
  // return useData<Platform>("");
}
