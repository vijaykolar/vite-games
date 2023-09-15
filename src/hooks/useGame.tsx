import { useQuery } from "@tanstack/react-query";
import { APIClient } from "../services/api-client.ts";

import { Game } from "../entities/game.ts";

const apiClient = new APIClient<Game>("/games");
export function useGame(slug: string) {
  return useQuery({
    queryKey: ["games", slug],
    queryFn: () => apiClient.get(slug),
  });
}
