import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  FormControl,
  TextField,
  Typography,
} from "@mui/material";
import { ChangeEvent, useState } from "react";
import { useFetchPlaylistItems } from "../hooks/useFetchPlaylistItems.ts";

function MainGamePage() {
  const [playlistLink, setPlaylistLink] = useState<string>("");
  const [category, setCategory] = useState<string>("");

  const {
    refetch,
    data: playlistItems,
    isError,
    isLoading,
  } = useFetchPlaylistItems(playlistLink);

  const handlePlaylistLinkChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPlaylistLink(e.target.value);
  };

  const handleCategoryChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCategory(e.target.value);
  };

  const handleLoadSongs = async () => {
    await refetch();
  };

  return (
    <Box
      sx={{
        height: "100vh",
        background: `linear-gradient(to top, ${"#723cc9"}, ${"#fdf7ff"})`,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflowY: "auto",
      }}
    >
      <Card
        sx={{
          maxWidth: 400,
          width: "100%",
          borderRadius: 2,
          boxShadow: 3,
          p: 2,
        }}
      >
        <CardContent>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              mb: 3,
              textAlign: "center",
            }}
          >
            Play Hitster with Your Own Playlist
          </Typography>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <TextField
              label="Category (e.g., Oldies, Soundtracks)"
              fullWidth
              sx={{
                borderRadius: 1,
                mb: 2,
              }}
            />
          </FormControl>
          <FormControl fullWidth sx={{ mb: 3 }}>
            <TextField
              label="Spotify Playlist Link"
              fullWidth
              sx={{
                borderRadius: 1,
              }}
            />
          </FormControl>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              fontWeight: "bold",
            }}
            onClick={handleLoadSongs}
          >
            Load Playlist
          </Button>
          {/* Playlist status block */}
          <Box>
            {playlistItems && (
              <Alert severity="success" sx={{ backgroundColor: "transparent" }}>
                Playlist wurde erfolgreich geladen!
              </Alert>
            )}
            {isLoading && <CircularProgress />}
            {isError && (
              <Alert severity="error">
                Es ist ein Fehler aufgetreten. Versuche es später erneut
              </Alert>
            )}
          </Box>

          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              fontWeight: "bold",
            }}
            disabled
          >
            Spiel starten
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}

export default MainGamePage;
