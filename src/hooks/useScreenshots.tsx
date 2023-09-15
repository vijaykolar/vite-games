import { useQuery } from "@tanstack/react-query";
import { APIClient } from "../services/api-client.ts";
import { Screenshot } from "../entities/screenshot.ts";

export function useScreenshots(gameId: number) {
  const apiClient = new APIClient<Screenshot>(`/games/${gameId}/screenshots`);
  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: apiClient.getAll,
  });
}
