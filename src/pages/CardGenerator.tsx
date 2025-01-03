import { Box, Button, CircularProgress, Container, FormControl, TextField, Typography } from "@mui/material"
import { useState } from "react";
import { useFetchPlaylistItems } from "../hooks/useFetchPlaylistItems";
import PdfCards from "../components/PdfCards";

function CardGenerator() {
    const [playlistLink, setPlaylistLink] = useState<string>("");
    const [category, setCategory] = useState<string>("");

    const { refetch, data: playlistItems, isError, isLoading } = useFetchPlaylistItems(playlistLink)

    console.log(playlistItems)

    const handlePlaylistLinkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPlaylistLink(e.target.value);
    };

    const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCategory(e.target.value);
    };

    const handleLoadSongs = async () => {
        await refetch()
    };

    return (
        <Box
            sx={{
                height: '100vh',
                background: `linear-gradient(to top, ${'#723cc9'}, ${'#fdf7ff'})`,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center',
                overflowY: "auto",
            }}
        >
            <Container maxWidth="sm" sx={{ textAlign: 'center', pt: 6 }}>
                <Typography
                    variant="h3"
                    sx={{
                        fontWeight: 'bold',
                        mb: 4,
                        color: 'primary.main',
                    }}
                >
                    Songkarten erstellen
                </Typography>

                <TextField
                    label="Link zu deiner Spotify Playlist"
                    value={playlistLink}
                    onChange={handlePlaylistLinkChange}
                    fullWidth
                    sx={{
                        mb: 4,
                        borderRadius: 1,
                    }}
                />

                <FormControl fullWidth sx={{ mb: 4 }}>
                    <TextField
                        label="Kategorie (Diese wird auf den Kärtchen sichtbar sein)"
                        value={category}
                        onChange={handleCategoryChange}
                        fullWidth
                        sx={{
                            mb: 4,
                            borderRadius: 1,
                        }}
                    />
                </FormControl>

                <Box sx={{ display: "flex", gap: 2 }}>
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{
                            fontWeight: 'bold',
                            width: '100%',
                        }}
                        onClick={handleLoadSongs}
                        disabled={!playlistLink || !category}
                    >
                        Songkarten generieren
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{
                            fontWeight: 'bold',
                            width: '100%',
                        }}
                        onClick={handleLoadSongs}
                        disabled={!playlistLink || !category}
                    >
                        PDF generieren
                    </Button>
                </Box>
            </Container>
            <Container>
                {/* <PlaylistGrid playlistItems={playlistItems} /> */}
                {playlistItems ? <PdfCards playlistItems={playlistItems} name={category} /> : null}
                {isLoading ? <CircularProgress /> : null}
                {isError ? <span>Die Playlist konnte nicht abgerufen werden.</span> : null}
            </Container>
        </Box>
    );
}

export default CardGenerator