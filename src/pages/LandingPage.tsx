import { Container, Box, Typography, Button, useTheme } from "@mui/material";
import { Link } from "react-router";

function LandingPage() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background: `linear-gradient(to top, ${"#723cc9"}, ${"#fdf7ff"})`,
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container maxWidth="lg" sx={{ textAlign: "center" }}>
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
            Baue dein eigenes Musikspiel – Errate die Songs und hol dir den
            Sieg!
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
            Playlistr – die Weiterentwicklung des beliebten Spiels Hitster. Mit
            Playlistr kannst du deine eigene, personalisierte Version erstellen
            – perfekt abgestimmt auf deinen Musikgeschmack. Ein Spiel nur mit
            Oldies? Kein Problem! Oder eine Version, bei der die
            Erscheinungsjahre von Filmsoundtracks erraten werden? Alles ist
            möglich. Nutze den Kartengenerator, um im Handumdrehen eine
            druckbare Vorlage für deine Spotify-Playlist zu erstellen.
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "1.5rem",
            }}
          >
            <Button
              component={Link}
              to="/game"
              variant="contained"
              sx={{
                fontWeight: "bold",
              }}
            >
              Spielen (in Entwicklung)
            </Button>
            <Button
              component={Link}
              to="/create-cards"
              variant="text"
              sx={{
                color: "text.primary",
                fontWeight: "bold",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              Spielkärtchen erstellen
            </Button>
          </Box>
        </Container>
      </Box>
      <Box
        sx={{
          backgroundColor: theme.palette.background.paper,
          py: 2,
          textAlign: "center",
        }}
      >
        <Typography variant="body2" color="text.secondary">
          © 2024 Playlistr - Entwickelt von julius0205 🌟 Inspiriert von:{" "}
          <a href="https://github.com/effem">FMK</a>
        </Typography>
      </Box>
    </Box>
  );
}

export default LandingPage;
