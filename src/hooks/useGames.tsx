import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client.ts";
import { FetchResponse, Game, GameQuery } from "../types.ts";

const apiClient = new APIClient<Game>("/games");

export function useGames(gameQuery: GameQuery) {
  return useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
        },
      }),
  });
}
