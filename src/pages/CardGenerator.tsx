import {
  Box,
  Button,
  CircularProgress,
  Container,
  FormControl,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useFetchPlaylistItems } from "../hooks/useFetchPlaylistItems";
import PdfCards from "../components/PdfCards";

function CardGenerator() {
  const [playlistLink, setPlaylistLink] = useState<string>("");
  const [category, setCategory] = useState<string>("");

  const {
    refetch,
    data: playlistItems,
    isError,
    isLoading,
  } = useFetchPlaylistItems(playlistLink);

  console.log(playlistItems);

  const handlePlaylistLinkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlaylistLink(e.target.value);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(e.target.value);
  };

  const handleLoadSongs = async () => {
    await refetch();
  };

  return (
    <Box height={1} display={"flex"} flexDirection={"column"} gap={4} width={1}>
      <Container maxWidth="sm" sx={{ textAlign: "center" }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            color: "primary.main",
          }}
        >
          Songkarten erstellen
        </Typography>
        <Box display={"flex"} flexDirection={"column"} gap={2} mt={4} mb={2}>
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
        <Button
          variant="contained"
          color="primary"
          sx={{
            fontWeight: "bold",
            width: "100%",
          }}
          onClick={handleLoadSongs}
          disabled={!playlistLink || !category}
        >
          PDF generieren
        </Button>
      </Container>
      <Container sx={{ height: 1 }}>
        {playlistItems ? (
          <PdfCards playlistItems={playlistItems} name={category} />
        ) : null}
        {isLoading ? <CircularProgress /> : null}
        {isError ? (
          <span>Die Playlist konnte nicht abgerufen werden.</span>
        ) : null}
      </Container>
    </Box>
  );
}

export default CardGenerator;
