import { Card, CardContent, IconButton, Typography } from "@mui/material";
import LoopIcon from "@mui/icons-material/Loop";
import { Track } from "@spotify/web-api-ts-sdk";

type SongInfoCardProps = {
  track: Track;
  onClick: () => void;
};

function SongInfoCard({ track, onClick }: SongInfoCardProps) {
  return (
    <Card
      sx={{
        position: "absolute",
        width: "100%",
        height: "100%",
        backfaceVisibility: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "background.default",
        borderRadius: 2,
        transform: "rotateY(180deg)", // Rotated by default
      }}
    >
      <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {/* Spotify Attribution */}
        <Typography
          variant="caption"
          sx={{
            mt: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "text.secondary",
          }}
        >
          <img
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png"
            alt="Spotify Logo"
            style={{ height: 16, marginRight: 4 }}
          />
        </Typography>
        <Typography variant="h6" color="text.secondary">
          {track.name}
        </Typography>
        <Typography
          variant="h3"
          color="text.secondary"
          sx={{
            fontWeight: "bold",
          }}
        >
          {track.album.release_date.split("-")[0]}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          {track.artists.map((artist) => artist.name).join(", ")}
        </Typography>
        <IconButton
          onClick={onClick}
          sx={{ position: "absolute", bottom: 16, right: 16 }}
        >
          <LoopIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
}

export default SongInfoCard;
