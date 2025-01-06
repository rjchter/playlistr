import { useState } from "react";
import { Box, Button, Container } from "@mui/material";
import { useLocation, useNavigate } from "react-router";
import { PlaylistedTrack, Track } from "@spotify/web-api-ts-sdk";
import SongInfoCard from "./SongInfoCard.tsx";

function Game() {
  const location = useLocation();
  const navigate = useNavigate();
  const playlistItems: PlaylistedTrack<Track>[] = location.state?.playlistItems;
  const [card, setCard] = useState<PlaylistedTrack<Track>>();
  const [deck, setDeck] = useState<PlaylistedTrack<Track>[]>([
    ...playlistItems,
  ]);

  if (!playlistItems || playlistItems.length === 0) {
    navigate("/game");
    return null;
  }

  const drawCard = () => {
    const randomIndex = Math.floor(Math.random() * deck.length);
    const card = deck[randomIndex];

    setDeck(deck.filter((_, index) => index !== randomIndex));
    setCard(card);
  };

  return (
    <>
      {deck.length === 0 ? (
        <p>Keine Karten mehr im Deck!</p>
      ) : (
        <Button variant="contained" onClick={drawCard}>
          Karte ziehen
        </Button>
      )}
      {card && (
        <Container maxWidth="xs">
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: 280,
              textAlign: "center",
              transformStyle: "preserve-3d",
              transition: "transform 0.6s",
              transform: "rotateY(180deg)",
            }}
          >
            <SongInfoCard track={card.track} onClick={() => {}} />
          </Box>
        </Container>
      )}
    </>
  );
}

export default Game;
