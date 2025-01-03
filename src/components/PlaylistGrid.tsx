import { Grid, Card, CardContent, Typography, Box, IconButton } from "@mui/material";
import { PlaylistedTrack, Track } from "@spotify/web-api-ts-sdk";
import SongCardQRCode from "./SongCard";
import LoopIcon from '@mui/icons-material/Loop';
import { useState } from "react";

type PlaylistGridProps = {
    playlistItems?: PlaylistedTrack<Track>[]
}

function PlaylistGrid({ playlistItems }: PlaylistGridProps) {
    const [flippedCard, setFlippedCard] = useState<string | null>(null);

    const handleFlip = (id: string) => {
        setFlippedCard((prev) => (prev === id ? null : id));
    };

    return (
        <Grid container spacing={4} sx={{ mt: 4, mb: 4 }}>
            {playlistItems && playlistItems.length > 0 ? (
                playlistItems.map((item) => (
                    <Grid item xs={12} sm={6} md={4} key={item.track.id}>
                        <Box
                            sx={{
                                perspective: '1000px',
                                width: '100%',
                                height: '100%',
                                position: 'relative',
                            }}
                        >
                            <Box
                                sx={{
                                    position: 'relative',
                                    width: '100%',
                                    height: 280,
                                    textAlign: 'center',
                                    transformStyle: 'preserve-3d',
                                    transition: 'transform 0.6s',
                                    transform: flippedCard === item.track.id ? 'rotateY(180deg)' : 'none',
                                }}
                            >
                                {/* Front Side */}
                                <Card
                                    sx={{
                                        position: 'absolute',
                                        width: '100%',
                                        height: '100%',
                                        backfaceVisibility: 'hidden',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        backgroundColor: '#f5f5f5',
                                        borderRadius: 2,
                                    }}
                                >
                                    <SongCardQRCode track={item.track} />
                                    <IconButton
                                        onClick={() => handleFlip(item.track.id)}
                                        sx={{ position: 'absolute', bottom: 16, right: 16 }}
                                    >
                                        <LoopIcon />
                                    </IconButton>
                                </Card>

                                {/* Back Side */}
                                <Card
                                    sx={{
                                        position: 'absolute',
                                        width: '100%',
                                        height: '100%',
                                        backfaceVisibility: 'hidden',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        backgroundColor: 'background.default',
                                        borderRadius: 2,
                                        transform: 'rotateY(180deg)', // Rotated by default
                                    }}
                                >
                                    <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                                        <Typography
                                            variant="h6"
                                            color="text.secondary"
                                        >
                                            {item.track.name}
                                        </Typography>
                                        <Typography
                                            variant="h3"
                                            color="text.secondary"
                                            sx={{
                                                fontWeight: 'bold',
                                            }}
                                        >
                                            {item.track.album.release_date.split('-')[0]}
                                        </Typography>
                                        <Typography
                                            variant="h6"
                                            color="text.secondary"
                                        >
                                            {item.track.artists.map((artist) => artist.name).join(', ')}
                                        </Typography>
                                        <IconButton
                                            onClick={() => handleFlip(item.track.id)}
                                            sx={{ position: 'absolute', bottom: 16, right: 16 }}
                                        >
                                            <LoopIcon />
                                        </IconButton>
                                    </CardContent>
                                </Card>
                            </Box>
                        </Box>
                    </Grid>
                ))
            ) : null}
        </Grid>
    )
}

export default PlaylistGrid