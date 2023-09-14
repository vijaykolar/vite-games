import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client.ts";
import { FetchResponse, Game, GameQuery } from "../types.ts";

export function useGames(gameQuery: GameQuery) {
  return useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Game>>("/games", {
          params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText,
          },
        })
        .then((res) => res.data),
  });
}
