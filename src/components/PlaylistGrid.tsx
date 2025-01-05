import { Grid, Box } from "@mui/material";
import { PlaylistedTrack, Track } from "@spotify/web-api-ts-sdk";
import { useState } from "react";
import SongInfoCard from "./SongInfoCard.tsx";
import SongQRCodeCard from "./SongQRCodeCard.tsx";

type PlaylistGridProps = {
  playlistItems?: PlaylistedTrack<Track>[];
};

function PlaylistGrid({ playlistItems }: PlaylistGridProps) {
  const [flippedCard, setFlippedCard] = useState<string | null>(null);

  const handleFlip = (id: string) => {
    setFlippedCard((prev) => (prev === id ? null : id));
  };

  return (
    <Grid container spacing={4} sx={{ mt: 4, mb: 4 }}>
      {playlistItems && playlistItems.length > 0
        ? playlistItems.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.track.id}>
              <Box
                sx={{
                  perspective: "1000px",
                  width: "100%",
                  height: "100%",
                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: 280,
                    textAlign: "center",
                    transformStyle: "preserve-3d",
                    transition: "transform 0.6s",
                    transform:
                      flippedCard === item.track.id
                        ? "rotateY(180deg)"
                        : "none",
                  }}
                >
                  {/* Front Side */}
                  <SongQRCodeCard
                    track={item.track}
                    handleFlip={() => handleFlip(item.track.id)}
                  />

                  {/* Back Side */}
                  <SongInfoCard
                    track={item.track}
                    onClick={() => handleFlip(item.track.id)}
                  />
                </Box>
              </Box>
            </Grid>
          ))
        : null}
    </Grid>
  );
}

export default PlaylistGrid;
