import {
  Container,
  Box,
  Typography,
  Button,
  useTheme,
  Alert,
} from "@mui/material";
import { Link } from "react-router";
import { useSpotify } from "../hooks/useSpotify.ts";
import { Scopes } from "@spotify/web-api-ts-sdk";

function LandingPage() {
  const theme = useTheme();
  const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID as string;
  const redirectUri = import.meta.env.VITE_SPOTIFY_REDIRECT_URI as string;
  const { isAuthenticated, authorize } = useSpotify(
    clientId,
    redirectUri,
    Scopes.playlistRead
  );

  return (
    <>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingX: 2,
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              color: "#fff",
              mb: 4,
              fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
            }}
          >
            <span style={{ color: theme.palette.primary.main }}>Playlistr</span>
            .
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: "#fff",
              mb: 4,
              fontSize: { xs: "1.75rem", sm: "2.25rem", md: "3rem" },
            }}
          >
            Deine personalisierte Version von Hitster
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#fff",
              maxWidth: "600px",
              margin: "auto",
              mb: 6,
              fontSize: "1.125rem",
            }}
          >
            Erstelle mit Playlistr dein eigenes Musikspiel, perfekt abgestimmt
            auf deinen Geschmack. Nur Oldies? Kein Problem! Filmsoundtracks?
            Klar! Mit dem Kartengenerator gestaltest du im Handumdrehen eine
            druckbare Vorlage für deine Spotify-Playlist.
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "1rem",
              width: "100%",
            }}
          >
            {isAuthenticated ? (
              <>
                <Button
                  component={Link}
                  to="/game"
                  variant="contained"
                  sx={{
                    fontWeight: "bold",
                  }}
                >
                  Spielen
                </Button>
                <Button
                  component={Link}
                  to="/create-cards"
                  variant="text"
                  sx={{
                    color: "text.primary",
                    fontWeight: "bold",
                    textDecoration: "underline",
                  }}
                >
                  Spielkärtchen erstellen
                </Button>
              </>
            ) : null}
            <Box>
              {!isAuthenticated ? (
                <Alert severity="error" sx={{ backgroundColor: "transparent" }}>
                  Spotify ist nicht verbunden!
                </Alert>
              ) : (
                <Alert
                  severity="success"
                  sx={{ backgroundColor: "transparent" }}
                >
                  Spotify erfolgreich verbunden!
                </Alert>
              )}
              {!isAuthenticated && (
                <Button variant="contained" color="primary" onClick={authorize}>
                  Mit Spotify verbinden
                </Button>
              )}
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default LandingPage;
