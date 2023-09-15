import { useInfiniteQuery } from "@tanstack/react-query";
import { APIClient } from "../services/api-client.ts";
import { useGameQueryStore } from "../store.ts";
import { Game } from "../entities/game.ts";
import { FetchResponse } from "../entities/fetchResponse.ts";

const apiClient = new APIClient<Game>("/games");

export function useGames() {
  const gameQuery = useGameQueryStore((state) => state.gameQuery);
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: 24 * 60 * 60 * 1000, // 24h
  });
}
