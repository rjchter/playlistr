import {
  SpotifyApi,
  Scopes,
  PlaylistedTrack,
  Track,
} from "@spotify/web-api-ts-sdk";
import { useQuery } from "@tanstack/react-query";

const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID as string;
const redirectUri = import.meta.env.VITE_SPOTIFY_REDIRECT_URI as string;

const playlistRegex =
  /^https:\/\/open\.spotify\.com\/playlist\/([a-zA-Z0-9-]+).*$/gm;
const sdk = SpotifyApi.withUserAuthorization(
  clientId,
  redirectUri,
  Scopes.playlistRead,
);

const fetchPlaylistItems = async (url: string) => {
  const match = playlistRegex.exec(url);
  if (!match) {
    throw new Error("Ungültiger Spotify-Link");
  }

  const items: PlaylistedTrack<Track>[] = [];
  const limit = 50;
  let offset = 0;
  let hasNextPage = true;

  while (hasNextPage) {
    const result = await sdk.playlists.getPlaylistItems(
      match[1],
      "DE",
      "offset,limit,next,items(track(id,name,artists(name),album(release_date)))",
      limit,
      offset,
    );

    items.push(...result.items);
    offset += result.limit;
    hasNextPage = result.next !== null;
  }

  return items;
};

export const useFetchPlaylistItems = (url: string) => {
  return useQuery<PlaylistedTrack<Track>[]>({
    queryKey: ["playlist-items", url],
    queryFn: () => fetchPlaylistItems(url),
    enabled: false,
  });
};
