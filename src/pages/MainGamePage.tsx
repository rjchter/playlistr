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
              textAlign: "center",
            }}
            color="text.secondary"
          >
            Spiele Hitster mit deiner eigenen Playlist!
          </Typography>
          <Box display={"flex"} flexDirection={"column"} gap={2} mt={2} mb={2}>
            <FormControl fullWidth>
              <TextField
                label="Spotify Playlist Link"
                fullWidth
                sx={{
                  borderRadius: 1,
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "primary.main", // Outline Farbe
                    },
                    "&:hover fieldset": {
                      borderColor: "primary.main", // Hover-Farbe für die Border
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "primary.main", // Fokus-Farbe für die Border
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "primary.main", // Label-Farbe
                  },
                  "& .MuiInputBase-input": {
                    color: "primary.main", // Value (Text) Farbe
                  },
                  "& .MuiInputBase-input::placeholder": {
                    color: "primary.main", // Placeholder-Farbe
                  },
                }}
                onChange={handlePlaylistLinkChange}
                value={playlistLink}
              />
            </FormControl>
            <FormControl fullWidth>
              <TextField
                label="Kategorie"
                fullWidth
                sx={{
                  borderRadius: 1,
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "primary.main", // Outline Farbe
                    },
                    "&:hover fieldset": {
                      borderColor: "primary.main", // Hover-Farbe für die Border
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "primary.main", // Fokus-Farbe für die Border
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "primary.main", // Label-Farbe
                  },
                  "& .MuiInputBase-input": {
                    color: "primary.main", // Value (Text) Farbe
                  },
                  "& .MuiInputBase-input::placeholder": {
                    color: "primary.main", // Placeholder-Farbe
                  },
                }}
                onChange={handleCategoryChange}
                value={category}
              />
            </FormControl>
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            gap={1.5}
            justifyContent={"center"}
            alignItems={"center"}
          >
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
            <Box>
              {playlistItems && (
                <Alert
                  severity="success"
                  sx={{ backgroundColor: "transparent" }}
                >
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
              disabled={!playlistItems}
            >
              Spiel starten
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default MainGamePage;
