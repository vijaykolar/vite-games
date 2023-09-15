import { Platform } from "./platform.ts";
import { Genre } from "./genre.ts";
import { Publisher } from "./publisher.ts";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  slug: string;
  genres: Genre[];
  publishers: Publisher[];
  description_raw: string;
}
